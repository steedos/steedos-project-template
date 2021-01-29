// 打包项目并上传至阿里云
console.log("ZIP*******************************************************************");
require("dotenv-flow").config();
const fs = require('fs');
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
let temVers = VERSION.split('.')
const LASTEST_VERSION = `${temVers[0]}.${temVers[1]}`;
const ossFold = process.env.STEEDOS_PKG_OSS_PLATFORM_FOLD;
const os = process.env.STEEDOS_PKG_OS || 'win';
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
console.log("*  LASTEST_VERSION: ", LASTEST_VERSION);
console.log("*  cwd: ", cwd);

const ZIP_VERSION = `steedos-v${VERSION}-${os}-x64.zip`;
const ZIP_LASTEST_VERSION = `steedos-v${LASTEST_VERSION}-${os}-x64.zip`;

if (fs.existsSync(`dist/${ZIP_LASTEST_VERSION}`)) {
  fs.unlinkSync(`dist/${ZIP_LASTEST_VERSION}`);
}

console.log(`*  ${os}: upload to aliyun!`);
execSync(`ossutil64 --force cp dist/${ZIP_VERSION} ${ossFold}`);
fs.copyFileSync(`dist/${ZIP_VERSION}`,`dist/${ZIP_LASTEST_VERSION}`);
execSync(`ossutil64 --force cp dist/${ZIP_LASTEST_VERSION} ${ossFold}`);
console.log(`*  ${os}: upload done!`);
console.log("*******************************************************************ZIP");