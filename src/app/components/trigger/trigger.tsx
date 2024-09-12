'use client';

import React, { type MouseEvent } from 'react';

import { useIndicatorContext } from '@/app/context/indicator-context/indicator-context';

function Trigger() {
  const { indicatorRef } = useIndicatorContext();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    indicatorRef.current?.scrollIntoView();
  }

  return (
    <button type="button" className="bg-yellow-700 p-2 sticky top-4" onClick={handleClick}>
      Scroll into view
    </button>
  );
}

export default Trigger;
