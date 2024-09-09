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
  indicatorRef: RefObject<HTMLInputElement>;
};

const IndicatorContext = createContext<IndicatorContext | null>(null);

const useIndicatorContext = () => {
  const context = useContext(IndicatorContext);

  if (!context) {
    throw new Error("Indicator context is missing missing");
  }

  return context;
};

const IndicatorContextProvider = ({ children }: PropsWithChildren) => {
  const indicatorRef = useRef<HTMLInputElement>(null);

  const value = useMemo(
    () => ({
      indicatorRef,
    }),
    []
  );

  return (
    <IndicatorContext.Provider value={value}>
      {children}
    </IndicatorContext.Provider>
  );
};

export default IndicatorContextProvider;
export { useIndicatorContext };
