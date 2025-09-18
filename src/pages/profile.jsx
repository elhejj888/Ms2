// pages/profile.jsx
import { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Add the API base URL constant
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Profile() {
  const { user, setUser } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: ''
  });
  const [scrollY, setScrollY] = useState(0);

  // Ref for form to access form elements
  const formRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || '',
        country: user.country || '',
        age: user.age || '',
        phone_number: user.phone_number || '',
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        bio: user.bio || '',
      });
      setPreviewImage(user.profile_picture ? `${apiBaseUrl}/uploads/${user.profile_picture}` : null);
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (16MB limit)
      if (file.size > 16 * 1024 * 1024) {
        setError('File size must be less than 16MB');
        return;
      }

      // Validate file type
      const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setError('Only PNG, JPG, JPEG, and GIF files are allowed');
        return;
      }

      // Store the file
      setSelectedFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setError('');
    }
  };

  // Updated handleSubmit function for pages/profile.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Get token and check if it exists
    const token = localStorage.getItem('access_token');
    if (!token) {
      setError('Please log in again');
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    
    // Add form data
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== '') {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Add profile picture if selected
    if (selectedFile) {
      formDataToSend.append('profile_picture', selectedFile);
    }

    // Add password fields if they exist and are not empty
    if (passwordData.current_password) {
      formDataToSend.append('current_password', passwordData.current_password);
    }
    if (passwordData.new_password) {
      formDataToSend.append('new_password', passwordData.new_password);
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/profile`, {
        method: 'PUT',
        body: formDataToSend,
        headers: {
          'Authorization': `Bearer ${token}`,
          // Don't set Content-Type header when sending FormData
          // The browser will set it automatically with the correct boundary
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setSuccess('Profile updated successfully');
        setEditMode(false);
        setSelectedFile(null);
        setPasswordData({ current_password: '', new_password: '' });
      } else {
        // Handle specific error cases
        if (response.status === 401) {
          setError('Session expired. Please log in again.');
          // Optional: redirect to login page
          localStorage.removeItem('access_token');
          setUser(null);
        } else {
          setError(data.error || 'Update failed');
        }
      }
    } catch (err) {
      console.error('Profile update error:', err);
      setError('An error occurred during update. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50" />
        <div className="relative text-center p-12 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10">
          <h2 className="text-3xl font-black text-white mb-6">Please log in to view your profile</h2>
          <a
            href="/login"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Background with parallax effect */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-purple-900/30" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Modern Profile Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            
            {/* Profile Header with Gradient */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-8">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile"
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                      />
                    ) : (
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center border-4 border-white shadow-2xl">
                        <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
                      </div>
                    )}
                    {editMode && (
                      <label className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/png,image/jpg,image/jpeg,image/gif"
                        />
                        <Edit className="w-5 h-5 text-white" />
                      </label>
                    )}
                  </div>
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                      {user.first_name || user.last_name
                        ? `${user.first_name || ''} ${user.last_name || ''}`
                        : user.username}
                    </h1>
                    <p className="text-xl text-blue-200 mb-2">@{user.username}</p>
                    {user.bio && (
                      <p className="text-white/90 max-w-md">{user.bio}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  {editMode ? (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => {
                          setEditMode(false);
                          setSelectedFile(null);
                          setPasswordData({ current_password: '', new_password: '' });
                          setPreviewImage(user.profile_picture ? `${apiBaseUrl}/uploads/${user.profile_picture}` : null);
                        }}
                        className="p-3 bg-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                        title="Cancel"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="p-3 bg-white rounded-2xl text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl"
                        title="Save"
                      >
                        {loading ? (
                          <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <Save className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditMode(true)}
                      className="group p-3 bg-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      title="Edit Profile"
                    >
                      <Edit className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-8">
              {error && (
                <div className="mb-8 p-6 bg-red-500/20 backdrop-blur-lg text-red-300 rounded-2xl flex items-start border border-red-500/30">
                  <AlertCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{error}</span>
                </div>
              )}

              {success && (
                <div className="mb-8 p-6 bg-green-500/20 backdrop-blur-lg text-green-300 rounded-2xl flex items-start border border-green-500/30">
                  <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{success}</span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-lg font-bold text-white mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-6 w-6 text-blue-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${
                          editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                        } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`}
                      />
                    </div>
                  </div>

                  {/* Phone Number Field */}
                  <div className="group">
                    <label htmlFor="phone_number" className="block text-lg font-bold text-white mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                      <input
                        id="phone_number"
                        name="phone_number"
                        type="tel"
                        value={formData.phone_number}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${
                          editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                        } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`}
                      />
                    </div>
                  </div>

                  {/* First Name Field */}
                  <div className="group">
                    <label htmlFor="first_name" className="block text-lg font-bold text-white mb-3">
                      First Name
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleChange}
                      disabled={!editMode}
                      className={`block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border ${
                        editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                      } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`}
                    />
                  </div>

                  {/* Last Name Field */}
                  <div className="group">
                    <label htmlFor="last_name" className="block text-lg font-bold text-white mb-3">
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleChange}
                      disabled={!editMode}
                      className={`block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border ${
                        editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                      } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`}
                    />
                  </div>

                  {/* Country Field */}
                  <div className="group">
                    <label htmlFor="country" className="block text-lg font-bold text-white mb-3">
                      Country
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-6 w-6 text-blue-400" />
                      </div>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${
                          editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                        } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`}
                      />
                    </div>
                  </div>

                  {/* Age Field */}
                  <div className="group">
                    <label htmlFor="age" className="block text-lg font-bold text-white mb-3">
                      Age
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar className="h-6 w-6 text-blue-400" />
                      </div>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="13"
                        max="120"
                        value={formData.age}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${
                          editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                        } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`}
                      />
                    </div>
                  </div>

                  {/* Bio Field - Full Width */}
                  <div className="md:col-span-2 group">
                    <label htmlFor="bio" className="block text-lg font-bold text-white mb-3">
                      Biography
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      value={formData.bio}
                      onChange={handleChange}
                      disabled={!editMode}
                      className={`block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border ${
                        editMode ? 'border-blue-500/50 focus:border-blue-400' : 'border-white/20'
                      } rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300 resize-none`}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>

                {/* Password Change Section */}
                {editMode && (
                  <div className="pt-8 border-t border-white/20">
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                      <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mr-4">
                          <Lock className="w-6 h-6 text-blue-400" />
                        </div>
                        Change Password
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                          <label htmlFor="current_password" className="block text-lg font-bold text-white mb-3">
                            Current Password
                          </label>
                          <input
                            id="current_password"
                            name="current_password"
                            type="password"
                            value={passwordData.current_password}
                            onChange={handlePasswordChange}
                            className="block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-blue-500/50 rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white text-lg transition-all duration-300"
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="new_password" className="block text-lg font-bold text-white mb-3">
                            New Password
                          </label>
                          <input
                            id="new_password"
                            name="new_password"
                            type="password"
                            value={passwordData.new_password}
                            onChange={handlePasswordChange}
                            className="block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-blue-500/50 rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white text-lg transition-all duration-300"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with better visibility */}
      <div className="relative mt-auto">
        {/* Footer backdrop for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm" />
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}