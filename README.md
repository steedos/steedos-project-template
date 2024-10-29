# Steedos DX 项目模板

Steedos 开发者体验 (DX) 是一种全新的方式，用于在 Steedos 低代码平台上管理和开发应用程序的整个生命周期。它结合了低代码平台的最佳实践，实现了源代码驱动的开发、团队协作治理，以及为 Steedos 上的自定义应用开发提供了新的敏捷性。

- [什么是 Steedos DX](https://docs.steedos.com/developer/setup/steedos-dx)
- [什么是 Steedos Package](https://docs.steedos.com/developer/package/overview)

# 入门指南

## 运行 Steedos 平台

首先，您必须运行 Steedos 平台。

```bash
cd steedos-platform
docker-compose up
```

### 注册管理员账户

首次启动时，系统会提示您注册一个账户并创建一个组织。该账户也将成为该组织的管理员账户。

### 创建 API 密钥

您可以使用管理员凭证登录 Steedos 服务器，进入设置应用，选择 API 密钥菜单，并创建一个新的 API 密钥。

## 设置环境变量

### 设置 TRANSPORTER

Steedos 包使用 [Moleculer](https://moleculer.services/docs) 微服务框架，通过配置统一的 Transporter 连接微服务。

[Moleculer Transporter](https://moleculer.services/docs/0.14/networking) 是一个重要的模块，如果您在多个节点上运行服务，它会与其他节点通信。它传输事件，处理请求和响应等。如果服务的多个实例在不同节点上运行，请求将会在它们之间负载均衡。

```bash
TRANSPORTER=redis://127.0.0.1:6379
```
:::提示
请确保您配置的 TRANSPORTER 与您希望连接的 Steedos 服务器匹配，并且网络是互联的。
:::

:::警告
在生产环境中运行时，请务必配置 Redis 密码。
:::

### 设置元数据服务器

设置元数据同步所需的环境变量。

```bash
steedos source:config
```

- 元数据服务器：METADATA_SERVER 是您希望连接的 Steedos 服务器的 ROOT_URL。
- 元数据 API 密钥：METADATA_APIKEY 用于验证您的身份。

此命令将环境变量写入 .env.local 文件中，

```bash
METADATA_SERVER=
METADATA_APIKEY=
```

您也可以直接设置上述环境变量，而无需运行该命令。

## 运行 Steedos 包

### 安装依赖

```bash
yarn
```

### 运行包

您可以使用 [moleculer-runner](https://moleculer.services/docs/0.14/runner) 命令启动 steedos 包。

```bash
yarn start
```

:::提示
请注意，Steedos DX 项目支持多包开发，上述命令会同时启动 steedos-packages 文件夹下的所有包。
:::