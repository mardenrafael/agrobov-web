import React, { useContext, useState } from "react";
import { Ox } from "../api/Types/Ox";

interface OxListContextData {
  oxList: Ox[];
  setOxArr(oxArr: Ox[]): void;
}

export const OxListContext = React.createContext<OxListContextData>(
  {} as OxListContextData
);

export const OxListProvider = ({ children }: any) => {
  const [oxList, setOxList] = useState<Ox[]>([]);

  function setOxArr(oxArr: Ox[]) {
    setOxList(oxArr);
  }

  return (
    <OxListContext.Provider value={{ oxList, setOxArr }}>
      {children}
    </OxListContext.Provider>
  );
};

export function useOxList() {
  return useContext(OxListContext);
}
