import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  TrendingUp,
  MessageSquare,
  Share2,
  BookOpen,
  Zap,
  BarChart3,
  Users,
  Globe,
  ChevronDown,
  Sparkles,
  Play,
  Loader2
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

// API endpoint for fetching blog posts
const API_URL = 'https://dev.to/api/articles?tag=socialmedia&top=10&state=fresh';

// Fallback image if no cover image is provided
const DEFAULT_IMAGE = 'https://via.placeholder.com/600x400/1a365d/ffffff?text=Social+Media+Blog';

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper function to estimate reading time
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        
        // Transform API data to match our component's expected format
        const formattedPosts = data.map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.description || 'Read more about this article...',
          content: post.body_markdown || '',
          author: post.user.name,
          authorRole: post.user.work_title || 'Writer',
          authorImage: post.user.profile_image_90,
          publishDate: post.published_at,
          readTime: calculateReadTime(post.body_markdown || ''),
          category: post.tag_list[0]?.charAt(0).toUpperCase() + post.tag_list[0]?.slice(1) || 'General',
          tags: post.tag_list || [],
          featured: post.positive_reactions_count > 10, // Consider posts with >10 reactions as featured
          image: post.cover_image || post.social_image || DEFAULT_IMAGE,
          url: post.url,
          commentsCount: post.comments_count,
          reactionsCount: post.positive_reactions_count
        }));
        
        setPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
    
    // Set isVisible to true after component mounts for initial animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Get unique categories from fetched posts
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  // Filter posts based on search query and active category
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const finalFilteredPosts = filteredPosts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
            <p className="mt-4 text-lg text-gray-600">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-2xl">
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
              <p className="font-medium">Error loading blog posts</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const recentPosts = finalFilteredPosts.filter(post => !post.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920&h=1080&fit=crop&crop=center)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${window.scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20">
              <BookOpen className="w-4 h-4 mr-2 animate-pulse" />
              Social Media Insights & Strategies
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Learn from the
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse">
                best minds
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Master social media management with expert insights, proven strategies, and cutting-edge techniques that drive real results across all platforms.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="w-6 h-6 text-gray-400 absolute left-6 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, strategies, and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/20 transition-all duration-300 text-lg"
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-black text-white mb-2">50+</div>
                <div className="text-gray-300 font-medium">Expert Articles</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-black text-white mb-2">10K+</div>
                <div className="text-gray-300 font-medium">Monthly Readers</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-black text-white mb-2">6</div>
                <div className="text-gray-300 font-medium">Platforms Covered</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Updated Content</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/25'
                    : 'bg-white/10 backdrop-blur-lg text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-full text-sm font-medium text-yellow-300 mb-6 border border-yellow-500/20">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Featured Article
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Latest <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Insights</span>
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-500/10">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="p-8 lg:p-16">
                  <div className="flex items-center space-x-4 mb-8">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg">{featuredPost.author}</p>
                        <p className="text-blue-400">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    
                    <a 
                      href={featuredPost.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center"
                    >
                      Read Article
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="relative h-80 lg:h-full">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover cutting-edge strategies, expert insights, and actionable tips to dominate social media
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalFilteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      post.category === 'Strategy' ? 'bg-blue-500 text-white' :
                      post.category === 'Technology' ? 'bg-purple-500 text-white' :
                      post.category === 'Analytics' ? 'bg-green-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center text-white/80 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{post.author}</p>
                        <p className="text-xs text-gray-400">{formatDate(post.publishDate)}</p>
                      </div>
                    </div>
                    
                    <a 
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read on Dev.to <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/20">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium text-white mb-8">
              <MessageSquare className="w-4 h-4 mr-2 animate-pulse" />
              Stay Ahead of the Game
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Weekly Social Media
              <span className="block">Mastery Tips</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 15,000+ marketers who receive our exclusive newsletter with cutting-edge strategies, insider secrets, and actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all duration-300"
              />
              <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm">15,000+ subscribers</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span className="text-sm">Weekly insights</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span className="text-sm">No spam ever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;