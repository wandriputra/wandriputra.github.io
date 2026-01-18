import { NavLink } from 'react-router-dom';
import { Home, User, Code, BookOpen, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: "/", icon: <Home size={20} />, label: "Home" },
    { to: "/#about", icon: <User size={20} />, label: "About" }, // We'll handle scroll separately
    { to: "/#projects", icon: <Code size={20} />, label: "Projects" },
    { to: "/#blog", icon: <BookOpen size={20} />, label: "Blog" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:top-6 sm:bottom-auto">
      <div className="flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => 
              `p-3 rounded-full transition-all duration-300 hover:bg-white/10 ${isActive && item.to === '/' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`
            }
            title={item.label}
          >
            {item.icon}
          </NavLink>
        ))}
        <div className="w-px h-6 bg-white/10 mx-2" />
        <div className="flex gap-2">
            <a href="https://github.com/wandriputra" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors"><Github size={18}/></a>
            <a href="https://linkedin.com/in/wandriputra" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors"><Linkedin size={18}/></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
