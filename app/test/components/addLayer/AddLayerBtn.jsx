import { RiPlayListAddFill } from "react-icons/ri";

export function AddLayerBtn({ handleOpen }) {
  return (
    <button onClick={handleOpen} className="">
      <RiPlayListAddFill className="size-6 text-sky-500 hover:text-pink-500 " />
    </button>
  );
}
