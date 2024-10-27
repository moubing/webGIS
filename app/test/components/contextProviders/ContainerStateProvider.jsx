"use client";

import { useState } from "react";
import {
  LogConCtx,
  SetLogConCtx,
  SetTipConCtx,
  SetToolConCtx,
  TipConCtx,
  ToolConCtx,
} from "../../ctx/switchContainer";

export function ContainerStateProvider({ children, storageStates }) {
  const [logConState, setLogContate] = useState(storageStates[0]);
  const [toolConState, setToolConState] = useState(storageStates[1]);
  const [tipConState, setTipConState] = useState(storageStates[2]);
  return (
    <LogConCtx.Provider value={logConState}>
      <SetLogConCtx.Provider value={setLogContate}>
        <ToolConCtx.Provider value={toolConState}>
          <SetToolConCtx.Provider value={setToolConState}>
            <TipConCtx.Provider value={tipConState}>
              <SetTipConCtx.Provider value={setTipConState}>
                {children}
              </SetTipConCtx.Provider>
            </TipConCtx.Provider>
          </SetToolConCtx.Provider>
        </ToolConCtx.Provider>
      </SetLogConCtx.Provider>
    </LogConCtx.Provider>
  );
}
