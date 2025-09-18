import { useState, useEffect } from 'react';
import { Send, Trash2, ExternalLink, Image, Images, Instagram, AlertTriangle, Loader2, Clock, Eye, Check, X, Calendar, Rss, Bell, BellOff } from 'lucide-react';
import { useRssPolling } from '../utils/useRssPolling';
import { PLATFORM_RSS_FEEDS } from '../utils/platformRssFeeds';

export default function InstagramSection({ apiBaseUrl }) {
  const [formData, setFormData] = useState({
    caption: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCarouselImages, setSelectedCarouselImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userPosts, setUserPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postType, setPostType] = useState('single'); // 'single' or 'carousel'
  const [credentialsValid, setCredentialsValid] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  
  // RSS Article Detection state
  const [rssEnabled, setRssEnabled] = useState(false);
  const [newArticleCount, setNewArticleCount] = useState(0);
  const [detectedArticles, setDetectedArticles] = useState([]);
  const [customRssUrl, setCustomRssUrl] = useState('');
  const [showArticles, setShowArticles] = useState(false);

  // RSS polling hook - only active when enabled
  const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.instagram[0];
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
    validateCredentials();
    fetchUserPosts();
  }, []);

  // Handle RSS article selection for auto-filling
  const handleArticleSelect = (article) => {
    const instagramCaption = `${article.title}\n\n${article.description}\n\n#article #news`;
    setFormData(prev => ({
      ...prev,
      caption: instagramCaption.slice(0, 2200) // Instagram caption limit
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

  const validateCredentials = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/instagram/validate-credentials`);
      const data = await response.json();
      setCredentialsValid(data.success && data.is_valid);
    } catch (error) {
      setCredentialsValid(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      if (postType === 'single') {
        const file = files[0];
        setSelectedImage(file);
        setSelectedCarouselImages([]);
        const reader = new FileReader();
        reader.onload = (e) => setImagePreviews([e.target.result]);
        reader.readAsDataURL(file);
      } else {
        // Carousel mode
        setSelectedImage(null);
        setSelectedCarouselImages(files);
        const newPreviews = [];
        files.forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
            newPreviews.push(e.target.result);
            if (newPreviews.length === files.length) {
              setImagePreviews(newPreviews);
            }
          };
          reader.readAsDataURL(file);
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const payload = { ...formData };
      
      if (postType === 'single' && selectedImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
          payload.image_base64 = e.target.result;
          sendPostRequest(payload);
        };
        reader.readAsDataURL(selectedImage);
      } else if (postType === 'carousel' && selectedCarouselImages.length > 0) {
        // Convert carousel images to base64
        const base64Promises = selectedCarouselImages.map(file => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
          });
        });
        
        const carouselImagesBase64 = await Promise.all(base64Promises);
        payload.carousel_images = carouselImagesBase64;
        sendPostRequest(payload);
      } else {
        setMessage({ type: 'error', text: 'Please select at least one image' });
        setLoading(false);
        return;
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error processing images' });
      setLoading(false);
    }
  };

  const storeFormData = async (formData, status = 'posted', errorMessage = null) => {
    try {
      // Get user info from localStorage (matches UserContext storage key)
      const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
      const userId = userData.id;
      const userEmail = userData.email;
      
      // Validate required fields
      if (!userId || !userEmail) {
        console.error('User data not available for Instagram post storage');
        return;
      }
      
      const dataPayload = {
        user_id: userId,
        user_email: userEmail,
        caption: formData.caption || '',
        media_type: postType || 'single'
        // Note: status and error_message not included as they're not in Instagram backend schema
      };

      console.log('Instagram data payload being sent:', dataPayload);
      
      const response = await fetch('http://localhost:3001/api/data/instagram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataPayload)
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Instagram storage error:', response.status, errorData);
      } else {
        console.log('Instagram data stored successfully');
      }
    } catch (error) {
      console.error('Error storing Instagram form data:', error);
      // Don't throw error to avoid disrupting main flow
    }
  };

  const sendPostRequest = async (payload) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/instagram/create-post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (data.success) {
        // Store successful post data
        await storeFormData(formData, 'posted');
        
        setMessage({ type: 'success', text: 'Post created successfully!' });
        setFormData({ caption: '' });
        setSelectedImage(null);
        setSelectedCarouselImages([]);
        setImagePreviews([]);
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
    setLoadingPosts(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/instagram/posts?limit=10`);
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
      const response = await fetch(`${apiBaseUrl}/api/instagram/post/${postId}`, {
        method: 'DELETE'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 p-6">
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

        {/* Credentials Status */}
        {credentialsValid === false && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-lg animate-in slide-in-from-top duration-500">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="ml-3">
                <p className="text-amber-800 font-medium">
                  Instagram credentials not configured or invalid. Please check your API configuration.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Create Post Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg mr-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Create Instagram Post
              </h2>
            </div>
            
            {/* RSS Article Detection Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowArticles(!showArticles)}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  showArticles
                    ? 'bg-pink-100 text-pink-700 shadow-lg'
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
            </div>
          </div>
          
          {/* RSS Articles Panel */}
          {showArticles && (
            <div className="mb-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 animate-in slide-in-from-top duration-300">
              <div className="space-y-4">
                {/* Custom RSS URL Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Custom RSS Feed URL</label>
                  <input
                    type="url"
                    value={customRssUrl}
                    onChange={handleCustomRssChange}
                    placeholder="https://example.com/feed.rss (optional)"
                    className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                  />
                  <p className="text-pink-600 text-sm mt-1">
                    Leave empty to use default Instagram-related feeds
                  </p>
                </div>
                
                {/* RSS Status */}
                <div className="flex items-center justify-between bg-white/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
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
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Recent Articles</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {detectedArticles.map((article, index) => (
                        <div
                          key={index}
                          className="bg-white/70 rounded-lg p-3 hover:bg-white transition-colors cursor-pointer border border-pink-100"
                          onClick={() => handleArticleSelect(article)}
                        >
                          <h4 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : 'No date'}
                            </span>
                            <button className="text-xs text-pink-600 hover:text-pink-700 px-2 py-1 bg-pink-100 rounded">
                              Use for Post
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {rssEnabled && detectedArticles.length === 0 && (
                  <div className="text-center py-8">
                    <Rss className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                    <h3 className="text-gray-700 font-medium mb-2">No Articles Detected Yet</h3>
                    <p className="text-gray-500 text-sm">
                      {rssError ? 'Check your RSS feed URL and try again.' : 'Monitoring for new articles...'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

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
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                Caption
              </label>
              <textarea
                name="caption"
                value={formData.caption}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
                placeholder="Write a caption for your post..."
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Image className="w-4 h-4 mr-2 text-pink-500" />
                Post Type
              </label>
              <div className="flex space-x-4 mb-4">
                <button
                  type="button"
                  onClick={() => setPostType('single')}
                  className={`px-6 py-3 rounded-2xl flex items-center transition-all duration-200 transform hover:scale-105 ${
                    postType === 'single' 
                      ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-2 border-pink-300 shadow-lg' 
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  <Image className="w-5 h-5 mr-2" />
                  Single Image
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('carousel')}
                  className={`px-6 py-3 rounded-2xl flex items-center transition-all duration-200 transform hover:scale-105 ${
                    postType === 'carousel' 
                      ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-2 border-pink-300 shadow-lg' 
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  <Images className="w-5 h-5 mr-2" />
                  Carousel (2-10 images)
                </button>
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                {postType === 'single' ? (
                  <Image className="w-4 h-4 mr-2 text-pink-500" />
                ) : (
                  <Images className="w-4 h-4 mr-2 text-pink-500" />
                )}
                {postType === 'single' ? 'Image' : 'Images'} (Required)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                  multiple={postType === 'carousel'}
                  required
                />
              </div>
              
              {imagePreviews.length > 0 && (
                <div className="mt-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex flex-wrap gap-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={preview} 
                          alt={`Preview ${index + 1}`} 
                          className="w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-shadow duration-200"
                        />
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </div>
                        {postType === 'carousel' && (
                          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                            {index + 1}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || credentialsValid === false || (postType === 'single' && !selectedImage) || (postType === 'carousel' && selectedCarouselImages.length < 2)}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg"
              onClick={handleSubmit}
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
          </div>
        </div>

        {/* Posts List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg mr-4">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recent Posts
            </h3>
          </div>
          
          {loadingPosts ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-pink-500 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading posts...</p>
            </div>
          ) : userPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No posts found</p>
              <p className="text-gray-400 text-sm mt-1">Your Instagram posts will appear here</p>
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
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.created_time).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      <p className="text-gray-900 mb-3 leading-relaxed font-medium">{post.caption || '[No caption]'}</p>
                      {post.image_url && (
                        <div className="mb-3">
                          <img 
                            src={post.image_url} 
                            alt="Post" 
                            className="max-w-full h-40 object-cover rounded-xl shadow-lg border-2 border-white"
                          />
                        </div>
                      )}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span className="flex items-center">
                          <span className="text-pink-500 mr-1">❤️</span>
                          {post.likes || 0} likes
                        </span>
                        <span className="flex items-center">
                          <span className="text-blue-500 mr-1">💬</span>
                          {post.comments || 0} comments
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-6">
                      {post.permalink && (
                        <a
                          href={post.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
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