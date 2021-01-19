require("dotenv-flow").config();
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
const ossFold = process.env.STEEDOS_PKG_OSS_QUICK_INSTALL_FOLD;
const os = process.env.STEEDOS_PKG_OS;
if (!ossFold) {
  console.error("please set env STEEDOS_PKG_OSS_QUICK_INSTALL_FOLD!!!");
  return;
}
if (!os) {
  console.error("please set env STEEDOS_PKG_OS!!!");
  return;
}
console.log("ossFold: ", ossFold);

let cwd = process.cwd();
console.log("VERSION: ", VERSION);
console.log("cwd: ", cwd);

console.log(`${os}: zip start!`);
execSync(`7z a -tzip dist/steedos-mini-${os}-${VERSION}.zip * -x!.git -x!dist -x!.env.local`);
console.log(`${os}: zip done!`);

console.log(`${os}: upload to aliyun!`);
execSync(
  `ossutil --force cp dist/steedos-mini-${os}-${VERSION}.zip ${ossFold}`
);
console.log(`${os}: upload done!`);
