import React from "react";
import Indicator from "../indicator/indicator";

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

  return <Indicator />;
};

export default Indicators;
export { IndicatorsLoading };
