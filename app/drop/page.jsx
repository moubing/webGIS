import { Table } from "./Table";
// import fs from "fs";
// import path from "path";

export default function DropPage() {
  // const filePath = path.join(
  //   process.cwd(),
  //   "app",
  //   "test",
  //   "data",
  //   "geoJsonData.json"
  // );
  // const fileContent = fs.readFileSync(filePath, "utf8");
  // const data = JSON.parse(fileContent);
  // console.log(data);
  return (
    <div className=" w-screen h-screen select-none p-12 ">
      <div className="w-full h-full p-2 bg-gray-200 rounded-lg">
        <Table />
      </div>
    </div>
  );
}
