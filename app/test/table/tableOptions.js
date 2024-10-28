import * as echarts from "echarts/core";
import {
  BarChart,
  LineChart,
  PieChart,
  HeatmapChart,
  GaugeChart,
} from "echarts/charts";
import {
  TitleComponent,
  TimelineComponent,
  TooltipComponent,
  GridComponent,
  GraphicComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  DataZoomComponent,
  LegendComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { getAccumulateRandomData } from "../lib/utils";

// 注册必须的组件
echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  DataZoomComponent,
  TimelineComponent,
  BarChart,
  LineChart,
  PieChart,
  HeatmapChart,
  GaugeChart,
  LabelLayout,
  GraphicComponent,
  UniversalTransition,
  CanvasRenderer,
]);

export const TempLineOption = {
  title: {
    text: "combination",
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
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    right: "35%",
    left: "15%",
  },
  legend: {
    data: ["Evaporation", "Precipitation", "Temperature"],
    bottom: 10,
    left: "center",
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Evaporation",
      position: "right",
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ec4899",
        },
      },
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "Precipitation",
      position: "right",
      alignTicks: true,
      offset: 80,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#06d6d4",
        },
      },
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "Temperature",
      position: "left",
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#14b9a6",
        },
      },
      axisLabel: {
        formatter: "{value} °C",
      },
    },
  ],
  series: [
    {
      name: "Evaporation",
      type: "bar",
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
      itemStyle: {
        color: "#ec4899",
      },
    },
    {
      name: "Precipitation",
      type: "bar",
      yAxisIndex: 1,
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
      itemStyle: {
        color: "#06b6d4",
      },
    },
    {
      name: "Temperature",
      type: "line",
      yAxisIndex: 2,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      itemStyle: {
        color: "#14b8a6",
      },
    },
  ],
};

export const TempBarOption = {
  timeline: {
    playInterval: 3000,
    data: [
      "2001/1/1",
      "2002/1/1",
      "2003/1/1",
      "2004/1/1",
      "2005/1/1",
      "2006/1/1",
      "2007/1/1",
    ],
    bottom: 5,
    left: 14,
    right: 14,
    symbol: "diamond",
    symbolSize: 20,
    autoPlay: true,
    lineStyle: { color: "#ec4899", width: 2 },
    itemStyle: { color: "#06b6d4" },
    checkpointStyle: {
      color: "#ec4899",
      symbol: "diamond",
      symbolSize: 20,
      borderWidth: 0,
      shadowBlur: 5,
      shadowColor: "#ec4899",
    },
    progress: {
      lineStyle: { color: "#f97316" },
      itemStyle: { color: "#eab308" },
    },
  },
  grid: {},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      shadowStyle: { shadowBlur: 1, shadowColor: "#06b6d4" },
    },
  },
  xAxis: {
    data: (function () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push("A" + i);
      }
      return data;
    })(),
  },
  yAxis: {},
  series: [
    { name: "randomData1", type: "bar", itemStyle: { color: "#ec4899" } },
    { name: "randomData2", type: "bar", itemStyle: { color: "#06b6d4" } },
    { type: "bar", name: "randomData3", itemStyle: { color: "#f97316" } },
  ],
  options: [
    {
      title: {
        text: "time line 2001 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        {
          data: getAccumulateRandomData(0, 10, [-20, 30]),
        },
        { data: getAccumulateRandomData(0, 10, [0, 30]) },
        { data: getAccumulateRandomData(0, 10, [0, 40]) },
      ],
    },
    {
      title: {
        text: "time line 2002 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        { data: getAccumulateRandomData(0, 10, [0, 12]) },
        {
          data: getAccumulateRandomData(0, 10, [-10, 10]),
        },
        { data: getAccumulateRandomData(0, 10, [0, 10]) },
      ],
    },
    {
      title: {
        text: "time line 2003 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        { data: getAccumulateRandomData(0, 10, [0, 10]) },
        {
          data: getAccumulateRandomData(0, 10, [-20, 20]),
        },
        { data: getAccumulateRandomData(0, 10, [0, 12]) },
      ],
    },
    {
      title: {
        text: "time line 2004 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        { data: getAccumulateRandomData(0, 10, [-5, 30]) },
        { data: getAccumulateRandomData(0, 10, [0, 10]) },
        {
          data: getAccumulateRandomData(0, 10, [-10, 20]),
        },
      ],
    },
    {
      title: {
        text: "time line 2005 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        {
          data: getAccumulateRandomData(0, 10, [-14, 20]),
        },
        { data: getAccumulateRandomData(0, 10, [0, 50]) },
        { data: getAccumulateRandomData(0, 10, [-1, 10]) },
      ],
    },
    {
      title: {
        text: "time line 2006 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        {
          data: getAccumulateRandomData(0, 10, [-11, 20]),
        },
        { data: getAccumulateRandomData(0, 10, [-9, 18]) },
        { data: getAccumulateRandomData(0, 10, [-2, 26]) },
      ],
    },
    {
      title: {
        text: "time line 2007 year",
        left: 10,
        top: 5,
        show: true,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "#ec4899",
        },
      },
      series: [
        {
          data: getAccumulateRandomData(0, 10, [-10, 20]),
        },
        { data: getAccumulateRandomData(0, 10, [10, 40]) },
        { data: getAccumulateRandomData(0, 10, [-5, 10]) },
      ],
    },
  ],
};
