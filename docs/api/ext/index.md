<!--
 * @Author: zxf
 * @Date: 2022-04-18 11:53:37
 * @Description: 安装
-->
### 安装

| 接口                                                         | 类型     | 接口描述             | 参数描述                                        | 返回   |
| :----------------------------------------------------------- | :------- | :------------------- | :---------------------------------------------- | :----- |
| zqsdk.ext.install( `<`extName:string`>`, `[`installedCallback:function`]` ) | Function | 安装扩展应用         | extName: 应用名 installedCallback: 安装完成回调 | 无     |
| zqsdk.ext.uninstall(`<`extName`>`)                           | Function | 卸载扩展应用         | extName(应用名):string                          | 无     |
| zqsdk.ext.getInstalledExt()                                  | Function | 获取已安装的应用集合 | 无                                              | object |
| zqsdk.ext.uninstallAllExts()                                 | Function | 卸载已安装的所有应用 | 无                                              | 无     |

e.g.

```javascript
// 安装场景模块
zqsdk.ext.install(
    'scenes-list-manager', // 扩展应用名称
    () => { // 安装完成回调
        // ...
    }
);
zqsdk.ext.uninstall('xxx'); // 卸载鼠标导航圆盘
```

