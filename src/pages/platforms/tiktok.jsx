import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Music, 
  TrendingUp, 
  Zap,
  Calendar,
  BarChart3,
  Target,
  Users,
  Bot,
  Sparkles,
  Rocket,
  Shield,
  Video,
  Hash
} from 'lucide-react';

const TikTokPlatform = () => {
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
      title: "Viral Content Creation",
      description: "Create engaging TikTok content with AI assistance. Generate video ideas, captions, and hashtags that capture attention and drive views.",
      benefits: ["AI content ideas", "Viral video concepts", "Trend-based suggestions"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Schedule your TikTok posts for optimal engagement times. Our AI analyzes TikTok activity patterns to maximize your video reach.",
      benefits: ["Peak time scheduling", "Bulk video planning", "Cross-account management"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate TikTok captions, hashtags, and video descriptions that boost discoverability and engagement.",
      benefits: ["Automated captions", "Hashtag optimization", "Description generation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track your TikTok performance with detailed analytics. Monitor views, likes, shares, comments, and follower growth patterns.",
      benefits: ["View tracking", "Engagement metrics", "Growth analytics"]
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Trending Hashtags",
      description: "Discover and use trending TikTok hashtags to increase video visibility. Our AI identifies viral hashtags for maximum reach.",
      benefits: ["Trending hashtag discovery", "Hashtag performance", "Viral potential analysis"]
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Trend Monitoring",
      description: "Stay ahead of TikTok trends with real-time monitoring. Identify viral sounds, challenges, and content opportunities before they peak.",
      benefits: ["Trend identification", "Sound discovery", "Challenge tracking"]
    }
  ];

  const stats = [
    { number: "300K+", label: "TikTok Videos Created" },
    { number: "250%", label: "View Increase" },
    { number: "100K+", label: "Hashtags Analyzed" },
    { number: "24/7", label: "Trend Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>TikTok Management | SocialFlow - AI-Powered TikTok Marketing</title>
        <meta name="description" content="Grow your TikTok presence with AI-powered content creation, scheduling, and analytics. Create viral videos with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/tiktok" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-red-600/20 to-pink-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20">
                <Play className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-white">TikTok Management</span>
                <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Go Viral on
                <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">TikTok</span>
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Create trending TikTok content, schedule videos for maximum reach, and grow your following with our AI-powered TikTok management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Creating Viral Content
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
                Complete TikTok
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Growth Solution</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                From viral content creation to trend analysis, our AI tools help you build a massive TikTok following and maximize your reach.
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                How SocialFlow Works
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">for TikTok</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Go viral on TikTok in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your TikTok Account</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your TikTok creator account to access our comprehensive video management and analytics tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Viral Content</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate trending captions, hashtags, and video ideas that align with current TikTok trends and your audience.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule & Grow</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule videos for optimal posting times and track views, likes, and follower growth to maximize your TikTok success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-purple-500/10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Ready to TikTok Your Way to Fame?
            </h2>
            <p className="text-2xl text-white/80 mb-8">
              Join creators and influencers who use SocialFlow to build massive TikTok followings and create viral content that captivates audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link
                href="/register"
                className="group px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Going Viral
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

export default TikTokPlatform;
