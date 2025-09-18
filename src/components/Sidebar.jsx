import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { 
  Home,
  BarChart3,
  MessageSquare,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus,
  Zap,
  ChartNetwork,
  ChartPie
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const { user } = useUser();
  const isAdmin = user?.role === 'admin';

  const platformTabs = [
    {
      id: 'reddit',
      name: 'Reddit',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-400/10',
      textColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      shadowColor: 'shadow-orange-500/20',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-gradient-to-r from-blue-600/10 to-blue-700/10',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      color: 'from-purple-500 via-pink-500 to-orange-400',
      bgColor: 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-400/10',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      icon: '𝕏',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gradient-to-r from-gray-600/10 to-gray-800/10',
      textColor: 'text-gray-300',
      borderColor: 'border-gray-500/30',
      shadowColor: 'shadow-gray-500/20',
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-r from-red-500/10 to-red-600/10',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/30',
      shadowColor: 'shadow-red-500/20',
    },
    {
      id: 'youtube',
      name: 'YouTube Shorts',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-gradient-to-r from-red-600/10 to-red-700/10',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/30',
      shadowColor: 'shadow-red-500/20',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎵',
      color: 'from-pink-500 to-blue-500',
      hoverColor: 'hover:black hover:to-blue-600',
      textColor: 'text-black',
      bgColor: 'bg-gradient-to-r from-pink-500 to-blue-500',
      description: 'Upload and manage TikTok videos, track performance, and engage with your audience.'
    }
  ];

  const utilityTabs = [
    {
      id: 'analytics',
      name: 'Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10',
      textColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      shadowColor: 'shadow-indigo-500/20',
    },
    {
      id: 'Business analytics',
      name: 'Business Analytics',
      icon: <ChartPie className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10',
      textColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      shadowColor: 'shadow-indigo-500/20',
    },
  ];

  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      onClick={onClick}
      onMouseEnter={() => setHoveredTab(tab.id)}
      onMouseLeave={() => setHoveredTab(null)}
      className={`group relative w-full flex items-center ${
        isCollapsed ? 'justify-center px-3' : 'justify-start px-4'
      } py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? `${tab.bgColor} ${tab.textColor} border ${tab.borderColor} shadow-lg ${tab.shadowColor} backdrop-blur-lg`
          : 'text-gray-400 hover:bg-white/5 hover:text-white hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm border border-transparent hover:border-white/10'
      }`}
      title={isCollapsed ? tab.name : ''}
    >
      <div className={`flex items-center ${isCollapsed ? '' : 'space-x-3'}`}>
        <div className={`flex-shrink-0 transition-all duration-300 ${
          isActive ? 'scale-110 drop-shadow-lg' : 'group-hover:scale-110'
        }`}>
          {tab.icon}
        </div>
        {!isCollapsed && (
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold">{tab.name}</p>
          </div>
        )}
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className={`absolute right-2 w-2 h-2 rounded-full bg-gradient-to-r ${tab.color} animate-pulse`} />
      )}

      {/* Hover tooltip for collapsed state */}
      {isCollapsed && hoveredTab === tab.id && (
        <div className="absolute left-full ml-3 px-4 py-2 bg-gray-900/95 backdrop-blur-lg text-white text-sm rounded-xl shadow-2xl z-50 whitespace-nowrap border border-white/10">
          {tab.name}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-white/10" />
        </div>
      )}
    </button>
  );

  return (
    <div className={`bg-black/95 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } flex flex-col h-full shadow-2xl shadow-black/50 relative overflow-hidden`}>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      {/* Sidebar Header */}
      <div className="relative p-4 border-b border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-black text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Platforms
              </h2>
              <p className="text-xs text-gray-400 font-medium">Manage your social media</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-white/20 backdrop-blur-sm"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative flex-1 p-4 space-y-8 overflow-y-auto">
        {/* Social Media Platforms */}
        <div>
          {!isCollapsed && (
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Social Platforms
              </h3>

            </div>
          )}
          <div className="space-y-2">
            {platformTabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        {/* Utilities */}
        <div>
          {!isCollapsed && (
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Analytics
            </h3>
          )}
          <div className="space-y-2">
            {utilityTabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        {/* Admin Dashboard (single button, visible only for admins) */}
        {isAdmin && (
          <div className="mt-4">
            {!isCollapsed && (
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Admin
              </h3>
            )}
            <div className="space-y-2">
              <TabButton
                tab={{
                  id: 'admin-dashboard',
                  name: 'Admin Dashboard',
                  icon: <BarChart3 className="w-5 h-5" />,
                  color: 'from-emerald-500 to-teal-600',
                  bgColor: 'bg-gradient-to-r from-emerald-500/10 to-teal-600/10',
                  textColor: 'text-emerald-400',
                  borderColor: 'border-emerald-500/30',
                  shadowColor: 'shadow-emerald-500/20',
                }}
                isActive={activeTab === 'admin-dashboard'}
                onClick={() => setActiveTab('admin-dashboard')}
              />
            </div>
          </div>
        )}
      </div>
      

      {/* AI Assistant Indicator */}
      <div className="relative p-4 border-t border-white/10 bg-white/5 backdrop-blur-lg">
        <div className={`flex items-center ${
          isCollapsed ? 'justify-center' : 'space-x-3'
        } p-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20 backdrop-blur-lg relative overflow-hidden`}>
          
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
          
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 relative">
              <Zap className="w-4 h-4 text-white animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-50 animate-ping" />
            </div>
          </div>
          
          {!isCollapsed && (
            <div className="relative flex-1">
              <p className="text-sm font-bold text-white">AI Assistant</p>
              <p className="text-xs text-blue-300">Ready to help</p>
            </div>
          )}
          
          <div className="relative w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;