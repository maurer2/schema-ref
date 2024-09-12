"use client";

import React, { type MouseEvent } from "react";
import clsx from "clsx";

import { useIndicatorContext } from "@/app/context/indicator-context/indicator-context";

const Trigger = function () {
  const { indicatorRef } = useIndicatorContext();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(indicatorRef.current?.focusComponent());
  }

  return (
    <button
      type="button"
      className={clsx("p-2 bg-yellow-700")}
      onClick={handleClick}
    >
      Trigger
    </button>
  );
};

export default Trigger;
