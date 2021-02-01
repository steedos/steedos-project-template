// build 镜像并上传至docker hub
console.log("IMAGE*******************************************************************");
const { execSync } = require("child_process");
const VERSION = require("steedos-server/package.json").version;
const IMAGE_VERSION = `steedos/steedos-project-template:${VERSION}`;
let temVers = VERSION.split('.');
const LASTEST_VERSION = `steedos/steedos-project-template:${temVers[0]}.${temVers[1]}`;

let cwd = process.cwd();
console.log("*  IMAGE_VERSION: ", IMAGE_VERSION);
console.log("*  LASTEST_VERSION: ", LASTEST_VERSION);
console.log("*  cwd: ", cwd);

console.log(`*  image: push to docker hub start!`);
execSync(`docker push ${IMAGE_VERSION}`);
execSync(`docker rmi ${LASTEST_VERSION} --force`);
execSync(`docker tag ${IMAGE_VERSION} ${LASTEST_VERSION}`);
execSync(`docker push ${LASTEST_VERSION}`);
console.log(`*  image: push done!`);
console.log("*******************************************************************IMAGE");