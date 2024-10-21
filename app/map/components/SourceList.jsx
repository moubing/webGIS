import Image from "next/image";

// const list = ['XYZ', 'GeoJSON', 'GeoTIFF', 'KML', 'WFS', 'MVT']
const list = [
  {
    sourceName: "XYZ",
    iconSrc: "/icons/xyz.png",
  },
  {
    sourceName: "GeoJSON",
    iconSrc: "/icons/geojson.png",
  },
  {
    sourceName: "GeoTIFF",
    iconSrc: "/icons/geotiff.png",
  },
  {
    sourceName: "KML",
    iconSrc: "/icons/kml.png",
  },
  {
    sourceName: "WFS",
    iconSrc: "/icons/wfs.png",
  },
  {
    sourceName: "MVT",
    iconSrc: "/icons/mvt.png",
  },
];

// 真是脑瘫了， onClick={handleSelect(item.sourceName)}
// 怎么能直接调用呢？？

export function SourceList({ handleSelect }) {
  return (
    <div className="grid grid-cols-5 gap-3 p-2">
      {list.map((item) => (
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
