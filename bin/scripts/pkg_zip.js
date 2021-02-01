// 打包项目并上传至阿里云
console.log("ZIP*******************************************************************");
require("dotenv-flow").config();
const fs = require('fs');
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
const os = process.env.STEEDOS_PKG_OS || 'win';

if (!os) {
  console.error("*  Please set env STEEDOS_PKG_OS!!!");
  return;
}

let cwd = process.cwd();
console.log("*  VERSION: ", VERSION);
console.log("*  cwd: ", cwd);

const ZIP_VERSION = `steedos-v${VERSION}-${os}-x64.zip`;

console.log(`*  ${os}: zip start!`);
if (fs.existsSync(`dist/${ZIP_VERSION}`)) {
  fs.unlinkSync(`dist/${ZIP_VERSION}`);
}
execSync(`7z a -tzip dist/${ZIP_VERSION} .vscode bin node_modules public steedos-app steedos-packages/*.package .env .gitignore .npmignore 在线帮助.url mongodb.js package.json server.js steedos-config.yml yarn.lock -x!bin/mongodb -x!bin/scripts`);
console.log(`*  ${os}: zip done!`);

console.log("*******************************************************************ZIP");