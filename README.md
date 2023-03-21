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


## 快速向导

推荐使用 docker 运行华炎魔方。

### 启动数据库 & VSCode Server

```bash
docker-compose up
```

### 访问VSCode Server

打开浏览器，访问 http://127.0.0.1:5555/?folder=/home/workspace/steedos-project-template ，进入VS Code远程开发环境。
在 VS Code 中打开文件夹 /home/workspace/steedos-project-template

### 启动项目

在 VS Code Server 中进入控制台，输入启动命令。 

```bash
yarn
yarn start
```

### 访问华炎魔方

打开浏览器，访问 http://127.0.0.1:5000，进入华炎魔方。

进入设置应用，可以：
- 创建自定义对象
- 创建应用
- 创建微页面

### 元数据同步

在界面上定义的元数据可以同步为源码。

```
yarn source:retrieve
```

### 软件包发布

- 修改 `package.json` 中的软件包名称和版本号
- 使用 [npm publish](https://docs.npmjs.com/cli/v8/commands/npm-publish) 命令可以把软件包发布到仓库。

### 安装软件包

已发布的软件包，可以安装到另一个华炎魔方环境（例如生产环境）

- 选择菜单：设置 - 软件包
- 点击“手动安装软件包”
- 输入软件包名称，点击“确认”