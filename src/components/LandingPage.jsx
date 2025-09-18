import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Star, 
  Users, 
  TrendingUp, 
  Zap,
  Globe,
  BarChart3,
  MessageSquare,
  Calendar,
  Smartphone,
  Monitor,
  Tablet,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ChevronDown,
  Sparkles,
  Rocket,
  Shield,
  Clock,
  Menu,
  X
} from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

const ModernLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate testimonials (from original)
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(testimonialInterval);
      clearInterval(featureInterval);
    };
  }, []);

  // Original features with modern styling
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Smart Content Creation",
      description: "AI-powered chatbot helps you create engaging posts across all platforms with natural language commands.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Multi-Platform Publishing",
      description: "Post to Reddit, Facebook, Instagram, X, Pinterest, and TikTok from one unified dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track performance across all platforms with comprehensive analytics and insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Workflows",
      description: "Streamline your social media management with intelligent automation and scheduling.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
    }
  ];

  // Original platforms with enhanced styling
  const platforms = [
    { 
      name: "Reddit", 
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-orange-500 via-red-500 to-orange-400",
      users: "430M+",
      growth: "+12.3%"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-8 h-8" />,
      gradient: "from-purple-500 via-pink-500 to-orange-400",
      users: "2B+",
      growth: "+8.7%"
    },
    { 
      name: "Facebook", 
      icon: <Facebook className="w-8 h-8" />,
      gradient: "from-blue-600 to-blue-800",
      users: "2.9B+",
      growth: "+2.1%"
    },
    { 
      name: "X (Twitter)", 
      icon: <Twitter className="w-8 h-8" />,
      gradient: "from-gray-800 to-black",
      users: "450M+",
      growth: "+5.2%"
    },
    { 
      name: "Pinterest", 
      icon: <Play className="w-8 h-8" />,
      gradient: "from-red-500 to-red-700",
      users: "450M+",
      growth: "+7.8%"
    },
    { 
      name: "TikTok", 
      icon: <Play className="w-8 h-8" />,
      gradient: "from-black via-gray-800 to-red-500",
      users: "1B+",
      growth: "+16.3%"
    }
  ];

  // Original testimonials
  const testimonials = [
    {
      name: "Sara",
      role: "Developer",
      company: "SocialFlow",
      content: "Building this platform has been an incredible journey. I'm proud of how seamlessly creators can now manage all their platforms.",
      rating: 5,
      avatar: "/Sara.png"
    },
    {
      name: "Wissal",
      role: "Developer",
      company: "SocialFlow",
      content: "We focused on great UX and powerful automation. It's rewarding to see how much time it saves our users.",
      rating: 5,
      avatar: "/Wissal.png"
    }
  ];

  // Original stats with modern icons
  const stats = [
    { number: "6", label: "Social Platforms", suffix: "", icon: <Globe className="w-6 h-6" /> },
    { number: "10K", label: "Posts Created", suffix: "+", icon: <MessageSquare className="w-6 h-6" /> },
    { number: "99.9", label: "Uptime", suffix: "%", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", suffix: "", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
           <Header />
     

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Social Media Management
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Build your audience on
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse">
                all platforms
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Streamline your social media workflow with our AI-powered platform. Create, schedule, and analyze content across Reddit, Instagram, Facebook, X, Pinterest, and TikTok from one unified dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <a href="/register" className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center text-lg">
                Start for free
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>

            </div>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center mb-3 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Connect all your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                social platforms
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your entire social media presence from one powerful dashboard
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${platform.gradient} p-8 flex flex-col justify-between relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      {platform.icon}
                      <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                        {platform.growth}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-white/80 text-lg font-semibold">{platform.users} users</p>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Everything you need
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                to grow
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to help you create better content and reach more people
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl ${
                      activeFeature === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-white/10'
                    } transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={features[activeFeature].image} 
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover transition-all duration-700 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-xl font-bold mb-2">{features[activeFeature].title}</h4>
                  <p className="text-gray-200 text-sm">{features[activeFeature].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      

      {/* Device Compatibility */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Works on all your devices
          </h3>
          <div className="flex justify-center items-center space-x-12 text-gray-300">
            <div className="flex flex-col items-center group hover:text-white transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8" />
              </div>
              <span className="text-lg font-medium">Desktop</span>
            </div>
            <div className="flex flex-col items-center group hover:text-white transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Tablet className="w-8 h-8" />
              </div>
              <span className="text-lg font-medium">Tablet</span>
            </div>
            <div className="flex flex-col items-center group hover:text-white transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8" />
              </div>
              <span className="text-lg font-medium">Mobile</span>
            </div>
          </div>
        </div>
      </section>


      {/* Developers Section */}
      

      
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Ready to
            <span className="block">grow your audience?</span>
          </h2>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-16">
            Join thousands of creators who trust our platform to manage their social media presence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="/register" className="group px-12 py-6 bg-black text-white font-bold rounded-2xl shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-110 flex items-center text-xl">
              Get started for free
              <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a href="/login" className="px-12 py-6 bg-white/20 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-xl">
              Sign in
            </a>
          </div>
        </div>
      </section>

            <Footer />
    </div>
  );
};

export default ModernLandingPage;