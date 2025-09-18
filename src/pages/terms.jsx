import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Scale, AlertTriangle, Users, Zap, Globe, ChevronDown } from 'lucide-react';

const TermsOfService = () => {
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
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using Social Media Manager, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Updates to Terms',
          text: 'We reserve the right to update these terms at any time. We will notify users of significant changes via email or through our platform. Your continued use of the service constitutes acceptance of the updated terms.'
        }
      ]
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: <Zap className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Platform Overview',
          text: 'Social Media Manager is a comprehensive platform that allows users to manage multiple social media accounts, schedule posts, analyze performance, and automate content creation across various platforms including Reddit, Facebook, Instagram, X (Twitter), Pinterest, and TikTok.'
        },
        {
          subtitle: 'AI-Powered Features',
          text: 'Our service includes AI-powered content generation, automated posting, analytics dashboards, and intelligent scheduling features designed to streamline your social media management workflow.'
        },
        {
          subtitle: 'Service Availability',
          text: 'We strive to maintain 99.9% uptime, but cannot guarantee uninterrupted service. Scheduled maintenance and updates may temporarily affect service availability.'
        }
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.'
        },
        {
          subtitle: 'Content Compliance',
          text: 'You are solely responsible for the content you create, schedule, and publish through our platform. You must ensure all content complies with applicable laws and the terms of service of connected social media platforms.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not use our service for spam, harassment, illegal activities, or to violate the terms of service of connected social media platforms. We reserve the right to suspend accounts that engage in prohibited activities.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Scale className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Our Rights',
          text: 'Social Media Manager and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.'
        },
        {
          subtitle: 'User Content',
          text: 'You retain ownership of content you create and upload to our platform. By using our service, you grant us a limited license to process, store, and distribute your content as necessary to provide our services.'
        },
        {
          subtitle: 'Third-Party Content',
          text: 'Our platform may include content from third parties. We do not claim ownership of such content and respect the intellectual property rights of others.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment and Billing',
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Subscription Plans',
          text: 'We offer various subscription plans with different features and usage limits. Pricing and plan details are available on our website and may be updated from time to time.'
        },
        {
          subtitle: 'Billing Cycle',
          text: 'Subscription fees are billed in advance on a monthly or annual basis, depending on your chosen plan. Payments are processed automatically using your selected payment method.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'We offer a 30-day money-back guarantee for new subscribers. Refund requests must be submitted within 30 days of initial subscription. Partial refunds for unused portions of subscription periods are not available.'
        },
        {
          subtitle: 'Cancellation',
          text: 'You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period, and you will retain access to paid features until then.'
        }
      ]
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Limitations',
          text: 'Our service is provided "as is" without warranties of any kind. We do not guarantee that the service will meet your specific requirements or that it will be uninterrupted, timely, secure, or error-free.'
        },
        {
          subtitle: 'Liability Cap',
          text: 'In no event shall Social Media Manager be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for any damages arising from or related to this agreement shall not exceed the amount you paid us in the twelve (12) months preceding the event giving rise to the liability.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Termination by User',
          text: 'You may terminate your account at any time by canceling your subscription and deleting your account through the platform settings.'
        },
        {
          subtitle: 'Termination by Us',
          text: 'We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, your right to use the service will cease immediately. We may delete your account data after a reasonable period, subject to applicable data retention requirements.'
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Terms of Service | Social Media Manager</title>
        <meta name="description" content="Read our Terms of Service to understand your rights and responsibilities when using Social Media Manager platform." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/terms" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20">
                <Scale className="w-4 h-4 mr-2 animate-pulse" />
                Legal Terms
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                Terms of
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse">
                  Service
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                These terms govern your use of Social Media Manager and outline our mutual rights and responsibilities.
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
                Navigate through our terms of service sections
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

            {/* Important Notice */}
            <div className="mt-32 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-12">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Important Notice
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    These terms constitute a legally binding agreement between you and Social Media Manager. 
                    Please read them carefully and contact us if you have any questions before using our service.
                  </p>
                  <p className="text-gray-400 text-lg">
                    By using our service, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Questions About
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  These Terms?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                If you have any questions about these Terms of Service or need clarification on any provision, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="mailto:legal@yourdomain.com"
                  className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center text-lg"
                >
                  Contact Legal Team
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

export default TermsOfService;