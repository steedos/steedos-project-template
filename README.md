华炎魔方模版项目
===

<p align="center">
<a href="./README_en.md">English</a>
<a href="https://www.steedos.cn/docs/"> · 文档</a>
<a href="https://www.steedos.cn/videos/"> · 视频</a>
<a href="https://demo.steedos.cn"> · 试用</a>
</p>


<p align="center" style="border-top: solid 1px #cccccc">
  华炎魔方是 <a href="https://developer.salesforce.com/developer-centers/developer-experience" target="_blank">Salesforce Developer Experience (DX)</a> 的开源替代方案，将低代码技术与 <a href="https://www.steedos.cn/docs/deploy/devops"> DevOps 工具</a> 结合，实现敏捷开发的新高度。 
</p>

<h3 align="center">
 🤖 🎨 🚀
</h3>


# 快速向导

## 使用 docker 启动数据库

华炎魔方运行依赖 mongodb 和 redis，需先在本地安装运行相关服务。

```bash
docker-compose -f docker-compose-db.yml up
```

## 启动华炎魔方

### 使用本地 nodejs 启动华炎魔方

运行华炎魔方需要在本地安装 nodejs 14 和 python 等编译环境，如果本地有环境，可以本地启动华炎魔方。

```bash
yarn
yarn start:steedos
```

### 使用 docker 启动华炎魔方

对于 windows 和 mac 用户，推荐使用此方法。

```bash
docker-compose -f docker-compose-steedos.yml up
```

## 访问华炎魔方

打开浏览器，访问 http://127.0.0.1:5000，进入华炎魔方。

进入设置应用，可以：
- 创建自定义对象
- 创建应用
- 创建微页面


## 开发软件包

可以使用微服务的方式扩展华炎魔方。可以参考 services 文件夹下的例子。

```bash
yarn
yarn start
```

## 使用 Node-RED

[Node-Red](https://nodered.org/) 是 IBM 开源的服务端低代码开发工具，提供了可视化的开发环境，开发华炎魔方微服务。

- 创建定时任务
- 自定义微服务
- 自定义API
- 自定义触发器
- 接收和推送消息

```bash
yarn nodered
```
