import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Twitter, 
  MessageCircle, 
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

const TwitterPlatform = () => {
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
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Smart Tweet Creation",
      description: "Create engaging tweets with AI assistance. Generate compelling content that drives retweets, likes, and meaningful conversations on X (Twitter).",
      benefits: ["AI tweet generation", "Thread creation", "Engagement optimization"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Strategic Scheduling",
      description: "Schedule tweets for optimal engagement times. Our AI analyzes your audience activity to suggest the best times to tweet for maximum reach.",
      benefits: ["Peak time analysis", "Thread scheduling", "Bulk tweet planning"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate tweets, replies, and threads that maintain your voice and drive engagement on the platform.",
      benefits: ["Automated tweeting", "Reply suggestions", "Voice consistency"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Tweet Analytics",
      description: "Track your Twitter performance with detailed analytics. Monitor impressions, engagement rates, follower growth, and tweet performance.",
      benefits: ["Impression tracking", "Engagement metrics", "Growth analysis"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hashtag Optimization",
      description: "Discover and use trending hashtags to increase your tweet visibility. Our AI suggests relevant hashtags for maximum reach.",
      benefits: ["Trending hashtags", "Hashtag analytics", "Reach optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trend Monitoring",
      description: "Stay ahead of Twitter trends with real-time monitoring. Identify viral opportunities and join conversations at the right moment.",
      benefits: ["Real-time trends", "Viral content detection", "Conversation insights"]
    }
  ];

  const stats = [
    { number: "2M+", label: "Tweets Created" },
    { number: "180%", label: "Engagement Boost" },
    { number: "50K+", label: "Threads Scheduled" },
    { number: "24/7", label: "Trend Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>X (Twitter) Management | SocialFlow - AI-Powered Twitter Marketing</title>
        <meta name="description" content="Grow your X (Twitter) presence with AI-powered tweet creation, scheduling, and analytics. Join trending conversations with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/twitter" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-blue-600/20 to-purple-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20">
                <Twitter className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-white">X (Twitter) Management</span>
                <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Master X (Twitter)
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Conversations</span>
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Create engaging tweets, build meaningful conversations, and grow your X (Twitter) presence with our AI-powered social media management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Tweeting Smarter
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
                Complete X (Twitter)
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Management Solution</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                From tweet creation to audience engagement, our AI tools help you build meaningful connections and grow your X (Twitter) presence.
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                How SocialFlow Works
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">for X (Twitter)</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Build your X (Twitter) presence in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your X (Twitter) Account</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your X (Twitter) account to access our comprehensive tweet management and analytics tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Engaging Tweets</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate compelling tweets, threads, and replies that spark conversations and drive engagement.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule & Analyze</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule tweets for optimal reach and track performance with detailed analytics to grow your following.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Viral on X?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join influencers and thought leaders who use SocialFlow to build their X (Twitter) presence and drive meaningful conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link
                href="/register"
                className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Building Your Audience
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

export default TwitterPlatform;
