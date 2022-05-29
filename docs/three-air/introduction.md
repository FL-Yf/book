<!--
 * @Author: zxf
 * @Date: 2022-04-18 10:29:18
 * @Description: 入门
-->
## 名词

| 名称     | 定义                                                         |
| -------- | ------------------------------------------------------------ |
| 作品     | 包含作品类别、作品创建人、作品创建时间，作品全局配置等构成的数据集，一个作品可包含多个场景 |
| 场景     | 包含一个三维模型（实拍，虚拟）或者一个全景图片（2：1全景图）构成的数据集 |
| 实拍模型 | 通过我司三维空间扫描设备构建出来的模型                       |
| 虚拟模型 | 通过3dmax等三维建模软件构建出来的模型                        |
| 全景图片 | 通过全景相机拍摄的图片                                       |
| 点位     | 三维空间扫描设备所在的拍摄点位置，并且可单独配置每个点位的图片、显隐、以及禁用或启用点位等 |
| 导览     | 包含点位ID, 初始视角、切换方式、旋转时间以及旋转角度等数据；通过触发导览，可切换到所在的点位，并且自动旋转相机，查看模型全景 |
| 漫游     | 核心动作的一种动画效果；点位切换、模式切换，楼层切换统称为漫游效果 |
| 照片墙   | 属于物品摆放功能，用户点击一张图片素材，添加到场景里，该素材会跟随鼠标移动，直到用户点击右键摆放到合适位置；可以编辑位置、调整角度、设置离墙距离等 |
| 视频墙   | 属于物品摆放功能，用户点击一个视频素材，添加到场景里，该素材会跟随鼠标移动, 直到用户点击右键摆放到合适位置；可在三维空间播放视频；可以编辑位置、调整角度、设置离墙距离等 |
| 标签     | 模型中的标记，内容可以包括文字、图片、视频、音频、商品等，可以用于扩展模型中物品的详细信息 |


## 概念

+ 场景浏览模式：3D模式(dollhouse)、平面模式(floorplan)、全景模式(panorama)

**3D模式：** 相机视角在3D模型外部，可拖动、旋转、拉近拉远浏览模型

  ![](https://material.3dnest.cn/1/1093/feae9c0ff389472c_963_563.png?x-oss-process=image/resize,w_800,m_lfit)

  

**平面模式：**  相机视角至上而下俯视整个模型，一般用于查看户型图

  ![](https://material.3dnest.cn/1/1093/adf955a4c0d9457b_997_835.png?x-oss-process=image/resize,w_800,m_lfit)

  

**全景模式：** 相机视角在模型内部，可查看相机所在点位的全景图片，并且点位之间可以自由切换，进而浏览整个模型

  ![](https://material.3dnest.cn/1/1093/af717a1af03045f6_1218_792.png?x-oss-process=image/resize,w_800,m_lfit)



## 介绍

#### 什么是 zqsdk？

**zqsdk**是众趣开发的一个渲染3D场景的通用js库，它拥有提供给开发者自由定制属于自己的3D渲染平台的能力，覆盖了当前3D VR 互联网行业所有的应用功能，给客户带来3D沉浸式体验。



#### 初步了解 zqsdk

zqsdk 是一个3D 渲染引擎, API在功能上可以分为两大类：

+ 基础渲染类

1. [core](../api/core.html)

核心接口对象，封装了三维空间的中相关API，比如获取当前相机视角、当前相机位置、当前点位等。


2. [action](../api/action.html)

动作相关接口对象，主要包含切换到3D模式、切换到全景模式、切换到平面模式、切换到指定点位等API。


3. [boot](../api/boot.html)

启动引擎接口对象，zqsdk.boot.runStart 启动渲染三维空间。


4. [ext](../api/ext/)

扩展模块接口对象，用来安装其他功能模块，如安装标签管理扩展模块，可摆放、编辑标签等 `zqsdk.ext.install('ext name')`。



+ 挂件扩展类

1. [tagsManager](../api/ext/tag.html)

标签管理扩展模块


2. [waypointManager](../api/ext/point.html)

点位管理扩展模块


3. videosWallManager

视频墙管理扩展模块


4. photosWallManager

照片墙管理扩展模块


5. [navigatorViewManager](../api/ext/navigator.html)

导览管理扩展模块


::: tip
想要使用扩展模块的接口API对象，那必须在核心加载完成后，安装改功能扩展模块
:::


## 体验

<iframe src="https://100e.3dnest.cn/review/?work_id=2SeKokxKQmN" width="100%" height="600px" style="margin: 20px 0"></iframe>