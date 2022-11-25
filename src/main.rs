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
    let page = include_str!("../test_data/index.html");
    vm.set_global("page", page).unwrap();

    let use_readability = true;
    vm.set_global("useReadability", use_readability).unwrap();

    let script = r#"
        (function(){
            let title, excerpt;
            let images = [];

            if (useReadability) {
                let xhtml = html2xhtml(page);
                let dom = new JSDOMParser().parse(xhtml);
                let reader = new Readability(dom);
                let res = reader.parse();
                page = res.content;
                title = res.title;
                excerpt = res.excerpt;
            }

            let svc = new TurndownSvc({
                headingStyle: "atx",
                hr: "- - -",
                bulletListMarker: "-",
                codeBlockStyle: "fenced",
                linkStyle: "referenced",
                linkReferenceStyle: "full"
            });

            svc.addRule("img", {
              filter: "img",
              replacement: function(content, node) {
                var alt = clean(node.getAttribute("alt"));
                var title = clean(node.getAttribute("title"));
                var src = node.getAttribute("src") || "";
                var titlePart = title ? ' "' + title + '"' : "";

                if (src) {
                    images.push(src);
                    let idx = images.length;
                    return `![${alt || title || idx}][img${idx}]`;
                }

                return `![${alt || title || "no image"}]`;
              }
            });

            function clean(attr) {
              return attr ? attr.replace(/(\n+\s*)+/g, "\n") : "";
            }

            let content = svc.turndown(page);

            return {
                title,
                excerpt,
                content,
                images
            }
        })()
    "#;

    match vm.eval(script) {
        Ok(JsValue::Object(res)) => {
            // dbg!(res);
            print!("{}", res["content"].as_str().unwrap())
        }
        // Ok(res) => assert_eq!(
        //     res.as_str().unwrap(),
        //     "## Hello **world**\n\n### Intro\n\nthis is a short story"
        // ),
        Err(e) => eprintln!("{:?}", e),
        _ => unreachable!(),
    }
}
