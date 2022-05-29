<!--
 * @Author: zxf
 * @Date: 2022-04-16 17:40:44
 * @Description: 
-->
## API 参考

### 核心模块

+ 主动调用

| 接口 | 类型 | 描述 | 参数 | 返回 |
| :-- | :--: | :-- | :-- | :-- |
| zqsdk.core.getAllFloorsInfo() | Function | 获取所有楼层 | 无 | Array |
| zqsdk.core.getCurrentFloorInfo() | Function | 获取当前楼层 | 无 | Floor |
| zqsdk.core.getCurrentLocationId() | Function | 获取当前点位ID | 无 | locationId:string |
| zqsdk.core.getCurrentCameraRotation() | Function | 获取当前相机旋转角度 | 无 | quaternion:vector4 } |
| zqsdk.core.getCurrentMode() | Function | 获取当前模式 | 无 | { mode:string} |
| zqsdk.core.switchFloor(`<`floorIndex:number`>`) | Function | 切换楼层 | floorIndex:楼层索引 | 无 |
| zqsdk.core.switchModel({ `<`id:string`>`, `<`type:string}`>` }) | Function | 切换模型 | params: {  id:模型ID,  type:模型类型 } | 无 |
| zqsdk.core.setFlyToPanoTransitionConsuming(`<`ms:number`>`)  | Function | 设置飞入全景的过渡时间(ms) | transitionConsuming:过渡时长 | 无 |
| zqsdk.core.screenShot() | Function | Canvas截图 | 无 | data: {  base64:图片数据,  width:宽度,  height:高度 } |
| zqsdk.core.getFloorBorder(`<`floorIdx:number`>`) | Function | 获取楼层边界 | floorIdx:楼层索引 | { lt: 左上屏幕坐标 rb: 右下屏幕坐标 } |

+ 被动监听

| 接口                             | 类型     | 描述             | 参数        | 返回 |
| :------------------------------- | :------- | :--------------- | :---------- | :--- |
| zqsdk.core.onCoreLoaded          | Callback | 监听核心加载完成 | data:object | 无   |
| zqsdk.core.onModelSetFloor       | Callback | 监听切换楼层     | data:object | 无   |
| zqsdk.core.onSwitchModelComplete | Callback | 监听模型切换完成 | data:object | 无   |

e.g.

```javascript
/** 返回当前点位id */
zqsdk.core.getCurrentLocationId();

/** 返回截取的图片信息 */
zqsdk.core.screenShot();

/** 返回当前模型被查看的模式 */
zqsdk.core.getCurrentMode();

/** 返回当前相机旋转角度 */
zqsdk.core.getCurrentCameraRotation();

/** 返回当前所在楼层信息 */
zqsdk.core.getCurrentFloorInfo();
```

