import Image from "next/image";
import { supportSouceList } from "../../variables/supportSourceList";

export function SourceList({ handleSelect }) {
  return (
    <div className="grid grid-cols-5 gap-3 p-2">
      {supportSouceList.map((item) => (
        <button
          key={item.sourceName}
          className="p-4 rounded-md shadow-lg shadow-pink-200 outline outline-pink-300 hover:outline-sky-300 hover:shadow-sky-500 "
          onClick={() => {
            handleSelect(item.sourceName);
          }}
        >
          <Image
            alt={item.sourceName}
            src={item.iconSrc}
            height={145}
            width={114}
          />
        </button>
      ))}
    </div>
  );
}
