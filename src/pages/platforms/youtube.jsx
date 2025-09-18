import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Video, 
  TrendingUp, 
  Users, 
  Zap,
  Calendar,
  BarChart3,
  Target,
  Globe,
  Bot,
  Sparkles,
  Rocket,
  Shield,
  Play,
  Eye,
  ThumbsUp
} from 'lucide-react';

const YouTubePlatform = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Smart Shorts Creation",
      description: "Create engaging YouTube Shorts with AI assistance. Our platform helps you craft short-form content that captures attention and drives engagement.",
      benefits: ["AI-powered content suggestions", "Shorts-optimized formatting", "Title and description generation"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Scheduling",
      description: "Schedule your YouTube Shorts for optimal viewing times. Our AI analyzes audience activity patterns to suggest the best upload times.",
      benefits: ["Optimal timing suggestions", "Bulk upload scheduling", "Cross-platform coordination"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate YouTube Shorts content, titles, and descriptions that match your brand voice and YouTube guidelines.",
      benefits: ["Automated content generation", "SEO-optimized titles", "Brand voice consistency"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track your YouTube Shorts performance with detailed analytics. Monitor views, likes, comments, and subscriber growth.",
      benefits: ["View tracking", "Engagement metrics", "Growth analytics"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Channel Management",
      description: "Manage your YouTube channel from one dashboard. Upload, organize, and optimize your Shorts content seamlessly.",
      benefits: ["Multi-channel support", "Content organization", "Channel optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trend Analysis",
      description: "Stay ahead of YouTube trends with our AI-powered trend detection. Identify viral Shorts opportunities before they peak.",
      benefits: ["Trend identification", "Viral content prediction", "Competitor analysis"]
    }
  ];

  const stats = [
    { number: "1M+", label: "YouTube Shorts Created" },
    { number: "300%", label: "View Increase" },
    { number: "10K+", label: "Channels Managed" },
    { number: "24/7", label: "AI Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>YouTube Shorts Management | SocialFlow - AI-Powered YouTube Marketing</title>
        <meta name="description" content="Manage your YouTube Shorts with AI-powered content creation, scheduling, and analytics. Grow your channel engagement with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/youtube" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-red-800">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/20 to-pink-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-7xl font-black text-white mb-8 leading-tight">
                Master YouTube
                <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-red-300 bg-clip-text text-transparent">
                  Shorts Creation
                </span>
              </h1>
              
              <p className="text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Create viral YouTube Shorts with AI-powered content generation, smart scheduling, and comprehensive analytics. 
                Grow your channel and reach millions of viewers effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                <Link
                  href="/register"
                  className="group px-12 py-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
                >
                  <Rocket className="w-6 h-6 mr-3" />
                  Start Creating Shorts
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/login"
                  className="px-12 py-6 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xl"
                >
                  <Shield className="w-6 h-6 mr-3" />
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-5xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-red-300 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black text-white mb-8">
                Everything You Need for
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  YouTube Success
                </span>
              </h2>
              <p className="text-2xl text-white/70 max-w-4xl mx-auto">
                Comprehensive tools to create, schedule, and analyze your YouTube Shorts performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:bg-white/10 transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-white">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/70 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-red-300">
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 bg-gradient-to-r from-red-500/10 to-pink-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black text-white mb-8">
                How It Works
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Create viral YouTube Shorts in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your YouTube Channel</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your YouTube channel to access our comprehensive content creation and analytics tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Engaging Shorts</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate compelling short-form content with optimized titles and descriptions that drive views and engagement.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Grow & Analyze</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule uploads for optimal times and track views, engagement, and subscriber growth across your channel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-red-500 to-red-600 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-black text-white mb-8">
              Ready to Go Viral on YouTube?
            </h2>
            <p className="text-2xl text-red-100 mb-8">
              Join thousands of creators who use SocialFlow to grow their YouTube channels and create viral Shorts content.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link
                href="/register"
                className="group px-12 py-6 bg-gradient-to-r from-white to-red-50 text-red-600 font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                <Play className="w-6 h-6 mr-3" />
                Start Creating Shorts
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/login"
                className="px-12 py-6 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xl"
              >
                <Shield className="w-6 h-6 mr-3" />
                Sign In
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default YouTubePlatform;
