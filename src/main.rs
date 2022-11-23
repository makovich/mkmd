use quick_js::{console::Level, Context, JsValue};

fn main() {
    let vm = Context::builder()
        .console(|level: Level, args: Vec<JsValue>| {
            eprintln!("{}: {:?}", level, args);
        })
        .build()
        .unwrap();

    let bundle = include_str!("./bundle.js");
    vm.eval(bundle).unwrap();

    let page = "<h1>Hello <b>world</b></h1><h3>Intro</h3><div><div><div><p>this is a short story</p></div></div></div>";
    vm.set_global("page", page).unwrap();

    let script = r#"
        let xhtml = html2xhtml(page);
        let dom = new JSDOMParser().parse(xhtml);
        let reader = new Readability(dom);
        let turndown = new TurndownSvc({ headingStyle: "atx" });
        turndown.turndown(reader.parse().content);
    "#;

    match vm.eval(script) {
        Ok(res) => assert_eq!(
            res.as_str().unwrap(),
            "## Hello **world**\n\n### Intro\n\nthis is a short story"
        ),
        Err(e) => eprintln!("{:?}", e),
    }
}
