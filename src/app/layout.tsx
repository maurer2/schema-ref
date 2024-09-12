import type { Metadata } from 'next';
import React, { type PropsWithChildren } from 'react';

import IndicatorContextProvider from '@/app/context/indicator-context/indicator-context';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <IndicatorContextProvider>{children}</IndicatorContextProvider>
      </body>
    </html>
  );
}
