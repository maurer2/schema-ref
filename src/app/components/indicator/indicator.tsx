/* eslint-disable react/display-name */
"use client";

import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
} from "react";
import clsx from "clsx";

type RefProp = {
  focusComponent: () => void;
  blurComponent: () => void;
};
type IndicatorProps = {
  children?: ReactNode;
};

const Indicator = forwardRef<RefProp, IndicatorProps>((_, ref) => {
  const [hasFocus, setHasFocus] = useState(false);

  useImperativeHandle(ref, () => ({
    focusComponent() {
      setHasFocus(true);
    },
    blurComponent() {
      setHasFocus(false);
    },
  }));

  return (
    <button
      type="button"
      className={clsx("p-0", {
        hasFocus: "outline-dotted outline-pink-500",
      })}
    >
      Indicator 1 - {hasFocus.toString()}
    </button>
  );
});

export default Indicator;
