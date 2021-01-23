// 打包项目并上传至阿里云
console.log("ZIP*******************************************************************");
require("dotenv-flow").config();
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
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
console.log("*  cwd: ", cwd);

const ZIP_VERSION = `steedos-v${VERSION}-${os}-x64.zip`;
console.log(`*  ${os}: zip start!`);
execSync(`7z a -tzip dist/${ZIP_VERSION} * -x!.git -x!dist -x!.env.local -x!docker-volumes -x!bin/mongodb -x!docker-compose.yml -x!Dockerfile`);
console.log(`*  ${os}: zip done!`);

console.log(`*  ${os}: upload to aliyun!`);
execSync(`ossutil64 --force cp dist/${ZIP_VERSION} ${ossFold}`);
console.log(`*  ${os}: upload done!`);
console.log("*******************************************************************ZIP");