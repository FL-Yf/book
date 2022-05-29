<!--
 * @Author: zxf
 * @Date: 2022-04-18 10:29:58
 * @Description: 教程
-->

## 开始

````javascript
<script src="zqsdk.js"></script>
````

````javascript
const zqsdk = require('zqsdk');
````

````javascript
import zqsdk from 'zqsdk';
````



## 创建WebGL渲染容器

注：启动前需要创建dom标签作为渲染容器

````javascript
#renderer-stage {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}
<div id="renderer-stage"></div>
````



## 快速启动

+ 启动前先获取模型数据，获取方式请联系众趣商务人员

+ 调用runStart接口

::: tip
bootData 模型数据格式请参考 [模型分类](./course.html#模型分类)
:::

````javascript
// 启动SDK
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
            zqsdk.waypointManager.adapterWaypointsData(pointData);
        });
        zqsdk.ext.install('tags-manager', function() {
            //此时标签管理工具安装完成，在此回调中需要适配标签相关数据,具体参数请移步标签管理API说明
            zqsdk.tagsManager.load(tagData);
            //用来设置标签显示范围，在标签加载完成后调用，具体参数请移步标签管理API说明
            zqsdk.tagsManager.setVisualRange(visualRange);
        });
    },
    onProgress: function (data) {
    	console.info('加载进度', data);
    }
});
````

## 模型分类

模型分为 **实拍模型**、**虚拟模型**、**全景图片** 三种类型，加载不同类型的模型需要在启动时传入不同的数据参数

+ 实拍模型数据

````javascript
var bootData = {
    <id:string>, // 素材ID
    <type:string('model')>, // 素材类别
    <version:string>, // 版本
    <entry_info:object> { // 首入信息字段
        <mode:string>, // 入口模式， 默认值：panorama
        [point:string], // 首入点位ID, 默认值：null
        [rotation:quaternion], // 首入点旋转四元数, 默认值：null
        [lon_lat:object] // 首入模式相机控制经纬度，默认值：null
    },
    [lod_loading:object] // 分级加载配置
        <enalbe:boolean>,
        <mode:Array<number>
}
````


+ 虚拟模型数据

````javascript
var bootData = {
    <id:string>, // 素材ID
    <type:string('virtual')>, // 素材类别
    <version:string>, // 版本
    <entry_info:object>，{ // 首入信息字段
        <mode:string>, // 入口模式， 默认值：panorama
        [point:string], // 首入点位ID, 默认值：null
        [rotation:quaternion], // 首入点旋转四元数, 默认值：null
        [lon_lat:object] // 首入模式相机控制经纬度，默认值：null
    },
    [lod_loading:object] // 分级加载配置
        <enalbe:boolean>,
        <mode:Array<number>
}
````


+ 全景图片数据

````javascript
var bootData = {
    <id:string>, // 素材ID
    <type:string('purepano')>, // 素材类别,
    <pano_pic:object> { // 全景图片字段
        <src:string>, // 图片地址
    },
    <entry_info:object> {
        <rotation:quaternion> // 旋转四元数，默认值: { x: 0, y: 0, z: 0, w: 1 }
    }
}
````