let index = 1;
const layerName = "unNamed";

export function getDefaultLayerName() {
  const defaultLayerName = layerName + index;
  return defaultLayerName;
}

// 这里为什么需要这个函数呢，就是应为在react的dev环境下，组件会被执行两次
// 如果把index++放在上面的函数中，会导致这个函数不pure，每次运行得到的结果不一样
// 下面这个函数的意义就是每当这个defaultLayerName被使用的时候
// 我们才更新这个defaultLayerName，也就是把它的后缀加一
//! 所以一定要记住，当使用了这个defaultLayerName后，也就是点击了添加图层的按钮后，
//! 记得调用这个函数更新index

export function updateDefaultlayerName() {
  index++;
}
