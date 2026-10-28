'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('bloggie-theme') as 'light' | 'dark' | null;
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const next = saved ?? sys;
    setMode(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }, []);

  const toggle = () => {
    const next = mode === 'light' ? 'dark' : 'light';
    setMode(next);
    localStorage.setItem('bloggie-theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <button
      onClick={toggle}
      aria-label={mode === 'light' ? 'Cambiar a oscuro' : 'Cambiar a claro'}
      className="flex items-center gap-2 rounded-full border-2 border-[#e5e5e5] px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:border-[#171717] hover:bg-[#171717] hover:text-white dark:bg-transparent dark:border-[#333333] dark:hover:bg-[#fafafa] dark:hover:text-[#171717]"
    >
      <span className="text-[10px]">{mode === 'light' ? '☀️' : '🌙'}</span>
      <span className="text-[#737373] dark:text-[#a3a3a3]">{mode === 'light' ? 'Claro' : 'Oscuro'}</span>
    </button>
  );
}
