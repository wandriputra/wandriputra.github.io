import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, MapPin, Code2, Database, Terminal, Cpu } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { getBlogs, type BlogPost } from '../utils/markdown';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="space-y-12">
        
      {/* Bento Grid Header */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* Intro Card - Large */}
        <div className="md:col-span-2 md:row-span-2 bento-card p-8 flex flex-col justify-between relative group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                 <Terminal size={120} />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Fullstack<br/>Developer.</h1>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                    I build accessible, pixel-perfect, secure, and performant web applications.
                </p>
            </div>
            <div className="flex gap-3 mt-4">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-sm text-zinc-400 font-medium">Available for new projects</span>
            </div>
        </div>

        {/* Location / Info */}
        <div className="bento-card p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
             <MapPin className="mb-3 text-indigo-400" size={32} />
             <h3 className="text-zinc-200 font-bold">Indonesia</h3>
             <p className="text-zinc-500 text-xs mt-1">Remote / Hybrid</p>
        </div>

        {/* Social / Github */}
        <a href={profile.socials.github} target="_blank" className="bento-card p-6 flex flex-col justify-center items-center text-center hover:bg-zinc-800/80 cursor-pointer group">
             <Github className="mb-3 text-zinc-400 group-hover:text-white transition-colors" size={32} />
             <h3 className="text-zinc-200 font-bold">GitHub</h3>
             <p className="text-zinc-500 text-xs mt-1">View my code</p>
        </a>

        {/* Tech Stack - Medium */}
        <div className="md:col-span-2 bento-card p-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
                <Code2 size={100} />
            </div>
            <h3 className="bento-title">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
                {profile.skills.frontend.concat(profile.skills.backend).slice(0, 8).map(s => (
                    <span key={s} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 font-mono">
                        {s}
                    </span>
                ))}
            </div>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Cpu size={24}/> Selected Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(project => (
                  <div key={project.id} className="bento-card group p-6 flex flex-col h-full hover:bg-zinc-800/40">
                      <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">{project.title}</h3>
                          <a href={project.link} target="_blank" className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
                              <ArrowUpRight size={18} />
                          </a>
                      </div>
                      <p className="bento-text mb-6 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                          {project.tech.map(t => (
                              <span key={t} className="text-xs text-zinc-500 font-medium">{t}</span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Blog List Section */}
      <section id="blog">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Database size={24}/> Writing</h2>
             <Link to="/#blog" className="text-sm text-zinc-500 hover:text-zinc-300">View all</Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
              {blogs.map(blog => (
                  <Link to={`/blog/${blog.slug}`} key={blog.slug} className="group flex flex-col sm:flex-row items-baseline gap-4 p-4 rounded-xl hover:bg-zinc-900/50 transition-colors border border-transparent hover:border-zinc-800">
                      <span className="text-sm text-zinc-500 font-mono min-w-[100px]">{blog.date}</span>
                      <div>
                          <h3 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors mb-1">
                              {blog.title}
                          </h3>
                          <p className="text-sm text-zinc-500 line-clamp-1">{blog.description}</p>
                      </div>
                  </Link>
              ))}
          </div>
      </section>

    </div>
  );
};

export default Home;