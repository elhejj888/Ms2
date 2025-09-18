import { useState, useEffect } from 'react';
import { Send, Trash2, X, Check, Twitter, Image, AlertTriangle, Loader2, Clock, Eye, ExternalLink, MessageCircle, Heart, Repeat, Hash, Calendar, BarChart3, TrendingUp, Plus, Minus, Rss, Bell, BellOff } from 'lucide-react';
import { saveConnectionStatus, getConnectionStatus, clearConnectionStatus, createAuthHeaders, getCurrentUserId } from '../utils/connectionStatus';
import { useRssPolling } from '../utils/useRssPolling';
import { PLATFORM_RSS_FEEDS } from '../utils/platformRssFeeds';

export default function XSection({ apiBaseUrl }) {
  const [formData, setFormData] = useState({
    text: '',
    reply_to_tweet_id: '',
    hashtags: '',
    scheduled_time: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userTweets, setUserTweets] = useState([]);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const [credentialsValid, setCredentialsValid] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState({
    connected: false,
    message: 'Not connected to X (Twitter)'
  });
  
  // New state variables for extended features
  const [activeTab, setActiveTab] = useState('compose'); // compose, threads, schedule, insights, articles
  const [threadTweets, setThreadTweets] = useState(['']);
  const [scheduledPosts, setScheduledPosts] = useState([]);
  const [insights, setInsights] = useState(null);
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [loadingTrending, setLoadingTrending] = useState(false);
  
  // RSS Article Detection state
  const [rssEnabled, setRssEnabled] = useState(false);
  const [newArticleCount, setNewArticleCount] = useState(0);
  const [detectedArticles, setDetectedArticles] = useState([]);
  const [customRssUrl, setCustomRssUrl] = useState('');

  // RSS polling hook - only active when enabled and have custom URL or default feeds
  const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.x[0];
  const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(
    rssEnabled && rssUrl ? rssUrl : null, // Only poll when enabled and URL exists
    {
      intervalMs: 60000, // Check every minute
      onNewArticles: (newArticles) => {
        if (rssEnabled) {
          setNewArticleCount(prev => prev + newArticles.length);
          setDetectedArticles(prev => [...newArticles, ...prev].slice(0, 50)); // Keep latest 50
        }
      }
    }
  );

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      // Load connection status from cookies first
      const savedStatus = getConnectionStatus('x', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
        setCredentialsValid(savedStatus.connected);
      }
    }
    checkConnectionStatus();
  }, []);

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      const savedStatus = getConnectionStatus('x', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
        setCredentialsValid(savedStatus.connected);
      }
    }
  }, [getCurrentUserId()]);

  useEffect(() => {
    if (credentialsValid) {
      fetchUserTweets();
      if (activeTab === 'insights') {
        fetchInsights();
      }
      if (activeTab === 'compose' || activeTab === 'threads') {
        fetchTrendingHashtags();
      }
    }
  }, [credentialsValid, activeTab]);

  // Handle RSS article selection for auto-filling
  const handleArticleSelect = (article) => {
    const tweetText = `${article.title} ${article.link}`;
    setFormData(prev => ({
      ...prev,
      text: tweetText.slice(0, 280) // Twitter character limit
    }));
    setActiveTab('compose');
    setNewArticleCount(0); // Clear notification
  };

  // Toggle RSS monitoring
  const toggleRssMonitoring = () => {
    setRssEnabled(!rssEnabled);
    if (!rssEnabled) {
      setNewArticleCount(0);
    }
  };

  const checkConnectionStatus = async () => {
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/x/connection-status`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setConnectionStatus(data.status);
        setCredentialsValid(data.status.connected);
        
        // Save to cookies for persistence
        const userId = getCurrentUserId();
        if (userId) {
          saveConnectionStatus('x', userId, data.status);
        }
      }
    } catch (error) {
      console.error('Error checking connection status:', error);
      setCredentialsValid(false);
    }
  };

  const validateCredentials = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/x/validate-credentials`);
      const data = await response.json();
      setCredentialsValid(data.success && data.is_valid);
    } catch (error) {
      setCredentialsValid(false);
    }
  };

  const handleConnectX = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });

    try {
      const headers = createAuthHeaders();

      // Step 1: Explicitly start OAuth flow (opens browser and completes locally)
      const startResp = await fetch(`${apiBaseUrl}/api/x/auth/start`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ force_login: true })
      });
      const startData = await startResp.json();

      if (!startResp.ok || !startData.success) {
        setMessage({ type: 'error', text: startData.error || startData.message || 'Failed to start X (Twitter) authentication' });
        setConnecting(false);
        return;
      }

      // Step 2: After successful OAuth, finalize connection in backend (DB save, exclusivity checks)
      // Retry on 429 (rate limited)
      let response, data;
      for (let attempt = 0; attempt < 3; attempt++) {
        response = await fetch(`${apiBaseUrl}/api/x/connect`, {
          method: 'POST',
          headers
        });
        // 204/empty safety
        try { data = await response.json(); } catch { data = {}; }
        if (response.status !== 429) break;
        
        const retryDelay = (attempt + 1) * 3000; // 3s, 6s, 9s
        console.log(`X rate limited, retrying in ${retryDelay/1000}s... (attempt ${attempt + 1}/3)`);
        setMessage({ 
          type: 'info', 
          text: `X is rate limiting. Please wait, retrying in ${retryDelay/1000}s... (${attempt + 1}/3)` 
        });
        await new Promise(r => setTimeout(r, retryDelay));
      }
      
      // Handle final response after retries
      if (response.status === 429) {
        setMessage({ 
          type: 'error', 
          text: 'X is temporarily rate limiting us. Please try connecting again in a few minutes.' 
        });
        setConnecting(false);
        return;
      }
      
      if (!response.ok) {
        setMessage({ 
          type: 'error', 
          text: data.error || 'Failed to connect to X (Twitter). Please try again.'
        });
        setConnecting(false);
        return;
      }
      
      // Success case - only if we have a successful response
      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Successfully connected to X (Twitter)!' });
        
        const newStatus = {
          connected: true,
          username: data.username || 'Connected',
          message: 'Connected to X (Twitter)'
        };
        
        setConnectionStatus(newStatus);
        setCredentialsValid(true);
        
        // Save to cookies for persistence
        const userId = getCurrentUserId();
        if (userId) {
          saveConnectionStatus('x', userId, newStatus);
        }
        
        // Also fetch tweets to populate the UI
        setTimeout(() => {
          fetchUserTweets();
        }, 1000);
      } else {
        // Handle account exclusivity error (409 status)
        if (response.status === 409 || data.account_unavailable) {
          const errorMsg = data.connected_username 
            ? `This X (Twitter) account (@${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different X account.`
            : 'This X (Twitter) account is already connected to another user. Please disconnect from that account first or use a different X account.';
          setMessage({ type: 'error', text: errorMsg });
        } else {
          setMessage({ type: 'error', text: data.error || 'Failed to connect to X (Twitter)' });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectX = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });

    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/x/disconnect`, {
        method: 'POST',
        headers
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        
        const newStatus = {
          connected: false,
          username: null,
          message: 'Not connected to X (Twitter)'
        };
        
        setConnectionStatus(newStatus);
        setCredentialsValid(false);
        setUserTweets([]);
        
        // Clear cookies
        const userId = getCurrentUserId();
        if (userId) {
          clearConnectionStatus('x', userId);
        }
        
        // Clear form data
        setFormData({
          text: '',
          reply_to_tweet_id: '',
          hashtags: '',
          scheduled_time: ''
        });
        setSelectedImage(null);
        setImagePreview(null);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to disconnect from X (Twitter)' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCustomRssChange = (e) => {
    setCustomRssUrl(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Store form data in Node.js backend
  const storeFormData = async (formData, status = 'posted', errorMessage = null) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
      const userId = userData.id;
      const userEmail = userData.email;
      
      // Validate required fields
      if (!userId || !userEmail) {
        console.error('User data not available for X post storage');
        return;
      }

      const dataPayload = {
        user_id: userId,
        user_email: userEmail,
        text: `[COMPOSE] ${formData.text || ''}`,
        hashtags: formData.hashtags || '',
        status: status,
        error_message: errorMessage,
        reply_to_tweet_id: formData.reply_to_tweet_id || null
      };

      console.log('X (Twitter) data payload being sent:', dataPayload);
      
      const response = await fetch('http://localhost:3001/api/data/x', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataPayload)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('X (Twitter) storage error:', response.status, errorData);
      } else {
        console.log('X (Twitter) data stored successfully');
      }
    } catch (error) {
      console.error('Error storing X form data:', error);
    }
  };

  // Store thread data in Node.js backend
  const storeThreadData = async (threadTweets, hashtags, status = 'posted', threadInfo = null, errorMessage = null) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
      const userId = userData.id;
      const userEmail = userData.email;
      
      // Validate required fields
      if (!userId || !userEmail) {
        console.error('User data not available for X thread storage');
        return;
      }

      // Store each thread tweet as a separate record
      for (let i = 0; i < threadTweets.length; i++) {
        const tweetText = threadTweets[i];
        const dataPayload = {
          user_id: userId,
          user_email: userEmail,
          text: `[THREAD ${i + 1}/${threadTweets.length}] ${tweetText}`,
          hashtags: hashtags || '',
          thread_tweets: JSON.stringify(threadTweets),
          is_thread: true,
          thread_position: i + 1,
          platform_post_id: threadInfo?.tweets?.[i]?.tweet_id || null,
          status: status,
          error_message: errorMessage,
          reply_to_tweet_id: null
        };

        console.log(`X (Twitter) thread tweet ${i + 1} data payload being sent:`, dataPayload);
        
        const response = await fetch('http://localhost:3001/api/data/x', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataPayload)
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error(`X (Twitter) thread tweet ${i + 1} storage error:`, response.status, errorData);
        } else {
          console.log(`X (Twitter) thread tweet ${i + 1} data stored successfully`);
        }
      }
    } catch (error) {
      console.error('Error storing X thread data:', error);
    }
  };

  // Store scheduled tweet data in Node.js backend
  const storeScheduledData = async (formData, status = 'scheduled', scheduledInfo = null, errorMessage = null) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
      const userId = userData.id;
      const userEmail = userData.email;
      
      // Validate required fields
      if (!userId || !userEmail) {
        console.error('User data not available for X scheduled tweet storage');
        return;
      }

      const dataPayload = {
        user_id: userId,
        user_email: userEmail,
        text: `[SCHEDULED] ${formData.text || ''}`,
        hashtags: formData.hashtags || '',
        scheduled_time: formData.scheduled_time,
        platform_post_id: scheduledInfo?.id || null,
        status: status,
        error_message: errorMessage,
        reply_to_tweet_id: null
      };

      console.log('X (Twitter) scheduled tweet data payload being sent:', dataPayload);
      
      const response = await fetch('http://localhost:3001/api/data/x', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataPayload)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('X (Twitter) scheduled tweet storage error:', response.status, errorData);
      } else {
        console.log('X (Twitter) scheduled tweet data stored successfully');
      }
    } catch (error) {
      console.error('Error storing X scheduled tweet data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const payload = { ...formData };
      
      if (selectedImage) {
        payload.image_base64 = imagePreview;
      }

      const response = await fetch(`${apiBaseUrl}/api/x/create-tweet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (data.success) {
        // Store successful post data
        await storeFormData(formData, 'posted');
        
        setMessage({ type: 'success', text: 'Tweet posted successfully!' });
        setFormData({
          text: '',
          reply_to_tweet_id: '',
          hashtags: '',
          scheduled_time: ''
        });
        setSelectedImage(null);
        setImagePreview(null);
        fetchUserTweets();
      } else {
        // Store failed post data with error
        await storeFormData(formData, 'failed', data.error || 'Failed to post tweet');
        
        setMessage({ type: 'error', text: data.error || 'Failed to post tweet' });
      }
    } catch (error) {
      // Store failed post data with network error
      await storeFormData(formData, 'failed', 'Network error occurred');
      
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const fetchUserTweets = async () => {
    setLoadingTweets(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/x/tweets?limit=10`);
      const data = await response.json();
      if (data.success) {
        setUserTweets(data.tweets);
      }
    } catch (error) {
      console.error('Error fetching tweets:', error);
    } finally {
      setLoadingTweets(false);
    }
  };

  const handleDeleteClick = (tweetId) => {
    setDeleteConfirmation(tweetId);
  };

  const confirmDelete = async () => {
    const tweetId = deleteConfirmation;
    setDeleteConfirmation(null);
    
    try {
      const response = await fetch(`${apiBaseUrl}/api/x/tweet/${tweetId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Tweet deleted successfully!' });
        fetchUserTweets();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete tweet' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting tweet' });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  // New functions for extended features
  const fetchInsights = async () => {
    setLoadingInsights(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/x/insights/summary?days=30`);
      const data = await response.json();
      if (data.success) {
        setInsights(data.summary);
      }
    } catch (error) {
      console.error('Error fetching insights:', error);
    } finally {
      setLoadingInsights(false);
    }
  };

  const fetchTrendingHashtags = async () => {
    setLoadingTrending(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/x/hashtags/trending`);
      const data = await response.json();
      if (data.success) {
        setTrendingHashtags(data.trending_hashtags || []);
      }
    } catch (error) {
      console.error('Error fetching trending hashtags:', error);
    } finally {
      setLoadingTrending(false);
    }
  };

  const handleThreadTweetChange = (index, value) => {
    const newThreadTweets = [...threadTweets];
    newThreadTweets[index] = value;
    setThreadTweets(newThreadTweets);
  };

  const addThreadTweet = () => {
    setThreadTweets([...threadTweets, '']);
  };

  const removeThreadTweet = (index) => {
    if (threadTweets.length > 1) {
      const newThreadTweets = threadTweets.filter((_, i) => i !== index);
      setThreadTweets(newThreadTweets);
    }
  };

  const handleCreateThread = async () => {
    if (threadTweets.some(tweet => tweet.trim() === '')) {
      setMessage({ type: 'error', text: 'All thread tweets must have content' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/x/create-thread`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          thread_tweets: threadTweets.filter(tweet => tweet.trim() !== ''),
          hashtags: formData.hashtags
        })
      });

      const data = await response.json();

      if (data.success) {
        // Store thread data in Node.js backend
        await storeThreadData(threadTweets.filter(tweet => tweet.trim() !== ''), formData.hashtags, 'posted', data.thread);
        
        setMessage({ type: 'success', text: `Thread created successfully with ${data.thread.total_tweets} tweets!` });
        setThreadTweets(['']);
        setFormData(prev => ({ ...prev, hashtags: '' }));
        fetchUserTweets();
      } else {
        // Store failed thread data
        await storeThreadData(threadTweets.filter(tweet => tweet.trim() !== ''), formData.hashtags, 'failed', null, data.error || 'Failed to create thread');
        
        setMessage({ type: 'error', text: data.error || 'Failed to create thread' });
      }
    } catch (error) {
      // Store failed thread data with network error
      await storeThreadData(threadTweets.filter(tweet => tweet.trim() !== ''), formData.hashtags, 'failed', null, 'Network error occurred');
      
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const handleScheduleTweet = async () => {
    if (!formData.text.trim()) {
      setMessage({ type: 'error', text: 'Tweet text is required' });
      return;
    }

    if (!formData.scheduled_time) {
      setMessage({ type: 'error', text: 'Scheduled time is required' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/x/schedule-tweet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: formData.text,
          scheduled_time: formData.scheduled_time,
          hashtags: formData.hashtags,
          image_base64: selectedImage
        })
      });

      const data = await response.json();

      if (data.success) {
        // Store scheduled tweet data in Node.js backend
        await storeScheduledData(formData, 'scheduled', data.scheduled_tweet);
        
        setMessage({ type: 'success', text: 'Tweet scheduled successfully!' });
        setFormData(prev => ({ ...prev, text: '', hashtags: '', scheduled_time: '' }));
        setSelectedImage(null);
        setImagePreview(null);
      } else {
        // Store failed scheduled tweet data
        await storeScheduledData(formData, 'failed', null, data.error || 'Failed to schedule tweet');
        
        setMessage({ type: 'error', text: data.error || 'Failed to schedule tweet' });
      }
    } catch (error) {
      // Store failed scheduled tweet data with network error
      await storeScheduledData(formData, 'failed', null, 'Network error occurred');
      
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const addHashtag = (hashtag) => {
    const currentHashtags = formData.hashtags;
    const hashtagToAdd = hashtag.startsWith('#') ? hashtag : `#${hashtag}`;
    
    if (!currentHashtags.includes(hashtagToAdd)) {
      const newHashtags = currentHashtags ? `${currentHashtags} ${hashtagToAdd}` : hashtagToAdd;
      setFormData(prev => ({ ...prev, hashtags: newHashtags }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Delete Confirmation Modal */}
        {deleteConfirmation && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Tweet</h3>
              <p className="text-gray-600 text-center mb-6">Are you sure you want to delete this tweet? This action cannot be undone.</p>
              <div className="flex space-x-3">
                <button
                  onClick={confirmDelete}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}



        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Twitter className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">X (Twitter)</h1>
                  <p className="text-cyan-100 text-lg">Share your thoughts with the world</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  connectionStatus.connected 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {connectionStatus.message}
                </div>
                {credentialsValid && (
                  <button
                    onClick={handleDisconnectX}
                    disabled={connecting}
                    className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                  >
                    {connecting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Disconnecting...
                      </>
                    ) : (
                      <>
                        <X className="w-4 h-4 mr-2" />
                        Disconnect
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
            
            {/* Tab Navigation */}
            {credentialsValid && (
              <div className="mt-6 flex space-x-2">
                {[
                  { id: 'compose', label: 'Compose', icon: Send },
                  { id: 'threads', label: 'Threads', icon: Hash },
                  { id: 'schedule', label: 'Schedule', icon: Calendar },
                  { id: 'insights', label: 'Insights', icon: BarChart3 },
                  { id: 'articles', label: 'Articles', icon: Rss, badge: newArticleCount > 0 ? newArticleCount : null }
                ].map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-white text-cyan-600 shadow-lg'
                          : 'text-cyan-100 hover:text-white hover:bg-cyan-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
            
            {/* RSS Monitoring Toggle */}
            {credentialsValid && (
              <div className="mt-4 flex items-center justify-between bg-cyan-600/20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Rss className="w-5 h-5 text-cyan-200" />
                  <div>
                    <h3 className="text-white font-medium">Article Detection</h3>
                    <p className="text-cyan-200 text-sm">
                      {rssEnabled ? `Monitoring ${rssUrl ? 'custom feed' : 'default feeds'}` : 'Monitor RSS feeds for new articles'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleRssMonitoring}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    rssEnabled
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                >
                  {rssEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                  <span>{rssEnabled ? 'Enabled' : 'Disabled'}</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Articles Tab Content */}
          {credentialsValid && activeTab === 'articles' && (
            <div className="p-8 border-t border-cyan-200">
              <div className="space-y-6">
                {/* Custom RSS URL Input */}
                <div className="bg-white/20 rounded-xl p-4 border border-white/10">
                  <label className="block text-gray-900 font-semibold mb-2">Custom RSS Feed URL</label>
                  <input
                    type="url"
                    value={customRssUrl}
                    onChange={handleCustomRssChange}
                    placeholder="https://example.com/feed.rss (optional)"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                  />
                  <p className="text-gray-700 text-sm mt-1">
                    Leave empty to use default Twitter-related feeds
                  </p>
                </div>
                
                {/* RSS Status */}
                <div className="bg-white/20 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-900 font-semibold">Feed Status</h3>
                    {lastChecked && (
                      <span className="text-gray-600 text-sm">
                        Last checked: {new Date(lastChecked).toLocaleTimeString()}
                      </span>
                    )}
                  </div>
                  {rssError && (
                    <div className="text-red-600 text-sm mb-2 bg-red-50 rounded p-2">
                      Error: {rssError}
                    </div>
                  )}
                  <div className="text-gray-700 text-sm">
                    {rssEnabled ? (
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Monitoring active - {rssArticles?.length || 0} articles found
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                        Monitoring disabled
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Detected Articles */}
                {rssEnabled && detectedArticles.length > 0 && (
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-white font-medium mb-4">Recent Articles</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {detectedArticles.map((article, index) => (
                        <div
                          key={index}
                          className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer border border-white/10 hover:border-white/20"
                          onClick={() => handleArticleSelect(article)}
                        >
                          <h4 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-gray-700 text-xs mb-3 line-clamp-3 leading-relaxed">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-xs">
                              {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : 'No date'}
                            </span>
                            <button className="text-white hover:text-cyan-200 text-xs px-3 py-1 bg-cyan-500/50 hover:bg-cyan-500/70 rounded-full font-medium transition-colors">
                              Use for Tweet
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {rssEnabled && detectedArticles.length === 0 && (
                  <div className="bg-white/10 rounded-xl p-8 text-center">
                    <Rss className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                    <h3 className="text-white font-medium mb-2">No Articles Detected Yet</h3>
                    <p className="text-cyan-200 text-sm">
                      {rssError ? 'Check your RSS feed URL and try again.' : 'Monitoring for new articles...'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Connection Status and Actions */}
          {!credentialsValid && (
            <div className="p-8 border-t border-cyan-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mr-4">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      X (Twitter) Connection
                    </h2>
                    <p className="text-cyan-100 text-sm">
                      {connectionStatus.message}
                    </p>
                    {rssEnabled && (
                      <div className="flex items-center mt-1">
                        <Rss className="w-3 h-3 text-cyan-300 mr-1" />
                        <span className="text-cyan-300 text-xs">Article detection active</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {connectionStatus.connected ? (
                    <button
                      onClick={handleDisconnectX}
                      disabled={connecting}
                      className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                    >
                      {connecting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Disconnecting...
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 mr-2" />
                          Disconnect
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={handleConnectX}
                      disabled={connecting}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                    >
                      {connecting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        <>
                          <Twitter className="w-5 h-5 mr-2" />
                          Connect Account
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabbed Content */}
        {credentialsValid && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700">
            {/* Compose Tab */}
            {activeTab === 'compose' && (
              <div>
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Compose Tweet
                  </h2>
                </div>

                {message.text && (
                  <div className={`mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${
                    message.type === 'success' 
                      ? 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200'
                  }`}>
                    <div className="flex items-center">
                      {message.type === 'success' ? (
                        <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 mr-2 flex-shrink-0" />
                      )}
                      <span className="font-medium">{message.text}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                Tweet Text
              </label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
                placeholder="What's happening?"
                required
                maxLength={280}
              />
              <div className={`text-xs text-right mt-2 font-medium ${
                formData.text.length > 260 ? 'text-red-500' : 
                formData.text.length > 240 ? 'text-amber-500' : 
                'text-gray-500'
              }`}>
                {formData.text.length}/280 characters
              </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <Hash className="w-4 h-4 mr-2 text-cyan-500" />
                      Hashtags (Optional)
                    </label>
                    <input
                      type="text"
                      name="hashtags"
                      value={formData.hashtags}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                      placeholder="#hashtag1 #hashtag2"
                    />
                    {/* Trending Hashtags */}
                    {trendingHashtags.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-600 mb-2">Trending:</p>
                        <div className="flex flex-wrap gap-2">
                          {trendingHashtags.slice(0, 5).map((tag, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => addHashtag(tag.hashtag)}
                              className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm hover:bg-cyan-100 transition-colors"
                            >
                              {tag.hashtag}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <Image className="w-4 h-4 mr-2 text-cyan-500" />
                      Image (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                      />
                    </div>
                    {imagePreview && (
                      <div className="mt-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="relative inline-block">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2 text-cyan-500" />
                Reply to Tweet ID (Optional)
              </label>
              <input
                type="text"
                name="reply_to_tweet_id"
                value={formData.reply_to_tweet_id}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                placeholder="Enter tweet ID to reply to"
              />
            </div>

            <button
              type="submit"
              disabled={loading || credentialsValid === false}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Tweet
                </>
              )}
                    </button>
                  </form>
                </div>
              )}

              {/* Threads Tab */}
              {activeTab === 'threads' && (
                <div>
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg mr-4">
                      <Hash className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Create Thread
                    </h2>
                  </div>

                  {message.text && (
                    <div className={`mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${
                      message.type === 'success' 
                        ? 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200'
                    }`}>
                      <div className="flex items-center">
                        {message.type === 'success' ? (
                          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 mr-2 flex-shrink-0" />
                        )}
                        <span className="font-medium">{message.text}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {threadTweets.map((tweet, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-semibold text-gray-700 flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                            Tweet {index + 1}
                          </label>
                          {threadTweets.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeThreadTweet(index)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <textarea
                          value={tweet}
                          onChange={(e) => handleThreadTweetChange(index, e.target.value)}
                          rows={3}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
                          placeholder={`Tweet ${index + 1} content...`}
                          maxLength={280}
                        />
                        <div className={`text-xs text-right mt-1 font-medium ${
                          tweet.length > 260 ? 'text-red-500' : 
                          tweet.length > 240 ? 'text-amber-500' : 
                          'text-gray-500'
                        }`}>
                          {tweet.length}/280 characters
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addThreadTweet}
                      className="w-full py-3 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Add Tweet to Thread
                    </button>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Hash className="w-4 h-4 mr-2 text-purple-500" />
                        Hashtags (Optional)
                      </label>
                      <input
                        type="text"
                        name="hashtags"
                        value={formData.hashtags}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                        placeholder="#hashtag1 #hashtag2"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleCreateThread}
                      disabled={loading || threadTweets.some(tweet => tweet.trim() === '')}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                          Creating Thread...
                        </>
                      ) : (
                        <>
                          <Hash className="w-6 h-6 mr-3" />
                          Create Thread
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Schedule Tab */}
              {activeTab === 'schedule' && (
                <div>
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg mr-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Schedule Tweet
                    </h2>
                  </div>

                  {message.text && (
                    <div className={`mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${
                      message.type === 'success' 
                        ? 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200'
                    }`}>
                      <div className="flex items-center">
                        {message.type === 'success' ? (
                          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 mr-2 flex-shrink-0" />
                        )}
                        <span className="font-medium">{message.text}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Tweet Text
                      </label>
                      <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
                        placeholder="What's happening?"
                        required
                        maxLength={280}
                      />
                      <div className={`text-xs text-right mt-2 font-medium ${
                        formData.text.length > 260 ? 'text-red-500' : 
                        formData.text.length > 240 ? 'text-amber-500' : 
                        'text-gray-500'
                      }`}>
                        {formData.text.length}/280 characters
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        Scheduled Time
                      </label>
                      <input
                        type="datetime-local"
                        name="scheduled_time"
                        value={formData.scheduled_time}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Hash className="w-4 h-4 mr-2 text-orange-500" />
                        Hashtags (Optional)
                      </label>
                      <input
                        type="text"
                        name="hashtags"
                        value={formData.hashtags}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                        placeholder="#hashtag1 #hashtag2"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleScheduleTweet}
                      disabled={loading || !formData.text.trim() || !formData.scheduled_time}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-6 h-6 mr-3" />
                          Schedule Tweet
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Insights Tab */}
              {activeTab === 'insights' && (
                <div>
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg mr-4">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      Analytics & Insights
                    </h2>
                  </div>

                  {loadingInsights ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
                      <p className="text-gray-500 font-medium">Loading insights...</p>
                    </div>
                  ) : insights ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-blue-700">Total Tweets</h3>
                          <Twitter className="w-8 h-8 text-blue-500" />
                        </div>
                        <p className="text-3xl font-bold text-blue-600">{insights.total_tweets || 0}</p>
                        <p className="text-sm text-blue-500 mt-1">Last 30 days</p>
                      </div>

                      <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-red-700">Total Likes</h3>
                          <Heart className="w-8 h-8 text-red-500" />
                        </div>
                        <p className="text-3xl font-bold text-red-600">{insights.total_likes || 0}</p>
                        <p className="text-sm text-red-500 mt-1">All tweets</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-green-700">Retweets</h3>
                          <Repeat className="w-8 h-8 text-green-500" />
                        </div>
                        <p className="text-3xl font-bold text-green-600">{insights.total_retweets || 0}</p>
                        <p className="text-sm text-green-500 mt-1">All tweets</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-purple-700">Replies</h3>
                          <MessageCircle className="w-8 h-8 text-purple-500" />
                        </div>
                        <p className="text-3xl font-bold text-purple-600">{insights.total_replies || 0}</p>
                        <p className="text-sm text-purple-500 mt-1">All tweets</p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-orange-700">Impressions</h3>
                          <Eye className="w-8 h-8 text-orange-500" />
                        </div>
                        <p className="text-3xl font-bold text-orange-600">{insights.total_impressions || 0}</p>
                        <p className="text-sm text-orange-500 mt-1">All tweets</p>
                      </div>

                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-teal-700">Engagement Rate</h3>
                          <TrendingUp className="w-8 h-8 text-teal-500" />
                        </div>
                        <p className="text-3xl font-bold text-teal-600">{insights.avg_engagement_rate || 0}%</p>
                        <p className="text-sm text-teal-500 mt-1">Average</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-10 h-10 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-lg font-medium">No insights available</p>
                      <p className="text-gray-400 text-sm mt-1">Post some tweets to see analytics</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        {/* Tweets List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg mr-4">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Recent Tweets
            </h3>
          </div>
          
          {loadingTweets ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading tweets...</p>
            </div>
          ) : userTweets.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Twitter className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No tweets found</p>
              <p className="text-gray-400 text-sm mt-1">Your tweets will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {userTweets.map((tweet, index) => (
                <div 
                  key={tweet.id} 
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(tweet.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <p className="text-gray-900 mb-4 leading-relaxed font-medium">{tweet.text}</p>
                      
                      {/* Tweet Stats */}
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center hover:text-red-500 transition-colors cursor-pointer">
                          <Heart className="w-4 h-4 mr-1" />
                          <span>{tweet.likes || 0}</span>
                        </div>
                        <div className="flex items-center hover:text-green-500 transition-colors cursor-pointer">
                          <Repeat className="w-4 h-4 mr-1" />
                          <span>{tweet.retweets || 0}</span>
                        </div>
                        <div className="flex items-center hover:text-blue-500 transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span>{tweet.replies || 0}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-6">
                      {tweet.url && (
                        <a
                          href={tweet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 text-gray-400 hover:text-cyan-500 hover:bg-cyan-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteClick(tweet.id)}
                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}