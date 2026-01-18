import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Files, Search, GitGraph, Box, ChevronRight, ChevronDown, 
  FileCode, FileText, Settings, User 
} from 'lucide-react';

// --- Icons ---
const ReactIcon = () => <span className="text-[#61dafb] text-xs font-bold px-1">TSX</span>;
const JsonIcon = () => <span className="text-[#f1c40f] text-xs font-bold px-1">{}</span>;
const MdIcon = () => <span className="text-[#3b8eed] text-xs font-bold px-1">MD</span>;

// --- Sidebar Component ---
const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  const [isBlogOpen, setIsBlogOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="w-60 bg-vscode-sidebar border-r border-vscode-border flex flex-col text-sm select-none">
      <div className="px-4 py-2 text-vscode-text-dim text-xs font-bold uppercase tracking-wider">Explorer</div>
      
      {/* Project Root */}
      <div className="flex-1 overflow-y-auto">
        <div 
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-vscode-text font-bold"
          onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
        >
          {isPortfolioOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <span className="ml-1 uppercase text-xs">WANDRI_PORTFOLIO</span>
        </div>

        {isPortfolioOpen && (
          <div className="flex flex-col">
            <NavLink 
              to="/" 
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <MdIcon />
              <span className="ml-1">README.md</span>
            </NavLink>

            <NavLink 
              to="/projects" 
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <JsonIcon />
              <span className="ml-1">projects.json</span>
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <ReactIcon />
              <span className="ml-1">About.tsx</span>
            </NavLink>
             <NavLink 
              to="/contact" 
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <FileCode size={14} className="text-vscode-func mr-1" />
              <span className="ml-1">contact.css</span>
            </NavLink>
          </div>
        )}

        {/* Blog Folder */}
        <div 
            className="flex items-center px-4 py-1 cursor-pointer hover:bg-[#2a2d2e] text-vscode-text mt-1"
            onClick={() => setIsBlogOpen(!isBlogOpen)}
        >
             {isBlogOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
             <span className="ml-1 text-vscode-func flex items-center gap-1">
                src <span className="text-vscode-text">/</span> blog
             </span>
        </div>
        
        {isBlogOpen && (
             <div className="flex flex-col ml-4 border-l border-vscode-border">
                 <NavLink 
                  to="/blog" 
                  end
                  className={({ isActive }) => `flex items-center pl-4 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
                >
                  <FileText size={14} className="text-vscode-text-dim mr-1" />
                  <span className="ml-1 italic">index.ts</span>
                </NavLink>
                {/* We'll link individual posts from the index page for simplicity, or we could fetch them here if we passed data */}
             </div>
        )}
      </div>
    </div>
  );
};

// --- Activity Bar ---
const ActivityBar = () => {
  return (
    <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 text-vscode-text-dim justify-between">
      <div className="flex flex-col gap-4">
        <div className="p-2 border-l-2 border-white text-white cursor-pointer"><Files size={24} /></div>
        <div className="p-2 border-l-2 border-transparent hover:text-white cursor-pointer"><Search size={24} /></div>
        <div className="p-2 border-l-2 border-transparent hover:text-white cursor-pointer"><GitGraph size={24} /></div>
        <div className="p-2 border-l-2 border-transparent hover:text-white cursor-pointer"><Box size={24} /></div>
      </div>
      <div className="flex flex-col gap-4 mb-2">
        <div className="p-2 hover:text-white cursor-pointer"><User size={24} /></div>
        <div className="p-2 hover:text-white cursor-pointer"><Settings size={24} /></div>
      </div>
    </div>
  );
};

// --- Tab Bar ---
const TabBar = () => {
    const location = useLocation();
    
    const getFileName = (path: string) => {
        if (path === '/') return 'README.md';
        if (path === '/projects') return 'projects.json';
        if (path === '/about') return 'About.tsx';
        if (path === '/contact') return 'contact.css';
        if (path.startsWith('/blog')) return 'blog.md';
        return 'file';
    }

    const getIcon = (path: string) => {
         if (path === '/') return <MdIcon />;
         if (path === '/projects') return <JsonIcon />;
         if (path === '/about') return <ReactIcon />;
         if (path === '/contact') return <FileCode size={14} className="text-vscode-func" />;
         return <FileText size={14} className="text-vscode-text-dim" />;
    }

    const fileName = getFileName(location.pathname);

    return (
        <div className="flex bg-vscode-sidebar border-b border-vscode-border overflow-x-auto h-9">
            <div className="flex items-center px-3 py-2 bg-vscode-bg border-t border-vscode-accent min-w-fit pr-4 text-sm text-vscode-text gap-2">
                {getIcon(location.pathname)}
                <span>{fileName}</span>
                <span className="ml-2 hover:bg-vscode-text-dim/20 rounded-sm p-0.5 cursor-pointer">×</span>
            </div>
        </div>
    );
};

// --- Status Bar ---
const StatusBar = () => {
    return (
        <div className="h-6 bg-vscode-status flex items-center px-2 text-white text-xs select-none justify-between z-50">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
                    <GitGraph size={12} />
                    <span>main*</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
                    <span className="rounded-full w-3 h-3 border border-white flex items-center justify-center text-[8px]">0</span>
                    <span>0</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                 <span className="hover:bg-white/20 px-1 rounded cursor-pointer">Ln 12, Col 4</span>
                 <span className="hover:bg-white/20 px-1 rounded cursor-pointer">UTF-8</span>
                 <span className="hover:bg-white/20 px-1 rounded cursor-pointer">TypeScript React</span>
                 <span className="hover:bg-white/20 px-1 rounded cursor-pointer">Prettier</span>
            </div>
        </div>
    );
}

// --- Main Layout ---
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-screen bg-vscode-bg text-vscode-text overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar isOpen={true} />
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-vscode-bg min-w-0">
            <TabBar />
            
            {/* Breadcrumbs (Optional, skipping for minimal look) */}
            
            {/* Content Scroller */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth">
                {/* Line Numbers Decorator (Fake) */}
                <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-vscode-bg flex flex-col items-end pr-3 pt-4 text-vscode-text-dim/50 font-mono text-sm select-none pointer-events-none">
                    {Array.from({length: 50}).map((_, i) => <div key={i}>{i+1}</div>)}
                </div>

                <div className="pl-12 pt-4 pb-12 pr-4 min-h-full">
                    {children}
                </div>
            </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default Layout;
