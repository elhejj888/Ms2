import { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';
import PowerBIReport from '../components/PowerBIReport';
import RedditSection from '../components/RedditSection';
import FacebookSection from '../components/FacebookSection';
import InstagramSection from '../components/InstagramSection';
import XSection from '../components/XSection';
import TikTokSection from '../components/TikTokSection';
import PinterestSection from '../components/PinterestSection';
import YouTubeShortsSection from '../components/YouTubeShortsSection';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import LandingPage from '../components/LandingPage';
import Sidebar from '../components/Sidebar';

import { CheckCircle, AlertCircle, Loader2, Share2, Zap, Globe, Lock } from 'lucide-react';

// Use REACT_APP_ prefix for Create React App
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Home() {
  const [activeTab, setActiveTab] = useState('reddit');
  const [apiStatus, setApiStatus] = useState('checking');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { user, isAuthenticated, loading: userLoading, isInitialized } = useUser();
  
  // Note: Using DOM manipulation for form filling instead of refs for better compatibility

  useEffect(() => {
    // Only check API health once when component mounts
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
        
      case 'youtube':
        setInputValue('input[name="title"]', data.title);
        setTextareaValue('textarea[name="description"]', data.description);
        setInputValue('input[name="link"]', data.link);
        setSelectValue('select[name="privacyStatus"]', data.privacyStatus);
        break;

      case 'tiktok':
        setInputValue('input[name="title"]', data.title);
        setTextareaValue('textarea[name="description"]', data.description);
        setInputValue('input[name="link"]', data.link);
        setSelectValue('select[name="privacyStatus"]', data.privacyStatus);
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

  // Show landing page for logged-out users
  if (!isAuthenticated()) {
    return (
      <div className="min-h-screen">
        <LandingPage />
      </div>
    );
  }

  // Show dashboard for logged-in users
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Layout with Sidebar */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Container */}
          <main className="flex-1 overflow-y-auto">
            <div className="w-full">
              {/* Content with smooth transitions */}
              <div className="min-h-[600px]">
                {activeTab === 'reddit' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="reddit">
                    <RedditSection apiBaseUrl={API_BASE_URL} />
                  </div>
                )}
                {activeTab === 'facebook' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="facebook">
                    <FacebookSection apiBaseUrl={API_BASE_URL} />
                  </div>
                )}
                {activeTab === 'instagram' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="instagram">
                    <InstagramSection apiBaseUrl={API_BASE_URL} />
                  </div>
                )}
                {activeTab === 'x' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="x">
                    <XSection apiBaseUrl={API_BASE_URL} />
                  </div>
                )}
                {activeTab === 'pinterest' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="pinterest">
                    <PinterestSection apiBaseUrl={API_BASE_URL} />
                  </div>
                )}
                {activeTab === 'youtube' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="youtube">
                    <YouTubeShortsSection apiBaseUrl={API_BASE_URL} />
                  </div>
                )}

                {activeTab === 'tiktok' && (
                      <div className="animate-in slide-in-from-right-5 fade-in duration-300" data-platform="tiktok">
                        <TikTokSection apiBaseUrl={API_BASE_URL} />
                      </div>
                    )}
                    
                {activeTab === 'analytics' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300">
                    <AnalyticsDashboard />
                  </div>
                )}
                {activeTab === 'Business analytics' && (
                  <div className="animate-in slide-in-from-right-5 fade-in p-10 duration-300">
                    <PowerBIReport />
                  </div>
                )}
                
                {activeTab === 'admin-dashboard' && (
                  <div className="animate-in slide-in-from-right-5 fade-in duration-300">
                    {user?.role === 'admin' ? (
                      <AnalyticsDashboard />
                    ) : (
                      <div className="p-8 text-center text-red-600 font-semibold">You are not authorized to view the Admin Dashboard.</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* AI Chatbot */}
      {isAuthenticated() && (
        <AIChatbot 
          onFormFill={handleFormFill}
          onPostSubmit={handlePostSubmit}
        />
      )}

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