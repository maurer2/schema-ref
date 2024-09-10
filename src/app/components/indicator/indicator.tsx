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
  test?: () => void;
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
    test() {
      console.log("test");
    },
  }));

  return (
    <input
      type="text"
      className={clsx("bg-black p-2", {
        hasFocus: "outline-dotted outline-pink-500",
      })}
      value={`Indicator 1 - ${hasFocus.toString()}`}
      readOnly
    />
  );
});

export default Indicator;
