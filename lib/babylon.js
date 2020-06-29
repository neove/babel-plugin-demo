"use strict";

// const babylon = require("babylon");
// const code = `function square(n) {
//   return n * n;
// }`;
// const tokens = babylon.parse(code, {
//   sourceType: "module", // default: "script"
// });
var template = require("babel-template");

var generate = require("babel-generator")["default"];

var t = require("babel-types");

var buildRequire = template("\n  var IMPORT_NAME = require(SOURCE);\n");
var ast = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  SOURCE: t.stringLiteral("my-module")
});
console.log(generate(ast).code);