import { RiPlayListAddFill } from "react-icons/ri";

export function AddLayerBtn({ handleOpen }) {
  return (
    <button onClick={handleOpen} className="p-1 bg-white shadow-lg rounded-md">
      <RiPlayListAddFill className="size-6 text-sky-500 hover:text-pink-500 hover:scale-105" />
    </button>
  );
}
