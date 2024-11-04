"use client";

import { useState } from "react";
import {
  TransitionPanel,
  SelectedFeatureTab,
} from "../consoleTab/SelectedFeatureTab";
import {
  SetTabListContext,
  SetToolTabListContext,
  TabListContext,
  ToolTabListContext,
} from "../../ctx/tabListContext";
import { DefaultToolPanel, DefaultToolTab } from "../toolTab/DefaultToolTab";

export function TabListProvider({ children }) {
  const [tabList, setTabList] = useState([
    {
      Tab: SelectedFeatureTab,
      Panel: TransitionPanel,
      data: [],
    },
  ]);
  const [toolTabList, setToolTabList] = useState([
    { Tab: DefaultToolTab, Panel: DefaultToolPanel, payload: null },
  ]);
  return (
    <TabListContext.Provider value={tabList}>
      <SetTabListContext.Provider value={setTabList}>
        <ToolTabListContext.Provider value={toolTabList}>
          <SetToolTabListContext.Provider value={setToolTabList}>
            {children}
          </SetToolTabListContext.Provider>
        </ToolTabListContext.Provider>
      </SetTabListContext.Provider>
    </TabListContext.Provider>
  );
}
