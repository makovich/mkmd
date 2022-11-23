// JSDOMParser isn't fully tolerant to syntax errors parser.
// It only understands valid XML input so the need
// to wrap any of it with html2xhtml helper function.
const parser = require('parse5');
const xmlser = require('xmlserializer');
const html2xhtml = html => xmlser.serializeToString(parser.parse(html));

const JSDOMParser = require('./readability/JSDOMParser.js');
const Readability = require('./readability/Readability.js');

// Have to be set before `require()` call
window = {};
window.DOMParser = function() {};
window.DOMParser.prototype.parseFromString = function(html) {
  return html == "" ? true : new JSDOMParser().parse(html2xhtml(html));
};

const TurndownSvc = require("turndown");
