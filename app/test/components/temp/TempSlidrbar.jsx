import { IoLayersOutline } from "react-icons/io5";
import { RiPlayListAddFill } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
import { TbMapPlus } from "react-icons/tb";

// 临时的侧边栏，没有实现任何功能
export function TempSliderbar() {
  return (
    <div className="h-full bg-gray-800 flex-grow-0  flex flex-col items-center justify-between">
      <div>
        <LayerTab />
        <AddLayerTab />
        <ShortcutTab />
        <BaseMapTab />
      </div>
      <div>
        <AccountTab />
        <SettingTab />
      </div>
    </div>
  );
}

function LayerTab() {
  return (
    <div className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500">
      <IoLayersOutline />
    </div>
  );
}

function AddLayerTab() {
  return (
    <div className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500">
      <RiPlayListAddFill />
    </div>
  );
}
function ShortcutTab() {
  return (
    <div className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500">
      <MdSwitchAccessShortcutAdd />
    </div>
  );
}
function BaseMapTab() {
  return (
    <div className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500">
      <TbMapPlus />
    </div>
  );
}
function SettingTab() {
  return (
    <div className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500">
      <VscSettingsGear />
    </div>
  );
}
function AccountTab() {
  return (
    <div className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500">
      <VscAccount />
    </div>
  );
}
