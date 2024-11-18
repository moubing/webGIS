"use client";

import { TabPanel } from "@headlessui/react";
import { CustomTab } from "../consoleTab/CustomTab";
import { ListBoxMB } from "@/app/components/ListBoxMB";
import { Panle } from "@/app/components/Panle";

import { useState } from "react";
import {
  axisOptionList,
  chartTypeOptionList,
  tooltipOptionList,
} from "../../variables/chartsOptionList";
import EChartsReact from "echarts-for-react";

export function ChartsTab() {
  return <CustomTab>图表</CustomTab>;
}

export function ChartsPanel({ payload }) {
  const [title, setTitle] = useState("unnamed");
  const [fields] = useState(() => {
    const properties = payload[0].getProperties();
    return Object.entries(properties).map((item) => item[0]);
  });
  const [xAxisData, setXAxisData] = useState(fields[2]);
  const [yAxis, setYAxis] = useState(axisOptionList[0]);
  const [tooltip, setTooltip] = useState(tooltipOptionList[0]);
  const [isDatazoom, setIsDatazoom] = useState(true);
  const [isToolbox, setIsToolbox] = useState(true);
  const [isLegend, setIsLegend] = useState(true);

  const [field1, setField1] = useState({
    field: fields[10],
    type: chartTypeOptionList[0],
  });
  const [field2, setField2] = useState({
    field: fields[11],
    type: chartTypeOptionList[0],
  });
  const [field3, setField3] = useState({
    field: fields[12],
    type: chartTypeOptionList[0],
  });

  function createChartOption() {
    return {
      title: {
        text: title,
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      tooltip: {
        trigger: tooltip,
        axisPointer: {
          type: "cross",
        },
      },
      grid: {},
      legend: {
        data: [field1.field, field2.field, field3.field],
        top: 10,
        left: "center",
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          // prettier-ignore
          data: (() => {

            return payload.map((feature) => 
               feature.getProperties()[xAxisData]
            )
 
          })(),
        },
      ],
      yAxis: [
        {
          type: yAxis,
        },
      ],
      series: [
        {
          name: field1.field,
          type: field1.type,
          data: (() => {
            return payload.map(
              (feature) => feature.getProperties()[field1.field]
            );
          })(),
          itemStyle: {
            color: "#ec4899",
          },
        },
        {
          name: field2.field,
          type: field2.type,
          data: (() => {
            return payload.map(
              (feature) => feature.getProperties()[field2.field]
            );
          })(),
          itemStyle: {
            color: "#06b6d4",
          },
        },
        {
          name: field3.field,
          type: field3.type,
          data: (() => {
            return payload.map(
              (feature) => feature.getProperties()[field3.field]
            );
          })(),
          itemStyle: {
            color: "#14b8a6",
          },
        },
      ],
    };
  }

  return (
    <TabPanel className="relative overflow-auto flex-grow bg-gray-200">
      <div className="p-2 space-y-2">
        <section>图表配置</section>
        <section className="flex items-center gap-2">
          <div>标题</div>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </section>
        <ListBoxMB
          state={xAxisData}
          title={"x轴数据字段"}
          updateState={setXAxisData}
          list={fields}
        />
        <ListBoxMB
          state={yAxis}
          title={"y轴显示类型"}
          updateState={setYAxis}
          list={axisOptionList}
        />
        <ListBoxMB
          state={tooltip}
          title={"提示框显示"}
          updateState={setTooltip}
          list={tooltipOptionList}
        />
        <section className="flex items-center gap-2">
          <div>datazoom</div>
          <input
            type="checkbox"
            checked={isDatazoom}
            onChange={(e) => {
              setIsDatazoom(e.target.checked);
            }}
          />
        </section>
        <section className="flex items-center gap-2">
          <div>toolbox</div>
          <input
            type="checkbox"
            checked={isToolbox}
            onChange={(e) => {
              setIsToolbox(e.target.checked);
            }}
          />
        </section>
        <section className="flex items-center gap-2">
          <div>legend</div>
          <input
            type="checkbox"
            checked={isLegend}
            onChange={(e) => {
              setIsLegend(e.target.checked);
            }}
          />
        </section>
        <section>数据配置</section>
        <section className="space-y-2">
          <div>字段1</div>
          <div className="space-y-2">
            <ListBoxMB
              list={fields}
              state={field1.field}
              updateState={(value) => {
                setField1((pre) => {
                  return {
                    ...pre,
                    field: value,
                  };
                });
              }}
            />
            <ListBoxMB
              list={chartTypeOptionList}
              state={field1.type}
              updateState={(value) => {
                setField1((pre) => {
                  return {
                    ...pre,
                    type: value,
                  };
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <div>字段2</div>

            <ListBoxMB
              list={fields}
              state={field2.field}
              updateState={(value) => {
                setField2((pre) => {
                  return {
                    ...pre,
                    field: value,
                  };
                });
              }}
            />
            <ListBoxMB
              list={chartTypeOptionList}
              state={field2.type}
              updateState={(value) => {
                setField2((pre) => {
                  return {
                    ...pre,
                    type: value,
                  };
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <div>字段3</div>

            <ListBoxMB
              list={fields}
              state={field3.field}
              updateState={(value) => {
                setField3((pre) => {
                  return {
                    ...pre,
                    field: value,
                  };
                });
              }}
            />
            <ListBoxMB
              list={chartTypeOptionList}
              state={field3.type}
              updateState={(value) => {
                setField3((pre) => {
                  return {
                    ...pre,
                    type: value,
                  };
                });
              }}
            />
          </div>
        </section>
        <ChartsBtn createChartOption={createChartOption} />
      </div>
    </TabPanel>
  );
}

function ChartsBtn({ createChartOption }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className=" text-sky-500 w-fit bg-white px-2 py-1 rounded-md hover:text-pink-500 hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        确定
      </button>
      {isOpen && (
        <Panle
          handleClose={() => setIsOpen(false)}
          isOpen={isOpen}
          isblur={true}
        >
          <EChartsReact
            className="rounded-xl bg-white/60 backdrop-blur w-full h-full"
            option={createChartOption()}
            style={{ width: "600px", height: "500px" }}
          />
        </Panle>
      )}
    </div>
  );
}
