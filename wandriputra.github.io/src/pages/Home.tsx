import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { getBlogs, type BlogPost } from '../utils/markdown';
import { Link } from 'react-router-dom';

const Section = ({ title, id, children, className = "" }: { title: string, id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`mb-24 ${className}`}>
    <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 inline-block">{title}</h2>
    {children}
  </section>
);

const Home = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Available for hire
            </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500">experiences.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            I'm <b>{profile.name}</b>, a {profile.role}. {profile.bio}
          </p>
          <div className="flex gap-4">
             <a href="#projects" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-colors">
                View Work
             </a>
             <a href="mailto:hello@wandriputra.dev" className="px-6 py-3 glass-panel rounded-full hover:bg-white/5 transition-colors">
                Contact Me
             </a>
          </div>
        </motion.div>
      </section>

      {/* About & Skills */}
      <Section id="about" title="About & Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-4 text-white">My Tech Stack</h3>
                <div className="space-y-4">
                    <div>
                        <div className="text-sm text-slate-400 mb-2">Frontend</div>
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.frontend.map(s => (
                                <span key={s} className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-xs text-sky-300">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-slate-400 mb-2">Backend</div>
                        <div className="flex flex-wrap gap-2">
                             {profile.skills.backend.map(s => (
                                <span key={s} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
             <div className="glass-card p-6 rounded-2xl flex flex-col justify-center">
                 <p className="text-slate-300 leading-relaxed">
                     With a background in computer science and years of hands-on experience, I specialize in building full-stack applications that are scalable, accessible, and performant. I enjoy the challenge of solving complex problems and turning ideas into reality.
                 </p>
             </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-colors"
                >
                    <div className="flex justify-between items-start mb-4">
                         <div className="p-3 bg-white/5 rounded-xl text-sky-400">
                            {/* Placeholder Icon based on title hash or random */}
                            <Terminal size={24} />
                         </div>
                         <div className="flex gap-2">
                             {project.repo && <a href={project.repo} target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors"><Github size={18}/></a>}
                             <a href={project.link} target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors"><ExternalLink size={18}/></a>
                         </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="text-xs text-slate-500">#{t}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Blog Preview */}
      <Section id="blog" title="Latest Thoughts">
          <div className="space-y-4">
              {blogs.map(blog => (
                  <Link to={`/blog/${blog.slug}`} key={blog.slug} className="block glass-card p-6 rounded-2xl hover:border-sky-500/30 transition-all group">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold group-hover:text-sky-400 transition-colors">{blog.title}</h3>
                          <span className="text-xs text-slate-500">{blog.date}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{blog.description}</p>
                  </Link>
              ))}
          </div>
      </Section>
    </div>
  );
};

export default Home;
