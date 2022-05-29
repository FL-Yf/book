<!--
 * @Author: zxf
 * @Date: 2022-04-18 11:55:52
 * @Description: 点位
-->
### 点位管理

**注意：在使用waypointManager前请先安装它：**

````javascript
zqsdk.ext.install('waypoint-manager');
````

| 接口                                                         | 类型     | 描述                 | 参数                                                         | 返回 |
| :----------------------------------------------------------- | :------- | :------------------- | :----------------------------------------------------------- | :--- |
| zqsdk.waypointManager.showEditGroups                         | Function | 显示编辑组           | 无                                                           | 无   |
| zqsdk.waypointManager.hideEditGroups                         | Function | 隐藏编辑组           | 无                                                           | 无   |
| zqsdk.waypointManager.onClickBtn                             | Callback | 点击编辑组按钮时触发 | data:object                                                  | 无   |
| zqsdk.waypointManager.setAllWaypointTexture(`<`params`>`)    | Function | 设置所有点位纹理     | params: `{ pic:string }`                                       | 无   |
| zqsdk.waypointManager.setSingleWaypointTexture(`<`params`>`) | Function | 设置单个点位纹理     | params: `{ id:string, pic:string }`                            | 无   |
| zqsdk.waypointManager.resetAllWaypointTexture                | Function | 重置点位纹理         | 无                                                           | 无   |
| zqsdk.waypointManager.hideAllWaypoint                        | Function | 隐藏所有点位         | 无                                                           | 无   |
| zqsdk.waypointManager.showAllWaypoint([force:boolean])       | Function | 显示所有点位         | force: 强制显示所有点位，包括禁用点位                        | 无   |
| zqsdk.waypointManager.adapterWaypointsData(`<`params:Array`>`); | Function | 适配点位数据         | params: ````[{id: string, enable: boolean,visible: boolean,pic: string }]```` | 无   |

e.g.更改所有点位纹理

````javascript
zqsdk.waypointManager.setAllWaypointTexture({
    pic: '' // 纹理图片地址
});
````

e.g.更改单个点位纹理

````javascript
zqsdk.waypointManager.setSingleWaypointTexture({
    id: '', // 点位LocationId
    pic: '', // 纹理图片地址
});
````

e.g.监听点位禁用|启用按钮点击事件

```javascript
zqsdk.waypointManager.onClickBtn = (data) => {
    console.log(data); // { id:string, enable:boolean }
}
```

