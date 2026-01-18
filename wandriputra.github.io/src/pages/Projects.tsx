import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <div className="font-mono text-sm">
      <div className="text-vscode-text-dim mb-2">// Loaded from API: /api/v1/projects</div>
      <div className="text-vscode-keyword">const</div> <span className="text-vscode-func">projects</span> = [
      {projects.map((proj, i) => (
        <div key={proj.id} className="pl-4 my-2 relative group">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-vscode-border -ml-2"></div>
          <div>{'{'}</div>
          <div className="pl-4">
            <span className="text-vscode-keyword">"id"</span>: <span className="text-vscode-func">{i + 1}</span>,
          </div>
          <div className="pl-4">
            <span className="text-vscode-keyword">"name"</span>: <span className="text-vscode-string">"{proj.title}"</span>,
          </div>
          <div className="pl-4">
            <span className="text-vscode-keyword">"description"</span>: <span className="text-vscode-string">"{proj.description}"</span>,
          </div>
          <div className="pl-4">
            <span className="text-vscode-keyword">"stack"</span>: [<span className="text-vscode-string">{proj.tech.map(t => `"${t}"`).join(', ')}</span>],
          </div>
          <div className="pl-4 flex items-center gap-2">
            <span className="text-vscode-keyword">"links"</span>: 
            <span className="text-vscode-text-dim"> // </span>
            {proj.repo && (
                <a href={proj.repo} target="_blank" className="flex items-center gap-1 text-vscode-accent hover:underline hover:text-vscode-keyword cursor-pointer z-10">
                    Repo <Github size={12}/>
                </a>
            )}
             {proj.link && (
                <a href={proj.link} target="_blank" className="flex items-center gap-1 text-vscode-accent hover:underline hover:text-vscode-keyword cursor-pointer z-10">
                    Live <ExternalLink size={12}/>
                </a>
            )}
          </div>
          <div>{'}'},</div>
        </div>
      ))}
      ];
    </div>
  );
};

export default Projects;
