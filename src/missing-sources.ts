import * as tsc from "typescript";

const path = require("path");

const program = tsc.createProgram([path.resolve("./src/entry.ts")], {
  target: tsc.ScriptTarget.ES2015
});
const sources = program.getSourceFiles();

sources.forEach((source: tsc.SourceFile) => {
  const path = source.fileName;
  if (path.indexOf('node_modules') === -1) {
    console.log(`Source file: ${path}`);
  }
});
