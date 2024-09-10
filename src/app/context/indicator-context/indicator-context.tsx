"use client";

import {
  createContext,
  useRef,
  useMemo,
  useContext,
  type PropsWithChildren,
  type RefObject,
} from "react";

type IndicatorContext = {
  indicatorRef: {
    focusComponent: () => void;
    blurComponent: () => void;
    test?: () => void;
  }
};

const IndicatorContext = createContext<IndicatorContext | null>(null);

const useIndicatorContext = () => {
  const context = useContext(IndicatorContext);

  if (!context) {
    throw new Error("Indicator context is missing");
  }

  return context;
};

const IndicatorContextProvider = ({ children }: PropsWithChildren) => {
  const indicatorRef = useRef<IndicatorContext['indicatorRef']>(null);

  const value = useMemo(
    () => ({
      indicatorRef,
    }),
    []
  );

  return (
    // wrong typings
    <IndicatorContext.Provider value={value}>
      {children}
    </IndicatorContext.Provider>
  );
};

export default IndicatorContextProvider;
export { useIndicatorContext };
