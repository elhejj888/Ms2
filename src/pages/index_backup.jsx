import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/router';

// Modern Components
import ModernHeader from '../components/ModernHeader';
import HeroSection from '../components/HeroSection';
import PlatformShowcase from '../components/PlatformShowcase';
import DashboardLayout from '../components/DashboardLayout';
import ModernFooter from '../components/ModernFooter';
import AIChatbot from '../components/AIChatbot';

// Use REACT_APP_ prefix for Create React App
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Home() {
  const [apiStatus, setApiStatus] = useState('checking');
  const { user, isAuthenticated, loading: userLoading, isInitialized } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized) {
      checkApiHealth();
    }
  }, [isInitialized]);

  const checkApiHealth = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      if (response.ok) {
        setApiStatus('connected');
      } else {
        setApiStatus('error');
      }
    } catch (error) {
      setApiStatus('error');
    }
  };

  // AI Chatbot callback functions
  const handleFormFill = (platformId, formType, data) => {
    console.log('Form fill requested:', { platformId, formType, data });
    
    // Switch to the appropriate platform tab
    setActiveTab(platformId);
    
    // Wait for tab switch, then fill form using DOM manipulation
    setTimeout(() => {
      fillFormFields(platformId, formType, data);
    }, 1500); // Increased timeout for better reliability
  };

  const fillFormFields = (platformId, formType, data) => {
    console.log('Filling form fields for platform:', platformId);
    const platformContainer = document.querySelector(`[data-platform="${platformId}"]`);
    
    if (!platformContainer) {
      console.error('Platform container not found:', platformId);
      return;
    }
    
    console.log('Platform container found:', platformContainer);

    const setInputValue = (selector, value) => {
      const input = platformContainer.querySelector(selector);
      if (input && value !== undefined && value !== null) {
        console.log('Setting input value:', selector, value);
        
        // Use React's way of setting values for controlled components
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeInputValueSetter.call(input, value);
        
        // Create and dispatch a proper React synthetic event
        const event = new Event('input', { bubbles: true });
        event.simulated = true;
        
        // Let React know the value changed
        input._valueTracker && input._valueTracker.setValue('');
        input.dispatchEvent(event);
        
        console.log('Input value set successfully:', input.value);
      } else {
        console.log('Input not found or value invalid:', selector, value);
      }
    };

    const setTextareaValue = (selector, value) => {
      const textarea = platformContainer.querySelector(selector);
      if (textarea && value !== undefined && value !== null) {
        console.log('Setting textarea value:', selector, value);
        
        // Use React's way of setting values for controlled components
        const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
        nativeTextAreaValueSetter.call(textarea, value);
        
        // Create and dispatch a proper React synthetic event
        const event = new Event('input', { bubbles: true });
        event.simulated = true;
        
        // Let React know the value changed
        textarea._valueTracker && textarea._valueTracker.setValue('');
        textarea.dispatchEvent(event);
        
        console.log('Textarea value set successfully:', textarea.value);
      } else {
        console.log('Textarea not found or value invalid:', selector, value);
      }
    };

    const setSelectValue = (selector, value) => {
      const select = platformContainer.querySelector(selector);
      if (select && value !== undefined && value !== null) {
        select.value = value;
        // Trigger React's onChange event
        const event = new Event('change', { bubbles: true });
        select.dispatchEvent(event);
      }
    };

    const setCheckboxValue = (selector, checked) => {
      const checkbox = platformContainer.querySelector(selector);
      if (checkbox && checked !== undefined && checked !== null) {
        checkbox.checked = checked;
        // Trigger React's onChange event
        const event = new Event('change', { bubbles: true });
        checkbox.dispatchEvent(event);
      }
    };

    // Platform-specific form filling
    switch (platformId) {
      case 'x':
        if (formType === 'threads') {
          // Click threads tab first
          const threadsTab = platformContainer.querySelector('[data-tab="threads"]');
          if (threadsTab) threadsTab.click();
          
          setTimeout(() => {
            // Fill thread tweets
            if (data.threadTweets && Array.isArray(data.threadTweets)) {
              data.threadTweets.forEach((tweet, index) => {
                setTextareaValue(`textarea[name="thread-${index}"], textarea[placeholder*="thread"]`, tweet);
              });
            }
            setInputValue('input[name="hashtags"]', data.hashtags);
          }, 200);
        } else if (formType === 'schedule') {
          // Click schedule tab first
          const scheduleTab = platformContainer.querySelector('[data-tab="schedule"]');
          if (scheduleTab) scheduleTab.click();
          
          setTimeout(() => {
            setTextareaValue('textarea[name="text"], textarea[placeholder*="tweet"]', data.text);
            setInputValue('input[name="hashtags"]', data.hashtags);
            setInputValue('input[name="scheduled_time"], input[type="datetime-local"]', data.scheduled_time);
          }, 200);
        } else {
          // Default compose tab
          const composeTab = platformContainer.querySelector('[data-tab="compose"]');
          if (composeTab) composeTab.click();
          
          setTimeout(() => {
            setTextareaValue('textarea[name="text"], textarea[placeholder*="tweet"]', data.text);
            setInputValue('input[name="hashtags"]', data.hashtags);
          }, 200);
        }
        break;
        
      case 'instagram':
        // Instagram only has caption field, no scheduling
        if (data.caption) {
          setTextareaValue('textarea[name="caption"], textarea[placeholder*="caption"]', data.caption);
        }
        console.log('Instagram form filled successfully with caption only');
        break;
        
      case 'facebook':
        setTextareaValue('textarea[name="message"], textarea[placeholder*="message"]', data.message);
        setInputValue('input[name="link"]', data.link);
        setInputValue('input[name="scheduled_time"], input[type="datetime-local"]', data.scheduled_time);
        break;
        
      case 'tiktok':
        setTextareaValue('textarea[name="caption"], textarea[placeholder*="caption"]', data.caption);
        setInputValue('input[name="hashtags"]', data.hashtags);
        setSelectValue('select[name="privacy_level"]', data.privacy_level);
        break;
        
      case 'reddit':
        setInputValue('input[name="subreddit_name"]', data.subreddit_name);
        setInputValue('input[name="title"]', data.title);
        setTextareaValue('textarea[name="content"]', data.content);
        setCheckboxValue('input[name="is_spoiler"]', data.is_spoiler);
        setCheckboxValue('input[name="nsfw"]', data.nsfw);
        break;
        
      case 'pinterest':
        setSelectValue('select[name="board_id"]', data.board_id);
        setInputValue('input[name="title"]', data.title);
        setTextareaValue('textarea[name="description"]', data.description);
        setInputValue('input[name="link"]', data.link);
        break;
    }
  };

  const handlePostSubmit = (platformId, formType) => {
    // Trigger the submit button click for the appropriate platform
    setTimeout(() => {
      const submitButton = document.querySelector(`[data-platform="${platformId}"] button[type="submit"]`);
      if (submitButton && !submitButton.disabled) {
        submitButton.click();
      }
    }, 1000);
  };

  const tabs = [
    {
      id: 'reddit',
      name: 'Reddit',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-600 hover:to-red-600',
      textColor: 'text-orange-500',
      bgColor: 'bg-gradient-to-r from-orange-500 to-red-500',
      description: 'Manage your Reddit posts, comments, and communities. Schedule posts, analyze engagement, and interact with your audience.'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      textColor: 'text-blue-600',
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
      description: 'Create and schedule Facebook posts, manage pages, respond to comments, and track performance metrics.'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      color: 'from-purple-500 via-pink-500 to-orange-400',
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      textColor: 'text-purple-500',
      bgColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400',
      description: 'Schedule Instagram posts and stories, analyze engagement, respond to comments, and manage your profile.'
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      icon: '𝕏',
      color: 'from-gray-800 to-black',
      hoverColor: 'hover:from-gray-900 hover:to-black',
      textColor: 'text-gray-800',
      bgColor: 'bg-gradient-to-r from-gray-800 to-black',
      description: 'Compose and schedule tweets, track mentions, analyze engagement, and manage your Twitter presence.'
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      textColor: 'text-red-500',
      bgColor: 'bg-gradient-to-r from-red-500 to-red-600',
      description: 'Create and manage pins, organize boards, track performance, and schedule content for your Pinterest account.'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎵',
      color: 'from-pink-500 to-blue-500',
      hoverColor: 'hover:from-pink-600 hover:to-blue-600',
      textColor: 'text-pink-500',
      bgColor: 'bg-gradient-to-r from-pink-500 to-blue-500',
      description: 'Upload and manage TikTok videos, track performance, and engage with your audience.'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: '📊',
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:from-indigo-600 hover:to-purple-700',
      textColor: 'text-indigo-500',
      bgColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      description: 'Comprehensive analytics dashboard with platform usage statistics, user engagement metrics, and detailed insights.'
    }
  ];

  // Show loading spinner while checking auth state
  if (userLoading || !isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {!isAuthenticated() && (
          <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg mr-4 transform hover:rotate-12 transition-transform duration-300">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Social Media Manager
              </h1>
            </div>
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-5 h-5 text-yellow-500 mr-2 animate-pulse" />
              <p className="text-xl text-gray-600 font-medium">
                Manage your social media posts from one powerful dashboard
              </p>
              <Globe className="w-5 h-5 text-blue-500 ml-2 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 mb-8">
              <Lock className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">Please login to access all features</span>
            </div>

            {/* Enhanced API Status */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              {apiStatus === 'checking' && (
                <>
                  <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                  <span className="text-sm font-medium text-gray-600">Connecting to API...</span>
                </>
              )}
              {apiStatus === 'connected' && (
                <>
                  <div className="relative">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <div className="absolute inset-0 w-5 h-5 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">API Connected</span>
                </>
              )}
              {apiStatus === 'error' && (
                <>
                  <div className="relative">
                    <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
                    <div className="absolute inset-0 w-5 h-5 bg-red-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-sm font-semibold text-red-600">API Disconnected</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Enhanced Tab Navigation - Always visible */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-xl scale-105`
                      : `text-gray-600 hover:text-white`
                  }`}
                >
                  {/* Background for inactive tabs */}
                  {activeTab !== tab.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  )}
                  
                  <div className="relative flex items-center space-x-3">
                    <div className="flex items-center justify-center">
                      {tab.icon}
                    </div>
                    <span className="font-bold">{tab.name}</span>
                  </div>

                  {/* Active tab indicator */}
                  {activeTab === tab.id && (
                    <>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
                      <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                    </>
                  )}

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Content Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:shadow-3xl transition-all duration-500">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Content with smooth transitions */}
              <div className="transition-all duration-500 ease-in-out">
                {isAuthenticated() ? (
                  <>
                    {activeTab === 'reddit' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500" data-platform="reddit">
                        <RedditSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    {activeTab === 'facebook' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500" data-platform="facebook">
                        <FacebookSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    {activeTab === 'instagram' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500" data-platform="instagram">
                        <InstagramSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    {activeTab === 'x' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500" data-platform="x">
                        <XSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    {activeTab === 'pinterest' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500" data-platform="pinterest">
                        <PinterestSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    {activeTab === 'tiktok' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500" data-platform="tiktok">
                        <TikTokSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    {activeTab === 'analytics' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-500">
                        <AnalyticsDashboard />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
                    <p className="text-gray-600 max-w-lg mx-auto mb-6">
                      {tabs.find(tab => tab.id === activeTab)?.description || 
                      'Please login to access this social media platform management.'}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="/login"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Login
                      </a>
                      <a
                        href="/register"
                        className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* AI Chatbot */}
        {isAuthenticated() && (
          <AIChatbot 
            onFormFill={handleFormFill}
            onPostSubmit={handlePostSubmit}
          />
        )}
      </div>

      <Footer />

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
        
        .slide-in-from-right-5 {
          animation: slide-in-from-right 0.5s ease-out;
        }
        
        @keyframes slide-in-from-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}