"use client";

import { MenuItem } from "@headlessui/react";
import { FiFileText } from "react-icons/fi";
import { RiFileCheckLine } from "react-icons/ri";
import { VscSaveAll } from "react-icons/vsc";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaRegFolderOpen } from "react-icons/fa";
import { TbFileExport } from "react-icons/tb";

export function NewFileBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <FiFileText className="size-5 text-sky-500" />
          <section>新建文件</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}

export function OpenFileBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <FaRegFolderOpen className="size-5 text-sky-500" />
          <section>打开文件</section>
        </div>
        <section>Ctrl + I</section>
      </button>
    </MenuItem>
  );
}
export function SaveBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <RiFileCheckLine className="size-5 text-sky-500" />
          <section>保存</section>
        </div>
        <section>Ctrl + S</section>
      </button>
    </MenuItem>
  );
}
export function SaveAsBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <VscSaveAll className="size-5 text-sky-500" />
          <section>另存为</section>
        </div>
        <section>Ctrl + Shift + I</section>
      </button>
    </MenuItem>
  );
}
export function PrintBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <MdOutlineLocalPrintshop className="size-5 text-sky-500" />
          <section>打印</section>
        </div>
        <section>Alt + I</section>
      </button>
    </MenuItem>
  );
}
export function ExportBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <TbFileExport className="size-5 text-sky-500" />
          <section>导出</section>
        </div>
        <section>Alt + I</section>
      </button>
    </MenuItem>
  );
}
export function ExitBtn() {
  return (
    <MenuItem className="data-[focus]:bg-sky-200">
      <button
        className="flex items-center justify-between p-2 rounded-md w-full"
        onClick={() => {}}
      >
        <div className=" flex items-center gap-2">
          <ImExit className="size-5 text-sky-500" />
          <section>退出</section>
        </div>
        <section>Alt + I</section>
      </button>
    </MenuItem>
  );
}
