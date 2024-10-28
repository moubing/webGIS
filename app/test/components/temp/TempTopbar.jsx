import { BsThreeDots } from "react-icons/bs";

export function TempTopbar() {
  return (
    <div className=" p-2  flex-grow-0 flex items-center justify-between ">
      <div>图层管理器</div>
      <div>
        <BsThreeDots />
      </div>
    </div>
  );
}
