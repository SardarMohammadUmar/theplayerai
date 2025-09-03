import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/api/entities';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (slug) {
      loadPost(slug);
    } else {
      setError('Post not found');
      setLoading(false);
    }
  }, []);

  const loadPost = async (slug) => {
    try {
      const posts = await BlogPost.filter({ slug: slug, published: true });
      if (posts.length > 0) {
        const currentPost = posts[0];
        setPost(currentPost);
        
        // Load related posts
        const related = await BlogPost.filter({ 
          category: currentPost.category, 
          published: true 
        }, '-created_date', 4);
        
        setRelatedPosts(related.filter(p => p.id !== currentPost.id).slice(0, 3));
      } else {
        setError('Post not found');
      }
    } catch (error) {
      console.error('Error loading post:', error);
      setError('Error loading post');
    } finally {
      setLoading(false);
    }
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title || '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-slate-400 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to={createPageUrl('Blog')}>
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="text-slate-300 hover:text-cyan-400 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-cyan-400/20 backdrop-blur-xl border border-cyan-400/30 text-cyan-300 text-sm font-medium rounded-full">
                {post.category.replace('-', ' ').toUpperCase()}
              </span>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.created_date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time} min read</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              {post.excerpt}
            </p>
            
            {post.featured_image && (
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-1 px-3 py-1 bg-slate-800/60 text-slate-300 text-sm rounded-full">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-slate-700/50">
              <span className="text-slate-400 font-medium">Share:</span>
              <div className="flex gap-3">
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/60 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 rounded-lg transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/60 hover:bg-blue-800/20 text-slate-400 hover:text-blue-300 rounded-lg transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/60 hover:bg-blue-700/20 text-slate-400 hover:text-blue-400 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-6 mt-8">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold text-white mb-4 mt-6">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold text-white mb-3 mt-5">{children}</h3>,
                p: ({children}) => <p className="text-slate-300 mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside text-slate-300 mb-4 space-y-2">{children}</ol>,
                li: ({children}) => <li className="leading-relaxed">{children}</li>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-cyan-400 pl-6 italic text-slate-300 my-6 bg-slate-800/30 py-4 rounded-r-lg">{children}</blockquote>,
                code: ({children}) => <code className="bg-slate-800 text-cyan-300 px-2 py-1 rounded text-sm">{children}</code>,
                pre: ({children}) => <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-6xl mx-auto mt-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article key={relatedPost.id} className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300">
                  <img 
                    src={relatedPost.featured_image} 
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link to={createPageUrl(`BlogPost?slug=${relatedPost.slug}`)}>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 p-0">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}