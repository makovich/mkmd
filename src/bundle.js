var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/parse5/dist/cjs/common/unicode.js
var require_unicode = __commonJS({
  "node_modules/parse5/dist/cjs/common/unicode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUndefinedCodePoint = exports.isControlCodePoint = exports.getSurrogatePairCodePoint = exports.isSurrogatePair = exports.isSurrogate = exports.SEQUENCES = exports.CODE_POINTS = exports.REPLACEMENT_CHARACTER = void 0;
    var UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ]);
    exports.REPLACEMENT_CHARACTER = "\uFFFD";
    var CODE_POINTS;
    (function(CODE_POINTS2) {
      CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
      CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
      CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
      CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
      CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
      CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
      CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
      CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
      CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
      CODE_POINTS2[CODE_POINTS2["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
      CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
      CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
      CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
      CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
      CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
      CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
      CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
      CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
      CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
      CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
      CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
      CODE_POINTS2[CODE_POINTS2["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
    })(CODE_POINTS = exports.CODE_POINTS || (exports.CODE_POINTS = {}));
    exports.SEQUENCES = {
      DASH_DASH: "--",
      CDATA_START: "[CDATA[",
      DOCTYPE: "doctype",
      SCRIPT: "script",
      PUBLIC: "public",
      SYSTEM: "system"
    };
    function isSurrogate(cp) {
      return cp >= 55296 && cp <= 57343;
    }
    exports.isSurrogate = isSurrogate;
    function isSurrogatePair(cp) {
      return cp >= 56320 && cp <= 57343;
    }
    exports.isSurrogatePair = isSurrogatePair;
    function getSurrogatePairCodePoint(cp1, cp2) {
      return (cp1 - 55296) * 1024 + 9216 + cp2;
    }
    exports.getSurrogatePairCodePoint = getSurrogatePairCodePoint;
    function isControlCodePoint(cp) {
      return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
    }
    exports.isControlCodePoint = isControlCodePoint;
    function isUndefinedCodePoint(cp) {
      return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
    }
    exports.isUndefinedCodePoint = isUndefinedCodePoint;
  }
});

// node_modules/parse5/dist/cjs/common/error-codes.js
var require_error_codes = __commonJS({
  "node_modules/parse5/dist/cjs/common/error-codes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERR = void 0;
    var ERR;
    (function(ERR2) {
      ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
      ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
      ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
      ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
      ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
      ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
      ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
      ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
      ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
      ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
      ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
      ERR2["missingEndTagName"] = "missing-end-tag-name";
      ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
      ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
      ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
      ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
      ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
      ERR2["eofBeforeTagName"] = "eof-before-tag-name";
      ERR2["eofInTag"] = "eof-in-tag";
      ERR2["missingAttributeValue"] = "missing-attribute-value";
      ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
      ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
      ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
      ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
      ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
      ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
      ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
      ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
      ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
      ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
      ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
      ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
      ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
      ERR2["eofInDoctype"] = "eof-in-doctype";
      ERR2["nestedComment"] = "nested-comment";
      ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
      ERR2["eofInComment"] = "eof-in-comment";
      ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
      ERR2["eofInCdata"] = "eof-in-cdata";
      ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
      ERR2["nullCharacterReference"] = "null-character-reference";
      ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
      ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
      ERR2["controlCharacterReference"] = "control-character-reference";
      ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
      ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
      ERR2["missingDoctypeName"] = "missing-doctype-name";
      ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
      ERR2["duplicateAttribute"] = "duplicate-attribute";
      ERR2["nonConformingDoctype"] = "non-conforming-doctype";
      ERR2["missingDoctype"] = "missing-doctype";
      ERR2["misplacedDoctype"] = "misplaced-doctype";
      ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
      ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
      ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
      ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
      ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
      ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
      ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
      ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
    })(ERR = exports.ERR || (exports.ERR = {}));
  }
});

// node_modules/parse5/dist/cjs/tokenizer/preprocessor.js
var require_preprocessor = __commonJS({
  "node_modules/parse5/dist/cjs/tokenizer/preprocessor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Preprocessor = void 0;
    var unicode_js_1 = require_unicode();
    var error_codes_js_1 = require_error_codes();
    var DEFAULT_BUFFER_WATERLINE = 1 << 16;
    var Preprocessor = class {
      constructor(handler) {
        this.handler = handler;
        this.html = "";
        this.pos = -1;
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        this.lastErrOffset = -1;
      }
      get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
      }
      get offset() {
        return this.droppedBufferSize + this.pos;
      }
      getError(code) {
        const { line, col, offset } = this;
        return {
          code,
          startLine: line,
          endLine: line,
          startCol: col,
          endCol: col,
          startOffset: offset,
          endOffset: offset
        };
      }
      _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
          this.lastErrOffset = this.offset;
          this.handler.onParseError(this.getError(code));
        }
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.html.length - 1) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if ((0, unicode_js_1.isSurrogatePair)(nextCp)) {
            this.pos++;
            this._addGap();
            return (0, unicode_js_1.getSurrogatePairCodePoint)(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        this._err(error_codes_js_1.ERR.surrogateInInputStream);
        return cp;
      }
      willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
      }
      dropParsedChunk() {
        if (this.willDropParsedChunk()) {
          this.html = this.html.substring(this.pos);
          this.lineStartPos -= this.pos;
          this.droppedBufferSize += this.pos;
          this.pos = 0;
          this.lastGapPos = -2;
          this.gapStack.length = 0;
        }
      }
      write(chunk, isLastChunk) {
        if (this.html.length > 0) {
          this.html += chunk;
        } else {
          this.html = chunk;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
      }
      startsWith(pattern, caseSensitive) {
        if (this.pos + pattern.length > this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return false;
        }
        if (caseSensitive) {
          return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
          const cp = this.html.charCodeAt(this.pos + i) | 32;
          if (cp !== pattern.charCodeAt(i)) {
            return false;
          }
        }
        return true;
      }
      peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        const code = this.html.charCodeAt(pos);
        return code === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ? unicode_js_1.CODE_POINTS.LINE_FEED : code;
      }
      advance() {
        this.pos++;
        if (this.isEol) {
          this.isEol = false;
          this.line++;
          this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
          this.isEol = true;
          this.skipNextNewLine = true;
          return unicode_js_1.CODE_POINTS.LINE_FEED;
        }
        if (cp === unicode_js_1.CODE_POINTS.LINE_FEED) {
          this.isEol = true;
          if (this.skipNextNewLine) {
            this.line--;
            this.skipNextNewLine = false;
            this._addGap();
            return this.advance();
          }
        }
        this.skipNextNewLine = false;
        if ((0, unicode_js_1.isSurrogate)(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if ((0, unicode_js_1.isControlCodePoint)(cp)) {
          this._err(error_codes_js_1.ERR.controlCharacterInInputStream);
        } else if ((0, unicode_js_1.isUndefinedCodePoint)(cp)) {
          this._err(error_codes_js_1.ERR.noncharacterInInputStream);
        }
      }
      retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.isEol = false;
      }
    };
    exports.Preprocessor = Preprocessor;
  }
});

// node_modules/parse5/dist/cjs/common/token.js
var require_token = __commonJS({
  "node_modules/parse5/dist/cjs/common/token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTokenAttr = exports.TokenType = void 0;
    var TokenType;
    (function(TokenType2) {
      TokenType2[TokenType2["CHARACTER"] = 0] = "CHARACTER";
      TokenType2[TokenType2["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
      TokenType2[TokenType2["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
      TokenType2[TokenType2["START_TAG"] = 3] = "START_TAG";
      TokenType2[TokenType2["END_TAG"] = 4] = "END_TAG";
      TokenType2[TokenType2["COMMENT"] = 5] = "COMMENT";
      TokenType2[TokenType2["DOCTYPE"] = 6] = "DOCTYPE";
      TokenType2[TokenType2["EOF"] = 7] = "EOF";
      TokenType2[TokenType2["HIBERNATION"] = 8] = "HIBERNATION";
    })(TokenType = exports.TokenType || (exports.TokenType = {}));
    function getTokenAttr(token, attrName) {
      for (let i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName) {
          return token.attrs[i].value;
        }
      }
      return null;
    }
    exports.getTokenAttr = getTokenAttr;
  }
});

// node_modules/entities/lib/generated/decode-data-html.js
var require_decode_data_html = __commonJS({
  "node_modules/entities/lib/generated/decode-data-html.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Uint16Array(
      '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(c) {
        return c.charCodeAt(0);
      })
    );
  }
});

// node_modules/entities/lib/generated/decode-data-xml.js
var require_decode_data_xml = __commonJS({
  "node_modules/entities/lib/generated/decode-data-xml.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Uint16Array(
      "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(c) {
        return c.charCodeAt(0);
      })
    );
  }
});

// node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "node_modules/entities/lib/decode_codepoint.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.replaceCodePoint = exports.fromCodePoint = void 0;
    var decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    exports.fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
    function replaceCodePoint(codePoint) {
      var _a2;
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
      }
      return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
    }
    exports.replaceCodePoint = replaceCodePoint;
    function decodeCodePoint(codePoint) {
      return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
    }
    exports.default = decodeCodePoint;
  }
});

// node_modules/entities/lib/decode.js
var require_decode = __commonJS({
  "node_modules/entities/lib/decode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
    var decode_data_html_js_1 = __importDefault(require_decode_data_html());
    exports.htmlDecodeTree = decode_data_html_js_1.default;
    var decode_data_xml_js_1 = __importDefault(require_decode_data_xml());
    exports.xmlDecodeTree = decode_data_xml_js_1.default;
    var decode_codepoint_js_1 = __importDefault(require_decode_codepoint());
    exports.decodeCodePoint = decode_codepoint_js_1.default;
    var decode_codepoint_js_2 = require_decode_codepoint();
    Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.replaceCodePoint;
    } });
    Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.fromCodePoint;
    } });
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
    })(CharCodes || (CharCodes = {}));
    var BinTrieFlags;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
    function getDecoder(decodeTree) {
      return function decodeHTMLBinary(str, strict) {
        var ret = "";
        var lastIdx = 0;
        var strIdx = 0;
        while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
          ret += str.slice(lastIdx, strIdx);
          lastIdx = strIdx;
          strIdx += 1;
          if (str.charCodeAt(strIdx) === CharCodes.NUM) {
            var start = strIdx + 1;
            var base = 10;
            var cp = str.charCodeAt(start);
            if ((cp | CharCodes.To_LOWER_BIT) === CharCodes.LOWER_X) {
              base = 16;
              strIdx += 1;
              start += 1;
            }
            do
              cp = str.charCodeAt(++strIdx);
            while (cp >= CharCodes.ZERO && cp <= CharCodes.NINE || base === 16 && (cp | CharCodes.To_LOWER_BIT) >= CharCodes.LOWER_A && (cp | CharCodes.To_LOWER_BIT) <= CharCodes.LOWER_F);
            if (start !== strIdx) {
              var entity = str.substring(start, strIdx);
              var parsed = parseInt(entity, base);
              if (str.charCodeAt(strIdx) === CharCodes.SEMI) {
                strIdx += 1;
              } else if (strict) {
                continue;
              }
              ret += (0, decode_codepoint_js_1.default)(parsed);
              lastIdx = strIdx;
            }
            continue;
          }
          var resultIdx = 0;
          var excess = 1;
          var treeIdx = 0;
          var current = decodeTree[treeIdx];
          for (; strIdx < str.length; strIdx++, excess++) {
            treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
            if (treeIdx < 0)
              break;
            current = decodeTree[treeIdx];
            var masked = current & BinTrieFlags.VALUE_LENGTH;
            if (masked) {
              if (!strict || str.charCodeAt(strIdx) === CharCodes.SEMI) {
                resultIdx = treeIdx;
                excess = 0;
              }
              var valueLength = (masked >> 14) - 1;
              if (valueLength === 0)
                break;
              treeIdx += valueLength;
            }
          }
          if (resultIdx !== 0) {
            var valueLength = (decodeTree[resultIdx] & BinTrieFlags.VALUE_LENGTH) >> 14;
            ret += valueLength === 1 ? String.fromCharCode(decodeTree[resultIdx] & ~BinTrieFlags.VALUE_LENGTH) : valueLength === 2 ? String.fromCharCode(decodeTree[resultIdx + 1]) : String.fromCharCode(decodeTree[resultIdx + 1], decodeTree[resultIdx + 2]);
            lastIdx = strIdx - excess + 1;
          }
        }
        return ret + str.slice(lastIdx);
      };
    }
    function determineBranch(decodeTree, current, nodeIdx, char) {
      var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
      var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
      if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
      }
      if (jumpOffset) {
        var value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
      }
      var lo = nodeIdx;
      var hi = lo + branchCount - 1;
      while (lo <= hi) {
        var mid = lo + hi >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) {
          lo = mid + 1;
        } else if (midVal > char) {
          hi = mid - 1;
        } else {
          return decodeTree[mid + branchCount];
        }
      }
      return -1;
    }
    exports.determineBranch = determineBranch;
    var htmlDecoder = getDecoder(decode_data_html_js_1.default);
    var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
    function decodeHTML(str) {
      return htmlDecoder(str, false);
    }
    exports.decodeHTML = decodeHTML;
    function decodeHTMLStrict(str) {
      return htmlDecoder(str, true);
    }
    exports.decodeHTMLStrict = decodeHTMLStrict;
    function decodeXML(str) {
      return xmlDecoder(str, true);
    }
    exports.decodeXML = decodeXML;
  }
});

// node_modules/parse5/dist/cjs/common/html.js
var require_html = __commonJS({
  "node_modules/parse5/dist/cjs/common/html.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasUnescapedText = exports.isNumberedHeader = exports.SPECIAL_ELEMENTS = exports.getTagID = exports.TAG_ID = exports.TAG_NAMES = exports.DOCUMENT_MODE = exports.ATTRS = exports.NS = void 0;
    var NS;
    (function(NS2) {
      NS2["HTML"] = "http://www.w3.org/1999/xhtml";
      NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
      NS2["SVG"] = "http://www.w3.org/2000/svg";
      NS2["XLINK"] = "http://www.w3.org/1999/xlink";
      NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
      NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
    })(NS = exports.NS || (exports.NS = {}));
    var ATTRS;
    (function(ATTRS2) {
      ATTRS2["TYPE"] = "type";
      ATTRS2["ACTION"] = "action";
      ATTRS2["ENCODING"] = "encoding";
      ATTRS2["PROMPT"] = "prompt";
      ATTRS2["NAME"] = "name";
      ATTRS2["COLOR"] = "color";
      ATTRS2["FACE"] = "face";
      ATTRS2["SIZE"] = "size";
    })(ATTRS = exports.ATTRS || (exports.ATTRS = {}));
    var DOCUMENT_MODE;
    (function(DOCUMENT_MODE2) {
      DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
      DOCUMENT_MODE2["QUIRKS"] = "quirks";
      DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
    })(DOCUMENT_MODE = exports.DOCUMENT_MODE || (exports.DOCUMENT_MODE = {}));
    var TAG_NAMES;
    (function(TAG_NAMES2) {
      TAG_NAMES2["A"] = "a";
      TAG_NAMES2["ADDRESS"] = "address";
      TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
      TAG_NAMES2["APPLET"] = "applet";
      TAG_NAMES2["AREA"] = "area";
      TAG_NAMES2["ARTICLE"] = "article";
      TAG_NAMES2["ASIDE"] = "aside";
      TAG_NAMES2["B"] = "b";
      TAG_NAMES2["BASE"] = "base";
      TAG_NAMES2["BASEFONT"] = "basefont";
      TAG_NAMES2["BGSOUND"] = "bgsound";
      TAG_NAMES2["BIG"] = "big";
      TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
      TAG_NAMES2["BODY"] = "body";
      TAG_NAMES2["BR"] = "br";
      TAG_NAMES2["BUTTON"] = "button";
      TAG_NAMES2["CAPTION"] = "caption";
      TAG_NAMES2["CENTER"] = "center";
      TAG_NAMES2["CODE"] = "code";
      TAG_NAMES2["COL"] = "col";
      TAG_NAMES2["COLGROUP"] = "colgroup";
      TAG_NAMES2["DD"] = "dd";
      TAG_NAMES2["DESC"] = "desc";
      TAG_NAMES2["DETAILS"] = "details";
      TAG_NAMES2["DIALOG"] = "dialog";
      TAG_NAMES2["DIR"] = "dir";
      TAG_NAMES2["DIV"] = "div";
      TAG_NAMES2["DL"] = "dl";
      TAG_NAMES2["DT"] = "dt";
      TAG_NAMES2["EM"] = "em";
      TAG_NAMES2["EMBED"] = "embed";
      TAG_NAMES2["FIELDSET"] = "fieldset";
      TAG_NAMES2["FIGCAPTION"] = "figcaption";
      TAG_NAMES2["FIGURE"] = "figure";
      TAG_NAMES2["FONT"] = "font";
      TAG_NAMES2["FOOTER"] = "footer";
      TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
      TAG_NAMES2["FORM"] = "form";
      TAG_NAMES2["FRAME"] = "frame";
      TAG_NAMES2["FRAMESET"] = "frameset";
      TAG_NAMES2["H1"] = "h1";
      TAG_NAMES2["H2"] = "h2";
      TAG_NAMES2["H3"] = "h3";
      TAG_NAMES2["H4"] = "h4";
      TAG_NAMES2["H5"] = "h5";
      TAG_NAMES2["H6"] = "h6";
      TAG_NAMES2["HEAD"] = "head";
      TAG_NAMES2["HEADER"] = "header";
      TAG_NAMES2["HGROUP"] = "hgroup";
      TAG_NAMES2["HR"] = "hr";
      TAG_NAMES2["HTML"] = "html";
      TAG_NAMES2["I"] = "i";
      TAG_NAMES2["IMG"] = "img";
      TAG_NAMES2["IMAGE"] = "image";
      TAG_NAMES2["INPUT"] = "input";
      TAG_NAMES2["IFRAME"] = "iframe";
      TAG_NAMES2["KEYGEN"] = "keygen";
      TAG_NAMES2["LABEL"] = "label";
      TAG_NAMES2["LI"] = "li";
      TAG_NAMES2["LINK"] = "link";
      TAG_NAMES2["LISTING"] = "listing";
      TAG_NAMES2["MAIN"] = "main";
      TAG_NAMES2["MALIGNMARK"] = "malignmark";
      TAG_NAMES2["MARQUEE"] = "marquee";
      TAG_NAMES2["MATH"] = "math";
      TAG_NAMES2["MENU"] = "menu";
      TAG_NAMES2["META"] = "meta";
      TAG_NAMES2["MGLYPH"] = "mglyph";
      TAG_NAMES2["MI"] = "mi";
      TAG_NAMES2["MO"] = "mo";
      TAG_NAMES2["MN"] = "mn";
      TAG_NAMES2["MS"] = "ms";
      TAG_NAMES2["MTEXT"] = "mtext";
      TAG_NAMES2["NAV"] = "nav";
      TAG_NAMES2["NOBR"] = "nobr";
      TAG_NAMES2["NOFRAMES"] = "noframes";
      TAG_NAMES2["NOEMBED"] = "noembed";
      TAG_NAMES2["NOSCRIPT"] = "noscript";
      TAG_NAMES2["OBJECT"] = "object";
      TAG_NAMES2["OL"] = "ol";
      TAG_NAMES2["OPTGROUP"] = "optgroup";
      TAG_NAMES2["OPTION"] = "option";
      TAG_NAMES2["P"] = "p";
      TAG_NAMES2["PARAM"] = "param";
      TAG_NAMES2["PLAINTEXT"] = "plaintext";
      TAG_NAMES2["PRE"] = "pre";
      TAG_NAMES2["RB"] = "rb";
      TAG_NAMES2["RP"] = "rp";
      TAG_NAMES2["RT"] = "rt";
      TAG_NAMES2["RTC"] = "rtc";
      TAG_NAMES2["RUBY"] = "ruby";
      TAG_NAMES2["S"] = "s";
      TAG_NAMES2["SCRIPT"] = "script";
      TAG_NAMES2["SECTION"] = "section";
      TAG_NAMES2["SELECT"] = "select";
      TAG_NAMES2["SOURCE"] = "source";
      TAG_NAMES2["SMALL"] = "small";
      TAG_NAMES2["SPAN"] = "span";
      TAG_NAMES2["STRIKE"] = "strike";
      TAG_NAMES2["STRONG"] = "strong";
      TAG_NAMES2["STYLE"] = "style";
      TAG_NAMES2["SUB"] = "sub";
      TAG_NAMES2["SUMMARY"] = "summary";
      TAG_NAMES2["SUP"] = "sup";
      TAG_NAMES2["TABLE"] = "table";
      TAG_NAMES2["TBODY"] = "tbody";
      TAG_NAMES2["TEMPLATE"] = "template";
      TAG_NAMES2["TEXTAREA"] = "textarea";
      TAG_NAMES2["TFOOT"] = "tfoot";
      TAG_NAMES2["TD"] = "td";
      TAG_NAMES2["TH"] = "th";
      TAG_NAMES2["THEAD"] = "thead";
      TAG_NAMES2["TITLE"] = "title";
      TAG_NAMES2["TR"] = "tr";
      TAG_NAMES2["TRACK"] = "track";
      TAG_NAMES2["TT"] = "tt";
      TAG_NAMES2["U"] = "u";
      TAG_NAMES2["UL"] = "ul";
      TAG_NAMES2["SVG"] = "svg";
      TAG_NAMES2["VAR"] = "var";
      TAG_NAMES2["WBR"] = "wbr";
      TAG_NAMES2["XMP"] = "xmp";
    })(TAG_NAMES = exports.TAG_NAMES || (exports.TAG_NAMES = {}));
    var TAG_ID;
    (function(TAG_ID2) {
      TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
      TAG_ID2[TAG_ID2["A"] = 1] = "A";
      TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
      TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
      TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
      TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
      TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
      TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
      TAG_ID2[TAG_ID2["B"] = 8] = "B";
      TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
      TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
      TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
      TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
      TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
      TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
      TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
      TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
      TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
      TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
      TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
      TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
      TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
      TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
      TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
      TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
      TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
      TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
      TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
      TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
      TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
      TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
      TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
      TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
      TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
      TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
      TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
      TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
      TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
      TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
      TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
      TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
      TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
      TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
      TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
      TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
      TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
      TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
      TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
      TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
      TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
      TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
      TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
      TAG_ID2[TAG_ID2["I"] = 52] = "I";
      TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
      TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
      TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
      TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
      TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
      TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
      TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
      TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
      TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
      TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
      TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
      TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
      TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
      TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
      TAG_ID2[TAG_ID2["META"] = 67] = "META";
      TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
      TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
      TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
      TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
      TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
      TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
      TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
      TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
      TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
      TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
      TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
      TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
      TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
      TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
      TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
      TAG_ID2[TAG_ID2["P"] = 83] = "P";
      TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
      TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
      TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
      TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
      TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
      TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
      TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
      TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
      TAG_ID2[TAG_ID2["S"] = 92] = "S";
      TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
      TAG_ID2[TAG_ID2["SECTION"] = 94] = "SECTION";
      TAG_ID2[TAG_ID2["SELECT"] = 95] = "SELECT";
      TAG_ID2[TAG_ID2["SOURCE"] = 96] = "SOURCE";
      TAG_ID2[TAG_ID2["SMALL"] = 97] = "SMALL";
      TAG_ID2[TAG_ID2["SPAN"] = 98] = "SPAN";
      TAG_ID2[TAG_ID2["STRIKE"] = 99] = "STRIKE";
      TAG_ID2[TAG_ID2["STRONG"] = 100] = "STRONG";
      TAG_ID2[TAG_ID2["STYLE"] = 101] = "STYLE";
      TAG_ID2[TAG_ID2["SUB"] = 102] = "SUB";
      TAG_ID2[TAG_ID2["SUMMARY"] = 103] = "SUMMARY";
      TAG_ID2[TAG_ID2["SUP"] = 104] = "SUP";
      TAG_ID2[TAG_ID2["TABLE"] = 105] = "TABLE";
      TAG_ID2[TAG_ID2["TBODY"] = 106] = "TBODY";
      TAG_ID2[TAG_ID2["TEMPLATE"] = 107] = "TEMPLATE";
      TAG_ID2[TAG_ID2["TEXTAREA"] = 108] = "TEXTAREA";
      TAG_ID2[TAG_ID2["TFOOT"] = 109] = "TFOOT";
      TAG_ID2[TAG_ID2["TD"] = 110] = "TD";
      TAG_ID2[TAG_ID2["TH"] = 111] = "TH";
      TAG_ID2[TAG_ID2["THEAD"] = 112] = "THEAD";
      TAG_ID2[TAG_ID2["TITLE"] = 113] = "TITLE";
      TAG_ID2[TAG_ID2["TR"] = 114] = "TR";
      TAG_ID2[TAG_ID2["TRACK"] = 115] = "TRACK";
      TAG_ID2[TAG_ID2["TT"] = 116] = "TT";
      TAG_ID2[TAG_ID2["U"] = 117] = "U";
      TAG_ID2[TAG_ID2["UL"] = 118] = "UL";
      TAG_ID2[TAG_ID2["SVG"] = 119] = "SVG";
      TAG_ID2[TAG_ID2["VAR"] = 120] = "VAR";
      TAG_ID2[TAG_ID2["WBR"] = 121] = "WBR";
      TAG_ID2[TAG_ID2["XMP"] = 122] = "XMP";
    })(TAG_ID = exports.TAG_ID || (exports.TAG_ID = {}));
    var TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
      [TAG_NAMES.A, TAG_ID.A],
      [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
      [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
      [TAG_NAMES.APPLET, TAG_ID.APPLET],
      [TAG_NAMES.AREA, TAG_ID.AREA],
      [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
      [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
      [TAG_NAMES.B, TAG_ID.B],
      [TAG_NAMES.BASE, TAG_ID.BASE],
      [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
      [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
      [TAG_NAMES.BIG, TAG_ID.BIG],
      [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
      [TAG_NAMES.BODY, TAG_ID.BODY],
      [TAG_NAMES.BR, TAG_ID.BR],
      [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
      [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
      [TAG_NAMES.CENTER, TAG_ID.CENTER],
      [TAG_NAMES.CODE, TAG_ID.CODE],
      [TAG_NAMES.COL, TAG_ID.COL],
      [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
      [TAG_NAMES.DD, TAG_ID.DD],
      [TAG_NAMES.DESC, TAG_ID.DESC],
      [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
      [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
      [TAG_NAMES.DIR, TAG_ID.DIR],
      [TAG_NAMES.DIV, TAG_ID.DIV],
      [TAG_NAMES.DL, TAG_ID.DL],
      [TAG_NAMES.DT, TAG_ID.DT],
      [TAG_NAMES.EM, TAG_ID.EM],
      [TAG_NAMES.EMBED, TAG_ID.EMBED],
      [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
      [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
      [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
      [TAG_NAMES.FONT, TAG_ID.FONT],
      [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
      [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
      [TAG_NAMES.FORM, TAG_ID.FORM],
      [TAG_NAMES.FRAME, TAG_ID.FRAME],
      [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
      [TAG_NAMES.H1, TAG_ID.H1],
      [TAG_NAMES.H2, TAG_ID.H2],
      [TAG_NAMES.H3, TAG_ID.H3],
      [TAG_NAMES.H4, TAG_ID.H4],
      [TAG_NAMES.H5, TAG_ID.H5],
      [TAG_NAMES.H6, TAG_ID.H6],
      [TAG_NAMES.HEAD, TAG_ID.HEAD],
      [TAG_NAMES.HEADER, TAG_ID.HEADER],
      [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
      [TAG_NAMES.HR, TAG_ID.HR],
      [TAG_NAMES.HTML, TAG_ID.HTML],
      [TAG_NAMES.I, TAG_ID.I],
      [TAG_NAMES.IMG, TAG_ID.IMG],
      [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
      [TAG_NAMES.INPUT, TAG_ID.INPUT],
      [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
      [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
      [TAG_NAMES.LABEL, TAG_ID.LABEL],
      [TAG_NAMES.LI, TAG_ID.LI],
      [TAG_NAMES.LINK, TAG_ID.LINK],
      [TAG_NAMES.LISTING, TAG_ID.LISTING],
      [TAG_NAMES.MAIN, TAG_ID.MAIN],
      [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
      [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
      [TAG_NAMES.MATH, TAG_ID.MATH],
      [TAG_NAMES.MENU, TAG_ID.MENU],
      [TAG_NAMES.META, TAG_ID.META],
      [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
      [TAG_NAMES.MI, TAG_ID.MI],
      [TAG_NAMES.MO, TAG_ID.MO],
      [TAG_NAMES.MN, TAG_ID.MN],
      [TAG_NAMES.MS, TAG_ID.MS],
      [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
      [TAG_NAMES.NAV, TAG_ID.NAV],
      [TAG_NAMES.NOBR, TAG_ID.NOBR],
      [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
      [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
      [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
      [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
      [TAG_NAMES.OL, TAG_ID.OL],
      [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
      [TAG_NAMES.OPTION, TAG_ID.OPTION],
      [TAG_NAMES.P, TAG_ID.P],
      [TAG_NAMES.PARAM, TAG_ID.PARAM],
      [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
      [TAG_NAMES.PRE, TAG_ID.PRE],
      [TAG_NAMES.RB, TAG_ID.RB],
      [TAG_NAMES.RP, TAG_ID.RP],
      [TAG_NAMES.RT, TAG_ID.RT],
      [TAG_NAMES.RTC, TAG_ID.RTC],
      [TAG_NAMES.RUBY, TAG_ID.RUBY],
      [TAG_NAMES.S, TAG_ID.S],
      [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
      [TAG_NAMES.SECTION, TAG_ID.SECTION],
      [TAG_NAMES.SELECT, TAG_ID.SELECT],
      [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
      [TAG_NAMES.SMALL, TAG_ID.SMALL],
      [TAG_NAMES.SPAN, TAG_ID.SPAN],
      [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
      [TAG_NAMES.STRONG, TAG_ID.STRONG],
      [TAG_NAMES.STYLE, TAG_ID.STYLE],
      [TAG_NAMES.SUB, TAG_ID.SUB],
      [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
      [TAG_NAMES.SUP, TAG_ID.SUP],
      [TAG_NAMES.TABLE, TAG_ID.TABLE],
      [TAG_NAMES.TBODY, TAG_ID.TBODY],
      [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
      [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
      [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
      [TAG_NAMES.TD, TAG_ID.TD],
      [TAG_NAMES.TH, TAG_ID.TH],
      [TAG_NAMES.THEAD, TAG_ID.THEAD],
      [TAG_NAMES.TITLE, TAG_ID.TITLE],
      [TAG_NAMES.TR, TAG_ID.TR],
      [TAG_NAMES.TRACK, TAG_ID.TRACK],
      [TAG_NAMES.TT, TAG_ID.TT],
      [TAG_NAMES.U, TAG_ID.U],
      [TAG_NAMES.UL, TAG_ID.UL],
      [TAG_NAMES.SVG, TAG_ID.SVG],
      [TAG_NAMES.VAR, TAG_ID.VAR],
      [TAG_NAMES.WBR, TAG_ID.WBR],
      [TAG_NAMES.XMP, TAG_ID.XMP]
    ]);
    function getTagID(tagName) {
      var _a;
      return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
    }
    exports.getTagID = getTagID;
    var $ = TAG_ID;
    exports.SPECIAL_ELEMENTS = {
      [NS.HTML]: /* @__PURE__ */ new Set([
        $.ADDRESS,
        $.APPLET,
        $.AREA,
        $.ARTICLE,
        $.ASIDE,
        $.BASE,
        $.BASEFONT,
        $.BGSOUND,
        $.BLOCKQUOTE,
        $.BODY,
        $.BR,
        $.BUTTON,
        $.CAPTION,
        $.CENTER,
        $.COL,
        $.COLGROUP,
        $.DD,
        $.DETAILS,
        $.DIR,
        $.DIV,
        $.DL,
        $.DT,
        $.EMBED,
        $.FIELDSET,
        $.FIGCAPTION,
        $.FIGURE,
        $.FOOTER,
        $.FORM,
        $.FRAME,
        $.FRAMESET,
        $.H1,
        $.H2,
        $.H3,
        $.H4,
        $.H5,
        $.H6,
        $.HEAD,
        $.HEADER,
        $.HGROUP,
        $.HR,
        $.HTML,
        $.IFRAME,
        $.IMG,
        $.INPUT,
        $.LI,
        $.LINK,
        $.LISTING,
        $.MAIN,
        $.MARQUEE,
        $.MENU,
        $.META,
        $.NAV,
        $.NOEMBED,
        $.NOFRAMES,
        $.NOSCRIPT,
        $.OBJECT,
        $.OL,
        $.P,
        $.PARAM,
        $.PLAINTEXT,
        $.PRE,
        $.SCRIPT,
        $.SECTION,
        $.SELECT,
        $.SOURCE,
        $.STYLE,
        $.SUMMARY,
        $.TABLE,
        $.TBODY,
        $.TD,
        $.TEMPLATE,
        $.TEXTAREA,
        $.TFOOT,
        $.TH,
        $.THEAD,
        $.TITLE,
        $.TR,
        $.TRACK,
        $.UL,
        $.WBR,
        $.XMP
      ]),
      [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
      [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
      [NS.XLINK]: /* @__PURE__ */ new Set(),
      [NS.XML]: /* @__PURE__ */ new Set(),
      [NS.XMLNS]: /* @__PURE__ */ new Set()
    };
    function isNumberedHeader(tn) {
      return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
    }
    exports.isNumberedHeader = isNumberedHeader;
    var UNESCAPED_TEXT = /* @__PURE__ */ new Set([
      TAG_NAMES.STYLE,
      TAG_NAMES.SCRIPT,
      TAG_NAMES.XMP,
      TAG_NAMES.IFRAME,
      TAG_NAMES.NOEMBED,
      TAG_NAMES.NOFRAMES,
      TAG_NAMES.PLAINTEXT
    ]);
    function hasUnescapedText(tn, scriptingEnabled) {
      return UNESCAPED_TEXT.has(tn) || scriptingEnabled && tn === TAG_NAMES.NOSCRIPT;
    }
    exports.hasUnescapedText = hasUnescapedText;
  }
});

// node_modules/parse5/dist/cjs/tokenizer/index.js
var require_tokenizer = __commonJS({
  "node_modules/parse5/dist/cjs/tokenizer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokenizer = exports.TokenizerMode = void 0;
    var preprocessor_js_1 = require_preprocessor();
    var unicode_js_1 = require_unicode();
    var token_js_1 = require_token();
    var decode_js_1 = require_decode();
    var error_codes_js_1 = require_error_codes();
    var html_js_1 = require_html();
    var C1_CONTROLS_REFERENCE_REPLACEMENTS = /* @__PURE__ */ new Map([
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    var State;
    (function(State2) {
      State2[State2["DATA"] = 0] = "DATA";
      State2[State2["RCDATA"] = 1] = "RCDATA";
      State2[State2["RAWTEXT"] = 2] = "RAWTEXT";
      State2[State2["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
      State2[State2["PLAINTEXT"] = 4] = "PLAINTEXT";
      State2[State2["TAG_OPEN"] = 5] = "TAG_OPEN";
      State2[State2["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
      State2[State2["TAG_NAME"] = 7] = "TAG_NAME";
      State2[State2["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
      State2[State2["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
      State2[State2["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
      State2[State2["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
      State2[State2["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
      State2[State2["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
      State2[State2["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
      State2[State2["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
      State2[State2["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
      State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
      State2[State2["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
      State2[State2["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
      State2[State2["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
      State2[State2["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
      State2[State2["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
      State2[State2["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
      State2[State2["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
      State2[State2["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
      State2[State2["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
      State2[State2["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
      State2[State2["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
      State2[State2["COMMENT_START"] = 42] = "COMMENT_START";
      State2[State2["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
      State2[State2["COMMENT"] = 44] = "COMMENT";
      State2[State2["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
      State2[State2["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
      State2[State2["COMMENT_END"] = 50] = "COMMENT_END";
      State2[State2["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
      State2[State2["DOCTYPE"] = 52] = "DOCTYPE";
      State2[State2["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
      State2[State2["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
      State2[State2["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
      State2[State2["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
      State2[State2["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
      State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
      State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
      State2[State2["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
      State2[State2["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
      State2[State2["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
      State2[State2["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
      State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
      State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
      State2[State2["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
      State2[State2["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
      State2[State2["CDATA_SECTION"] = 68] = "CDATA_SECTION";
      State2[State2["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
      State2[State2["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
      State2[State2["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
      State2[State2["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
      State2[State2["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
      State2[State2["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
      State2[State2["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
      State2[State2["HEXADEMICAL_CHARACTER_REFERENCE"] = 76] = "HEXADEMICAL_CHARACTER_REFERENCE";
      State2[State2["DECIMAL_CHARACTER_REFERENCE"] = 77] = "DECIMAL_CHARACTER_REFERENCE";
      State2[State2["NUMERIC_CHARACTER_REFERENCE_END"] = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
    })(State || (State = {}));
    exports.TokenizerMode = {
      DATA: State.DATA,
      RCDATA: State.RCDATA,
      RAWTEXT: State.RAWTEXT,
      SCRIPT_DATA: State.SCRIPT_DATA,
      PLAINTEXT: State.PLAINTEXT,
      CDATA_SECTION: State.CDATA_SECTION
    };
    function isAsciiDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.DIGIT_0 && cp <= unicode_js_1.CODE_POINTS.DIGIT_9;
    }
    function isAsciiUpper(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_Z;
    }
    function isAsciiLetter(cp) {
      return isAsciiLower(cp) || isAsciiUpper(cp);
    }
    function isAsciiAlphaNumeric(cp) {
      return isAsciiLetter(cp) || isAsciiDigit(cp);
    }
    function isAsciiUpperHexDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_F;
    }
    function isAsciiLowerHexDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_F;
    }
    function isAsciiHexDigit(cp) {
      return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
    }
    function toAsciiLower(cp) {
      return cp + 32;
    }
    function isWhitespace(cp) {
      return cp === unicode_js_1.CODE_POINTS.SPACE || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.TABULATION || cp === unicode_js_1.CODE_POINTS.FORM_FEED;
    }
    function isEntityInAttributeInvalidEnd(nextCp) {
      return nextCp === unicode_js_1.CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
    }
    function isScriptDataDoubleEscapeSequenceEnd(cp) {
      return isWhitespace(cp) || cp === unicode_js_1.CODE_POINTS.SOLIDUS || cp === unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN;
    }
    var Tokenizer = class {
      constructor(options, handler) {
        this.options = options;
        this.handler = handler;
        this.paused = false;
        this.inLoop = false;
        this.inForeignNode = false;
        this.lastStartTagName = "";
        this.active = false;
        this.state = State.DATA;
        this.returnState = State.DATA;
        this.charRefCode = -1;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = { name: "", value: "" };
        this.preprocessor = new preprocessor_js_1.Preprocessor(handler);
        this.currentLocation = this.getCurrentLocation(-1);
      }
      _err(code) {
        var _a, _b;
        (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code));
      }
      getCurrentLocation(offset) {
        if (!this.options.sourceCodeLocationInfo) {
          return null;
        }
        return {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - offset,
          startOffset: this.preprocessor.offset - offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _runParsingLoop() {
        if (this.inLoop)
          return;
        this.inLoop = true;
        while (this.active && !this.paused) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this._callState(cp);
          }
        }
        this.inLoop = false;
      }
      pause() {
        this.paused = true;
      }
      resume(writeCallback) {
        if (!this.paused) {
          throw new Error("Parser was already resumed");
        }
        this.paused = false;
        if (this.inLoop)
          return;
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      write(chunk, isLastChunk, writeCallback) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
        this._runParsingLoop();
      }
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          this._unconsume(this.consumedAfterSnapshot);
          this.active = false;
          return true;
        }
        return false;
      }
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _unconsume(count) {
        this.consumedAfterSnapshot -= count;
        this.preprocessor.retreat(count);
      }
      _reconsumeInState(state, cp) {
        this.state = state;
        this._callState(cp);
      }
      _advanceBy(count) {
        this.consumedAfterSnapshot += count;
        for (let i = 0; i < count; i++) {
          this.preprocessor.advance();
        }
      }
      _consumeSequenceIfMatch(pattern, caseSensitive) {
        if (this.preprocessor.startsWith(pattern, caseSensitive)) {
          this._advanceBy(pattern.length - 1);
          return true;
        }
        return false;
      }
      _createStartTagToken() {
        this.currentToken = {
          type: token_js_1.TokenType.START_TAG,
          tagName: "",
          tagID: html_js_1.TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(1)
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: token_js_1.TokenType.END_TAG,
          tagName: "",
          tagID: html_js_1.TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(2)
        };
      }
      _createCommentToken(offset) {
        this.currentToken = {
          type: token_js_1.TokenType.COMMENT,
          data: "",
          location: this.getCurrentLocation(offset)
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: token_js_1.TokenType.DOCTYPE,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null,
          location: this.currentLocation
        };
      }
      _createCharacterToken(type, chars) {
        this.currentCharacterToken = {
          type,
          chars,
          location: this.currentLocation
        };
      }
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ""
        };
        this.currentLocation = this.getCurrentLocation(0);
      }
      _leaveAttrName() {
        var _a;
        var _b;
        const token = this.currentToken;
        if ((0, token_js_1.getTokenAttr)(token, this.currentAttr.name) === null) {
          token.attrs.push(this.currentAttr);
          if (token.location && this.currentLocation) {
            const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = /* @__PURE__ */ Object.create(null);
            attrLocations[this.currentAttr.name] = this.currentLocation;
            this._leaveAttrValue();
          }
        } else {
          this._err(error_codes_js_1.ERR.duplicateAttribute);
        }
      }
      _leaveAttrValue() {
        if (this.currentLocation) {
          this.currentLocation.endLine = this.preprocessor.line;
          this.currentLocation.endCol = this.preprocessor.col;
          this.currentLocation.endOffset = this.preprocessor.offset;
        }
      }
      prepareToken(ct) {
        this._emitCurrentCharacterToken(ct.location);
        this.currentToken = null;
        if (ct.location) {
          ct.location.endLine = this.preprocessor.line;
          ct.location.endCol = this.preprocessor.col + 1;
          ct.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
      }
      emitCurrentTagToken() {
        const ct = this.currentToken;
        this.prepareToken(ct);
        ct.tagID = (0, html_js_1.getTagID)(ct.tagName);
        if (ct.type === token_js_1.TokenType.START_TAG) {
          this.lastStartTagName = ct.tagName;
          this.handler.onStartTag(ct);
        } else {
          if (ct.attrs.length > 0) {
            this._err(error_codes_js_1.ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(error_codes_js_1.ERR.endTagWithTrailingSolidus);
          }
          this.handler.onEndTag(ct);
        }
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentComment(ct) {
        this.prepareToken(ct);
        this.handler.onComment(ct);
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentDoctype(ct) {
        this.prepareToken(ct);
        this.handler.onDoctype(ct);
        this.preprocessor.dropParsedChunk();
      }
      _emitCurrentCharacterToken(nextLocation) {
        if (this.currentCharacterToken) {
          if (nextLocation && this.currentCharacterToken.location) {
            this.currentCharacterToken.location.endLine = nextLocation.startLine;
            this.currentCharacterToken.location.endCol = nextLocation.startCol;
            this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
          }
          switch (this.currentCharacterToken.type) {
            case token_js_1.TokenType.CHARACTER: {
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            }
            case token_js_1.TokenType.NULL_CHARACTER: {
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
              this.handler.onWhitespaceCharacter(this.currentCharacterToken);
              break;
            }
          }
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        const location = this.getCurrentLocation(0);
        if (location) {
          location.endLine = location.startLine;
          location.endCol = location.startCol;
          location.endOffset = location.startOffset;
        }
        this._emitCurrentCharacterToken(location);
        this.handler.onEof({ type: token_js_1.TokenType.EOF, location });
        this.active = false;
      }
      _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken) {
          if (this.currentCharacterToken.type !== type) {
            this.currentLocation = this.getCurrentLocation(0);
            this._emitCurrentCharacterToken(this.currentLocation);
            this.preprocessor.dropParsedChunk();
          } else {
            this.currentCharacterToken.chars += ch;
            return;
          }
        }
        this._createCharacterToken(type, ch);
      }
      _emitCodePoint(cp) {
        const type = isWhitespace(cp) ? token_js_1.TokenType.WHITESPACE_CHARACTER : cp === unicode_js_1.CODE_POINTS.NULL ? token_js_1.TokenType.NULL_CHARACTER : token_js_1.TokenType.CHARACTER;
        this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
      }
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(token_js_1.TokenType.CHARACTER, ch);
      }
      _matchNamedCharacterReference(cp) {
        let result = null;
        let excess = 0;
        let withoutSemicolon = false;
        for (let i = 0, current = decode_js_1.htmlDecodeTree[0]; i >= 0; cp = this._consume()) {
          i = (0, decode_js_1.determineBranch)(decode_js_1.htmlDecodeTree, current, i + 1, cp);
          if (i < 0)
            break;
          excess += 1;
          current = decode_js_1.htmlDecodeTree[i];
          const masked = current & decode_js_1.BinTrieFlags.VALUE_LENGTH;
          if (masked) {
            const valueLength = (masked >> 14) - 1;
            if (cp !== unicode_js_1.CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
              result = [unicode_js_1.CODE_POINTS.AMPERSAND];
              i += valueLength;
            } else {
              result = valueLength === 0 ? [decode_js_1.htmlDecodeTree[i] & ~decode_js_1.BinTrieFlags.VALUE_LENGTH] : valueLength === 1 ? [decode_js_1.htmlDecodeTree[++i]] : [decode_js_1.htmlDecodeTree[++i], decode_js_1.htmlDecodeTree[++i]];
              excess = 0;
              withoutSemicolon = cp !== unicode_js_1.CODE_POINTS.SEMICOLON;
            }
            if (valueLength === 0) {
              this._consume();
              break;
            }
          }
        }
        this._unconsume(excess);
        if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
          this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
        }
        this._unconsume(1);
        return result;
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
      }
      _flushCodePointConsumedAsCharacterReference(cp) {
        if (this._isCharacterReferenceInAttribute()) {
          this.currentAttr.value += String.fromCodePoint(cp);
        } else {
          this._emitCodePoint(cp);
        }
      }
      _callState(cp) {
        switch (this.state) {
          case State.DATA: {
            this._stateData(cp);
            break;
          }
          case State.RCDATA: {
            this._stateRcdata(cp);
            break;
          }
          case State.RAWTEXT: {
            this._stateRawtext(cp);
            break;
          }
          case State.SCRIPT_DATA: {
            this._stateScriptData(cp);
            break;
          }
          case State.PLAINTEXT: {
            this._statePlaintext(cp);
            break;
          }
          case State.TAG_OPEN: {
            this._stateTagOpen(cp);
            break;
          }
          case State.END_TAG_OPEN: {
            this._stateEndTagOpen(cp);
            break;
          }
          case State.TAG_NAME: {
            this._stateTagName(cp);
            break;
          }
          case State.RCDATA_LESS_THAN_SIGN: {
            this._stateRcdataLessThanSign(cp);
            break;
          }
          case State.RCDATA_END_TAG_OPEN: {
            this._stateRcdataEndTagOpen(cp);
            break;
          }
          case State.RCDATA_END_TAG_NAME: {
            this._stateRcdataEndTagName(cp);
            break;
          }
          case State.RAWTEXT_LESS_THAN_SIGN: {
            this._stateRawtextLessThanSign(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_OPEN: {
            this._stateRawtextEndTagOpen(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_NAME: {
            this._stateRawtextEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_LESS_THAN_SIGN: {
            this._stateScriptDataLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_OPEN: {
            this._stateScriptDataEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_NAME: {
            this._stateScriptDataEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START: {
            this._stateScriptDataEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START_DASH: {
            this._stateScriptDataEscapeStartDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED: {
            this._stateScriptDataEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH: {
            this._stateScriptDataEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
            this._stateScriptDataEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
            this._stateScriptDataEscapedEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
            this._stateScriptDataEscapedEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
            this._stateScriptDataDoubleEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
            this._stateScriptDataDoubleEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
            this._stateScriptDataDoubleEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
            this._stateScriptDataDoubleEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataDoubleEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
            this._stateScriptDataDoubleEscapeEnd(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_NAME: {
            this._stateBeforeAttributeName(cp);
            break;
          }
          case State.ATTRIBUTE_NAME: {
            this._stateAttributeName(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_NAME: {
            this._stateAfterAttributeName(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_VALUE: {
            this._stateBeforeAttributeValue(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
            this._stateAttributeValueDoubleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
            this._stateAttributeValueSingleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_UNQUOTED: {
            this._stateAttributeValueUnquoted(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
            this._stateAfterAttributeValueQuoted(cp);
            break;
          }
          case State.SELF_CLOSING_START_TAG: {
            this._stateSelfClosingStartTag(cp);
            break;
          }
          case State.BOGUS_COMMENT: {
            this._stateBogusComment(cp);
            break;
          }
          case State.MARKUP_DECLARATION_OPEN: {
            this._stateMarkupDeclarationOpen(cp);
            break;
          }
          case State.COMMENT_START: {
            this._stateCommentStart(cp);
            break;
          }
          case State.COMMENT_START_DASH: {
            this._stateCommentStartDash(cp);
            break;
          }
          case State.COMMENT: {
            this._stateComment(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN: {
            this._stateCommentLessThanSign(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG: {
            this._stateCommentLessThanSignBang(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
            this._stateCommentLessThanSignBangDash(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
            this._stateCommentLessThanSignBangDashDash(cp);
            break;
          }
          case State.COMMENT_END_DASH: {
            this._stateCommentEndDash(cp);
            break;
          }
          case State.COMMENT_END: {
            this._stateCommentEnd(cp);
            break;
          }
          case State.COMMENT_END_BANG: {
            this._stateCommentEndBang(cp);
            break;
          }
          case State.DOCTYPE: {
            this._stateDoctype(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_NAME: {
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case State.DOCTYPE_NAME: {
            this._stateDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_NAME: {
            this._stateAfterDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
            this._stateAfterDoctypePublicKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateBeforeDoctypePublicIdentifier(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypePublicIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypePublicIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateAfterDoctypePublicIdentifier(cp);
            break;
          }
          case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
            this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
            this._stateAfterDoctypeSystemKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateBeforeDoctypeSystemIdentifier(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypeSystemIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateAfterDoctypeSystemIdentifier(cp);
            break;
          }
          case State.BOGUS_DOCTYPE: {
            this._stateBogusDoctype(cp);
            break;
          }
          case State.CDATA_SECTION: {
            this._stateCdataSection(cp);
            break;
          }
          case State.CDATA_SECTION_BRACKET: {
            this._stateCdataSectionBracket(cp);
            break;
          }
          case State.CDATA_SECTION_END: {
            this._stateCdataSectionEnd(cp);
            break;
          }
          case State.CHARACTER_REFERENCE: {
            this._stateCharacterReference(cp);
            break;
          }
          case State.NAMED_CHARACTER_REFERENCE: {
            this._stateNamedCharacterReference(cp);
            break;
          }
          case State.AMBIGUOUS_AMPERSAND: {
            this._stateAmbiguousAmpersand(cp);
            break;
          }
          case State.NUMERIC_CHARACTER_REFERENCE: {
            this._stateNumericCharacterReference(cp);
            break;
          }
          case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
            this._stateHexademicalCharacterReferenceStart(cp);
            break;
          }
          case State.HEXADEMICAL_CHARACTER_REFERENCE: {
            this._stateHexademicalCharacterReference(cp);
            break;
          }
          case State.DECIMAL_CHARACTER_REFERENCE: {
            this._stateDecimalCharacterReference(cp);
            break;
          }
          case State.NUMERIC_CHARACTER_REFERENCE_END: {
            this._stateNumericCharacterReferenceEnd(cp);
            break;
          }
          default: {
            throw new Error("Unknown state");
          }
        }
      }
      _stateData(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.TAG_OPEN;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.DATA;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateRcdata(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.RCDATA;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RCDATA_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateRawtext(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RAWTEXT_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptData(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _statePlaintext(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
              this.state = State.MARKUP_DECLARATION_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this.state = State.END_TAG_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUESTION_MARK: {
              this._err(error_codes_js_1.ERR.unexpectedQuestionMarkInsteadOfTagName);
              this._createCommentToken(1);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofBeforeTagName);
              this._emitChars("<");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
              this._emitChars("<");
              this.state = State.DATA;
              this._stateData(cp);
            }
          }
      }
      _stateEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingEndTagName);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofBeforeTagName);
              this._emitChars("</");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
              this._createCommentToken(2);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
            }
          }
      }
      _stateTagName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.tagName += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      _stateRcdataLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.RCDATA_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      _stateRcdataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RCDATA_END_TAG_NAME;
          this._stateRcdataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      handleSpecialEndTag(_cp) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
          return !this._ensureHibernation();
        }
        this._createEndTagToken();
        const token = this.currentToken;
        token.tagName = this.lastStartTagName;
        const cp = this.preprocessor.peek(this.lastStartTagName.length);
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            return false;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.SELF_CLOSING_START_TAG;
            return false;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._advanceBy(this.lastStartTagName.length);
            this.emitCurrentTagToken();
            this.state = State.DATA;
            return false;
          }
          default: {
            return !this._ensureHibernation();
          }
        }
      }
      _stateRcdataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      _stateRawtextLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.RAWTEXT_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      _stateRawtextEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RAWTEXT_END_TAG_NAME;
          this._stateRawtextEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      _stateRawtextEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      _stateScriptDataLessThanSign(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SCRIPT_DATA_END_TAG_OPEN;
            break;
          }
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.SCRIPT_DATA_ESCAPE_START;
            this._emitChars("<!");
            break;
          }
          default: {
            this._emitChars("<");
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
      }
      _stateScriptDataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_END_TAG_NAME;
          this._stateScriptDataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEscapeStart(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEscapeStartDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEscaped(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataEscapedDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataEscapedDashDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        } else if (isAsciiLetter(cp)) {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
          this._stateScriptDataDoubleEscapeStart(cp);
        } else {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataEscapedEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
          this._stateScriptDataEscapedEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataEscapedEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataDoubleEscapeStart(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataDoubleEscaped(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataDoubleEscapedDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataDoubleEscapedDashDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataDoubleEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
          this._emitChars("/");
        } else {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      _stateScriptDataDoubleEscapeEnd(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      _stateBeforeAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS:
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EOF: {
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this._err(error_codes_js_1.ERR.unexpectedEqualsSignBeforeAttributeName);
            this._createAttr("=");
            this.state = State.ATTRIBUTE_NAME;
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      _stateAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED:
          case unicode_js_1.CODE_POINTS.SOLIDUS:
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EOF: {
            this._leaveAttrName();
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this._leaveAttrName();
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
          case unicode_js_1.CODE_POINTS.APOSTROPHE:
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterInAttributeName);
            this.currentAttr.name += String.fromCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.name += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      _stateAfterAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      _stateBeforeAttributeValue(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingAttributeValue);
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          default: {
            this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
            this._stateAttributeValueUnquoted(cp);
          }
        }
      }
      _stateAttributeValueDoubleQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      _stateAttributeValueSingleQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      _stateAttributeValueUnquoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
          case unicode_js_1.CODE_POINTS.APOSTROPHE:
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN:
          case unicode_js_1.CODE_POINTS.GRAVE_ACCENT: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterInUnquotedAttributeValue);
            this.currentAttr.value += String.fromCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      _stateAfterAttributeValueQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this._leaveAttrValue();
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenAttributes);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      _stateSelfClosingStartTag(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            const token = this.currentToken;
            token.selfClosing = true;
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.unexpectedSolidusInTag);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      _stateBogusComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.data += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      _stateMarkupDeclarationOpen(cp) {
        if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DASH_DASH, true)) {
          this._createCommentToken(unicode_js_1.SEQUENCES.DASH_DASH.length + 1);
          this.state = State.COMMENT_START;
        } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DOCTYPE, false)) {
          this.currentLocation = this.getCurrentLocation(unicode_js_1.SEQUENCES.DOCTYPE.length + 1);
          this.state = State.DOCTYPE;
        } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.CDATA_START, true)) {
          if (this.inForeignNode) {
            this.state = State.CDATA_SECTION;
          } else {
            this._err(error_codes_js_1.ERR.cdataInHtmlContent);
            this._createCommentToken(unicode_js_1.SEQUENCES.CDATA_START.length + 1);
            this.currentToken.data = "[CDATA[";
            this.state = State.BOGUS_COMMENT;
          }
        } else if (!this._ensureHibernation()) {
          this._err(error_codes_js_1.ERR.incorrectlyOpenedComment);
          this._createCommentToken(2);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
        }
      }
      _stateCommentStart(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_START_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            const token = this.currentToken;
            this.emitCurrentComment(token);
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentStartDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            this.state = State.COMMENT_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.data += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      _stateCommentLessThanSign(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            token.data += "!";
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentLessThanSignBang(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        } else {
          this.state = State.COMMENT;
          this._stateComment(cp);
        }
      }
      _stateCommentLessThanSignBangDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        } else {
          this.state = State.COMMENT_END_DASH;
          this._stateCommentEndDash(cp);
        }
      }
      _stateCommentLessThanSignBangDashDash(cp) {
        if (cp !== unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN && cp !== unicode_js_1.CODE_POINTS.EOF) {
          this._err(error_codes_js_1.ERR.nestedComment);
        }
        this.state = State.COMMENT_END;
        this._stateCommentEnd(cp);
      }
      _stateCommentEndDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentEnd(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.COMMENT_END_BANG;
            break;
          }
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            token.data += "-";
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentEndBang(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            token.data += "--!";
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.incorrectlyClosedComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--!";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateDoctype(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            this._createDoctypeToken(null);
            const token = this.currentToken;
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBeforeDoctypeName);
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
          }
        }
      }
      _stateBeforeDoctypeName(cp) {
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
          this.state = State.DOCTYPE_NAME;
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._createDoctypeToken(unicode_js_1.REPLACEMENT_CHARACTER);
              this.state = State.DOCTYPE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypeName);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._createDoctypeToken(String.fromCodePoint(cp));
              this.state = State.DOCTYPE_NAME;
            }
          }
      }
      _stateDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.AFTER_DOCTYPE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.name += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      _stateAfterDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.PUBLIC, false)) {
              this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
            } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.SYSTEM, false)) {
              this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
            } else if (!this._ensureHibernation()) {
              this._err(error_codes_js_1.ERR.invalidCharacterSequenceAfterDoctypeName);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
      }
      _stateAfterDoctypePublicKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBeforeDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateDoctypePublicIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      _stateDoctypePublicIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      _stateAfterDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateAfterDoctypeSystemKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBeforeDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      _stateDoctypeSystemIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      _stateAfterDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBogusDoctype(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default:
        }
      }
      _stateCdataSection(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this.state = State.CDATA_SECTION_BRACKET;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInCdata);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateCdataSectionBracket(cp) {
        if (cp === unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET) {
          this.state = State.CDATA_SECTION_END;
        } else {
          this._emitChars("]");
          this.state = State.CDATA_SECTION;
          this._stateCdataSection(cp);
        }
      }
      _stateCdataSectionEnd(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this._emitChars("]");
            break;
          }
          default: {
            this._emitChars("]]");
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
          }
        }
      }
      _stateCharacterReference(cp) {
        if (cp === unicode_js_1.CODE_POINTS.NUMBER_SIGN) {
          this.state = State.NUMERIC_CHARACTER_REFERENCE;
        } else if (isAsciiAlphaNumeric(cp)) {
          this.state = State.NAMED_CHARACTER_REFERENCE;
          this._stateNamedCharacterReference(cp);
        } else {
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this._reconsumeInState(this.returnState, cp);
        }
      }
      _stateNamedCharacterReference(cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        if (this._ensureHibernation()) {
        } else if (matchResult) {
          for (let i = 0; i < matchResult.length; i++) {
            this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
          }
          this.state = this.returnState;
        } else {
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this.state = State.AMBIGUOUS_AMPERSAND;
        }
      }
      _stateAmbiguousAmpersand(cp) {
        if (isAsciiAlphaNumeric(cp)) {
          this._flushCodePointConsumedAsCharacterReference(cp);
        } else {
          if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this._err(error_codes_js_1.ERR.unknownNamedCharacterReference);
          }
          this._reconsumeInState(this.returnState, cp);
        }
      }
      _stateNumericCharacterReference(cp) {
        this.charRefCode = 0;
        if (cp === unicode_js_1.CODE_POINTS.LATIN_SMALL_X || cp === unicode_js_1.CODE_POINTS.LATIN_CAPITAL_X) {
          this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
        } else if (isAsciiDigit(cp)) {
          this.state = State.DECIMAL_CHARACTER_REFERENCE;
          this._stateDecimalCharacterReference(cp);
        } else {
          this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
          this._reconsumeInState(this.returnState, cp);
        }
      }
      _stateHexademicalCharacterReferenceStart(cp) {
        if (isAsciiHexDigit(cp)) {
          this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
          this._stateHexademicalCharacterReference(cp);
        } else {
          this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
          this._unconsume(2);
          this.state = this.returnState;
        }
      }
      _stateHexademicalCharacterReference(cp) {
        if (isAsciiUpperHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 55;
        } else if (isAsciiLowerHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 87;
        } else if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 48;
        } else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        } else {
          this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
          this._stateNumericCharacterReferenceEnd(cp);
        }
      }
      _stateDecimalCharacterReference(cp) {
        if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 10 + cp - 48;
        } else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        } else {
          this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
          this._stateNumericCharacterReferenceEnd(cp);
        }
      }
      _stateNumericCharacterReferenceEnd(cp) {
        if (this.charRefCode === unicode_js_1.CODE_POINTS.NULL) {
          this._err(error_codes_js_1.ERR.nullCharacterReference);
          this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        } else if (this.charRefCode > 1114111) {
          this._err(error_codes_js_1.ERR.characterReferenceOutsideUnicodeRange);
          this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        } else if ((0, unicode_js_1.isSurrogate)(this.charRefCode)) {
          this._err(error_codes_js_1.ERR.surrogateCharacterReference);
          this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        } else if ((0, unicode_js_1.isUndefinedCodePoint)(this.charRefCode)) {
          this._err(error_codes_js_1.ERR.noncharacterCharacterReference);
        } else if ((0, unicode_js_1.isControlCodePoint)(this.charRefCode) || this.charRefCode === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
          this._err(error_codes_js_1.ERR.controlCharacterReference);
          const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
          if (replacement !== void 0) {
            this.charRefCode = replacement;
          }
        }
        this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
        this._reconsumeInState(this.returnState, cp);
      }
    };
    exports.Tokenizer = Tokenizer;
  }
});

// node_modules/parse5/dist/cjs/parser/open-element-stack.js
var require_open_element_stack = __commonJS({
  "node_modules/parse5/dist/cjs/parser/open-element-stack.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpenElementStack = void 0;
    var html_js_1 = require_html();
    var IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([html_js_1.TAG_ID.DD, html_js_1.TAG_ID.DT, html_js_1.TAG_ID.LI, html_js_1.TAG_ID.OPTGROUP, html_js_1.TAG_ID.OPTION, html_js_1.TAG_ID.P, html_js_1.TAG_ID.RB, html_js_1.TAG_ID.RP, html_js_1.TAG_ID.RT, html_js_1.TAG_ID.RTC]);
    var IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
      ...IMPLICIT_END_TAG_REQUIRED,
      html_js_1.TAG_ID.CAPTION,
      html_js_1.TAG_ID.COLGROUP,
      html_js_1.TAG_ID.TBODY,
      html_js_1.TAG_ID.TD,
      html_js_1.TAG_ID.TFOOT,
      html_js_1.TAG_ID.TH,
      html_js_1.TAG_ID.THEAD,
      html_js_1.TAG_ID.TR
    ]);
    var SCOPING_ELEMENT_NS = /* @__PURE__ */ new Map([
      [html_js_1.TAG_ID.APPLET, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.CAPTION, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.HTML, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.MARQUEE, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.OBJECT, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TABLE, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TD, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TEMPLATE, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TH, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.ANNOTATION_XML, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MI, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MN, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MO, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MS, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MTEXT, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.DESC, html_js_1.NS.SVG],
      [html_js_1.TAG_ID.FOREIGN_OBJECT, html_js_1.NS.SVG],
      [html_js_1.TAG_ID.TITLE, html_js_1.NS.SVG]
    ]);
    var NAMED_HEADERS = [html_js_1.TAG_ID.H1, html_js_1.TAG_ID.H2, html_js_1.TAG_ID.H3, html_js_1.TAG_ID.H4, html_js_1.TAG_ID.H5, html_js_1.TAG_ID.H6];
    var TABLE_ROW_CONTEXT = [html_js_1.TAG_ID.TR, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
    var TABLE_BODY_CONTEXT = [html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
    var TABLE_CONTEXT = [html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
    var TABLE_CELLS = [html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TH];
    var OpenElementStack = class {
      get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
      }
      constructor(document, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = html_js_1.TAG_ID.UNKNOWN;
        this.current = document;
      }
      _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
      }
      _isInTemplate() {
        return this.currentTagId === html_js_1.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1.NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
      }
      push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
      }
      pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this.current = newElement;
        }
      }
      insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
          this._updateCurrentElement();
        }
        this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
      }
      popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
          targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1.NS.HTML);
        this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
      }
      shortenToLength(idx) {
        while (this.stackTop >= idx) {
          const popped = this.current;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount -= 1;
          }
          this.stackTop--;
          this._updateCurrentElement();
          this.handler.onItemPop(popped, this.stackTop < idx);
        }
      }
      popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(idx < 0 ? 0 : idx);
      }
      popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx < 0 ? 0 : idx);
      }
      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(NAMED_HEADERS, html_js_1.NS.HTML);
      }
      popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, html_js_1.NS.HTML);
      }
      popAllUpToHtmlElement() {
        this.tmplCount = 0;
        this.shortenToLength(1);
      }
      _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
            return i;
          }
        }
        return -1;
      }
      clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
      }
      clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, html_js_1.NS.HTML);
      }
      clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1.NS.HTML);
      }
      clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1.NS.HTML);
      }
      remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
          if (idx === this.stackTop) {
            this.pop();
          } else {
            this.items.splice(idx, 1);
            this.tagIDs.splice(idx, 1);
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(element, false);
          }
        }
      }
      tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === html_js_1.TAG_ID.BODY ? this.items[1] : null;
      }
      contains(element) {
        return this._indexOf(element) > -1;
      }
      getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === html_js_1.TAG_ID.HTML;
      }
      hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === html_js_1.NS.HTML) {
            return true;
          }
          if (SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if ((0, html_js_1.isNumberedHeader)(tn) && ns === html_js_1.NS.HTML) {
            return true;
          }
          if (SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === html_js_1.NS.HTML) {
            return true;
          }
          if ((tn === html_js_1.TAG_ID.UL || tn === html_js_1.TAG_ID.OL) && ns === html_js_1.NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === html_js_1.NS.HTML) {
            return true;
          }
          if (tn === html_js_1.TAG_ID.BUTTON && ns === html_js_1.NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== html_js_1.NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TEMPLATE || tn === html_js_1.TAG_ID.HTML) {
            return false;
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== html_js_1.NS.HTML) {
            continue;
          }
          if (tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TFOOT) {
            return true;
          }
          if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.HTML) {
            return false;
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== html_js_1.NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn !== html_js_1.TAG_ID.OPTION && tn !== html_js_1.TAG_ID.OPTGROUP) {
            return false;
          }
        }
        return true;
      }
      generateImpliedEndTags() {
        while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
    };
    exports.OpenElementStack = OpenElementStack;
  }
});

// node_modules/parse5/dist/cjs/parser/formatting-element-list.js
var require_formatting_element_list = __commonJS({
  "node_modules/parse5/dist/cjs/parser/formatting-element-list.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormattingElementList = exports.EntryType = void 0;
    var NOAH_ARK_CAPACITY = 3;
    var EntryType;
    (function(EntryType2) {
      EntryType2[EntryType2["Marker"] = 0] = "Marker";
      EntryType2[EntryType2["Element"] = 1] = "Element";
    })(EntryType = exports.EntryType || (exports.EntryType = {}));
    var MARKER = { type: EntryType.Marker };
    var FormattingElementList = class {
      constructor(treeAdapter) {
        this.treeAdapter = treeAdapter;
        this.entries = [];
        this.bookmark = null;
      }
      _getNoahArkConditionCandidates(newElement, neAttrs) {
        const candidates = [];
        const neAttrsLength = neAttrs.length;
        const neTagName = this.treeAdapter.getTagName(newElement);
        const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
        for (let i = 0; i < this.entries.length; i++) {
          const entry = this.entries[i];
          if (entry.type === EntryType.Marker) {
            break;
          }
          const { element } = entry;
          if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
            const elementAttrs = this.treeAdapter.getAttrList(element);
            if (elementAttrs.length === neAttrsLength) {
              candidates.push({ idx: i, attrs: elementAttrs });
            }
          }
        }
        return candidates;
      }
      _ensureNoahArkCondition(newElement) {
        if (this.entries.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrs = this.treeAdapter.getAttrList(newElement);
        const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
        if (candidates.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
        let validCandidates = 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
            validCandidates += 1;
            if (validCandidates >= NOAH_ARK_CAPACITY) {
              this.entries.splice(candidate.idx, 1);
            }
          }
        }
      }
      insertMarker() {
        this.entries.unshift(MARKER);
      }
      pushElement(element, token) {
        this._ensureNoahArkCondition(element);
        this.entries.unshift({
          type: EntryType.Element,
          element,
          token
        });
      }
      insertElementAfterBookmark(element, token) {
        const bookmarkIdx = this.entries.indexOf(this.bookmark);
        this.entries.splice(bookmarkIdx, 0, {
          type: EntryType.Element,
          element,
          token
        });
      }
      removeEntry(entry) {
        const entryIndex = this.entries.indexOf(entry);
        if (entryIndex >= 0) {
          this.entries.splice(entryIndex, 1);
        }
      }
      clearToLastMarker() {
        const markerIdx = this.entries.indexOf(MARKER);
        if (markerIdx >= 0) {
          this.entries.splice(0, markerIdx + 1);
        } else {
          this.entries.length = 0;
        }
      }
      getElementEntryInScopeWithTagName(tagName) {
        const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
        return entry && entry.type === EntryType.Element ? entry : null;
      }
      getElementEntry(element) {
        return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
      }
    };
    exports.FormattingElementList = FormattingElementList;
  }
});

// node_modules/parse5/dist/cjs/tree-adapters/default.js
var require_default = __commonJS({
  "node_modules/parse5/dist/cjs/tree-adapters/default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultTreeAdapter = void 0;
    var html_js_1 = require_html();
    function createTextNode(value) {
      return {
        nodeName: "#text",
        value,
        parentNode: null
      };
    }
    exports.defaultTreeAdapter = {
      createDocument() {
        return {
          nodeName: "#document",
          mode: html_js_1.DOCUMENT_MODE.NO_QUIRKS,
          childNodes: []
        };
      },
      createDocumentFragment() {
        return {
          nodeName: "#document-fragment",
          childNodes: []
        };
      },
      createElement(tagName, namespaceURI, attrs) {
        return {
          nodeName: tagName,
          tagName,
          attrs,
          namespaceURI,
          childNodes: [],
          parentNode: null
        };
      },
      createCommentNode(data) {
        return {
          nodeName: "#comment",
          data,
          parentNode: null
        };
      },
      appendChild(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
      },
      insertBefore(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
      },
      setTemplateContent(templateElement, contentElement) {
        templateElement.content = contentElement;
      },
      getTemplateContent(templateElement) {
        return templateElement.content;
      },
      setDocumentType(document, name, publicId, systemId) {
        const doctypeNode = document.childNodes.find((node) => node.nodeName === "#documentType");
        if (doctypeNode) {
          doctypeNode.name = name;
          doctypeNode.publicId = publicId;
          doctypeNode.systemId = systemId;
        } else {
          const node = {
            nodeName: "#documentType",
            name,
            publicId,
            systemId,
            parentNode: null
          };
          exports.defaultTreeAdapter.appendChild(document, node);
        }
      },
      setDocumentMode(document, mode) {
        document.mode = mode;
      },
      getDocumentMode(document) {
        return document.mode;
      },
      detachNode(node) {
        if (node.parentNode) {
          const idx = node.parentNode.childNodes.indexOf(node);
          node.parentNode.childNodes.splice(idx, 1);
          node.parentNode = null;
        }
      },
      insertText(parentNode, text) {
        if (parentNode.childNodes.length > 0) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
          if (exports.defaultTreeAdapter.isTextNode(prevNode)) {
            prevNode.value += text;
            return;
          }
        }
        exports.defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
      },
      insertTextBefore(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && exports.defaultTreeAdapter.isTextNode(prevNode)) {
          prevNode.value += text;
        } else {
          exports.defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
        }
      },
      adoptAttributes(recipient, attrs) {
        const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
        for (let j = 0; j < attrs.length; j++) {
          if (!recipientAttrsMap.has(attrs[j].name)) {
            recipient.attrs.push(attrs[j]);
          }
        }
      },
      getFirstChild(node) {
        return node.childNodes[0];
      },
      getChildNodes(node) {
        return node.childNodes;
      },
      getParentNode(node) {
        return node.parentNode;
      },
      getAttrList(element) {
        return element.attrs;
      },
      getTagName(element) {
        return element.tagName;
      },
      getNamespaceURI(element) {
        return element.namespaceURI;
      },
      getTextNodeContent(textNode) {
        return textNode.value;
      },
      getCommentNodeContent(commentNode) {
        return commentNode.data;
      },
      getDocumentTypeNodeName(doctypeNode) {
        return doctypeNode.name;
      },
      getDocumentTypeNodePublicId(doctypeNode) {
        return doctypeNode.publicId;
      },
      getDocumentTypeNodeSystemId(doctypeNode) {
        return doctypeNode.systemId;
      },
      isTextNode(node) {
        return node.nodeName === "#text";
      },
      isCommentNode(node) {
        return node.nodeName === "#comment";
      },
      isDocumentTypeNode(node) {
        return node.nodeName === "#documentType";
      },
      isElementNode(node) {
        return Object.prototype.hasOwnProperty.call(node, "tagName");
      },
      setNodeSourceCodeLocation(node, location) {
        node.sourceCodeLocation = location;
      },
      getNodeSourceCodeLocation(node) {
        return node.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(node, endLocation) {
        node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
      }
    };
  }
});

// node_modules/parse5/dist/cjs/common/doctype.js
var require_doctype = __commonJS({
  "node_modules/parse5/dist/cjs/common/doctype.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDocumentMode = exports.isConforming = void 0;
    var html_js_1 = require_html();
    var VALID_DOCTYPE_NAME = "html";
    var VALID_SYSTEM_ID = "about:legacy-compat";
    var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//"
    ];
    var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    var QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
      "-//w3o//dtd w3 html strict 3.0//en//",
      "-/w3c/dtd html 4.0 transitional/en",
      "html"
    ]);
    var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
    var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    function hasPrefix(publicId, prefixes) {
      return prefixes.some((prefix) => publicId.startsWith(prefix));
    }
    function isConforming(token) {
      return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
    }
    exports.isConforming = isConforming;
    function getDocumentMode(token) {
      if (token.name !== VALID_DOCTYPE_NAME) {
        return html_js_1.DOCUMENT_MODE.QUIRKS;
      }
      const { systemId } = token;
      if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return html_js_1.DOCUMENT_MODE.QUIRKS;
      }
      let { publicId } = token;
      if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return html_js_1.DOCUMENT_MODE.LIMITED_QUIRKS;
        }
      }
      return html_js_1.DOCUMENT_MODE.NO_QUIRKS;
    }
    exports.getDocumentMode = getDocumentMode;
  }
});

// node_modules/parse5/dist/cjs/common/foreign-content.js
var require_foreign_content = __commonJS({
  "node_modules/parse5/dist/cjs/common/foreign-content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIntegrationPoint = exports.adjustTokenSVGTagName = exports.adjustTokenXMLAttrs = exports.adjustTokenSVGAttrs = exports.adjustTokenMathMLAttrs = exports.causesExit = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
    var html_js_1 = require_html();
    var MIME_TYPES = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    };
    var DEFINITION_URL_ATTR = "definitionurl";
    var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
    var SVG_ATTRS_ADJUSTMENT_MAP = new Map([
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map((attr) => [attr.toLowerCase(), attr]));
    var XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
      ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: html_js_1.NS.XLINK }],
      ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: html_js_1.NS.XLINK }],
      ["xlink:href", { prefix: "xlink", name: "href", namespace: html_js_1.NS.XLINK }],
      ["xlink:role", { prefix: "xlink", name: "role", namespace: html_js_1.NS.XLINK }],
      ["xlink:show", { prefix: "xlink", name: "show", namespace: html_js_1.NS.XLINK }],
      ["xlink:title", { prefix: "xlink", name: "title", namespace: html_js_1.NS.XLINK }],
      ["xlink:type", { prefix: "xlink", name: "type", namespace: html_js_1.NS.XLINK }],
      ["xml:base", { prefix: "xml", name: "base", namespace: html_js_1.NS.XML }],
      ["xml:lang", { prefix: "xml", name: "lang", namespace: html_js_1.NS.XML }],
      ["xml:space", { prefix: "xml", name: "space", namespace: html_js_1.NS.XML }],
      ["xmlns", { prefix: "", name: "xmlns", namespace: html_js_1.NS.XMLNS }],
      ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: html_js_1.NS.XMLNS }]
    ]);
    exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map((tn) => [tn.toLowerCase(), tn]));
    var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
      html_js_1.TAG_ID.B,
      html_js_1.TAG_ID.BIG,
      html_js_1.TAG_ID.BLOCKQUOTE,
      html_js_1.TAG_ID.BODY,
      html_js_1.TAG_ID.BR,
      html_js_1.TAG_ID.CENTER,
      html_js_1.TAG_ID.CODE,
      html_js_1.TAG_ID.DD,
      html_js_1.TAG_ID.DIV,
      html_js_1.TAG_ID.DL,
      html_js_1.TAG_ID.DT,
      html_js_1.TAG_ID.EM,
      html_js_1.TAG_ID.EMBED,
      html_js_1.TAG_ID.H1,
      html_js_1.TAG_ID.H2,
      html_js_1.TAG_ID.H3,
      html_js_1.TAG_ID.H4,
      html_js_1.TAG_ID.H5,
      html_js_1.TAG_ID.H6,
      html_js_1.TAG_ID.HEAD,
      html_js_1.TAG_ID.HR,
      html_js_1.TAG_ID.I,
      html_js_1.TAG_ID.IMG,
      html_js_1.TAG_ID.LI,
      html_js_1.TAG_ID.LISTING,
      html_js_1.TAG_ID.MENU,
      html_js_1.TAG_ID.META,
      html_js_1.TAG_ID.NOBR,
      html_js_1.TAG_ID.OL,
      html_js_1.TAG_ID.P,
      html_js_1.TAG_ID.PRE,
      html_js_1.TAG_ID.RUBY,
      html_js_1.TAG_ID.S,
      html_js_1.TAG_ID.SMALL,
      html_js_1.TAG_ID.SPAN,
      html_js_1.TAG_ID.STRONG,
      html_js_1.TAG_ID.STRIKE,
      html_js_1.TAG_ID.SUB,
      html_js_1.TAG_ID.SUP,
      html_js_1.TAG_ID.TABLE,
      html_js_1.TAG_ID.TT,
      html_js_1.TAG_ID.U,
      html_js_1.TAG_ID.UL,
      html_js_1.TAG_ID.VAR
    ]);
    function causesExit(startTagToken) {
      const tn = startTagToken.tagID;
      const isFontWithAttrs = tn === html_js_1.TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === html_js_1.ATTRS.COLOR || name === html_js_1.ATTRS.SIZE || name === html_js_1.ATTRS.FACE);
      return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
    }
    exports.causesExit = causesExit;
    function adjustTokenMathMLAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
          token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
          break;
        }
      }
    }
    exports.adjustTokenMathMLAttrs = adjustTokenMathMLAttrs;
    function adjustTokenSVGAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrName != null) {
          token.attrs[i].name = adjustedAttrName;
        }
      }
    }
    exports.adjustTokenSVGAttrs = adjustTokenSVGAttrs;
    function adjustTokenXMLAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrEntry) {
          token.attrs[i].prefix = adjustedAttrEntry.prefix;
          token.attrs[i].name = adjustedAttrEntry.name;
          token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
      }
    }
    exports.adjustTokenXMLAttrs = adjustTokenXMLAttrs;
    function adjustTokenSVGTagName(token) {
      const adjustedTagName = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
      if (adjustedTagName != null) {
        token.tagName = adjustedTagName;
        token.tagID = (0, html_js_1.getTagID)(token.tagName);
      }
    }
    exports.adjustTokenSVGTagName = adjustTokenSVGTagName;
    function isMathMLTextIntegrationPoint(tn, ns) {
      return ns === html_js_1.NS.MATHML && (tn === html_js_1.TAG_ID.MI || tn === html_js_1.TAG_ID.MO || tn === html_js_1.TAG_ID.MN || tn === html_js_1.TAG_ID.MS || tn === html_js_1.TAG_ID.MTEXT);
    }
    function isHtmlIntegrationPoint(tn, ns, attrs) {
      if (ns === html_js_1.NS.MATHML && tn === html_js_1.TAG_ID.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
          if (attrs[i].name === html_js_1.ATTRS.ENCODING) {
            const value = attrs[i].value.toLowerCase();
            return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
          }
        }
      }
      return ns === html_js_1.NS.SVG && (tn === html_js_1.TAG_ID.FOREIGN_OBJECT || tn === html_js_1.TAG_ID.DESC || tn === html_js_1.TAG_ID.TITLE);
    }
    function isIntegrationPoint(tn, ns, attrs, foreignNS) {
      return (!foreignNS || foreignNS === html_js_1.NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === html_js_1.NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
    }
    exports.isIntegrationPoint = isIntegrationPoint;
  }
});

// node_modules/parse5/dist/cjs/parser/index.js
var require_parser = __commonJS({
  "node_modules/parse5/dist/cjs/parser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var index_js_1 = require_tokenizer();
    var open_element_stack_js_1 = require_open_element_stack();
    var formatting_element_list_js_1 = require_formatting_element_list();
    var default_js_1 = require_default();
    var doctype = require_doctype();
    var foreignContent = require_foreign_content();
    var error_codes_js_1 = require_error_codes();
    var unicode = require_unicode();
    var html_js_1 = require_html();
    var token_js_1 = require_token();
    var HIDDEN_INPUT_TYPE = "hidden";
    var AA_OUTER_LOOP_ITER = 8;
    var AA_INNER_LOOP_ITER = 3;
    var InsertionMode;
    (function(InsertionMode2) {
      InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
      InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
      InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
      InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
      InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
      InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
      InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
      InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
      InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
      InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
      InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
      InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
      InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
      InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
      InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
      InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
      InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
    })(InsertionMode || (InsertionMode = {}));
    var BASE_LOC = {
      startLine: -1,
      startCol: -1,
      startOffset: -1,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
    var TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
    var defaultParserOptions = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      treeAdapter: default_js_1.defaultTreeAdapter,
      onParseError: null
    };
    var Parser = class {
      constructor(options, document, fragmentContext = null, scriptHandler = null) {
        this.fragmentContext = fragmentContext;
        this.scriptHandler = scriptHandler;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = InsertionMode.INITIAL;
        this.originalInsertionMode = InsertionMode.INITIAL;
        this.headElement = null;
        this.formElement = null;
        this.currentNotInHTML = false;
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = Object.assign(Object.assign({}, defaultParserOptions), options);
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        if (this.onParseError) {
          this.options.sourceCodeLocationInfo = true;
        }
        this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
        this.tokenizer = new index_js_1.Tokenizer(this.options, this);
        this.activeFormattingElements = new formatting_element_list_js_1.FormattingElementList(this.treeAdapter);
        this.fragmentContextID = fragmentContext ? (0, html_js_1.getTagID)(this.treeAdapter.getTagName(fragmentContext)) : html_js_1.TAG_ID.UNKNOWN;
        this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
        this.openElements = new open_element_stack_js_1.OpenElementStack(this.document, this.treeAdapter, this);
      }
      static parse(html, options) {
        const parser2 = new this(options);
        parser2.tokenizer.write(html, true);
        return parser2.document;
      }
      static getFragmentParser(fragmentContext, options) {
        const opts = Object.assign(Object.assign({}, defaultParserOptions), options);
        fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(html_js_1.TAG_NAMES.TEMPLATE, html_js_1.NS.HTML, []);
        const documentMock = opts.treeAdapter.createElement("documentmock", html_js_1.NS.HTML, []);
        const parser2 = new this(opts, documentMock, fragmentContext);
        if (parser2.fragmentContextID === html_js_1.TAG_ID.TEMPLATE) {
          parser2.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
        }
        parser2._initTokenizerForFragmentParsing();
        parser2._insertFakeRootElement();
        parser2._resetInsertionMode();
        parser2._findFormInFragmentContext();
        return parser2;
      }
      getFragment() {
        const rootElement = this.treeAdapter.getFirstChild(this.document);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      _err(token, code, beforeToken) {
        var _a;
        if (!this.onParseError)
          return;
        const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
        const err = {
          code,
          startLine: loc.startLine,
          startCol: loc.startCol,
          startOffset: loc.startOffset,
          endLine: beforeToken ? loc.startLine : loc.endLine,
          endCol: beforeToken ? loc.startCol : loc.endCol,
          endOffset: beforeToken ? loc.startOffset : loc.endOffset
        };
        this.onParseError(err);
      }
      onItemPush(node, tid, isTop) {
        var _a, _b;
        (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        if (isTop && this.openElements.stackTop > 0)
          this._setContextModes(node, tid);
      }
      onItemPop(node, isTop) {
        var _a, _b;
        if (this.options.sourceCodeLocationInfo) {
          this._setEndLocation(node, this.currentToken);
        }
        (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
        if (isTop) {
          let current;
          let currentTagId;
          if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
          } else {
            ({ current, currentTagId } = this.openElements);
          }
          this._setContextModes(current, currentTagId);
        }
      }
      _setContextModes(current, tid) {
        const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.HTML;
        this.currentNotInHTML = !isHTML;
        this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
      }
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, html_js_1.NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = InsertionMode.TEXT;
      }
      switchToPlaintextParsing() {
        this.insertionMode = InsertionMode.TEXT;
        this.originalInsertionMode = InsertionMode.IN_BODY;
        this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
      }
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let node = this.fragmentContext;
        while (node) {
          if (this.treeAdapter.getTagName(node) === html_js_1.TAG_NAMES.FORM) {
            this.formElement = node;
            break;
          }
          node = this.treeAdapter.getParentNode(node);
        }
      }
      _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== html_js_1.NS.HTML) {
          return;
        }
        switch (this.fragmentContextID) {
          case html_js_1.TAG_ID.TITLE:
          case html_js_1.TAG_ID.TEXTAREA: {
            this.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
            break;
          }
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.XMP:
          case html_js_1.TAG_ID.IFRAME:
          case html_js_1.TAG_ID.NOEMBED:
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.NOSCRIPT: {
            this.tokenizer.state = index_js_1.TokenizerMode.RAWTEXT;
            break;
          }
          case html_js_1.TAG_ID.SCRIPT: {
            this.tokenizer.state = index_js_1.TokenizerMode.SCRIPT_DATA;
            break;
          }
          case html_js_1.TAG_ID.PLAINTEXT: {
            this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
            break;
          }
          default:
        }
      }
      _setDocumentType(token) {
        const name = token.name || "";
        const publicId = token.publicId || "";
        const systemId = token.systemId || "";
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        if (token.location) {
          const documentChildren = this.treeAdapter.getChildNodes(this.document);
          const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
          if (docTypeNode) {
            this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
          }
        }
      }
      _attachElementToTree(element, location) {
        if (this.options.sourceCodeLocationInfo) {
          const loc = location && Object.assign(Object.assign({}, location), { startTag: location });
          this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element);
        } else {
          const parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.appendChild(parent, element);
        }
      }
      _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
      }
      _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
        this.openElements.push(element, token.tagID);
      }
      _insertFakeElement(tagName, tagID) {
        const element = this.treeAdapter.createElement(tagName, html_js_1.NS.HTML, []);
        this._attachElementToTree(element, null);
        this.openElements.push(element, tagID);
      }
      _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, html_js_1.NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl, token.location);
        this.openElements.push(tmpl, token.tagID);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(content, null);
      }
      _insertFakeRootElement() {
        const element = this.treeAdapter.createElement(html_js_1.TAG_NAMES.HTML, html_js_1.NS.HTML, []);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(element, null);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element, html_js_1.TAG_ID.HTML);
      }
      _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
        if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        }
      }
      _insertCharacters(token) {
        let parent;
        let beforeElement;
        if (this._shouldFosterParentOnInsertion()) {
          ({ parent, beforeElement } = this._findFosterParentingLocation());
          if (beforeElement) {
            this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
          } else {
            this.treeAdapter.insertText(parent, token.chars);
          }
        } else {
          parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.insertText(parent, token.chars);
        }
        if (!token.location)
          return;
        const siblings = this.treeAdapter.getChildNodes(parent);
        const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
        const textNode = siblings[textNodeIdx - 1];
        const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
        if (tnLoc) {
          const { endLine, endCol, endOffset } = token.location;
          this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
        } else if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
        }
      }
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      _setEndLocation(element, closingToken) {
        if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
          const ctLoc = closingToken.location;
          const tn = this.treeAdapter.getTagName(element);
          const endLoc = closingToken.type === token_js_1.TokenType.END_TAG && tn === closingToken.tagName ? {
            endTag: Object.assign({}, ctLoc),
            endLine: ctLoc.endLine,
            endCol: ctLoc.endCol,
            endOffset: ctLoc.endOffset
          } : {
            endLine: ctLoc.startLine,
            endCol: ctLoc.startCol,
            endOffset: ctLoc.startOffset
          };
          this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
      }
      shouldProcessStartTagTokenInForeignContent(token) {
        if (!this.currentNotInHTML)
          return false;
        let current;
        let currentTagId;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
          current = this.fragmentContext;
          currentTagId = this.fragmentContextID;
        } else {
          ({ current, currentTagId } = this.openElements);
        }
        if (token.tagID === html_js_1.TAG_ID.SVG && this.treeAdapter.getTagName(current) === html_js_1.TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.MATHML) {
          return false;
        }
        return this.tokenizer.inForeignNode || (token.tagID === html_js_1.TAG_ID.MGLYPH || token.tagID === html_js_1.TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(currentTagId, current, html_js_1.NS.HTML);
      }
      _processToken(token) {
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            this.onCharacter(token);
            break;
          }
          case token_js_1.TokenType.NULL_CHARACTER: {
            this.onNullCharacter(token);
            break;
          }
          case token_js_1.TokenType.COMMENT: {
            this.onComment(token);
            break;
          }
          case token_js_1.TokenType.DOCTYPE: {
            this.onDoctype(token);
            break;
          }
          case token_js_1.TokenType.START_TAG: {
            this._processStartTag(token);
            break;
          }
          case token_js_1.TokenType.END_TAG: {
            this.onEndTag(token);
            break;
          }
          case token_js_1.TokenType.EOF: {
            this.onEof(token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            this.onWhitespaceCharacter(token);
            break;
          }
        }
      }
      _isIntegrationPoint(tid, element, foreignNS) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return foreignContent.isIntegrationPoint(tid, ns, attrs, foreignNS);
      }
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.entries.length;
        if (listLength) {
          const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === formatting_element_list_js_1.EntryType.Marker || this.openElements.contains(entry.element));
          const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
          for (let i = unopenIdx; i >= 0; i--) {
            const entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = InsertionMode.IN_ROW;
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.P);
        this.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.P);
      }
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
            case html_js_1.TAG_ID.TR: {
              this.insertionMode = InsertionMode.IN_ROW;
              return;
            }
            case html_js_1.TAG_ID.TBODY:
            case html_js_1.TAG_ID.THEAD:
            case html_js_1.TAG_ID.TFOOT: {
              this.insertionMode = InsertionMode.IN_TABLE_BODY;
              return;
            }
            case html_js_1.TAG_ID.CAPTION: {
              this.insertionMode = InsertionMode.IN_CAPTION;
              return;
            }
            case html_js_1.TAG_ID.COLGROUP: {
              this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
              return;
            }
            case html_js_1.TAG_ID.TABLE: {
              this.insertionMode = InsertionMode.IN_TABLE;
              return;
            }
            case html_js_1.TAG_ID.BODY: {
              this.insertionMode = InsertionMode.IN_BODY;
              return;
            }
            case html_js_1.TAG_ID.FRAMESET: {
              this.insertionMode = InsertionMode.IN_FRAMESET;
              return;
            }
            case html_js_1.TAG_ID.SELECT: {
              this._resetInsertionModeForSelect(i);
              return;
            }
            case html_js_1.TAG_ID.TEMPLATE: {
              this.insertionMode = this.tmplInsertionModeStack[0];
              return;
            }
            case html_js_1.TAG_ID.HTML: {
              this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
              return;
            }
            case html_js_1.TAG_ID.TD:
            case html_js_1.TAG_ID.TH: {
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_CELL;
                return;
              }
              break;
            }
            case html_js_1.TAG_ID.HEAD: {
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_HEAD;
                return;
              }
              break;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_BODY;
      }
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const tn = this.openElements.tagIDs[i];
            if (tn === html_js_1.TAG_ID.TEMPLATE) {
              break;
            } else if (tn === html_js_1.TAG_ID.TABLE) {
              this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
              return;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_SELECT;
      }
      _isElementCausesFosterParenting(tn) {
        return TABLE_STRUCTURE_TAGS.has(tn);
      }
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
      }
      _findFosterParentingLocation() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          switch (this.openElements.tagIDs[i]) {
            case html_js_1.TAG_ID.TEMPLATE: {
              if (this.treeAdapter.getNamespaceURI(openElement) === html_js_1.NS.HTML) {
                return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
              }
              break;
            }
            case html_js_1.TAG_ID.TABLE: {
              const parent = this.treeAdapter.getParentNode(openElement);
              if (parent) {
                return { parent, beforeElement: openElement };
              }
              return { parent: this.openElements.items[i - 1], beforeElement: null };
            }
            default:
          }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
      }
      _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        } else {
          this.treeAdapter.appendChild(location.parent, element);
        }
      }
      _isSpecialElement(element, id) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        return html_js_1.SPECIAL_ELEMENTS[ns].has(id);
      }
      onCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          characterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE: {
            characterInBody(this, token);
            break;
          }
          case InsertionMode.TEXT:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            characterInTableText(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            tokenInColumnGroup(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            tokenAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      onNullCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          nullCharacterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            tokenInColumnGroup(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            tokenAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      onComment(token) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
          appendComment(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
          case InsertionMode.BEFORE_HTML:
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET: {
            appendComment(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            appendCommentToRootHtmlElement(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            appendCommentToDocument(this, token);
            break;
          }
          default:
        }
      }
      onDoctype(token) {
        this.skipNextNewLine = false;
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            doctypeInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD: {
            this._err(token, error_codes_js_1.ERR.misplacedDoctype);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          default:
        }
      }
      onStartTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        this._processStartTag(token);
        if (token.selfClosing && !token.ackSelfClosing) {
          this._err(token, error_codes_js_1.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      _processStartTag(token) {
        if (this.shouldProcessStartTagTokenInForeignContent(token)) {
          startTagInForeignContent(this, token);
        } else {
          this._startTagOutsideForeignContent(token);
        }
      }
      _startTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            startTagBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            startTagBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            startTagInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            startTagInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            startTagAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY: {
            startTagInBody(this, token);
            break;
          }
          case InsertionMode.IN_TABLE: {
            startTagInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_CAPTION: {
            startTagInCaption(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            startTagInColumnGroup(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_BODY: {
            startTagInTableBody(this, token);
            break;
          }
          case InsertionMode.IN_ROW: {
            startTagInRow(this, token);
            break;
          }
          case InsertionMode.IN_CELL: {
            startTagInCell(this, token);
            break;
          }
          case InsertionMode.IN_SELECT: {
            startTagInSelect(this, token);
            break;
          }
          case InsertionMode.IN_SELECT_IN_TABLE: {
            startTagInSelectInTable(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            startTagInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            startTagAfterBody(this, token);
            break;
          }
          case InsertionMode.IN_FRAMESET: {
            startTagInFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_FRAMESET: {
            startTagAfterFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            startTagAfterAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            startTagAfterAfterFrameset(this, token);
            break;
          }
          default:
        }
      }
      onEndTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        if (this.currentNotInHTML) {
          endTagInForeignContent(this, token);
        } else {
          this._endTagOutsideForeignContent(token);
        }
      }
      _endTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            endTagBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            endTagBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            endTagInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            endTagInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            endTagAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY: {
            endTagInBody(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            endTagInText(this, token);
            break;
          }
          case InsertionMode.IN_TABLE: {
            endTagInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_CAPTION: {
            endTagInCaption(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            endTagInColumnGroup(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_BODY: {
            endTagInTableBody(this, token);
            break;
          }
          case InsertionMode.IN_ROW: {
            endTagInRow(this, token);
            break;
          }
          case InsertionMode.IN_CELL: {
            endTagInCell(this, token);
            break;
          }
          case InsertionMode.IN_SELECT: {
            endTagInSelect(this, token);
            break;
          }
          case InsertionMode.IN_SELECT_IN_TABLE: {
            endTagInSelectInTable(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            endTagInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            endTagAfterBody(this, token);
            break;
          }
          case InsertionMode.IN_FRAMESET: {
            endTagInFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_FRAMESET: {
            endTagAfterFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      onEof(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE: {
            eofInBody(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            eofInText(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            eofInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            stopParsing(this, token);
            break;
          }
          default:
        }
      }
      onWhitespaceCharacter(token) {
        if (this.skipNextNewLine) {
          this.skipNextNewLine = false;
          if (token.chars.charCodeAt(0) === unicode.CODE_POINTS.LINE_FEED) {
            if (token.chars.length === 1) {
              return;
            }
            token.chars = token.chars.substr(1);
          }
        }
        if (this.tokenizer.inForeignNode) {
          this._insertCharacters(token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.TEXT:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.AFTER_BODY:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            whitespaceCharacterInBody(this, token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            whitespaceCharacterInTableText(this, token);
            break;
          }
          default:
        }
      }
    };
    exports.Parser = Parser;
    function aaObtainFormattingElementEntry(p, token) {
      let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
      if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
          p.activeFormattingElements.removeEntry(formattingElementEntry);
          formattingElementEntry = null;
        } else if (!p.openElements.hasInScope(token.tagID)) {
          formattingElementEntry = null;
        }
      } else {
        genericEndTagInBody(p, token);
      }
      return formattingElementEntry;
    }
    function aaObtainFurthestBlock(p, formattingElementEntry) {
      let furthestBlock = null;
      let idx = p.openElements.stackTop;
      for (; idx >= 0; idx--) {
        const element = p.openElements.items[idx];
        if (element === formattingElementEntry.element) {
          break;
        }
        if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
          furthestBlock = element;
        }
      }
      if (!furthestBlock) {
        p.openElements.shortenToLength(idx < 0 ? 0 : idx);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
      }
      return furthestBlock;
    }
    function aaInnerLoop(p, furthestBlock, formattingElement) {
      let lastElement = furthestBlock;
      let nextElement = p.openElements.getCommonAncestor(furthestBlock);
      for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
          if (counterOverflow) {
            p.activeFormattingElements.removeEntry(elementEntry);
          }
          p.openElements.remove(element);
        } else {
          element = aaRecreateElementFromEntry(p, elementEntry);
          if (lastElement === furthestBlock) {
            p.activeFormattingElements.bookmark = elementEntry;
          }
          p.treeAdapter.detachNode(lastElement);
          p.treeAdapter.appendChild(element, lastElement);
          lastElement = element;
        }
      }
      return lastElement;
    }
    function aaRecreateElementFromEntry(p, elementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
      const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
      p.openElements.replace(elementEntry.element, newElement);
      elementEntry.element = newElement;
      return newElement;
    }
    function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
      const tn = p.treeAdapter.getTagName(commonAncestor);
      const tid = (0, html_js_1.getTagID)(tn);
      if (p._isElementCausesFosterParenting(tid)) {
        p._fosterParentElement(lastElement);
      } else {
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tid === html_js_1.TAG_ID.TEMPLATE && ns === html_js_1.NS.HTML) {
          commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
      }
    }
    function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
      const { token } = formattingElementEntry;
      const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
      p._adoptNodes(furthestBlock, newElement);
      p.treeAdapter.appendChild(furthestBlock, newElement);
      p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      p.openElements.remove(formattingElementEntry.element);
      p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
    }
    function callAdoptionAgency(p, token) {
      for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
        if (!formattingElementEntry) {
          break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
          break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        if (commonAncestor)
          aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
      }
    }
    function appendComment(p, token) {
      p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
    }
    function appendCommentToRootHtmlElement(p, token) {
      p._appendCommentNode(token, p.openElements.items[0]);
    }
    function appendCommentToDocument(p, token) {
      p._appendCommentNode(token, p.document);
    }
    function stopParsing(p, token) {
      p.stopped = true;
      if (token.location) {
        const target = p.fragmentContext ? 0 : 2;
        for (let i = p.openElements.stackTop; i >= target; i--) {
          p._setEndLocation(p.openElements.items[i], token);
        }
        if (!p.fragmentContext && p.openElements.stackTop >= 0) {
          const htmlElement = p.openElements.items[0];
          const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
          if (htmlLocation && !htmlLocation.endTag) {
            p._setEndLocation(htmlElement, token);
            if (p.openElements.stackTop >= 1) {
              const bodyElement = p.openElements.items[1];
              const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
              if (bodyLocation && !bodyLocation.endTag) {
                p._setEndLocation(bodyElement, token);
              }
            }
          }
        }
      }
    }
    function doctypeInInitialMode(p, token) {
      p._setDocumentType(token);
      const mode = token.forceQuirks ? html_js_1.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
      if (!doctype.isConforming(token)) {
        p._err(token, error_codes_js_1.ERR.nonConformingDoctype);
      }
      p.treeAdapter.setDocumentMode(p.document, mode);
      p.insertionMode = InsertionMode.BEFORE_HTML;
    }
    function tokenInInitialMode(p, token) {
      p._err(token, error_codes_js_1.ERR.missingDoctype, true);
      p.treeAdapter.setDocumentMode(p.document, html_js_1.DOCUMENT_MODE.QUIRKS);
      p.insertionMode = InsertionMode.BEFORE_HTML;
      p._processToken(token);
    }
    function startTagBeforeHtml(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.BEFORE_HEAD;
      } else {
        tokenBeforeHtml(p, token);
      }
    }
    function endTagBeforeHtml(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.BR) {
        tokenBeforeHtml(p, token);
      }
    }
    function tokenBeforeHtml(p, token) {
      p._insertFakeRootElement();
      p.insertionMode = InsertionMode.BEFORE_HEAD;
      p._processToken(token);
    }
    function startTagBeforeHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.headElement = p.openElements.current;
          p.insertionMode = InsertionMode.IN_HEAD;
          break;
        }
        default: {
          tokenBeforeHead(p, token);
        }
      }
    }
    function endTagBeforeHead(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.BR) {
        tokenBeforeHead(p, token);
      } else {
        p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(p, token) {
      p._insertFakeElement(html_js_1.TAG_NAMES.HEAD, html_js_1.TAG_ID.HEAD);
      p.headElement = p.openElements.current;
      p.insertionMode = InsertionMode.IN_HEAD;
      p._processToken(token);
    }
    function startTagInHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.TITLE: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.RCDATA);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          if (p.options.scriptingEnabled) {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
          } else {
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
          }
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.STYLE: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
          break;
        }
        case html_js_1.TAG_ID.SCRIPT: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.SCRIPT_DATA);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          p._insertTemplate(token);
          p.activeFormattingElements.insertMarker();
          p.framesetOk = false;
          p.insertionMode = InsertionMode.IN_TEMPLATE;
          p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
          break;
        }
        default: {
          tokenInHead(p, token);
        }
      }
    }
    function endTagInHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HEAD: {
          p.openElements.pop();
          p.insertionMode = InsertionMode.AFTER_HEAD;
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.BR:
        case html_js_1.TAG_ID.HTML: {
          tokenInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function templateEndTagInHead(p, token) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.generateImpliedEndTagsThoroughly();
        if (p.openElements.currentTagId !== html_js_1.TAG_ID.TEMPLATE) {
          p._err(token, error_codes_js_1.ERR.closingOfElementWithOpenChildElements);
        }
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
      } else {
        p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHead(p, token) {
      p.openElements.pop();
      p.insertionMode = InsertionMode.AFTER_HEAD;
      p._processToken(token);
    }
    function startTagInHeadNoScript(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.HEAD:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.STYLE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          p._err(token, error_codes_js_1.ERR.nestedNoscriptInHead);
          break;
        }
        default: {
          tokenInHeadNoScript(p, token);
        }
      }
    }
    function endTagInHeadNoScript(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.NOSCRIPT: {
          p.openElements.pop();
          p.insertionMode = InsertionMode.IN_HEAD;
          break;
        }
        case html_js_1.TAG_ID.BR: {
          tokenInHeadNoScript(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenInHeadNoScript(p, token) {
      const errCode = token.type === token_js_1.TokenType.EOF ? error_codes_js_1.ERR.openElementsLeftAfterEof : error_codes_js_1.ERR.disallowedContentInNoscriptInHead;
      p._err(token, errCode);
      p.openElements.pop();
      p.insertionMode = InsertionMode.IN_HEAD;
      p._processToken(token);
    }
    function startTagAfterHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.framesetOk = false;
          p.insertionMode = InsertionMode.IN_BODY;
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_FRAMESET;
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TEMPLATE:
        case html_js_1.TAG_ID.TITLE: {
          p._err(token, error_codes_js_1.ERR.abandonedHeadElementChild);
          p.openElements.push(p.headElement, html_js_1.TAG_ID.HEAD);
          startTagInHead(p, token);
          p.openElements.remove(p.headElement);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
          break;
        }
        default: {
          tokenAfterHead(p, token);
        }
      }
    }
    function endTagAfterHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.BR: {
          tokenAfterHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenAfterHead(p, token) {
      p._insertFakeElement(html_js_1.TAG_NAMES.BODY, html_js_1.TAG_ID.BODY);
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function modeInBody(p, token) {
      switch (token.type) {
        case token_js_1.TokenType.CHARACTER: {
          characterInBody(p, token);
          break;
        }
        case token_js_1.TokenType.WHITESPACE_CHARACTER: {
          whitespaceCharacterInBody(p, token);
          break;
        }
        case token_js_1.TokenType.COMMENT: {
          appendComment(p, token);
          break;
        }
        case token_js_1.TokenType.START_TAG: {
          startTagInBody(p, token);
          break;
        }
        case token_js_1.TokenType.END_TAG: {
          endTagInBody(p, token);
          break;
        }
        case token_js_1.TokenType.EOF: {
          eofInBody(p, token);
          break;
        }
        default:
      }
    }
    function whitespaceCharacterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
    }
    function characterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function htmlStartTagInBody(p, token) {
      if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
      }
    }
    function bodyStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
      }
    }
    function framesetStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.IN_FRAMESET;
      }
    }
    function addressStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function numberedHeaderStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      if ((0, html_js_1.isNumberedHeader)(p.openElements.currentTagId)) {
        p.openElements.pop();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function preStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.skipNextNewLine = true;
      p.framesetOk = false;
    }
    function formStartTagInBody(p, token) {
      const inTemplate = p.openElements.tmplCount > 0;
      if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        if (!inTemplate) {
          p.formElement = p.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(p, token) {
      p.framesetOk = false;
      const tn = token.tagID;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const elementId = p.openElements.tagIDs[i];
        if (tn === html_js_1.TAG_ID.LI && elementId === html_js_1.TAG_ID.LI || (tn === html_js_1.TAG_ID.DD || tn === html_js_1.TAG_ID.DT) && (elementId === html_js_1.TAG_ID.DD || elementId === html_js_1.TAG_ID.DT)) {
          p.openElements.generateImpliedEndTagsWithExclusion(elementId);
          p.openElements.popUntilTagNamePopped(elementId);
          break;
        }
        if (elementId !== html_js_1.TAG_ID.ADDRESS && elementId !== html_js_1.TAG_ID.DIV && elementId !== html_js_1.TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
          break;
        }
      }
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function plaintextStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
    }
    function buttonStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.BUTTON);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
    }
    function aStartTagInBody(p, token) {
      const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(html_js_1.TAG_NAMES.A);
      if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function bStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function nobrStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      if (p.openElements.hasInScope(html_js_1.TAG_ID.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function appletStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
    }
    function tableStartTagInBody(p, token) {
      if (p.treeAdapter.getDocumentMode(p.document) !== html_js_1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_TABLE;
    }
    function areaStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function isHiddenInput(token) {
      const inputType = (0, token_js_1.getTokenAttr)(token, html_js_1.ATTRS.TYPE);
      return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
    }
    function inputStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, html_js_1.NS.HTML);
      if (!isHiddenInput(token)) {
        p.framesetOk = false;
      }
      token.ackSelfClosing = true;
    }
    function paramStartTagInBody(p, token) {
      p._appendElement(token, html_js_1.NS.HTML);
      token.ackSelfClosing = true;
    }
    function hrStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._appendElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function imageStartTagInBody(p, token) {
      token.tagName = html_js_1.TAG_NAMES.IMG;
      token.tagID = html_js_1.TAG_ID.IMG;
      areaStartTagInBody(p, token);
    }
    function textareaStartTagInBody(p, token) {
      p._insertElement(token, html_js_1.NS.HTML);
      p.skipNextNewLine = true;
      p.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
      p.originalInsertionMode = p.insertionMode;
      p.framesetOk = false;
      p.insertionMode = InsertionMode.TEXT;
    }
    function xmpStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._reconstructActiveFormattingElements();
      p.framesetOk = false;
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function iframeStartTagInBody(p, token) {
      p.framesetOk = false;
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function noembedStartTagInBody(p, token) {
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function selectStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
    }
    function optgroupStartTagInBody(p, token) {
      if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
        p.openElements.pop();
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function rbStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTags();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function rtStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.RTC);
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function mathStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenMathMLAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, html_js_1.NS.MATHML);
      } else {
        p._insertElement(token, html_js_1.NS.MATHML);
      }
      token.ackSelfClosing = true;
    }
    function svgStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenSVGAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, html_js_1.NS.SVG);
      } else {
        p._insertElement(token, html_js_1.NS.SVG);
      }
      token.ackSelfClosing = true;
    }
    function genericStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function startTagInBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.I:
        case html_js_1.TAG_ID.S:
        case html_js_1.TAG_ID.B:
        case html_js_1.TAG_ID.U:
        case html_js_1.TAG_ID.EM:
        case html_js_1.TAG_ID.TT:
        case html_js_1.TAG_ID.BIG:
        case html_js_1.TAG_ID.CODE:
        case html_js_1.TAG_ID.FONT:
        case html_js_1.TAG_ID.SMALL:
        case html_js_1.TAG_ID.STRIKE:
        case html_js_1.TAG_ID.STRONG: {
          bStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.A: {
          aStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.H1:
        case html_js_1.TAG_ID.H2:
        case html_js_1.TAG_ID.H3:
        case html_js_1.TAG_ID.H4:
        case html_js_1.TAG_ID.H5:
        case html_js_1.TAG_ID.H6: {
          numberedHeaderStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.P:
        case html_js_1.TAG_ID.DL:
        case html_js_1.TAG_ID.OL:
        case html_js_1.TAG_ID.UL:
        case html_js_1.TAG_ID.DIV:
        case html_js_1.TAG_ID.DIR:
        case html_js_1.TAG_ID.NAV:
        case html_js_1.TAG_ID.MAIN:
        case html_js_1.TAG_ID.MENU:
        case html_js_1.TAG_ID.ASIDE:
        case html_js_1.TAG_ID.CENTER:
        case html_js_1.TAG_ID.FIGURE:
        case html_js_1.TAG_ID.FOOTER:
        case html_js_1.TAG_ID.HEADER:
        case html_js_1.TAG_ID.HGROUP:
        case html_js_1.TAG_ID.DIALOG:
        case html_js_1.TAG_ID.DETAILS:
        case html_js_1.TAG_ID.ADDRESS:
        case html_js_1.TAG_ID.ARTICLE:
        case html_js_1.TAG_ID.SECTION:
        case html_js_1.TAG_ID.SUMMARY:
        case html_js_1.TAG_ID.FIELDSET:
        case html_js_1.TAG_ID.BLOCKQUOTE:
        case html_js_1.TAG_ID.FIGCAPTION: {
          addressStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.LI:
        case html_js_1.TAG_ID.DD:
        case html_js_1.TAG_ID.DT: {
          listItemStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BR:
        case html_js_1.TAG_ID.IMG:
        case html_js_1.TAG_ID.WBR:
        case html_js_1.TAG_ID.AREA:
        case html_js_1.TAG_ID.EMBED:
        case html_js_1.TAG_ID.KEYGEN: {
          areaStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HR: {
          hrStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.RB:
        case html_js_1.TAG_ID.RTC: {
          rbStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.RT:
        case html_js_1.TAG_ID.RP: {
          rtStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.PRE:
        case html_js_1.TAG_ID.LISTING: {
          preStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.XMP: {
          xmpStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.SVG: {
          svgStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HTML: {
          htmlStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TITLE:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          bodyStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOBR: {
          nobrStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.MATH: {
          mathStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          tableStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.INPUT: {
          inputStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.PARAM:
        case html_js_1.TAG_ID.TRACK:
        case html_js_1.TAG_ID.SOURCE: {
          paramStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.IMAGE: {
          imageStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BUTTON: {
          buttonStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.APPLET:
        case html_js_1.TAG_ID.OBJECT:
        case html_js_1.TAG_ID.MARQUEE: {
          appletStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.IFRAME: {
          iframeStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.SELECT: {
          selectStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.OPTION:
        case html_js_1.TAG_ID.OPTGROUP: {
          optgroupStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOEMBED: {
          noembedStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          framesetStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEXTAREA: {
          textareaStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          if (p.options.scriptingEnabled) {
            noembedStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.PLAINTEXT: {
          plaintextStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TR:
        case html_js_1.TAG_ID.HEAD:
        case html_js_1.TAG_ID.FRAME:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COLGROUP: {
          break;
        }
        default: {
          genericStartTagInBody(p, token);
        }
      }
    }
    function bodyEndTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        if (p.options.sourceCodeLocationInfo) {
          const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
          if (bodyElement) {
            p._setEndLocation(bodyElement, token);
          }
        }
      }
    }
    function htmlEndTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        endTagAfterBody(p, token);
      }
    }
    function addressEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function formEndTagInBody(p) {
      const inTemplate = p.openElements.tmplCount > 0;
      const { formElement } = p;
      if (!inTemplate) {
        p.formElement = null;
      }
      if ((formElement || inTemplate) && p.openElements.hasInScope(html_js_1.TAG_ID.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.FORM);
        } else if (formElement) {
          p.openElements.remove(formElement);
        }
      }
    }
    function pEndTagInBody(p) {
      if (!p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._insertFakeElement(html_js_1.TAG_NAMES.P, html_js_1.TAG_ID.P);
      }
      p._closePElement();
    }
    function liEndTagInBody(p) {
      if (p.openElements.hasInListItemScope(html_js_1.TAG_ID.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.LI);
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.LI);
      }
    }
    function ddEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function numberedHeaderEndTagInBody(p) {
      if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(p) {
      p._reconstructActiveFormattingElements();
      p._insertFakeElement(html_js_1.TAG_NAMES.BR, html_js_1.TAG_ID.BR);
      p.openElements.pop();
      p.framesetOk = false;
    }
    function genericEndTagInBody(p, token) {
      const tn = token.tagName;
      const tid = token.tagID;
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        const elementId = p.openElements.tagIDs[i];
        if (tid === elementId && (tid !== html_js_1.TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
          p.openElements.generateImpliedEndTagsWithExclusion(tid);
          if (p.openElements.stackTop >= i)
            p.openElements.shortenToLength(i);
          break;
        }
        if (p._isSpecialElement(element, elementId)) {
          break;
        }
      }
    }
    function endTagInBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.A:
        case html_js_1.TAG_ID.B:
        case html_js_1.TAG_ID.I:
        case html_js_1.TAG_ID.S:
        case html_js_1.TAG_ID.U:
        case html_js_1.TAG_ID.EM:
        case html_js_1.TAG_ID.TT:
        case html_js_1.TAG_ID.BIG:
        case html_js_1.TAG_ID.CODE:
        case html_js_1.TAG_ID.FONT:
        case html_js_1.TAG_ID.NOBR:
        case html_js_1.TAG_ID.SMALL:
        case html_js_1.TAG_ID.STRIKE:
        case html_js_1.TAG_ID.STRONG: {
          callAdoptionAgency(p, token);
          break;
        }
        case html_js_1.TAG_ID.P: {
          pEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.DL:
        case html_js_1.TAG_ID.UL:
        case html_js_1.TAG_ID.OL:
        case html_js_1.TAG_ID.DIR:
        case html_js_1.TAG_ID.DIV:
        case html_js_1.TAG_ID.NAV:
        case html_js_1.TAG_ID.PRE:
        case html_js_1.TAG_ID.MAIN:
        case html_js_1.TAG_ID.MENU:
        case html_js_1.TAG_ID.ASIDE:
        case html_js_1.TAG_ID.BUTTON:
        case html_js_1.TAG_ID.CENTER:
        case html_js_1.TAG_ID.FIGURE:
        case html_js_1.TAG_ID.FOOTER:
        case html_js_1.TAG_ID.HEADER:
        case html_js_1.TAG_ID.HGROUP:
        case html_js_1.TAG_ID.DIALOG:
        case html_js_1.TAG_ID.ADDRESS:
        case html_js_1.TAG_ID.ARTICLE:
        case html_js_1.TAG_ID.DETAILS:
        case html_js_1.TAG_ID.SECTION:
        case html_js_1.TAG_ID.SUMMARY:
        case html_js_1.TAG_ID.LISTING:
        case html_js_1.TAG_ID.FIELDSET:
        case html_js_1.TAG_ID.BLOCKQUOTE:
        case html_js_1.TAG_ID.FIGCAPTION: {
          addressEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.LI: {
          liEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.DD:
        case html_js_1.TAG_ID.DT: {
          ddEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.H1:
        case html_js_1.TAG_ID.H2:
        case html_js_1.TAG_ID.H3:
        case html_js_1.TAG_ID.H4:
        case html_js_1.TAG_ID.H5:
        case html_js_1.TAG_ID.H6: {
          numberedHeaderEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.BR: {
          brEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          bodyEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HTML: {
          htmlEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.APPLET:
        case html_js_1.TAG_ID.OBJECT:
        case html_js_1.TAG_ID.MARQUEE: {
          appletEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default: {
          genericEndTagInBody(p, token);
        }
      }
    }
    function eofInBody(p, token) {
      if (p.tmplInsertionModeStack.length > 0) {
        eofInTemplate(p, token);
      } else {
        stopParsing(p, token);
      }
    }
    function endTagInText(p, token) {
      var _a;
      if (token.tagID === html_js_1.TAG_ID.SCRIPT) {
        (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
      }
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
    }
    function eofInText(p, token) {
      p._err(token, error_codes_js_1.ERR.eofInElementThatCanContainOnlyText);
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
      p.onEof(token);
    }
    function characterInTable(p, token) {
      if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
        p.pendingCharacterTokens.length = 0;
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = InsertionMode.IN_TABLE_TEXT;
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            characterInTableText(p, token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            whitespaceCharacterInTableText(p, token);
            break;
          }
        }
      } else {
        tokenInTable(p, token);
      }
    }
    function captionStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p.activeFormattingElements.insertMarker();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_CAPTION;
    }
    function colgroupStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
    }
    function colStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement(html_js_1.TAG_NAMES.COLGROUP, html_js_1.TAG_ID.COLGROUP);
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      startTagInColumnGroup(p, token);
    }
    function tbodyStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
    }
    function tdStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement(html_js_1.TAG_NAMES.TBODY, html_js_1.TAG_ID.TBODY);
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
      startTagInTableBody(p, token);
    }
    function tableStartTagInTable(p, token) {
      if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
        p._resetInsertionMode();
        p._processStartTag(token);
      }
    }
    function inputStartTagInTable(p, token) {
      if (isHiddenInput(token)) {
        p._appendElement(token, html_js_1.NS.HTML);
      } else {
        tokenInTable(p, token);
      }
      token.ackSelfClosing = true;
    }
    function formStartTagInTable(p, token) {
      if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
      }
    }
    function startTagInTable(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TR: {
          tdStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          colStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          tableStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          tbodyStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.INPUT: {
          inputStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION: {
          captionStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.COLGROUP: {
          colgroupStartTagInTable(p, token);
          break;
        }
        default: {
          tokenInTable(p, token);
        }
      }
    }
    function endTagInTable(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
            p._resetInsertionMode();
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          tokenInTable(p, token);
        }
      }
    }
    function tokenInTable(p, token) {
      const savedFosterParentingState = p.fosterParentingEnabled;
      p.fosterParentingEnabled = true;
      modeInBody(p, token);
      p.fosterParentingEnabled = savedFosterParentingState;
    }
    function whitespaceCharacterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
    }
    function characterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
      p.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(p, token) {
      let i = 0;
      if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
          tokenInTable(p, p.pendingCharacterTokens[i]);
        }
      } else {
        for (; i < p.pendingCharacterTokens.length; i++) {
          p._insertCharacters(p.pendingCharacterTokens[i]);
        }
      }
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token);
    }
    var TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.CAPTION, html_js_1.TAG_ID.COL, html_js_1.TAG_ID.COLGROUP, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.TH, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
    function startTagInCaption(p, token) {
      const tn = token.tagID;
      if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = InsertionMode.IN_TABLE;
          startTagInTable(p, token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCaption(p, token) {
      const tn = token.tagID;
      switch (tn) {
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_TABLE;
            if (tn === html_js_1.TAG_ID.TABLE) {
              endTagInTable(p, token);
            }
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          endTagInBody(p, token);
        }
      }
    }
    function startTagInColumnGroup(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        default: {
          tokenInColumnGroup(p, token);
        }
      }
    }
    function endTagInColumnGroup(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.COLGROUP: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          break;
        }
        default: {
          tokenInColumnGroup(p, token);
        }
      }
    }
    function tokenInColumnGroup(p, token) {
      if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        p._processToken(token);
      }
    }
    function startTagInTableBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TR: {
          p.openElements.clearBackToTableBodyContext();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_ROW;
          break;
        }
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD: {
          p.openElements.clearBackToTableBodyContext();
          p._insertFakeElement(html_js_1.TAG_NAMES.TR, html_js_1.TAG_ID.TR);
          p.insertionMode = InsertionMode.IN_ROW;
          startTagInRow(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
          }
          break;
        }
        default: {
          startTagInTable(p, token);
        }
      }
    }
    function endTagInTableBody(p, token) {
      const tn = token.tagID;
      switch (token.tagID) {
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
            endTagInTable(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          endTagInTable(p, token);
        }
      }
    }
    function startTagInRow(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD: {
          p.openElements.clearBackToTableRowContext();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_CELL;
          p.activeFormattingElements.insertMarker();
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
          }
          break;
        }
        default: {
          startTagInTable(p, token);
        }
      }
    }
    function endTagInRow(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            endTagInTableBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            endTagInTableBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          break;
        }
        default: {
          endTagInTable(p, token);
        }
      }
    }
    function startTagInCell(p, token) {
      const tn = token.tagID;
      if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TD) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TH)) {
          p._closeTableCell();
          startTagInRow(p, token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCell(p, token) {
      const tn = token.tagID;
      switch (tn) {
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_ROW;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            endTagInRow(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML: {
          break;
        }
        default: {
          endTagInBody(p, token);
        }
      }
    }
    function startTagInSelect(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.OPTION: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.OPTGROUP: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.INPUT:
        case html_js_1.TAG_ID.KEYGEN:
        case html_js_1.TAG_ID.TEXTAREA:
        case html_js_1.TAG_ID.SELECT: {
          if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
            if (token.tagID !== html_js_1.TAG_ID.SELECT) {
              p._processStartTag(token);
            }
          }
          break;
        }
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagInSelect(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.OPTGROUP: {
          if (p.openElements.stackTop > 0 && p.openElements.currentTagId === html_js_1.TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          break;
        }
        case html_js_1.TAG_ID.OPTION: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          break;
        }
        case html_js_1.TAG_ID.SELECT: {
          if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          templateEndTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function startTagInSelectInTable(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
        p._resetInsertionMode();
        p._processStartTag(token);
      } else {
        startTagInSelect(p, token);
      }
    }
    function endTagInSelectInTable(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
          p._resetInsertionMode();
          p.onEndTag(token);
        }
      } else {
        endTagInSelect(p, token);
      }
    }
    function startTagInTemplate(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TEMPLATE:
        case html_js_1.TAG_ID.TITLE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
          p.insertionMode = InsertionMode.IN_TABLE;
          startTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
          p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
          startTagInColumnGroup(p, token);
          break;
        }
        case html_js_1.TAG_ID.TR: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
          p.insertionMode = InsertionMode.IN_TABLE_BODY;
          startTagInTableBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
          p.insertionMode = InsertionMode.IN_ROW;
          startTagInRow(p, token);
          break;
        }
        default: {
          p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
          p.insertionMode = InsertionMode.IN_BODY;
          startTagInBody(p, token);
        }
      }
    }
    function endTagInTemplate(p, token) {
      if (token.tagID === html_js_1.TAG_ID.TEMPLATE) {
        templateEndTagInHead(p, token);
      }
    }
    function eofInTemplate(p, token) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
        p.onEof(token);
      } else {
        stopParsing(p, token);
      }
    }
    function startTagAfterBody(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterBody(p, token);
      }
    }
    function endTagAfterBody(p, token) {
      var _a;
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        if (!p.fragmentContext) {
          p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
        }
        if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === html_js_1.TAG_ID.HTML) {
          p._setEndLocation(p.openElements.items[0], token);
          const bodyElement = p.openElements.items[1];
          if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
            p._setEndLocation(bodyElement, token);
          }
        }
      } else {
        tokenAfterBody(p, token);
      }
    }
    function tokenAfterBody(p, token) {
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function startTagInFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.FRAME: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagInFrameset(p, token) {
      if (token.tagID === html_js_1.TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagId !== html_js_1.TAG_ID.FRAMESET) {
          p.insertionMode = InsertionMode.AFTER_FRAMESET;
        }
      }
    }
    function startTagAfterFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagAfterFrameset(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
      }
    }
    function startTagAfterAfterBody(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterAfterBody(p, token);
      }
    }
    function tokenAfterAfterBody(p, token) {
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function startTagAfterAfterFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function nullCharacterInForeignContent(p, token) {
      token.chars = unicode.REPLACEMENT_CHARACTER;
      p._insertCharacters(token);
    }
    function characterInForeignContent(p, token) {
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function popUntilHtmlOrIntegrationPoint(p) {
      while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== html_js_1.NS.HTML && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
        p.openElements.pop();
      }
    }
    function startTagInForeignContent(p, token) {
      if (foreignContent.causesExit(token)) {
        popUntilHtmlOrIntegrationPoint(p);
        p._startTagOutsideForeignContent(token);
      } else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === html_js_1.NS.MATHML) {
          foreignContent.adjustTokenMathMLAttrs(token);
        } else if (currentNs === html_js_1.NS.SVG) {
          foreignContent.adjustTokenSVGTagName(token);
          foreignContent.adjustTokenSVGAttrs(token);
        }
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, currentNs);
        } else {
          p._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(p, token) {
      if (token.tagID === html_js_1.TAG_ID.P || token.tagID === html_js_1.TAG_ID.BR) {
        popUntilHtmlOrIntegrationPoint(p);
        p._endTagOutsideForeignContent(token);
        return;
      }
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === html_js_1.NS.HTML) {
          p._endTagOutsideForeignContent(token);
          break;
        }
        const tagName = p.treeAdapter.getTagName(element);
        if (tagName.toLowerCase() === token.tagName) {
          token.tagName = tagName;
          p.openElements.shortenToLength(i);
          break;
        }
      }
    }
  }
});

// node_modules/entities/lib/escape.js
var require_escape = __commonJS({
  "node_modules/entities/lib/escape.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
    exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    exports.getCodePoint = String.prototype.codePointAt != null ? function(str, index) {
      return str.codePointAt(index);
    } : function(c, index) {
      return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
    };
    function encodeXML(str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = exports.xmlReplacer.exec(str)) !== null) {
        var i = match.index;
        var char = str.charCodeAt(i);
        var next = xmlCodeMap.get(char);
        if (next !== void 0) {
          ret += str.substring(lastIdx, i) + next;
          lastIdx = i + 1;
        } else {
          ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
          lastIdx = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
      }
      return ret + str.substr(lastIdx);
    }
    exports.encodeXML = encodeXML;
    exports.escape = encodeXML;
    function getEscaper(regex, map) {
      return function escape(data) {
        var match;
        var lastIdx = 0;
        var result = "";
        while (match = regex.exec(data)) {
          if (lastIdx !== match.index) {
            result += data.substring(lastIdx, match.index);
          }
          result += map.get(match[0].charCodeAt(0));
          lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
      };
    }
    exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    exports.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    exports.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// node_modules/parse5/dist/cjs/serializer/index.js
var require_serializer = __commonJS({
  "node_modules/parse5/dist/cjs/serializer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeOuter = exports.serialize = void 0;
    var html_js_1 = require_html();
    var escape_js_1 = require_escape();
    var default_js_1 = require_default();
    var VOID_ELEMENTS = /* @__PURE__ */ new Set([
      html_js_1.TAG_NAMES.AREA,
      html_js_1.TAG_NAMES.BASE,
      html_js_1.TAG_NAMES.BASEFONT,
      html_js_1.TAG_NAMES.BGSOUND,
      html_js_1.TAG_NAMES.BR,
      html_js_1.TAG_NAMES.COL,
      html_js_1.TAG_NAMES.EMBED,
      html_js_1.TAG_NAMES.FRAME,
      html_js_1.TAG_NAMES.HR,
      html_js_1.TAG_NAMES.IMG,
      html_js_1.TAG_NAMES.INPUT,
      html_js_1.TAG_NAMES.KEYGEN,
      html_js_1.TAG_NAMES.LINK,
      html_js_1.TAG_NAMES.META,
      html_js_1.TAG_NAMES.PARAM,
      html_js_1.TAG_NAMES.SOURCE,
      html_js_1.TAG_NAMES.TRACK,
      html_js_1.TAG_NAMES.WBR
    ]);
    function isVoidElement(node, options) {
      return options.treeAdapter.isElementNode(node) && options.treeAdapter.getNamespaceURI(node) === html_js_1.NS.HTML && VOID_ELEMENTS.has(options.treeAdapter.getTagName(node));
    }
    var defaultOpts = { treeAdapter: default_js_1.defaultTreeAdapter, scriptingEnabled: true };
    function serialize(node, options) {
      const opts = Object.assign(Object.assign({}, defaultOpts), options);
      if (isVoidElement(node, opts)) {
        return "";
      }
      return serializeChildNodes(node, opts);
    }
    exports.serialize = serialize;
    function serializeOuter(node, options) {
      const opts = Object.assign(Object.assign({}, defaultOpts), options);
      return serializeNode(node, opts);
    }
    exports.serializeOuter = serializeOuter;
    function serializeChildNodes(parentNode, options) {
      let html = "";
      const container = options.treeAdapter.isElementNode(parentNode) && options.treeAdapter.getTagName(parentNode) === html_js_1.TAG_NAMES.TEMPLATE && options.treeAdapter.getNamespaceURI(parentNode) === html_js_1.NS.HTML ? options.treeAdapter.getTemplateContent(parentNode) : parentNode;
      const childNodes = options.treeAdapter.getChildNodes(container);
      if (childNodes) {
        for (const currentNode of childNodes) {
          html += serializeNode(currentNode, options);
        }
      }
      return html;
    }
    function serializeNode(node, options) {
      if (options.treeAdapter.isElementNode(node)) {
        return serializeElement(node, options);
      }
      if (options.treeAdapter.isTextNode(node)) {
        return serializeTextNode(node, options);
      }
      if (options.treeAdapter.isCommentNode(node)) {
        return serializeCommentNode(node, options);
      }
      if (options.treeAdapter.isDocumentTypeNode(node)) {
        return serializeDocumentTypeNode(node, options);
      }
      return "";
    }
    function serializeElement(node, options) {
      const tn = options.treeAdapter.getTagName(node);
      return `<${tn}${serializeAttributes(node, options)}>${isVoidElement(node, options) ? "" : `${serializeChildNodes(node, options)}</${tn}>`}`;
    }
    function serializeAttributes(node, { treeAdapter }) {
      let html = "";
      for (const attr of treeAdapter.getAttrList(node)) {
        html += " ";
        if (!attr.namespace) {
          html += attr.name;
        } else
          switch (attr.namespace) {
            case html_js_1.NS.XML: {
              html += `xml:${attr.name}`;
              break;
            }
            case html_js_1.NS.XMLNS: {
              if (attr.name !== "xmlns") {
                html += "xmlns:";
              }
              html += attr.name;
              break;
            }
            case html_js_1.NS.XLINK: {
              html += `xlink:${attr.name}`;
              break;
            }
            default: {
              html += `${attr.prefix}:${attr.name}`;
            }
          }
        html += `="${(0, escape_js_1.escapeAttribute)(attr.value)}"`;
      }
      return html;
    }
    function serializeTextNode(node, options) {
      const { treeAdapter } = options;
      const content = treeAdapter.getTextNodeContent(node);
      const parent = treeAdapter.getParentNode(node);
      const parentTn = parent && treeAdapter.isElementNode(parent) && treeAdapter.getTagName(parent);
      return parentTn && treeAdapter.getNamespaceURI(parent) === html_js_1.NS.HTML && (0, html_js_1.hasUnescapedText)(parentTn, options.scriptingEnabled) ? content : (0, escape_js_1.escapeText)(content);
    }
    function serializeCommentNode(node, { treeAdapter }) {
      return `<!--${treeAdapter.getCommentNodeContent(node)}-->`;
    }
    function serializeDocumentTypeNode(node, { treeAdapter }) {
      return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(node)}>`;
    }
  }
});

// node_modules/parse5/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/parse5/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseFragment = exports.parse = exports.TokenizerMode = exports.Tokenizer = exports.Token = exports.html = exports.foreignContent = exports.ErrorCodes = exports.serializeOuter = exports.serialize = exports.Parser = exports.defaultTreeAdapter = void 0;
    var index_js_1 = require_parser();
    var default_js_1 = require_default();
    Object.defineProperty(exports, "defaultTreeAdapter", { enumerable: true, get: function() {
      return default_js_1.defaultTreeAdapter;
    } });
    var index_js_2 = require_parser();
    Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
      return index_js_2.Parser;
    } });
    var index_js_3 = require_serializer();
    Object.defineProperty(exports, "serialize", { enumerable: true, get: function() {
      return index_js_3.serialize;
    } });
    Object.defineProperty(exports, "serializeOuter", { enumerable: true, get: function() {
      return index_js_3.serializeOuter;
    } });
    var error_codes_js_1 = require_error_codes();
    Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
      return error_codes_js_1.ERR;
    } });
    exports.foreignContent = require_foreign_content();
    exports.html = require_html();
    exports.Token = require_token();
    var index_js_4 = require_tokenizer();
    Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
      return index_js_4.Tokenizer;
    } });
    Object.defineProperty(exports, "TokenizerMode", { enumerable: true, get: function() {
      return index_js_4.TokenizerMode;
    } });
    function parse(html, options) {
      return index_js_1.Parser.parse(html, options);
    }
    exports.parse = parse;
    function parseFragment(fragmentContext, html, options) {
      if (typeof fragmentContext === "string") {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
      }
      const parser2 = index_js_1.Parser.getFragmentParser(fragmentContext, options);
      parser2.tokenizer.write(html, true);
      return parser2.getFragment();
    }
    exports.parseFragment = parseFragment;
  }
});

// node_modules/xmlserializer/xmlserializer.js
var require_xmlserializer = __commonJS({
  "node_modules/xmlserializer/xmlserializer.js"(exports, module2) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module2 === "object" && module2.exports) {
        module2.exports = factory();
      } else {
        root.xmlserializer = factory();
      }
    })(exports, function() {
      var removeInvalidCharacters = function(content) {
        return content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
      };
      var serializeAttributeValue = function(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
      };
      var serializeTextContent = function(content) {
        return content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      var serializeAttribute = function(attr) {
        var value = attr.value;
        return " " + attr.name + '="' + serializeAttributeValue(value) + '"';
      };
      var getTagName = function(node) {
        var tagName = node.tagName;
        if (node.namespaceURI === "http://www.w3.org/1999/xhtml") {
          tagName = tagName.toLowerCase();
        }
        return tagName;
      };
      var serializeNamespace = function(node, isRootNode) {
        var nodeHasXmlnsAttr = Array.prototype.map.call(node.attributes || node.attrs, function(attr) {
          return attr.name;
        }).indexOf("xmlns") >= 0;
        if (!nodeHasXmlnsAttr && (isRootNode || node.namespaceURI !== node.parentNode.namespaceURI)) {
          return ' xmlns="' + node.namespaceURI + '"';
        } else {
          return "";
        }
      };
      var serializeChildren = function(node) {
        return Array.prototype.map.call(node.childNodes, function(childNode) {
          return nodeTreeToXHTML(childNode);
        }).join("");
      };
      var serializeTag = function(node, isRootNode) {
        var output = "<" + getTagName(node);
        output += serializeNamespace(node, isRootNode);
        Array.prototype.forEach.call(node.attributes || node.attrs, function(attr) {
          output += serializeAttribute(attr);
        });
        if (node.childNodes.length > 0) {
          output += ">";
          output += serializeChildren(node);
          output += "</" + getTagName(node) + ">";
        } else {
          output += "/>";
        }
        return output;
      };
      var serializeText = function(node) {
        var text = node.nodeValue || node.value || "";
        return serializeTextContent(text);
      };
      var serializeComment = function(node) {
        return "<!--" + node.data.replace(/-/g, "&#45;") + "-->";
      };
      var serializeCDATA = function(node) {
        return "<![CDATA[" + node.nodeValue + "]]>";
      };
      var nodeTreeToXHTML = function(node, options) {
        var isRootNode = options && options.rootNode;
        if (node.nodeName === "#document" || node.nodeName === "#document-fragment") {
          return serializeChildren(node);
        } else {
          if (node.tagName) {
            return serializeTag(node, isRootNode);
          } else if (node.nodeName === "#text") {
            return serializeText(node);
          } else if (node.nodeName === "#comment") {
            return serializeComment(node);
          } else if (node.nodeName === "#cdata-section") {
            return serializeCDATA(node);
          }
        }
      };
      return {
        serializeToString: function(node) {
          return removeInvalidCharacters(nodeTreeToXHTML(node, { rootNode: true }));
        }
      };
    });
  }
});

// src/readability/JSDOMParser.js
var require_JSDOMParser = __commonJS({
  "src/readability/JSDOMParser.js"(exports, module2) {
    (function(global) {
      var entityTable = {
        "lt": "<",
        "gt": ">",
        "amp": "&",
        "quot": '"',
        "apos": "'"
      };
      var reverseEntityTable = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;"
      };
      function encodeTextContentHTML(s) {
        return s.replace(/[&<>]/g, function(x) {
          return reverseEntityTable[x];
        });
      }
      function encodeHTML(s) {
        return s.replace(/[&<>'"]/g, function(x) {
          return reverseEntityTable[x];
        });
      }
      function decodeHTML(str) {
        return str.replace(/&(quot|amp|apos|lt|gt);/g, function(match, tag) {
          return entityTable[tag];
        }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(match, hex, numStr) {
          var num = parseInt(hex || numStr, hex ? 16 : 10);
          return String.fromCharCode(num);
        });
      }
      var styleMap = {
        "alignmentBaseline": "alignment-baseline",
        "background": "background",
        "backgroundAttachment": "background-attachment",
        "backgroundClip": "background-clip",
        "backgroundColor": "background-color",
        "backgroundImage": "background-image",
        "backgroundOrigin": "background-origin",
        "backgroundPosition": "background-position",
        "backgroundPositionX": "background-position-x",
        "backgroundPositionY": "background-position-y",
        "backgroundRepeat": "background-repeat",
        "backgroundRepeatX": "background-repeat-x",
        "backgroundRepeatY": "background-repeat-y",
        "backgroundSize": "background-size",
        "baselineShift": "baseline-shift",
        "border": "border",
        "borderBottom": "border-bottom",
        "borderBottomColor": "border-bottom-color",
        "borderBottomLeftRadius": "border-bottom-left-radius",
        "borderBottomRightRadius": "border-bottom-right-radius",
        "borderBottomStyle": "border-bottom-style",
        "borderBottomWidth": "border-bottom-width",
        "borderCollapse": "border-collapse",
        "borderColor": "border-color",
        "borderImage": "border-image",
        "borderImageOutset": "border-image-outset",
        "borderImageRepeat": "border-image-repeat",
        "borderImageSlice": "border-image-slice",
        "borderImageSource": "border-image-source",
        "borderImageWidth": "border-image-width",
        "borderLeft": "border-left",
        "borderLeftColor": "border-left-color",
        "borderLeftStyle": "border-left-style",
        "borderLeftWidth": "border-left-width",
        "borderRadius": "border-radius",
        "borderRight": "border-right",
        "borderRightColor": "border-right-color",
        "borderRightStyle": "border-right-style",
        "borderRightWidth": "border-right-width",
        "borderSpacing": "border-spacing",
        "borderStyle": "border-style",
        "borderTop": "border-top",
        "borderTopColor": "border-top-color",
        "borderTopLeftRadius": "border-top-left-radius",
        "borderTopRightRadius": "border-top-right-radius",
        "borderTopStyle": "border-top-style",
        "borderTopWidth": "border-top-width",
        "borderWidth": "border-width",
        "bottom": "bottom",
        "boxShadow": "box-shadow",
        "boxSizing": "box-sizing",
        "captionSide": "caption-side",
        "clear": "clear",
        "clip": "clip",
        "clipPath": "clip-path",
        "clipRule": "clip-rule",
        "color": "color",
        "colorInterpolation": "color-interpolation",
        "colorInterpolationFilters": "color-interpolation-filters",
        "colorProfile": "color-profile",
        "colorRendering": "color-rendering",
        "content": "content",
        "counterIncrement": "counter-increment",
        "counterReset": "counter-reset",
        "cursor": "cursor",
        "direction": "direction",
        "display": "display",
        "dominantBaseline": "dominant-baseline",
        "emptyCells": "empty-cells",
        "enableBackground": "enable-background",
        "fill": "fill",
        "fillOpacity": "fill-opacity",
        "fillRule": "fill-rule",
        "filter": "filter",
        "cssFloat": "float",
        "floodColor": "flood-color",
        "floodOpacity": "flood-opacity",
        "font": "font",
        "fontFamily": "font-family",
        "fontSize": "font-size",
        "fontStretch": "font-stretch",
        "fontStyle": "font-style",
        "fontVariant": "font-variant",
        "fontWeight": "font-weight",
        "glyphOrientationHorizontal": "glyph-orientation-horizontal",
        "glyphOrientationVertical": "glyph-orientation-vertical",
        "height": "height",
        "imageRendering": "image-rendering",
        "kerning": "kerning",
        "left": "left",
        "letterSpacing": "letter-spacing",
        "lightingColor": "lighting-color",
        "lineHeight": "line-height",
        "listStyle": "list-style",
        "listStyleImage": "list-style-image",
        "listStylePosition": "list-style-position",
        "listStyleType": "list-style-type",
        "margin": "margin",
        "marginBottom": "margin-bottom",
        "marginLeft": "margin-left",
        "marginRight": "margin-right",
        "marginTop": "margin-top",
        "marker": "marker",
        "markerEnd": "marker-end",
        "markerMid": "marker-mid",
        "markerStart": "marker-start",
        "mask": "mask",
        "maxHeight": "max-height",
        "maxWidth": "max-width",
        "minHeight": "min-height",
        "minWidth": "min-width",
        "opacity": "opacity",
        "orphans": "orphans",
        "outline": "outline",
        "outlineColor": "outline-color",
        "outlineOffset": "outline-offset",
        "outlineStyle": "outline-style",
        "outlineWidth": "outline-width",
        "overflow": "overflow",
        "overflowX": "overflow-x",
        "overflowY": "overflow-y",
        "padding": "padding",
        "paddingBottom": "padding-bottom",
        "paddingLeft": "padding-left",
        "paddingRight": "padding-right",
        "paddingTop": "padding-top",
        "page": "page",
        "pageBreakAfter": "page-break-after",
        "pageBreakBefore": "page-break-before",
        "pageBreakInside": "page-break-inside",
        "pointerEvents": "pointer-events",
        "position": "position",
        "quotes": "quotes",
        "resize": "resize",
        "right": "right",
        "shapeRendering": "shape-rendering",
        "size": "size",
        "speak": "speak",
        "src": "src",
        "stopColor": "stop-color",
        "stopOpacity": "stop-opacity",
        "stroke": "stroke",
        "strokeDasharray": "stroke-dasharray",
        "strokeDashoffset": "stroke-dashoffset",
        "strokeLinecap": "stroke-linecap",
        "strokeLinejoin": "stroke-linejoin",
        "strokeMiterlimit": "stroke-miterlimit",
        "strokeOpacity": "stroke-opacity",
        "strokeWidth": "stroke-width",
        "tableLayout": "table-layout",
        "textAlign": "text-align",
        "textAnchor": "text-anchor",
        "textDecoration": "text-decoration",
        "textIndent": "text-indent",
        "textLineThrough": "text-line-through",
        "textLineThroughColor": "text-line-through-color",
        "textLineThroughMode": "text-line-through-mode",
        "textLineThroughStyle": "text-line-through-style",
        "textLineThroughWidth": "text-line-through-width",
        "textOverflow": "text-overflow",
        "textOverline": "text-overline",
        "textOverlineColor": "text-overline-color",
        "textOverlineMode": "text-overline-mode",
        "textOverlineStyle": "text-overline-style",
        "textOverlineWidth": "text-overline-width",
        "textRendering": "text-rendering",
        "textShadow": "text-shadow",
        "textTransform": "text-transform",
        "textUnderline": "text-underline",
        "textUnderlineColor": "text-underline-color",
        "textUnderlineMode": "text-underline-mode",
        "textUnderlineStyle": "text-underline-style",
        "textUnderlineWidth": "text-underline-width",
        "top": "top",
        "unicodeBidi": "unicode-bidi",
        "unicodeRange": "unicode-range",
        "vectorEffect": "vector-effect",
        "verticalAlign": "vertical-align",
        "visibility": "visibility",
        "whiteSpace": "white-space",
        "widows": "widows",
        "width": "width",
        "wordBreak": "word-break",
        "wordSpacing": "word-spacing",
        "wordWrap": "word-wrap",
        "writingMode": "writing-mode",
        "zIndex": "z-index",
        "zoom": "zoom"
      };
      var voidElems = {
        "area": true,
        "base": true,
        "br": true,
        "col": true,
        "command": true,
        "embed": true,
        "hr": true,
        "img": true,
        "input": true,
        "link": true,
        "meta": true,
        "param": true,
        "source": true,
        "wbr": true
      };
      var whitespace = [" ", "	", "\n", "\r"];
      var nodeTypes = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
      };
      function getElementsByTagName(tag) {
        tag = tag.toUpperCase();
        var elems = [];
        var allTags = tag === "*";
        function getElems(node) {
          var length = node.children.length;
          for (var i = 0; i < length; i++) {
            var child = node.children[i];
            if (allTags || child.tagName === tag)
              elems.push(child);
            getElems(child);
          }
        }
        getElems(this);
        elems._isLiveNodeList = true;
        return elems;
      }
      var Node = function() {
      };
      Node.prototype = {
        attributes: null,
        childNodes: null,
        localName: null,
        nodeName: null,
        parentNode: null,
        textContent: null,
        nextSibling: null,
        previousSibling: null,
        get firstChild() {
          return this.childNodes[0] || null;
        },
        get firstElementChild() {
          return this.children[0] || null;
        },
        get lastChild() {
          return this.childNodes[this.childNodes.length - 1] || null;
        },
        get lastElementChild() {
          return this.children[this.children.length - 1] || null;
        },
        appendChild: function(child) {
          if (child.parentNode) {
            child.parentNode.removeChild(child);
          }
          var last = this.lastChild;
          if (last)
            last.nextSibling = child;
          child.previousSibling = last;
          if (child.nodeType === Node.ELEMENT_NODE) {
            child.previousElementSibling = this.children[this.children.length - 1] || null;
            this.children.push(child);
            child.previousElementSibling && (child.previousElementSibling.nextElementSibling = child);
          }
          this.childNodes.push(child);
          child.parentNode = this;
        },
        removeChild: function(child) {
          var childNodes = this.childNodes;
          var childIndex = childNodes.indexOf(child);
          if (childIndex === -1) {
            throw "removeChild: node not found";
          } else {
            child.parentNode = null;
            var prev = child.previousSibling;
            var next = child.nextSibling;
            if (prev)
              prev.nextSibling = next;
            if (next)
              next.previousSibling = prev;
            if (child.nodeType === Node.ELEMENT_NODE) {
              prev = child.previousElementSibling;
              next = child.nextElementSibling;
              if (prev)
                prev.nextElementSibling = next;
              if (next)
                next.previousElementSibling = prev;
              this.children.splice(this.children.indexOf(child), 1);
            }
            child.previousSibling = child.nextSibling = null;
            child.previousElementSibling = child.nextElementSibling = null;
            return childNodes.splice(childIndex, 1)[0];
          }
        },
        replaceChild: function(newNode, oldNode) {
          var childNodes = this.childNodes;
          var childIndex = childNodes.indexOf(oldNode);
          if (childIndex === -1) {
            throw "replaceChild: node not found";
          } else {
            if (newNode.parentNode)
              newNode.parentNode.removeChild(newNode);
            childNodes[childIndex] = newNode;
            newNode.nextSibling = oldNode.nextSibling;
            newNode.previousSibling = oldNode.previousSibling;
            if (newNode.nextSibling)
              newNode.nextSibling.previousSibling = newNode;
            if (newNode.previousSibling)
              newNode.previousSibling.nextSibling = newNode;
            newNode.parentNode = this;
            if (newNode.nodeType === Node.ELEMENT_NODE) {
              if (oldNode.nodeType === Node.ELEMENT_NODE) {
                newNode.previousElementSibling = oldNode.previousElementSibling;
                newNode.nextElementSibling = oldNode.nextElementSibling;
                if (newNode.previousElementSibling)
                  newNode.previousElementSibling.nextElementSibling = newNode;
                if (newNode.nextElementSibling)
                  newNode.nextElementSibling.previousElementSibling = newNode;
                this.children[this.children.indexOf(oldNode)] = newNode;
              } else {
                newNode.previousElementSibling = function() {
                  for (var i = childIndex - 1; i >= 0; i--) {
                    if (childNodes[i].nodeType === Node.ELEMENT_NODE)
                      return childNodes[i];
                  }
                  return null;
                }();
                if (newNode.previousElementSibling) {
                  newNode.nextElementSibling = newNode.previousElementSibling.nextElementSibling;
                } else {
                  newNode.nextElementSibling = function() {
                    for (var i = childIndex + 1; i < childNodes.length; i++) {
                      if (childNodes[i].nodeType === Node.ELEMENT_NODE)
                        return childNodes[i];
                    }
                    return null;
                  }();
                }
                if (newNode.previousElementSibling)
                  newNode.previousElementSibling.nextElementSibling = newNode;
                if (newNode.nextElementSibling)
                  newNode.nextElementSibling.previousElementSibling = newNode;
                if (newNode.nextElementSibling)
                  this.children.splice(this.children.indexOf(newNode.nextElementSibling), 0, newNode);
                else
                  this.children.push(newNode);
              }
            } else if (oldNode.nodeType === Node.ELEMENT_NODE) {
              if (oldNode.previousElementSibling)
                oldNode.previousElementSibling.nextElementSibling = oldNode.nextElementSibling;
              if (oldNode.nextElementSibling)
                oldNode.nextElementSibling.previousElementSibling = oldNode.previousElementSibling;
              this.children.splice(this.children.indexOf(oldNode), 1);
            }
            oldNode.parentNode = null;
            oldNode.previousSibling = null;
            oldNode.nextSibling = null;
            if (oldNode.nodeType === Node.ELEMENT_NODE) {
              oldNode.previousElementSibling = null;
              oldNode.nextElementSibling = null;
            }
            return oldNode;
          }
        },
        __JSDOMParser__: true
      };
      for (var nodeType in nodeTypes) {
        Node[nodeType] = Node.prototype[nodeType] = nodeTypes[nodeType];
      }
      var Attribute = function(name, value) {
        this.name = name;
        this._value = value;
      };
      Attribute.prototype = {
        get value() {
          return this._value;
        },
        setValue: function(newValue) {
          this._value = newValue;
        },
        getEncodedValue: function() {
          return encodeHTML(this._value);
        }
      };
      var Comment = function() {
        this.childNodes = [];
      };
      Comment.prototype = {
        __proto__: Node.prototype,
        nodeName: "#comment",
        nodeType: Node.COMMENT_NODE
      };
      var Text = function() {
        this.childNodes = [];
      };
      Text.prototype = {
        __proto__: Node.prototype,
        nodeName: "#text",
        nodeType: Node.TEXT_NODE,
        get textContent() {
          if (typeof this._textContent === "undefined") {
            this._textContent = decodeHTML(this._innerHTML || "");
          }
          return this._textContent;
        },
        get innerHTML() {
          if (typeof this._innerHTML === "undefined") {
            this._innerHTML = encodeTextContentHTML(this._textContent || "");
          }
          return this._innerHTML;
        },
        get data() {
          return this.textContent;
        },
        get nodeValue() {
          return this.textContent;
        },
        set innerHTML(newHTML) {
          this._innerHTML = newHTML;
          delete this._textContent;
        },
        set textContent(newText) {
          this._textContent = newText;
          delete this._innerHTML;
        },
        set data(newText) {
          this.textContent = newText;
        }
      };
      var Document = function(url) {
        this.documentURI = url;
        this.styleSheets = [];
        this.childNodes = [];
        this.children = [];
      };
      Document.prototype = {
        __proto__: Node.prototype,
        nodeName: "#document",
        nodeType: Node.DOCUMENT_NODE,
        title: "",
        getElementsByTagName,
        getElementById: function(id) {
          function getElem(node) {
            var length = node.children.length;
            if (node.id === id)
              return node;
            for (var i = 0; i < length; i++) {
              var el = getElem(node.children[i]);
              if (el)
                return el;
            }
            return null;
          }
          return getElem(this);
        },
        createElement: function(tag) {
          var node = new Element(tag);
          return node;
        },
        createTextNode: function(text) {
          var node = new Text();
          node.textContent = text;
          return node;
        },
        get baseURI() {
          if (!this.hasOwnProperty("_baseURI")) {
            this._baseURI = this.documentURI;
            var baseElements = this.getElementsByTagName("base");
            var href = baseElements[0] && baseElements[0].getAttribute("href");
            if (href) {
              try {
                this._baseURI = new URL(href, this._baseURI).href;
              } catch (ex) {
              }
            }
          }
          return this._baseURI;
        }
      };
      var Element = function(tag) {
        this._matchingTag = tag;
        var lastColonIndex = tag.lastIndexOf(":");
        if (lastColonIndex != -1) {
          tag = tag.substring(lastColonIndex + 1);
        }
        this.attributes = [];
        this.childNodes = [];
        this.children = [];
        this.nextElementSibling = this.previousElementSibling = null;
        this.localName = tag.toLowerCase();
        this.tagName = tag.toUpperCase();
        this.style = new Style(this);
      };
      Element.prototype = {
        __proto__: Node.prototype,
        nodeType: Node.ELEMENT_NODE,
        getElementsByTagName,
        get className() {
          return this.getAttribute("class") || "";
        },
        set className(str) {
          this.setAttribute("class", str);
        },
        get id() {
          return this.getAttribute("id") || "";
        },
        set id(str) {
          this.setAttribute("id", str);
        },
        get href() {
          return this.getAttribute("href") || "";
        },
        set href(str) {
          this.setAttribute("href", str);
        },
        get src() {
          return this.getAttribute("src") || "";
        },
        set src(str) {
          this.setAttribute("src", str);
        },
        get srcset() {
          return this.getAttribute("srcset") || "";
        },
        set srcset(str) {
          this.setAttribute("srcset", str);
        },
        get nodeName() {
          return this.tagName;
        },
        get innerHTML() {
          function getHTML(node) {
            var i = 0;
            for (i = 0; i < node.childNodes.length; i++) {
              var child = node.childNodes[i];
              if (child.localName) {
                arr.push("<" + child.localName);
                for (var j = 0; j < child.attributes.length; j++) {
                  var attr = child.attributes[j];
                  var val = attr.getEncodedValue();
                  var quote = val.indexOf('"') === -1 ? '"' : "'";
                  arr.push(" " + attr.name + "=" + quote + val + quote);
                }
                if (child.localName in voidElems && !child.childNodes.length) {
                  arr.push("/>");
                } else {
                  arr.push(">");
                  getHTML(child);
                  arr.push("</" + child.localName + ">");
                }
              } else {
                arr.push(child.innerHTML);
              }
            }
          }
          var arr = [];
          getHTML(this);
          return arr.join("");
        },
        set innerHTML(html) {
          var parser2 = new JSDOMParser2();
          var node = parser2.parse(html);
          var i;
          for (i = this.childNodes.length; --i >= 0; ) {
            this.childNodes[i].parentNode = null;
          }
          this.childNodes = node.childNodes;
          this.children = node.children;
          for (i = this.childNodes.length; --i >= 0; ) {
            this.childNodes[i].parentNode = this;
          }
        },
        set textContent(text) {
          for (var i = this.childNodes.length; --i >= 0; ) {
            this.childNodes[i].parentNode = null;
          }
          var node = new Text();
          this.childNodes = [node];
          this.children = [];
          node.textContent = text;
          node.parentNode = this;
        },
        get textContent() {
          function getText(node) {
            var nodes = node.childNodes;
            for (var i = 0; i < nodes.length; i++) {
              var child = nodes[i];
              if (child.nodeType === 3) {
                text.push(child.textContent);
              } else {
                getText(child);
              }
            }
          }
          var text = [];
          getText(this);
          return text.join("");
        },
        getAttribute: function(name) {
          for (var i = this.attributes.length; --i >= 0; ) {
            var attr = this.attributes[i];
            if (attr.name === name) {
              return attr.value;
            }
          }
          return void 0;
        },
        setAttribute: function(name, value) {
          for (var i = this.attributes.length; --i >= 0; ) {
            var attr = this.attributes[i];
            if (attr.name === name) {
              attr.setValue(value);
              return;
            }
          }
          this.attributes.push(new Attribute(name, value));
        },
        removeAttribute: function(name) {
          for (var i = this.attributes.length; --i >= 0; ) {
            var attr = this.attributes[i];
            if (attr.name === name) {
              this.attributes.splice(i, 1);
              break;
            }
          }
        },
        hasAttribute: function(name) {
          return this.attributes.some(function(attr) {
            return attr.name == name;
          });
        }
      };
      var Style = function(node) {
        this.node = node;
      };
      Style.prototype = {
        getStyle: function(styleName) {
          var attr = this.node.getAttribute("style");
          if (!attr)
            return void 0;
          var styles = attr.split(";");
          for (var i = 0; i < styles.length; i++) {
            var style = styles[i].split(":");
            var name = style[0].trim();
            if (name === styleName)
              return style[1].trim();
          }
          return void 0;
        },
        setStyle: function(styleName, styleValue) {
          var value = this.node.getAttribute("style") || "";
          var index = 0;
          do {
            var next = value.indexOf(";", index) + 1;
            var length = next - index - 1;
            var style = length > 0 ? value.substr(index, length) : value.substr(index);
            if (style.substr(0, style.indexOf(":")).trim() === styleName) {
              value = value.substr(0, index).trim() + (next ? " " + value.substr(next).trim() : "");
              break;
            }
            index = next;
          } while (index);
          value += " " + styleName + ": " + styleValue + ";";
          this.node.setAttribute("style", value.trim());
        }
      };
      for (var jsName in styleMap) {
        (function(cssName) {
          Style.prototype.__defineGetter__(jsName, function() {
            return this.getStyle(cssName);
          });
          Style.prototype.__defineSetter__(jsName, function(value) {
            this.setStyle(cssName, value);
          });
        })(styleMap[jsName]);
      }
      var JSDOMParser2 = function() {
        this.currentChar = 0;
        this.strBuf = [];
        this.retPair = [];
        this.errorState = "";
      };
      JSDOMParser2.prototype = {
        error: function(m) {
          if (typeof dump !== "undefined") {
            dump("JSDOMParser error: " + m + "\n");
          } else if (typeof console !== "undefined") {
            console.log("JSDOMParser error: " + m + "\n");
          }
          this.errorState += m + "\n";
        },
        peekNext: function() {
          return this.html[this.currentChar];
        },
        nextChar: function() {
          return this.html[this.currentChar++];
        },
        readString: function(quote) {
          var str;
          var n = this.html.indexOf(quote, this.currentChar);
          if (n === -1) {
            this.currentChar = this.html.length;
            str = null;
          } else {
            str = this.html.substring(this.currentChar, n);
            this.currentChar = n + 1;
          }
          return str;
        },
        readAttribute: function(node) {
          var name = "";
          var n = this.html.indexOf("=", this.currentChar);
          if (n === -1) {
            this.currentChar = this.html.length;
          } else {
            name = this.html.substring(this.currentChar, n);
            this.currentChar = n + 1;
          }
          if (!name)
            return;
          var c = this.nextChar();
          if (c !== '"' && c !== "'") {
            this.error("Error reading attribute " + name + `, expecting '"'`);
            return;
          }
          var value = this.readString(c);
          node.attributes.push(new Attribute(name, decodeHTML(value)));
          return;
        },
        makeElementNode: function(retPair) {
          var c = this.nextChar();
          var strBuf = this.strBuf;
          strBuf.length = 0;
          while (whitespace.indexOf(c) == -1 && c !== ">" && c !== "/") {
            if (c === void 0)
              return false;
            strBuf.push(c);
            c = this.nextChar();
          }
          var tag = strBuf.join("");
          if (!tag)
            return false;
          var node = new Element(tag);
          while (c !== "/" && c !== ">") {
            if (c === void 0)
              return false;
            while (whitespace.indexOf(this.html[this.currentChar++]) != -1) {
            }
            this.currentChar--;
            c = this.nextChar();
            if (c !== "/" && c !== ">") {
              --this.currentChar;
              this.readAttribute(node);
            }
          }
          var closed = false;
          if (c === "/") {
            closed = true;
            c = this.nextChar();
            if (c !== ">") {
              this.error("expected '>' to close " + tag);
              return false;
            }
          }
          retPair[0] = node;
          retPair[1] = closed;
          return true;
        },
        match: function(str) {
          var strlen = str.length;
          if (this.html.substr(this.currentChar, strlen).toLowerCase() === str.toLowerCase()) {
            this.currentChar += strlen;
            return true;
          }
          return false;
        },
        discardTo: function(str) {
          var index = this.html.indexOf(str, this.currentChar) + str.length;
          if (index === -1)
            this.currentChar = this.html.length;
          this.currentChar = index;
        },
        readChildren: function(node) {
          var child;
          while (child = this.readNode()) {
            if (child.nodeType !== 8) {
              node.appendChild(child);
            }
          }
        },
        discardNextComment: function() {
          if (this.match("--")) {
            this.discardTo("-->");
          } else {
            var c = this.nextChar();
            while (c !== ">") {
              if (c === void 0)
                return null;
              if (c === '"' || c === "'")
                this.readString(c);
              c = this.nextChar();
            }
          }
          return new Comment();
        },
        readNode: function() {
          var c = this.nextChar();
          if (c === void 0)
            return null;
          var textNode;
          if (c !== "<") {
            --this.currentChar;
            textNode = new Text();
            var n = this.html.indexOf("<", this.currentChar);
            if (n === -1) {
              textNode.innerHTML = this.html.substring(this.currentChar, this.html.length);
              this.currentChar = this.html.length;
            } else {
              textNode.innerHTML = this.html.substring(this.currentChar, n);
              this.currentChar = n;
            }
            return textNode;
          }
          if (this.match("![CDATA[")) {
            var endChar = this.html.indexOf("]]>", this.currentChar);
            if (endChar === -1) {
              this.error("unclosed CDATA section");
              return null;
            }
            textNode = new Text();
            textNode.textContent = this.html.substring(this.currentChar, endChar);
            this.currentChar = endChar + "]]>".length;
            return textNode;
          }
          c = this.peekNext();
          if (c === "!" || c === "?") {
            this.currentChar++;
            return this.discardNextComment();
          }
          if (c === "/") {
            --this.currentChar;
            return null;
          }
          var result = this.makeElementNode(this.retPair);
          if (!result)
            return null;
          var node = this.retPair[0];
          var closed = this.retPair[1];
          var localName = node.localName;
          if (!closed) {
            this.readChildren(node);
            var closingTag = "</" + node._matchingTag + ">";
            if (!this.match(closingTag)) {
              this.error("expected '" + closingTag + "' and got " + this.html.substr(this.currentChar, closingTag.length));
              return null;
            }
          }
          if (localName === "title" && !this.doc.title) {
            this.doc.title = node.textContent.trim();
          } else if (localName === "head") {
            this.doc.head = node;
          } else if (localName === "body") {
            this.doc.body = node;
          } else if (localName === "html") {
            this.doc.documentElement = node;
          }
          return node;
        },
        parse: function(html, url) {
          this.html = html;
          var doc = this.doc = new Document(url);
          this.readChildren(doc);
          if (doc.documentElement) {
            for (var i = doc.childNodes.length; --i >= 0; ) {
              var child = doc.childNodes[i];
              if (child !== doc.documentElement) {
                doc.removeChild(child);
              }
            }
          }
          return doc;
        }
      };
      global.Node = Node;
      global.Comment = Comment;
      global.Document = Document;
      global.Element = Element;
      global.Text = Text;
      global.JSDOMParser = JSDOMParser2;
    })(exports);
    if (typeof module2 === "object") {
      module2.exports = exports.JSDOMParser;
    }
  }
});

// src/readability/Readability.js
var require_Readability = __commonJS({
  "src/readability/Readability.js"(exports, module2) {
    function Readability2(doc, options) {
      if (options && options.documentElement) {
        doc = options;
        options = arguments[2];
      } else if (!doc || !doc.documentElement) {
        throw new Error("First argument to Readability constructor should be a document object.");
      }
      options = options || {};
      this._doc = doc;
      this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
      this._articleTitle = null;
      this._articleByline = null;
      this._articleDir = null;
      this._articleSiteName = null;
      this._attempts = [];
      this._debug = !!options.debug;
      this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
      this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
      this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
      this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
      this._keepClasses = !!options.keepClasses;
      this._serializer = options.serializer || function(el) {
        return el.innerHTML;
      };
      this._disableJSONLD = !!options.disableJSONLD;
      this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY;
      if (this._debug) {
        let logNode = function(node) {
          if (node.nodeType == node.TEXT_NODE) {
            return `${node.nodeName} ("${node.textContent}")`;
          }
          let attrPairs = Array.from(node.attributes || [], function(attr) {
            return `${attr.name}="${attr.value}"`;
          }).join(" ");
          return `<${node.localName} ${attrPairs}>`;
        };
        this.log = function() {
          if (typeof dump !== "undefined") {
            var msg = Array.prototype.map.call(arguments, function(x) {
              return x && x.nodeName ? logNode(x) : x;
            }).join(" ");
            dump("Reader: (Readability) " + msg + "\n");
          } else if (typeof console !== "undefined") {
            let args = Array.from(arguments, (arg) => {
              if (arg && arg.nodeType == this.ELEMENT_NODE) {
                return logNode(arg);
              }
              return arg;
            });
            args.unshift("Reader: (Readability)");
            console.log.apply(console, args);
          }
        };
      } else {
        this.log = function() {
        };
      }
    }
    Readability2.prototype = {
      FLAG_STRIP_UNLIKELYS: 1,
      FLAG_WEIGHT_CLASSES: 2,
      FLAG_CLEAN_CONDITIONALLY: 4,
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,
      DEFAULT_N_TOP_CANDIDATES: 5,
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
      DEFAULT_CHAR_THRESHOLD: 500,
      REGEXPS: {
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        tokenize: /\W+/g,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        hashUrl: /^#.+/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
        jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
      },
      UNLIKELY_ROLES: ["menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog"],
      DIV_TO_P_ELEMS: /* @__PURE__ */ new Set(["BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL"]),
      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
      PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
      PHRASING_ELEMS: [
        "ABBR",
        "AUDIO",
        "B",
        "BDO",
        "BR",
        "BUTTON",
        "CITE",
        "CODE",
        "DATA",
        "DATALIST",
        "DFN",
        "EM",
        "EMBED",
        "I",
        "IMG",
        "INPUT",
        "KBD",
        "LABEL",
        "MARK",
        "MATH",
        "METER",
        "NOSCRIPT",
        "OBJECT",
        "OUTPUT",
        "PROGRESS",
        "Q",
        "RUBY",
        "SAMP",
        "SCRIPT",
        "SELECT",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "TEXTAREA",
        "TIME",
        "VAR",
        "WBR"
      ],
      CLASSES_TO_PRESERVE: ["page"],
      HTML_ESCAPE_MAP: {
        "lt": "<",
        "gt": ">",
        "amp": "&",
        "quot": '"',
        "apos": "'"
      },
      _postProcessContent: function(articleContent) {
        this._fixRelativeUris(articleContent);
        this._simplifyNestedElements(articleContent);
        if (!this._keepClasses) {
          this._cleanClasses(articleContent);
        }
      },
      _removeNodes: function(nodeList, filterFn) {
        if (this._docJSDOMParser && nodeList._isLiveNodeList) {
          throw new Error("Do not pass live node lists to _removeNodes");
        }
        for (var i = nodeList.length - 1; i >= 0; i--) {
          var node = nodeList[i];
          var parentNode = node.parentNode;
          if (parentNode) {
            if (!filterFn || filterFn.call(this, node, i, nodeList)) {
              parentNode.removeChild(node);
            }
          }
        }
      },
      _replaceNodeTags: function(nodeList, newTagName) {
        if (this._docJSDOMParser && nodeList._isLiveNodeList) {
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        }
        for (const node of nodeList) {
          this._setNodeTag(node, newTagName);
        }
      },
      _forEachNode: function(nodeList, fn) {
        Array.prototype.forEach.call(nodeList, fn, this);
      },
      _findNode: function(nodeList, fn) {
        return Array.prototype.find.call(nodeList, fn, this);
      },
      _someNode: function(nodeList, fn) {
        return Array.prototype.some.call(nodeList, fn, this);
      },
      _everyNode: function(nodeList, fn) {
        return Array.prototype.every.call(nodeList, fn, this);
      },
      _concatNodeLists: function() {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments);
        var nodeLists = args.map(function(list) {
          return slice.call(list);
        });
        return Array.prototype.concat.apply([], nodeLists);
      },
      _getAllNodesWithTag: function(node, tagNames) {
        if (node.querySelectorAll) {
          return node.querySelectorAll(tagNames.join(","));
        }
        return [].concat.apply([], tagNames.map(function(tag) {
          var collection = node.getElementsByTagName(tag);
          return Array.isArray(collection) ? collection : Array.from(collection);
        }));
      },
      _cleanClasses: function(node) {
        var classesToPreserve = this._classesToPreserve;
        var className = (node.getAttribute("class") || "").split(/\s+/).filter(function(cls) {
          return classesToPreserve.indexOf(cls) != -1;
        }).join(" ");
        if (className) {
          node.setAttribute("class", className);
        } else {
          node.removeAttribute("class");
        }
        for (node = node.firstElementChild; node; node = node.nextElementSibling) {
          this._cleanClasses(node);
        }
      },
      _fixRelativeUris: function(articleContent) {
        var baseURI = this._doc.baseURI;
        var documentURI = this._doc.documentURI;
        function toAbsoluteURI(uri) {
          if (baseURI == documentURI && uri.charAt(0) == "#") {
            return uri;
          }
          try {
            return new URL(uri, baseURI).href;
          } catch (ex) {
          }
          return uri;
        }
        var links = this._getAllNodesWithTag(articleContent, ["a"]);
        this._forEachNode(links, function(link) {
          var href = link.getAttribute("href");
          if (href) {
            if (href.indexOf("javascript:") === 0) {
              if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
                var text = this._doc.createTextNode(link.textContent);
                link.parentNode.replaceChild(text, link);
              } else {
                var container = this._doc.createElement("span");
                while (link.firstChild) {
                  container.appendChild(link.firstChild);
                }
                link.parentNode.replaceChild(container, link);
              }
            } else {
              link.setAttribute("href", toAbsoluteURI(href));
            }
          }
        });
        var medias = this._getAllNodesWithTag(articleContent, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source"
        ]);
        this._forEachNode(medias, function(media) {
          var src = media.getAttribute("src");
          var poster = media.getAttribute("poster");
          var srcset = media.getAttribute("srcset");
          if (src) {
            media.setAttribute("src", toAbsoluteURI(src));
          }
          if (poster) {
            media.setAttribute("poster", toAbsoluteURI(poster));
          }
          if (srcset) {
            var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_, p1, p2, p3) {
              return toAbsoluteURI(p1) + (p2 || "") + p3;
            });
            media.setAttribute("srcset", newSrcset);
          }
        });
      },
      _simplifyNestedElements: function(articleContent) {
        var node = articleContent;
        while (node) {
          if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(node)) {
              node = this._removeAndGetNext(node);
              continue;
            } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
              var child = node.children[0];
              for (var i = 0; i < node.attributes.length; i++) {
                child.setAttribute(node.attributes[i].name, node.attributes[i].value);
              }
              node.parentNode.replaceChild(child, node);
              node = child;
              continue;
            }
          }
          node = this._getNextNode(node);
        }
      },
      _getArticleTitle: function() {
        var doc = this._doc;
        var curTitle = "";
        var origTitle = "";
        try {
          curTitle = origTitle = doc.title.trim();
          if (typeof curTitle !== "string")
            curTitle = origTitle = this._getInnerText(doc.getElementsByTagName("title")[0]);
        } catch (e) {
        }
        var titleHadHierarchicalSeparators = false;
        function wordCount(str) {
          return str.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(curTitle)) {
          titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
          curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");
          if (wordCount(curTitle) < 3)
            curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
        } else if (curTitle.indexOf(": ") !== -1) {
          var headings = this._concatNodeLists(
            doc.getElementsByTagName("h1"),
            doc.getElementsByTagName("h2")
          );
          var trimmedTitle = curTitle.trim();
          var match = this._someNode(headings, function(heading) {
            return heading.textContent.trim() === trimmedTitle;
          });
          if (!match) {
            curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);
            if (wordCount(curTitle) < 3) {
              curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
            } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
              curTitle = origTitle;
            }
          }
        } else if (curTitle.length > 150 || curTitle.length < 15) {
          var hOnes = doc.getElementsByTagName("h1");
          if (hOnes.length === 1)
            curTitle = this._getInnerText(hOnes[0]);
        }
        curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
        var curTitleWordCount = wordCount(curTitle);
        if (curTitleWordCount <= 4 && (!titleHadHierarchicalSeparators || curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
          curTitle = origTitle;
        }
        return curTitle;
      },
      _prepDocument: function() {
        var doc = this._doc;
        this._removeNodes(this._getAllNodesWithTag(doc, ["style"]));
        if (doc.body) {
          this._replaceBrs(doc.body);
        }
        this._replaceNodeTags(this._getAllNodesWithTag(doc, ["font"]), "SPAN");
      },
      _nextNode: function(node) {
        var next = node;
        while (next && next.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(next.textContent)) {
          next = next.nextSibling;
        }
        return next;
      },
      _replaceBrs: function(elem) {
        this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
          var next = br.nextSibling;
          var replaced = false;
          while ((next = this._nextNode(next)) && next.tagName == "BR") {
            replaced = true;
            var brSibling = next.nextSibling;
            next.parentNode.removeChild(next);
            next = brSibling;
          }
          if (replaced) {
            var p = this._doc.createElement("p");
            br.parentNode.replaceChild(p, br);
            next = p.nextSibling;
            while (next) {
              if (next.tagName == "BR") {
                var nextElem = this._nextNode(next.nextSibling);
                if (nextElem && nextElem.tagName == "BR")
                  break;
              }
              if (!this._isPhrasingContent(next))
                break;
              var sibling = next.nextSibling;
              p.appendChild(next);
              next = sibling;
            }
            while (p.lastChild && this._isWhitespace(p.lastChild)) {
              p.removeChild(p.lastChild);
            }
            if (p.parentNode.tagName === "P")
              this._setNodeTag(p.parentNode, "DIV");
          }
        });
      },
      _setNodeTag: function(node, tag) {
        this.log("_setNodeTag", node, tag);
        if (this._docJSDOMParser) {
          node.localName = tag.toLowerCase();
          node.tagName = tag.toUpperCase();
          return node;
        }
        var replacement = node.ownerDocument.createElement(tag);
        while (node.firstChild) {
          replacement.appendChild(node.firstChild);
        }
        node.parentNode.replaceChild(replacement, node);
        if (node.readability)
          replacement.readability = node.readability;
        for (var i = 0; i < node.attributes.length; i++) {
          try {
            replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
          } catch (ex) {
          }
        }
        return replacement;
      },
      _prepArticle: function(articleContent) {
        this._cleanStyles(articleContent);
        this._markDataTables(articleContent);
        this._fixLazyImages(articleContent);
        this._cleanConditionally(articleContent, "form");
        this._cleanConditionally(articleContent, "fieldset");
        this._clean(articleContent, "object");
        this._clean(articleContent, "embed");
        this._clean(articleContent, "footer");
        this._clean(articleContent, "link");
        this._clean(articleContent, "aside");
        var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(articleContent.children, function(topCandidate) {
          this._cleanMatchedNodes(topCandidate, function(node, matchString) {
            return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
          });
        });
        this._clean(articleContent, "iframe");
        this._clean(articleContent, "input");
        this._clean(articleContent, "textarea");
        this._clean(articleContent, "select");
        this._clean(articleContent, "button");
        this._cleanHeaders(articleContent);
        this._cleanConditionally(articleContent, "table");
        this._cleanConditionally(articleContent, "ul");
        this._cleanConditionally(articleContent, "div");
        this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");
        this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function(paragraph) {
          var imgCount = paragraph.getElementsByTagName("img").length;
          var embedCount = paragraph.getElementsByTagName("embed").length;
          var objectCount = paragraph.getElementsByTagName("object").length;
          var iframeCount = paragraph.getElementsByTagName("iframe").length;
          var totalCount = imgCount + embedCount + objectCount + iframeCount;
          return totalCount === 0 && !this._getInnerText(paragraph, false);
        });
        this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
          var next = this._nextNode(br.nextSibling);
          if (next && next.tagName == "P")
            br.parentNode.removeChild(br);
        });
        this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
          var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
          if (this._hasSingleTagInsideElement(tbody, "TR")) {
            var row = tbody.firstElementChild;
            if (this._hasSingleTagInsideElement(row, "TD")) {
              var cell = row.firstElementChild;
              cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
              table.parentNode.replaceChild(cell, table);
            }
          }
        });
      },
      _initializeNode: function(node) {
        node.readability = { "contentScore": 0 };
        switch (node.tagName) {
          case "DIV":
            node.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            node.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            node.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            node.readability.contentScore -= 5;
            break;
        }
        node.readability.contentScore += this._getClassWeight(node);
      },
      _removeAndGetNext: function(node) {
        var nextNode = this._getNextNode(node, true);
        node.parentNode.removeChild(node);
        return nextNode;
      },
      _getNextNode: function(node, ignoreSelfAndKids) {
        if (!ignoreSelfAndKids && node.firstElementChild) {
          return node.firstElementChild;
        }
        if (node.nextElementSibling) {
          return node.nextElementSibling;
        }
        do {
          node = node.parentNode;
        } while (node && !node.nextElementSibling);
        return node && node.nextElementSibling;
      },
      _textSimilarity: function(textA, textB) {
        var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!tokensA.length || !tokensB.length) {
          return 0;
        }
        var uniqTokensB = tokensB.filter((token) => !tokensA.includes(token));
        var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
        return 1 - distanceB;
      },
      _checkByline: function(node, matchString) {
        if (this._articleByline) {
          return false;
        }
        if (node.getAttribute !== void 0) {
          var rel = node.getAttribute("rel");
          var itemprop = node.getAttribute("itemprop");
        }
        if ((rel === "author" || itemprop && itemprop.indexOf("author") !== -1 || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
          this._articleByline = node.textContent.trim();
          return true;
        }
        return false;
      },
      _getNodeAncestors: function(node, maxDepth) {
        maxDepth = maxDepth || 0;
        var i = 0, ancestors = [];
        while (node.parentNode) {
          ancestors.push(node.parentNode);
          if (maxDepth && ++i === maxDepth)
            break;
          node = node.parentNode;
        }
        return ancestors;
      },
      _grabArticle: function(page) {
        this.log("**** grabArticle ****");
        var doc = this._doc;
        var isPaging = page !== null;
        page = page ? page : this._doc.body;
        if (!page) {
          this.log("No body found in document. Abort.");
          return null;
        }
        var pageCacheHtml = page.innerHTML;
        while (true) {
          this.log("Starting grabArticle loop");
          var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);
          var elementsToScore = [];
          var node = this._doc.documentElement;
          let shouldRemoveTitleHeader = true;
          while (node) {
            if (node.tagName === "HTML") {
              this._articleLang = node.getAttribute("lang");
            }
            var matchString = node.className + " " + node.id;
            if (!this._isProbablyVisible(node)) {
              this.log("Removing hidden node - " + matchString);
              node = this._removeAndGetNext(node);
              continue;
            }
            if (this._checkByline(node, matchString)) {
              node = this._removeAndGetNext(node);
              continue;
            }
            if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
              this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
              shouldRemoveTitleHeader = false;
              node = this._removeAndGetNext(node);
              continue;
            }
            if (stripUnlikelyCandidates) {
              if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString) && !this._hasAncestorTag(node, "table") && !this._hasAncestorTag(node, "code") && node.tagName !== "BODY" && node.tagName !== "A") {
                this.log("Removing unlikely candidate - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
                this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
            }
            if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" || node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" || node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") && this._isElementWithoutContent(node)) {
              node = this._removeAndGetNext(node);
              continue;
            }
            if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
              elementsToScore.push(node);
            }
            if (node.tagName === "DIV") {
              var p = null;
              var childNode = node.firstChild;
              while (childNode) {
                var nextSibling = childNode.nextSibling;
                if (this._isPhrasingContent(childNode)) {
                  if (p !== null) {
                    p.appendChild(childNode);
                  } else if (!this._isWhitespace(childNode)) {
                    p = doc.createElement("p");
                    node.replaceChild(p, childNode);
                    p.appendChild(childNode);
                  }
                } else if (p !== null) {
                  while (p.lastChild && this._isWhitespace(p.lastChild)) {
                    p.removeChild(p.lastChild);
                  }
                  p = null;
                }
                childNode = nextSibling;
              }
              if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
                var newNode = node.children[0];
                node.parentNode.replaceChild(newNode, node);
                node = newNode;
                elementsToScore.push(node);
              } else if (!this._hasChildBlockElement(node)) {
                node = this._setNodeTag(node, "P");
                elementsToScore.push(node);
              }
            }
            node = this._getNextNode(node);
          }
          var candidates = [];
          this._forEachNode(elementsToScore, function(elementToScore) {
            if (!elementToScore.parentNode || typeof elementToScore.parentNode.tagName === "undefined")
              return;
            var innerText = this._getInnerText(elementToScore);
            if (innerText.length < 25)
              return;
            var ancestors2 = this._getNodeAncestors(elementToScore, 5);
            if (ancestors2.length === 0)
              return;
            var contentScore = 0;
            contentScore += 1;
            contentScore += innerText.split(",").length;
            contentScore += Math.min(Math.floor(innerText.length / 100), 3);
            this._forEachNode(ancestors2, function(ancestor, level) {
              if (!ancestor.tagName || !ancestor.parentNode || typeof ancestor.parentNode.tagName === "undefined")
                return;
              if (typeof ancestor.readability === "undefined") {
                this._initializeNode(ancestor);
                candidates.push(ancestor);
              }
              if (level === 0)
                var scoreDivider = 1;
              else if (level === 1)
                scoreDivider = 2;
              else
                scoreDivider = level * 3;
              ancestor.readability.contentScore += contentScore / scoreDivider;
            });
          });
          var topCandidates = [];
          for (var c = 0, cl = candidates.length; c < cl; c += 1) {
            var candidate = candidates[c];
            var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
            candidate.readability.contentScore = candidateScore;
            this.log("Candidate:", candidate, "with score " + candidateScore);
            for (var t = 0; t < this._nbTopCandidates; t++) {
              var aTopCandidate = topCandidates[t];
              if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                topCandidates.splice(t, 0, candidate);
                if (topCandidates.length > this._nbTopCandidates)
                  topCandidates.pop();
                break;
              }
            }
          }
          var topCandidate = topCandidates[0] || null;
          var neededToCreateTopCandidate = false;
          var parentOfTopCandidate;
          if (topCandidate === null || topCandidate.tagName === "BODY") {
            topCandidate = doc.createElement("DIV");
            neededToCreateTopCandidate = true;
            while (page.firstChild) {
              this.log("Moving child out:", page.firstChild);
              topCandidate.appendChild(page.firstChild);
            }
            page.appendChild(topCandidate);
            this._initializeNode(topCandidate);
          } else if (topCandidate) {
            var alternativeCandidateAncestors = [];
            for (var i = 1; i < topCandidates.length; i++) {
              if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
              }
            }
            var MINIMUM_TOPCANDIDATES = 3;
            if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
              parentOfTopCandidate = topCandidate.parentNode;
              while (parentOfTopCandidate.tagName !== "BODY") {
                var listsContainingThisAncestor = 0;
                for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                  listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                }
                if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                  topCandidate = parentOfTopCandidate;
                  break;
                }
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
              }
            }
            if (!topCandidate.readability) {
              this._initializeNode(topCandidate);
            }
            parentOfTopCandidate = topCandidate.parentNode;
            var lastScore = topCandidate.readability.contentScore;
            var scoreThreshold = lastScore / 3;
            while (parentOfTopCandidate.tagName !== "BODY") {
              if (!parentOfTopCandidate.readability) {
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
                continue;
              }
              var parentScore = parentOfTopCandidate.readability.contentScore;
              if (parentScore < scoreThreshold)
                break;
              if (parentScore > lastScore) {
                topCandidate = parentOfTopCandidate;
                break;
              }
              lastScore = parentOfTopCandidate.readability.contentScore;
              parentOfTopCandidate = parentOfTopCandidate.parentNode;
            }
            parentOfTopCandidate = topCandidate.parentNode;
            while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
              topCandidate = parentOfTopCandidate;
              parentOfTopCandidate = topCandidate.parentNode;
            }
            if (!topCandidate.readability) {
              this._initializeNode(topCandidate);
            }
          }
          var articleContent = doc.createElement("DIV");
          if (isPaging)
            articleContent.id = "readability-content";
          var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
          parentOfTopCandidate = topCandidate.parentNode;
          var siblings = parentOfTopCandidate.children;
          for (var s = 0, sl = siblings.length; s < sl; s++) {
            var sibling = siblings[s];
            var append = false;
            this.log("Looking at sibling node:", sibling, sibling.readability ? "with score " + sibling.readability.contentScore : "");
            this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");
            if (sibling === topCandidate) {
              append = true;
            } else {
              var contentBonus = 0;
              if (sibling.className === topCandidate.className && topCandidate.className !== "")
                contentBonus += topCandidate.readability.contentScore * 0.2;
              if (sibling.readability && sibling.readability.contentScore + contentBonus >= siblingScoreThreshold) {
                append = true;
              } else if (sibling.nodeName === "P") {
                var linkDensity = this._getLinkDensity(sibling);
                var nodeContent = this._getInnerText(sibling);
                var nodeLength = nodeContent.length;
                if (nodeLength > 80 && linkDensity < 0.25) {
                  append = true;
                } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 && nodeContent.search(/\.( |$)/) !== -1) {
                  append = true;
                }
              }
            }
            if (append) {
              this.log("Appending node:", sibling);
              if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                this.log("Altering sibling:", sibling, "to div.");
                sibling = this._setNodeTag(sibling, "DIV");
              }
              articleContent.appendChild(sibling);
              siblings = parentOfTopCandidate.children;
              s -= 1;
              sl -= 1;
            }
          }
          if (this._debug)
            this.log("Article content pre-prep: " + articleContent.innerHTML);
          this._prepArticle(articleContent);
          if (this._debug)
            this.log("Article content post-prep: " + articleContent.innerHTML);
          if (neededToCreateTopCandidate) {
            topCandidate.id = "readability-page-1";
            topCandidate.className = "page";
          } else {
            var div = doc.createElement("DIV");
            div.id = "readability-page-1";
            div.className = "page";
            while (articleContent.firstChild) {
              div.appendChild(articleContent.firstChild);
            }
            articleContent.appendChild(div);
          }
          if (this._debug)
            this.log("Article content after paging: " + articleContent.innerHTML);
          var parseSuccessful = true;
          var textLength = this._getInnerText(articleContent, true).length;
          if (textLength < this._charThreshold) {
            parseSuccessful = false;
            page.innerHTML = pageCacheHtml;
            if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
              this._attempts.push({ articleContent, textLength });
            } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
              this._attempts.push({ articleContent, textLength });
            } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
              this._attempts.push({ articleContent, textLength });
            } else {
              this._attempts.push({ articleContent, textLength });
              this._attempts.sort(function(a, b) {
                return b.textLength - a.textLength;
              });
              if (!this._attempts[0].textLength) {
                return null;
              }
              articleContent = this._attempts[0].articleContent;
              parseSuccessful = true;
            }
          }
          if (parseSuccessful) {
            var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
            this._someNode(ancestors, function(ancestor) {
              if (!ancestor.tagName)
                return false;
              var articleDir = ancestor.getAttribute("dir");
              if (articleDir) {
                this._articleDir = articleDir;
                return true;
              }
              return false;
            });
            return articleContent;
          }
        }
      },
      _isValidByline: function(byline) {
        if (typeof byline == "string" || byline instanceof String) {
          byline = byline.trim();
          return byline.length > 0 && byline.length < 100;
        }
        return false;
      },
      _unescapeHtmlEntities: function(str) {
        if (!str) {
          return str;
        }
        var htmlEscapeMap = this.HTML_ESCAPE_MAP;
        return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
          return htmlEscapeMap[tag];
        }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_, hex, numStr) {
          var num = parseInt(hex || numStr, hex ? 16 : 10);
          return String.fromCharCode(num);
        });
      },
      _getJSONLD: function(doc) {
        var scripts = this._getAllNodesWithTag(doc, ["script"]);
        var metadata;
        this._forEachNode(scripts, function(jsonLdElement) {
          if (!metadata && jsonLdElement.getAttribute("type") === "application/ld+json") {
            try {
              var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
              var parsed = JSON.parse(content);
              if (!parsed["@context"] || !parsed["@context"].match(/^https?\:\/\/schema\.org$/)) {
                return;
              }
              if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
                parsed = parsed["@graph"].find(function(it) {
                  return (it["@type"] || "").match(
                    this.REGEXPS.jsonLdArticleTypes
                  );
                });
              }
              if (!parsed || !parsed["@type"] || !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)) {
                return;
              }
              metadata = {};
              if (typeof parsed.name === "string" && typeof parsed.headline === "string" && parsed.name !== parsed.headline) {
                var title = this._getArticleTitle();
                var nameMatches = this._textSimilarity(parsed.name, title) > 0.75;
                var headlineMatches = this._textSimilarity(parsed.headline, title) > 0.75;
                if (headlineMatches && !nameMatches) {
                  metadata.title = parsed.headline;
                } else {
                  metadata.title = parsed.name;
                }
              } else if (typeof parsed.name === "string") {
                metadata.title = parsed.name.trim();
              } else if (typeof parsed.headline === "string") {
                metadata.title = parsed.headline.trim();
              }
              if (parsed.author) {
                if (typeof parsed.author.name === "string") {
                  metadata.byline = parsed.author.name.trim();
                } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                  metadata.byline = parsed.author.filter(function(author) {
                    return author && typeof author.name === "string";
                  }).map(function(author) {
                    return author.name.trim();
                  }).join(", ");
                }
              }
              if (typeof parsed.description === "string") {
                metadata.excerpt = parsed.description.trim();
              }
              if (parsed.publisher && typeof parsed.publisher.name === "string") {
                metadata.siteName = parsed.publisher.name.trim();
              }
              return;
            } catch (err) {
              this.log(err.message);
            }
          }
        });
        return metadata ? metadata : {};
      },
      _getArticleMetadata: function(jsonld) {
        var metadata = {};
        var values = {};
        var metaElements = this._doc.getElementsByTagName("meta");
        var propertyPattern = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi;
        var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
        this._forEachNode(metaElements, function(element) {
          var elementName = element.getAttribute("name");
          var elementProperty = element.getAttribute("property");
          var content = element.getAttribute("content");
          if (!content) {
            return;
          }
          var matches = null;
          var name = null;
          if (elementProperty) {
            matches = elementProperty.match(propertyPattern);
            if (matches) {
              name = matches[0].toLowerCase().replace(/\s/g, "");
              values[name] = content.trim();
            }
          }
          if (!matches && elementName && namePattern.test(elementName)) {
            name = elementName;
            if (content) {
              name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
              values[name] = content.trim();
            }
          }
        });
        metadata.title = jsonld.title || values["dc:title"] || values["dcterm:title"] || values["og:title"] || values["weibo:article:title"] || values["weibo:webpage:title"] || values["title"] || values["twitter:title"];
        if (!metadata.title) {
          metadata.title = this._getArticleTitle();
        }
        metadata.byline = jsonld.byline || values["dc:creator"] || values["dcterm:creator"] || values["author"];
        metadata.excerpt = jsonld.excerpt || values["dc:description"] || values["dcterm:description"] || values["og:description"] || values["weibo:article:description"] || values["weibo:webpage:description"] || values["description"] || values["twitter:description"];
        metadata.siteName = jsonld.siteName || values["og:site_name"];
        metadata.title = this._unescapeHtmlEntities(metadata.title);
        metadata.byline = this._unescapeHtmlEntities(metadata.byline);
        metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
        metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);
        return metadata;
      },
      _isSingleImage: function(node) {
        if (node.tagName === "IMG") {
          return true;
        }
        if (node.children.length !== 1 || node.textContent.trim() !== "") {
          return false;
        }
        return this._isSingleImage(node.children[0]);
      },
      _unwrapNoscriptImages: function(doc) {
        var imgs = Array.from(doc.getElementsByTagName("img"));
        this._forEachNode(imgs, function(img) {
          for (var i = 0; i < img.attributes.length; i++) {
            var attr = img.attributes[i];
            switch (attr.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
              return;
            }
          }
          img.parentNode.removeChild(img);
        });
        var noscripts = Array.from(doc.getElementsByTagName("noscript"));
        this._forEachNode(noscripts, function(noscript) {
          var tmp = doc.createElement("div");
          tmp.innerHTML = noscript.innerHTML;
          if (!this._isSingleImage(tmp)) {
            return;
          }
          var prevElement = noscript.previousElementSibling;
          if (prevElement && this._isSingleImage(prevElement)) {
            var prevImg = prevElement;
            if (prevImg.tagName !== "IMG") {
              prevImg = prevElement.getElementsByTagName("img")[0];
            }
            var newImg = tmp.getElementsByTagName("img")[0];
            for (var i = 0; i < prevImg.attributes.length; i++) {
              var attr = prevImg.attributes[i];
              if (attr.value === "") {
                continue;
              }
              if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                if (newImg.getAttribute(attr.name) === attr.value) {
                  continue;
                }
                var attrName = attr.name;
                if (newImg.hasAttribute(attrName)) {
                  attrName = "data-old-" + attrName;
                }
                newImg.setAttribute(attrName, attr.value);
              }
            }
            noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
          }
        });
      },
      _removeScripts: function(doc) {
        this._removeNodes(this._getAllNodesWithTag(doc, ["script"]), function(scriptNode) {
          scriptNode.nodeValue = "";
          scriptNode.removeAttribute("src");
          return true;
        });
        this._removeNodes(this._getAllNodesWithTag(doc, ["noscript"]));
      },
      _hasSingleTagInsideElement: function(element, tag) {
        if (element.children.length != 1 || element.children[0].tagName !== tag) {
          return false;
        }
        return !this._someNode(element.childNodes, function(node) {
          return node.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(node.textContent);
        });
      },
      _isElementWithoutContent: function(node) {
        return node.nodeType === this.ELEMENT_NODE && node.textContent.trim().length == 0 && (node.children.length == 0 || node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
      },
      _hasChildBlockElement: function(element) {
        return this._someNode(element.childNodes, function(node) {
          return this.DIV_TO_P_ELEMS.has(node.tagName) || this._hasChildBlockElement(node);
        });
      },
      _isPhrasingContent: function(node) {
        return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 || (node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") && this._everyNode(node.childNodes, this._isPhrasingContent);
      },
      _isWhitespace: function(node) {
        return node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0 || node.nodeType === this.ELEMENT_NODE && node.tagName === "BR";
      },
      _getInnerText: function(e, normalizeSpaces) {
        normalizeSpaces = typeof normalizeSpaces === "undefined" ? true : normalizeSpaces;
        var textContent = e.textContent.trim();
        if (normalizeSpaces) {
          return textContent.replace(this.REGEXPS.normalize, " ");
        }
        return textContent;
      },
      _getCharCount: function(e, s) {
        s = s || ",";
        return this._getInnerText(e).split(s).length - 1;
      },
      _cleanStyles: function(e) {
        if (!e || e.tagName.toLowerCase() === "svg")
          return;
        for (var i = 0; i < this.PRESENTATIONAL_ATTRIBUTES.length; i++) {
          e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);
        }
        if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) !== -1) {
          e.removeAttribute("width");
          e.removeAttribute("height");
        }
        var cur = e.firstElementChild;
        while (cur !== null) {
          this._cleanStyles(cur);
          cur = cur.nextElementSibling;
        }
      },
      _getLinkDensity: function(element) {
        var textLength = this._getInnerText(element).length;
        if (textLength === 0)
          return 0;
        var linkLength = 0;
        this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
          var href = linkNode.getAttribute("href");
          var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
          linkLength += this._getInnerText(linkNode).length * coefficient;
        });
        return linkLength / textLength;
      },
      _getClassWeight: function(e) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
          return 0;
        var weight = 0;
        if (typeof e.className === "string" && e.className !== "") {
          if (this.REGEXPS.negative.test(e.className))
            weight -= 25;
          if (this.REGEXPS.positive.test(e.className))
            weight += 25;
        }
        if (typeof e.id === "string" && e.id !== "") {
          if (this.REGEXPS.negative.test(e.id))
            weight -= 25;
          if (this.REGEXPS.positive.test(e.id))
            weight += 25;
        }
        return weight;
      },
      _clean: function(e, tag) {
        var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;
        this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(element) {
          if (isEmbed) {
            for (var i = 0; i < element.attributes.length; i++) {
              if (this.REGEXPS.videos.test(element.attributes[i].value)) {
                return false;
              }
            }
            if (element.tagName === "object" && this.REGEXPS.videos.test(element.innerHTML)) {
              return false;
            }
          }
          return true;
        });
      },
      _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
        maxDepth = maxDepth || 3;
        tagName = tagName.toUpperCase();
        var depth = 0;
        while (node.parentNode) {
          if (maxDepth > 0 && depth > maxDepth)
            return false;
          if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
            return true;
          node = node.parentNode;
          depth++;
        }
        return false;
      },
      _getRowAndColumnCount: function(table) {
        var rows = 0;
        var columns = 0;
        var trs = table.getElementsByTagName("tr");
        for (var i = 0; i < trs.length; i++) {
          var rowspan = trs[i].getAttribute("rowspan") || 0;
          if (rowspan) {
            rowspan = parseInt(rowspan, 10);
          }
          rows += rowspan || 1;
          var columnsInThisRow = 0;
          var cells = trs[i].getElementsByTagName("td");
          for (var j = 0; j < cells.length; j++) {
            var colspan = cells[j].getAttribute("colspan") || 0;
            if (colspan) {
              colspan = parseInt(colspan, 10);
            }
            columnsInThisRow += colspan || 1;
          }
          columns = Math.max(columns, columnsInThisRow);
        }
        return { rows, columns };
      },
      _markDataTables: function(root) {
        var tables = root.getElementsByTagName("table");
        for (var i = 0; i < tables.length; i++) {
          var table = tables[i];
          var role = table.getAttribute("role");
          if (role == "presentation") {
            table._readabilityDataTable = false;
            continue;
          }
          var datatable = table.getAttribute("datatable");
          if (datatable == "0") {
            table._readabilityDataTable = false;
            continue;
          }
          var summary = table.getAttribute("summary");
          if (summary) {
            table._readabilityDataTable = true;
            continue;
          }
          var caption = table.getElementsByTagName("caption")[0];
          if (caption && caption.childNodes.length > 0) {
            table._readabilityDataTable = true;
            continue;
          }
          var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
          var descendantExists = function(tag) {
            return !!table.getElementsByTagName(tag)[0];
          };
          if (dataTableDescendants.some(descendantExists)) {
            this.log("Data table because found data-y descendant");
            table._readabilityDataTable = true;
            continue;
          }
          if (table.getElementsByTagName("table")[0]) {
            table._readabilityDataTable = false;
            continue;
          }
          var sizeInfo = this._getRowAndColumnCount(table);
          if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
            table._readabilityDataTable = true;
            continue;
          }
          table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
        }
      },
      _fixLazyImages: function(root) {
        this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function(elem) {
          if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
            var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
            if (parts[1] === "image/svg+xml") {
              return;
            }
            var srcCouldBeRemoved = false;
            for (var i = 0; i < elem.attributes.length; i++) {
              var attr = elem.attributes[i];
              if (attr.name === "src") {
                continue;
              }
              if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                srcCouldBeRemoved = true;
                break;
              }
            }
            if (srcCouldBeRemoved) {
              var b64starts = elem.src.search(/base64\s*/i) + 7;
              var b64length = elem.src.length - b64starts;
              if (b64length < 133) {
                elem.removeAttribute("src");
              }
            }
          }
          if ((elem.src || elem.srcset && elem.srcset != "null") && elem.className.toLowerCase().indexOf("lazy") === -1) {
            return;
          }
          for (var j = 0; j < elem.attributes.length; j++) {
            attr = elem.attributes[j];
            if (attr.name === "src" || attr.name === "srcset" || attr.name === "alt") {
              continue;
            }
            var copyTo = null;
            if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
              copyTo = "srcset";
            } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
              copyTo = "src";
            }
            if (copyTo) {
              if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
                elem.setAttribute(copyTo, attr.value);
              } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
                var img = this._doc.createElement("img");
                img.setAttribute(copyTo, attr.value);
                elem.appendChild(img);
              }
            }
          }
        });
      },
      _getTextDensity: function(e, tags) {
        var textLength = this._getInnerText(e, true).length;
        if (textLength === 0) {
          return 0;
        }
        var childrenLength = 0;
        var children = this._getAllNodesWithTag(e, tags);
        this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
        return childrenLength / textLength;
      },
      _cleanConditionally: function(e, tag) {
        if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
          return;
        this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(node) {
          var isDataTable = function(t) {
            return t._readabilityDataTable;
          };
          var isList = tag === "ul" || tag === "ol";
          if (!isList) {
            var listLength = 0;
            var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
            this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
            isList = listLength / this._getInnerText(node).length > 0.9;
          }
          if (tag === "table" && isDataTable(node)) {
            return false;
          }
          if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
            return false;
          }
          if (this._hasAncestorTag(node, "code")) {
            return false;
          }
          var weight = this._getClassWeight(node);
          this.log("Cleaning Conditionally", node);
          var contentScore = 0;
          if (weight + contentScore < 0) {
            return true;
          }
          if (this._getCharCount(node, ",") < 10) {
            var p = node.getElementsByTagName("p").length;
            var img = node.getElementsByTagName("img").length;
            var li = node.getElementsByTagName("li").length - 100;
            var input = node.getElementsByTagName("input").length;
            var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);
            var embedCount = 0;
            var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);
            for (var i = 0; i < embeds.length; i++) {
              for (var j = 0; j < embeds[i].attributes.length; j++) {
                if (this.REGEXPS.videos.test(embeds[i].attributes[j].value)) {
                  return false;
                }
              }
              if (embeds[i].tagName === "object" && this.REGEXPS.videos.test(embeds[i].innerHTML)) {
                return false;
              }
              embedCount++;
            }
            var linkDensity = this._getLinkDensity(node);
            var contentLength = this._getInnerText(node).length;
            var haveToRemove = img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure") || !isList && li > p || input > Math.floor(p / 3) || !isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure") || !isList && weight < 25 && linkDensity > 0.2 || weight >= 25 && linkDensity > 0.5 || (embedCount === 1 && contentLength < 75 || embedCount > 1);
            if (isList && haveToRemove) {
              for (var x = 0; x < node.children.length; x++) {
                let child = node.children[x];
                if (child.children.length > 1) {
                  return haveToRemove;
                }
              }
              li_count = node.getElementsByTagName("li").length;
              if (img == li_count) {
                return false;
              }
            }
            return haveToRemove;
          }
          return false;
        });
      },
      _cleanMatchedNodes: function(e, filter) {
        var endOfSearchMarkerNode = this._getNextNode(e, true);
        var next = this._getNextNode(e);
        while (next && next != endOfSearchMarkerNode) {
          if (filter.call(this, next, next.className + " " + next.id)) {
            next = this._removeAndGetNext(next);
          } else {
            next = this._getNextNode(next);
          }
        }
      },
      _cleanHeaders: function(e) {
        let headingNodes = this._getAllNodesWithTag(e, ["h1", "h2"]);
        this._removeNodes(headingNodes, function(node) {
          let shouldRemove = this._getClassWeight(node) < 0;
          if (shouldRemove) {
            this.log("Removing header with low class weight:", node);
          }
          return shouldRemove;
        });
      },
      _headerDuplicatesTitle: function(node) {
        if (node.tagName != "H1" && node.tagName != "H2") {
          return false;
        }
        var heading = this._getInnerText(node, false);
        this.log("Evaluating similarity of header:", heading, this._articleTitle);
        return this._textSimilarity(this._articleTitle, heading) > 0.75;
      },
      _flagIsActive: function(flag) {
        return (this._flags & flag) > 0;
      },
      _removeFlag: function(flag) {
        this._flags = this._flags & ~flag;
      },
      _isProbablyVisible: function(node) {
        return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
      },
      parse: function() {
        if (this._maxElemsToParse > 0) {
          var numTags = this._doc.getElementsByTagName("*").length;
          if (numTags > this._maxElemsToParse) {
            throw new Error("Aborting parsing document; " + numTags + " elements found");
          }
        }
        this._unwrapNoscriptImages(this._doc);
        var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc);
        this._prepDocument();
        var metadata = this._getArticleMetadata(jsonLd);
        this._articleTitle = metadata.title;
        var articleContent = this._grabArticle();
        if (!articleContent)
          return null;
        this.log("Grabbed: " + articleContent.innerHTML);
        this._postProcessContent(articleContent);
        if (!metadata.excerpt) {
          var paragraphs = articleContent.getElementsByTagName("p");
          if (paragraphs.length > 0) {
            metadata.excerpt = paragraphs[0].textContent.trim();
          }
        }
        var textContent = articleContent.textContent;
        return {
          title: this._articleTitle,
          byline: metadata.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(articleContent),
          textContent,
          length: textContent.length,
          excerpt: metadata.excerpt,
          siteName: metadata.siteName || this._articleSiteName
        };
      }
    };
    if (typeof module2 === "object") {
      module2.exports = Readability2;
    }
  }
});

// node_modules/turndown/lib/turndown.cjs.js
var require_turndown_cjs = __commonJS({
  "node_modules/turndown/lib/turndown.cjs.js"(exports, module2) {
    "use strict";
    function extend(destination) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (source.hasOwnProperty(key))
            destination[key] = source[key];
        }
      }
      return destination;
    }
    function repeat(character, count) {
      return Array(count + 1).join(character);
    }
    function trimLeadingNewlines(string) {
      return string.replace(/^\n*/, "");
    }
    function trimTrailingNewlines(string) {
      var indexEnd = string.length;
      while (indexEnd > 0 && string[indexEnd - 1] === "\n")
        indexEnd--;
      return string.substring(0, indexEnd);
    }
    var blockElements = [
      "ADDRESS",
      "ARTICLE",
      "ASIDE",
      "AUDIO",
      "BLOCKQUOTE",
      "BODY",
      "CANVAS",
      "CENTER",
      "DD",
      "DIR",
      "DIV",
      "DL",
      "DT",
      "FIELDSET",
      "FIGCAPTION",
      "FIGURE",
      "FOOTER",
      "FORM",
      "FRAMESET",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "HEADER",
      "HGROUP",
      "HR",
      "HTML",
      "ISINDEX",
      "LI",
      "MAIN",
      "MENU",
      "NAV",
      "NOFRAMES",
      "NOSCRIPT",
      "OL",
      "OUTPUT",
      "P",
      "PRE",
      "SECTION",
      "TABLE",
      "TBODY",
      "TD",
      "TFOOT",
      "TH",
      "THEAD",
      "TR",
      "UL"
    ];
    function isBlock(node) {
      return is(node, blockElements);
    }
    var voidElements = [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ];
    function isVoid(node) {
      return is(node, voidElements);
    }
    function hasVoid(node) {
      return has(node, voidElements);
    }
    var meaningfulWhenBlankElements = [
      "A",
      "TABLE",
      "THEAD",
      "TBODY",
      "TFOOT",
      "TH",
      "TD",
      "IFRAME",
      "SCRIPT",
      "AUDIO",
      "VIDEO"
    ];
    function isMeaningfulWhenBlank(node) {
      return is(node, meaningfulWhenBlankElements);
    }
    function hasMeaningfulWhenBlank(node) {
      return has(node, meaningfulWhenBlankElements);
    }
    function is(node, tagNames) {
      return tagNames.indexOf(node.nodeName) >= 0;
    }
    function has(node, tagNames) {
      return node.getElementsByTagName && tagNames.some(function(tagName) {
        return node.getElementsByTagName(tagName).length;
      });
    }
    var rules = {};
    rules.paragraph = {
      filter: "p",
      replacement: function(content) {
        return "\n\n" + content + "\n\n";
      }
    };
    rules.lineBreak = {
      filter: "br",
      replacement: function(content, node, options) {
        return options.br + "\n";
      }
    };
    rules.heading = {
      filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
      replacement: function(content, node, options) {
        var hLevel = Number(node.nodeName.charAt(1));
        if (options.headingStyle === "setext" && hLevel < 3) {
          var underline = repeat(hLevel === 1 ? "=" : "-", content.length);
          return "\n\n" + content + "\n" + underline + "\n\n";
        } else {
          return "\n\n" + repeat("#", hLevel) + " " + content + "\n\n";
        }
      }
    };
    rules.blockquote = {
      filter: "blockquote",
      replacement: function(content) {
        content = content.replace(/^\n+|\n+$/g, "");
        content = content.replace(/^/gm, "> ");
        return "\n\n" + content + "\n\n";
      }
    };
    rules.list = {
      filter: ["ul", "ol"],
      replacement: function(content, node) {
        var parent = node.parentNode;
        if (parent.nodeName === "LI" && parent.lastElementChild === node) {
          return "\n" + content;
        } else {
          return "\n\n" + content + "\n\n";
        }
      }
    };
    rules.listItem = {
      filter: "li",
      replacement: function(content, node, options) {
        content = content.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n    ");
        var prefix = options.bulletListMarker + "   ";
        var parent = node.parentNode;
        if (parent.nodeName === "OL") {
          var start = parent.getAttribute("start");
          var index = Array.prototype.indexOf.call(parent.children, node);
          prefix = (start ? Number(start) + index : index + 1) + ".  ";
        }
        return prefix + content + (node.nextSibling && !/\n$/.test(content) ? "\n" : "");
      }
    };
    rules.indentedCodeBlock = {
      filter: function(node, options) {
        return options.codeBlockStyle === "indented" && node.nodeName === "PRE" && node.firstChild && node.firstChild.nodeName === "CODE";
      },
      replacement: function(content, node, options) {
        return "\n\n    " + node.firstChild.textContent.replace(/\n/g, "\n    ") + "\n\n";
      }
    };
    rules.fencedCodeBlock = {
      filter: function(node, options) {
        return options.codeBlockStyle === "fenced" && node.nodeName === "PRE" && node.firstChild && node.firstChild.nodeName === "CODE";
      },
      replacement: function(content, node, options) {
        var className = node.firstChild.getAttribute("class") || "";
        var language = (className.match(/language-(\S+)/) || [null, ""])[1];
        var code = node.firstChild.textContent;
        var fenceChar = options.fence.charAt(0);
        var fenceSize = 3;
        var fenceInCodeRegex = new RegExp("^" + fenceChar + "{3,}", "gm");
        var match;
        while (match = fenceInCodeRegex.exec(code)) {
          if (match[0].length >= fenceSize) {
            fenceSize = match[0].length + 1;
          }
        }
        var fence = repeat(fenceChar, fenceSize);
        return "\n\n" + fence + language + "\n" + code.replace(/\n$/, "") + "\n" + fence + "\n\n";
      }
    };
    rules.horizontalRule = {
      filter: "hr",
      replacement: function(content, node, options) {
        return "\n\n" + options.hr + "\n\n";
      }
    };
    rules.inlineLink = {
      filter: function(node, options) {
        return options.linkStyle === "inlined" && node.nodeName === "A" && node.getAttribute("href");
      },
      replacement: function(content, node) {
        var href = node.getAttribute("href");
        var title = cleanAttribute(node.getAttribute("title"));
        if (title)
          title = ' "' + title + '"';
        return "[" + content + "](" + href + title + ")";
      }
    };
    rules.referenceLink = {
      filter: function(node, options) {
        return options.linkStyle === "referenced" && node.nodeName === "A" && node.getAttribute("href");
      },
      replacement: function(content, node, options) {
        var href = node.getAttribute("href");
        var title = cleanAttribute(node.getAttribute("title"));
        if (title)
          title = ' "' + title + '"';
        var replacement;
        var reference;
        switch (options.linkReferenceStyle) {
          case "collapsed":
            replacement = "[" + content + "][]";
            reference = "[" + content + "]: " + href + title;
            break;
          case "shortcut":
            replacement = "[" + content + "]";
            reference = "[" + content + "]: " + href + title;
            break;
          default:
            var id = this.references.length + 1;
            replacement = "[" + content + "][" + id + "]";
            reference = "[" + id + "]: " + href + title;
        }
        this.references.push(reference);
        return replacement;
      },
      references: [],
      append: function(options) {
        var references = "";
        if (this.references.length) {
          references = "\n\n" + this.references.join("\n") + "\n\n";
          this.references = [];
        }
        return references;
      }
    };
    rules.emphasis = {
      filter: ["em", "i"],
      replacement: function(content, node, options) {
        if (!content.trim())
          return "";
        return options.emDelimiter + content + options.emDelimiter;
      }
    };
    rules.strong = {
      filter: ["strong", "b"],
      replacement: function(content, node, options) {
        if (!content.trim())
          return "";
        return options.strongDelimiter + content + options.strongDelimiter;
      }
    };
    rules.code = {
      filter: function(node) {
        var hasSiblings = node.previousSibling || node.nextSibling;
        var isCodeBlock = node.parentNode.nodeName === "PRE" && !hasSiblings;
        return node.nodeName === "CODE" && !isCodeBlock;
      },
      replacement: function(content) {
        if (!content)
          return "";
        content = content.replace(/\r?\n|\r/g, " ");
        var extraSpace = /^`|^ .*?[^ ].* $|`$/.test(content) ? " " : "";
        var delimiter = "`";
        var matches = content.match(/`+/gm) || [];
        while (matches.indexOf(delimiter) !== -1)
          delimiter = delimiter + "`";
        return delimiter + extraSpace + content + extraSpace + delimiter;
      }
    };
    rules.image = {
      filter: "img",
      replacement: function(content, node) {
        var alt = cleanAttribute(node.getAttribute("alt"));
        var src = node.getAttribute("src") || "";
        var title = cleanAttribute(node.getAttribute("title"));
        var titlePart = title ? ' "' + title + '"' : "";
        return src ? "![" + alt + "](" + src + titlePart + ")" : "";
      }
    };
    function cleanAttribute(attribute) {
      return attribute ? attribute.replace(/(\n+\s*)+/g, "\n") : "";
    }
    function Rules(options) {
      this.options = options;
      this._keep = [];
      this._remove = [];
      this.blankRule = {
        replacement: options.blankReplacement
      };
      this.keepReplacement = options.keepReplacement;
      this.defaultRule = {
        replacement: options.defaultReplacement
      };
      this.array = [];
      for (var key in options.rules)
        this.array.push(options.rules[key]);
    }
    Rules.prototype = {
      add: function(key, rule) {
        this.array.unshift(rule);
      },
      keep: function(filter) {
        this._keep.unshift({
          filter,
          replacement: this.keepReplacement
        });
      },
      remove: function(filter) {
        this._remove.unshift({
          filter,
          replacement: function() {
            return "";
          }
        });
      },
      forNode: function(node) {
        if (node.isBlank)
          return this.blankRule;
        var rule;
        if (rule = findRule(this.array, node, this.options))
          return rule;
        if (rule = findRule(this._keep, node, this.options))
          return rule;
        if (rule = findRule(this._remove, node, this.options))
          return rule;
        return this.defaultRule;
      },
      forEach: function(fn) {
        for (var i = 0; i < this.array.length; i++)
          fn(this.array[i], i);
      }
    };
    function findRule(rules2, node, options) {
      for (var i = 0; i < rules2.length; i++) {
        var rule = rules2[i];
        if (filterValue(rule, node, options))
          return rule;
      }
      return void 0;
    }
    function filterValue(rule, node, options) {
      var filter = rule.filter;
      if (typeof filter === "string") {
        if (filter === node.nodeName.toLowerCase())
          return true;
      } else if (Array.isArray(filter)) {
        if (filter.indexOf(node.nodeName.toLowerCase()) > -1)
          return true;
      } else if (typeof filter === "function") {
        if (filter.call(rule, node, options))
          return true;
      } else {
        throw new TypeError("`filter` needs to be a string, array, or function");
      }
    }
    function collapseWhitespace(options) {
      var element = options.element;
      var isBlock2 = options.isBlock;
      var isVoid2 = options.isVoid;
      var isPre = options.isPre || function(node2) {
        return node2.nodeName === "PRE";
      };
      if (!element.firstChild || isPre(element))
        return;
      var prevText = null;
      var keepLeadingWs = false;
      var prev = null;
      var node = next(prev, element, isPre);
      while (node !== element) {
        if (node.nodeType === 3 || node.nodeType === 4) {
          var text = node.data.replace(/[ \r\n\t]+/g, " ");
          if ((!prevText || / $/.test(prevText.data)) && !keepLeadingWs && text[0] === " ") {
            text = text.substr(1);
          }
          if (!text) {
            node = remove(node);
            continue;
          }
          node.data = text;
          prevText = node;
        } else if (node.nodeType === 1) {
          if (isBlock2(node) || node.nodeName === "BR") {
            if (prevText) {
              prevText.data = prevText.data.replace(/ $/, "");
            }
            prevText = null;
            keepLeadingWs = false;
          } else if (isVoid2(node) || isPre(node)) {
            prevText = null;
            keepLeadingWs = true;
          } else if (prevText) {
            keepLeadingWs = false;
          }
        } else {
          node = remove(node);
          continue;
        }
        var nextNode = next(prev, node, isPre);
        prev = node;
        node = nextNode;
      }
      if (prevText) {
        prevText.data = prevText.data.replace(/ $/, "");
        if (!prevText.data) {
          remove(prevText);
        }
      }
    }
    function remove(node) {
      var next2 = node.nextSibling || node.parentNode;
      node.parentNode.removeChild(node);
      return next2;
    }
    function next(prev, current, isPre) {
      if (prev && prev.parentNode === current || isPre(current)) {
        return current.nextSibling || current.parentNode;
      }
      return current.firstChild || current.nextSibling || current.parentNode;
    }
    var root = typeof window !== "undefined" ? window : {};
    function canParseHTMLNatively() {
      var Parser = root.DOMParser;
      var canParse = false;
      try {
        if (new Parser().parseFromString("", "text/html")) {
          canParse = true;
        }
      } catch (e) {
      }
      return canParse;
    }
    function createHTMLParser() {
      var Parser = function() {
      };
      {
        var domino = require("domino");
        Parser.prototype.parseFromString = function(string) {
          return domino.createDocument(string);
        };
      }
      return Parser;
    }
    var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();
    function RootNode(input, options) {
      var root2;
      if (typeof input === "string") {
        var doc = htmlParser().parseFromString(
          '<x-turndown id="turndown-root">' + input + "</x-turndown>",
          "text/html"
        );
        root2 = doc.getElementById("turndown-root");
      } else {
        root2 = input.cloneNode(true);
      }
      collapseWhitespace({
        element: root2,
        isBlock,
        isVoid,
        isPre: options.preformattedCode ? isPreOrCode : null
      });
      return root2;
    }
    var _htmlParser;
    function htmlParser() {
      _htmlParser = _htmlParser || new HTMLParser();
      return _htmlParser;
    }
    function isPreOrCode(node) {
      return node.nodeName === "PRE" || node.nodeName === "CODE";
    }
    function Node(node, options) {
      node.isBlock = isBlock(node);
      node.isCode = node.nodeName === "CODE" || node.parentNode.isCode;
      node.isBlank = isBlank(node);
      node.flankingWhitespace = flankingWhitespace(node, options);
      return node;
    }
    function isBlank(node) {
      return !isVoid(node) && !isMeaningfulWhenBlank(node) && /^\s*$/i.test(node.textContent) && !hasVoid(node) && !hasMeaningfulWhenBlank(node);
    }
    function flankingWhitespace(node, options) {
      if (node.isBlock || options.preformattedCode && node.isCode) {
        return { leading: "", trailing: "" };
      }
      var edges = edgeWhitespace(node.textContent);
      if (edges.leadingAscii && isFlankedByWhitespace("left", node, options)) {
        edges.leading = edges.leadingNonAscii;
      }
      if (edges.trailingAscii && isFlankedByWhitespace("right", node, options)) {
        edges.trailing = edges.trailingNonAscii;
      }
      return { leading: edges.leading, trailing: edges.trailing };
    }
    function edgeWhitespace(string) {
      var m = string.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/);
      return {
        leading: m[1],
        leadingAscii: m[2],
        leadingNonAscii: m[3],
        trailing: m[4],
        trailingNonAscii: m[5],
        trailingAscii: m[6]
      };
    }
    function isFlankedByWhitespace(side, node, options) {
      var sibling;
      var regExp;
      var isFlanked;
      if (side === "left") {
        sibling = node.previousSibling;
        regExp = / $/;
      } else {
        sibling = node.nextSibling;
        regExp = /^ /;
      }
      if (sibling) {
        if (sibling.nodeType === 3) {
          isFlanked = regExp.test(sibling.nodeValue);
        } else if (options.preformattedCode && sibling.nodeName === "CODE") {
          isFlanked = false;
        } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
          isFlanked = regExp.test(sibling.textContent);
        }
      }
      return isFlanked;
    }
    var reduce = Array.prototype.reduce;
    var escapes = [
      [/\\/g, "\\\\"],
      [/\*/g, "\\*"],
      [/^-/g, "\\-"],
      [/^\+ /g, "\\+ "],
      [/^(=+)/g, "\\$1"],
      [/^(#{1,6}) /g, "\\$1 "],
      [/`/g, "\\`"],
      [/^~~~/g, "\\~~~"],
      [/\[/g, "\\["],
      [/\]/g, "\\]"],
      [/^>/g, "\\>"],
      [/_/g, "\\_"],
      [/^(\d+)\. /g, "$1\\. "]
    ];
    function TurndownService(options) {
      if (!(this instanceof TurndownService))
        return new TurndownService(options);
      var defaults = {
        rules,
        headingStyle: "setext",
        hr: "* * *",
        bulletListMarker: "*",
        codeBlockStyle: "indented",
        fence: "```",
        emDelimiter: "_",
        strongDelimiter: "**",
        linkStyle: "inlined",
        linkReferenceStyle: "full",
        br: "  ",
        preformattedCode: false,
        blankReplacement: function(content, node) {
          return node.isBlock ? "\n\n" : "";
        },
        keepReplacement: function(content, node) {
          return node.isBlock ? "\n\n" + node.outerHTML + "\n\n" : node.outerHTML;
        },
        defaultReplacement: function(content, node) {
          return node.isBlock ? "\n\n" + content + "\n\n" : content;
        }
      };
      this.options = extend({}, defaults, options);
      this.rules = new Rules(this.options);
    }
    TurndownService.prototype = {
      turndown: function(input) {
        if (!canConvert(input)) {
          throw new TypeError(
            input + " is not a string, or an element/document/fragment node."
          );
        }
        if (input === "")
          return "";
        var output = process.call(this, new RootNode(input, this.options));
        return postProcess.call(this, output);
      },
      use: function(plugin) {
        if (Array.isArray(plugin)) {
          for (var i = 0; i < plugin.length; i++)
            this.use(plugin[i]);
        } else if (typeof plugin === "function") {
          plugin(this);
        } else {
          throw new TypeError("plugin must be a Function or an Array of Functions");
        }
        return this;
      },
      addRule: function(key, rule) {
        this.rules.add(key, rule);
        return this;
      },
      keep: function(filter) {
        this.rules.keep(filter);
        return this;
      },
      remove: function(filter) {
        this.rules.remove(filter);
        return this;
      },
      escape: function(string) {
        return escapes.reduce(function(accumulator, escape) {
          return accumulator.replace(escape[0], escape[1]);
        }, string);
      }
    };
    function process(parentNode) {
      var self = this;
      return reduce.call(parentNode.childNodes, function(output, node) {
        node = new Node(node, self.options);
        var replacement = "";
        if (node.nodeType === 3) {
          replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
        } else if (node.nodeType === 1) {
          replacement = replacementForNode.call(self, node);
        }
        return join(output, replacement);
      }, "");
    }
    function postProcess(output) {
      var self = this;
      this.rules.forEach(function(rule) {
        if (typeof rule.append === "function") {
          output = join(output, rule.append(self.options));
        }
      });
      return output.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
    }
    function replacementForNode(node) {
      var rule = this.rules.forNode(node);
      var content = process.call(this, node);
      var whitespace = node.flankingWhitespace;
      if (whitespace.leading || whitespace.trailing)
        content = content.trim();
      return whitespace.leading + rule.replacement(content, node, this.options) + whitespace.trailing;
    }
    function join(output, replacement) {
      var s1 = trimTrailingNewlines(output);
      var s2 = trimLeadingNewlines(replacement);
      var nls = Math.max(output.length - s1.length, replacement.length - s2.length);
      var separator = "\n\n".substring(0, nls);
      return s1 + separator + s2;
    }
    function canConvert(input) {
      return input != null && (typeof input === "string" || input.nodeType && (input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11));
    }
    module2.exports = TurndownService;
  }
});

// src/index.js
var parser = require_cjs();
var xmlser = require_xmlserializer();
var html2xhtml = (html) => xmlser.serializeToString(parser.parse(html));
var JSDOMParser = require_JSDOMParser();
var Readability = require_Readability();
window = {};
window.DOMParser = function() {
};
window.DOMParser.prototype.parseFromString = function(html) {
  return html == "" ? true : new JSDOMParser().parse(html2xhtml(html));
};
var TurndownSvc = require_turndown_cjs();
