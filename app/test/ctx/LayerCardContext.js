import { createContext } from "react";

// 用于baseLayerCard，每个baseLayerCard都有一个对应的图层
// 如果该图层为矢量图层，那么它还应该有一个对应的Style
// 存储单个图层
export const LayerContext = createContext(null);
// 存储单个图层的样式，前提是该图层是矢量图层
export const StyleContext = createContext(null);
