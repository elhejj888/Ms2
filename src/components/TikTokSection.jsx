import { useState, useEffect } from 'react';
import { Send, Trash2, X, Check, ExternalLink, Calendar, Link, Image, AlertTriangle, Loader2, Clock, Eye, Hash, Shield, ShieldCheck, LogIn, LogOut, Video, RefreshCw } from 'lucide-react';
import { saveConnectionStatus, getConnectionStatus, clearConnectionStatus, createAuthHeaders, getCurrentUserId } from '../utils/connectionStatus';
export default function TikTokSection({ apiBaseUrl }) {
  const [formData, setFormData] = useState({
    caption: '',
    hashtags: '',
    privacy_level: 0
  });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userVideos, setUserVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  
  // Authentication state
  const [connectionStatus, setConnectionStatus] = useState({
    connected: false,
    message: 'Not connected to TikTok'
  });
  const [connecting, setConnecting] = useState(false);
  const [loadingConnection, setLoadingConnection] = useState(true);

  // Helper function to convert privacy level number to text
  const getPrivacyLevelText = (level) => {
    switch (level) {
      case 0: return 'SELF_ONLY';
      case 1: return 'FRIENDS_ONLY';
      case 2: return 'PUBLIC_TO_EVERYONE';
      default: return 'SELF_ONLY';
    }
  };

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      // Load connection status from cookies first
      const savedStatus = getConnectionStatus('tiktok', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
      }
    }
    checkConnectionStatus();
  }, []);

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) {
      const savedStatus = getConnectionStatus('tiktok', userId);
      if (savedStatus) {
        setConnectionStatus(savedStatus);
      }
    }
  }, [getCurrentUserId()]);

  useEffect(() => {
    if (connectionStatus.connected) {
      fetchUserVideos();
    }
  }, [connectionStatus.connected]);

  const checkConnectionStatus = async () => {
    setLoadingConnection(true);
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/tiktok/connection-status`, {
        headers
      });
      const data = await response.json();
      if (data.success) {
        setConnectionStatus(data.status);
        
        // Save to cookies for persistence
        const userId = getCurrentUserId();
        if (userId) {
          saveConnectionStatus('tiktok', userId, data.status);
        }
      }
    } catch (error) {
      console.error('Error checking connection status:', error);
    } finally {
      setLoadingConnection(false);
    }
  };

  const handleConnectTikTok = async (forceReauth = false) => {
    setConnecting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/tiktok/connect`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ force_reauth: forceReauth })
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
            ? `This TikTok account (@${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different TikTok account.`
            : 'This TikTok account is already connected to another user. Please disconnect from that account first or use a different TikTok account.';
          setMessage({ type: 'error', text: errorMsg });
        } else {
          setMessage({ type: 'error', text: data.message || 'Failed to connect to TikTok' });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnectTikTok = async () => {
    setConnecting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const headers = createAuthHeaders();
      const response = await fetch(`${apiBaseUrl}/api/tiktok/disconnect`, {
        method: 'POST',
        headers
      });
      
      const data = await response.json();
      
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        
        const newStatus = {
          connected: false,
          username: null,
          message: 'Not connected to TikTok'
        };
        
        setConnectionStatus(newStatus);
        setUserVideos([]);
        
        // Clear cookies
        const userId = getCurrentUserId();
        if (userId) {
          clearConnectionStatus('tiktok', userId);
        }
        
        // Clear form data
        setFormData({
          caption: '',
          hashtags: '',
          privacy_level: 0
        });
        setSelectedVideo(null);
        setVideoPreview(null);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to disconnect from TikTok' });
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

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedVideo(file);
      const reader = new FileReader();
      reader.onload = (e) => setVideoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!connectionStatus.connected) {
      setMessage({ type: 'error', text: 'Please connect your TikTok account first' });
      return;
    }
    
    if (!selectedVideo) {
      setMessage({ type: 'error', text: 'Please select a video to upload' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    // Store form data in Node.js backend
    const storeFormData = async (formData, status = 'posted', errorMessage = null) => {
      try {
        const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
        const userId = userData.id;
        const userEmail = userData.email;
        
        // Validate required fields
        if (!userId || !userEmail) {
          console.error('User data not available for TikTok post storage');
          return;
        }
        
        const dataPayload = {
          user_id: userId,
          user_email: userEmail,
          caption: formData.caption || '',
          hashtags: formData.hashtags || '',
          privacy_level: getPrivacyLevelText(formData.privacy_level)
          // Note: status and error_message not included as they're not in TikTok backend schema
        };

        console.log('TikTok data payload being sent:', dataPayload);
        
        const response = await fetch('http://localhost:3001/api/data/tiktok', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataPayload)
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('TikTok storage error:', response.status, errorData);
        } else {
          console.log('TikTok data stored successfully');
        }
      } catch (error) {
        console.error('Error storing TikTok form data:', error);
      }
    };

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('video', selectedVideo);
      formDataToSend.append('caption', formData.caption);
      formDataToSend.append('hashtags', formData.hashtags);
      formDataToSend.append('privacy_level', formData.privacy_level.toString());

      const response = await fetch(`${apiBaseUrl}/api/tiktok/upload-video`, {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        // Store successful post data
        await storeFormData(formData, 'posted');

        setMessage({ type: 'success', text: 'Video uploaded successfully!' });
        setFormData({
          caption: '',
          hashtags: '',
          privacy_level: 0
        });
        setSelectedVideo(null);
        setVideoPreview(null);
        fetchUserVideos();
      } else {
        // Store failed post data with error
        await storeFormData(formData, 'failed', data.error || 'Failed to upload video');

        setMessage({ type: 'error', text: data.error || 'Failed to upload video' });
      }
    } catch (error) {
      // Store failed post data with network error
      await storeFormData(formData, 'failed', 'Network error occurred');

      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const fetchUserVideos = async () => {
    if (!connectionStatus.connected) return;

    
    setLoadingVideos(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/tiktok/user-videos?limit=10`);
      const data = await response.json();
      if (data.success) {
        setUserVideos(data.videos);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoadingVideos(false);
    }
  };

  const handleDeleteClick = (videoId) => {
    setDeleteConfirmation(videoId);
  };

  const confirmDelete = async () => {
    const videoId = deleteConfirmation;
    setDeleteConfirmation(null);
    
    try {
      const response = await fetch(`${apiBaseUrl}/api/tiktok/video/${videoId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Video deleted successfully!' });
        fetchUserVideos();
      } else {
        setMessage({ type: 'error', text: 'Failed to delete video' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting video' });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const refreshConnection = async () => {
    setConnecting(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/tiktok/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        checkConnectionStatus();
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to refresh connection' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setConnecting(false);
    }
  };

  // Show loading screen while checking connection
  if (loadingConnection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-pink-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Checking TikTok connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Delete Confirmation Modal */}
        {deleteConfirmation && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Video</h3>
              <p className="text-gray-600 text-center mb-6">Are you sure you want to delete this video? This action cannot be undone.</p>
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
                  ? 'bg-gradient-to-br from-pink-500 to-red-600' 
                  : 'bg-gradient-to-br from-gray-400 to-gray-500'
              }`}>
                {connectionStatus.connected ? (
                  <ShieldCheck className="w-6 h-6 text-white" />
                ) : (
                  <Shield className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">TikTok Connection</h2>
                <p className={`text-sm font-medium ${
                  connectionStatus.connected ? 'text-pink-600' : 'text-gray-500'
                }`}>
                  {connectionStatus.message}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {connectionStatus.connected ? (
                <>
                  <button
                    onClick={() => refreshConnection()}
                    disabled={connecting}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                  >
                    {connecting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Refreshing...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Refresh
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDisconnectTikTok}
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
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleConnectTikTok(false)}
                    disabled={connecting}
                    className="bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                  >
                    {connecting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Connect TikTok
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleConnectTikTok(true)}
                    disabled={connecting}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center"
                  >
                    {connecting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Reconnecting...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Force Reconnect
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

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

        {/* Upload Video Form */}
        <div className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${
          !connectionStatus.connected ? 'opacity-50 pointer-events-none' : ''
        }`}>
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl shadow-lg mr-4">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Upload TikTok Video
            </h2>
          </div>

          {!connectionStatus.connected && (
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                <span className="font-medium text-amber-700">Please connect your TikTok account to upload videos</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                Video
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={!connectionStatus.connected}
                  required
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

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Link className="w-4 h-4 mr-2 text-pink-500" />
                Caption
              </label>
              <textarea
                name="caption"
                value={formData.caption}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Add a caption for your video..."
                disabled={!connectionStatus.connected}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Hash className="w-4 h-4 mr-2 text-pink-500" />
                Hashtags (comma separated)
              </label>
              <input
                type="text"
                name="hashtags"
                value={formData.hashtags}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="funny, viral, trends"
                disabled={!connectionStatus.connected}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-pink-500" />
                Privacy Settings
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy_level"
                    value="0"
                    checked={formData.privacy_level === "0"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-pink-600 bg-gray-100 border-2 border-gray-300 focus:ring-pink-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={!connectionStatus.connected}
                  />
                  <span className="text-gray-700 font-medium">Public</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy_level"
                    value="1"
                    checked={formData.privacy_level === "1"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-pink-600 bg-gray-100 border-2 border-gray-300 focus:ring-pink-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={!connectionStatus.connected}
                  />
                  <span className="text-gray-700 font-medium">Friends Only</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy_level"
                    value="2"
                    checked={formData.privacy_level === "2"}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-pink-600 bg-gray-100 border-2 border-gray-300 focus:ring-pink-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={!connectionStatus.connected}
                  />
                  <span className="text-gray-700 font-medium">Private</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !connectionStatus.connected || !selectedVideo}
              className="w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3" />
                  Upload Video
                </>
              )}
            </button>
          </form>
        </div>

        {/* Videos List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg mr-4">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Your Recent Videos
            </h3>
          </div>
          
          {loadingVideos ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-pink-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading videos...</p>
            </div>
          ) : userVideos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No videos found</p>
              <p className="text-gray-400 text-sm mt-1">Your TikTok videos will appear here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {userVideos.map((video, index) => (
                <div 
                  key={video.id} 
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(video.created_time).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">{video.caption}</h4>
                      {video.hashtags && video.hashtags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {video.hashtags.map((tag, i) => (
                            <span key={i} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center bg-emerald-50 px-3 py-1 rounded-full">
                          <span className="text-emerald-600 font-semibold">❤️ {video.likes}</span>
                          <span className="text-emerald-500 ml-1">likes</span>
                        </div>
                        <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                          <span className="text-blue-600 font-semibold">💬 {video.comments}</span>
                          <span className="text-blue-500 ml-1">comments</span>
                        </div>
                        <div className="flex items-center bg-purple-50 px-3 py-1 rounded-full">
                          <span className="text-purple-600 font-semibold">↗️ {video.shares}</span>
                          <span className="text-purple-500 ml-1">shares</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-6">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <button
                        onClick={() => handleDeleteClick(video.id)}
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