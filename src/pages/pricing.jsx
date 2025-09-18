import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  X,
  Zap,
  Users,
  Globe,
  MessageSquare,
  BarChart3,
  Calendar,
  Shield,
  Clock,
  Headphones,
  Star,
  Menu,
  ChevronDown,
  Sparkles,
  Crown,
  Building2,
  Rocket
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for getting started",
      popular: false,
      color: "from-gray-500 to-gray-700",
      borderColor: "border-gray-500/20",
      bgColor: "bg-white/5",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "3 Social Platforms",
        "10 Posts per month",
        "Basic Analytics",
        "AI Content Suggestions",
        "Community Support"
      ],
      limitations: [
        "No auto-scheduling",
        "Limited analytics",
        "No team features"
      ]
    },
    {
      name: "Pro",
      price: { monthly: 29, annual: 24 },
      description: "For serious content creators",
      popular: true,
      color: "from-blue-500 to-purple-500",
      borderColor: "border-blue-500/50",
      bgColor: "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
      icon: <Rocket className="w-6 h-6" />,
      features: [
        "All 6 Platforms",
        "Unlimited Posts",
        "Advanced Analytics",
        "AI Content Creation",
        "Auto-scheduling",
        "Priority Support",
        "Custom Branding",
        "Content Calendar",
        "Performance Insights"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: { monthly: 99, annual: 79 },
      description: "For teams and agencies",
      popular: false,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/20",
      bgColor: "bg-white/5",
      icon: <Building2 className="w-6 h-6" />,
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "White-label Solution",
        "Custom Integrations",
        "Dedicated Support",
        "Advanced Security",
        "API Access",
        "Custom Reporting",
        "Onboarding Support"
      ],
      limitations: []
    }
  ];

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Content Creation",
      description: "Generate engaging posts with our advanced AI chatbot"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Optimize posting times for maximum engagement"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track performance across all platforms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security for your content"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Get help whenever you need it"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, we offer a 14-day free trial for both Pro and Enterprise plans. No credit card required."
    },
    {
      question: "What platforms do you support?",
      answer: "We support Reddit, Instagram, Facebook, X (Twitter), Pinterest, and TikTok. More platforms are coming soon."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your data. We're SOC2 compliant and regularly audited."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "The Pro plan has everything we need. The AI content creation alone has saved us 10+ hours per week.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Agency Owner",
      company: "Digital Growth Co.",
      content: "Enterprise features like white-labeling and team collaboration have transformed how we serve clients.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
                <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20">
              <Crown className="w-4 h-4 mr-2" />
              Simple, Transparent Pricing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Choose your
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                perfect plan
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Start free and scale as you grow. All plans include our core features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-1 border border-white/20">
                <div className="flex items-center">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      !isAnnual 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                      isAnnual 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Annual
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 border transition-all duration-500 transform hover:scale-105 ${
                  plan.popular 
                    ? `${plan.bgColor} ${plan.borderColor} shadow-2xl shadow-blue-500/20 scale-105` 
                    : `${plan.bgColor} ${plan.borderColor} hover:bg-white/10`
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-black text-white">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{isAnnual ? 'month' : 'month'}
                    </span>
                  </div>
                  
                  {isAnnual && plan.price.monthly > 0 && (
                    <div className="text-sm text-green-400 font-medium">
                      Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center text-gray-500">
                      <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/register" 
                  className={`w-full block text-center px-8 py-4 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Frequently asked
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                questions
              </span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

            <Footer />
    </div>
  );
};

export default PricingPage;