## todo 当前任务 10/5 - 15:53

1. 调用天地图 api，实现地名搜索 10/6 - 20:21 初步完成，有待完善
2. 读取本地的 shp，geoJson，kml，kmz，geoTiff 等文件 10/7 15:09 geoTiff 没完成
   - 拖拽读取
   - 打开文件管理器读取
3. 设置矢量图层的样式
4. 对 geoTiff 进行波段运算

## todo 10/18 - 13:05

先把上次埋的坑给解决了，上次由于时间不够了，做了一些临时的功能，比如：

- 十分敷衍的矢量图层样式设置
- 一个按钮，点击它会添加三个 geotiff，分别是真彩色、假彩色和 ndvi 的，这应该是那个波段运算里面该完成的功能，这个波段运算就下一次做吧，本地能读取这个 geotiff 就这次来说就算是大功告成了
- 拖拽读取也还有完善的空间，就是把 openlayers 的那个 dragAndDrop 交互和我自己的那个拖拽结合一下，后期也应该增加更过的数据格式
- 更改 UI，以前的有些东西不应该使用 dialog 来打开，比如那个选择要素所显示的那个属性表，应该显示在右边的一个视图中，还有就是那个图层样式设置也应该显示在那个视图中，还有交互和控件设置

总之，先把坑给填了，然后使用 git 管理一下我的项目，坑填完了，它就是我这个项目的第一个版本了。

**TODO:**

1. 完善地名搜索功能
2. 本地读取 geoTiff
3. 完善矢量图层样式管理
4. 调整 UI，使界面更加 responsive
5. 使用`docusaurus`写一下帮助文档

## Base

- 矢量图层应该包含的自定义属性
  - layerName
  - tags
  - style
  - geometryType
  - layerType
- 瓦片图层应该包含的自定义属性
  - layerName
  - tags
  - layerTpye

## Log: 2024-11-17

- BaseLayerCard 并不需要 children
- 以后将缩放至图层和矢量编辑功能统一放在 LayerSettingDropdown 里面
- 相关的判断也在 LayerSettingDropDown 里面进行
- 根据 tags 进行判断

## useless file

addLayer

- EmptyVectorLayer
- LoadFile

reorder

- EditBtn
- ZoomToLayerBtn
