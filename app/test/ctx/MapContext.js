import { createContext } from "react";

// 存储map对象
export const MapContext = createContext(null);

// 存储控件对象
export const ControlsContext = createContext(null);

// 存储交互对象
export const InteractionsContext = createContext(null);

// 存储临时编辑的矢量要素的图层
export const VectorLayerContext = createContext(null);
