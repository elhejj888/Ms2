import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';
import { 
  User, 
  LogOut, 
  Settings, 
  HelpCircle,
  Menu,
  X,
  ChevronDown,
  Zap,
  Globe
} from 'lucide-react';

export default function Header() {
  const { user, logout, isAuthenticated } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showChannelDropdown, setShowChannelDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
      logout();
      setShowDropdown(false);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      logout();
      setShowDropdown(false);
      router.push('/');
    }
  };

  const platforms = [
    { name: 'Reddit', href: '/platforms/reddit', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
    { name: 'Instagram', href: '/platforms/instagram', color: 'text-pink-400', bgColor: 'bg-pink-500/20' },
    { name: 'Facebook', href: '/platforms/facebook', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
    { name: 'X (Twitter)', href: '/platforms/twitter', color: 'text-gray-300', bgColor: 'bg-gray-500/20' },
    { name: 'Pinterest', href: '/platforms/pinterest', color: 'text-red-400', bgColor: 'bg-red-500/20' },
    { name: 'YouTube Shorts', href: '/platforms/youtube', color: 'text-red-400', bgColor: 'bg-red-500/20' }
  ];

  const isLoggedIn = isAuthenticated();

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section - Modern Dark Theme */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Globe className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                SocialFlow
              </h1>
              <p className="text-xs text-gray-400 -mt-0.5 font-medium tracking-wide">AI-Powered Management</p>
            </div>
          </Link>

          {/* Center Navigation - For logged out users */}
          {!isLoggedIn && (
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center max-w-md">
              <Link 
                href="/blog" 
                className="text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                Blog
              </Link>
              
              {/* Modern Channel Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowChannelDropdown(!showChannelDropdown)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
                >
                  <span>Channels</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showChannelDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 py-3 z-50">
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-700/50">
                      Social Platforms
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-3">
                      {platforms.map((platform) => (
                        <Link
                          key={platform.name}
                          href={platform.href}
                          className={`flex items-center px-3 py-3 text-sm hover:${platform.bgColor} transition-all duration-300 rounded-xl border border-transparent hover:border-gray-600/50`}
                          onClick={() => setShowChannelDropdown(false)}
                        >
                          <div className={`w-3 h-3 rounded-full ${platform.color.replace('text-', 'bg-')} mr-3 shadow-lg`}></div>
                          <span className={`${platform.color} font-medium`}>{platform.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                Pricing
              </Link>
            </nav>
          )}

          {/* Right Side - Auth Buttons or User Profile */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {!isLoggedIn ? (
              <>
                {/* Modern Auth Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                  <Link
                    href="/login"
                    className="text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm hover:from-blue-600 hover:to-purple-600 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </>
            ) : (
              /* Logged In User Profile - Modern Dark */
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-300 max-w-24 truncate group-hover:text-white transition-colors">
                    {user?.username || 'User'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </button>

                {/* Modern User Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-52 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 py-2 z-50">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl mx-2 transition-all duration-300 border border-transparent hover:border-white/20"
                      onClick={() => setShowDropdown(false)}
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <hr className="my-2 mx-2 border-gray-700/50" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl mx-2 transition-all duration-300 border border-transparent hover:border-red-500/30"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu - Dark Theme */}
        {showMobileMenu && !isLoggedIn && (
          <div className="md:hidden border-t border-gray-800/50 py-4 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                onClick={() => setShowMobileMenu(false)}
              >
                Blog
              </Link>
              
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 py-2">Social Platforms</p>
                <div className="grid grid-cols-2 gap-2 px-2">
                  {platforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className={`flex items-center space-x-3 text-sm ${platform.color} hover:bg-white/10 py-3 px-3 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <div className={`w-3 h-3 rounded-full ${platform.color.replace('text-', 'bg-')} shadow-lg`}></div>
                      <span className="font-medium">{platform.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                onClick={() => setShowMobileMenu(false)}
              >
                Pricing
              </Link>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800/50 mt-3">
                <Link
                  href="/login"
                  className="text-center py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-xl mx-2 border border-transparent hover:border-white/20"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mx-2 transform hover:scale-105"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}