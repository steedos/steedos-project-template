// 打包项目并上传至阿里云
console.log("ZIP*******************************************************************");
require("dotenv-flow").config();
const fs = require('fs');
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
const ossFold = process.env.STEEDOS_PKG_OSS_PLATFORM_FOLD;
const os = process.env.STEEDOS_PKG_OS || 'win';
const dbDirectoryName = 'db';
if (!ossFold) {
  console.error("*  Please set env STEEDOS_PKG_OSS_PLATFORM_FOLD!!!");
  return;
}
if (!os) {
  console.error("*  Please set env STEEDOS_PKG_OS!!!");
  return;
}
console.log("*  ossFold: ", ossFold);

let cwd = process.cwd();
console.log("*  VERSION: ", VERSION);
console.log("*  cwd: ", cwd);

if (fs.existsSync(dbDirectoryName)) {
  fs.rmdirSync(dbDirectoryName, { recursive: true });
}
fs.mkdirSync(dbDirectoryName);

const ZIP_VERSION = `steedos-v${VERSION}-${os}-x64.zip`;

console.log(`*  ${os}: zip start!`);
if (fs.existsSync(`dist/${ZIP_VERSION}`)) {
  fs.unlinkSync(`dist/${ZIP_VERSION}`);
}
execSync(`7z a -tzip dist/${ZIP_VERSION} .vscode bin db node_modules public steedos-app .env .gitignore .npmignore 在线帮助.url mongodb.js package.json server.js steedos-config.yml yarn.lock -x!bin/mongodb -x!bin/scripts`);
console.log(`*  ${os}: zip done!`);

console.log(`*  ${os}: upload to aliyun!`);
execSync(`ossutil64 --force cp dist/${ZIP_VERSION} ${ossFold}`);
console.log(`*  ${os}: upload done!`);
console.log("*******************************************************************ZIP");