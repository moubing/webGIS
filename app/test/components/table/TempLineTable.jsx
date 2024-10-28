"use client";

import EChartsReact from "echarts-for-react";
import { TempBarOption, TempLineOption } from "../../table/tableOptions";

export function TempLineTable() {
  return (
    <EChartsReact
      className="rounded-xl bg-white/60 backdrop-blur w-full h-full"
      option={TempLineOption}
    />
  );
}

export function TempBarTable() {
  return (
    <EChartsReact
      className="rounded-xl bg-white/60 backdrop-blur h-full w-full"
      option={TempBarOption}
    />
  );
}
