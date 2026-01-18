import React from 'react';
import Navbar from './Navbar';
import { Github, Linkedin, Mail } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-5xl">
        {children}
      </main>
      
      <footer className="border-t border-zinc-800 bg-zinc-900/30">
          <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-zinc-500 text-sm">
                  © {new Date().getFullYear()} Wandri Putra. All rights reserved.
              </div>
              <div className="flex gap-4">
                  <a href="https://github.com/wandriputra" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Github size={20}/></a>
                  <a href="https://linkedin.com/in/wandriputra" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
                  <a href="mailto:hello@wandriputra.dev" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20}/></a>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default Layout;