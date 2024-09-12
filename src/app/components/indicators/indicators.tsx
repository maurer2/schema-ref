import React from 'react';

import IndicatorWrapper from '@/app/components/indicator-wrapper/indicator-wrapper';

function IndicatorsLoading() {
  return <h1 className="m-0">Loading Indicators</h1>;
}

async function Indicators() {
  const { promise, resolve } = Promise.withResolvers<boolean>(); // needs node22

  setTimeout(() => {
    resolve(true);
  }, 2500);

  const hasLoaded = await promise;
  console.log(hasLoaded);

  return <IndicatorWrapper />;
}

export default Indicators;
export { IndicatorsLoading };
