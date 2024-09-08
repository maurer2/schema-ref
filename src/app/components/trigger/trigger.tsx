"use client";

import React, { type MouseEvent } from "react";
import clsx from "clsx";

const Trigger = function () {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(event);
  }

  return (
    <button type="button" className={clsx("p-0")} onClick={handleClick}>
      Trigger
    </button>
  );
};

export default Trigger;
