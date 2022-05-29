<!--
 * @Author: zxf
 * @Date: 2022-04-18 10:30:34
 * @Description: 示例
-->

## 基础渲染

以下例子我们使用SDK展示了它的基本的渲染能力，在后面的示例中我们会以该示例作为基础进行解释和扩展。


```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    #renderer-stage {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }
  </style>
</head>

<body>
  <div id="renderer-stage"></div>
</body>
<button id="btn">ADK -> Demo</button>
<script>
  let bootData = null; // 模型数据
  let pointData = null; // 点位数据
  let tagData = null; // 标签数据
  let visualRange = 5; // 标签显示范围

  bootData = {
    id: 'zq_sywkmrzggcp_147', // 素材ID
    type: 'model', // 素材类别
    version: '2018-08-10-15-24-13', // 版本
    entry_info: { // 首入信息字段
        mode: 'panorama', // 入口模式， 默认值：panorama
        point: null, // 首入点位ID, 默认值：null
        rotation: null, // 首入点旋转四元数, 默认值：null
        lon_lat: null// 首入模式相机控制经纬度，默认值：null
    },
    lod_loading: {
      enable: true,
      mode: [1, 2]
    }
  }

  pointData = [
    {id: 'location_02', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_04', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_05', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_25', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_24', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_20', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_16', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_15', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_21', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_22', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_06', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_07', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_08', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_12', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_09', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_11', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_10', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_14', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_13', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_03', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'}
  ]

  tagData = [
    {
      height: 512,
      width: 512,
      id: "AWyOEektcdP",
      location_id: "location_02",
      location_line: {length: 0.6, visible: false},
      model_id: "1dYuVkJYDSg",
      position: {x: 1.104881048514399, y: -1.4491374217453177, z: -0.8167761587569897},
      rotation: {x: 0.03448090696782526, y: 0.7085871485160413, z: 0.7039251285249339, w: -0.034709270285288245},
      scale: {x: 0.05, y: 0.05, z: 0.05},
      src: "http://material.3dnest.cn/1/672/997758c6ea994611_512_512.png",
      type: "png",
      visible: true
    }
  ]
  window.onload = function () {
    // 启动
    zqsdk.boot.runStart({
        data: bootData,
        onFirstPanoLoaded: function () {
          console.info('首入点天空盒加载完成');
        },
        onModelLoaded: function () {
          console.info('3D模型加载完成');
        },
        onLoaded: function () {
            console.info('核心加载完成');
            zqsdk.ext.install('navigator-reticule');
            zqsdk.ext.install('entrypoint-manager')
            zqsdk.ext.install('photos-wall-manager');
            zqsdk.ext.install('videos-wall-manager');
            zqsdk.ext.install('navigator-view-manager');
            zqsdk.ext.install('waypoint-manager', function() {
                //此时点位管理工具安装完成，在此回调中需要适配点位相关数据,具体参数请移步点位管理API说明
                zqsdk.waypointManager.adapterWaypointsData(pointData)
                
            });
            zqsdk.ext.install('tags-manager', function() {
                //此时标签管理工具安装完成，在此回调中需要适配标签相关数据,具体参数请移步标签管理API说明
                zqsdk.tagsManager.load({
                  data: tagData,
                  success: () => {
                    console.log('load.tags.complete');
                    //用来设置标签显示范围，在标签加载完成后调用，具体参数请移步标签管理API说明
                    zqsdk.tagsManager.setVisualRange(visualRange);
                  },
                  failed: () => {
                    console.log('load.tags.failed');
                  }
                });
            });
        },
        onProgress: function (data) {
          console.info('加载进度', data);
        }
    });
  }
</script>

</html>
```



## 导航圆盘

+ 概念：在基础渲染全景中我们会看到一个白色的图标会跟随鼠标移动，这个图标就叫做导航圆盘
+ 安装：在场景中我们想要显示导航圆盘，就需要先安装它，但注意要在核心加载完成后安装

````javascript
zqsdk.ext.install('navigator-reticule');
````



+ 卸载

````javascript
zqsdk.ext.uninstall('navigator-reticule');
````





## 相机视角

+ 获取当前相机旋转角度

````javascript
zqsdk.core.getCurrentCameraRotation();
````



+ 监听相机旋转

````javascript
zqsdk.action.onCameraRotation = (data) => {
	console.info(data);
}
````



+ 监听相机旋转停止

````javascript
zqsdk.action.onCameraRotationStop = (data) => {
	console.info(data);
}
````



+ 获取当前相机模式 
  - 全景模式 (panorama)
  - 3D模式 (dollhouse)
  - 平面模式 (floorplan)

````javascript
zqsdk.core.getCurrentMode();
````



+ 设置当前相机模式

  - 全景模式

    ```javascript
    zqsdk.action.turnToPanorama();
    ```

  - 3D模式

    ```javascript
    zqsdk.action.turnToDollhouse();
    ```

  - 平面模式

    ```javascript
    zqsdk.action.turnToFloorplan();
    ```



+ 监听相机模式变化

````javascript
zqsdk.action.onModeChange = (data) => {
    console.info(data);
}
````



## 建筑楼层

我们为了便利用户在多楼层建筑的情况下，想要快速浏览到其他楼层，我们提供出了对多层建筑切换楼层的功能

+ 获取所有楼层

````javascript
zqsdk.core.getAllFloorsInfo();
````



+ 获取当前楼层

````javascript
zqsdk.core.getCurrentFloorInfo();
````



+ 切换楼层

  注意：在 **全景模式** 下才可进行楼层切换

````javascript
let index = 0; // 楼层索引
zqsdk.core.switchFloor(index);
````



+ 选择所有楼层

  注意：在 **3D模式** 和 **平面模式** 下才可进行楼层选择

````javascript
zqsdk.core.chooseAllFloor();
````



+ 选择楼层

  注意：在 **3D模式** 和 **平面模式** 下才可进行楼层选择

````javascript
let index = 0; // 楼层索引
zqsdk.core.chooseFloor(index);
````



+ 监听楼层切换

````javascript
zqsdk.core.onModelSetFloor = (data) => {
	console.info(data);
}
````





## 导航地标 



+ 概念：是指在 **全景模式** 下地面上的图标，鼠标点击后，视角可以跟随移动，也可以称为 **点位**，在后续本文中提到的 **点位** 就是指 **导航地标**。

+ 使用方式：在核心加载完成后安装它，然后在安装成功的回调中适配导航地标的数据。

````javascript
// 地标数据
let pointData = [
    {id: 'location_02', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_03', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_04', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
    {id: 'location_05', enable: true, visible: true, pic: '//material.3dnest.cn/1/1/c6930616be504d0f_512_512.png'},
]

// 安装
zqsdk.ext.install('waypoint-manager', function() {
    zqsdk.waypointManager.adapterWaypointsData(pointData)
});
````



+ 地标数据

  类型：Array

  数组的每一条数据表示一个地标点的详细描述

  - id: 地标点唯一唯一标识
  - enble: 是否启用该点位，true为启用，false为禁用并且该点位不显示，点击后相机也无法移动过去
  - visible: 是否显示该点位，true为显示，false为隐藏，但是点击该点位后相机可以正常移动过去
  - pic: 地标的图标地址url



+ 显示所有点位

````javascript
zqsdk.waypointManager.showAllWaypoint();
````



+ 隐藏所有点位

````javascript
zqsdk.waypointManager.hideAllWaypoint();
````



+ 显示编辑组

作用：当显示编辑组后，可以用来禁用单个点位。

````javascript
zqsdk.waypointManager.showEditGroups();
````



+ 隐藏编辑组

````javascript
zqsdk.waypointManager.hideEditGroups();
````



+ 设置所有点位的图标

````javascript
let url = {
    pic: '' // 图片地址
}
zqsdk.waypointManager.setAllWaypointTexture(url);
````



+ 获取当前点位ID

````javascript
zqsdk.core.getCurrentLocationId();
````



+ 监听到达点位通知（可以把点位ID和展示信息绑定，当到达某个点位后触发展示信息）

```javascript
zqsdk.action.onFlyingToPanoComplete = (data) => {
  console.error(data)
}
```





## 标识物

+ 概念：我们提供了允许在全景中打标签的功能，这个标签就是 **标识物**，不过在后续文章中我们会频繁提到 **标签** 这个词汇，为了方便理解 **标识物** 既是  **标签**。



+ 安装标签管理

````
zqsdk.ext.install('tags-manager', function() {
	consoel.info('标签管理安装完成');
})
````



+ 加载标签

注意：加载标签之前需要安装标签管理

````javascript
// 标签数据
let tagData = [
    {
        height: 512,
        width: 512
        id: "AWyOEektcdP",
        location_id: "location_02",
        location_line: {length: 0.6, visible: false},
        model_id: "1dYuVkJYDSg",
        position: {x: 1.104881048514399, y: -1.4491374217453177, z: -0.8167761587569897},
        rotation: {x: 0.03448090696782526, y: 0.7085871485160413, z: 0.7039251285249339, w: -0.034709270285288245},
        scale: {x: 0.05, y: 0.05, z: 0.05},
        src: "http://material.3dnest.cn/1/672/997758c6ea994611_512_512.png",
        type: "png",
        visible: true
    }
]

let visualRange = 5; // 设置标签显示范围

zqsdk.ext.install('tags-manager', function() {
    consoel.info('标签管理安装完成');
    zqsdk.tagsManager.load({
        data: tagData,
        success: () => {
            consoel.info('标签加载完成');
            zqsdk.tagsManager.setVisualRange(visualRange); 
        },
        failed: () => {
        	console.log('load.tags.failed');
        }
    });
});
````



+ 编辑模式 (允许添加标签、移动标签等对标签操作的行为)

````javascript
zqsdk.tagsManager.editMode();
````



+ 非编辑模式（禁止对标签进行操作）

````javascript
zqsdk.tagsManager.unEdit();
````



+ 添加标签

````javascript
// tagData 的其可选参数可详细参考API Tag
let tagData = {
	height: 200,
    width: 200,
    type: "png",
    src: "//material.3dnest.cn/1/1233/15d7e6a162cb4365_200_200.png",
}
zqsdk.tagsManager.add(tagData);
````



+ 移除标签

````javascript
let uuid = 'xxx'; // 在标签摆放成功中可获取到uuid
zqsdk.tagsManager.remove(uuid);
````



+ 监听标签摆放成功

````javascript
zqsdk.tagsManager.onPutDown = (data) => {
	console.info(data);
}
````



+ 获取标签数据并且绑定标签 id

```javascript
let tagData = zqsdk.tagsManager.getTagDataOfScene({
    tag_id: data.uuid,
    scene_id: data.model_id 
})
tagData.id = "xxx"
```



+ 设置标签显示范围

````javascript
let visualRange = 5;
zqsdk.tagsManager.setVisualRange(visualRange);
````



+ 显示所有标签

````
zqsdk.tagsManager.showTags();
````



+ 隐藏所有标签

````
zqsdk.tagsManager.hideTags();
````



+ 监听标签点击

````
zqsdk.tagsManager.onClick = (data) => {
	console.info(data);
}
````



+ 飞向标签 (在标签摆放或者点击标签的时候可以拿到uuid)

````javascript
let params = {
	uuid:'标签UUID',
	roam_duration:'漫游时长(ms)',
	rotate_duration:'旋转时长(ms)', 
	complete:function() {}
}
zqsdk.tagsManager.flyToTag(params);
````



+ 显示所有标签定位线

````javascript
zqsdk.tagsManager.showLocationLine();
````



+  隐藏所有标签定位线

```javascript
zqsdk.tagsManager.hideLocationLine();
```



+ 设置标签引线长度

```javascript
let params = {
	'tag_id': 'uuid',
    'len': 1
}
zqsdk.tagsManager.setLocationLineLen(params);
```



+ 如何绑定标签数据，点击显示该标签所绑定的相关业务信息

​		当 **添加标签** 后，会触发  **监听标签摆放** 的回调，在回调中我们获取到了该标签的相关信息，然后通过 **获取标签数据并且绑定标签 id**接口来绑定ui展示信息id，然后在 **监听点击标签** 的返回信息中就携带的我们绑定的id，通过这个唯一id来展示相应的ui信息。

````javascript
(function add() {
  let data = {
    height: 200,
    src: "http://material.3dnest.cn/1/1233/15d7e6a162cb4365_200_200.png",
    type: "png",
    width: 200
  }
  // 添加标签
  document.querySelector('.tag').onclick = function() {
    zqsdk.tagsManager.add(data);
  }

  // 监听摆放
  zqsdk.tagsManager.onPutDown = (data) => {
    // 获取标签数据并且绑定标签id
    let tagData = zqsdk.tagsManager.getTagDataOfScene({
      tag_id: data.uuid,
      scene_id: data.model_id 
    })
    tagData.id = "xxx"
  }

  // 监听点击
  zqsdk.tagsManager.onClick = (data) => {
    console.info(data);
  }
})()
````



## 智能导览

+ 概念：可以在模型中设置特定的点位做为一个路径点，并且在点位的位置会旋转相机视角进行模型浏览，当设置了多个点位后，我们就可以点击特定的点位进行浏览，也可以多个点位按顺序播放浏览模型了。



+ 截图

```javascript
// picInfo: {base64: string, width: number, height: number}
let picInfo = zqsdk.core.screenShot();
```



+ 添加导览点位

```javascript
let params = {
    location_id: zqsdk.core.getCurrentLocationId(), // 获取当前点位ID
    switch_mode: 'roam', // roam:漫游, fade:淡入淡出
    camera_rotation: zqsdk.core.getCurrentCameraRotation(), // 获取当前相机角度
    rotate_deg: 90, // 旋转角度（0-360）
    rotate_duration: 1500, // 旋转时长 （1000-30000）ms
    rotate_direction: 1, // 旋转方向 顺时针：1,逆时针： 2
}
```



+ 切换导览点位（开始导览）

```javascript
zqsdk.navigatorViewManager.switchView({
    location_id: 'location_02',
    switch_mode: 'roam',
    camera_rotation: {x: 0.05139083730922004, y: 0.9333739458437116, z: 0.148694660224818, w: -0.3225863560063},
    rotate_deg: 90,
    rotate_duration: 1500,
    rotate_direction: 1,
    switch_complete: function() {}, // 切换完成回调
    navigator_complete: function() {} // 导览完成回调
})
```



+ 停止导览

```
zqsdk.navigatorViewManager.stopNavigator();
```



+ 设置导览倍速

```javascript
// speed: number
zqsdk.navigatorViewManager.setNavigatorSpeed(speed);
```



+ 自动多个点位智能导览

```javascript
(function navigator() {
  document.querySelector(".navigator").onclick = function() {
    star1();
  }

  function star1() {
    zqsdk.navigatorViewManager.switchView({
        location_id: 'location_02',
        switch_mode: 'roam',
        camera_rotation: {x: 0.05139083730922004, y: 0.9333739458437116, z: 0.148694660224818, w: -0.3225863560063},
        rotate_deg: 90,
        rotate_duration: 1500,
        rotate_direction: 1,
        switch_complete: function() {}, // 切换完成回调
        navigator_complete: function() {star2()} // 导览完成回调
    })
  }

  function star2() {
    zqsdk.navigatorViewManager.switchView({
      location_id: 'location_04',
      switch_mode: 'roam',
      camera_rotation: {x: 0.05139083730922004, y: 0.9333739458437116, z: 0.148694660224818, w: -0.3225863560063},
      rotate_deg: 120,
      rotate_duration: 2000,
      rotate_direction: 1,
      switch_complete: function() {}, // 切换完成回调
      navigator_complete: function() {star3()} // 导览完成回调
    })
  }

  function star3() {
    zqsdk.navigatorViewManager.switchView({
      location_id: 'location_06',
      switch_mode: 'roam',
      camera_rotation: {x: 0.05139083730922004, y: 0.9333739458437116, z: 0.148694660224818, w: -0.3225863560063},
      rotate_deg: 120,
      rotate_duration: 2000,
      rotate_direction: 1,
      switch_complete: function() {}, // 切换完成回调
      navigator_complete: function() {} // 导览完成回调
    })
  }
})();
```