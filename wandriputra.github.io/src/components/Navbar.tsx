import { NavLink } from 'react-router-dom';
import { Home, BookOpen, User, Briefcase } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: "/", icon: <Home size={18} />, label: "Home" },
    { to: "/#about", icon: <User size={18} />, label: "About" },
    { to: "/#projects", icon: <Briefcase size={18} />, label: "Work" },
    { to: "/#blog", icon: <BookOpen size={18} />, label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold">W</div>
            <span>Wandri Putra</span>
        </div>

        <nav className="flex gap-1 bg-zinc-900/50 p-1 rounded-full border border-zinc-800/50">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => 
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isActive && item.to === '/' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`
              }
            >
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.icon}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;