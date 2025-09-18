// Enhanced context/UserContext.js with Next.js compatibility
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { clearAllConnectionStatuses, getCurrentUserId } from '../utils/connectionStatus';

const UserContext = createContext();

// Use Next.js environment variable
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Function to check if we're on the client side
  const isClient = typeof window !== 'undefined';

  // Function to check if token is valid
  const isTokenValid = useCallback((token) => {
    if (!token) return false;
    
    try {
      // Decode JWT token to check expiration
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      
      // Add 5 minute buffer to prevent edge cases
      return tokenPayload.exp > (currentTime + 300);
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  }, []);

  // Function to validate token with server
  const validateTokenWithServer = useCallback(async (token) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.user || null;
      }
      return null;
    } catch (error) {
      console.error('Server token validation error:', error);
      return null;
    }
  }, []);

  // Function to load user from token
  const loadUserFromToken = useCallback(async () => {
    // Skip if we're on the server side
    if (!isClient) {
      setLoading(false);
      setIsInitialized(true);
      return;
    }

    try {
      const token = localStorage.getItem('access_token');
      
      if (!token) {
        setUser(null);
        setLoading(false);
        setIsInitialized(true);
        return;
      }

      // First check if token is expired locally
      if (!isTokenValid(token)) {
        console.log('Token expired locally, removing...');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_data');
        setUser(null);
        setLoading(false);
        setIsInitialized(true);
        return;
      }

      // Try to get user from localStorage first for instant loading
      const cachedUser = localStorage.getItem('user_data');
      if (cachedUser) {
        try {
          const userData = JSON.parse(cachedUser);
          setUser(userData);
          setLoading(false);
          setIsInitialized(true);
          return;
        } catch (error) {
          console.error('Error parsing cached user data:', error);
          localStorage.removeItem('user_data');
        }
      }

      // No cached user, validate with server
      const userData = await validateTokenWithServer(token);
      
      if (userData) {
        setUser(userData);
        // Cache user data for instant loading next time
        localStorage.setItem('user_data', JSON.stringify(userData));
      } else {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_data');
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      if (isClient) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_data');
      }
      setUser(null);
    } finally {
      setLoading(false);
      setIsInitialized(true);
    }
  }, [isTokenValid, validateTokenWithServer, isClient]);

  // Initialize auth state on mount - ONLY ONCE and only on client
  useEffect(() => {
    if (!isInitialized && isClient) {
      loadUserFromToken();
    }
  }, [isInitialized, isClient]); // Remove loadUserFromToken from dependencies to prevent loops

  // Function to logout user
  const logout = useCallback(async () => {
    if (!isClient) return;

    try {
      // Clear all connection statuses for the current user before logout
      const userId = getCurrentUserId();
      if (userId) {
        clearAllConnectionStatuses(userId);
      }
      
      const token = localStorage.getItem('access_token');
      if (token) {
        // Call logout endpoint
        await fetch(`${apiBaseUrl}/api/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_data');
      setUser(null);
    }
  }, [isClient]);

  // Function to login user
  const login = useCallback((userData, token) => {
    if (!isClient) return;
    
    localStorage.setItem('access_token', token);
    localStorage.setItem('user_data', JSON.stringify(userData));
    setUser(userData);
  }, [isClient]);

  // Function to check if user is authenticated
  const isAuthenticated = useCallback(() => {
    return !!user;
  }, [user]);

  // Function to update user data
  const updateUser = useCallback((userData) => {
    setUser(userData);
    if (isClient) {
      localStorage.setItem('user_data', JSON.stringify(userData));
    }
  }, [isClient]);

  // Auto-refresh token logic - simplified to prevent constant checking
  useEffect(() => {
    if (!user || !isClient) return;

    const token = localStorage.getItem('access_token');
    if (!token) return;

    const checkTokenExpiry = () => {
      if (!isTokenValid(token)) {
        console.log('Token expired, logging out...');
        logout();
      }
    };

    // Check token every 10 minutes instead of 5 to reduce frequency
    const interval = setInterval(checkTokenExpiry, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [user, isTokenValid, logout, isClient]);

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      loading, 
      logout, 
      login, 
      isAuthenticated,
      loadUserFromToken,
      updateUser,
      isInitialized
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}