import { useState, useEffect } from 'react';
import { Send, Trash2, X, Check, Image as ImageIcon, Link as LinkIcon, Plus, List, Eye, Clock, AlertTriangle, Loader2, LogIn, LogOut, Shield, ShieldCheck, Rss, Bell, BellOff } from 'lucide-react';
import { saveConnectionStatus, getConnectionStatus, clearConnectionStatus, createAuthHeaders, getCurrentUserId } from '../utils/connectionStatus';
import { useRssPolling } from '../utils/useRssPolling';
import { PLATFORM_RSS_FEEDS } from '../utils/platformRssFeeds';

export default function PinterestSection({ apiBaseUrl }) {
  const [formData, setFormData] = useState({
    board_id: '',
    title: '',
    description: '',
    link: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [pins, setPins] = useState([]);
  const [boards, setBoards] = useState([]);
  const [loadingPins, setLoadingPins] = useState(false);
  const [loadingBoards, setLoadingBoards] = useState(false);
  const [credentialsValid, setCredentialsValid] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [boardForm, setBoardForm] = useState({
    name: '',
    description: '',
    privacy: 'PUBLIC'
  });
  const [connecting, setConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState({
    connected: false,
    message: 'Not connected to Pinterest'
  });
  
  // RSS Article Detection state
  const [rssEnabled, setRssEnabled] = useState(false);
  const [newArticleCount, setNewArticleCount] = useState(0);
  const [detectedArticles, setDetectedArticles] = useState([]);
  const [customRssUrl, setCustomRssUrl] = useState('');
  const [showArticles, setShowArticles] = useState(false);

  // RSS polling hook - only active when enabled
  const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.pinterest[0];
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
      const savedStatus = getConnectionStatus('pinterest', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
        setCredentialsValid(savedStatus.connected);
      }
    }
    checkConnectionStatus();
  }, []);

  // Handle RSS article selection for auto-filling
  const handleArticleSelect = (article) => {
    setFormData(prev => ({
      ...prev,
      title: article.title.slice(0, 100), // Pinterest title limit
      description: `${article.description}\n\nSource: ${article.link}`.slice(0, 500), // Pinterest description limit
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
    const userId = getCurrentUserId();
    if (userId) {
      const savedStatus = getConnectionStatus('pinterest', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
        setCredentialsValid(savedStatus.connected);
      }
    }
  }, [getCurrentUserId()]);

  useEffect(() => {
    if (credentialsValid) {
      fetchBoards();
      fetchPins();
    }
  }, [credentialsValid]);

  const checkConnectionStatus = async () => {
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/pinterest/connection-status`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setConnectionStatus(data.status);
        setCredentialsValid(data.status.connected);
        
        // Save to cookies for persistence
        const userId = getCurrentUserId();
        if (userId) {
          saveConnectionStatus('pinterest', userId, data.status);
        }
      }
    } catch (error) {
      console.error('Error checking connection status:', error);
      setCredentialsValid(false);
    }
  };

  const handleConnectPinterest = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });

    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/pinterest/connect`, {
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
            ? `This Pinterest account (@${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different Pinterest account.`
            : 'This Pinterest account is already connected to another user. Please disconnect from that account first or use a different Pinterest account.';
          setMessage({ type: 'error', text: errorMsg });
        } else {
          setMessage({ type: 'error', text: data.error || 'Failed to connect to Pinterest' });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectPinterest = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });

    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/pinterest/disconnect`, {
        method: 'POST',
        headers
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        
        const newStatus = {
          connected: false,
          username: null,
          message: 'Not connected to Pinterest'
        };
        
        setConnectionStatus(newStatus);
        setCredentialsValid(false);
        setBoards([]);
        setPins([]);
        
        // Clear cookies
        const userId = getCurrentUserId();
        if (userId) {
          clearConnectionStatus('pinterest', userId);
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to disconnect from Pinterest' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const validateCredentials = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/pinterest/validate-credentials`);
      const data = await response.json();
      setCredentialsValid(data.success && data.is_valid);
    } catch (error) {
      setCredentialsValid(false);
    }
  };

  const fetchBoards = async () => {
    setLoadingBoards(true);
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/pinterest/boards`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setBoards(data.boards || []);
      }
    } catch (error) {
      console.error('Error fetching boards:', error);
    } finally {
      setLoadingBoards(false);
    }
  };

  const fetchPins = async () => {
    setLoadingPins(true);
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/pinterest/pins`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setPins(data.pins || []);
      }
    } catch (error) {
      console.error('Error fetching pins:', error);
    } finally {
      setLoadingPins(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBoardInputChange = (e) => {
    const { name, value } = e.target;
    setBoardForm(prev => ({
      ...prev,
      [name]: value
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

  const storeFormData = async (formData, status = 'posted', errorMessage = null) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
      const userId = userData.id;
      const userEmail = userData.email;
      
      // Validate required fields
      if (!userId || !userEmail) {
        console.error('User data not available for Pinterest post storage');
        return;
      }
      
      // Ensure required fields have values (backend validation requirements)
      const boardId = formData.board_id || 'default-board';
      const pinTitle = formData.title || 'Untitled Pin';
      
      const dataPayload = {
        user_id: userId,
        user_email: userEmail,
        board_id: boardId,
        title: pinTitle,
        description: formData.description || '',
        link: formData.link || ''
        // Note: status and error_message not included as they're not in Pinterest backend schema
      };

      console.log('Pinterest data payload being sent:', dataPayload);
      
      const response = await fetch('http://localhost:3001/api/data/pinterest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataPayload)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Pinterest storage error:', response.status, errorData);
      } else {
        console.log('Pinterest data stored successfully');
      }
    } catch (error) {
      console.error('Error storing Pinterest form data:', error);
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

      const response = await fetch(`${apiBaseUrl}/api/pinterest/pins`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (data.success) {
        // Store successful post data
        await storeFormData(formData, 'posted');
        
        setMessage({ type: 'success', text: 'Pin created successfully!' });
        setFormData({
          board_id: '',
          title: '',
          description: '',
          link: ''
        });
        setSelectedImage(null);
        setImagePreview(null);
        fetchPins();
      } else {
        // Store failed post data with error
        await storeFormData(formData, 'failed', data.error || 'Failed to create pin');
        
        setMessage({ type: 'error', text: data.error || 'Failed to create pin' });
      }
    } catch (error) {
      // Store failed post data with network error
      await storeFormData(formData, 'failed', 'Network error occurred');
      
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const handleBoardSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/pinterest/boards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boardForm)
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: 'Board created successfully!' });
        setBoardForm({
          name: '',
          description: '',
          privacy: 'PUBLIC'
        });
        setShowBoardForm(false);
        fetchBoards();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to create board' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (pinId) => {
    setDeleteConfirmation(pinId);
  };

  const confirmDelete = async () => {
    const pinId = deleteConfirmation;
    setDeleteConfirmation(null);
    
    try {
      const response = await fetch(`${apiBaseUrl}/api/pinterest/pins/${pinId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Pin deleted successfully!' });
        fetchPins();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete pin' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting pin' });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Delete Confirmation Modal - keep existing */}

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
                <h2 className="text-2xl font-bold text-gray-900">Pinterest Connection</h2>
                <p className={`text-sm font-medium ${
                  connectionStatus.connected ? 'text-emerald-600' : 'text-gray-500'
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
                  onClick={handleDisconnectPinterest}
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
                  onClick={handleConnectPinterest}
                  disabled={connecting}
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                >
                  {connecting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 mr-2" />
                      Connect Pinterest Account
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
                  placeholder="https://rsshub.app/pinterest/user/pinterest/official-news (optional)"
                  className="w-full px-4 py-2 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400"
                />
                <p className="text-red-600 text-sm mt-1">
                  Leave empty to use default Pinterest-related feeds
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
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">Recent Articles</h4>
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
                            Use for Pin
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
                  <h4 className="text-gray-700 font-medium mb-2">No Articles Detected Yet</h4>
                  <p className="text-gray-500 text-sm">
                    {rssError ? 'Check your RSS feed URL and try again.' : 'Monitoring for new articles from Pinterest feeds...'}
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

        {/* Rest of your existing components with disabled state when not connected */}
        <div className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${
          !connectionStatus.connected ? 'opacity-50 pointer-events-none' : ''
        }`}>

        {/* Create Board Form */}
        {showBoardForm && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg mr-4">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Create Board
                </h2>
              </div>
              <button 
                onClick={() => setShowBoardForm(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
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

            <form onSubmit={handleBoardSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Board Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={boardForm.name}
                  onChange={handleBoardInputChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                  placeholder="My Awesome Board"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Description (Optional)
                </label>
                <textarea
                  name="description"
                  value={boardForm.description}
                  onChange={handleBoardInputChange}
                  rows={3}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
                  placeholder="What's this board about?"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Privacy
                </label>
                <select
                  name="privacy"
                  value={boardForm.privacy}
                  onChange={handleBoardInputChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                >
                  <option value="PUBLIC">Public</option>
                  <option value="PROTECTED">Protected (Visible to followers)</option>
                  <option value="SECRET">Secret (Only you)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || credentialsValid === false}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="w-6 h-6 mr-3" />
                    Create Board
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Create Pin Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-lg mr-4">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Create Pin
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
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Board
              </label>
              <div className="flex space-x-4">
                <select
                  name="board_id"
                  value={formData.board_id}
                  onChange={handleInputChange}
                  className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                  required
                  disabled={loadingBoards}
                >
                  <option value="">Select a board</option>
                  {boards.map(board => (
                    <option key={board.id} value={board.id}>
                      {board.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowBoardForm(true)}
                  className="flex items-center justify-center px-6 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New
                </button>
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
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                placeholder="Give your pin a title"
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
                rows={3}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
                placeholder="Tell people what this pin is about"
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
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                placeholder="https://example.com"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <ImageIcon className="w-4 h-4 mr-2 text-red-500" />
                Image (Required)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  required
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

            <button
              type="submit"
              disabled={loading || credentialsValid === false}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Create Pin
                </>
              )}
            </button>
          </form>
        </div>

        {/* Boards List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg mr-4">
              <List className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Your Boards
            </h3>
          </div>
          
          {loadingBoards ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-red-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading boards...</p>
            </div>
          ) : boards.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <List className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No boards found</p>
              <p className="text-gray-400 text-sm mt-1">Create your first board to get started</p>
              <button
                onClick={() => setShowBoardForm(true)}
                className="mt-6 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Board
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {boards.map((board, index) => (
                <div 
                  key={board.id} 
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{board.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{board.description || 'No description'}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="capitalize">{board.privacy.toLowerCase()}</span>
                        <span className="mx-2">•</span>
                        <span>{board.pin_count || 0} pins</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pins List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg mr-4">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Recent Pins
            </h3>
          </div>
          
          {loadingPins ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-red-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading pins...</p>
            </div>
          ) : pins.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No pins found</p>
              <p className="text-gray-400 text-sm mt-1">Your Pinterest pins will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pins.map((pin, index) => (
                <div 
                  key={pin.id} 
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(pin.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      {pin.title && (
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{pin.title}</h4>
                      )}
                      <p className="text-gray-700 mb-3 leading-relaxed">{pin.description}</p>
                      {pin.link && (
                        <a 
                          href={pin.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium hover:underline transition-colors duration-200"
                        >
                          <LinkIcon className="w-4 h-4 mr-1" />
                          View Link
                        </a>
                      )}
                      {pin.url && (
                        <a 
                          href={pin.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium hover:underline transition-colors duration-200 ml-4"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View on Pinterest
                        </a>
                      )}
                    </div>
                    <div className="flex space-x-2 ml-6">
                      <button
                        onClick={() => handleDeleteClick(pin.id)}
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

      {/* Delete Confirmation Dialog */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Pin</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this pin? This action cannot be undone.
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