'use client';

import {
  type PropsWithChildren,
  type RefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
} from 'react';

type IndicatorContextType = {
  indicatorRef: RefObject<{
    focusComponent: () => void;
    blurComponent: () => void;
  }>;
};

const IndicatorContext = createContext<IndicatorContextType | null>(null);

const useIndicatorContext = () => {
  const context = useContext(IndicatorContext);

  if (!context) {
    throw new Error('Indicator context is missing');
  }

  return context;
};

function IndicatorContextProvider({ children }: PropsWithChildren) {
  const indicatorRef = useRef<IndicatorContextType['indicatorRef']['current']>(null);

  const value = useMemo(
    () => ({
      indicatorRef,
    }),
    [],
  );

  return <IndicatorContext.Provider value={value}>{children}</IndicatorContext.Provider>;
}

export default IndicatorContextProvider;
export { useIndicatorContext };
