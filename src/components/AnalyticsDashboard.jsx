import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Area, AreaChart
} from 'recharts';
import { 
  TrendingUp, Users, Activity, BarChart3, PieChart as PieChartIcon,
  Calendar, Clock, Share2, Eye, Download, RefreshCw, Sparkles,
  Globe, MessageSquare, Zap, ArrowUp, ArrowDown, Minus
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const { user, isAuthenticated, loading: userLoading, isInitialized, logout } = useUser();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState(30);
  const [refreshing, setRefreshing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use consistent environment variable with other components
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const COLORS = {
    instagram: '#E4405F',
    facebook: '#1877F2',
    x: '#1DA1F2',
    reddit: '#FF4500',
    pinterest: '#BD081C',
    youtube: '#FF0000'
  };

  useEffect(() => {
    setIsVisible(true);
    // Only fetch data when UserContext is fully initialized and user is authenticated
    if (isInitialized && !userLoading) {
      if (isAuthenticated()) {
        fetchDashboardData();
      } else {
        setLoading(false);
        setError('Please login to view analytics dashboard.');
      }
    }
  }, [selectedTimeRange, isAuthenticated, userLoading, isInitialized]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if user is authenticated through context
      if (!isAuthenticated()) {
        setError('Please login to view analytics dashboard.');
        setLoading(false);
        return;
      }
      
      const token = localStorage.getItem('access_token');
      console.log('Dashboard fetch - Token found:', token ? 'Yes' : 'No');
      
      if (!token) {
        console.log('No token found, logging out user');
        logout();
        setError('Authentication failed. Please login again.');
        setLoading(false);
        return;
      }
      
      // Validate token format
      try {
        const tokenPayload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Date.now() / 1000;
        
        if (tokenPayload.exp <= currentTime) {
          console.log('Token expired, logging out user');
          logout();
          setError('Session expired. Please login again.');
          setLoading(false);
          return;
        }
        console.log('Token is valid, expires at:', new Date(tokenPayload.exp * 1000));
      } catch (tokenError) {
        console.error('Invalid token format:', tokenError);
        logout();
        setError('Invalid authentication. Please login again.');
        setLoading(false);
        return;
      }
      
      // First test the analytics auth endpoint
      console.log('Testing analytics authentication...');
      const authTestResponse = await fetch(`${apiBaseUrl}/api/analytics/test-auth`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Analytics auth test response status:', authTestResponse.status);
      
      if (!authTestResponse.ok) {
        const authError = await authTestResponse.json().catch(() => ({ error: 'Auth test failed' }));
        console.error('Analytics auth test failed:', authError);
        
        if (authTestResponse.status === 401) {
          logout();
          setError('Authentication failed. Please login again.');
          return;
        }
      } else {
        const authData = await authTestResponse.json();
        console.log('Analytics auth test successful:', authData);
      }
      
      console.log('Making dashboard API request to:', `${apiBaseUrl}/api/analytics/dashboard?include_user_data=true`);
      
      const response = await fetch(`${apiBaseUrl}/api/analytics/dashboard?include_user_data=true`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Dashboard API response status:', response.status);
      
      if (!response.ok) {
        if (response.status === 401) {
          console.log('401 error - token invalid on server, logging out');
          logout();
          setError('Session expired. Please login again.');
          return;
        }
        
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setDashboardData(data.data);
        setError('');
      } else {
        setError(data.error || 'Failed to fetch analytics data');
      }
    } catch (err) {
      console.error('Analytics fetch error:', err);
      setError(err.message || 'Network error occurred');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchDashboardData();
  };

  const formatPlatformData = (platformStats) => {
    if (!platformStats) return [];
    
    return Object.entries(platformStats).map(([platform, stats]) => ({
      name: platform.charAt(0).toUpperCase() + platform.slice(1),
      posts: stats.total_posts,
      users: stats.unique_users,
      successRate: stats.success_rate,
      percentage: stats.usage_percentage,
      color: COLORS[platform] || '#8884d8'
    }));
  };

  const formatTrendData = (dailyTrends) => {
    if (!dailyTrends) return [];
    
    const dates = new Set();
    Object.values(dailyTrends).forEach(platformData => {
      platformData.forEach(item => dates.add(item.date));
    });
    
    return Array.from(dates).sort().map(date => {
      const dataPoint = { date };
      Object.entries(dailyTrends).forEach(([platform, platformData]) => {
        const dayData = platformData.find(item => item.date === date);
        dataPoint[platform] = dayData ? dayData.posts : 0;
      });
      return dataPoint;
    });
  };

  // Show loading state while user context is loading or initializing
  if (userLoading || !isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Loading user data...</p>
          <div className="mt-4">
            <Sparkles className="w-6 h-6 text-blue-400 mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated()) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/25">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Analytics Dashboard</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Please login to view your social media analytics and insights.
          </p>
          <div className="space-y-4">
            <a
              href="/login"
              className="block w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Login to Continue
            </a>
            <a
              href="/register"
              className="block w-full px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Loading analytics data...</p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/20 text-red-300 px-6 py-4 rounded-2xl mb-6">
            <h3 className="font-bold text-lg mb-2">Error</h3>
            <p>{error}</p>
          </div>
          <button 
            onClick={fetchDashboardData}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  const platformData = formatPlatformData(dashboardData?.platform_usage?.platform_statistics);
  const trendData = formatTrendData(dashboardData?.temporal_trends?.daily_trends);
  const userEngagement = dashboardData?.user_engagement;
  const userActivity = dashboardData?.user_activity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className={`flex justify-between items-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-4 border border-blue-500/20">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Analytics Dashboard
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Your social media
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                insights
              </span>
            </h1>
            <p className="text-xl text-gray-300">Comprehensive analytics and performance metrics</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(Number(e.target.value))}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Total Users",
              value: userEngagement?.total_registered_users || 0,
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-500/20 to-cyan-500/20"
            },
            {
              icon: <Activity className="w-8 h-8" />,
              title: "Active Users", 
              value: userEngagement?.active_users || 0,
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-500/20 to-emerald-500/20"
            },
            {
              icon: <Share2 className="w-8 h-8" />,
              title: "Total Posts",
              value: dashboardData?.platform_usage?.total_posts_across_platforms || 0,
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-500/20 to-pink-500/20"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Activation Rate",
              value: `${userEngagement?.activation_rate || 0}%`,
              gradient: "from-orange-500 to-red-500",
              bgGradient: "from-orange-500/20 to-red-500/20"
            }
          ].map((metric, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${metric.bgGradient} backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 bg-gradient-to-r ${metric.gradient} rounded-2xl shadow-lg`}>
                  {metric.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-gray-300 font-medium">{metric.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Platform Usage Pie Chart */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                <PieChartIcon className="w-6 h-6" />
              </div>
              Platform Distribution
            </h3>
            <div className="bg-black/20 rounded-2xl p-4">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="posts"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Platform Posts Bar Chart */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              Posts by Platform
            </h3>
            <div className="bg-black/20 rounded-2xl p-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <YAxis 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                  />
                  <Bar dataKey="posts" fill="#8884d8" radius={[4, 4, 0, 0]}>
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Modern Trend Chart */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-3 flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl mr-4 shadow-2xl shadow-blue-500/25">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                Platform Activity Trends
              </h3>
              <p className="text-gray-300 text-lg">Track your social media engagement across all platforms</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Last {selectedTimeRange} days
              </div>
            </div>
          </div>
          
          <div className="relative bg-black/20 rounded-2xl p-6">
            <ResponsiveContainer width="100%" height={450}>
              <AreaChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  {Object.entries(COLORS).map(([platform, color]) => (
                    <linearGradient key={platform} id={`gradient-${platform}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={color} stopOpacity={0.4}/>
                      <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                    padding: '12px 16px',
                    color: 'white'
                  }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                  formatter={(value) => (
                    <span style={{ color: '#fff', fontWeight: '500', textTransform: 'capitalize' }}>
                      {value}
                    </span>
                  )}
                />
                {Object.keys(COLORS).map(platform => (
                  <Area
                    key={platform}
                    type="monotone"
                    dataKey={platform}
                    stroke={COLORS[platform]}
                    strokeWidth={3}
                    fill={`url(#gradient-${platform})`}
                    dot={{ fill: COLORS[platform], strokeWidth: 2, r: 4 }}
                    activeDot={{ 
                      r: 6, 
                      stroke: COLORS[platform], 
                      strokeWidth: 2, 
                      fill: '#000',
                      boxShadow: `0 0 10px ${COLORS[platform]}40`
                    }}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
            
            {/* Trend Indicators */}
            <div className="absolute top-6 right-6 flex flex-col space-y-3">
              {Object.entries(COLORS).slice(0, 3).map(([platform, color]) => {
                const currentData = trendData[trendData.length - 1];
                const previousData = trendData[trendData.length - 2];
                const current = currentData?.[platform] || 0;
                const previous = previousData?.[platform] || 0;
                const trend = current > previous ? 'up' : current < previous ? 'down' : 'stable';
                
                return (
                  <div key={platform} className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/20">
                    <div 
                      className="w-3 h-3 rounded-full shadow-lg" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-sm font-bold text-white capitalize">{platform}</span>
                    <div className={`p-1 rounded-full ${
                      trend === 'up' ? 'bg-green-500/20 text-green-300' :
                      trend === 'down' ? 'bg-red-500/20 text-red-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {trend === 'up' ? <ArrowUp className="w-3 h-3" /> : 
                       trend === 'down' ? <ArrowDown className="w-3 h-3" /> : 
                       <Minus className="w-3 h-3" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Chart Statistics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(COLORS).map(([platform, color]) => {
              const totalActivity = trendData.reduce((sum, day) => sum + (day[platform] || 0), 0);
              const avgActivity = Math.round(totalActivity / trendData.length);
              
              return (
                <div key={platform} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="w-4 h-4 rounded-full shadow-lg" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-lg font-bold text-white capitalize">{platform}</span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{totalActivity}</div>
                  <div className="text-sm text-gray-400">Avg: {avgActivity}/day</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* User Activity Section */}
        {userActivity && (
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4">
                <Activity className="w-6 h-6" />
              </div>
              Your Activity Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/20">
                <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {userActivity.total_posts_across_platforms}
                </p>
                <p className="text-gray-300 font-medium">Total Posts</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/20">
                <p className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {userActivity.user_statistics?.platforms_used || 0}
                </p>
                <p className="text-gray-300 font-medium">Platforms Used</p>
              </div>
              <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/20">
                <p className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {userActivity.user_statistics?.avg_success_rate || 0}%
                </p>
                <p className="text-gray-300 font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        )}

        {/* User Engagement Breakdown */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mr-4">
              <Users className="w-6 h-6" />
            </div>
            User Engagement Levels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {userEngagement?.engagement_levels && Object.entries(userEngagement.engagement_levels).map(([level, count], index) => (
              <div key={level} className="text-center bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-black text-white mb-2">{count}</p>
                <p className="text-sm text-gray-300 font-medium capitalize">
                  {level.replace('_', ' ')} Users
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-black text-white mb-4">
              Want more detailed insights?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Upgrade to Premium for advanced analytics and AI-powered recommendations
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <Sparkles className="w-5 h-5 mr-2" />
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;