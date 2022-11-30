(function(){
    let title, excerpt;
    let images = [];

    if (useReadability) {
        console.log("Using Readability.js preprocessing")

        // global variable page
        let xhtml = html2xhtml(page);
        let dom = new JSDOMParser().parse(xhtml);
        let reader = new Readability(dom);
        let res = reader.parse();
        title = res.title || undefined;
        excerpt = res.excerpt || undefined;

        // global variable page
        // overwriting with simplified content
        page = res.content;
    }

    let svc = new TurndownSvc({
        headingStyle: "atx",
        hr: "- - -",
        bulletListMarker: "-",
        codeBlockStyle: "fenced",
        linkStyle: "referenced",
        linkReferenceStyle: "full"
    });

    if (embedImages) {
        console.log("Adding Turndown rule to base64 images")

        svc.addRule("img", {
          filter: "img",
          replacement: function(content, node) {
            var alt = clean(node.getAttribute("alt"));
            var title = clean(node.getAttribute("title"));
            var src = node.getAttribute("src") || "";

            if (src) {
                images.push(src);
                // idx starts from 1 not 0
                let idx = images.length;
                return `![${alt || title || src || idx}][img${idx}]`;
            }

            return `![${alt || title || "no image"}]`;
          }
        });
    }

    function clean(attr) {
      return attr ? attr.replace(/(\n+\s*)+/g, "\n") : "";
    }

    console.log("Creating markdown...")

    // global variable page
    let content = svc.turndown(page);

    return {
        title,
        excerpt,
        content,
        images
    }
})()
