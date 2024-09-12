'use client';

import clsx from 'clsx';
import React, { type MouseEvent } from 'react';

import { useIndicatorContext } from '@/app/context/indicator-context/indicator-context';

function Trigger() {
  const { indicatorRef } = useIndicatorContext();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(indicatorRef.current?.focusComponent());
  }

  return (
    <button type="button" className={clsx('bg-yellow-700 p-2')} onClick={handleClick}>
      Trigger
    </button>
  );
}

export default Trigger;
