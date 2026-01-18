import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Files, GitGraph, ChevronRight, ChevronDown, 
  FileCode, FileText, X 
} from 'lucide-react';
// --- Icons ---
const ReactIcon = () => <span className="text-[#61dafb] text-xs font-bold px-1">TSX</span>;
const JsonIcon = () => <span className="text-[#f1c40f] text-xs font-bold px-1">{ }</span>;
const MdIcon = () => <span className="text-[#3b8eed] text-xs font-bold px-1">MD</span>;

// --- Sidebar Component ---
const Sidebar = ({ isOpen, closeSidebar }: { isOpen: boolean; closeSidebar: () => void }) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  const [isBlogOpen, setIsBlogOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="w-30 bg-vscode-sidebar border-r border-vscode-border flex flex-col text-sm select-none flex-shrink-0 z-40 h-full sm:static sm:h-auto shadow-xl sm:shadow-none">
      <div className="px-4 py-2 text-vscode-text-dim text-xs font-bold uppercase tracking-wider flex justify-between items-center h-9">
        <span>Explorer</span>
        {/* Mobile Close Button */}
        <button onClick={closeSidebar} className="sm:hidden text-vscode-text hover:text-white p-1">
          <X size={16} />
        </button>
      </div>

      {/* Project Root */}
      <div className="flex-1 overflow-y-auto">
        <div
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-vscode-text font-bold"
          onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
        >
          {isPortfolioOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <span className="ml-1 text-xs">@wandriputra</span>
        </div>

        {isPortfolioOpen && (
          <div className="flex flex-col">
            <NavLink
              to="/"
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <span className="ml-1">README.md</span>
            </NavLink>

            <NavLink
              to="/projects"
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <span className="ml-1">projects.json</span>
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <span className="ml-1">About.tsx</span>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center pl-6 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <span className="ml-1">contact.css</span>
            </NavLink>
          </div>
        )}

        {/* Blog Folder */}
        <div
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-vscode-text mt-1"
          onClick={() => setIsBlogOpen(!isBlogOpen)}
        >
          {isBlogOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <span className="ml-1 text-vscode-func flex items-center gap-1">
            @wandriputra <span className="text-vscode-text">/</span> blog
          </span>
        </div>

        {isBlogOpen && (
          <div className="flex flex-col ml-4 border-l border-vscode-border">
            <NavLink
              to="/blog"
              end
              onClick={closeSidebar}
              className={({ isActive }) => `flex items-center pl-4 pr-2 py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d] text-white' : 'text-vscode-text'}`}
            >
              <FileText size={14} className="text-vscode-text-dim mr-1" />
              <span className="ml-1 italic">index.ts</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Activity Bar ---
const ActivityBar = ({ toggleSidebar, isSidebarOpen }: { toggleSidebar: () => void, isSidebarOpen: boolean }) => {
  return (
    <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 text-vscode-text-dim justify-between flex-shrink-0 z-50">
      <div className="flex flex-col gap-4">
        <div 
            className={`p-2 border-l-2 cursor-pointer transition-colors ${isSidebarOpen ? 'border-white text-white' : 'border-transparent hover:text-white'}`}
            onClick={toggleSidebar}
        >
            <Files size={24} />
        </div>
        <div className="p-2 border-l-2 border-transparent hover:text-white cursor-pointer hidden sm:block"><GitGraph size={24} /></div>
      </div>
      <div className="flex flex-col gap-4 mb-2">
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
    <div className="flex bg-vscode-sidebar border-b border-vscode-border overflow-x-auto h-9 flex-shrink-0">
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
    <div className="h-6 bg-vscode-status flex items-center px-2 text-white text-xs select-none justify-between z-50 flex-shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer">
          <GitGraph size={12} />
          <span className="hidden sm:inline">main*</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="hover:bg-white/20 px-1 rounded cursor-pointer hidden sm:inline">UTF-8</span>
        <span className="hover:bg-white/20 px-1 rounded cursor-pointer">Full Stack Developer</span>
        <span className="hover:bg-white/20 px-1 rounded cursor-pointer hidden sm:inline">@wandriputra</span>
      </div>
    </div>
  );
}

// --- Main Layout ---
const Layout = ({ children }: { children: React.ReactNode }) => {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Responsive init
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Set initial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCloseSidebar = () => {
    // Only toggle/close on mobile, or explicit close action
    if (window.innerWidth < 640) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={`
        flex flex-col bg-vscode-bg text-vscode-text overflow-hidden
        w-screen h-screen rounded-none border-none shadow-none 
        sm:w-[1200px] sm:h-[800px] sm:max-w-[95vw] sm:max-h-[95vh] sm:rounded-xl sm:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:border sm:border-vscode-border/50
        transition-all duration-300 ease-in-out
    `}>
      {/* Title Bar */}
      <div className="h-9 bg-vscode-sidebar flex items-center px-4 justify-between border-b border-vscode-border/30 select-none flex-shrink-0">
        <div className="flex items-center gap-2 w-24">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-vscode-text-dim text-xs font-medium truncate px-2">
          <span className="ml-1 text-xs">@wandriputra | porfolio page</span>
        </div>
        <div className="w-24"></div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        <ActivityBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

        {/* Responsive Sidebar */}
        <div className={`
            flex absolute top-0 left-12 bottom-0 z-40 h-full
            transition-transform duration-300 ease-in-out bg-vscode-sidebar
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[200%]'}
            sm:relative sm:left-0 sm:transform-none sm:w-auto
            ${!isSidebarOpen && 'sm:hidden'} 
        `}>
          <Sidebar isOpen={true} closeSidebar={handleCloseSidebar} />
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black/60 z-30 sm:hidden ml-12 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-vscode-bg min-w-0 w-full relative z-0">
          <TabBar />

          {/* Content Scroller */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth">
            {/* Line Numbers Decorator (Fake) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-vscode-bg flex flex-col items-end pr-3 pt-4 text-vscode-text-dim/50 font-mono text-sm select-none pointer-events-none bg-vscode-bg z-0 hidden sm:flex">
              {Array.from({ length: 50 }).map((_, i) => <div key={i}>{i + 1}</div>)}
            </div>

            <div className="px-4 sm:pl-12 pt-4 pb-12 sm:pr-4 min-h-full">
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
