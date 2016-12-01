hades-chrome-extension
=====
> [Hades](https://github.com/zcfrank1st/hades) 项目的chrome插件

![](https://raw.githubusercontent.com/zcfrank1st/hades-chrome-extension/master/devops-chrome-extension/logo/hades128.png)

* 描述
hades项目的chrome插件，基于gitlab进行项目的配置管理，分dev和prod环境

* 如何使用
    1. 首先，进入`devops`目录执行`npm install`,之后执行`npm install -g angular-cli`
    2. 然后修改 `restful.service.ts` 中后台服务地址（参考hades-web模块部署地址），之后执行`ng build`, 将新打包好的内容（在`dist`下）拷贝到根目录下的`devops-chrome-extension`文件夹中，覆盖文件，之后将`devops-chrome-extension`拖到chrome中安装
    3. 打开gitlab项目页,例如(http://xxx/username/project/?.*),然后打开该extension
    4. 用gitlab的`username` 和 `private token` 登录
    5. 假如你是项目的owner或者管理员，你就有权限对项目的配置进行管理