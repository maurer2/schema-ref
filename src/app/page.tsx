import { Suspense } from 'react';

import Indicators, { IndicatorsLoading } from '@/app/components/indicators/indicators';

import Trigger from './components/trigger/trigger';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 items-stretch gap-8 p-8">
      <div className="bg-slate-600 p-2">
        <Suspense fallback={<IndicatorsLoading />}>
          <Indicators />
        </Suspense>
      </div>
      <div className="bg-slate-600 p-2">
        <Trigger />
      </div>
    </main>
  );
}
