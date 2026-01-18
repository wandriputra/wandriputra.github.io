import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogs, type BlogPost as BlogPostType } from '../utils/markdown';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
        const posts = await getBlogs();
        const found = posts.find(p => p.slug === slug);
        setPost(found || null);
        setLoading(false);
    };
    loadPost();
  }, [slug]);

  if (loading) return <div className="p-4 text-vscode-text-dim">Loading content...</div>;
  if (!post) return <div className="p-4 text-red-400">Error: 404 File Not Found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 pb-4 border-b border-vscode-border flex justify-between items-end">
         <div>
            <h1 className="text-3xl font-bold text-vscode-text mb-2">{post.title}</h1>
            <div className="text-sm text-vscode-text-dim font-mono">
                Last modified: {post.date} | 48 lines | UTF-8
            </div>
         </div>
         <Link to="/blog" className="text-vscode-keyword text-sm hover:underline flex items-center gap-1">
            <ArrowLeft size={14} /> cd ..
         </Link>
      </div>

      <div className="prose prose-invert prose-vscode max-w-none 
        prose-headings:text-vscode-keyword prose-headings:font-normal
        prose-p:text-vscode-text prose-p:leading-relaxed
        prose-a:text-vscode-func prose-a:no-underline hover:prose-a:underline
        prose-code:text-vscode-string prose-code:bg-transparent prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-vscode-border
        prose-blockquote:border-l-vscode-accent prose-blockquote:bg-[#252526] prose-blockquote:py-1 prose-blockquote:not-italic
        prose-hr:border-vscode-border
      ">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
