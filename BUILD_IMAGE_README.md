1、`yarn start` 测试项目是否正常
2、打包：`docker build -t steedos/steedos-project-template:1.23.26 .`
3、测试：`docker-compose up -d`
4、发布：`docker push steedos/steedos-project-template:1.23.26` 如果提示login则执行 `docker login`