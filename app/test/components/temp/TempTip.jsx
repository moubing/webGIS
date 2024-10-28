import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbStatusChange } from "react-icons/tb";

export function TempTip() {
  return (
    <div className="h-full w-full flex items-center justify-between">
      <section className="flex items-center gap-2 h-full">
        <div className="py-1 px-2 bg-green-500 h-full flex items-center">
          <TbStatusChange className="size-5 " />
        </div>
        <div className="py-1 px-2 h-full flex items-center hover:bg-blue-300">
          项目：hello world
        </div>
        <div className="flex items-center h-full gap-1 py-1 px-2 hover:bg-blue-300">
          <IoIosCloseCircleOutline className="size-5" />
          <p>0</p>
        </div>
        <div className="flex h-full items-center gap-1 py-1 px-2 hover:bg-blue-300">
          <IoWarningOutline className="size-5" />
          <p>0</p>
        </div>
        <div className="px-2 py-1 flex items-center h-full hover:bg-blue-300 ">
          提示：Alt + Shift + 拖动 -- 旋转地图
        </div>
      </section>
      <section className="flex h-full items-center gap-2">
        <div className="py-1 h-full px-2 flex items-center hover:bg-blue-300">
          正在执行的操作： 无
        </div>
        <div className="py-1 h-full px-2 flex items-center hover:bg-blue-300">
          <IoNotificationsOutline className="size-5" />
        </div>
      </section>
    </div>
  );
}
