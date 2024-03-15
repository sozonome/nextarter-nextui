'use client';

import '@theme-toggles/react/css/Around.css';
import { Around } from '@theme-toggles/react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Around
      toggle={toggle}
      toggled={theme === 'light'}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
}
