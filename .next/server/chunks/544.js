exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 9944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useUser),
/* harmony export */   d: () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_connectionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1526);
// Enhanced context/UserContext.js with Next.js compatibility



const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Use Next.js environment variable
const apiBaseUrl = "http://localhost:5000" || 0;
function UserProvider({ children }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [isInitialized, setIsInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Function to check if we're on the client side
    const isClient = "undefined" !== "undefined";
    // Function to check if token is valid
    const isTokenValid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((token)=>{
        if (!token) return false;
        try {
            // Decode JWT token to check expiration
            const tokenPayload = JSON.parse(atob(token.split(".")[1]));
            const currentTime = Date.now() / 1000;
            // Add 5 minute buffer to prevent edge cases
            return tokenPayload.exp > currentTime + 300;
        } catch (error) {
            console.error("Token validation error:", error);
            return false;
        }
    }, []);
    // Function to validate token with server
    const validateTokenWithServer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (token)=>{
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/profile`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                return data.user || null;
            }
            return null;
        } catch (error) {
            console.error("Server token validation error:", error);
            return null;
        }
    }, []);
    // Function to load user from token
    const loadUserFromToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // Skip if we're on the server side
        if (!isClient) {
            setLoading(false);
            setIsInitialized(true);
            return;
        }
        try {
            const token = localStorage.getItem("access_token");
            if (!token) {
                setUser(null);
                setLoading(false);
                setIsInitialized(true);
                return;
            }
            // First check if token is expired locally
            if (!isTokenValid(token)) {
                console.log("Token expired locally, removing...");
                localStorage.removeItem("access_token");
                localStorage.removeItem("user_data");
                setUser(null);
                setLoading(false);
                setIsInitialized(true);
                return;
            }
            // Try to get user from localStorage first for instant loading
            const cachedUser = localStorage.getItem("user_data");
            if (cachedUser) {
                try {
                    const userData = JSON.parse(cachedUser);
                    setUser(userData);
                    setLoading(false);
                    setIsInitialized(true);
                    return;
                } catch (error) {
                    console.error("Error parsing cached user data:", error);
                    localStorage.removeItem("user_data");
                }
            }
            // No cached user, validate with server
            const userData = await validateTokenWithServer(token);
            if (userData) {
                setUser(userData);
                // Cache user data for instant loading next time
                localStorage.setItem("user_data", JSON.stringify(userData));
            } else {
                localStorage.removeItem("access_token");
                localStorage.removeItem("user_data");
                setUser(null);
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            if (isClient) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("user_data");
            }
            setUser(null);
        } finally{
            setLoading(false);
            setIsInitialized(true);
        }
    }, [
        isTokenValid,
        validateTokenWithServer,
        isClient
    ]);
    // Initialize auth state on mount - ONLY ONCE and only on client
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isInitialized && isClient) {
            loadUserFromToken();
        }
    }, [
        isInitialized,
        isClient
    ]); // Remove loadUserFromToken from dependencies to prevent loops
    // Function to logout user
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!isClient) return;
        try {
            // Clear all connection statuses for the current user before logout
            const userId = (0,_utils_connectionStatus__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentUserId */ .rc)();
            if (userId) {
                (0,_utils_connectionStatus__WEBPACK_IMPORTED_MODULE_2__/* .clearAllConnectionStatuses */ .WG)(userId);
            }
            const token = localStorage.getItem("access_token");
            if (token) {
                // Call logout endpoint
                await fetch(`${apiBaseUrl}/api/auth/logout`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
            }
        } catch (error) {
            console.error("Logout error:", error);
        } finally{
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_data");
            setUser(null);
        }
    }, [
        isClient
    ]);
    // Function to login user
    const login = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((userData, token)=>{
        if (!isClient) return;
        localStorage.setItem("access_token", token);
        localStorage.setItem("user_data", JSON.stringify(userData));
        setUser(userData);
    }, [
        isClient
    ]);
    // Function to check if user is authenticated
    const isAuthenticated = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return !!user;
    }, [
        user
    ]);
    // Function to update user data
    const updateUser = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((userData)=>{
        setUser(userData);
        if (isClient) {
            localStorage.setItem("user_data", JSON.stringify(userData));
        }
    }, [
        isClient
    ]);
    // Auto-refresh token logic - simplified to prevent constant checking
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user || !isClient) return;
        const token = localStorage.getItem("access_token");
        if (!token) return;
        const checkTokenExpiry = ()=>{
            if (!isTokenValid(token)) {
                console.log("Token expired, logging out...");
                logout();
            }
        };
        // Check token every 10 minutes instead of 5 to reduce frequency
        const interval = setInterval(checkTokenExpiry, 10 * 60 * 1000);
        return ()=>clearInterval(interval);
    }, [
        user,
        isTokenValid,
        logout,
        isClient
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser,
            loading,
            logout,
            login,
            isAuthenticated,
            loadUserFromToken,
            updateUser,
            isInitialized
        },
        children: children
    });
}
function useUser() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}


/***/ }),

/***/ 8375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9944);



function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__/* .UserProvider */ .d, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: "Manage your social media posts"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ createAuthHeaders),
/* harmony export */   WG: () => (/* binding */ clearAllConnectionStatuses),
/* harmony export */   Zp: () => (/* binding */ getConnectionStatus),
/* harmony export */   gs: () => (/* binding */ saveConnectionStatus),
/* harmony export */   ht: () => (/* binding */ clearConnectionStatus),
/* harmony export */   rc: () => (/* binding */ getCurrentUserId)
/* harmony export */ });
/* unused harmony export getJWTToken */
// Utility functions for managing user-specific connection status using cookies
/**
 * Save connection status to cookies for a specific user and platform
 * @param {string} platform - The platform name (x, reddit, pinterest, tiktok)
 * @param {string} userId - The user ID
 * @param {object} status - The connection status object
 */ const saveConnectionStatus = (platform, userId, status)=>{
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
 */ const getConnectionStatus = (platform, userId)=>{
    try {
        const cookieName = `${platform}_connection_status_${userId}`;
        const cookies = document.cookie.split(";");
        for (let cookie of cookies){
            const [name, value] = cookie.trim().split("=");
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
 */ const clearConnectionStatus = (platform, userId)=>{
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
 */ const clearAllConnectionStatuses = (userId)=>{
    const platforms = [
        "x",
        "reddit",
        "pinterest",
        "tiktok",
        "youtube"
    ];
    platforms.forEach((platform)=>{
        clearConnectionStatus(platform, userId);
    });
    console.log(`Cleared all connection statuses for user ${userId}`);
};
/**
 * Get JWT token from localStorage
 * @returns {string|null} The JWT token or null if not found
 */ const getJWTToken = ()=>{
    try {
        // Use the same key as UserContext ('access_token')
        return localStorage.getItem("access_token");
    } catch (error) {
        console.error("Error getting JWT token:", error);
        return null;
    }
};
/**
 * Get current user ID from localStorage
 * @returns {string|null} The user ID or null if not found
 */ const getCurrentUserId = ()=>{
    try {
        // Try user_data first (standard across most components)
        const userDataStr = localStorage.getItem("user_data");
        if (userDataStr) {
            const userData = JSON.parse(userDataStr);
            if (userData && userData.id) return userData.id.toString();
        }
        // Fallback to 'user' key
        const userStr = localStorage.getItem("user");
        if (userStr) {
            const user = JSON.parse(userStr);
            if (user && user.id) return user.id.toString();
        }
        return null;
    } catch (error) {
        console.error("Error getting current user ID:", error);
        return null;
    }
};
/**
 * Create headers with JWT authentication
 * @returns {object} Headers object with JWT token
 */ const createAuthHeaders = ()=>{
    const token = getJWTToken();
    const headers = {
        "Content-Type": "application/json"
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
};


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;