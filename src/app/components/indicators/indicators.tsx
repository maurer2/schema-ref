import React from 'react';

import IndicatorWrapper from '@/app/components/indicator-wrapper/indicator-wrapper';

function IndicatorsLoading() {
  return (
    <div className="bg-black p-2">
      <div className="animate-pulse">Loading Indicators</div>
    </div>
  );
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
