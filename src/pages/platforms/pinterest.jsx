import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Pin, 
  Image, 
  TrendingUp, 
  Zap,
  Calendar,
  BarChart3,
  Target,
  Users,
  Bot,
  Sparkles,
  Rocket,
  Shield
} from 'lucide-react';

const PinterestPlatform = () => {
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
      icon: <Image className="w-8 h-8" />,
      title: "Visual Content Creation",
      description: "Create stunning Pinterest pins with AI assistance. Generate pin descriptions, titles, and visual content ideas that drive saves and clicks.",
      benefits: ["AI pin descriptions", "Visual optimization", "SEO-friendly titles"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Pin Scheduling",
      description: "Schedule your Pinterest pins for optimal discovery and engagement. Our AI analyzes Pinterest trends to suggest the best posting times.",
      benefits: ["Optimal timing", "Bulk pin scheduling", "Board management"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate Pinterest pins, descriptions, and board content that drives traffic and engagement.",
      benefits: ["Automated pin creation", "Description generation", "Keyword optimization"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pinterest Analytics",
      description: "Track your Pinterest performance with detailed insights. Monitor impressions, saves, clicks, and audience engagement patterns.",
      benefits: ["Impression tracking", "Save analytics", "Click-through rates"]
    },
    {
      icon: <Pin className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Optimize your Pinterest content for search discovery. Use AI-powered keyword suggestions to improve pin visibility and reach.",
      benefits: ["Keyword research", "SEO optimization", "Search ranking"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience Targeting",
      description: "Create content that resonates with your target Pinterest audience. Use AI insights to understand what your audience wants to see.",
      benefits: ["Audience analysis", "Content targeting", "Engagement optimization"]
    }
  ];

  const stats = [
    { number: "600K+", label: "Pins Created" },
    { number: "200%", label: "Traffic Increase" },
    { number: "15K+", label: "Boards Managed" },
    { number: "24/7", label: "Trend Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>Pinterest Management | SocialFlow - AI-Powered Pinterest Marketing</title>
        <meta name="description" content="Grow your Pinterest presence with AI-powered pin creation, scheduling, and analytics. Drive traffic and engagement with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/pinterest" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-pink-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-pink-600/20 to-orange-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20">
                <Pin className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-white">Pinterest Management</span>
                <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Drive Pinterest
                <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Traffic & Sales</span>
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Create stunning pins, optimize for Pinterest SEO, and drive massive traffic to your website with our AI-powered Pinterest management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Driving Traffic
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
                Complete Pinterest
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Marketing Solution</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                From pin creation to traffic optimization, our AI tools help you maximize your Pinterest marketing ROI and drive qualified traffic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-orange-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                How SocialFlow Works
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">for Pinterest</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Drive traffic and sales in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your Pinterest Account</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your Pinterest business account to access our comprehensive pin creation and analytics tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Optimized Pins</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate SEO-optimized pin descriptions, titles, and hashtags that drive traffic and conversions.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule & Track</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule pins for optimal reach and track traffic, clicks, and conversions to maximize your Pinterest ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-orange-500/10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Ready to Pinterest Like a Pro?
            </h2>
            <p className="text-2xl text-white/80 mb-8">
              Join marketers and creators who use SocialFlow to drive massive traffic and build engaged audiences on Pinterest.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link
                href="/register"
                className="group px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Driving Traffic
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

export default PinterestPlatform;
