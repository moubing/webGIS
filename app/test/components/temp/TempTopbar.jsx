import { AddLayerMenu } from "../addLayer/AddlayerMenu";

export function TempTopbar() {
  return (
    <div className=" p-2  flex-grow-0 flex items-center justify-between ">
      <div>图层管理器</div>
      <div>
        <AddLayerMenu />
      </div>
    </div>
  );
}
