import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
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
  Shield
} from 'lucide-react';

const RedditPlatform = () => {
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
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Smart Post Creation",
      description: "Create engaging Reddit posts with AI assistance. Our platform helps you craft content that resonates with specific subreddit communities.",
      benefits: ["AI-powered content suggestions", "Subreddit-specific optimization", "Title and content generation"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Scheduling",
      description: "Schedule your Reddit posts for optimal engagement times. Our AI analyzes subreddit activity patterns to suggest the best posting times.",
      benefits: ["Optimal timing suggestions", "Bulk post scheduling", "Cross-subreddit coordination"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate Reddit posts, comments, and responses that match your brand voice and subreddit guidelines.",
      benefits: ["Automated post generation", "Comment suggestions", "Brand voice consistency"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track your Reddit performance with detailed analytics. Monitor upvotes, comments, engagement rates, and subreddit growth.",
      benefits: ["Engagement tracking", "Subreddit performance", "Growth analytics"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Subreddit Management",
      description: "Manage multiple subreddit accounts from one dashboard. Switch between different Reddit accounts and communities seamlessly.",
      benefits: ["Multi-account support", "Subreddit discovery", "Community management"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trend Analysis",
      description: "Stay ahead of Reddit trends with our AI-powered trend detection. Identify viral content opportunities before they peak.",
      benefits: ["Trend identification", "Viral content prediction", "Competitor analysis"]
    }
  ];

  const stats = [
    { number: "500K+", label: "Reddit Posts Created" },
    { number: "95%", label: "Engagement Increase" },
    { number: "50+", label: "Subreddits Supported" },
    { number: "24/7", label: "AI Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>Reddit Management | SocialFlow - AI-Powered Reddit Marketing</title>
        <meta name="description" content="Manage your Reddit presence with AI-powered content creation, scheduling, and analytics. Grow your subreddit engagement with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/reddit" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20">
                <Globe className="w-5 h-5 mr-3 text-orange-400" />
                <span className="text-white">Reddit Management</span>
                <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Master Reddit
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Community Engagement</span>
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Build authentic communities, create engaging content, and grow your presence across Reddit's diverse ecosystem with our AI-powered management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Managing Reddit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                Complete Reddit
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Management Solution</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                From community discovery to content optimization, our AI tools help you build authentic relationships and grow your Reddit presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                How SocialFlow Works
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">for Reddit</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Build your Reddit presence in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your Reddit Account</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your Reddit account to access our comprehensive community management and content creation tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Engaging Content</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate compelling posts, comments, and discussions that resonate with specific subreddit communities.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Build & Analyze</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule posts for optimal engagement times and track karma, comments, and community growth across subreddits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-orange-500 to-red-500 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-black text-white mb-8">
              Ready to Dominate Reddit?
            </h2>
            <p className="text-2xl text-orange-100 mb-8">
              Join thousands of creators who use SocialFlow to grow their Reddit presence and build engaged communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link
                href="/register"
                className="group px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Building Communities
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

export default RedditPlatform;
