import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/api/entities';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
  >
    <div className="relative overflow-hidden">
      <img 
        src={post.featured_image} 
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-cyan-400/20 backdrop-blur-xl border border-cyan-400/30 text-cyan-300 text-xs font-medium rounded-full">
          {post.category.replace('-', ' ').toUpperCase()}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.created_date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.read_time} min read</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-slate-400 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag, tagIndex) => (
          <span key={tagIndex} className="flex items-center gap-1 px-2 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full">
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>
      
      <Link to={createPageUrl(`BlogPost?slug=${post.slug}`)}>
        <Button variant="ghost" className="group/btn p-0 h-auto text-cyan-400 hover:text-cyan-300">
          Read More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </motion.article>
);

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="flex flex-wrap gap-3 mb-8">
    <button
      onClick={() => onCategoryChange('all')}
      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
        activeCategory === 'all' 
          ? 'bg-cyan-400 text-black' 
          : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80'
      }`}
    >
      All Articles
    </button>
    {categories.map(category => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
          activeCategory === category 
            ? 'bg-cyan-400 text-black' 
            : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80'
        }`}
      >
        {category.replace('-', ' ')}
      </button>
    ))}
  </div>
);

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = ['digital-signage', 'ai-technology', 'business-tips', 'case-studies', 'tutorials'];

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, activeCategory]);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await BlogPost.filter({ published: true, language: 'en' }, '-created_date');
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              Digital Signage
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              Insights & Tips
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Stay ahead with the latest trends, tips, and insights in digital signage, AI technology, and business growth.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg bg-slate-900/60 border-slate-700/50 text-white placeholder-slate-400 rounded-2xl"
            />
          </div>
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-slate-400 mb-6">
              {searchTerm || activeCategory !== 'all' 
                ? 'Try adjusting your search or filters.' 
                : 'Blog posts will appear here once published.'}
            </p>
            <Button onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}