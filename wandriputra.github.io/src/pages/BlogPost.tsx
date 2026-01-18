import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogs, type BlogPost as BlogPostType } from '../utils/markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
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

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!post) return <div className="text-center py-20 text-red-400">Post not found</div>;

  return (
    <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto pt-10"
    >
      <Link to="/#blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Blog
      </Link>
      
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{post.title}</h1>
        <div className="flex justify-center items-center gap-4 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14}/> 5 min read</span>
        </div>
      </header>

      <div className="glass-card p-8 sm:p-12 rounded-3xl">
          <div className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-slate-200 
            prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-sky-300 prose-code:bg-sky-950/30 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10
          ">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
