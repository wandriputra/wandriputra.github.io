import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getBlogs, type BlogPost } from '../utils/markdown';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import ReactMarkdown from 'react-markdown';
import { Github, Linkedin, Mail } from 'lucide-react';

type HistoryItem = {
  id: string;
  type: 'command' | 'output';
  content: React.ReactNode;
};

export const TerminalUI = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome',
      type: 'output',
      content: (
        <div className="mb-4">
          <h1 className="text-terminal-text text-xl sm:text-2xl font-bold mb-2">Welcome to {profile.name}'s Terminal v1.0.0</h1>
          <p className="text-terminal-dim">Type <span className="text-terminal-yellow">'help'</span> to see available commands.</p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(' ');
    const command = args[0];

    // Add command to history
    const commandEntry: HistoryItem = {
      id: Date.now().toString() + '-cmd',
      type: 'command',
      content: <div className="flex gap-2"><span className="text-terminal-green">➜</span> <span className="text-terminal-text">~</span> <span className="text-terminal-yellow">{cmd}</span></div>
    };

    let outputEntry: HistoryItem | null = null;

    switch (command) {
      case 'help':
      case 'ls':
        outputEntry = {
          id: Date.now().toString() + '-out',
          type: 'output',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-terminal-dim">
              <div><span className="text-terminal-text font-bold">about / whoami</span> - View profile</div>
              <div><span className="text-terminal-text font-bold">projects</span> - View portfolio</div>
              <div><span className="text-terminal-text font-bold">blog</span> - List blog posts</div>
              <div><span className="text-terminal-text font-bold">cat &lt;post-slug&gt;</span> - Read a post</div>
              <div><span className="text-terminal-text font-bold">clear</span> - Clear terminal</div>
              <div><span className="text-terminal-text font-bold">repo</span> - View this project's repo</div>
            </div>
          )
        };
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'about':
      case 'whoami':
        outputEntry = {
          id: Date.now().toString() + '-out',
          type: 'output',
          content: (
            <div className="flex flex-col gap-4">
              <div className="p-4 border border-terminal-dim/30 rounded">
                <h2 className="text-xl font-bold text-terminal-text mb-2">{profile.name}</h2>
                <p className="text-terminal-dim mb-4">{profile.role}</p>
                <p className="mb-4">{profile.bio}</p>
                
                <h3 className="font-bold text-terminal-yellow mb-2">Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="text-terminal-green text-sm mb-1">Frontend</h4>
                    <ul className="list-disc list-inside text-terminal-dim text-sm">
                      {profile.skills.frontend.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-terminal-green text-sm mb-1">Backend</h4>
                    <ul className="list-disc list-inside text-terminal-dim text-sm">
                      {profile.skills.backend.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                   <div>
                    <h4 className="text-terminal-green text-sm mb-1">Tools</h4>
                    <ul className="list-disc list-inside text-terminal-dim text-sm">
                      {profile.skills.tools.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <a href={profile.socials.github} target="_blank" className="flex items-center gap-1 text-terminal-text hover:underline"><Github size={16}/> GitHub</a>
                  <a href={profile.socials.linkedin} target="_blank" className="flex items-center gap-1 text-terminal-text hover:underline"><Linkedin size={16}/> LinkedIn</a>
                  <a href={profile.socials.email} className="flex items-center gap-1 text-terminal-text hover:underline"><Mail size={16}/> Email</a>
                </div>
              </div>
            </div>
          )
        };
        break;

      case 'projects':
        outputEntry = {
          id: Date.now().toString() + '-out',
          type: 'output',
          content: (
            <div className="grid grid-cols-1 gap-4">
              {projects.map(p => (
                <div key={p.id} className="border border-terminal-dim/30 p-4 rounded hover:border-terminal-text/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-terminal-yellow">{p.title}</h3>
                    <div className="flex gap-2 text-xs">
                      {p.repo && <a href={p.repo} target="_blank" className="text-terminal-text hover:underline">[Repo]</a>}
                      <a href={p.link} target="_blank" className="text-terminal-text hover:underline">[Demo]</a>
                    </div>
                  </div>
                  <p className="text-sm text-terminal-dim mb-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="text-xs bg-terminal-dim/10 px-2 py-1 rounded text-terminal-green">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          )
        };
        break;

      case 'blog':
        outputEntry = {
          id: Date.now().toString() + '-out',
          type: 'output',
          content: (
            <div>
              <h3 className="text-terminal-yellow mb-2">Recent Posts:</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-terminal-dim/30 text-terminal-dim text-xs">
                    <th className="py-1 pr-4">Date</th>
                    <th className="py-1">Title</th>
                    <th className="py-1">Slug (use for 'cat')</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map(b => (
                    <tr key={b.slug} className="hover:bg-terminal-dim/10">
                      <td className="py-1 pr-4 text-terminal-dim text-sm">{b.date}</td>
                      <td className="py-1 font-bold text-terminal-text">{b.title}</td>
                      <td className="py-1 text-terminal-green text-sm">{b.slug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-terminal-dim mt-2">Usage: <span className="text-terminal-yellow">cat &lt;slug&gt;</span></p>
            </div>
          )
        };
        break;

      case 'cat':
        const slug = args[1];
        if (!slug) {
           outputEntry = {
            id: Date.now().toString() + '-out',
            type: 'output',
            content: <div className="text-terminal-red">Error: Please specify a post slug. Usage: cat &lt;slug&gt;</div>
          };
        } else {
          const post = blogs.find(b => b.slug === slug);
          if (post) {
            outputEntry = {
              id: Date.now().toString() + '-out',
              type: 'output',
              content: (
                <div className="prose prose-invert prose-sm max-w-none border-l-2 border-terminal-dim pl-4 py-2">
                  <div className="mb-4">
                    <h1 className="text-2xl font-bold text-terminal-yellow m-0">{post.title}</h1>
                    <p className="text-terminal-dim text-xs m-0">{post.date}</p>
                  </div>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              )
            };
          } else {
            outputEntry = {
              id: Date.now().toString() + '-out',
              type: 'output',
              content: <div className="text-terminal-red">Error: Post '{slug}' not found. Type 'blog' to list available posts.</div>
            };
          }
        }
        break;
      
      case 'repo':
        window.open('https://github.com/wandriputra/wandriputra.github.io', '_blank');
        outputEntry = {
          id: Date.now().toString() + '-out',
          type: 'output',
          content: <div className="text-terminal-green">Opening repository...</div>
        };
        break;

      default:
        if (cmd === '') {
           outputEntry = null; // Just new line
        } else {
          outputEntry = {
            id: Date.now().toString() + '-out',
            type: 'output',
            content: <div className="text-terminal-red">Command not found: {command}. Type 'help' for available commands.</div>
          };
        }
    }

    setHistory(prev => outputEntry ? [...prev, commandEntry, outputEntry] : [...prev, commandEntry]);
    setInput('');
  };

  return (
    <div 
      className="min-h-screen bg-terminal-bg text-terminal-text p-4 font-mono text-sm sm:text-base overflow-hidden flex flex-col"
      onClick={focusInput}
    >
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-12">
        {history.map(item => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2"
          >
            {item.content}
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-terminal-dim/20 bg-terminal-bg sticky bottom-0">
        <span className="text-terminal-green">➜</span>
        <span className="text-terminal-text">~</span>
        <input 
          ref={inputRef}
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCommand(input);
            }
          }}
          className="bg-transparent border-none outline-none flex-1 text-terminal-text caret-terminal-yellow"
          autoFocus
        />
      </div>
    </div>
  );
};
