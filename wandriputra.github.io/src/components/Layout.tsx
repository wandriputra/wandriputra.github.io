import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-sky-500/30">
      <Navbar />
      <main className="container mx-auto px-4 pb-24 sm:pt-28 pt-8 max-w-5xl">
        {children}
      </main>
      <footer className="py-8 text-center text-slate-500 text-sm glass-panel mx-auto max-w-xl rounded-t-xl mb-24 sm:mb-0 sm:rounded-xl sm:mx-auto sm:max-w-5xl backdrop-blur-none bg-transparent border-none">
        <p>© {new Date().getFullYear()} Wandri Putra. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Layout;
