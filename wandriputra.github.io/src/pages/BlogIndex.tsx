import { useEffect, useState } from 'react';
import { getBlogs, type BlogPost } from '../utils/markdown';
import { Link } from 'react-router-dom';

const BlogIndex = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="font-mono text-sm">
        <div className="text-vscode-text-dim mb-4">
            /** <br/>
            &nbsp;* Blog Index <br/>
            &nbsp;* @module Blog <br/>
            &nbsp;*/
        </div>
        
        <div className="text-vscode-keyword">export const</div> <span className="text-vscode-func">posts</span> = [
        <div className="pl-4 mt-2">
            {blogs.map(blog => (
                <div key={blog.slug} className="mb-2">
                    {'{'} <br/>
                    &nbsp;&nbsp;<span className="text-vscode-keyword">slug</span>: <Link to={`/blog/${blog.slug}`} className="text-vscode-string hover:underline cursor-pointer">"{blog.slug}"</Link>, <br/>
                    &nbsp;&nbsp;<span className="text-vscode-keyword">title</span>: <span className="text-vscode-string">"{blog.title}"</span>, <br/>
                    &nbsp;&nbsp;<span className="text-vscode-keyword">date</span>: <span className="text-vscode-string">"{blog.date}"</span>, <br/>
                    &nbsp;&nbsp;<span className="text-vscode-keyword">excerpt</span>: <span className="text-vscode-string">"{blog.description.substring(0, 50)}..."</span> <br/>
                    {'},'}
                </div>
            ))}
        </div>
        ];
    </div>
  );
};

export default BlogIndex;
