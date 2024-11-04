"use client";

import { Table } from "./Table";

export default function DropPage() {
  return (
    <div className=" w-screen h-screen select-none p-12 ">
      <div className="w-full h-full p-2 bg-gray-200 rounded-lg">
        <Table />
      </div>
    </div>
  );
}
