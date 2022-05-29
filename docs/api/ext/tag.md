<!--
 * @Author: zxf
 * @Date: 2022-04-18 11:52:03
 * @Description: 标签
-->
### 标签管理 

**注意：使用标签API前请先安装 标签管理功能：**

````javascript
zqsdk.ext.install('tags-manager')
````


- 主动调用

| 接口                                                   | 类型     | 描述                     | 参数                                                         | 返回值 |
| ------------------------------------------------------ | -------- | ------------------------ | ------------------------------------------------------------ | ------ |
| zqsdk.tagsManager.unEdit()                             | Function | 非编辑模式               | 无                                                           | 无     |
| zqsdk.tagsManager.editMode()                           | Function | 编辑模式                 | 无                                                           | 无     |
| zqsdk.tagsManager.add(`<params:object>`)                 | Function | 添加标签                 | params: 标签数据                                             | 无     |
| zqsdk.tagsManager.remove(`<uuid:stirng>`)                | Function | 移除标签                 | uuid:标签UUID                                                | 无     |
| zqsdk.tagsManager.load(`<params:object>`)                | Function | 加载当前场景下的所有标签 | params: `{<data>: 标签列表数据, <success>: 成功回调, <fail>: 失败回调}` | 无     |
| zqsdk.tagsManager.showTags()                           | Function | 显示当前场景所有标签     | 无                                                           | 无     |
| zqsdk.tagsManager.hideTags()                           | Function | 隐藏当前场景所有标签     | 无                                                           | 无     |
| zqsdk.tagsManager.show(`<uuid:string>`)                  | Function | 显示单个标签             | uuid:标签UUID                                                | 无     |
| zqsdk.tagsManager.hide(`<uuid:string>`)                  | Function | 隐藏单个标签             | uuid:标签UUID                                                | 无     |
| zqsdk.tagsManager.showLocationLine()                   | Function | 显示所有标签定位线       | 无                                                           | 无     |
| zqsdk.tagsManager.hideLocationLine()                   | Function | 隐藏所有标签定位线       | 无                                                           | 无     |
| zqsdk.tagsManager.showLocationLine2(`<params:object>`)   | Function | 显示单个标签定位线       | params: `{ uuid:string, success:function }`                    | 无     |
| zqsdk.tagsManager.hideLocationLine2(`<params:object>`)   | Function | 隐藏单个标签定位线       | params: `{ uuid:string, success:function }`                    | 无     |
| zqsdk.tagsManager.setVisualRange(`<visualRange:number>`) | Function | 设置标签可见范围         | visualRange:可见范围                                         | 无     |
| zqsdk.tagsManager.getTagDataOfScene(`<params:object>`)   | Function | 获取标签数据             | params: `{tag_id: string, scene_id: string}`                   | object |
| zqsdk.tagsManager.flyToTag(`<params:object>`)            | Function | 飞向标签位置             | params: `{ <uuid:string>:标签UUID,[roam_duration:number]:漫游时长,[rotate_duration:number]:旋转时长, [complete:function]:完成回调 }` | 无     |




- 被动监听

  

| 方法                        | 类型     | 描述             | 参数 | 返回值        |
| --------------------------- | -------- | ---------------- | ---- | ------------- |
| zqsdk.tagsManager.onPutDown | Callback | 监听标签摆放成功 | 无   | data:标签数据 |
| zqsdk.tagsManager.onClick   | Callback | 监听标签点击事件 | 无   | data:标签数据 |
| zqsdk.tagsManager.onChoosed | Callback | 监听标签选中事件 | 无   | data:标签数据 |



e.g.添加标签 

````javascript
<>：必传项
[]：选填项
let data: {
    <width:number> 标签图片宽度
    <height:number> 标签图片高度
    <type:string> 标签图片类型(png, jpg, gif)
    <src:string> 标签图片地址
    [id:string] 标签ID
    [location_id:string] 点位ID
    [model_id:string] 模型ID
    [position:object] 位置 {x:number, y:number, z:number}
    [rotation:object] 角度 {x:number, y:number, z:number, w:number}
    [scale:object] 缩放 {x:number, y:number, z:number}
    [center:object] 中心点坐标 {x:number, y:number, z:number}
    [center_screen:object] 中心点屏幕坐标 {x:number, y:number}
    [location_line:object] 定位线 {length:number, visible:boolean}
    [visible:boolean] 标签显隐
}
zqsdk.tagsManager.add(data);
````

e.g.删除标签

````javascript
zqsdk.tagsManager.remove(uuid);
````

e.g.监听标签摆放

````javascript
/** 返回信息包含uuid */
zqsdk.tagsManager.onPutDown = (result) => {
  console.log(result); 
}
````

e.g.初始化加载标签

````javascript
let _data = [
    <width:number> 标签图片宽度
    <height:number> 标签图片高度
    <type:string> 标签图片类型(png, jpg, gif)
    <src:string> 标签图片地址
    [id:string] 标签ID
    [location_id:string] 点位ID
    [model_id:string] 模型ID
    [position:object] 位置 {x:number, y:number, z:number}
    [rotation:object] 角度 {x:number, y:number, z:number, w:number}
    [scale:object] 缩放 {x:number, y:number, z:number}
    [center:object] 中心点坐标 {x:number, y:number, z:number}
    [center_screen:object] 中心点屏幕坐标 {x:number, y:number}
    [location_line:object] 定位线 {length:number, visible:boolean}
    [visible:boolean] 标签显隐
]
zqsdk.tagsManager.load({
    data: _data,
    success: () => {
    
    },
    failed: () => {
	 
    }
});
````

e.g飞向标签

````javascript
let params = {
	<uuid:string>:标签UUID,
	[roam_duration:number]:漫游时长,
	[rotate_duration:number]:旋转时长, 
	[complete:function]:完成回调
}
zqsdk.tagsManager.flyToTag(params);
````

e.g监听标签被点击

````javascript
/** 可以获取到该标签摆放时传入的信息 */
zqsdk.tagsManager.onClick = (data) => {
	console.log(data) 
}
````

