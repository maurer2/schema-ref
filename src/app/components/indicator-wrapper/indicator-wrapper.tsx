'use client';

import React from 'react';

import Indicator from '@/app/components/indicator/indicator';
import { useIndicatorContext } from '@/app/context/indicator-context/indicator-context';

function IndicatorWrapper() {
  const { indicatorRef } = useIndicatorContext();

  return <Indicator ref={indicatorRef} />;
}

export default IndicatorWrapper;
