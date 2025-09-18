import { useState, useEffect } from 'react';
import { Send, Trash2, X, Check, ExternalLink, Calendar, Link, Image, AlertTriangle, Loader2, Clock, Eye, Hash, Shield, ShieldCheck, LogIn, LogOut, Rss, Bell, BellOff } from 'lucide-react';
import { saveConnectionStatus, getConnectionStatus, clearConnectionStatus, createAuthHeaders, getCurrentUserId } from '../utils/connectionStatus';
import { useRssPolling } from '../utils/useRssPolling';
import { PLATFORM_RSS_FEEDS } from '../utils/platformRssFeeds';

export default function RedditSection({ apiBaseUrl }) {
  const [formData, setFormData] = useState({
    subreddit_name: '',
    title: '',
    content: '',
    is_spoiler: false,
    nsfw: false
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userPosts, setUserPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  
  // Authentication state
  const [connectionStatus, setConnectionStatus] = useState({
    connected: false,
    username: null,
    message: 'Not connected to Reddit'
  });
  const [connecting, setConnecting] = useState(false);
  const [loadingConnection, setLoadingConnection] = useState(true);
  
  // RSS Article Detection state
  const [rssEnabled, setRssEnabled] = useState(false);
  const [newArticleCount, setNewArticleCount] = useState(0);
  const [detectedArticles, setDetectedArticles] = useState([]);
  const [customRssUrl, setCustomRssUrl] = useState('');
  const [showArticles, setShowArticles] = useState(false);

  // RSS polling hook - only active when enabled
  const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.reddit[0];
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

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      // Load connection status from cookies first
      const savedStatus = getConnectionStatus('reddit', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
      }
    }
    checkConnectionStatus();
  }, []);

  // Handle RSS article selection for auto-filling
  const handleArticleSelect = (article) => {
    // Extract subreddit from Reddit RSS URL if possible
    let subreddit = 'news'; // default
    try {
      const url = new URL(rssUrl);
      const pathMatch = url.pathname.match(/\/r\/([^/]+)/);
      if (pathMatch) {
        subreddit = pathMatch[1];
      }
    } catch (e) {
      // Use default subreddit
    }
    
    setFormData(prev => ({
      ...prev,
      subreddit_name: subreddit,
      title: article.title.slice(0, 300), // Reddit title limit
      content: `${article.description}\n\nSource: ${article.link}`
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
    const userId = getCurrentUserId();
    if (userId) {
      const savedStatus = getConnectionStatus('reddit', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
      }
    }
  }, [getCurrentUserId()]);

  useEffect(() => {
    if (connectionStatus.connected) {
      fetchUserPosts();
    }
  }, [connectionStatus.connected]);

  const checkConnectionStatus = async () => {
    setLoadingConnection(true);
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/reddit/connection-status`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setConnectionStatus(data.status);
        
        // Save to cookies for persistence
        const userId = getCurrentUserId();
        if (userId) {
          saveConnectionStatus('reddit', userId, data.status);
        }
      }
    } catch (error) {
      console.error('Error checking connection status:', error);
    } finally {
      setLoadingConnection(false);
    }
  };

  const handleConnectReddit = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/reddit/connect`, {
        method: 'POST',
        headers
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        // Wait a bit for the authentication to complete, then check status
        setTimeout(() => {
          checkConnectionStatus();
        }, 2000);
      } else {
        // Handle account exclusivity error (409 status)
        if (response.status === 409 || data.account_unavailable) {
          const errorMsg = data.connected_username 
            ? `This Reddit account (u/${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different Reddit account.`
            : 'This Reddit account is already connected to another user. Please disconnect from that account first or use a different Reddit account.';
          setMessage({ type: 'error', text: errorMsg });
        } else {
          setMessage({ type: 'error', text: data.error || 'Failed to connect to Reddit' });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectReddit = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/reddit/disconnect`, {
        method: 'POST',
        headers
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        
        const newStatus = {
          connected: false,
          username: null,
          message: 'Not connected to Reddit'
        };
        
        setConnectionStatus(newStatus);
        setUserPosts([]);
        
        // Clear cookies
        const userId = getCurrentUserId();
        if (userId) {
          clearConnectionStatus('reddit', userId);
        }
        
        // Clear form data
        setFormData({
          subreddit_name: '',
          title: '',
          content: '',
          is_spoiler: false,
          nsfw: false
        });
        setSelectedImage(null);
        setImagePreview(null);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to disconnect from Reddit' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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

  const validateSubreddit = async () => {
    if (!formData.subreddit_name || !connectionStatus.connected) return;
    
    try {
      const response = await fetch(`${apiBaseUrl}/api/reddit/validate-subreddit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subreddit_name: formData.subreddit_name })
      });
      
      const data = await response.json();
      if (data.success && data.is_valid) {
        setMessage({ type: 'success', text: `✓ r/${data.clean_name} is valid` });
        setFormData(prev => ({ ...prev, subreddit_name: data.clean_name }));
      } else {
        setMessage({ type: 'error', text: 'Invalid subreddit name' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error validating subreddit' });
    }
  };

  const storeFormData = async (formData, status = 'posted', errorMessage = null) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
      const userId = userData.id;
      const userEmail = userData.email;
      
      // Validate required fields
      if (!userId || !userEmail) {
        console.error('User data not available for Reddit post storage');
        return;
      }
      
      const dataPayload = {
        user_id: userId,
        user_email: userEmail,
        subreddit_name: formData.subreddit_name || '',
        title: formData.title || '',
        content: formData.content || '',
        is_spoiler: formData.is_spoiler || false,
        nsfw: formData.nsfw || false
        // Note: status and error_message not included as they're not in Reddit createPostSchema
      };

      console.log('Reddit data payload being sent:', dataPayload);
      
      const response = await fetch('http://localhost:3001/api/data/reddit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataPayload)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Reddit storage error:', response.status, errorData);
      } else {
        console.log('Reddit data stored successfully');
      }
    } catch (error) {
      console.error('Error storing Reddit form data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!connectionStatus.connected) {
      setMessage({ type: 'error', text: 'Please connect your Reddit account first' });
      return;
    }
    
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const payload = { ...formData };
      
      if (selectedImage) {
        payload.image_base64 = imagePreview;
      }

      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/reddit/create-post`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (data.success) {
        // Store successful post data
        await storeFormData(formData, 'posted');
        
        setMessage({ type: 'success', text: 'Post created successfully!' });
        setFormData({
          subreddit_name: '',
          title: '',
          content: '',
          is_spoiler: false,
          nsfw: false
        });
        setSelectedImage(null);
        setImagePreview(null);
        fetchUserPosts();
      } else {
        // Store failed post data with error
        await storeFormData(formData, 'failed', data.error || 'Failed to create post');
        
        setMessage({ type: 'error', text: data.error || 'Failed to create post' });
      }
    } catch (error) {
      // Store failed post data with network error
      await storeFormData(formData, 'failed', 'Network error occurred');
      
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    if (!connectionStatus.connected) return;
    
    setLoadingPosts(true);
    try {
      const headers = createAuthHeaders();
      console.log('DEBUG: JWT Token from localStorage:', localStorage.getItem('access_token'));
      console.log('DEBUG: Headers being sent:', headers);
      console.log('DEBUG: Current user ID:', getCurrentUserId());
      
      const response = await fetch(`${apiBaseUrl}/api/reddit/user-posts?limit=10`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setUserPosts(data.posts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleDeleteClick = (postId) => {
    setDeleteConfirmation(postId);
  };

  const confirmDelete = async () => {
    const postId = deleteConfirmation;
    setDeleteConfirmation(null);
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/reddit/post/${postId}`, {
        method: 'DELETE',
        headers
      });
      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Post deleted successfully!' });
        fetchUserPosts();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete post' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting post' });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  // Show loading screen while checking connection
  if (loadingConnection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Checking Reddit connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Delete Confirmation Modal */}
        {deleteConfirmation && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Post</h3>
              <p className="text-gray-600 text-center mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
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

        {/* Connection Status Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mr-4 ${
                connectionStatus.connected 
                  ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                  : 'bg-gradient-to-br from-gray-400 to-gray-500'
              }`}>
                {connectionStatus.connected ? (
                  <ShieldCheck className="w-6 h-6 text-white" />
                ) : (
                  <Shield className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Reddit Connection</h2>
                <p className={`text-sm font-medium ${
                  connectionStatus.connected ? 'text-emerald-600' : 'text-gray-500'
                }`}>
                  {connectionStatus.message}
                </p>
                {rssEnabled && (
                  <div className="flex items-center mt-1">
                    <Rss className="w-3 h-3 text-orange-500 mr-1" />
                    <span className="text-orange-600 text-xs">Article detection active</span>
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
                        ? 'bg-orange-100 text-orange-700 shadow-lg'
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
                  onClick={handleDisconnectReddit}
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
                  onClick={handleConnectReddit}
                  disabled={connecting}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                >
                  {connecting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 mr-2" />
                      Connect Reddit Account
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
                <Rss className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Article Detection</h3>
              </div>
              
              {/* Custom RSS URL Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom RSS Feed URL</label>
                <input
                  type="url"
                  value={customRssUrl}
                  onChange={handleCustomRssChange}
                  placeholder="https://www.reddit.com/r/news/.rss (optional)"
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
                <p className="text-orange-600 text-sm mt-1">
                  Leave empty to use default Reddit feeds (r/news)
                </p>
              </div>
              
              {/* RSS Status */}
              <div className="flex items-center justify-between bg-orange-50/50 rounded-lg p-4">
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
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">Recent Articles</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {detectedArticles.map((article, index) => (
                      <div
                        key={index}
                        className="bg-white/70 rounded-lg p-4 hover:bg-white transition-colors cursor-pointer border border-orange-100 hover:border-orange-200"
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
                          <button className="text-xs text-orange-600 hover:text-orange-700 px-3 py-1 bg-orange-100 rounded-full font-medium">
                            Use for Reddit Post
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {rssEnabled && detectedArticles.length === 0 && (
                <div className="text-center py-12">
                  <Rss className="w-16 h-16 text-orange-300 mx-auto mb-4" />
                  <h4 className="text-gray-700 font-medium mb-2">No Articles Detected Yet</h4>
                  <p className="text-gray-500 text-sm">
                    {rssError ? 'Check your RSS feed URL and try again.' : 'Monitoring for new articles from Reddit feeds...'}
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

        {/* Create Post Form */}
        <div className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${
          !connectionStatus.connected ? 'opacity-50 pointer-events-none' : ''
        }`}>
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg mr-4">
              <Hash className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Create Reddit Post
            </h2>
          </div>

          {!connectionStatus.connected && (
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                <span className="font-medium text-amber-700">Please connect your Reddit account to create posts</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Subreddit
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium z-10">
                  r/
                </span>
                <input
                  type="text"
                  name="subreddit_name"
                  value={formData.subreddit_name}
                  onChange={handleInputChange}
                  onBlur={validateSubreddit}
                  className="w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="AskReddit"
                  disabled={!connectionStatus.connected}
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your post title"
                disabled={!connectionStatus.connected}
                required
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Link className="w-4 h-4 mr-2 text-orange-500" />
                Content (Optional)
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="What's on your mind?"
                disabled={!connectionStatus.connected}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Image className="w-4 h-4 mr-2 text-orange-500" />
                Image (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={!connectionStatus.connected}
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
                <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                Post Options
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center group cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="is_spoiler"
                      checked={formData.is_spoiler}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-600 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      disabled={!connectionStatus.connected}
                    />
                    {formData.is_spoiler && (
                      <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5 pointer-events-none" />
                    )}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-200">Mark as Spoiler</span>
                </label>

                <label className="flex items-center group cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="nsfw"
                      checked={formData.nsfw}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-600 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      disabled={!connectionStatus.connected}
                    />
                    {formData.nsfw && (
                      <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5 pointer-events-none" />
                    )}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-200">NSFW</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !connectionStatus.connected}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Create Post
                </>
              )}
            </button>
          </form>
        </div>

        {/* Posts List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg mr-4">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Your Recent Posts
            </h3>
          </div>
          
          {loadingPosts ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-orange-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading posts...</p>
            </div>
          ) : userPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hash className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No posts found</p>
              <p className="text-gray-400 text-sm mt-1">Your Reddit posts will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {userPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full mr-3">
                          <Hash className="w-3 h-3 mr-1 text-orange-600" />
                          <span className="font-medium text-orange-700">r/{post.subreddit}</span>
                        </div>
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.created_utc * 1000).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">{post.title}</h4>
                      {post.selftext && (
                        <p className="text-gray-600 mb-3 leading-relaxed line-clamp-2">{post.selftext}</p>
                      )}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center bg-emerald-50 px-3 py-1 rounded-full">
                          <span className="text-emerald-600 font-semibold">↑ {post.score}</span>
                          <span className="text-emerald-500 ml-1">upvotes</span>
                        </div>
                        <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                          <span className="text-blue-600 font-semibold">💬 {post.num_comments}</span>
                          <span className="text-blue-500 ml-1">comments</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-6">
                      <a
                        href={`https://reddit.com${post.permalink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <button
                        onClick={() => handleDeleteClick(post.id)}
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