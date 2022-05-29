<!--
 * @Author: zxf
 * @Date: 2022-04-18 11:48:34
 * @Description: 动作
-->
### 动作模块

+ 主动调用

| 接口                         | 类型     | 接口描述     | 参数描述 | 返回 |
| :--------------------------- | :------- | :----------- | :------- | :--- |
| zqsdk.action.turnToDollhouse | Function | 切换3D模式   | 无       | 无   |
| zqsdk.action.turnToPanorama  | Function | 切换全景模式 | 无       | 无   |
| zqsdk.action.turnToFloorplan | Function | 切换平面模式 | 无       | 无   |



+ 被动监听

| 接口                                | 类型     | 接口描述         | 参数描述 | 返回        |
| ----------------------------------- | -------- | ---------------- | -------- | ----------- |
| zqsdk.action.onModeChange           | Callback | 监听模式变化     | 无       | data:object |
| zqsdk.action.onFlyingToPano         | Callback | 监听正在飞入全景 | 无       | data:object |
| zqsdk.action.onFlyingToPanoComplete | Callback | 监听飞入全景成功 | 无       | data:object |
| zqsdk.action.onCameraRotation       | Callback | 监听相机旋转     | 无       | data:object |
| zqsdk.action.onCameraRotationStop   | Callback | 监听相机旋转停止 | 无       | 无          |

e.g.

```javascript
zqsdk.action.turnToDollhouse();

zqsdk.action.zqsdk.action.onModeChange = (data) => {
    console.debug(data);
}

/** 监听到达的点位信息 */
zqsdk.action.onFlyingToPanoComplete = (data) => {
    console.debug(data);
}
```


