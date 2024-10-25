"use client";

import { useState } from "react";
import {
  LMConCtx,
  LogConCtx,
  MapConCtx,
  SetLMConCtx,
  SetLogConCtx,
  SetMapConCtx,
  SetTipConCtx,
  SetToolConCtx,
  TipConCtx,
  ToolConCtx,
} from "../../ctx/switchContainer";

export function ContainerStateProvider({ children }) {
  const [lMConState, setLMState] = useState(true);
  const [mapConState, setMapConState] = useState(true);
  const [logConState, setLogContate] = useState(true);
  const [toolConState, setToolConState] = useState(true);
  const [tipConState, setTipConState] = useState(true);
  return (
    <LMConCtx.Provider value={lMConState}>
      <SetLMConCtx.Provider value={setLMState}>
        <MapConCtx.Provider value={mapConState}>
          <SetMapConCtx.Provider value={setMapConState}>
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
          </SetMapConCtx.Provider>
        </MapConCtx.Provider>
      </SetLMConCtx.Provider>
    </LMConCtx.Provider>
  );
}
