import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Share2, 
  MessageCircle, 
  Zap,
  Calendar,
  BarChart3,
  Target,
  Globe,
  Bot,
  Sparkles,
  Rocket,
  Shield,
  Facebook
} from 'lucide-react';

const FacebookPlatform = () => {
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
      icon: <Share2 className="w-8 h-8" />,
      title: "Smart Post Creation",
      description: "Create engaging Facebook posts with AI assistance. Generate content that drives likes, shares, and meaningful conversations with your audience.",
      benefits: ["AI content generation", "Engagement optimization", "Multi-format posts"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Advanced Scheduling",
      description: "Schedule Facebook posts for optimal reach and engagement. Our AI analyzes your audience activity patterns to maximize visibility.",
      benefits: ["Peak time scheduling", "Bulk post planning", "Cross-page management"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate Facebook posts, comments, and page updates that maintain your brand voice and drive engagement.",
      benefits: ["Automated posting", "Brand consistency", "Content suggestions"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Page Analytics",
      description: "Track your Facebook page performance with detailed insights. Monitor reach, engagement, page likes, and audience demographics.",
      benefits: ["Reach tracking", "Engagement metrics", "Audience insights"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Build and manage your Facebook community with automated responses and engagement tools. Foster meaningful connections with followers.",
      benefits: ["Auto-responses", "Community management", "Follower engagement"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience Targeting",
      description: "Optimize your Facebook content for specific audience segments. Use AI insights to create content that resonates with your target demographics.",
      benefits: ["Demographic targeting", "Interest-based content", "Audience analysis"]
    }
  ];

  const stats = [
    { number: "800K+", label: "Facebook Posts Created" },
    { number: "120%", label: "Reach Increase" },
    { number: "25K+", label: "Pages Managed" },
    { number: "24/7", label: "AI Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>Facebook Management | SocialFlow - AI-Powered Facebook Marketing</title>
        <meta name="description" content="Grow your Facebook presence with AI-powered content creation, scheduling, and analytics. Build engaged communities with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/facebook" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20">
                <Facebook className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-white">Facebook Management</span>
                <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Build Facebook
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Communities That Thrive</span>
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Create compelling Facebook content, schedule posts for maximum reach, and build engaged communities with our AI-powered Facebook management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
                <Link
                  href="/register"
                  className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
                >
                  <Rocket className="w-6 h-6 mr-3" />
                  Start Free Trial
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
        </section>


        {/* Features Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                Powerful Facebook
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Management Features</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Everything you need to grow your Facebook presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                How SocialFlow Works
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">for Facebook</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Grow your Facebook presence in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your Facebook Page</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your Facebook business page to access our comprehensive management and analytics tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Engaging Content</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate compelling Facebook posts that drive engagement and build meaningful connections with your audience.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule & Analyze</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule posts for optimal reach and track performance with detailed analytics to continuously improve your strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Ready to Transform
              <span className="block">Your Facebook Presence?</span>
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-16">
              Join businesses and creators who use SocialFlow to build thriving Facebook communities and drive meaningful engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/register"
                className="group px-12 py-6 bg-black text-white font-bold rounded-2xl shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                Start Free Trial
                <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/pricing"
                className="px-12 py-6 bg-white/20 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-xl"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FacebookPlatform;
