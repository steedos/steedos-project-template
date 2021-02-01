// build 镜像并上传至docker hub
console.log("IMAGE*******************************************************************");
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
const IMAGE_VERSION = `steedos/steedos-project-template:${VERSION}`;

let cwd = process.cwd();
console.log("*  VERSION: ", VERSION);
console.log("*  cwd: ", cwd);

console.log(`*  image: build start!`);
execSync(`docker rmi ${IMAGE_VERSION} --force`);
execSync(`docker build --no-cache=true -t ${IMAGE_VERSION} .`);
console.log(`*  image: build done!`);

console.log("*******************************************************************IMAGE");