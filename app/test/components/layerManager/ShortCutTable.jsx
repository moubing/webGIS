"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useState } from "react";
import { BiLayerPlus } from "react-icons/bi";
import {
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from "../consoleTab/TableComponents";
import { strokeColor } from "../../variables/style";
import { TablePagination } from "../consoleTab/TablePagination";
import { TfiMoreAlt } from "react-icons/tfi";
import { SetLayerListContext } from "../../ctx/LayerContext";
import VectorLayer from "ol/layer/Vector";
import { Vector } from "ol/source";
import { MapContext } from "../../ctx/MapContext";
import { GeoJSON } from "ol/format";
import { GeoJSONTag, ServerLayerTag, VectorTag } from "../../variables/tags";
import { createDefaultStyle } from "../../lib/createStyle";
import { geoJsonDataBaseUrl } from "../../variables/dataBaseUrl";

const columnHelper = createColumnHelper();

export function ShortCutTable({ data }) {
  const map = useContext(MapContext);
  const setLayerList = useContext(SetLayerListContext);
  const [columns] = useState([
    columnHelper.accessor("name", {
      cell: (props) => <>{props.getValue()}</>,
      size: 80,
    }),
    columnHelper.accessor("level", {
      cell: (props) => <>{props.getValue()}</>,
      size: 80,
    }),
    {
      id: "addToMap",
      header: "Add",
      size: 80,
      cell: ({ row, column }) => (
        <div style={{ width: column.getSize() }}>
          <button
            className="flex items-center gap-1 px-1 bg-white rounded-md shadow-md"
            onClick={() => {
              const layerNameArr = map.getAllLayers().map((layer) => {
                return layer.get("layerName");
              });

              if (layerNameArr.includes(row.original.name)) {
                return;
              }
              const newSource = new Vector({
                url: geoJsonDataBaseUrl + row.original.filename,
                format: new GeoJSON(),
              });

              const newLayer = new VectorLayer({
                layerName: row.original.name,
                tags: [VectorTag, GeoJSONTag],
                style: createDefaultStyle(),
                layerType: ServerLayerTag,

                source: newSource,
              });
              newSource.once("change", () => {
                newLayer.set(
                  "geometryType",
                  newSource.getFeatures()[0].getGeometry().getType()
                );
                if (newSource.getState() === "ready") {
                  map.getView().fit(newLayer.getSource().getExtent());
                }
              });
              newLayer.setZIndex(map.getAllLayers().length + 1);
              map.addLayer(newLayer);
              setLayerList((pre) => [newLayer, ...pre]);
            }}
          >
            <BiLayerPlus className="size-4" />
            添加
          </button>
        </div>
      ),
    },
  ]);
  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: { pageSize: 30 },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div className="flex-grow-0 flex items-center justify-between p-2 border-b-2 border-slate-400">
        <div>添加快捷图层</div>
        <button className=" hover:bg-gray-50 p-1 rounded-md">
          <TfiMoreAlt className="size-4" />
        </button>
      </div>
      <div className=" p-2 flex gap-2">
        <input
          type="text"
          value={table.getColumn("name").getFilterValue() ?? ""}
          onChange={(e) =>
            table.getColumn("name").setFilterValue(e.target.value)
          }
          placeholder="filter..."
          className="w-36 shadow rounded focus:outline-none pl-2"
        />
        <select
          onChange={(e) =>
            table.getColumn("level").setFilterValue(e.target.value)
          }
          value={table.getColumn("level").getFilterValue()?.toString()}
          className="shadow rounded focus:outline-none"
        >
          <option value={""}>All</option>
          <option value={"country"}>Country</option>
          <option value={"province"}>Province</option>
          <option value={"city"}>City</option>
        </select>
      </div>
      <div className="relative overflow-auto flex-grow">
        <TablePagination
          table={table}
          isShowAdvance={false}
          isShowGoToPage={false}
          isShowRowCount={false}
          isShowPageSize={false}
        />
        <div className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeaderRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <TableHeaderCell
                  key={header.id}
                  width={header.column.getSize()}
                  color={strokeColor[index % 7]}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  key={cell.id}
                  width={cell.column.getSize()}
                  color={strokeColor[index % 7]}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </div>
      </div>
    </>
  );
}
