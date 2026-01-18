import { profile } from '../data/profile';

const About = () => {
  return (
    <div className="font-mono text-sm leading-6">
        <div><span className="text-vscode-keyword">import</span> React <span className="text-vscode-keyword">from</span> <span className="text-vscode-string">'react'</span>;</div>
        <div className="mb-4"><span className="text-vscode-keyword">import</span> {'{ Developer }'} <span className="text-vscode-keyword">from</span> <span className="text-vscode-string">'./Universe'</span>;</div>

        <div><span className="text-vscode-keyword">const</span> <span className="text-vscode-func">AboutMe</span> = () <span className="text-vscode-keyword">=&gt;</span> {'{'}</div>
        <div className="pl-4">
            <span className="text-vscode-keyword">const</span> me = {'{'}
            <div className="pl-4">
                name: <span className="text-vscode-string">'{profile.name}'</span>,
            </div>
            <div className="pl-4">
                role: <span className="text-vscode-string">'{profile.role}'</span>,
            </div>
            <div className="pl-4">
                passion: <span className="text-vscode-string">['Clean Code', 'Performance', 'UX']</span>,
            </div>
             <div className="pl-4">
                status: <span className="text-vscode-string">'Open to Work'</span>,
            </div>
            {'}'};
        </div>
        <br/>
        <div className="pl-4">
            <span className="text-vscode-keyword">return</span> (
        </div>
        <div className="pl-8 text-vscode-text-dim">
            {/* Biography Section */}
        </div>
        <div className="pl-8">
            &lt;<span className="text-vscode-keyword">div</span> className=<span className="text-vscode-string">"bio"</span>&gt;
        </div>
        <div className="pl-12 max-w-2xl text-vscode-string whitespace-pre-wrap">
            {profile.bio}
            <br/><br/>
            I started coding in 2020 and haven't looked back since. I specialize in the JavaScript ecosystem but am always learning new technologies. When I'm not coding, I'm probably gaming or reading.
        </div>
        <div className="pl-8">
            &lt;/<span className="text-vscode-keyword">div</span>&gt;
        </div>
        <div className="pl-4">
            );
        </div>
        <div>{'}'};</div>
        <br/>
        <div><span className="text-vscode-keyword">export default</span> <span className="text-vscode-func">AboutMe</span>;</div>
    </div>
  );
};

export default About;
