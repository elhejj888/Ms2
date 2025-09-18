import { useState, useEffect } from 'react';
import { Send, Trash2, X, Check, Video, Link as LinkIcon, Plus, List, Eye, Clock, AlertTriangle, Loader2, LogIn, LogOut, Shield, ShieldCheck, Rss, Bell, BellOff } from 'lucide-react';
import { saveConnectionStatus, getConnectionStatus, clearConnectionStatus, createAuthHeaders, getCurrentUserId } from '../utils/connectionStatus';
import { useUser } from '../context/UserContext';
import { useRssPolling } from '../utils/useRssPolling';
import { PLATFORM_RSS_FEEDS } from '../utils/platformRssFeeds';

export default function YouTubeShortsSection({ apiBaseUrl }) {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    privacyStatus: 'public',
    scheduled_time: '' // New field for scheduling
  });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [shorts, setShorts] = useState([]);
  const [loadingShorts, setLoadingShorts] = useState(false);
  const [credentialsValid, setCredentialsValid] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState({
    connected: false,
    message: 'Not connected to YouTube'
  });
  const [lastConnectionCheck, setLastConnectionCheck] = useState(null);
  
  // RSS Article Detection state
  const [rssEnabled, setRssEnabled] = useState(false);
  const [newArticleCount, setNewArticleCount] = useState(0);
  const [detectedArticles, setDetectedArticles] = useState([]);
  const [customRssUrl, setCustomRssUrl] = useState('');
  const [showArticles, setShowArticles] = useState(false);

  // RSS polling hook - only active when enabled
  const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.youtube[0];
  const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(
    rssEnabled && rssUrl ? rssUrl : null,
    {
      intervalMs: 60000, // Check every minute
      onNewArticles: (newArticles) => {
        if (rssEnabled) {
          setNewArticleCount(prev => prev + newArticles.length);
          setDetectedArticles(prev => [...newArticles, ...prev].slice(0, 50));
        }
      }
    }
  );

  // Handle RSS article selection for auto-filling
  const handleArticleSelect = (article) => {
    setFormData(prev => ({
      ...prev,
      title: article.title.slice(0, 100), // YouTube title limit
      description: `${article.description}\n\nSource: ${article.link}`.slice(0, 5000), // YouTube description limit
      link: article.link
    }));
    setShowArticles(false);
    setNewArticleCount(0); // Clear notification
  };

  // Toggle RSS monitoring
  const toggleRssMonitoring = () => {
    setRssEnabled(!rssEnabled);
    if (!rssEnabled) {
      setNewArticleCount(0);
    }
  };

  const handleCustomRssChange = (e) => {
    setCustomRssUrl(e.target.value);
  };

  useEffect(() => {
    const initializeConnection = async () => {
      const userId = getCurrentUserId();
      if (userId) {
        // Load connection status from cookies first
        const savedStatus = getConnectionStatus('youtube', userId);
        if (savedStatus && savedStatus.connected) {
          console.log('Loading saved YouTube connection status:', savedStatus);
          setConnectionStatus(savedStatus);
          setCredentialsValid(savedStatus.connected);
        }
      }
      
      // Always check with server to get latest status
      await checkConnectionStatus();
    };
    
    initializeConnection();
  }, []);

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      const savedStatus = getConnectionStatus('youtube', userId);
      if (savedStatus && savedStatus.connected) {
        console.log('User changed, loading YouTube connection status:', savedStatus);
        setConnectionStatus(savedStatus);
        setCredentialsValid(savedStatus.connected);
        // Don't check server immediately if we have a saved connected status
      } else {
        // User changed and no saved status, reset state and check with server
        console.log('User changed, no saved YouTube connection status, resetting state');
        setConnectionStatus({
          connected: false,
          message: 'Not connected to YouTube'
        });
        setCredentialsValid(false);
        setShorts([]);
        // Only check server status if we don't have a saved status
        checkConnectionStatus();
      }
    } else {
      // No user logged in, reset all state
      console.log('No user logged in, resetting YouTube state');
      setConnectionStatus({
        connected: false,
        message: 'Not connected to YouTube'
      });
      setCredentialsValid(false);
      setShorts([]);
    }
  }, [getCurrentUserId(), user]);

  useEffect(() => {
    if (credentialsValid) {
      console.log('YouTube credentials valid, fetching shorts');
      fetchShorts();
    } else {
      console.log('YouTube credentials invalid, clearing shorts');
      setShorts([]);
    }
  }, [credentialsValid]);

  const checkConnectionStatus = async () => {
    // Debounce connection checks - don't check more than once every 30 seconds
    const now = Date.now();
    if (lastConnectionCheck && (now - lastConnectionCheck) < 30000) {
      console.log('YouTube connection check skipped (debounced)');
      return;
    }
    
    setLastConnectionCheck(now);
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/youtube/connection-status`, {
        headers
      });
      const data = await response.json();
      
      console.log('YouTube connection status response:', data);
      
      if (data.success) {
        setConnectionStatus(data.status);
        setCredentialsValid(data.status.connected);
        
        // Save to cookies for persistence
        const userId = getCurrentUserId();
        if (userId) {
          saveConnectionStatus('youtube', userId, data.status);
        }
        
        // Show success message if connected
        if (data.status.connected) {
          setMessage({ 
            type: 'success', 
            text: data.status.message || `Connected to YouTube as ${data.status.username}` 
          });
        }
      } else {
        console.error('Connection status check failed:', data);
        setCredentialsValid(false);
        setConnectionStatus({
          connected: false,
          message: 'Not connected to YouTube'
        });
      }
    } catch (error) {
      console.error('Error checking connection status:', error);
      setCredentialsValid(false);
      setConnectionStatus({
        connected: false,
        message: 'Not connected to YouTube'
      });
    }
  };

  const handleConnectYouTube = async () => {
    console.log('🎯 YouTube Connect button clicked!');
    console.log('API Base URL:', apiBaseUrl);
    setConnecting(true);
    setMessage({ type: '', text: '' });

    try {
      const headers = createAuthHeaders();
      console.log('📡 Making request to:', `${apiBaseUrl}/api/youtube/connect`);
      console.log('📋 Request headers:', headers);
      
      const response = await fetch(`${apiBaseUrl}/api/youtube/connect`, {
        method: 'POST',
        headers
      });
      
      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', response.headers);
      
      const data = await response.json();
      console.log('📊 Response data:', data);
      console.log('✅ Data.success:', data.success);
      console.log('👤 Data.username:', data.username);
      
      if (data.success) {
        console.log('✅ YouTube connection successful!');
        console.log('Username from response:', data.username);
        setMessage({ type: 'success', text: data.message });
        
        // Wait a bit for the authentication to complete, then check status (Pinterest approach)
        setTimeout(() => {
          checkConnectionStatus();
        }, 2000);
      } else {
        // Handle account exclusivity error (409 status)
        if (response.status === 409 || data.account_unavailable) {
          const errorMsg = data.connected_username 
            ? `This YouTube account (${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different YouTube account.`
            : 'This YouTube account is already connected to another user. Please disconnect from that account first or use a different YouTube account.';
          setMessage({ type: 'error', text: errorMsg });
        } else {
          setMessage({ type: 'error', text: data.error || 'Failed to connect to YouTube' });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectYouTube = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });

    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/youtube/disconnect`, {
        method: 'POST',
        headers
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        
        const newStatus = {
          connected: false,
          username: null,
          message: 'Not connected to YouTube'
        };
        
        setConnectionStatus(newStatus);
        setCredentialsValid(false);
        setShorts([]);
        
        // Clear cookies
        const userId = getCurrentUserId();
        if (userId) {
          clearConnectionStatus('youtube', userId);
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to disconnect from YouTube' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const fetchShorts = async () => {
    setLoadingShorts(true);
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/youtube/shorts`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setShorts(data.shorts || []);
      }
    } catch (error) {
      console.error('Error fetching YouTube Shorts:', error);
    } finally {
      setLoadingShorts(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper to check if scheduled_time is in the past
  const isScheduledTimeInPast = () => {
    if (!formData.scheduled_time) return false;
    const scheduled = new Date(formData.scheduled_time);
    return scheduled.getTime() < new Date('2025-08-13T21:52:39+05:30').getTime();
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit for YouTube Shorts
        setMessage({ type: 'error', text: 'Video file must be less than 50MB' });
        return;
      }
      
      setSelectedVideo(file);
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoPreview => {
        if (videoPreview) URL.revokeObjectURL(videoPreview);
        return videoURL;
      });
    }
  };



  // Function to save post data to database
  const savePostToDatabase = async (postData, status = 'posted', errorMessage = null) => {
    try {
      const userId = getCurrentUserId();
      if (!userId) {
        console.warn('No user ID found, skipping database save');
        return;
      }

      // Get user email from UserContext
      const userEmail = user?.email || 'unknown@example.com';

      const dbPayload = {
        user_id: parseInt(userId),
        user_email: userEmail,
        title: postData.title || '',
        description: postData.description || '',
        link: postData.link || '',
        privacy_status: postData.privacyStatus || 'public',
        video_id: postData.video_id || null,
        video_url: postData.video_url || null,
        thumbnail_url: postData.thumbnail_url || null,
        duration: postData.duration || null,
        view_count: postData.view_count || 0,
        like_count: postData.like_count || 0,
        comment_count: postData.comment_count || 0,
        status: status,
        error_message: errorMessage
      };

      // Use Node backend on port 3001 for database operations
      const nodeBackendUrl = 'http://localhost:3001';
      const response = await fetch(`${nodeBackendUrl}/api/data/youtube/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dbPayload)
      });

      const result = await response.json();
      if (result.success) {
        console.log('✅ YouTube post saved to database:', result.data);
      } else {
        console.error('❌ Failed to save YouTube post to database:', result.message);
      }
    } catch (error) {
      console.error('❌ Error saving YouTube post to database:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      if (!selectedVideo) {
        throw new Error('Video file is required');
      }

      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('link', formData.link);
      formDataToSend.append('privacyStatus', formData.privacyStatus);
      formDataToSend.append('video', selectedVideo);
      if (formData.scheduled_time) {
        formDataToSend.append('scheduled_time', formData.scheduled_time);
      }

      const headers = createAuthHeaders();
      delete headers['Content-Type']; // Let the browser set the content type for FormData

      const response = await fetch(`${apiBaseUrl}/api/youtube/shorts`, {
        method: 'POST',
        headers,
        body: formDataToSend
      });

      const data = await response.json();
      
      if (data.success) {
        // Save successful post to database
        const postDataForDb = {
          ...formData,
          video_id: data.video?.id || null,
          video_url: data.video?.url || null,
          thumbnail_url: data.video?.thumbnail_url || null,
          duration: data.video?.duration || null,
          view_count: data.video?.view_count || 0,
          like_count: data.video?.like_count || 0,
          comment_count: data.video?.comment_count || 0
        };
        await savePostToDatabase(postDataForDb, 'posted');
        
        setMessage({ type: 'success', text: 'YouTube Short created successfully!' });
        setFormData({
          title: '',
          description: '',
          link: '',
          privacyStatus: 'public',
          scheduled_time: ''
        });
        setSelectedVideo(null);
        setVideoPreview(null);
        fetchShorts();
      } else {
        // Save failed post to database
        await savePostToDatabase(formData, 'failed', data.error || 'Failed to create Short');
        
        setMessage({ type: 'error', text: data.error || 'Failed to create Short' });
      }
    } catch (error) {
      // Save error post to database
      await savePostToDatabase(formData, 'failed', error.message || 'Network error occurred');
      
      setMessage({ type: 'error', text: error.message || 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (videoId) => {
    setDeleteConfirmation(videoId);
  };

  const confirmDelete = async () => {
    const videoId = deleteConfirmation;
    setDeleteConfirmation(null);
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/youtube/shorts/${videoId}`, {
        method: 'DELETE',
        headers
      });
      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Short deleted successfully!' });
        fetchShorts();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete Short' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting Short' });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Connection Status Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mr-4 ${
                connectionStatus.connected 
                  ? 'bg-gradient-to-br from-red-500 to-red-600' 
                  : 'bg-gradient-to-br from-gray-400 to-gray-500'
              }`}>
                {connectionStatus.connected ? (
                  <ShieldCheck className="w-6 h-6 text-white" />
                ) : (
                  <Shield className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">YouTube Connection</h2>
                <p className={`text-sm font-medium ${
                  connectionStatus.connected ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {connectionStatus.message}
                </p>
                {rssEnabled && (
                  <div className="flex items-center mt-1">
                    <Rss className="w-3 h-3 text-red-500 mr-1" />
                    <span className="text-red-600 text-xs">Article detection active</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* RSS Article Detection Toggle */}
              {connectionStatus.connected && (
                <>
                  <button
                    onClick={() => setShowArticles(!showArticles)}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      showArticles
                        ? 'bg-red-100 text-red-700 shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Rss className="w-4 h-4" />
                    <span>Articles</span>
                    {newArticleCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {newArticleCount}
                      </span>
                    )}
                  </button>
                  
                  <button
                    onClick={toggleRssMonitoring}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      rssEnabled
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {rssEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                    <span>{rssEnabled ? 'Monitoring' : 'Monitor'}</span>
                  </button>
                </>
              )}
              {connectionStatus.connected ? (
                <button
                  onClick={handleDisconnectYouTube}
                  disabled={connecting}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                >
                  {connecting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Disconnecting...
                    </>
                  ) : (
                    <>
                      <LogOut className="w-5 h-5 mr-2" />
                      Disconnect
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleConnectYouTube}
                  disabled={connecting}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                >
                  {connecting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 mr-2" />
                      Connect YouTube Account
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* RSS Articles Panel */}
        {connectionStatus.connected && showArticles && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in slide-in-from-top duration-300">
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <Rss className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Article Detection</h3>
              </div>
              
              {/* Custom RSS URL Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom RSS Feed URL</label>
                <input
                  type="url"
                  value={customRssUrl}
                  onChange={handleCustomRssChange}
                  placeholder="https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID (optional)"
                  className="w-full px-4 py-2 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400"
                />
                <p className="text-red-600 text-sm mt-1">
                  Leave empty to use default YouTube channel feeds
                </p>
              </div>
              
              {/* RSS Status */}
              <div className="flex items-center justify-between bg-red-50/50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    rssEnabled ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-700">
                    {rssEnabled ? `Monitoring active - ${rssArticles?.length || 0} articles` : 'Monitoring disabled'}
                  </span>
                </div>
                {lastChecked && (
                  <span className="text-xs text-gray-500">
                    Last: {new Date(lastChecked).toLocaleTimeString()}
                  </span>
                )}
              </div>
              
              {rssError && (
                <div className="text-red-600 text-sm bg-red-50 rounded-lg p-3">
                  Error: {rssError}
                </div>
              )}
              
              {/* Detected Articles */}
              {rssEnabled && detectedArticles.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">Recent Videos</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {detectedArticles.map((article, index) => (
                      <div
                        key={index}
                        className="bg-white/70 rounded-lg p-4 hover:bg-white transition-colors cursor-pointer border border-red-100 hover:border-red-200"
                        onClick={() => handleArticleSelect(article)}
                      >
                        <h5 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                          {article.title}
                        </h5>
                        <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : 'No date'}
                          </span>
                          <button className="text-xs text-red-600 hover:text-red-700 px-3 py-1 bg-red-100 rounded-full font-medium">
                            Use for Short
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {rssEnabled && detectedArticles.length === 0 && (
                <div className="text-center py-12">
                  <Rss className="w-16 h-16 text-red-300 mx-auto mb-4" />
                  <h4 className="text-gray-700 font-medium mb-2">No Videos Detected Yet</h4>
                  <p className="text-gray-500 text-sm">
                    {rssError ? 'Check your RSS feed URL and try again.' : 'Monitoring for new videos from YouTube channels...'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Messages */}
        {message.text && (
          <div className={`p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${
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

        {/* Create Short Form */}
        <div className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${
          !connectionStatus.connected ? 'opacity-50 pointer-events-none' : ''
        }`}>
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg mr-4">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Create YouTube Short
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
            {/* Scheduled Time Picker */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                Schedule (Optional)
              </label>
              <input
                type="datetime-local"
                name="scheduled_time"
                value={formData.scheduled_time}
                onChange={handleInputChange}
                disabled={!credentialsValid}
                className={`w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  credentialsValid
                    ? 'border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300'
                    : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
                min={new Date('2025-08-13T21:52:39+05:30').toISOString().slice(0,16)}
              />
              {formData.scheduled_time && isScheduledTimeInPast() && (
                <div className="text-red-600 text-xs mt-1 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Scheduled time must be in the future
                </div>
              )}
              <div className="text-gray-500 text-xs mt-1">
                Leave empty to post immediately. If set, the Short will be scheduled for publishing at the selected time (UTC).
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Title (Optional)
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                disabled={!credentialsValid}
                className={`w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  credentialsValid
                    ? 'border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300'
                    : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
                placeholder={credentialsValid ? "Give your Short a title" : "Connect your YouTube account to create Shorts"}
                maxLength="100"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Description (Optional)
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                disabled={!credentialsValid}
                rows={3}
                className={`w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 resize-none ${
                  credentialsValid
                    ? 'border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300'
                    : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
                placeholder={credentialsValid ? "Tell people what this Short is about" : "Connect your YouTube account to create Shorts"}
                maxLength="5000"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <LinkIcon className="w-4 h-4 mr-2 text-red-500" />
                Link (Optional)
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                disabled={!credentialsValid}
                className={`w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  credentialsValid
                    ? 'border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300'
                    : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
                placeholder={credentialsValid ? "https://example.com" : "Connect your YouTube account first"}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Privacy
              </label>
              <select
                name="privacyStatus"
                value={formData.privacyStatus}
                onChange={handleInputChange}
                disabled={!credentialsValid}
                className={`w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  credentialsValid
                    ? 'border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300'
                    : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
              >
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Video className="w-4 h-4 mr-2 text-red-500" />
                Video (Required - Max 50MB)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  disabled={!credentialsValid}
                  className={`w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${
                    credentialsValid
                      ? 'border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100'
                      : 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-500'
                  }`}
                  required={credentialsValid}
                />
              </div>
              {videoPreview && (
                <div className="mt-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="relative">
                    <video 
                      src={videoPreview} 
                      controls
                      className="max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || credentialsValid === false}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Create YouTube Short
                </>
              )}
            </button>
          </form>
        </div>

        {/* Shorts List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg mr-4">
              <List className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Your YouTube Shorts
            </h3>
          </div>
          
          {loadingShorts ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-red-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading Shorts...</p>
            </div>
          ) : shorts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No Shorts found</p>
              <p className="text-gray-400 text-sm mt-1">Your YouTube Shorts will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {shorts.map((short, index) => (
                <div 
                  key={short.id} 
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(short.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      {short.title && (
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{short.title}</h4>
                      )}
                      <p className="text-gray-700 mb-3 leading-relaxed">{short.description}</p>
                      <div className="flex items-center space-x-4">
                        {short.link && (
                          <a 
                            href={short.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium hover:underline transition-colors duration-200"
                          >
                            <LinkIcon className="w-4 h-4 mr-1" />
                            View Link
                          </a>
                        )}
                        {short.url && (
                          <a 
                            href={short.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium hover:underline transition-colors duration-200"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View on YouTube
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-6">
                      <button
                        onClick={() => handleDeleteClick(short.id)}
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

      {/* Delete Confirmation Dialog */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Short</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this Short? This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={cancelDelete}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}