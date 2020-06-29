// const babylon = require("babylon");
// const code = `function square(n) {
//   return n * n;
// }`;
// const tokens = babylon.parse(code, {
//   sourceType: "module", // default: "script"
// });

const template = require("babel-template");
const generate = require("babel-generator").default;
const t = require("babel-types");

const buildRequire = template(`
  var IMPORT_NAME = require(SOURCE);
`);

const ast = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  SOURCE: t.stringLiteral("my-module"),
});

console.log(generate(ast).code);
