import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogs, type BlogPost as BlogPostType } from '../utils/markdown';
import { ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

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

  if (loading) return <div className="text-center py-20 text-zinc-500">Loading post...</div>;
  if (!post) return <div className="text-center py-20 text-red-400">Post not found</div>;

  return (
    <motion.article 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
    >
      <Link to="/#blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors text-sm font-medium">
        <ArrowLeft size={16} /> Back to overview
      </Link>
      
      <header className="mb-10 pb-10 border-b border-zinc-800">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-zinc-500 text-sm font-mono">
            <span className="flex items-center gap-2"><Calendar size={14}/> {post.date}</span>
        </div>
      </header>

      <div className="prose prose-invert prose-zinc max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
        prose-p:leading-relaxed prose-p:text-zinc-300
        prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
        prose-strong:text-white
        prose-code:text-zinc-200 prose-code:bg-zinc-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:font-normal
        prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl
        prose-img:rounded-xl
      ">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </motion.article>
  );
};

export default BlogPost;