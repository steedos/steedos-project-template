# Steedos Project Template

## 打包发布说明

基于 windows 操作系统执行打包命令

### 环境准备

1. git clone 本项目至本地。

2. 下载 [nodejs-12.20.1.zip](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/bin/nodejs-12.20.1.zip) 和 [mongodb-4.2.11](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/bin/mongodb-4.2.11.zip) 并解压到项目 bin 文件夹下：
   - bin
     - mongodb-4.2.11
     - nodejs-12.20.1
3. 安装并配置[阿里云命令行工具 ossutil](https://help.aliyun.com/document_detail/120075.html)，将 ossutil64 添加进 PATH。
   .env.local 中配置 STEEDOS_PKG_OSS_PLATFORM_FOLD。
4. 安装[压缩工具 7-zip](https://www.7-zip.org/)，将 7-zip 添加进 PATH。
5. 安装[Docker Desktop for Windows](https://docs.docker.com/get-docker/)。

### 打包并上传

1. 在项目下执行 `yarn`, 安装依赖 node_modules。

2. 执行 `yarn start` 测试服务是否能正常启动，使用；测试完成后停掉服务。

3. 在项目下执行 `yarn pkg`，等待完成即可。
