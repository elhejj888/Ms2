// Utility functions for managing user-specific connection status using cookies

/**
 * Save connection status to cookies for a specific user and platform
 * @param {string} platform - The platform name (x, reddit, pinterest, tiktok)
 * @param {string} userId - The user ID
 * @param {object} status - The connection status object
 */
export const saveConnectionStatus = (platform, userId, status) => {
  try {
    const cookieName = `${platform}_connection_status_${userId}`;
    const cookieValue = JSON.stringify(status);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // 30 days expiration
    
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;
    console.log(`Saved connection status for ${platform} user ${userId}:`, status);
  } catch (error) {
    console.error(`Error saving connection status for ${platform}:`, error);
  }
};

/**
 * Get connection status from cookies for a specific user and platform
 * @param {string} platform - The platform name (x, reddit, pinterest, tiktok)
 * @param {string} userId - The user ID
 * @returns {object|null} The connection status object or null if not found
 */
export const getConnectionStatus = (platform, userId) => {
  try {
    const cookieName = `${platform}_connection_status_${userId}`;
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        const decodedValue = decodeURIComponent(value);
        return JSON.parse(decodedValue);
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error getting connection status for ${platform}:`, error);
    return null;
  }
};

/**
 * Clear connection status from cookies for a specific user and platform
 * @param {string} platform - The platform name (x, reddit, pinterest, tiktok)
 * @param {string} userId - The user ID
 */
export const clearConnectionStatus = (platform, userId) => {
  try {
    const cookieName = `${platform}_connection_status_${userId}`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
    console.log(`Cleared connection status for ${platform} user ${userId}`);
  } catch (error) {
    console.error(`Error clearing connection status for ${platform}:`, error);
  }
};

/**
 * Clear all connection statuses for a specific user (used during logout)
 * @param {string} userId - The user ID
 */
export const clearAllConnectionStatuses = (userId) => {
  const platforms = ['x', 'reddit', 'pinterest', 'tiktok', 'youtube'];
  
  platforms.forEach(platform => {
    clearConnectionStatus(platform, userId);
  });
  
  console.log(`Cleared all connection statuses for user ${userId}`);
};

/**
 * Get JWT token from localStorage
 * @returns {string|null} The JWT token or null if not found
 */
export const getJWTToken = () => {
  try {
    // Use the same key as UserContext ('access_token')
    return localStorage.getItem('access_token');
  } catch (error) {
    console.error('Error getting JWT token:', error);
    return null;
  }
};

/**
 * Get current user ID from localStorage
 * @returns {string|null} The user ID or null if not found
 */
export const getCurrentUserId = () => {
  try {
    // Try user_data first (standard across most components)
    const userDataStr = localStorage.getItem('user_data');
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      if (userData && userData.id) return userData.id.toString();
    }
    // Fallback to 'user' key
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user && user.id) return user.id.toString();
    }
    return null;
  } catch (error) {
    console.error('Error getting current user ID:', error);
    return null;
  }
};

/**
 * Create headers with JWT authentication
 * @returns {object} Headers object with JWT token
 */
export const createAuthHeaders = () => {
  const token = getJWTToken();
  const headers = {
    'Content-Type': 'application/json'
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};
