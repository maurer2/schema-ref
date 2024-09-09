import React from "react";
import IndicatorWrapper from "../indicator-wrapper/indicator-wrapper";

const IndicatorsLoading = function () {
  return <h1 className="m-0">Loading Indicators</h1>;
};

const Indicators = async function () {
  const { promise, resolve } = Promise.withResolvers<boolean>(); // needs node22

  setTimeout(() => {
    resolve(true);
  }, 2500);

  const hasLoaded = await promise;
  console.log(hasLoaded);

  return <IndicatorWrapper />;
};

export default Indicators;
export { IndicatorsLoading };
