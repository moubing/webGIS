import { IoLayersOutline } from "react-icons/io5";
import { RiPlayListAddFill } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
import { TbMapPlus } from "react-icons/tb";
import { Tab } from "@headlessui/react";

export function LayerTab() {
  return (
    <Tab className=" focus:outline-none text-gray-500 data-[selected]:text-white data-[hover]:text-white w-12 h-12 p-1.5 flex items-center justify-center text-3xl">
      <IoLayersOutline />
    </Tab>
  );
}

export function AddLayerTab() {
  return (
    <Tab className=" focus:outline-none text-gray-500 data-[selected]:text-white data-[hover]:text-white w-12 h-12 p-1.5 flex items-center justify-center text-3xl">
      <RiPlayListAddFill />
    </Tab>
  );
}
export function ShortcutTab() {
  return (
    <Tab className=" focus:outline-none text-gray-500 data-[selected]:text-white data-[hover]:text-white w-12 h-12 p-1.5 flex items-center justify-center text-3xl">
      <MdSwitchAccessShortcutAdd />
    </Tab>
  );
}
export function BaseMapTab() {
  return (
    <Tab className=" focus:outline-none text-gray-500 data-[selected]:text-white data-[hover]:text-white w-12 h-12 p-1.5 flex items-center justify-center text-3xl">
      <TbMapPlus />
    </Tab>
  );
}
export function SettingTab() {
  return (
    <button className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500 align-bottom justify-items-end">
      <VscSettingsGear />
    </button>
  );
}
export function AccountTab() {
  return (
    <button className="w-12 h-12 p-1.5 flex items-center justify-center text-3xl  hover:text-white text-gray-500 justify-items-end">
      <VscAccount />
    </button>
  );
}
