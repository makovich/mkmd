mod utils;

use anyhow::{bail, Error, Result};
use atty::Stream::Stdin;
use human_panic::setup_panic;
use once_cell::sync::Lazy;
use quick_js::{Context, JsValue, ValueError};
use structopt::StructOpt;
use url::Url;

use std::env;
use std::io::{self, Read, Write};
use std::path::PathBuf;

static OPT: Lazy<Opt> = Lazy::new(Opt::from_args);

fn main() -> Result<()> {
    setup_panic!();

    let js = Context::builder()
        .console(|_, args| {
            if OPT.verbose {
                eprintln!("QuickJS: {args:?}");
            }
        })
        .build()?;

    js.eval(include_str!("./bundle.js"))?;

    js.set_global("page", get_input()?)?;
    js.set_global("useReadability", !OPT.full)?;
    js.set_global("embedImages", !OPT.no_img)?;

    let md = js.eval_as::<Markdown>(include_str!("./main.js"))?;

    let mut res = String::with_capacity(1024 * 1024 * 3 /* 3Mb */);

    if let Some(title) = md.title {
        res.push_str("# ");
        res.push_str(&title);
        res.push_str("\n\n");
    }

    if let Some(short) = md.short {
        res.push_str(&short);
        res.push_str("\n\n");
    }

    res.push_str(&md.content);
    res.push_str("\n\n");

    md.images
        .iter()
        .enumerate()
        .map(|(idx, url)| (idx + 1, url))
        .for_each(|(idx, url)| {
            if let Some(data_uri) = utils::make_data_uri(url) {
                res.push_str(&format!("[img{idx}]: {data_uri} \"{url}\"\n"));
            } else {
                res.push_str(&format!("[img{idx}]: {url}"));
            }
        });

    save(res)?;

    Ok(())
}

fn get_input() -> Result<String> {
    match OPT.input {
        Some(ref url) => {
            utils::load_url(url).and_then(|(_, data)| String::from_utf8(data).map_err(Error::msg))
        }
        None if atty::isnt(Stdin) => {
            let mut buf = String::new();
            io::stdin().read_to_string(&mut buf)?;
            Ok(buf)
        }
        None => bail!("No file to process provided."),
    }
}

fn save(md: String) -> io::Result<()> {
    match OPT.output {
        Some(ref path) => std::fs::write(path, md),
        None => io::stdout().lock().write_all(md.as_bytes()),
    }
}

#[derive(Debug)]
struct Markdown {
    content: String,
    images: Vec<String>,
    title: Option<String>,
    short: Option<String>,
}

impl TryFrom<JsValue> for Markdown {
    type Error = ValueError;

    fn try_from(value: JsValue) -> Result<Self, Self::Error> {
        if let JsValue::Object(mut o) = value {
            let content = o
                .remove("content")
                .and_then(|v| v.into_string())
                .ok_or(ValueError::Internal("Error while converting".to_string()))?;

            let title = o.remove("title").and_then(|v| v.into_string());
            let short = o.remove("short").and_then(|v| v.into_string());

            let images = if let Some(JsValue::Array(vec)) = o.remove("images") {
                vec.into_iter()
                    .map(|v| v.into_string().unwrap_or_default())
                    .collect()
            } else {
                Vec::default()
            };

            return Ok(Markdown {
                content,
                images,
                title,
                short,
            });
        }

        Err(ValueError::UnexpectedType)
    }
}

#[derive(Debug, StructOpt)]
#[structopt(name = env!("CARGO_BIN_NAME"), about)]
struct Opt {
    /// Input file or URL (index.html, https://example.com/path/)
    #[structopt(parse(from_str = Opt::parse_url))]
    input: Option<Url>,

    /// Output file, stdout if not present
    #[structopt(short = "o", long, parse(from_os_str))]
    output: Option<PathBuf>,

    /// Override base URL for all relative links
    #[structopt(short = "b", long, parse(from_str = Opt::parse_url))]
    base_url: Option<Url>,

    #[structopt(skip = Opt::read_cwd())]
    cwd: Url,

    /// Do not embedd images as data uris
    #[structopt(short = "I", long)]
    no_img: bool,

    /// Disable Readability.js preprocessing
    #[structopt(short = "f", long)]
    full: bool,

    /// Print diagnostic messages right to stderr
    #[structopt(short, long)]
    verbose: bool,
}

impl Opt {
    fn get_base(&self) -> Url {
        self.base_url
            .as_ref()
            .or(self.input.as_ref())
            .map(|u| u.join("./").unwrap_or(u.to_owned()))
            .unwrap_or(self.cwd.clone())
    }

    fn parse_url(input: &str) -> Url {
        Url::parse(input)
            .or_else(|_| Opt::read_cwd().join(input))
            .expect(&format!("Cannot parse FILE/URL: {}", input))
    }

    fn read_cwd() -> Url {
        env::current_dir()
            .map_err(|_| ())
            .and_then(Url::from_directory_path)
            .expect("Failed to read current directory")
    }
}
