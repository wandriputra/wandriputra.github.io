import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getReadme } from '../utils/markdown';
import { Link } from 'react-router-dom';

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    getReadme().then(setContent);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-slate prose-vscode max-w-none 
        prose-headings:text-vscode-keyword prose-headings:font-normal
        prose-h1:border-b prose-h1:border-vscode-border prose-h1:pb-2
        prose-p:text-vscode-text prose-p:leading-relaxed
        prose-a:text-vscode-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-vscode-string prose-code:bg-vscode-sidebar prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-vscode-sidebar prose-pre:border prose-pre:border-vscode-border
        prose-blockquote:border-l-vscode-accent prose-blockquote:bg-vscode-sidebar prose-blockquote:py-1 prose-blockquote:not-italic
        prose-hr:border-vscode-border
      ">
        <ReactMarkdown 
          components={{
            a: ({node, ...props}) => {
                // Handle internal links (starting with /) using React Router Link
                if (props.href && props.href.startsWith('/')) {
                    return <Link to={props.href} {...props as any} />;
                }
                return <a target="_blank" rel="noopener noreferrer" {...props} />;
            }
          }}
        >
            {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Home;