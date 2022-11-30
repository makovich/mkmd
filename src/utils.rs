use crate::OPT;

use anyhow::{anyhow, bail, Result};
use url::Url;

use std::fs;

const OCTET_STREAM: &str = "application/octet-stream";

pub fn load_url(url: &Url) -> Result<(String, Vec<u8>)> {
    match url.scheme() {
        "file" => {
            OPT.verbose
                .then(|| eprintln!("mkmd: reading file://{}", url.path()));

            let path = url.to_file_path().map_err(|_| anyhow!("cannot get path"))?;

            let data = fs::read(&path)?;

            let mime = guess_mime(&data)
                .or_else(|| {
                    path.extension()
                        .and_then(|v| v.to_str())
                        .and_then(guess_mime_by_ext)
                })
                .unwrap_or(OCTET_STREAM.to_owned());

            Ok((mime, data))
        }
        "http" | "https" => {
            OPT.verbose
                .then(|| eprintln!("mkmd: requesting {}", url.as_str()));

            let resp = minreq::get(url.as_ref()).send()?;

            OPT.verbose
                .then(|| eprintln!("mkmd: {} {}", resp.status_code, resp.reason_phrase));

            if resp.status_code != 200 {
                bail!("Response status code: {}", resp.status_code);
            }

            let mime = resp
                .headers
                .get("content-type")
                .map(ToOwned::to_owned)
                .or_else(|| guess_mime(resp.as_bytes()))
                .unwrap_or(OCTET_STREAM.to_owned());

            let data = resp.into_bytes();

            OPT.verbose.then(|| eprintln!("mkmd: mime={mime}"));

            Ok((mime, data))
        }
        _ => Err(anyhow!("not supported URL scheme")),
    }
}

pub fn load_file(href: &str) -> Result<(String, Vec<u8>)> {
    Url::parse(href)
        .or_else(|_| OPT.get_base().join(href))
        .map(|u| load_url(&u))?
}

fn guess_mime(data: &[u8]) -> Option<String> {
    let mime = match data {
        &[0x47, 0x49, 0x46, 0x38, 0x37, 0x61, ..] | &[0x47, 0x49, 0x46, 0x38, 0x39, 0x61, ..] => {
            "image/gif"
        }
        &[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ..] => "image/png",
        &[0x00, 0x00, 0x01, 0x00, ..] => "image/x-icon",
        &[0xFF, 0xD8, 0xFF, ..] => "image/jpeg",
        &[0x42, 0x4D, ..] => "image/bmp",
        &[0x49, 0x49, 0x2A, 0x00, ..] | &[0x4D, 0x4D, 0x00, 0x2A, ..] => "image/tiff",

        _ => return None,
    };

    OPT.verbose.then(|| {
        eprintln!(
            "mkmd: magic guess {:?} -> {}",
            &data[0..=6]
                .iter()
                .map(|v| format!("{:02X}", v))
                .collect::<Vec<_>>()
                .join(" "),
            mime
        )
    });

    Some(mime.to_owned())
}

fn guess_mime_by_ext(ext: &str) -> Option<String> {
    let mime = mime_guess::from_ext(ext)
        .first_raw()
        .unwrap_or(OCTET_STREAM);

    OPT.verbose
        .then(|| eprintln!("mkmd: extension guess {:?} -> {}", ext, mime));

    Some(mime.to_owned())
}

pub fn make_data_uri(url: &str) -> Option<String> {
    if let Ok((mime, data)) = load_file(url) {
        Some(format!("data:{};base64,{}", mime, base64::encode(data)))
    } else {
        None
    }
}
