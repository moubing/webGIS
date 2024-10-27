import { createContext } from "react";

// 存储图层列表
export const LayerListContext = createContext(null);
export const SetLayerListContext = createContext(null);

// 存储正在编辑的图层
export const EditLayerContext = createContext(null);
export const SetEditLayerContext = createContext(null);

// 存储选中的要素
export const SelectedFeaturesContext = createContext(null);
export const SetSelectedFeaturesContext = createContext(null);
