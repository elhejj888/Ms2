// pages/register.jsx - Modern design matching landing page
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';
import Link from 'next/link';
import { User, Mail, Lock, Phone, MapPin, Calendar, AlertCircle, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Add the API base URL constant
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.arabielle.com/';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
    admin_code: '',
    country: '',
    age: '',
    phone_number: '',
    first_name: '',
    last_name: '',
    bio: '',
    profile_picture: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
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

      setFormData({
        ...formData,
        profile_picture: file,
      });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setError(''); // Clear any previous errors
    }
  };

  const validateForm = () => {
    // Client-side validation
    if (!formData.username.trim()) {
      setError('Username is required');
      return false;
    }

    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }

    if (!formData.password.trim()) {
      setError('Password is required');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    // Role validation
    const allowedRoles = ['user', 'admin'];
    if (!allowedRoles.includes((formData.role || '').toLowerCase())) {
      setError('Invalid role selected');
      return false;
    }

    // Admin code is required if role is admin
    if ((formData.role || '').toLowerCase() === 'admin' && !formData.admin_code.trim()) {
      setError('Admin code is required for Admin role');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Age validation
    if (formData.age) {
      const age = parseInt(formData.age);
      if (isNaN(age) || age < 13 || age > 120) {
        setError('Age must be between 13 and 120');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    
    // Add all form fields
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== '') {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Debug: Log what we're sending
    console.log('Sending registration data:', Object.fromEntries(formDataToSend));

    try {
      // Fixed: Use apiBaseUrl instead of hardcoded path
      const response = await fetch(`${apiBaseUrl}/api/auth/register`, {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - let the browser set it for FormData
      });

      const data = await response.json();
      console.log('Registration response:', data);

      if (response.ok) {
        // Save user data and token
        if (data.access_token) {
          localStorage.setItem('access_token', data.access_token);
        }
        setUser(data.user);
        router.push('/');
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-visible">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <Header />
      
      <div className="relative flex-grow flex items-center justify-center p-4 py-16">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Join the Community
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              Start your journey
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                today
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your account and join thousands of creators managing their social media like pros
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
            {error && (
              <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 text-red-300 rounded-2xl flex items-start backdrop-blur-lg">
                <AlertCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-lg">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Username */}
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-lg font-semibold text-white">
                    Username*
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                      placeholder="johndoe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-lg font-semibold text-white">
                    Email*
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-lg font-semibold text-white">
                    Password*
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      minLength="6"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-lg font-semibold text-white">
                    Role*
                  </label>
                  <div className="relative group z-50 overflow-visible">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-10 py-4 bg-gray-900/80 text-white border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg relative z-50"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>

                {/* Admin Code (shown only when role = admin) */}
                { (formData.role || '').toLowerCase() === 'admin' && (
                  <div className="space-y-2">
                    <label htmlFor="admin_code" className="block text-lg font-semibold text-gray-300">
                      Admin Code
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                      </div>
                      <input
                        id="admin_code"
                        name="admin_code"
                        type="text"
                        value={formData.admin_code}
                        onChange={handleChange}
                        className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                        placeholder="Enter admin code"
                      />
                    </div>
                  </div>
                )}

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone_number" className="block text-lg font-semibold text-gray-300">
                    Phone Number
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>

                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="first_name" className="block text-lg font-semibold text-gray-300">
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="block w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                    placeholder="John"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="last_name" className="block text-lg font-semibold text-gray-300">
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="block w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                    placeholder="Doe"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <label htmlFor="country" className="block text-lg font-semibold text-gray-300">
                    Country
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                      placeholder="United States"
                    />
                  </div>
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <label htmlFor="age" className="block text-lg font-semibold text-gray-300">
                    Age
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="13"
                      max="120"
                      value={formData.age}
                      onChange={handleChange}
                      className="block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm"
                      placeholder="25"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2 space-y-2">
                  <label htmlFor="bio" className="block text-lg font-semibold text-gray-300">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={formData.bio}
                    onChange={handleChange}
                    className="block w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm resize-none"
                    placeholder="Tell us about yourself..."
                  ></textarea>
                </div>

                {/* Profile Picture */}
                <div className="lg:col-span-2 space-y-4">
                  <label htmlFor="profile_picture" className="block text-lg font-semibold text-gray-300">
                    Profile Picture
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      {previewImage ? (
                        <img
                          className="h-24 w-24 rounded-full object-cover border-4 border-blue-500/50 shadow-lg shadow-blue-500/20"
                          src={previewImage}
                          alt="Profile preview"
                        />
                      ) : (
                        <div className="h-24 w-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-gray-400">
                          <User className="h-12 w-12" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="cursor-pointer">
                        <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 rounded-2xl text-lg font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all backdrop-blur-sm">
                          Choose file
                        </span>
                        <input
                          id="profile_picture"
                          name="profile_picture"
                          type="file"
                          accept="image/png,image/jpg,image/jpeg,image/gif"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="mt-2 text-gray-400">
                        PNG, JPG, GIF up to 16MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="text-gray-300 text-lg leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex justify-center items-center py-5 px-8 border border-transparent rounded-2xl text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-4 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </div>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-300">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  Sign in
                </Link>
              </p>
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
