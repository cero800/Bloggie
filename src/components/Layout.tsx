import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Ambient background lines - minimal mono */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gray-200/[0.05] blur-[200px] dark:bg-gray-800/[0.1]" />
        <div className="absolute top-1/3 -left-60 h-[400px] w-[400px] rounded-full bg-gray-200/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gray-200/[0.02] blur-[120px]" />
      </div>

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}