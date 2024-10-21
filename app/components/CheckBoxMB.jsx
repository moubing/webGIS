"use client";

import { Checkbox } from "@headlessui/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

//! props描述
// 这里的handler就是父组件传过来的一个函数，

export function CheckBoxMB({ initialState, handler }) {
  const [isCheck, setIsCheck] = useState(initialState);

  return (
    <Checkbox
      className="group cursor-pointer size-6 bg-white rounded-lg flex items-center justify-center border-2 border-gray-500 data-[checked]:border-pink-500 "
      checked={isCheck}
      onChange={() => {
        handler(!isCheck);
        setIsCheck(!isCheck);
      }}
    >
      <FaCheck className="hidden text-pink-500 size-4 group-data-[checked]:block" />
    </Checkbox>
  );
}

export function CheckboxMB({ initialState, handlerChange, optionKey }) {
  const [isCheck, setIsCheck] = useState(initialState);

  return (
    <div className="bg-slate-200 rounded-md flex p-2 gap-2 items-center">
      <Checkbox
        className="group cursor-pointer size-4 bg-white rounded-sm flex items-center justify-center border-2 border-gray-500 data-[checked]:border-pink-500 "
        checked={isCheck}
        onChange={() => {
          handlerChange(optionKey, !isCheck);
          setIsCheck(!isCheck);
        }}
      >
        <FaCheck className="hidden text-pink-500 size-2 group-data-[checked]:block" />
      </Checkbox>
      <h1 className="text-sm font-bold">{optionKey}</h1>
    </div>
  );
}
