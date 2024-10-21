import { IconContainer2 } from "@/app/components/IconContainer";
import { TbRulerMeasure } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa6";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { RiRobot2Line } from "react-icons/ri";
import { InteractionMenu } from "./InteractionMenu";
import { ControlMenu } from "./ControlMenu";

export function ToolBar() {
  return (
    <div className="flex items-center gap-2  py-1  px-2 rounded-md">
      <InteractionMenu />
      <ControlMenu />
      <IconContainer2>
        <TbRulerMeasure />
      </IconContainer2>
      <IconContainer2>
        <FaChartArea />
      </IconContainer2>
      <IconContainer2>
        <PiMapPinSimpleAreaBold />
      </IconContainer2>
      <IconContainer2>
        <RiRobot2Line />
      </IconContainer2>
    </div>
  );
}
