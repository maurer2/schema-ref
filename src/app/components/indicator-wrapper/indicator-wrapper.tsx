"use client";

import React from "react";

import { useIndicatorContext } from "@/app/context/indicator-context/indicator-context";
import Indicator from "../indicator/indicator";

function IndicatorWrapper()  {
  const { indicatorRef } = useIndicatorContext();

  return (
    <Indicator ref={indicatorRef} />
  );
};

export default IndicatorWrapper;
