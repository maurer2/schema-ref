'use client';

import clsx from 'clsx';
import React, { type ReactNode, forwardRef, useImperativeHandle, useRef, useState } from 'react';

type RefProp = {
  focusComponent: () => void;
  blurComponent: () => void;
};
type IndicatorProps = {
  children?: ReactNode;
};

const Indicator = forwardRef<RefProp, IndicatorProps>((_, ref) => {
  const [hasFocus, setHasFocus] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusComponent() {
      inputElement.current?.focus();
      setHasFocus(true);
    },
    blurComponent() {
      inputElement.current?.blur();
      setHasFocus(false);
    },
  }));

  return (
    <input
      type="text"
      ref={inputElement}
      onBlur={() => {
        setHasFocus(false);
      }}
      // onFocus={() => setHasFocus(true)}
      className={clsx('w-full bg-black p-2', {
        'outline-dotted outline-offset-2 outline-pink-500': hasFocus,
      })}
      value={`Indicator 1 - ${hasFocus ? 'has focus' : 'has no focus'}`}
      readOnly
    />
  );
});

export default Indicator;
