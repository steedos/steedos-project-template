使用 Node-Red 开发微服务
===

[Node-Red](https://nodered.org/) 是 IBM 开源的服务端低代码开发工具。

## 使用 Node-Red 可以做什么？

- 创建定时任务
- 开发华炎魔方微服务
- 自定义API
- 编写触发器

## 为什么使用 Node-Red ？

相比使用代码开发服务端业务逻辑，Node-Red 的优势包括

- 可视化开发
- 可视化调试
- 事件驱动
- 热部署

# 快速开始

## 启动 Node-Red 管理界面

使用以下命令启动 Node-Red 管理界面, 使用 Node-Red 开发的业务流会保存在 flows.json 中，可以提交的到代码仓库。

```sh
yarn nodered:admin
```

## 运行 Node-Red 软件包

使用 Node-Red 开发的软件包，可以用微服务的方式运行。软件包启动时，会开启单独的进程运行 Node-Red 。

```sh
yarn nodered:start
```
