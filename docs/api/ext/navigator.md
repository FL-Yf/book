<!--
 * @Author: zxf
 * @Date: 2022-04-18 11:55:35
 * @Description: 导览
-->
### 导览管理

**注意：在使用navigatorViewManager前请先安装它：**

````javascript
zqsdk.ext.install('navigator-view-manager');
````

| 接口                                                         | 类型     | 描述         | 参数       | 返回 |
| :----------------------------------------------------------- | :------- | :----------- | :--------- | :--- |
| zqsdk.navigatorViewManager.switchView(`<params:object>`)       | Function | 切换视角     | params     | 无   |
| zqsdk.navigatorViewManager.stopNavigator()                   | Function | 停止当前导览 | 无         | 无   |
| zqsdk.navigatorViewManager.setNavigatorSpeed(`<speed:number>`) | Function | 设置导览倍速 | speed:倍速 | 无   |



e.g.切换视角

```javascript
zqsdk.navigatorViewManager.switchView({
    `<`location_id:string`>`, // 导览点位ID
    `[`switch_mode:string`]`, // roam:漫游, fade:淡入淡出
    `<`camera_rotation:quaternion`>`, // 相机角度
    `<`rotate_deg:number`>`, // 旋转角度
    `<`rotate_duration:number`>`, // 旋转时长 ms
    `<`rotate_direction:number`>`, // 旋转方向
    `[`switch_complete:function`]` // 切换完成回调
    `[`navigator_complete:function`]` // 导览完成回调
})
```