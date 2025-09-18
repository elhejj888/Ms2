import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, Users, Globe, ChevronDown } from 'lucide-react';

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, and social media account information.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you use our services, including your interactions with social media platforms, posting schedules, and analytics data.'
        },
        {
          subtitle: 'Social Media Data',
          text: 'When you connect your social media accounts, we access and store necessary data to provide our services, including post content, engagement metrics, and account settings.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our social media management services, including automated posting, analytics, and AI-powered content suggestions.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you service-related notifications, updates, and marketing communications (with your consent).'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to improve our services, develop new features, and provide better user experiences.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Social Media Platforms',
          text: 'We share your content with connected social media platforms as necessary to provide our posting and management services.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We may share information with trusted third-party service providers who assist us in operating our platform, subject to confidentiality agreements.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law or to protect our rights, users, or the public from harm or illegal activities.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits.'
        },
        {
          subtitle: 'Access Controls',
          text: 'Access to your personal information is restricted to authorized personnel who need it to provide our services.'
        },
        {
          subtitle: 'Data Breach Response',
          text: 'In the event of a data breach, we will notify affected users and relevant authorities as required by applicable laws.'
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information through your account settings or by contacting us.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request a copy of your data in a portable format or request that we transfer your data to another service provider.'
        },
        {
          subtitle: 'Deletion',
          text: 'You can request deletion of your account and associated data. Some information may be retained for legal or legitimate business purposes.'
        }
      ]
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Global Operations',
          text: 'Our services operate globally, and your information may be transferred to and processed in countries other than your own.'
        },
        {
          subtitle: 'Adequate Protection',
          text: 'We ensure that international transfers are protected by appropriate safeguards, including standard contractual clauses and adequacy decisions.'
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy | Social Media Manager</title>
        <meta name="description" content="Learn how Social Media Manager protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/privacy" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20">
                <Shield className="w-4 h-4 mr-2 animate-pulse" />
                Privacy & Security
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                Privacy
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse">
                  Policy
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              
              <p className="text-lg text-blue-300 mb-20">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Table of
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Contents
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Navigate through our privacy policy sections
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sections.map((section, index) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white">
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">{section.title}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {section.content.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                        style={{ animationDelay: `${itemIndex * 0.2}s` }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Questions About
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  This Policy?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="mailto:privacy@yourdomain.com"
                  className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center text-lg"
                >
                  Contact Privacy Team
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  General Contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;