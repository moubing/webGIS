"use client";

export function CancleBtn({ name = "取消", handleCancle }) {
  return (
    <button
      className="px-2 py-1 rounded-md  text-gray-700 outline-2 outline outline-gray-200 bg-slate-300 shadow-md"
      onClick={handleCancle}
    >
      {name}
    </button>
  );
}

export function ConfirmBtn({ name = "确定", handleConfirm }) {
  return (
    <button
      className="px-2 py-1 rounded-md outline outline-2 outline-gray-200 bg-green-500 text-gray-50 shadow-md"
      onClick={handleConfirm}
    >
      {name}
    </button>
  );
}
