import { Suspense } from "react";
import Indicators, {
  IndicatorsLoading,
} from "./components/indicators/indicators";
import Trigger from "./components/trigger/trigger";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-8 items-stretch min-h-screen p-8">
      <div className="p-2 bg-slate-600">
        <Suspense fallback={<IndicatorsLoading />}>
          <Indicators />
        </Suspense>
      </div>
      <div className="p-2 bg-slate-600">
        <Trigger />
      </div>
    </main>
  );
}
