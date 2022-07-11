This is a [Steedos](https://www.steedos.com/) project bootstrapped with [`create-steedos-app`](https://github.com/steedos/steedos-platform/tree/master/packages/create-steedos-app).

## Getting Started

### Start mongodb & redis service

```bash
docker-compose up
```

### Start steedos service

```bash
yarn
yarn start
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Learn More

To learn more about Steedos Platform, take a look at the following resources:

- [Steedos Documentation](https://www.steedos.com/docs) - learn about Steedos features and API.

You can check out [the Steedos GitHub repository](https://github.com/steedos/steedos-platform/) - your feedback and contributions are welcome!

## Deploy your project

The easiest way to deploy your Steedos app is to use the [Docker Template](https://github.com/steedos/docker).

Check out our [Steedos deployment documentation](https://www.steedos.com/docs/deploy/getting-started) for more details.

## 软件包初始化说明

模板项目在初始化过程中，会根据.env文件中STEEDOS_INITIAL_PACKAGES参数配置的值来初始化相应软件包。

目前，默认初始化时会安装业务软件包：主数据（@steedos-labs/master）,合同管理（@steedos-labs/contract）,项目管理（@steedos-labs/project）,协同办公（@steedos-labs/oa）,流程审批-审批王（@steedos-labs/workflow）,费用管理（@steedos-labs/app-cost-control）。

如需要软件包相应业务数据，华炎魔方模板项目支持相应演示数据导入。管理员在登录系统后，进入“设置”-“应用程序”-“软件包”-“手动安装软件包”，来安装相应业务演示数据软件包。

业务演示数据软件包名称为“@steedos-labs/demo-project”。软件包安装成功后会初始化相应组织架构、人员、主数据、合同、项目、费用以及流程审批相应业务演示数据。需要注意的是，软件包安装初始化完成后，需要确认审批流节点人员是否配置，保证业务流程能够正常审批流转。
