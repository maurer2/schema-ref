import { Suspense } from 'react';

import Indicators, { IndicatorsLoading } from '@/app/components/indicators/indicators';

import Trigger from './components/trigger/trigger';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 items-stretch gap-8 p-8">
      <div className="bg-slate-600 p-4">
        <h1 className="text-xl mb-4">Lorem ipsum dolor sit amet</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <div className="[&>input]:scroll-mt-4 mb-4">
          <Suspense fallback={<IndicatorsLoading />}>
            <Indicators />
          </Suspense>
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula risus sem, nec
          maximus metus lobortis eget. Aenean faucibus molestie elit at volutpat. Suspendisse
          tincidunt mauris in ante sodales, imperdiet pharetra odio varius. Integer eleifend lorem
          sed justo vestibulum hendrerit. Quisque at eleifend ex, quis placerat ipsum. Cras pretium
          vehicula mi, eget condimentum massa commodo at. Mauris pretium luctus mi, sed tempus dolor
          condimentum eget. Nulla facilisi. Nulla euismod fringilla dui sed malesuada. Suspendisse
          efficitur odio ac leo pulvinar, sed tincidunt quam sodales. Sed porttitor aliquet sem ac
          vehicula. Fusce nisi velit, efficitur at purus at, placerat gravida ipsum.
        </p>
      </div>
      <div className="bg-slate-600 p-4">
        <Trigger />
      </div>
    </main>
  );
}
