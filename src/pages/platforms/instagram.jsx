import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Camera, 
  Heart, 
  MessageCircle, 
  Zap,
  Calendar,
  BarChart3,
  Target,
  Users,
  Bot,
  Sparkles,
  Rocket,
  Shield,
  Instagram
} from 'lucide-react';

const InstagramPlatform = () => {
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
      icon: <Camera className="w-8 h-8" />,
      title: "Visual Content Creation",
      description: "Create stunning Instagram posts with AI-powered content suggestions. Generate captions, hashtags, and visual content ideas that drive engagement.",
      benefits: ["AI caption generation", "Hashtag optimization", "Visual content planning"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Schedule your Instagram posts, stories, and reels for optimal engagement. Our AI analyzes your audience activity to suggest perfect posting times.",
      benefits: ["Optimal timing analysis", "Story scheduling", "Reels automation"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Content Assistant",
      description: "Leverage AI to automatically generate Instagram posts, captions, and hashtags that align with your brand aesthetic and voice.",
      benefits: ["Automated post creation", "Brand voice consistency", "Hashtag suggestions"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Engagement Analytics",
      description: "Track your Instagram performance with comprehensive analytics. Monitor likes, comments, reach, impressions, and follower growth.",
      benefits: ["Engagement tracking", "Reach analysis", "Follower insights"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Management",
      description: "Manage your Instagram community with automated responses and engagement tools. Build stronger relationships with your followers.",
      benefits: ["Auto-responses", "Comment management", "DM automation"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Story & Reels",
      description: "Create and schedule Instagram Stories and Reels with AI assistance. Generate trending content that captures your audience's attention.",
      benefits: ["Story templates", "Reels optimization", "Trending content ideas"]
    }
  ];

  const stats = [
    { number: "1M+", label: "Instagram Posts Created" },
    { number: "150%", label: "Engagement Boost" },
    { number: "10K+", label: "Stories Scheduled" },
    { number: "24/7", label: "AI Monitoring" }
  ];

  return (
    <>
      <Head>
        <title>Instagram Management | SocialFlow - AI-Powered Instagram Marketing</title>
        <meta name="description" content="Grow your Instagram presence with AI-powered content creation, scheduling, and analytics. Create viral posts and stories with SocialFlow." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/platforms/instagram" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-orange-500/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20">
                <Instagram className="w-5 h-5 mr-3 text-pink-400" />
                <span className="text-white">Instagram Management</span>
                <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Create Instagram
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Content That Captivates</span>
              </h1>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Build stunning Instagram content, grow your following, and engage with your audience using our AI-powered Instagram management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Growing on Instagram
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
                Complete Instagram
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Management Solution</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                From visual content creation to story management, our AI tools help you build a stunning Instagram presence that drives engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                How SocialFlow Works
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">for Instagram</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-4xl mx-auto">
                Build your Instagram presence in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect Your Instagram Account</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely connect your Instagram business account to access our comprehensive content creation and analytics tools.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Create Visual Content</h3>
                <p className="text-white/70 leading-relaxed">
                  Use AI to generate compelling captions, hashtags, and content strategies that resonate with your target audience.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Publish & Engage</h3>
                <p className="text-white/70 leading-relaxed">
                  Schedule posts for optimal engagement times and track performance with detailed analytics to grow your following.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-orange-500/20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Ready to Instagram Like a Pro?
            </h2>
            <p className="text-2xl text-white/80 mb-8">
              Join creators and brands who use SocialFlow to build stunning Instagram presences and engaged communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link
                href="/register"
                className="group px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Start Creating
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

export default InstagramPlatform;
