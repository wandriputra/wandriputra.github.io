import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto prose prose-invert prose-headings:font-normal prose-h1:text-4xl prose-p:text-vscode-text prose-a:text-vscode-keyword hover:prose-a:underline">
        <h1 className="border-b border-vscode-border pb-2 mb-6">Hi there, I'm {profile.name} 👋</h1>
        
        <p className="text-lg">
            I am a <span className="text-vscode-func font-mono">{profile.role}</span> based in Indonesia.
            <br/>
            {profile.bio}
        </p>

        <h2 className="mt-8 mb-4">🛠 Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <div className="bg-vscode-sidebar p-4 rounded border border-vscode-border">
                <h3 className="text-vscode-keyword font-mono mb-2">frontend.ts</h3>
                <div className="flex flex-wrap gap-2 font-mono text-sm text-vscode-string">
                    {profile.skills.frontend.map(s => `'${s}'`).join(', ')}
                </div>
            </div>
            <div className="bg-vscode-sidebar p-4 rounded border border-vscode-border">
                <h3 className="text-vscode-keyword font-mono mb-2">backend.ts</h3>
                <div className="flex flex-wrap gap-2 font-mono text-sm text-vscode-string">
                    {profile.skills.backend.map(s => `'${s}'`).join(', ')}
                </div>
            </div>
        </div>

        <h2 className="mt-8 mb-4">🔗 Connect</h2>
        <p>
            You can find me on <a href={profile.socials.github}>GitHub</a>, <a href={profile.socials.linkedin}>LinkedIn</a>, or send me an <a href={profile.socials.email}>email</a>.
        </p>

        <div className="mt-8 p-4 border border-vscode-func/30 bg-vscode-func/10 rounded">
            <p className="m-0 text-sm">
                <span className="font-bold">Tip:</span> Use the explorer sidebar on the left to navigate to my <Link to="/projects" className="text-vscode-keyword">projects.json</Link> or read my <Link to="/blog" className="text-vscode-keyword">blog</Link>.
            </p>
        </div>
    </div>
  );
};

export default Home;
