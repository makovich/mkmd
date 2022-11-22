// `Turndown` depends on `domino` as a DOM parser and tree implementation.
// `domino` has its own API that `Turndown` is aware of.
// In order to use less dependencies, JSDOMParser (as a Readability.js part)
// patched with data/nodeValue getters/setters.
const JSDOMParser = require('./readability/JSDOMParser.js');

// Underneath, `Turndown` checks presence of global DOMParser variable,
// so we must override it early. Before package's import.
// This test expected to be run in Node.js env.
global.window = {};

// First time it checks the presence, second time is the actual call.
window.shouldBeCalledTwice = 0;

window.DOMParser = function() {};
window.DOMParser.prototype.parseFromString = function(html) {
  window.shouldBeCalledTwice += 1;
  return html === "" ? true : new JSDOMParser().parse(html);
};

const TurndownSvc = require("turndown");
const res = new TurndownSvc({ headingStyle: "atx" }).turndown("<h1>Hello <b>world</b></h1>");

const assert = require('assert/strict');
assert.strictEqual(window.shouldBeCalledTwice, 2);
assert.strictEqual(res, "# Hello **world**");

console.log("ok");
