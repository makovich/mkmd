# mkmd

Make Markdown from HTML web page.

## What is this?

Time to time I need to save some excerpts or full text articles from a web pages into my [personal wiki](https://makovi.ch/skrgfd/#notes-keeping-system) (which is a directory of plain markdown files basically). So to streamline this process this utility was born. It uses Mozilla's [Radability.js](https://github.com/mozilla/readability) to strip non-essential parts of a web page and leave just a making sense content. It runs from Rust with help of [QuickJS](https://bellard.org/quickjs/). Since CommonMark Spec is huge, Rust binary already uses JS VM and there is [Turndown](https://github.com/mixmark-io/turndown) that has proven itself for many years in converting HTML to Markdown, I decided to save some time and just use it. This tool, by default, downloads a page, makes it readable, converts HTML to Markdown and embed images as data URIs at the very end of the output file.

## Usage examples

```sh
# Download, save, and cat with bat
$ mkdm "https://buttondown.email/hillelwayne/archive/i-am-disappointed-by-dynamic-typing/" | tee dyntype.md | bat -lmd

# Select in Firefox part that you'd like to save, right click and `View Selection Source`, capy and...
$ pbpaste | mkmd > ~/wiki/excerpt.md

# Do not embed images and do not use Readability.js
$ xsel -b | mkmd --no-img --full --output full-article.md
```

## Install

Clone, `cd` and `cargo build`.

## Play

```sh
$ git clone --recurse https://github.com/makovich/mkmd
$ cd mkmd
$ npm install
$ git apply --directory=src/readability --apply ./src/0001-data-nodeValue-API-to-comply-with-domino.patch
$ npm run test
$ npm bundle
$ cargo run
```

## License

MIT/Unlicensed
