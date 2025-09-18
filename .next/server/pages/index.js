"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/index.jsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (Home)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(894);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(8375);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/UserContext.js
var UserContext = __webpack_require__(9944);
;// CONCATENATED MODULE: ./src/components/PowerBIReport.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function PowerBIReport() {
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [hasError, setHasError] = (0,external_react_.useState)(false);
    const handleIframeLoad = ()=>{
        setIsLoading(false);
        setHasError(false);
    };
    const handleIframeError = ()=>{
        setIsLoading(false);
        setHasError(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            width: "100%",
            height: "90vh",
            position: "relative",
            backgroundColor: "#f5f5f5"
        },
        children: [
            isLoading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 10,
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            marginBottom: "10px",
                            fontSize: "18px"
                        },
                        children: "Loading Social Media Analysis Report..."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            fontSize: "14px",
                            color: "#666"
                        },
                        children: "Please wait while the report loads"
                    })
                ]
            }),
            hasError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 10,
                    backgroundColor: "#ffe6e6",
                    padding: "20px",
                    borderRadius: "8px",
                    border: "1px solid #ff9999",
                    maxWidth: "500px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        style: {
                            color: "red",
                            marginBottom: "10px"
                        },
                        children: "Failed to Load Report"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        style: {
                            marginBottom: "15px"
                        },
                        children: "The PowerBI report could not be loaded. This might be due to:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        style: {
                            textAlign: "left",
                            lineHeight: "1.6"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: "Network connectivity issues"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: "PowerBI service unavailability"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: "Authentication requirements"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: "Report permissions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        onClick: ()=>window.location.reload(),
                        style: {
                            marginTop: "15px",
                            padding: "8px 16px",
                            backgroundColor: "#007acc",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        },
                        children: "Retry"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                title: "Social Media analysis-wissal report bi",
                width: "100%",
                height: "100%",
                src: "https://app.powerbi.com/reportEmbed?reportId=3f0c7508-b4a3-4eed-a335-106a7e90d978&autoAuth=true&ctid=f93d5f40-88c0-4650-b8f2-cc4ec3ef6a10",
                frameBorder: "0",
                allowFullScreen: true,
                onLoad: handleIframeLoad,
                onError: handleIframeError,
                style: {
                    border: "none",
                    display: isLoading || hasError ? "none" : "block"
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/send.js
var send = __webpack_require__(2472);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(9964);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(6465);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(4001);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/external-link.js
var external_link = __webpack_require__(201);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(6796);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/link.js
var icons_link = __webpack_require__(7301);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/image.js
var icons_image = __webpack_require__(5708);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(2386);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(9341);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(1552);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(3857);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/hash.js
var hash = __webpack_require__(7833);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
var shield = __webpack_require__(4115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
var shield_check = __webpack_require__(5931);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/log-in.js
var log_in = __webpack_require__(1942);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/log-out.js
var log_out = __webpack_require__(2088);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rss.js
var rss = __webpack_require__(551);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(7850);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell-off.js
var bell_off = __webpack_require__(7225);
// EXTERNAL MODULE: ./src/utils/connectionStatus.js
var utils_connectionStatus = __webpack_require__(1526);
;// CONCATENATED MODULE: ./src/utils/rssFeedUtils.js
// utils/rssFeedUtils.js
// Utility functions for fetching and parsing RSS feeds in the browser (frontend-only)
/**
 * Strip HTML tags from text and clean up the content
 */ function stripHtmlTags(html) {
    if (!html) return "";
    // Create a temporary DOM element to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = html;
    // Get text content and clean it up
    let text = temp.textContent || temp.innerText || "";
    // Clean up extra whitespace and line breaks
    text = text.replace(/\s+/g, " ").trim();
    // Remove common HTML entities
    text = text.replace(/&nbsp;/g, " ");
    text = text.replace(/&amp;/g, "&");
    text = text.replace(/&lt;/g, "<");
    text = text.replace(/&gt;/g, ">");
    text = text.replace(/&quot;/g, '"');
    text = text.replace(/&#39;/g, "'");
    return text;
}
/**
 * Truncate text to a specified length with ellipsis
 */ function truncateText(text, maxLength = 200) {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
}
/**
 * Fetch and parse an RSS/Atom feed from a given URL.
 * Returns a promise resolving to an array of articles [{title, link, pubDate, ...}]
 * Note: Many feeds may require a CORS proxy for browser access.
 */ async function fetchRSSFeed(feedUrl, { corsProxy = null } = {}) {
    const url = corsProxy ? `${corsProxy}${encodeURIComponent(feedUrl)}` : feedUrl;
    const response = await fetch(url);
    const text = await response.text();
    const parser = new window.DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    // RSS 2.0
    const items = Array.from(xml.querySelectorAll("item"));
    if (items.length > 0) {
        return items.map((item)=>{
            const rawDescription = item.querySelector("description")?.textContent || "";
            return {
                title: stripHtmlTags(item.querySelector("title")?.textContent || ""),
                link: item.querySelector("link")?.textContent || "",
                pubDate: item.querySelector("pubDate")?.textContent || "",
                description: truncateText(stripHtmlTags(rawDescription), 300),
                guid: item.querySelector("guid")?.textContent || ""
            };
        });
    }
    // Atom
    const entries = Array.from(xml.querySelectorAll("entry"));
    if (entries.length > 0) {
        return entries.map((entry)=>{
            const rawDescription = entry.querySelector("summary")?.textContent || entry.querySelector("content")?.textContent || "";
            return {
                title: stripHtmlTags(entry.querySelector("title")?.textContent || ""),
                link: entry.querySelector("link")?.getAttribute("href") || "",
                pubDate: entry.querySelector("updated")?.textContent || "",
                description: truncateText(stripHtmlTags(rawDescription), 300),
                id: entry.querySelector("id")?.textContent || ""
            };
        });
    }
    return [];
}
/**
 * Example CORS proxy: 'https://api.allorigins.win/raw?url='
 * Use null for no proxy (if feed supports CORS)
 */ const DEFAULT_CORS_PROXY = "https://api.allorigins.win/raw?url=";

;// CONCATENATED MODULE: ./src/utils/useRssPolling.js
// utils/useRssPolling.js
// React hook for polling RSS feeds for new articles (frontend-only)


/**
 * useRssPolling
 * @param {string} feedUrl - The RSS/Atom feed URL
 * @param {object} options - { intervalMs, corsProxy, onNewArticles }
 * @returns {object} { articles, lastChecked, error }
 */ function useRssPolling(feedUrl, { intervalMs = 60000, corsProxy = DEFAULT_CORS_PROXY, onNewArticles = null } = {}) {
    const [articles, setArticles] = (0,external_react_.useState)([]);
    const [lastChecked, setLastChecked] = (0,external_react_.useState)(null);
    const [error, setError] = (0,external_react_.useState)(null);
    const lastGuidsRef = (0,external_react_.useRef)(new Set());
    (0,external_react_.useEffect)(()=>{
        // Don't start polling if feedUrl is null/undefined
        if (!feedUrl) {
            setArticles([]);
            setLastChecked(null);
            setError(null);
            return;
        }
        let interval;
        let cancelled = false;
        async function poll() {
            try {
                const fetched = await fetchRSSFeed(feedUrl, {
                    corsProxy
                });
                if (cancelled) return;
                setArticles(fetched);
                setLastChecked(new Date());
                // Detect new articles
                const newGuids = new Set(fetched.map((a)=>a.guid || a.link));
                const oldGuids = lastGuidsRef.current;
                const newArticles = fetched.filter((a)=>!oldGuids.has(a.guid || a.link));
                if (newArticles.length && onNewArticles) {
                    onNewArticles(newArticles);
                }
                lastGuidsRef.current = newGuids;
                setError(null);
            } catch (e) {
                if (!cancelled) {
                    setError(e.message || "Error fetching RSS");
                }
            }
        }
        poll();
        interval = setInterval(poll, intervalMs);
        return ()=>{
            cancelled = true;
            clearInterval(interval);
        };
    // eslint-disable-next-line
    }, [
        feedUrl,
        intervalMs,
        corsProxy
    ]);
    return {
        articles,
        lastChecked,
        error
    };
}

;// CONCATENATED MODULE: ./src/utils/platformRssFeeds.js
// utils/platformRssFeeds.js
// Centralized config for RSS/Atom feeds for each platform (public feeds only)
const PLATFORM_RSS_FEEDS = {
    x: [
        // Reliable RSS feeds for Twitter/X content
        "https://feeds.feedburner.com/TechCrunch",
        "https://rss.cnn.com/rss/edition.rss",
        "https://feeds.bbci.co.uk/news/technology/rss.xml"
    ],
    instagram: [
        // Reliable RSS feeds for Instagram-style content
        "https://feeds.feedburner.com/TechCrunch",
        "https://rss.cnn.com/rss/edition.rss",
        "https://feeds.bbci.co.uk/news/rss.xml"
    ],
    facebook: [
        // Reliable RSS feeds for Facebook-style content
        "https://feeds.feedburner.com/TechCrunch",
        "https://rss.cnn.com/rss/edition.rss",
        "https://feeds.bbci.co.uk/news/rss.xml"
    ],
    reddit: [
        // Native subreddit feed
        "https://www.reddit.com/r/news/.rss"
    ],
    pinterest: [
        // Alternative RSS feeds for Pinterest-related content
        "https://feeds.feedburner.com/TechCrunch",
        "https://rss.cnn.com/rss/edition.rss",
        "https://feeds.bbci.co.uk/news/rss.xml"
    ],
    youtube: [
        // Native YouTube channel feed (replace CHANNEL_ID)
        "https://www.youtube.com/feeds/videos.xml?channel_id=UC_x5XG1OV2P6uZZ5FSM9Ttw",
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCBJycsmduvYEL83R_U4JriQ"
    ]
};

;// CONCATENATED MODULE: ./src/components/RedditSection.jsx

























function RedditSection({ apiBaseUrl }) {
    const [formData, setFormData] = (0,external_react_.useState)({
        subreddit_name: "",
        title: "",
        content: "",
        is_spoiler: false,
        nsfw: false
    });
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const [imagePreview, setImagePreview] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [userPosts, setUserPosts] = (0,external_react_.useState)([]);
    const [loadingPosts, setLoadingPosts] = (0,external_react_.useState)(false);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    // Authentication state
    const [connectionStatus, setConnectionStatus] = (0,external_react_.useState)({
        connected: false,
        username: null,
        message: "Not connected to Reddit"
    });
    const [connecting, setConnecting] = (0,external_react_.useState)(false);
    const [loadingConnection, setLoadingConnection] = (0,external_react_.useState)(true);
    // RSS Article Detection state
    const [rssEnabled, setRssEnabled] = (0,external_react_.useState)(false);
    const [newArticleCount, setNewArticleCount] = (0,external_react_.useState)(0);
    const [detectedArticles, setDetectedArticles] = (0,external_react_.useState)([]);
    const [customRssUrl, setCustomRssUrl] = (0,external_react_.useState)("");
    const [showArticles, setShowArticles] = (0,external_react_.useState)(false);
    // RSS polling hook - only active when enabled
    const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.reddit[0];
    const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(rssEnabled && rssUrl ? rssUrl : null, {
        intervalMs: 60000,
        onNewArticles: (newArticles)=>{
            if (rssEnabled) {
                setNewArticleCount((prev)=>prev + newArticles.length);
                setDetectedArticles((prev)=>[
                        ...newArticles,
                        ...prev
                    ].slice(0, 50));
            }
        }
    });
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            // Load connection status from cookies first
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("reddit", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
            }
        }
        checkConnectionStatus();
    }, []);
    // Handle RSS article selection for auto-filling
    const handleArticleSelect = (article)=>{
        // Extract subreddit from Reddit RSS URL if possible
        let subreddit = "news"; // default
        try {
            const url = new URL(rssUrl);
            const pathMatch = url.pathname.match(/\/r\/([^/]+)/);
            if (pathMatch) {
                subreddit = pathMatch[1];
            }
        } catch (e) {
        // Use default subreddit
        }
        setFormData((prev)=>({
                ...prev,
                subreddit_name: subreddit,
                title: article.title.slice(0, 300),
                content: `${article.description}\n\nSource: ${article.link}`
            }));
        setShowArticles(false);
        setNewArticleCount(0); // Clear notification
    };
    // Toggle RSS monitoring
    const toggleRssMonitoring = ()=>{
        setRssEnabled(!rssEnabled);
        if (!rssEnabled) {
            setNewArticleCount(0);
        }
    };
    const handleCustomRssChange = (e)=>{
        setCustomRssUrl(e.target.value);
    };
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("reddit", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
            }
        }
    }, [
        (0,utils_connectionStatus/* getCurrentUserId */.rc)()
    ]);
    (0,external_react_.useEffect)(()=>{
        if (connectionStatus.connected) {
            fetchUserPosts();
        }
    }, [
        connectionStatus.connected
    ]);
    const checkConnectionStatus = async ()=>{
        setLoadingConnection(true);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/reddit/connection-status`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setConnectionStatus(data.status);
                // Save to cookies for persistence
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* saveConnectionStatus */.gs)("reddit", userId, data.status);
                }
            }
        } catch (error) {
            console.error("Error checking connection status:", error);
        } finally{
            setLoadingConnection(false);
        }
    };
    const handleConnectReddit = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/reddit/connect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                // Wait a bit for the authentication to complete, then check status
                setTimeout(()=>{
                    checkConnectionStatus();
                }, 2000);
            } else {
                // Handle account exclusivity error (409 status)
                if (response.status === 409 || data.account_unavailable) {
                    const errorMsg = data.connected_username ? `This Reddit account (u/${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different Reddit account.` : "This Reddit account is already connected to another user. Please disconnect from that account first or use a different Reddit account.";
                    setMessage({
                        type: "error",
                        text: errorMsg
                    });
                } else {
                    setMessage({
                        type: "error",
                        text: data.error || "Failed to connect to Reddit"
                    });
                }
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleDisconnectReddit = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/reddit/disconnect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                const newStatus = {
                    connected: false,
                    username: null,
                    message: "Not connected to Reddit"
                };
                setConnectionStatus(newStatus);
                setUserPosts([]);
                // Clear cookies
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* clearConnectionStatus */.ht)("reddit", userId);
                }
                // Clear form data
                setFormData({
                    subreddit_name: "",
                    title: "",
                    content: "",
                    is_spoiler: false,
                    nsfw: false
                });
                setSelectedImage(null);
                setImagePreview(null);
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to disconnect from Reddit"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e)=>setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };
    const validateSubreddit = async ()=>{
        if (!formData.subreddit_name || !connectionStatus.connected) return;
        try {
            const response = await fetch(`${apiBaseUrl}/api/reddit/validate-subreddit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subreddit_name: formData.subreddit_name
                })
            });
            const data = await response.json();
            if (data.success && data.is_valid) {
                setMessage({
                    type: "success",
                    text: `✓ r/${data.clean_name} is valid`
                });
                setFormData((prev)=>({
                        ...prev,
                        subreddit_name: data.clean_name
                    }));
            } else {
                setMessage({
                    type: "error",
                    text: "Invalid subreddit name"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error validating subreddit"
            });
        }
    };
    const storeFormData = async (formData, status = "posted", errorMessage = null)=>{
        try {
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            // Validate required fields
            if (!userId || !userEmail) {
                console.error("User data not available for Reddit post storage");
                return;
            }
            const dataPayload = {
                user_id: userId,
                user_email: userEmail,
                subreddit_name: formData.subreddit_name || "",
                title: formData.title || "",
                content: formData.content || "",
                is_spoiler: formData.is_spoiler || false,
                nsfw: formData.nsfw || false
            };
            console.log("Reddit data payload being sent:", dataPayload);
            const response = await fetch("http://localhost:3001/api/data/reddit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataPayload)
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("Reddit storage error:", response.status, errorData);
            } else {
                console.log("Reddit data stored successfully");
            }
        } catch (error) {
            console.error("Error storing Reddit form data:", error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!connectionStatus.connected) {
            setMessage({
                type: "error",
                text: "Please connect your Reddit account first"
            });
            return;
        }
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const payload = {
                ...formData
            };
            if (selectedImage) {
                payload.image_base64 = imagePreview;
            }
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/reddit/create-post`, {
                method: "POST",
                headers,
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.success) {
                // Store successful post data
                await storeFormData(formData, "posted");
                setMessage({
                    type: "success",
                    text: "Post created successfully!"
                });
                setFormData({
                    subreddit_name: "",
                    title: "",
                    content: "",
                    is_spoiler: false,
                    nsfw: false
                });
                setSelectedImage(null);
                setImagePreview(null);
                fetchUserPosts();
            } else {
                // Store failed post data with error
                await storeFormData(formData, "failed", data.error || "Failed to create post");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create post"
                });
            }
        } catch (error) {
            // Store failed post data with network error
            await storeFormData(formData, "failed", "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const fetchUserPosts = async ()=>{
        if (!connectionStatus.connected) return;
        setLoadingPosts(true);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            console.log("DEBUG: JWT Token from localStorage:", localStorage.getItem("access_token"));
            console.log("DEBUG: Headers being sent:", headers);
            console.log("DEBUG: Current user ID:", (0,utils_connectionStatus/* getCurrentUserId */.rc)());
            const response = await fetch(`${apiBaseUrl}/api/reddit/user-posts?limit=10`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setUserPosts(data.posts);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally{
            setLoadingPosts(false);
        }
    };
    const handleDeleteClick = (postId)=>{
        setDeleteConfirmation(postId);
    };
    const confirmDelete = async ()=>{
        const postId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/reddit/post/${postId}`, {
                method: "DELETE",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Post deleted successfully!"
                });
                fetchUserPosts();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete post"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting post"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    // Show loading screen while checking connection
    if (loadingConnection) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 p-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                        className: "w-12 h-12 text-orange-500 animate-spin mx-auto mb-4"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-600 font-medium",
                        children: "Checking Reddit connection..."
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 p-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 text-center mb-2",
                                children: "Delete Post"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 text-center mb-6",
                                children: "Are you sure you want to delete this post? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Delete"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Cancel"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-top duration-700",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mr-4 ${connectionStatus.connected ? "bg-gradient-to-br from-emerald-500 to-green-600" : "bg-gradient-to-br from-gray-400 to-gray-500"}`,
                                        children: connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx(shield_check/* default */.Z, {
                                            className: "w-6 h-6 text-white"
                                        }) : /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                            className: "w-6 h-6 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "Reddit Connection"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: `text-sm font-medium ${connectionStatus.connected ? "text-emerald-600" : "text-gray-500"}`,
                                                children: connectionStatus.message
                                            }),
                                            rssEnabled && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center mt-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                        className: "w-3 h-3 text-orange-500 mr-1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-orange-600 text-xs",
                                                        children: "Article detection active"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    connectionStatus.connected && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: ()=>setShowArticles(!showArticles),
                                                className: `relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${showArticles ? "bg-orange-100 text-orange-700 shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Articles"
                                                    }),
                                                    newArticleCount > 0 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                        children: newArticleCount
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: toggleRssMonitoring,
                                                className: `flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${rssEnabled ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                children: [
                                                    rssEnabled ? /*#__PURE__*/ jsx_runtime.jsx(bell/* default */.Z, {
                                                        className: "w-4 h-4"
                                                    }) : /*#__PURE__*/ jsx_runtime.jsx(bell_off/* default */.Z, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: rssEnabled ? "Monitoring" : "Monitor"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: handleDisconnectReddit,
                                        disabled: connecting,
                                        className: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                        children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                    className: "w-5 h-5 mr-2 animate-spin"
                                                }),
                                                "Disconnecting..."
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(log_out/* default */.Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                "Disconnect"
                                            ]
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: handleConnectReddit,
                                        disabled: connecting,
                                        className: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                        children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                    className: "w-5 h-5 mr-2 animate-spin"
                                                }),
                                                "Connecting..."
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(log_in/* default */.Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                "Connect Reddit Account"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                connectionStatus.connected && showArticles && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in slide-in-from-top duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                        className: "w-6 h-6 text-orange-500 mr-3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Article Detection"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Custom RSS Feed URL"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "url",
                                        value: customRssUrl,
                                        onChange: handleCustomRssChange,
                                        placeholder: "https://www.reddit.com/r/news/.rss (optional)",
                                        className: "w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-orange-600 text-sm mt-1",
                                        children: "Leave empty to use default Reddit feeds (r/news)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between bg-orange-50/50 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: `w-3 h-3 rounded-full ${rssEnabled ? "bg-green-400 animate-pulse" : "bg-gray-400"}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: rssEnabled ? `Monitoring active - ${rssArticles?.length || 0} articles` : "Monitoring disabled"
                                            })
                                        ]
                                    }),
                                    lastChecked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "Last: ",
                                            new Date(lastChecked).toLocaleTimeString()
                                        ]
                                    })
                                ]
                            }),
                            rssError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-red-600 text-sm bg-red-50 rounded-lg p-3",
                                children: [
                                    "Error: ",
                                    rssError
                                ]
                            }),
                            rssEnabled && detectedArticles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "text-sm font-semibold text-gray-700 mb-4",
                                        children: "Recent Articles"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "space-y-3 max-h-80 overflow-y-auto",
                                        children: detectedArticles.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white/70 rounded-lg p-4 hover:bg-white transition-colors cursor-pointer border border-orange-100 hover:border-orange-200",
                                                onClick: ()=>handleArticleSelect(article),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        className: "text-sm font-medium text-gray-800 mb-2 line-clamp-2",
                                                        children: article.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-xs text-gray-600 mb-3 line-clamp-3",
                                                        children: article.description
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "No date"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                className: "text-xs text-orange-600 hover:text-orange-700 px-3 py-1 bg-orange-100 rounded-full font-medium",
                                                                children: "Use for Reddit Post"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            }),
                            rssEnabled && detectedArticles.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                        className: "w-16 h-16 text-orange-300 mx-auto mb-4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "text-gray-700 font-medium mb-2",
                                        children: "No Articles Detected Yet"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-gray-500 text-sm",
                                        children: rssError ? "Check your RSS feed URL and try again." : "Monitoring for new articles from Reddit feeds..."
                                    })
                                ]
                            })
                        ]
                    })
                }),
                message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                className: "w-5 h-5 mr-2 flex-shrink-0"
                            }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                className: "w-5 h-5 mr-2 flex-shrink-0"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "font-medium",
                                children: message.text
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${!connectionStatus.connected ? "opacity-50 pointer-events-none" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                        className: "w-6 h-6 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent",
                                    children: "Create Reddit Post"
                                })
                            ]
                        }),
                        !connectionStatus.connected && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                        className: "w-5 h-5 mr-2 text-amber-600"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-medium text-amber-700",
                                        children: "Please connect your Reddit account to create posts"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-2 h-2 bg-orange-500 rounded-full mr-2"
                                                }),
                                                "Subreddit"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium z-10",
                                                    children: "r/"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    name: "subreddit_name",
                                                    value: formData.subreddit_name,
                                                    onChange: handleInputChange,
                                                    onBlur: validateSubreddit,
                                                    className: "w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                    placeholder: "AskReddit",
                                                    disabled: !connectionStatus.connected,
                                                    required: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-2 h-2 bg-orange-500 rounded-full mr-2"
                                                }),
                                                "Title"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            name: "title",
                                            value: formData.title,
                                            onChange: handleInputChange,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                            placeholder: "Enter your post title",
                                            disabled: !connectionStatus.connected,
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-orange-500"
                                                }),
                                                "Content (Optional)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            name: "content",
                                            value: formData.content,
                                            onChange: handleInputChange,
                                            rows: 4,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed",
                                            placeholder: "What's on your mind?",
                                            disabled: !connectionStatus.connected
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-orange-500"
                                                }),
                                                "Image (Optional)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: handleImageChange,
                                                className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                disabled: !connectionStatus.connected
                                            })
                                        }),
                                        imagePreview && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "relative inline-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: imagePreview,
                                                        alt: "Preview",
                                                        className: "max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                            className: "w-4 h-4 text-gray-600"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-orange-500"
                                                }),
                                                "Post Options"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex space-x-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "flex items-center group cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "checkbox",
                                                                    name: "is_spoiler",
                                                                    checked: formData.is_spoiler,
                                                                    onChange: handleInputChange,
                                                                    className: "w-5 h-5 text-orange-600 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                                    disabled: !connectionStatus.connected
                                                                }),
                                                                formData.is_spoiler && /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                                    className: "w-3 h-3 text-white absolute top-0.5 left-0.5 pointer-events-none"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-200",
                                                            children: "Mark as Spoiler"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "flex items-center group cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "checkbox",
                                                                    name: "nsfw",
                                                                    checked: formData.nsfw,
                                                                    onChange: handleInputChange,
                                                                    className: "w-5 h-5 text-orange-600 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                                    disabled: !connectionStatus.connected
                                                                }),
                                                                formData.nsfw && /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                                    className: "w-3 h-3 text-white absolute top-0.5 left-0.5 pointer-events-none"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-200",
                                                            children: "NSFW"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    disabled: loading || !connectionStatus.connected,
                                    className: "w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                className: "w-6 h-6 mr-3 animate-spin"
                                            }),
                                            "Posting..."
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                className: "w-6 h-6 mr-3"
                                            }),
                                            "Create Post"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                        className: "w-5 h-5 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent",
                                    children: "Your Recent Posts"
                                })
                            ]
                        }),
                        loadingPosts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                    className: "w-12 h-12 text-orange-500 animate-spin mb-4"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 font-medium",
                                    children: "Loading posts..."
                                })
                            ]
                        }) : userPosts.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                        className: "w-10 h-10 text-gray-400"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 text-lg font-medium",
                                    children: "No posts found"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Your Reddit posts will appear here"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "space-y-4",
                            children: userPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center text-sm text-gray-500 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center bg-orange-100 px-3 py-1 rounded-full mr-3",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                                        className: "w-3 h-3 mr-1 text-orange-600"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "font-medium text-orange-700",
                                                                        children: [
                                                                            "r/",
                                                                            post.subreddit
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            new Date(post.created_utc * 1000).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "font-bold text-gray-900 mb-3 text-lg leading-tight",
                                                        children: post.title
                                                    }),
                                                    post.selftext && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-600 mb-3 leading-relaxed line-clamp-2",
                                                        children: post.selftext
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-6 text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center bg-emerald-50 px-3 py-1 rounded-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-emerald-600 font-semibold",
                                                                        children: [
                                                                            "↑ ",
                                                                            post.score
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-emerald-500 ml-1",
                                                                        children: "upvotes"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center bg-blue-50 px-3 py-1 rounded-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-blue-600 font-semibold",
                                                                        children: [
                                                                            "\uD83D\uDCAC ",
                                                                            post.num_comments
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-blue-500 ml-1",
                                                                        children: "comments"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex space-x-2 ml-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: `https://reddit.com${post.permalink}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "p-3 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_link/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: ()=>handleDeleteClick(post.id),
                                                        className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, post.id))
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/facebook.js
var facebook = __webpack_require__(9723);
;// CONCATENATED MODULE: ./src/components/FacebookSection.jsx



















function FacebookSection({ apiBaseUrl }) {
    const [formData, setFormData] = (0,external_react_.useState)({
        message: "",
        link: "",
        scheduled_time: ""
    });
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const [imagePreview, setImagePreview] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [posts, setPosts] = (0,external_react_.useState)([]);
    const [loadingPosts, setLoadingPosts] = (0,external_react_.useState)(false);
    const [credentialsValid, setCredentialsValid] = (0,external_react_.useState)(null);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    // RSS Article Detection state
    const [rssEnabled, setRssEnabled] = (0,external_react_.useState)(false);
    const [newArticleCount, setNewArticleCount] = (0,external_react_.useState)(0);
    const [detectedArticles, setDetectedArticles] = (0,external_react_.useState)([]);
    const [customRssUrl, setCustomRssUrl] = (0,external_react_.useState)("");
    const [showArticles, setShowArticles] = (0,external_react_.useState)(false);
    // RSS polling hook - only active when enabled
    const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.facebook[0];
    const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(rssEnabled && rssUrl ? rssUrl : null, {
        intervalMs: 60000,
        onNewArticles: (newArticles)=>{
            if (rssEnabled) {
                setNewArticleCount((prev)=>prev + newArticles.length);
                setDetectedArticles((prev)=>[
                        ...newArticles,
                        ...prev
                    ].slice(0, 50));
            }
        }
    });
    (0,external_react_.useEffect)(()=>{
        validateCredentials();
        fetchPosts();
    }, []);
    // Handle RSS article selection for auto-filling
    const handleArticleSelect = (article)=>{
        const facebookPost = `${article.title}\n\n${article.description}\n\nRead more: ${article.link}`;
        setFormData((prev)=>({
                ...prev,
                message: facebookPost.slice(0, 63206),
                link: article.link
            }));
        setShowArticles(false);
        setNewArticleCount(0); // Clear notification
    };
    // Toggle RSS monitoring
    const toggleRssMonitoring = ()=>{
        setRssEnabled(!rssEnabled);
        if (!rssEnabled) {
            setNewArticleCount(0);
        }
    };
    const handleCustomRssChange = (e)=>{
        setCustomRssUrl(e.target.value);
    };
    const validateCredentials = async ()=>{
        try {
            const response = await fetch(`${apiBaseUrl}/api/facebook/validate-credentials`);
            const data = await response.json();
            setCredentialsValid(data.success && data.is_valid);
        } catch (error) {
            setCredentialsValid(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e)=>setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };
    const storeFormData = async (formData, status = "posted", errorMessage = null)=>{
        try {
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            if (!userId || !userEmail) {
                console.error("User data not available for Facebook post storage");
                return;
            }
            const dataPayload = {
                user_id: userId,
                user_email: userEmail,
                message: formData.message || "",
                link: formData.link || ""
            };
            // Only include scheduled_time if it has a valid value
            if (formData.scheduled_time && formData.scheduled_time.trim() !== "") {
                dataPayload.scheduled_time = formData.scheduled_time;
            }
            console.log("Facebook data payload being sent:", dataPayload);
            const response = await fetch("http://localhost:3001/api/data/facebook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataPayload)
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("Facebook storage error:", response.status, errorData);
            } else {
                console.log("Facebook data stored successfully");
            }
        } catch (error) {
            console.error("Error storing Facebook form data:", error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const payload = {
                ...formData
            };
            if (selectedImage) {
                payload.image_base64 = imagePreview;
            }
            const response = await fetch(`${apiBaseUrl}/api/facebook/create-post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.success) {
                await storeFormData(formData, "posted");
                setMessage({
                    type: "success",
                    text: "Post created successfully!"
                });
                setFormData({
                    message: "",
                    link: "",
                    scheduled_time: ""
                });
                setSelectedImage(null);
                setImagePreview(null);
                fetchPosts();
            } else {
                await storeFormData(formData, "failed", data.error || "Failed to create post");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create post"
                });
            }
        } catch (error) {
            await storeFormData(formData, "failed", "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const fetchPosts = async ()=>{
        setLoadingPosts(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/facebook/posts?limit=10`);
            const data = await response.json();
            if (data.success) {
                setPosts(data.posts);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally{
            setLoadingPosts(false);
        }
    };
    const handleDeleteClick = (postId)=>{
        setDeleteConfirmation(postId);
    };
    const confirmDelete = async ()=>{
        const postId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const response = await fetch(`${apiBaseUrl}/api/facebook/post/${postId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Post deleted successfully!"
                });
                fetchPosts();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete post"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting post"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 text-center mb-2",
                                children: "Delete Post"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 text-center mb-6",
                                children: "Are you sure you want to delete this post? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Delete"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Cancel"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                credentialsValid === false && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-lg animate-in slide-in-from-top duration-500",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-6 h-6 text-amber-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "ml-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-amber-800 font-medium",
                                    children: "Facebook credentials not configured or invalid. Please check your API configuration."
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(facebook/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
                                            children: "Create Facebook Post"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: ()=>setShowArticles(!showArticles),
                                            className: `relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${showArticles ? "bg-blue-100 text-blue-700 shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Articles"
                                                }),
                                                newArticleCount > 0 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                    children: newArticleCount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: toggleRssMonitoring,
                                            className: `flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${rssEnabled ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: [
                                                rssEnabled ? /*#__PURE__*/ jsx_runtime.jsx(bell/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(bell_off/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: rssEnabled ? "Monitoring" : "Monitor"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        showArticles && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 animate-in slide-in-from-top duration-300",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                children: "Custom RSS Feed URL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "url",
                                                value: customRssUrl,
                                                onChange: handleCustomRssChange,
                                                placeholder: "https://example.com/feed.rss (optional)",
                                                className: "w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-blue-600 text-sm mt-1",
                                                children: "Leave empty to use default Facebook-related feeds"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between bg-white/50 rounded-lg p-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: `w-2 h-2 rounded-full ${rssEnabled ? "bg-green-400 animate-pulse" : "bg-gray-400"}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: rssEnabled ? `Monitoring active - ${rssArticles?.length || 0} articles` : "Monitoring disabled"
                                                    })
                                                ]
                                            }),
                                            lastChecked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    "Last: ",
                                                    new Date(lastChecked).toLocaleTimeString()
                                                ]
                                            })
                                        ]
                                    }),
                                    rssError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-red-600 text-sm bg-red-50 rounded-lg p-3",
                                        children: [
                                            "Error: ",
                                            rssError
                                        ]
                                    }),
                                    rssEnabled && detectedArticles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-sm font-semibold text-gray-700 mb-3",
                                                children: "Recent Articles"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "space-y-2 max-h-64 overflow-y-auto",
                                                children: detectedArticles.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-white/70 rounded-lg p-3 hover:bg-white transition-colors cursor-pointer border border-blue-100",
                                                        onClick: ()=>handleArticleSelect(article),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "text-sm font-medium text-gray-800 mb-1 line-clamp-2",
                                                                children: article.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-xs text-gray-600 mb-2 line-clamp-2",
                                                                children: article.description
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "No date"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        className: "text-xs text-blue-600 hover:text-blue-700 px-2 py-1 bg-blue-100 rounded",
                                                                        children: "Use for Post"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    rssEnabled && detectedArticles.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                className: "w-12 h-12 text-blue-300 mx-auto mb-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-gray-700 font-medium mb-2",
                                                children: "No Articles Detected Yet"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-500 text-sm",
                                                children: rssError ? "Check your RSS feed URL and try again." : "Monitoring for new articles..."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                        className: "w-5 h-5 mr-2 flex-shrink-0"
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                        className: "w-5 h-5 mr-2 flex-shrink-0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-medium",
                                        children: message.text
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-2 h-2 bg-blue-500 rounded-full mr-2"
                                                }),
                                                "Message"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            name: "message",
                                            value: formData.message,
                                            onChange: handleInputChange,
                                            rows: 4,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                            placeholder: "What's on your mind?",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-blue-500"
                                                }),
                                                "Link (Optional)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "url",
                                            name: "link",
                                            value: formData.link,
                                            onChange: handleInputChange,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                            placeholder: "https://example.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-blue-500"
                                                }),
                                                "Image (Optional)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: handleImageChange,
                                                className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            })
                                        }),
                                        imagePreview && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "relative inline-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: imagePreview,
                                                        alt: "Preview",
                                                        className: "max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                            className: "w-4 h-4 text-gray-600"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-blue-500"
                                                }),
                                                "Schedule Post (Optional)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "datetime-local",
                                            name: "scheduled_time",
                                            value: formData.scheduled_time,
                                            onChange: handleInputChange,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    disabled: loading || credentialsValid === false,
                                    className: "w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                className: "w-6 h-6 mr-3 animate-spin"
                                            }),
                                            "Posting..."
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                className: "w-6 h-6 mr-3"
                                            }),
                                            "Create Post"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                        className: "w-5 h-5 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                                    children: "Recent Posts"
                                })
                            ]
                        }),
                        loadingPosts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                    className: "w-12 h-12 text-blue-500 animate-spin mb-4"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 font-medium",
                                    children: "Loading posts..."
                                })
                            ]
                        }) : posts.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(facebook/* default */.Z, {
                                        className: "w-10 h-10 text-gray-400"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 text-lg font-medium",
                                    children: "No posts found"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Your Facebook posts will appear here"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "space-y-4",
                            children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center text-sm text-gray-500 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            new Date(post.created_time).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-900 mb-3 leading-relaxed font-medium",
                                                        children: post.message
                                                    }),
                                                    post.link && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: post.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors duration-200",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                                className: "w-4 h-4 mr-1"
                                                            }),
                                                            "View Link"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex space-x-2 ml-6",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>handleDeleteClick(post.id),
                                                    className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                        className: "w-5 h-5"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }, post.id))
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/images.js
var icons_images = __webpack_require__(8854);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/instagram.js
var instagram = __webpack_require__(8391);
;// CONCATENATED MODULE: ./src/components/InstagramSection.jsx




















function InstagramSection({ apiBaseUrl }) {
    const [formData, setFormData] = (0,external_react_.useState)({
        caption: ""
    });
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const [selectedCarouselImages, setSelectedCarouselImages] = (0,external_react_.useState)([]);
    const [imagePreviews, setImagePreviews] = (0,external_react_.useState)([]);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [userPosts, setUserPosts] = (0,external_react_.useState)([]);
    const [loadingPosts, setLoadingPosts] = (0,external_react_.useState)(false);
    const [postType, setPostType] = (0,external_react_.useState)("single"); // 'single' or 'carousel'
    const [credentialsValid, setCredentialsValid] = (0,external_react_.useState)(null);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    // RSS Article Detection state
    const [rssEnabled, setRssEnabled] = (0,external_react_.useState)(false);
    const [newArticleCount, setNewArticleCount] = (0,external_react_.useState)(0);
    const [detectedArticles, setDetectedArticles] = (0,external_react_.useState)([]);
    const [customRssUrl, setCustomRssUrl] = (0,external_react_.useState)("");
    const [showArticles, setShowArticles] = (0,external_react_.useState)(false);
    // RSS polling hook - only active when enabled
    const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.instagram[0];
    const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(rssEnabled && rssUrl ? rssUrl : null, {
        intervalMs: 60000,
        onNewArticles: (newArticles)=>{
            if (rssEnabled) {
                setNewArticleCount((prev)=>prev + newArticles.length);
                setDetectedArticles((prev)=>[
                        ...newArticles,
                        ...prev
                    ].slice(0, 50));
            }
        }
    });
    (0,external_react_.useEffect)(()=>{
        validateCredentials();
        fetchUserPosts();
    }, []);
    // Handle RSS article selection for auto-filling
    const handleArticleSelect = (article)=>{
        const instagramCaption = `${article.title}\n\n${article.description}\n\n#article #news`;
        setFormData((prev)=>({
                ...prev,
                caption: instagramCaption.slice(0, 2200) // Instagram caption limit
            }));
        setShowArticles(false);
        setNewArticleCount(0); // Clear notification
    };
    // Toggle RSS monitoring
    const toggleRssMonitoring = ()=>{
        setRssEnabled(!rssEnabled);
        if (!rssEnabled) {
            setNewArticleCount(0);
        }
    };
    const handleCustomRssChange = (e)=>{
        setCustomRssUrl(e.target.value);
    };
    const validateCredentials = async ()=>{
        try {
            const response = await fetch(`${apiBaseUrl}/api/instagram/validate-credentials`);
            const data = await response.json();
            setCredentialsValid(data.success && data.is_valid);
        } catch (error) {
            setCredentialsValid(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            if (postType === "single") {
                const file = files[0];
                setSelectedImage(file);
                setSelectedCarouselImages([]);
                const reader = new FileReader();
                reader.onload = (e)=>setImagePreviews([
                        e.target.result
                    ]);
                reader.readAsDataURL(file);
            } else {
                // Carousel mode
                setSelectedImage(null);
                setSelectedCarouselImages(files);
                const newPreviews = [];
                files.forEach((file)=>{
                    const reader = new FileReader();
                    reader.onload = (e)=>{
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
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const payload = {
                ...formData
            };
            if (postType === "single" && selectedImage) {
                const reader = new FileReader();
                reader.onload = (e)=>{
                    payload.image_base64 = e.target.result;
                    sendPostRequest(payload);
                };
                reader.readAsDataURL(selectedImage);
            } else if (postType === "carousel" && selectedCarouselImages.length > 0) {
                // Convert carousel images to base64
                const base64Promises = selectedCarouselImages.map((file)=>{
                    return new Promise((resolve)=>{
                        const reader = new FileReader();
                        reader.onload = (e)=>resolve(e.target.result);
                        reader.readAsDataURL(file);
                    });
                });
                const carouselImagesBase64 = await Promise.all(base64Promises);
                payload.carousel_images = carouselImagesBase64;
                sendPostRequest(payload);
            } else {
                setMessage({
                    type: "error",
                    text: "Please select at least one image"
                });
                setLoading(false);
                return;
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error processing images"
            });
            setLoading(false);
        }
    };
    const storeFormData = async (formData, status = "posted", errorMessage = null)=>{
        try {
            // Get user info from localStorage (matches UserContext storage key)
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            // Validate required fields
            if (!userId || !userEmail) {
                console.error("User data not available for Instagram post storage");
                return;
            }
            const dataPayload = {
                user_id: userId,
                user_email: userEmail,
                caption: formData.caption || "",
                media_type: postType || "single"
            };
            console.log("Instagram data payload being sent:", dataPayload);
            const response = await fetch("http://localhost:3001/api/data/instagram", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataPayload)
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("Instagram storage error:", response.status, errorData);
            } else {
                console.log("Instagram data stored successfully");
            }
        } catch (error) {
            console.error("Error storing Instagram form data:", error);
        // Don't throw error to avoid disrupting main flow
        }
    };
    const sendPostRequest = async (payload)=>{
        try {
            const response = await fetch(`${apiBaseUrl}/api/instagram/create-post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.success) {
                // Store successful post data
                await storeFormData(formData, "posted");
                setMessage({
                    type: "success",
                    text: "Post created successfully!"
                });
                setFormData({
                    caption: ""
                });
                setSelectedImage(null);
                setSelectedCarouselImages([]);
                setImagePreviews([]);
                fetchUserPosts();
            } else {
                // Store failed post data with error
                await storeFormData(formData, "failed", data.error || "Failed to create post");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create post"
                });
            }
        } catch (error) {
            // Store failed post data with network error
            await storeFormData(formData, "failed", "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const fetchUserPosts = async ()=>{
        setLoadingPosts(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/instagram/posts?limit=10`);
            const data = await response.json();
            if (data.success) {
                setUserPosts(data.posts);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally{
            setLoadingPosts(false);
        }
    };
    const handleDeleteClick = (postId)=>{
        setDeleteConfirmation(postId);
    };
    const confirmDelete = async ()=>{
        const postId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const response = await fetch(`${apiBaseUrl}/api/instagram/post/${postId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Post deleted successfully!"
                });
                fetchUserPosts();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete post"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting post"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 p-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 text-center mb-2",
                                children: "Delete Post"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 text-center mb-6",
                                children: "Are you sure you want to delete this post? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Delete"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Cancel"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                credentialsValid === false && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-lg animate-in slide-in-from-top duration-500",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-6 h-6 text-amber-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "ml-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-amber-800 font-medium",
                                    children: "Instagram credentials not configured or invalid. Please check your API configuration."
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(instagram/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent",
                                            children: "Create Instagram Post"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: ()=>setShowArticles(!showArticles),
                                            className: `relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${showArticles ? "bg-pink-100 text-pink-700 shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Articles"
                                                }),
                                                newArticleCount > 0 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                    children: newArticleCount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: toggleRssMonitoring,
                                            className: `flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${rssEnabled ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: [
                                                rssEnabled ? /*#__PURE__*/ jsx_runtime.jsx(bell/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(bell_off/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: rssEnabled ? "Monitoring" : "Monitor"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        showArticles && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 animate-in slide-in-from-top duration-300",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                children: "Custom RSS Feed URL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "url",
                                                value: customRssUrl,
                                                onChange: handleCustomRssChange,
                                                placeholder: "https://example.com/feed.rss (optional)",
                                                className: "w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-pink-600 text-sm mt-1",
                                                children: "Leave empty to use default Instagram-related feeds"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between bg-white/50 rounded-lg p-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: `w-2 h-2 rounded-full ${rssEnabled ? "bg-green-400 animate-pulse" : "bg-gray-400"}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: rssEnabled ? `Monitoring active - ${rssArticles?.length || 0} articles` : "Monitoring disabled"
                                                    })
                                                ]
                                            }),
                                            lastChecked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    "Last: ",
                                                    new Date(lastChecked).toLocaleTimeString()
                                                ]
                                            })
                                        ]
                                    }),
                                    rssError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-red-600 text-sm bg-red-50 rounded-lg p-3",
                                        children: [
                                            "Error: ",
                                            rssError
                                        ]
                                    }),
                                    rssEnabled && detectedArticles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-sm font-semibold text-gray-700 mb-3",
                                                children: "Recent Articles"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "space-y-2 max-h-64 overflow-y-auto",
                                                children: detectedArticles.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-white/70 rounded-lg p-3 hover:bg-white transition-colors cursor-pointer border border-pink-100",
                                                        onClick: ()=>handleArticleSelect(article),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "text-sm font-medium text-gray-800 mb-1 line-clamp-2",
                                                                children: article.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-xs text-gray-600 mb-2 line-clamp-2",
                                                                children: article.description
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "No date"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        className: "text-xs text-pink-600 hover:text-pink-700 px-2 py-1 bg-pink-100 rounded",
                                                                        children: "Use for Post"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    rssEnabled && detectedArticles.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                className: "w-12 h-12 text-pink-300 mx-auto mb-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-gray-700 font-medium mb-2",
                                                children: "No Articles Detected Yet"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-500 text-sm",
                                                children: rssError ? "Check your RSS feed URL and try again." : "Monitoring for new articles..."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                        className: "w-5 h-5 mr-2 flex-shrink-0"
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                        className: "w-5 h-5 mr-2 flex-shrink-0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-medium",
                                        children: message.text
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-2 h-2 bg-pink-500 rounded-full mr-2"
                                                }),
                                                "Caption"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            name: "caption",
                                            value: formData.caption,
                                            onChange: handleInputChange,
                                            rows: 4,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                            placeholder: "Write a caption for your post..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-pink-500"
                                                }),
                                                "Post Type"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex space-x-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    type: "button",
                                                    onClick: ()=>setPostType("single"),
                                                    className: `px-6 py-3 rounded-2xl flex items-center transition-all duration-200 transform hover:scale-105 ${postType === "single" ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-2 border-pink-300 shadow-lg" : "bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200"}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                            className: "w-5 h-5 mr-2"
                                                        }),
                                                        "Single Image"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    type: "button",
                                                    onClick: ()=>setPostType("carousel"),
                                                    className: `px-6 py-3 rounded-2xl flex items-center transition-all duration-200 transform hover:scale-105 ${postType === "carousel" ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-2 border-pink-300 shadow-lg" : "bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200"}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(icons_images/* default */.Z, {
                                                            className: "w-5 h-5 mr-2"
                                                        }),
                                                        "Carousel (2-10 images)"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                postType === "single" ? /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-pink-500"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(icons_images/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-pink-500"
                                                }),
                                                postType === "single" ? "Image" : "Images",
                                                " (Required)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: handleImageChange,
                                                className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100",
                                                multiple: postType === "carousel",
                                                required: true
                                            })
                                        }),
                                        imagePreviews.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex flex-wrap gap-4",
                                                children: imagePreviews.map((preview, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: preview,
                                                                alt: `Preview ${index + 1}`,
                                                                className: "w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white hover:shadow-xl transition-shadow duration-200"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                    className: "w-4 h-4 text-gray-600"
                                                                })
                                                            }),
                                                            postType === "carousel" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg",
                                                                children: index + 1
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    disabled: loading || credentialsValid === false || postType === "single" && !selectedImage || postType === "carousel" && selectedCarouselImages.length < 2,
                                    className: "w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                    onClick: handleSubmit,
                                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                className: "w-6 h-6 mr-3 animate-spin"
                                            }),
                                            "Posting..."
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                className: "w-6 h-6 mr-3"
                                            }),
                                            "Create Post"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                        className: "w-5 h-5 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                    children: "Recent Posts"
                                })
                            ]
                        }),
                        loadingPosts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                    className: "w-12 h-12 text-pink-500 animate-spin mb-4"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 font-medium",
                                    children: "Loading posts..."
                                })
                            ]
                        }) : userPosts.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(instagram/* default */.Z, {
                                        className: "w-10 h-10 text-gray-400"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 text-lg font-medium",
                                    children: "No posts found"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Your Instagram posts will appear here"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "space-y-4",
                            children: userPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center text-sm text-gray-500 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            new Date(post.created_time).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-900 mb-3 leading-relaxed font-medium",
                                                        children: post.caption || "[No caption]"
                                                    }),
                                                    post.image_url && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: post.image_url,
                                                            alt: "Post",
                                                            className: "max-w-full h-40 object-cover rounded-xl shadow-lg border-2 border-white"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-6 text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-pink-500 mr-1",
                                                                        children: "❤️"
                                                                    }),
                                                                    post.likes || 0,
                                                                    " likes"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-blue-500 mr-1",
                                                                        children: "\uD83D\uDCAC"
                                                                    }),
                                                                    post.comments || 0,
                                                                    " comments"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex space-x-2 ml-6",
                                                children: [
                                                    post.permalink && /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: post.permalink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "p-3 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_link/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: ()=>handleDeleteClick(post.id),
                                                        className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, post.id))
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/twitter.js
var twitter = __webpack_require__(6646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-circle.js
var message_circle = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/heart.js
var heart = __webpack_require__(8762);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/repeat.js
var repeat = __webpack_require__(1065);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-column.js
var chart_column = __webpack_require__(1646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(2686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(2826);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(2475);
;// CONCATENATED MODULE: ./src/components/XSection.jsx




























function XSection({ apiBaseUrl }) {
    const [formData, setFormData] = (0,external_react_.useState)({
        text: "",
        reply_to_tweet_id: "",
        hashtags: "",
        scheduled_time: ""
    });
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const [imagePreview, setImagePreview] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [userTweets, setUserTweets] = (0,external_react_.useState)([]);
    const [loadingTweets, setLoadingTweets] = (0,external_react_.useState)(false);
    const [credentialsValid, setCredentialsValid] = (0,external_react_.useState)(null);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    const [connecting, setConnecting] = (0,external_react_.useState)(false);
    const [connectionStatus, setConnectionStatus] = (0,external_react_.useState)({
        connected: false,
        message: "Not connected to X (Twitter)"
    });
    // New state variables for extended features
    const [activeTab, setActiveTab] = (0,external_react_.useState)("compose"); // compose, threads, schedule, insights, articles
    const [threadTweets, setThreadTweets] = (0,external_react_.useState)([
        ""
    ]);
    const [scheduledPosts, setScheduledPosts] = (0,external_react_.useState)([]);
    const [insights, setInsights] = (0,external_react_.useState)(null);
    const [trendingHashtags, setTrendingHashtags] = (0,external_react_.useState)([]);
    const [loadingInsights, setLoadingInsights] = (0,external_react_.useState)(false);
    const [loadingTrending, setLoadingTrending] = (0,external_react_.useState)(false);
    // RSS Article Detection state
    const [rssEnabled, setRssEnabled] = (0,external_react_.useState)(false);
    const [newArticleCount, setNewArticleCount] = (0,external_react_.useState)(0);
    const [detectedArticles, setDetectedArticles] = (0,external_react_.useState)([]);
    const [customRssUrl, setCustomRssUrl] = (0,external_react_.useState)("");
    // RSS polling hook - only active when enabled and have custom URL or default feeds
    const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.x[0];
    const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(rssEnabled && rssUrl ? rssUrl : null, {
        intervalMs: 60000,
        onNewArticles: (newArticles)=>{
            if (rssEnabled) {
                setNewArticleCount((prev)=>prev + newArticles.length);
                setDetectedArticles((prev)=>[
                        ...newArticles,
                        ...prev
                    ].slice(0, 50)); // Keep latest 50
            }
        }
    });
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            // Load connection status from cookies first
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("x", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
                setCredentialsValid(savedStatus.connected);
            }
        }
        checkConnectionStatus();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("x", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
                setCredentialsValid(savedStatus.connected);
            }
        }
    }, [
        (0,utils_connectionStatus/* getCurrentUserId */.rc)()
    ]);
    (0,external_react_.useEffect)(()=>{
        if (credentialsValid) {
            fetchUserTweets();
            if (activeTab === "insights") {
                fetchInsights();
            }
            if (activeTab === "compose" || activeTab === "threads") {
                fetchTrendingHashtags();
            }
        }
    }, [
        credentialsValid,
        activeTab
    ]);
    // Handle RSS article selection for auto-filling
    const handleArticleSelect = (article)=>{
        const tweetText = `${article.title} ${article.link}`;
        setFormData((prev)=>({
                ...prev,
                text: tweetText.slice(0, 280) // Twitter character limit
            }));
        setActiveTab("compose");
        setNewArticleCount(0); // Clear notification
    };
    // Toggle RSS monitoring
    const toggleRssMonitoring = ()=>{
        setRssEnabled(!rssEnabled);
        if (!rssEnabled) {
            setNewArticleCount(0);
        }
    };
    const checkConnectionStatus = async ()=>{
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/x/connection-status`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setConnectionStatus(data.status);
                setCredentialsValid(data.status.connected);
                // Save to cookies for persistence
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* saveConnectionStatus */.gs)("x", userId, data.status);
                }
            }
        } catch (error) {
            console.error("Error checking connection status:", error);
            setCredentialsValid(false);
        }
    };
    const validateCredentials = async ()=>{
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/validate-credentials`);
            const data = await response.json();
            setCredentialsValid(data.success && data.is_valid);
        } catch (error) {
            setCredentialsValid(false);
        }
    };
    const handleConnectX = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            // Step 1: Explicitly start OAuth flow (opens browser and completes locally)
            const startResp = await fetch(`${apiBaseUrl}/api/x/auth/start`, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    force_login: true
                })
            });
            const startData = await startResp.json();
            if (!startResp.ok || !startData.success) {
                setMessage({
                    type: "error",
                    text: startData.error || startData.message || "Failed to start X (Twitter) authentication"
                });
                setConnecting(false);
                return;
            }
            // Step 2: After successful OAuth, finalize connection in backend (DB save, exclusivity checks)
            // Retry on 429 (rate limited)
            let response, data;
            for(let attempt = 0; attempt < 3; attempt++){
                response = await fetch(`${apiBaseUrl}/api/x/connect`, {
                    method: "POST",
                    headers
                });
                // 204/empty safety
                try {
                    data = await response.json();
                } catch  {
                    data = {};
                }
                if (response.status !== 429) break;
                const retryDelay = (attempt + 1) * 3000; // 3s, 6s, 9s
                console.log(`X rate limited, retrying in ${retryDelay / 1000}s... (attempt ${attempt + 1}/3)`);
                setMessage({
                    type: "info",
                    text: `X is rate limiting. Please wait, retrying in ${retryDelay / 1000}s... (${attempt + 1}/3)`
                });
                await new Promise((r)=>setTimeout(r, retryDelay));
            }
            // Handle final response after retries
            if (response.status === 429) {
                setMessage({
                    type: "error",
                    text: "X is temporarily rate limiting us. Please try connecting again in a few minutes."
                });
                setConnecting(false);
                return;
            }
            if (!response.ok) {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to connect to X (Twitter). Please try again."
                });
                setConnecting(false);
                return;
            }
            // Success case - only if we have a successful response
            if (response.ok) {
                setMessage({
                    type: "success",
                    text: data.message || "Successfully connected to X (Twitter)!"
                });
                const newStatus = {
                    connected: true,
                    username: data.username || "Connected",
                    message: "Connected to X (Twitter)"
                };
                setConnectionStatus(newStatus);
                setCredentialsValid(true);
                // Save to cookies for persistence
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* saveConnectionStatus */.gs)("x", userId, newStatus);
                }
                // Also fetch tweets to populate the UI
                setTimeout(()=>{
                    fetchUserTweets();
                }, 1000);
            } else {
                // Handle account exclusivity error (409 status)
                if (response.status === 409 || data.account_unavailable) {
                    const errorMsg = data.connected_username ? `This X (Twitter) account (@${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different X account.` : "This X (Twitter) account is already connected to another user. Please disconnect from that account first or use a different X account.";
                    setMessage({
                        type: "error",
                        text: errorMsg
                    });
                } else {
                    setMessage({
                        type: "error",
                        text: data.error || "Failed to connect to X (Twitter)"
                    });
                }
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleDisconnectX = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/x/disconnect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                const newStatus = {
                    connected: false,
                    username: null,
                    message: "Not connected to X (Twitter)"
                };
                setConnectionStatus(newStatus);
                setCredentialsValid(false);
                setUserTweets([]);
                // Clear cookies
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* clearConnectionStatus */.ht)("x", userId);
                }
                // Clear form data
                setFormData({
                    text: "",
                    reply_to_tweet_id: "",
                    hashtags: "",
                    scheduled_time: ""
                });
                setSelectedImage(null);
                setImagePreview(null);
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to disconnect from X (Twitter)"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleCustomRssChange = (e)=>{
        setCustomRssUrl(e.target.value);
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e)=>setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };
    // Store form data in Node.js backend
    const storeFormData = async (formData, status = "posted", errorMessage = null)=>{
        try {
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            // Validate required fields
            if (!userId || !userEmail) {
                console.error("User data not available for X post storage");
                return;
            }
            const dataPayload = {
                user_id: userId,
                user_email: userEmail,
                text: `[COMPOSE] ${formData.text || ""}`,
                hashtags: formData.hashtags || "",
                status: status,
                error_message: errorMessage,
                reply_to_tweet_id: formData.reply_to_tweet_id || null
            };
            console.log("X (Twitter) data payload being sent:", dataPayload);
            const response = await fetch("http://localhost:3001/api/data/x", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataPayload)
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("X (Twitter) storage error:", response.status, errorData);
            } else {
                console.log("X (Twitter) data stored successfully");
            }
        } catch (error) {
            console.error("Error storing X form data:", error);
        }
    };
    // Store thread data in Node.js backend
    const storeThreadData = async (threadTweets, hashtags, status = "posted", threadInfo = null, errorMessage = null)=>{
        try {
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            // Validate required fields
            if (!userId || !userEmail) {
                console.error("User data not available for X thread storage");
                return;
            }
            // Store each thread tweet as a separate record
            for(let i = 0; i < threadTweets.length; i++){
                const tweetText = threadTweets[i];
                const dataPayload = {
                    user_id: userId,
                    user_email: userEmail,
                    text: `[THREAD ${i + 1}/${threadTweets.length}] ${tweetText}`,
                    hashtags: hashtags || "",
                    thread_tweets: JSON.stringify(threadTweets),
                    is_thread: true,
                    thread_position: i + 1,
                    platform_post_id: threadInfo?.tweets?.[i]?.tweet_id || null,
                    status: status,
                    error_message: errorMessage,
                    reply_to_tweet_id: null
                };
                console.log(`X (Twitter) thread tweet ${i + 1} data payload being sent:`, dataPayload);
                const response = await fetch("http://localhost:3001/api/data/x", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataPayload)
                });
                if (!response.ok) {
                    const errorData = await response.text();
                    console.error(`X (Twitter) thread tweet ${i + 1} storage error:`, response.status, errorData);
                } else {
                    console.log(`X (Twitter) thread tweet ${i + 1} data stored successfully`);
                }
            }
        } catch (error) {
            console.error("Error storing X thread data:", error);
        }
    };
    // Store scheduled tweet data in Node.js backend
    const storeScheduledData = async (formData, status = "scheduled", scheduledInfo = null, errorMessage = null)=>{
        try {
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            // Validate required fields
            if (!userId || !userEmail) {
                console.error("User data not available for X scheduled tweet storage");
                return;
            }
            const dataPayload = {
                user_id: userId,
                user_email: userEmail,
                text: `[SCHEDULED] ${formData.text || ""}`,
                hashtags: formData.hashtags || "",
                scheduled_time: formData.scheduled_time,
                platform_post_id: scheduledInfo?.id || null,
                status: status,
                error_message: errorMessage,
                reply_to_tweet_id: null
            };
            console.log("X (Twitter) scheduled tweet data payload being sent:", dataPayload);
            const response = await fetch("http://localhost:3001/api/data/x", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataPayload)
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("X (Twitter) scheduled tweet storage error:", response.status, errorData);
            } else {
                console.log("X (Twitter) scheduled tweet data stored successfully");
            }
        } catch (error) {
            console.error("Error storing X scheduled tweet data:", error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const payload = {
                ...formData
            };
            if (selectedImage) {
                payload.image_base64 = imagePreview;
            }
            const response = await fetch(`${apiBaseUrl}/api/x/create-tweet`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.success) {
                // Store successful post data
                await storeFormData(formData, "posted");
                setMessage({
                    type: "success",
                    text: "Tweet posted successfully!"
                });
                setFormData({
                    text: "",
                    reply_to_tweet_id: "",
                    hashtags: "",
                    scheduled_time: ""
                });
                setSelectedImage(null);
                setImagePreview(null);
                fetchUserTweets();
            } else {
                // Store failed post data with error
                await storeFormData(formData, "failed", data.error || "Failed to post tweet");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to post tweet"
                });
            }
        } catch (error) {
            // Store failed post data with network error
            await storeFormData(formData, "failed", "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const fetchUserTweets = async ()=>{
        setLoadingTweets(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/tweets?limit=10`);
            const data = await response.json();
            if (data.success) {
                setUserTweets(data.tweets);
            }
        } catch (error) {
            console.error("Error fetching tweets:", error);
        } finally{
            setLoadingTweets(false);
        }
    };
    const handleDeleteClick = (tweetId)=>{
        setDeleteConfirmation(tweetId);
    };
    const confirmDelete = async ()=>{
        const tweetId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/tweet/${tweetId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Tweet deleted successfully!"
                });
                fetchUserTweets();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete tweet"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting tweet"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    // New functions for extended features
    const fetchInsights = async ()=>{
        setLoadingInsights(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/insights/summary?days=30`);
            const data = await response.json();
            if (data.success) {
                setInsights(data.summary);
            }
        } catch (error) {
            console.error("Error fetching insights:", error);
        } finally{
            setLoadingInsights(false);
        }
    };
    const fetchTrendingHashtags = async ()=>{
        setLoadingTrending(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/hashtags/trending`);
            const data = await response.json();
            if (data.success) {
                setTrendingHashtags(data.trending_hashtags || []);
            }
        } catch (error) {
            console.error("Error fetching trending hashtags:", error);
        } finally{
            setLoadingTrending(false);
        }
    };
    const handleThreadTweetChange = (index, value)=>{
        const newThreadTweets = [
            ...threadTweets
        ];
        newThreadTweets[index] = value;
        setThreadTweets(newThreadTweets);
    };
    const addThreadTweet = ()=>{
        setThreadTweets([
            ...threadTweets,
            ""
        ]);
    };
    const removeThreadTweet = (index)=>{
        if (threadTweets.length > 1) {
            const newThreadTweets = threadTweets.filter((_, i)=>i !== index);
            setThreadTweets(newThreadTweets);
        }
    };
    const handleCreateThread = async ()=>{
        if (threadTweets.some((tweet)=>tweet.trim() === "")) {
            setMessage({
                type: "error",
                text: "All thread tweets must have content"
            });
            return;
        }
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/create-thread`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    thread_tweets: threadTweets.filter((tweet)=>tweet.trim() !== ""),
                    hashtags: formData.hashtags
                })
            });
            const data = await response.json();
            if (data.success) {
                // Store thread data in Node.js backend
                await storeThreadData(threadTweets.filter((tweet)=>tweet.trim() !== ""), formData.hashtags, "posted", data.thread);
                setMessage({
                    type: "success",
                    text: `Thread created successfully with ${data.thread.total_tweets} tweets!`
                });
                setThreadTweets([
                    ""
                ]);
                setFormData((prev)=>({
                        ...prev,
                        hashtags: ""
                    }));
                fetchUserTweets();
            } else {
                // Store failed thread data
                await storeThreadData(threadTweets.filter((tweet)=>tweet.trim() !== ""), formData.hashtags, "failed", null, data.error || "Failed to create thread");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create thread"
                });
            }
        } catch (error) {
            // Store failed thread data with network error
            await storeThreadData(threadTweets.filter((tweet)=>tweet.trim() !== ""), formData.hashtags, "failed", null, "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleScheduleTweet = async ()=>{
        if (!formData.text.trim()) {
            setMessage({
                type: "error",
                text: "Tweet text is required"
            });
            return;
        }
        if (!formData.scheduled_time) {
            setMessage({
                type: "error",
                text: "Scheduled time is required"
            });
            return;
        }
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const response = await fetch(`${apiBaseUrl}/api/x/schedule-tweet`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: formData.text,
                    scheduled_time: formData.scheduled_time,
                    hashtags: formData.hashtags,
                    image_base64: selectedImage
                })
            });
            const data = await response.json();
            if (data.success) {
                // Store scheduled tweet data in Node.js backend
                await storeScheduledData(formData, "scheduled", data.scheduled_tweet);
                setMessage({
                    type: "success",
                    text: "Tweet scheduled successfully!"
                });
                setFormData((prev)=>({
                        ...prev,
                        text: "",
                        hashtags: "",
                        scheduled_time: ""
                    }));
                setSelectedImage(null);
                setImagePreview(null);
            } else {
                // Store failed scheduled tweet data
                await storeScheduledData(formData, "failed", null, data.error || "Failed to schedule tweet");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to schedule tweet"
                });
            }
        } catch (error) {
            // Store failed scheduled tweet data with network error
            await storeScheduledData(formData, "failed", null, "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const addHashtag = (hashtag)=>{
        const currentHashtags = formData.hashtags;
        const hashtagToAdd = hashtag.startsWith("#") ? hashtag : `#${hashtag}`;
        if (!currentHashtags.includes(hashtagToAdd)) {
            const newHashtags = currentHashtags ? `${currentHashtags} ${hashtagToAdd}` : hashtagToAdd;
            setFormData((prev)=>({
                    ...prev,
                    hashtags: newHashtags
                }));
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 p-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 text-center mb-2",
                                children: "Delete Tweet"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 text-center mb-6",
                                children: "Are you sure you want to delete this tweet? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Delete"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Cancel"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-gradient-to-r from-cyan-600 to-blue-700 p-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                                                        className: "w-8 h-8 text-cyan-600"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                            className: "text-3xl font-bold text-white mb-2",
                                                            children: "X (Twitter)"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-cyan-100 text-lg",
                                                            children: "Share your thoughts with the world"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: `px-4 py-2 rounded-xl text-sm font-medium ${connectionStatus.connected ? "bg-green-500 text-white" : "bg-red-500 text-white"}`,
                                                    children: connectionStatus.message
                                                }),
                                                credentialsValid && /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: handleDisconnectX,
                                                    disabled: connecting,
                                                    className: "bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                                    children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                                className: "w-4 h-4 mr-2 animate-spin"
                                                            }),
                                                            "Disconnecting..."
                                                        ]
                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            "Disconnect"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                credentialsValid && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mt-6 flex space-x-2",
                                    children: [
                                        {
                                            id: "compose",
                                            label: "Compose",
                                            icon: send/* default */.Z
                                        },
                                        {
                                            id: "threads",
                                            label: "Threads",
                                            icon: hash/* default */.Z
                                        },
                                        {
                                            id: "schedule",
                                            label: "Schedule",
                                            icon: calendar/* default */.Z
                                        },
                                        {
                                            id: "insights",
                                            label: "Insights",
                                            icon: chart_column/* default */.Z
                                        },
                                        {
                                            id: "articles",
                                            label: "Articles",
                                            icon: rss/* default */.Z,
                                            badge: newArticleCount > 0 ? newArticleCount : null
                                        }
                                    ].map((tab)=>{
                                        const Icon = tab.icon;
                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: ()=>setActiveTab(tab.id),
                                            className: `relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${activeTab === tab.id ? "bg-white text-cyan-600 shadow-lg" : "text-cyan-100 hover:text-white hover:bg-cyan-500"}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(Icon, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: tab.label
                                                }),
                                                tab.badge && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                    children: tab.badge
                                                })
                                            ]
                                        }, tab.id);
                                    })
                                }),
                                credentialsValid && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-4 flex items-center justify-between bg-cyan-600/20 rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                    className: "w-5 h-5 text-cyan-200"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-white font-medium",
                                                            children: "Article Detection"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-cyan-200 text-sm",
                                                            children: rssEnabled ? `Monitoring ${rssUrl ? "custom feed" : "default feeds"}` : "Monitor RSS feeds for new articles"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            onClick: toggleRssMonitoring,
                                            className: `flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${rssEnabled ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-500 text-white hover:bg-gray-600"}`,
                                            children: [
                                                rssEnabled ? /*#__PURE__*/ jsx_runtime.jsx(bell/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(bell_off/* default */.Z, {
                                                    className: "w-4 h-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: rssEnabled ? "Enabled" : "Disabled"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        credentialsValid && activeTab === "articles" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "p-8 border-t border-cyan-200",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white/20 rounded-xl p-4 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-gray-900 font-semibold mb-2",
                                                children: "Custom RSS Feed URL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "url",
                                                value: customRssUrl,
                                                onChange: handleCustomRssChange,
                                                placeholder: "https://example.com/feed.rss (optional)",
                                                className: "w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-700 text-sm mt-1",
                                                children: "Leave empty to use default Twitter-related feeds"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white/20 rounded-xl p-4 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-gray-900 font-semibold",
                                                        children: "Feed Status"
                                                    }),
                                                    lastChecked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "text-gray-600 text-sm",
                                                        children: [
                                                            "Last checked: ",
                                                            new Date(lastChecked).toLocaleTimeString()
                                                        ]
                                                    })
                                                ]
                                            }),
                                            rssError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-red-600 text-sm mb-2 bg-red-50 rounded p-2",
                                                children: [
                                                    "Error: ",
                                                    rssError
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-gray-700 text-sm",
                                                children: rssEnabled ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                                                        }),
                                                        "Monitoring active - ",
                                                        rssArticles?.length || 0,
                                                        " articles found"
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "w-2 h-2 bg-gray-500 rounded-full mr-2"
                                                        }),
                                                        "Monitoring disabled"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    rssEnabled && detectedArticles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white/10 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-white font-medium mb-4",
                                                children: "Recent Articles"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "space-y-3 max-h-96 overflow-y-auto",
                                                children: detectedArticles.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer border border-white/10 hover:border-white/20",
                                                        onClick: ()=>handleArticleSelect(article),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "text-gray-900 font-semibold text-sm mb-2 line-clamp-2",
                                                                children: article.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700 text-xs mb-3 line-clamp-3 leading-relaxed",
                                                                children: article.description
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-gray-600 text-xs",
                                                                        children: article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "No date"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        className: "text-white hover:text-cyan-200 text-xs px-3 py-1 bg-cyan-500/50 hover:bg-cyan-500/70 rounded-full font-medium transition-colors",
                                                                        children: "Use for Tweet"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    rssEnabled && detectedArticles.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white/10 rounded-xl p-8 text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                className: "w-12 h-12 text-cyan-300 mx-auto mb-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-white font-medium mb-2",
                                                children: "No Articles Detected Yet"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-cyan-200 text-sm",
                                                children: rssError ? "Check your RSS feed URL and try again." : "Monitoring for new articles..."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        !credentialsValid && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "p-8 border-t border-cyan-200",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mr-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                                                    className: "w-6 h-6 text-white"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "text-xl font-bold text-white",
                                                        children: "X (Twitter) Connection"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-cyan-100 text-sm",
                                                        children: connectionStatus.message
                                                    }),
                                                    rssEnabled && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center mt-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                                className: "w-3 h-3 text-cyan-300 mr-1"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-cyan-300 text-xs",
                                                                children: "Article detection active"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex items-center space-x-3",
                                        children: connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleDisconnectX,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Disconnecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Disconnect"
                                                ]
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleConnectX,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Connecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Connect Account"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                credentialsValid && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700",
                    children: [
                        activeTab === "compose" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center mb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",
                                            children: "Compose Tweet"
                                        })
                                    ]
                                }),
                                message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2 flex-shrink-0"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2 flex-shrink-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "font-medium",
                                                children: message.text
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "w-2 h-2 bg-cyan-500 rounded-full mr-2"
                                                        }),
                                                        "Tweet Text"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                    name: "text",
                                                    value: formData.text,
                                                    onChange: handleInputChange,
                                                    rows: 4,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                                    placeholder: "What's happening?",
                                                    required: true,
                                                    maxLength: 280
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: `text-xs text-right mt-2 font-medium ${formData.text.length > 260 ? "text-red-500" : formData.text.length > 240 ? "text-amber-500" : "text-gray-500"}`,
                                                    children: [
                                                        formData.text.length,
                                                        "/280 characters"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                            className: "w-4 h-4 mr-2 text-cyan-500"
                                                        }),
                                                        "Hashtags (Optional)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    name: "hashtags",
                                                    value: formData.hashtags,
                                                    onChange: handleInputChange,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                    placeholder: "#hashtag1 #hashtag2"
                                                }),
                                                trendingHashtags.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mt-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-sm font-medium text-gray-600 mb-2",
                                                            children: "Trending:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: trendingHashtags.slice(0, 5).map((tag, index)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    type: "button",
                                                                    onClick: ()=>addHashtag(tag.hashtag),
                                                                    className: "px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm hover:bg-cyan-100 transition-colors",
                                                                    children: tag.hashtag
                                                                }, index))
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                            className: "w-4 h-4 mr-2 text-cyan-500"
                                                        }),
                                                        "Image (Optional)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: handleImageChange,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                                                    })
                                                }),
                                                imagePreview && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "relative inline-block",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: imagePreview,
                                                                alt: "Preview",
                                                                className: "max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                    className: "w-4 h-4 text-gray-600"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(message_circle/* default */.Z, {
                                                            className: "w-4 h-4 mr-2 text-cyan-500"
                                                        }),
                                                        "Reply to Tweet ID (Optional)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    name: "reply_to_tweet_id",
                                                    value: formData.reply_to_tweet_id,
                                                    onChange: handleInputChange,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                    placeholder: "Enter tweet ID to reply to"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "submit",
                                            disabled: loading || credentialsValid === false,
                                            className: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                            children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-6 h-6 mr-3 animate-spin"
                                                    }),
                                                    "Posting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                        className: "w-6 h-6 mr-3"
                                                    }),
                                                    "Tweet"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeTab === "threads" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center mb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                            children: "Create Thread"
                                        })
                                    ]
                                }),
                                message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2 flex-shrink-0"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2 flex-shrink-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "font-medium",
                                                children: message.text
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        threadTweets.map((tweet, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                                className: "block text-sm font-semibold text-gray-700 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "w-2 h-2 bg-purple-500 rounded-full mr-2"
                                                                    }),
                                                                    "Tweet ",
                                                                    index + 1
                                                                ]
                                                            }),
                                                            threadTweets.length > 1 && /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>removeThreadTweet(index),
                                                                className: "text-red-500 hover:text-red-700 p-1",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(minus/* default */.Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                        value: tweet,
                                                        onChange: (e)=>handleThreadTweetChange(index, e.target.value),
                                                        rows: 3,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                                        placeholder: `Tweet ${index + 1} content...`,
                                                        maxLength: 280
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: `text-xs text-right mt-1 font-medium ${tweet.length > 260 ? "text-red-500" : tweet.length > 240 ? "text-amber-500" : "text-gray-500"}`,
                                                        children: [
                                                            tweet.length,
                                                            "/280 characters"
                                                        ]
                                                    })
                                                ]
                                            }, index)),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            type: "button",
                                            onClick: addThreadTweet,
                                            className: "w-full py-3 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-all duration-200 flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(plus/* default */.Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                "Add Tweet to Thread"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                            className: "w-4 h-4 mr-2 text-purple-500"
                                                        }),
                                                        "Hashtags (Optional)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    name: "hashtags",
                                                    value: formData.hashtags,
                                                    onChange: handleInputChange,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                    placeholder: "#hashtag1 #hashtag2"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "button",
                                            onClick: handleCreateThread,
                                            disabled: loading || threadTweets.some((tweet)=>tweet.trim() === ""),
                                            className: "w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center",
                                            children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-6 h-6 mr-3 animate-spin"
                                                    }),
                                                    "Creating Thread..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                        className: "w-6 h-6 mr-3"
                                                    }),
                                                    "Create Thread"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeTab === "schedule" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center mb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent",
                                            children: "Schedule Tweet"
                                        })
                                    ]
                                }),
                                message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2 flex-shrink-0"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2 flex-shrink-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "font-medium",
                                                children: message.text
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "w-2 h-2 bg-orange-500 rounded-full mr-2"
                                                        }),
                                                        "Tweet Text"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                    name: "text",
                                                    value: formData.text,
                                                    onChange: handleInputChange,
                                                    rows: 4,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                                    placeholder: "What's happening?",
                                                    required: true,
                                                    maxLength: 280
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: `text-xs text-right mt-2 font-medium ${formData.text.length > 260 ? "text-red-500" : formData.text.length > 240 ? "text-amber-500" : "text-gray-500"}`,
                                                    children: [
                                                        formData.text.length,
                                                        "/280 characters"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                            className: "w-4 h-4 mr-2 text-orange-500"
                                                        }),
                                                        "Scheduled Time"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "datetime-local",
                                                    name: "scheduled_time",
                                                    value: formData.scheduled_time,
                                                    onChange: handleInputChange,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                            className: "w-4 h-4 mr-2 text-orange-500"
                                                        }),
                                                        "Hashtags (Optional)"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    name: "hashtags",
                                                    value: formData.hashtags,
                                                    onChange: handleInputChange,
                                                    className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                    placeholder: "#hashtag1 #hashtag2"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "button",
                                            onClick: handleScheduleTweet,
                                            disabled: loading || !formData.text.trim() || !formData.scheduled_time,
                                            className: "w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center",
                                            children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-6 h-6 mr-3 animate-spin"
                                                    }),
                                                    "Scheduling..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                        className: "w-6 h-6 mr-3"
                                                    }),
                                                    "Schedule Tweet"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeTab === "insights" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center mb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent",
                                            children: "Analytics & Insights"
                                        })
                                    ]
                                }),
                                loadingInsights ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center py-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                            className: "w-12 h-12 text-green-500 animate-spin mb-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-500 font-medium",
                                            children: "Loading insights..."
                                        })
                                    ]
                                }) : insights ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold text-blue-700",
                                                            children: "Total Tweets"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                                                            className: "w-8 h-8 text-blue-500"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-3xl font-bold text-blue-600",
                                                    children: insights.total_tweets || 0
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm text-blue-500 mt-1",
                                                    children: "Last 30 days"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold text-red-700",
                                                            children: "Total Likes"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(heart/* default */.Z, {
                                                            className: "w-8 h-8 text-red-500"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-3xl font-bold text-red-600",
                                                    children: insights.total_likes || 0
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm text-red-500 mt-1",
                                                    children: "All tweets"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold text-green-700",
                                                            children: "Retweets"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(repeat/* default */.Z, {
                                                            className: "w-8 h-8 text-green-500"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-3xl font-bold text-green-600",
                                                    children: insights.total_retweets || 0
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm text-green-500 mt-1",
                                                    children: "All tweets"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold text-purple-700",
                                                            children: "Replies"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(message_circle/* default */.Z, {
                                                            className: "w-8 h-8 text-purple-500"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-3xl font-bold text-purple-600",
                                                    children: insights.total_replies || 0
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm text-purple-500 mt-1",
                                                    children: "All tweets"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold text-orange-700",
                                                            children: "Impressions"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                            className: "w-8 h-8 text-orange-500"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-3xl font-bold text-orange-600",
                                                    children: insights.total_impressions || 0
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm text-orange-500 mt-1",
                                                    children: "All tweets"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold text-teal-700",
                                                            children: "Engagement Rate"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                                                            className: "w-8 h-8 text-teal-500"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "text-3xl font-bold text-teal-600",
                                                    children: [
                                                        insights.avg_engagement_rate || 0,
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm text-teal-500 mt-1",
                                                    children: "Average"
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                                                className: "w-10 h-10 text-gray-400"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-500 text-lg font-medium",
                                            children: "No insights available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-400 text-sm mt-1",
                                            children: "Post some tweets to see analytics"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                        className: "w-5 h-5 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
                                    children: "Recent Tweets"
                                })
                            ]
                        }),
                        loadingTweets ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                    className: "w-12 h-12 text-cyan-500 animate-spin mb-4"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 font-medium",
                                    children: "Loading tweets..."
                                })
                            ]
                        }) : userTweets.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                                        className: "w-10 h-10 text-gray-400"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 text-lg font-medium",
                                    children: "No tweets found"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Your tweets will appear here"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "space-y-4",
                            children: userTweets.map((tweet, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center text-sm text-gray-500 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            new Date(tweet.created_at).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-900 mb-4 leading-relaxed font-medium",
                                                        children: tweet.text
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-6 text-sm text-gray-500 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center hover:text-red-500 transition-colors cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(heart/* default */.Z, {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: tweet.likes || 0
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center hover:text-green-500 transition-colors cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(repeat/* default */.Z, {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: tweet.retweets || 0
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center hover:text-blue-500 transition-colors cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(message_circle/* default */.Z, {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: tweet.replies || 0
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex space-x-2 ml-6",
                                                children: [
                                                    tweet.url && /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: tweet.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "p-3 text-gray-400 hover:text-cyan-500 hover:bg-cyan-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_link/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: ()=>handleDeleteClick(tweet.id),
                                                        className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, tweet.id))
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/video.js
var video = __webpack_require__(4449);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/refresh-cw.js
var refresh_cw = __webpack_require__(3049);
;// CONCATENATED MODULE: ./src/components/TikTokSection.jsx






















function TikTokSection({ apiBaseUrl }) {
    const [formData, setFormData] = (0,external_react_.useState)({
        caption: "",
        hashtags: "",
        privacy_level: 0
    });
    const [selectedVideo, setSelectedVideo] = (0,external_react_.useState)(null);
    const [videoPreview, setVideoPreview] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [userVideos, setUserVideos] = (0,external_react_.useState)([]);
    const [loadingVideos, setLoadingVideos] = (0,external_react_.useState)(false);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    // Authentication state
    const [connectionStatus, setConnectionStatus] = (0,external_react_.useState)({
        connected: false,
        message: "Not connected to TikTok"
    });
    const [connecting, setConnecting] = (0,external_react_.useState)(false);
    const [loadingConnection, setLoadingConnection] = (0,external_react_.useState)(true);
    // Helper function to convert privacy level number to text
    const getPrivacyLevelText = (level)=>{
        switch(level){
            case 0:
                return "SELF_ONLY";
            case 1:
                return "FRIENDS_ONLY";
            case 2:
                return "PUBLIC_TO_EVERYONE";
            default:
                return "SELF_ONLY";
        }
    };
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            // Load connection status from cookies first
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("tiktok", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
            }
        }
        checkConnectionStatus();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("tiktok", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
            }
        }
    }, [
        (0,utils_connectionStatus/* getCurrentUserId */.rc)()
    ]);
    (0,external_react_.useEffect)(()=>{
        if (connectionStatus.connected) {
            fetchUserVideos();
        }
    }, [
        connectionStatus.connected
    ]);
    const checkConnectionStatus = async ()=>{
        setLoadingConnection(true);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/tiktok/connection-status`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setConnectionStatus(data.status);
                // Save to cookies for persistence
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* saveConnectionStatus */.gs)("tiktok", userId, data.status);
                }
            }
        } catch (error) {
            console.error("Error checking connection status:", error);
        } finally{
            setLoadingConnection(false);
        }
    };
    const handleConnectTikTok = async (forceReauth = false)=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/tiktok/connect`, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    force_reauth: forceReauth
                })
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                // Wait a bit for the authentication to complete, then check status
                setTimeout(()=>{
                    checkConnectionStatus();
                }, 2000);
            } else {
                // Handle account exclusivity error (409 status)
                if (response.status === 409 || data.account_unavailable) {
                    const errorMsg = data.connected_username ? `This TikTok account (@${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different TikTok account.` : "This TikTok account is already connected to another user. Please disconnect from that account first or use a different TikTok account.";
                    setMessage({
                        type: "error",
                        text: errorMsg
                    });
                } else {
                    setMessage({
                        type: "error",
                        text: data.message || "Failed to connect to TikTok"
                    });
                }
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleDisconnectTikTok = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/tiktok/disconnect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                const newStatus = {
                    connected: false,
                    username: null,
                    message: "Not connected to TikTok"
                };
                setConnectionStatus(newStatus);
                setUserVideos([]);
                // Clear cookies
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* clearConnectionStatus */.ht)("tiktok", userId);
                }
                // Clear form data
                setFormData({
                    caption: "",
                    hashtags: "",
                    privacy_level: 0
                });
                setSelectedVideo(null);
                setVideoPreview(null);
            } else {
                setMessage({
                    type: "error",
                    text: data.message || "Failed to disconnect from TikTok"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const handleVideoChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedVideo(file);
            const reader = new FileReader();
            reader.onload = (e)=>setVideoPreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!connectionStatus.connected) {
            setMessage({
                type: "error",
                text: "Please connect your TikTok account first"
            });
            return;
        }
        if (!selectedVideo) {
            setMessage({
                type: "error",
                text: "Please select a video to upload"
            });
            return;
        }
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        // Store form data in Node.js backend
        const storeFormData = async (formData, status = "posted", errorMessage = null)=>{
            try {
                const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
                const userId = userData.id;
                const userEmail = userData.email;
                // Validate required fields
                if (!userId || !userEmail) {
                    console.error("User data not available for TikTok post storage");
                    return;
                }
                const dataPayload = {
                    user_id: userId,
                    user_email: userEmail,
                    caption: formData.caption || "",
                    hashtags: formData.hashtags || "",
                    privacy_level: getPrivacyLevelText(formData.privacy_level)
                };
                console.log("TikTok data payload being sent:", dataPayload);
                const response = await fetch("http://localhost:3001/api/data/tiktok", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataPayload)
                });
                if (!response.ok) {
                    const errorData = await response.text();
                    console.error("TikTok storage error:", response.status, errorData);
                } else {
                    console.log("TikTok data stored successfully");
                }
            } catch (error) {
                console.error("Error storing TikTok form data:", error);
            }
        };
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("video", selectedVideo);
            formDataToSend.append("caption", formData.caption);
            formDataToSend.append("hashtags", formData.hashtags);
            formDataToSend.append("privacy_level", formData.privacy_level.toString());
            const response = await fetch(`${apiBaseUrl}/api/tiktok/upload-video`, {
                method: "POST",
                body: formDataToSend
            });
            const data = await response.json();
            if (data.success) {
                // Store successful post data
                await storeFormData(formData, "posted");
                setMessage({
                    type: "success",
                    text: "Video uploaded successfully!"
                });
                setFormData({
                    caption: "",
                    hashtags: "",
                    privacy_level: 0
                });
                setSelectedVideo(null);
                setVideoPreview(null);
                fetchUserVideos();
            } else {
                // Store failed post data with error
                await storeFormData(formData, "failed", data.error || "Failed to upload video");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to upload video"
                });
            }
        } catch (error) {
            // Store failed post data with network error
            await storeFormData(formData, "failed", "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const fetchUserVideos = async ()=>{
        if (!connectionStatus.connected) return;
        setLoadingVideos(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/tiktok/user-videos?limit=10`);
            const data = await response.json();
            if (data.success) {
                setUserVideos(data.videos);
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        } finally{
            setLoadingVideos(false);
        }
    };
    const handleDeleteClick = (videoId)=>{
        setDeleteConfirmation(videoId);
    };
    const confirmDelete = async ()=>{
        const videoId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const response = await fetch(`${apiBaseUrl}/api/tiktok/video/${videoId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Video deleted successfully!"
                });
                fetchUserVideos();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete video"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting video"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    const refreshConnection = async ()=>{
        setConnecting(true);
        try {
            const response = await fetch(`${apiBaseUrl}/api/tiktok/refresh`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                checkConnectionStatus();
            } else {
                setMessage({
                    type: "error",
                    text: data.message || "Failed to refresh connection"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    // Show loading screen while checking connection
    if (loadingConnection) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-100 p-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                        className: "w-12 h-12 text-pink-500 animate-spin mx-auto mb-4"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-600 font-medium",
                        children: "Checking TikTok connection..."
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-100 p-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-600"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 text-center mb-2",
                                children: "Delete Video"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 text-center mb-6",
                                children: "Are you sure you want to delete this video? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Delete"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Cancel"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-top duration-700",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mr-4 ${connectionStatus.connected ? "bg-gradient-to-br from-pink-500 to-red-600" : "bg-gradient-to-br from-gray-400 to-gray-500"}`,
                                        children: connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx(shield_check/* default */.Z, {
                                            className: "w-6 h-6 text-white"
                                        }) : /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                            className: "w-6 h-6 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "TikTok Connection"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: `text-sm font-medium ${connectionStatus.connected ? "text-pink-600" : "text-gray-500"}`,
                                                children: connectionStatus.message
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center space-x-4",
                                children: connectionStatus.connected ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>refreshConnection(),
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Refreshing..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(refresh_cw/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Refresh"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleDisconnectTikTok,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Disconnecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(log_out/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Disconnect"
                                                ]
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>handleConnectTikTok(false),
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Connecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(log_in/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Connect TikTok"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>handleConnectTikTok(true),
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Reconnecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(refresh_cw/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Force Reconnect"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                className: "w-5 h-5 mr-2 flex-shrink-0"
                            }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                className: "w-5 h-5 mr-2 flex-shrink-0"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "font-medium",
                                children: message.text
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${!connectionStatus.connected ? "opacity-50 pointer-events-none" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(video/* default */.Z, {
                                        className: "w-6 h-6 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent",
                                    children: "Upload TikTok Video"
                                })
                            ]
                        }),
                        !connectionStatus.connected && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                        className: "w-5 h-5 mr-2 text-amber-600"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-medium text-amber-700",
                                        children: "Please connect your TikTok account to upload videos"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-2 h-2 bg-pink-500 rounded-full mr-2"
                                                }),
                                                "Video"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "file",
                                                accept: "video/*",
                                                onChange: handleVideoChange,
                                                className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                disabled: !connectionStatus.connected,
                                                required: true
                                            })
                                        }),
                                        videoPreview && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("video", {
                                                        src: videoPreview,
                                                        controls: true,
                                                        className: "max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                            className: "w-4 h-4 text-gray-600"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-pink-500"
                                                }),
                                                "Caption"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                            name: "caption",
                                            value: formData.caption,
                                            onChange: handleInputChange,
                                            rows: 3,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed",
                                            placeholder: "Add a caption for your video...",
                                            disabled: !connectionStatus.connected
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-pink-500"
                                                }),
                                                "Hashtags (comma separated)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            name: "hashtags",
                                            value: formData.hashtags,
                                            onChange: handleInputChange,
                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                            placeholder: "funny, viral, trends",
                                            disabled: !connectionStatus.connected
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 text-pink-500"
                                                }),
                                                "Privacy Settings"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "flex items-center space-x-3 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "radio",
                                                            name: "privacy_level",
                                                            value: "0",
                                                            checked: formData.privacy_level === "0",
                                                            onChange: handleInputChange,
                                                            className: "w-5 h-5 text-pink-600 bg-gray-100 border-2 border-gray-300 focus:ring-pink-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                            disabled: !connectionStatus.connected
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-gray-700 font-medium",
                                                            children: "Public"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "flex items-center space-x-3 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "radio",
                                                            name: "privacy_level",
                                                            value: "1",
                                                            checked: formData.privacy_level === "1",
                                                            onChange: handleInputChange,
                                                            className: "w-5 h-5 text-pink-600 bg-gray-100 border-2 border-gray-300 focus:ring-pink-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                            disabled: !connectionStatus.connected
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-gray-700 font-medium",
                                                            children: "Friends Only"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "flex items-center space-x-3 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "radio",
                                                            name: "privacy_level",
                                                            value: "2",
                                                            checked: formData.privacy_level === "2",
                                                            onChange: handleInputChange,
                                                            className: "w-5 h-5 text-pink-600 bg-gray-100 border-2 border-gray-300 focus:ring-pink-500 focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                            disabled: !connectionStatus.connected
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-gray-700 font-medium",
                                                            children: "Private"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    disabled: loading || !connectionStatus.connected || !selectedVideo,
                                    className: "w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                className: "w-6 h-6 mr-3 animate-spin"
                                            }),
                                            "Uploading..."
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                className: "w-6 h-6 mr-3"
                                            }),
                                            "Upload Video"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                        className: "w-5 h-5 text-white"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent",
                                    children: "Your Recent Videos"
                                })
                            ]
                        }),
                        loadingVideos ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                    className: "w-12 h-12 text-pink-500 animate-spin mb-4"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 font-medium",
                                    children: "Loading videos..."
                                })
                            ]
                        }) : userVideos.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(video/* default */.Z, {
                                        className: "w-10 h-10 text-gray-400"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-500 text-lg font-medium",
                                    children: "No videos found"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-400 text-sm mt-1",
                                    children: "Your TikTok videos will appear here"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "space-y-4",
                            children: userVideos.map((video, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center text-sm text-gray-500 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            new Date(video.created_time).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "font-bold text-gray-900 mb-3 text-lg leading-tight",
                                                        children: video.caption
                                                    }),
                                                    video.hashtags && video.hashtags.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "flex flex-wrap gap-2 mb-3",
                                                        children: video.hashtags.map((tag, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full",
                                                                children: [
                                                                    "#",
                                                                    tag
                                                                ]
                                                            }, i))
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-6 text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center bg-emerald-50 px-3 py-1 rounded-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-emerald-600 font-semibold",
                                                                        children: [
                                                                            "❤️ ",
                                                                            video.likes
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-emerald-500 ml-1",
                                                                        children: "likes"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center bg-blue-50 px-3 py-1 rounded-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-blue-600 font-semibold",
                                                                        children: [
                                                                            "\uD83D\uDCAC ",
                                                                            video.comments
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-blue-500 ml-1",
                                                                        children: "comments"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center bg-purple-50 px-3 py-1 rounded-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-purple-600 font-semibold",
                                                                        children: [
                                                                            "↗️ ",
                                                                            video.shares
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-purple-500 ml-1",
                                                                        children: "shares"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex space-x-2 ml-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: video.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "p-3 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_link/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: ()=>handleDeleteClick(video.id),
                                                        className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, video.id))
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list.js
var list = __webpack_require__(1378);
;// CONCATENATED MODULE: ./src/components/PinterestSection.jsx
























function PinterestSection({ apiBaseUrl }) {
    const [formData, setFormData] = (0,external_react_.useState)({
        board_id: "",
        title: "",
        description: "",
        link: ""
    });
    const [selectedImage, setSelectedImage] = (0,external_react_.useState)(null);
    const [imagePreview, setImagePreview] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [pins, setPins] = (0,external_react_.useState)([]);
    const [boards, setBoards] = (0,external_react_.useState)([]);
    const [loadingPins, setLoadingPins] = (0,external_react_.useState)(false);
    const [loadingBoards, setLoadingBoards] = (0,external_react_.useState)(false);
    const [credentialsValid, setCredentialsValid] = (0,external_react_.useState)(null);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    const [showBoardForm, setShowBoardForm] = (0,external_react_.useState)(false);
    const [boardForm, setBoardForm] = (0,external_react_.useState)({
        name: "",
        description: "",
        privacy: "PUBLIC"
    });
    const [connecting, setConnecting] = (0,external_react_.useState)(false);
    const [connectionStatus, setConnectionStatus] = (0,external_react_.useState)({
        connected: false,
        message: "Not connected to Pinterest"
    });
    // RSS Article Detection state
    const [rssEnabled, setRssEnabled] = (0,external_react_.useState)(false);
    const [newArticleCount, setNewArticleCount] = (0,external_react_.useState)(0);
    const [detectedArticles, setDetectedArticles] = (0,external_react_.useState)([]);
    const [customRssUrl, setCustomRssUrl] = (0,external_react_.useState)("");
    const [showArticles, setShowArticles] = (0,external_react_.useState)(false);
    // RSS polling hook - only active when enabled
    const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.pinterest[0];
    const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(rssEnabled && rssUrl ? rssUrl : null, {
        intervalMs: 60000,
        onNewArticles: (newArticles)=>{
            if (rssEnabled) {
                setNewArticleCount((prev)=>prev + newArticles.length);
                setDetectedArticles((prev)=>[
                        ...newArticles,
                        ...prev
                    ].slice(0, 50));
            }
        }
    });
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            // Load connection status from cookies first
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("pinterest", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
                setCredentialsValid(savedStatus.connected);
            }
        }
        checkConnectionStatus();
    }, []);
    // Handle RSS article selection for auto-filling
    const handleArticleSelect = (article)=>{
        setFormData((prev)=>({
                ...prev,
                title: article.title.slice(0, 100),
                description: `${article.description}\n\nSource: ${article.link}`.slice(0, 500),
                link: article.link
            }));
        setShowArticles(false);
        setNewArticleCount(0); // Clear notification
    };
    // Toggle RSS monitoring
    const toggleRssMonitoring = ()=>{
        setRssEnabled(!rssEnabled);
        if (!rssEnabled) {
            setNewArticleCount(0);
        }
    };
    const handleCustomRssChange = (e)=>{
        setCustomRssUrl(e.target.value);
    };
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("pinterest", userId);
            if (savedStatus) {
                setConnectionStatus(savedStatus);
                setCredentialsValid(savedStatus.connected);
            }
        }
    }, [
        (0,utils_connectionStatus/* getCurrentUserId */.rc)()
    ]);
    (0,external_react_.useEffect)(()=>{
        if (credentialsValid) {
            fetchBoards();
            fetchPins();
        }
    }, [
        credentialsValid
    ]);
    const checkConnectionStatus = async ()=>{
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/pinterest/connection-status`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setConnectionStatus(data.status);
                setCredentialsValid(data.status.connected);
                // Save to cookies for persistence
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* saveConnectionStatus */.gs)("pinterest", userId, data.status);
                }
            }
        } catch (error) {
            console.error("Error checking connection status:", error);
            setCredentialsValid(false);
        }
    };
    const handleConnectPinterest = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/pinterest/connect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                // Wait a bit for the authentication to complete, then check status
                setTimeout(()=>{
                    checkConnectionStatus();
                }, 2000);
            } else {
                // Handle account exclusivity error (409 status)
                if (response.status === 409 || data.account_unavailable) {
                    const errorMsg = data.connected_username ? `This Pinterest account (@${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different Pinterest account.` : "This Pinterest account is already connected to another user. Please disconnect from that account first or use a different Pinterest account.";
                    setMessage({
                        type: "error",
                        text: errorMsg
                    });
                } else {
                    setMessage({
                        type: "error",
                        text: data.error || "Failed to connect to Pinterest"
                    });
                }
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleDisconnectPinterest = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/pinterest/disconnect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                const newStatus = {
                    connected: false,
                    username: null,
                    message: "Not connected to Pinterest"
                };
                setConnectionStatus(newStatus);
                setCredentialsValid(false);
                setBoards([]);
                setPins([]);
                // Clear cookies
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* clearConnectionStatus */.ht)("pinterest", userId);
                }
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to disconnect from Pinterest"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const validateCredentials = async ()=>{
        try {
            const response = await fetch(`${apiBaseUrl}/api/pinterest/validate-credentials`);
            const data = await response.json();
            setCredentialsValid(data.success && data.is_valid);
        } catch (error) {
            setCredentialsValid(false);
        }
    };
    const fetchBoards = async ()=>{
        setLoadingBoards(true);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/pinterest/boards`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setBoards(data.boards || []);
            }
        } catch (error) {
            console.error("Error fetching boards:", error);
        } finally{
            setLoadingBoards(false);
        }
    };
    const fetchPins = async ()=>{
        setLoadingPins(true);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/pinterest/pins`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setPins(data.pins || []);
            }
        } catch (error) {
            console.error("Error fetching pins:", error);
        } finally{
            setLoadingPins(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleBoardInputChange = (e)=>{
        const { name, value } = e.target;
        setBoardForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onload = (e)=>setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };
    const storeFormData = async (formData, status = "posted", errorMessage = null)=>{
        try {
            const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
            const userId = userData.id;
            const userEmail = userData.email;
            // Validate required fields
            if (!userId || !userEmail) {
                console.error("User data not available for Pinterest post storage");
                return;
            }
            // Ensure required fields have values (backend validation requirements)
            const boardId = formData.board_id || "default-board";
            const pinTitle = formData.title || "Untitled Pin";
            const dataPayload = {
                user_id: userId,
                user_email: userEmail,
                board_id: boardId,
                title: pinTitle,
                description: formData.description || "",
                link: formData.link || ""
            };
            console.log("Pinterest data payload being sent:", dataPayload);
            const response = await fetch("http://localhost:3001/api/data/pinterest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataPayload)
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("Pinterest storage error:", response.status, errorData);
            } else {
                console.log("Pinterest data stored successfully");
            }
        } catch (error) {
            console.error("Error storing Pinterest form data:", error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const payload = {
                ...formData
            };
            if (selectedImage) {
                payload.image_base64 = imagePreview;
            }
            const response = await fetch(`${apiBaseUrl}/api/pinterest/pins`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.success) {
                // Store successful post data
                await storeFormData(formData, "posted");
                setMessage({
                    type: "success",
                    text: "Pin created successfully!"
                });
                setFormData({
                    board_id: "",
                    title: "",
                    description: "",
                    link: ""
                });
                setSelectedImage(null);
                setImagePreview(null);
                fetchPins();
            } else {
                // Store failed post data with error
                await storeFormData(formData, "failed", data.error || "Failed to create pin");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create pin"
                });
            }
        } catch (error) {
            // Store failed post data with network error
            await storeFormData(formData, "failed", "Network error occurred");
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleBoardSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const response = await fetch(`${apiBaseUrl}/api/pinterest/boards`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(boardForm)
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Board created successfully!"
                });
                setBoardForm({
                    name: "",
                    description: "",
                    privacy: "PUBLIC"
                });
                setShowBoardForm(false);
                fetchBoards();
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create board"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleDeleteClick = (pinId)=>{
        setDeleteConfirmation(pinId);
    };
    const confirmDelete = async ()=>{
        const pinId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const response = await fetch(`${apiBaseUrl}/api/pinterest/pins/${pinId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Pin deleted successfully!"
                });
                fetchPins();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete pin"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting pin"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-4xl mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-top duration-700",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: `flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mr-4 ${connectionStatus.connected ? "bg-gradient-to-br from-emerald-500 to-green-600" : "bg-gradient-to-br from-gray-400 to-gray-500"}`,
                                            children: connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx(shield_check/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "Pinterest Connection"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: `text-sm font-medium ${connectionStatus.connected ? "text-emerald-600" : "text-gray-500"}`,
                                                    children: connectionStatus.message
                                                }),
                                                rssEnabled && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center mt-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                            className: "w-3 h-3 text-red-500 mr-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-red-600 text-xs",
                                                            children: "Article detection active"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        connectionStatus.connected && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    onClick: ()=>setShowArticles(!showArticles),
                                                    className: `relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${showArticles ? "bg-red-100 text-red-700 shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Articles"
                                                        }),
                                                        newArticleCount > 0 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                            children: newArticleCount
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    onClick: toggleRssMonitoring,
                                                    className: `flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${rssEnabled ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                    children: [
                                                        rssEnabled ? /*#__PURE__*/ jsx_runtime.jsx(bell/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }) : /*#__PURE__*/ jsx_runtime.jsx(bell_off/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: rssEnabled ? "Monitoring" : "Monitor"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleDisconnectPinterest,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Disconnecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(log_out/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Disconnect"
                                                ]
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleConnectPinterest,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Connecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(log_in/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Connect Pinterest Account"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    connectionStatus.connected && showArticles && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in slide-in-from-top duration-300",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                            className: "w-6 h-6 text-red-500 mr-3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: "Article Detection"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Custom RSS Feed URL"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "url",
                                            value: customRssUrl,
                                            onChange: handleCustomRssChange,
                                            placeholder: "https://rsshub.app/pinterest/user/pinterest/official-news (optional)",
                                            className: "w-full px-4 py-2 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: "Leave empty to use default Pinterest-related feeds"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between bg-red-50/50 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: `w-3 h-3 rounded-full ${rssEnabled ? "bg-green-400 animate-pulse" : "bg-gray-400"}`
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: rssEnabled ? `Monitoring active - ${rssArticles?.length || 0} articles` : "Monitoring disabled"
                                                })
                                            ]
                                        }),
                                        lastChecked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "Last: ",
                                                new Date(lastChecked).toLocaleTimeString()
                                            ]
                                        })
                                    ]
                                }),
                                rssError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-red-600 text-sm bg-red-50 rounded-lg p-3",
                                    children: [
                                        "Error: ",
                                        rssError
                                    ]
                                }),
                                rssEnabled && detectedArticles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-sm font-semibold text-gray-700 mb-4",
                                            children: "Recent Articles"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "space-y-3 max-h-80 overflow-y-auto",
                                            children: detectedArticles.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white/70 rounded-lg p-4 hover:bg-white transition-colors cursor-pointer border border-red-100 hover:border-red-200",
                                                    onClick: ()=>handleArticleSelect(article),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                            className: "text-sm font-medium text-gray-800 mb-2 line-clamp-2",
                                                            children: article.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-xs text-gray-600 mb-3 line-clamp-3",
                                                            children: article.description
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "No date"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    className: "text-xs text-red-600 hover:text-red-700 px-3 py-1 bg-red-100 rounded-full font-medium",
                                                                    children: "Use for Pin"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                }),
                                rssEnabled && detectedArticles.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                            className: "w-16 h-16 text-red-300 mx-auto mb-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-gray-700 font-medium mb-2",
                                            children: "No Articles Detected Yet"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-500 text-sm",
                                            children: rssError ? "Check your RSS feed URL and try again." : "Monitoring for new articles from Pinterest feeds..."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "font-medium",
                                    children: message.text
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${!connectionStatus.connected ? "opacity-50 pointer-events-none" : ""}`,
                        children: [
                            showBoardForm && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg mr-4",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(plus/* default */.Z, {
                                                            className: "w-6 h-6 text-white"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent",
                                                        children: "Create Board"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                onClick: ()=>setShowBoardForm(false),
                                                className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                    className: "w-6 h-6"
                                                })
                                            })
                                        ]
                                    }),
                                    message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "font-medium",
                                                    children: message.text
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        onSubmit: handleBoardSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                            }),
                                                            "Board Name"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        name: "name",
                                                        value: boardForm.name,
                                                        onChange: handleBoardInputChange,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                        placeholder: "My Awesome Board",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                            }),
                                                            "Description (Optional)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                        name: "description",
                                                        value: boardForm.description,
                                                        onChange: handleBoardInputChange,
                                                        rows: 3,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                                        placeholder: "What's this board about?"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                            }),
                                                            "Privacy"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                        name: "privacy",
                                                        value: boardForm.privacy,
                                                        onChange: handleBoardInputChange,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "PUBLIC",
                                                                children: "Public"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "PROTECTED",
                                                                children: "Protected (Visible to followers)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                value: "SECRET",
                                                                children: "Secret (Only you)"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                disabled: loading || credentialsValid === false,
                                                className: "w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                                children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                            className: "w-6 h-6 mr-3 animate-spin"
                                                        }),
                                                        "Creating..."
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(plus/* default */.Z, {
                                                            className: "w-6 h-6 mr-3"
                                                        }),
                                                        "Create Board"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center mb-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-lg mr-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-6 h-6 text-white"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent",
                                                children: "Create Pin"
                                            })
                                        ]
                                    }),
                                    message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "font-medium",
                                                    children: message.text
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                            }),
                                                            "Board"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                name: "board_id",
                                                                value: formData.board_id,
                                                                onChange: handleInputChange,
                                                                className: "flex-1 px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                                required: true,
                                                                disabled: loadingBoards,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                        value: "",
                                                                        children: "Select a board"
                                                                    }),
                                                                    boards.map((board)=>/*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                            value: board.id,
                                                                            children: board.name
                                                                        }, board.id))
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowBoardForm(true),
                                                                className: "flex items-center justify-center px-6 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(plus/* default */.Z, {
                                                                        className: "w-5 h-5 mr-2"
                                                                    }),
                                                                    "New"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                            }),
                                                            "Title (Optional)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        name: "title",
                                                        value: formData.title,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                        placeholder: "Give your pin a title"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                            }),
                                                            "Description (Optional)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                        name: "description",
                                                        value: formData.description,
                                                        onChange: handleInputChange,
                                                        rows: 3,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none",
                                                        placeholder: "Tell people what this pin is about"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                                className: "w-4 h-4 mr-2 text-red-500"
                                                            }),
                                                            "Link (Optional)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "url",
                                                        name: "link",
                                                        value: formData.link,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                                                        placeholder: "https://example.com"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                                className: "w-4 h-4 mr-2 text-red-500"
                                                            }),
                                                            "Image (Required)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleImageChange,
                                                            className: "w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100",
                                                            required: true
                                                        })
                                                    }),
                                                    imagePreview && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative inline-block",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: imagePreview,
                                                                    alt: "Preview",
                                                                    className: "max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                        className: "w-4 h-4 text-gray-600"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                disabled: loading || credentialsValid === false,
                                                className: "w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                                children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                            className: "w-6 h-6 mr-3 animate-spin"
                                                        }),
                                                        "Creating..."
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                            className: "w-6 h-6 mr-3"
                                                        }),
                                                        "Create Pin"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg mr-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(list/* default */.Z, {
                                                    className: "w-5 h-5 text-white"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent",
                                                children: "Your Boards"
                                            })
                                        ]
                                    }),
                                    loadingBoards ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center py-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                className: "w-12 h-12 text-red-500 animate-spin mb-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-500 font-medium",
                                                children: "Loading boards..."
                                            })
                                        ]
                                    }) : boards.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(list/* default */.Z, {
                                                    className: "w-10 h-10 text-gray-400"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-500 text-lg font-medium",
                                                children: "No boards found"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-400 text-sm mt-1",
                                                children: "Create your first board to get started"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                onClick: ()=>setShowBoardForm(true),
                                                className: "mt-6 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(plus/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Create Board"
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: boards.map((board, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                                style: {
                                                    animationDelay: `${index * 50}ms`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex items-start justify-between",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                className: "text-lg font-bold text-gray-900 mb-1",
                                                                children: board.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-sm text-gray-500 mb-3",
                                                                children: board.description || "No description"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center text-xs text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "capitalize",
                                                                        children: board.privacy.toLowerCase()
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "mx-2",
                                                                        children: "•"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        children: [
                                                                            board.pin_count || 0,
                                                                            " pins"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, board.id))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg mr-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-5 h-5 text-white"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                                children: "Recent Pins"
                                            })
                                        ]
                                    }),
                                    loadingPins ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center py-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                className: "w-12 h-12 text-red-500 animate-spin mb-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-500 font-medium",
                                                children: "Loading pins..."
                                            })
                                        ]
                                    }) : pins.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_image/* default */.Z, {
                                                    className: "w-10 h-10 text-gray-400"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-500 text-lg font-medium",
                                                children: "No pins found"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-400 text-sm mt-1",
                                                children: "Your Pinterest pins will appear here"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "space-y-4",
                                        children: pins.map((pin, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                                style: {
                                                    animationDelay: `${index * 100}ms`
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-start justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center text-sm text-gray-500 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                                            className: "w-4 h-4 mr-2"
                                                                        }),
                                                                        new Date(pin.created_at).toLocaleDateString("en-US", {
                                                                            year: "numeric",
                                                                            month: "long",
                                                                            day: "numeric",
                                                                            hour: "2-digit",
                                                                            minute: "2-digit"
                                                                        })
                                                                    ]
                                                                }),
                                                                pin.title && /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "text-lg font-bold text-gray-900 mb-2",
                                                                    children: pin.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-gray-700 mb-3 leading-relaxed",
                                                                    children: pin.description
                                                                }),
                                                                pin.link && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                    href: pin.link,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium hover:underline transition-colors duration-200",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                                            className: "w-4 h-4 mr-1"
                                                                        }),
                                                                        "View Link"
                                                                    ]
                                                                }),
                                                                pin.url && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                    href: pin.url,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "inline-flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium hover:underline transition-colors duration-200 ml-4",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                            className: "w-4 h-4 mr-1"
                                                                        }),
                                                                        "View on Pinterest"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "flex space-x-2 ml-6",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>handleDeleteClick(pin.id),
                                                                className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                                    className: "w-5 h-5"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, pin.id))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-500"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 mb-2",
                                children: "Delete Pin"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 mb-6",
                                children: "Are you sure you want to delete this pin? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium",
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 font-medium",
                                        children: "Delete"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/YouTubeShortsSection.jsx

























function YouTubeShortsSection({ apiBaseUrl }) {
    const { user } = (0,UserContext/* useUser */.a)();
    const [formData, setFormData] = (0,external_react_.useState)({
        title: "",
        description: "",
        link: "",
        privacyStatus: "public",
        scheduled_time: "" // New field for scheduling
    });
    const [selectedVideo, setSelectedVideo] = (0,external_react_.useState)(null);
    const [videoPreview, setVideoPreview] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [message, setMessage] = (0,external_react_.useState)({
        type: "",
        text: ""
    });
    const [shorts, setShorts] = (0,external_react_.useState)([]);
    const [loadingShorts, setLoadingShorts] = (0,external_react_.useState)(false);
    const [credentialsValid, setCredentialsValid] = (0,external_react_.useState)(null);
    const [deleteConfirmation, setDeleteConfirmation] = (0,external_react_.useState)(null);
    const [connecting, setConnecting] = (0,external_react_.useState)(false);
    const [connectionStatus, setConnectionStatus] = (0,external_react_.useState)({
        connected: false,
        message: "Not connected to YouTube"
    });
    const [lastConnectionCheck, setLastConnectionCheck] = (0,external_react_.useState)(null);
    // RSS Article Detection state
    const [rssEnabled, setRssEnabled] = (0,external_react_.useState)(false);
    const [newArticleCount, setNewArticleCount] = (0,external_react_.useState)(0);
    const [detectedArticles, setDetectedArticles] = (0,external_react_.useState)([]);
    const [customRssUrl, setCustomRssUrl] = (0,external_react_.useState)("");
    const [showArticles, setShowArticles] = (0,external_react_.useState)(false);
    // RSS polling hook - only active when enabled
    const rssUrl = customRssUrl || PLATFORM_RSS_FEEDS.youtube[0];
    const { articles: rssArticles, lastChecked, error: rssError } = useRssPolling(rssEnabled && rssUrl ? rssUrl : null, {
        intervalMs: 60000,
        onNewArticles: (newArticles)=>{
            if (rssEnabled) {
                setNewArticleCount((prev)=>prev + newArticles.length);
                setDetectedArticles((prev)=>[
                        ...newArticles,
                        ...prev
                    ].slice(0, 50));
            }
        }
    });
    // Handle RSS article selection for auto-filling
    const handleArticleSelect = (article)=>{
        setFormData((prev)=>({
                ...prev,
                title: article.title.slice(0, 100),
                description: `${article.description}\n\nSource: ${article.link}`.slice(0, 5000),
                link: article.link
            }));
        setShowArticles(false);
        setNewArticleCount(0); // Clear notification
    };
    // Toggle RSS monitoring
    const toggleRssMonitoring = ()=>{
        setRssEnabled(!rssEnabled);
        if (!rssEnabled) {
            setNewArticleCount(0);
        }
    };
    const handleCustomRssChange = (e)=>{
        setCustomRssUrl(e.target.value);
    };
    (0,external_react_.useEffect)(()=>{
        const initializeConnection = async ()=>{
            const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
            if (userId) {
                // Load connection status from cookies first
                const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("youtube", userId);
                if (savedStatus && savedStatus.connected) {
                    console.log("Loading saved YouTube connection status:", savedStatus);
                    setConnectionStatus(savedStatus);
                    setCredentialsValid(savedStatus.connected);
                }
            }
            // Always check with server to get latest status
            await checkConnectionStatus();
        };
        initializeConnection();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
        if (userId) {
            const savedStatus = (0,utils_connectionStatus/* getConnectionStatus */.Zp)("youtube", userId);
            if (savedStatus && savedStatus.connected) {
                console.log("User changed, loading YouTube connection status:", savedStatus);
                setConnectionStatus(savedStatus);
                setCredentialsValid(savedStatus.connected);
            // Don't check server immediately if we have a saved connected status
            } else {
                // User changed and no saved status, reset state and check with server
                console.log("User changed, no saved YouTube connection status, resetting state");
                setConnectionStatus({
                    connected: false,
                    message: "Not connected to YouTube"
                });
                setCredentialsValid(false);
                setShorts([]);
                // Only check server status if we don't have a saved status
                checkConnectionStatus();
            }
        } else {
            // No user logged in, reset all state
            console.log("No user logged in, resetting YouTube state");
            setConnectionStatus({
                connected: false,
                message: "Not connected to YouTube"
            });
            setCredentialsValid(false);
            setShorts([]);
        }
    }, [
        (0,utils_connectionStatus/* getCurrentUserId */.rc)(),
        user
    ]);
    (0,external_react_.useEffect)(()=>{
        if (credentialsValid) {
            console.log("YouTube credentials valid, fetching shorts");
            fetchShorts();
        } else {
            console.log("YouTube credentials invalid, clearing shorts");
            setShorts([]);
        }
    }, [
        credentialsValid
    ]);
    const checkConnectionStatus = async ()=>{
        // Debounce connection checks - don't check more than once every 30 seconds
        const now = Date.now();
        if (lastConnectionCheck && now - lastConnectionCheck < 30000) {
            console.log("YouTube connection check skipped (debounced)");
            return;
        }
        setLastConnectionCheck(now);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/youtube/connection-status`, {
                headers
            });
            const data = await response.json();
            console.log("YouTube connection status response:", data);
            if (data.success) {
                setConnectionStatus(data.status);
                setCredentialsValid(data.status.connected);
                // Save to cookies for persistence
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* saveConnectionStatus */.gs)("youtube", userId, data.status);
                }
                // Show success message if connected
                if (data.status.connected) {
                    setMessage({
                        type: "success",
                        text: data.status.message || `Connected to YouTube as ${data.status.username}`
                    });
                }
            } else {
                console.error("Connection status check failed:", data);
                setCredentialsValid(false);
                setConnectionStatus({
                    connected: false,
                    message: "Not connected to YouTube"
                });
            }
        } catch (error) {
            console.error("Error checking connection status:", error);
            setCredentialsValid(false);
            setConnectionStatus({
                connected: false,
                message: "Not connected to YouTube"
            });
        }
    };
    const handleConnectYouTube = async ()=>{
        console.log("\uD83C\uDFAF YouTube Connect button clicked!");
        console.log("API Base URL:", apiBaseUrl);
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            console.log("\uD83D\uDCE1 Making request to:", `${apiBaseUrl}/api/youtube/connect`);
            console.log("\uD83D\uDCCB Request headers:", headers);
            const response = await fetch(`${apiBaseUrl}/api/youtube/connect`, {
                method: "POST",
                headers
            });
            console.log("\uD83D\uDCE5 Response status:", response.status);
            console.log("\uD83D\uDCE5 Response headers:", response.headers);
            const data = await response.json();
            console.log("\uD83D\uDCCA Response data:", data);
            console.log("✅ Data.success:", data.success);
            console.log("\uD83D\uDC64 Data.username:", data.username);
            if (data.success) {
                console.log("✅ YouTube connection successful!");
                console.log("Username from response:", data.username);
                setMessage({
                    type: "success",
                    text: data.message
                });
                // Wait a bit for the authentication to complete, then check status (Pinterest approach)
                setTimeout(()=>{
                    checkConnectionStatus();
                }, 2000);
            } else {
                // Handle account exclusivity error (409 status)
                if (response.status === 409 || data.account_unavailable) {
                    const errorMsg = data.connected_username ? `This YouTube account (${data.connected_username}) is already connected to another user. Please disconnect from that account first or use a different YouTube account.` : "This YouTube account is already connected to another user. Please disconnect from that account first or use a different YouTube account.";
                    setMessage({
                        type: "error",
                        text: errorMsg
                    });
                } else {
                    setMessage({
                        type: "error",
                        text: data.error || "Failed to connect to YouTube"
                    });
                }
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const handleDisconnectYouTube = async ()=>{
        setConnecting(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/youtube/disconnect`, {
                method: "POST",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: data.message
                });
                const newStatus = {
                    connected: false,
                    username: null,
                    message: "Not connected to YouTube"
                };
                setConnectionStatus(newStatus);
                setCredentialsValid(false);
                setShorts([]);
                // Clear cookies
                const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
                if (userId) {
                    (0,utils_connectionStatus/* clearConnectionStatus */.ht)("youtube", userId);
                }
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to disconnect from YouTube"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setConnecting(false);
        }
    };
    const fetchShorts = async ()=>{
        setLoadingShorts(true);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/youtube/shorts`, {
                headers
            });
            const data = await response.json();
            if (data.success) {
                setShorts(data.shorts || []);
            }
        } catch (error) {
            console.error("Error fetching YouTube Shorts:", error);
        } finally{
            setLoadingShorts(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Helper to check if scheduled_time is in the past
    const isScheduledTimeInPast = ()=>{
        if (!formData.scheduled_time) return false;
        const scheduled = new Date(formData.scheduled_time);
        return scheduled.getTime() < new Date("2025-08-13T21:52:39+05:30").getTime();
    };
    const handleVideoChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            if (file.size > 50 * 1024 * 1024) {
                setMessage({
                    type: "error",
                    text: "Video file must be less than 50MB"
                });
                return;
            }
            setSelectedVideo(file);
            const videoURL = URL.createObjectURL(file);
            setVideoPreview((videoPreview)=>{
                if (videoPreview) URL.revokeObjectURL(videoPreview);
                return videoURL;
            });
        }
    };
    // Function to save post data to database
    const savePostToDatabase = async (postData, status = "posted", errorMessage = null)=>{
        try {
            const userId = (0,utils_connectionStatus/* getCurrentUserId */.rc)();
            if (!userId) {
                console.warn("No user ID found, skipping database save");
                return;
            }
            // Get user email from UserContext
            const userEmail = user?.email || "unknown@example.com";
            const dbPayload = {
                user_id: parseInt(userId),
                user_email: userEmail,
                title: postData.title || "",
                description: postData.description || "",
                link: postData.link || "",
                privacy_status: postData.privacyStatus || "public",
                video_id: postData.video_id || null,
                video_url: postData.video_url || null,
                thumbnail_url: postData.thumbnail_url || null,
                duration: postData.duration || null,
                view_count: postData.view_count || 0,
                like_count: postData.like_count || 0,
                comment_count: postData.comment_count || 0,
                status: status,
                error_message: errorMessage
            };
            // Use Node backend on port 3001 for database operations
            const nodeBackendUrl = "http://localhost:3001";
            const response = await fetch(`${nodeBackendUrl}/api/data/youtube/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dbPayload)
            });
            const result = await response.json();
            if (result.success) {
                console.log("✅ YouTube post saved to database:", result.data);
            } else {
                console.error("❌ Failed to save YouTube post to database:", result.message);
            }
        } catch (error) {
            console.error("❌ Error saving YouTube post to database:", error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: "",
            text: ""
        });
        try {
            if (!selectedVideo) {
                throw new Error("Video file is required");
            }
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("link", formData.link);
            formDataToSend.append("privacyStatus", formData.privacyStatus);
            formDataToSend.append("video", selectedVideo);
            if (formData.scheduled_time) {
                formDataToSend.append("scheduled_time", formData.scheduled_time);
            }
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            delete headers["Content-Type"]; // Let the browser set the content type for FormData
            const response = await fetch(`${apiBaseUrl}/api/youtube/shorts`, {
                method: "POST",
                headers,
                body: formDataToSend
            });
            const data = await response.json();
            if (data.success) {
                // Save successful post to database
                const postDataForDb = {
                    ...formData,
                    video_id: data.video?.id || null,
                    video_url: data.video?.url || null,
                    thumbnail_url: data.video?.thumbnail_url || null,
                    duration: data.video?.duration || null,
                    view_count: data.video?.view_count || 0,
                    like_count: data.video?.like_count || 0,
                    comment_count: data.video?.comment_count || 0
                };
                await savePostToDatabase(postDataForDb, "posted");
                setMessage({
                    type: "success",
                    text: "YouTube Short created successfully!"
                });
                setFormData({
                    title: "",
                    description: "",
                    link: "",
                    privacyStatus: "public",
                    scheduled_time: ""
                });
                setSelectedVideo(null);
                setVideoPreview(null);
                fetchShorts();
            } else {
                // Save failed post to database
                await savePostToDatabase(formData, "failed", data.error || "Failed to create Short");
                setMessage({
                    type: "error",
                    text: data.error || "Failed to create Short"
                });
            }
        } catch (error) {
            // Save error post to database
            await savePostToDatabase(formData, "failed", error.message || "Network error occurred");
            setMessage({
                type: "error",
                text: error.message || "Network error occurred"
            });
        } finally{
            setLoading(false);
        }
    };
    const handleDeleteClick = (videoId)=>{
        setDeleteConfirmation(videoId);
    };
    const confirmDelete = async ()=>{
        const videoId = deleteConfirmation;
        setDeleteConfirmation(null);
        try {
            const headers = (0,utils_connectionStatus/* createAuthHeaders */.U)();
            const response = await fetch(`${apiBaseUrl}/api/youtube/shorts/${videoId}`, {
                method: "DELETE",
                headers
            });
            const data = await response.json();
            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Short deleted successfully!"
                });
                fetchShorts();
            } else {
                setMessage({
                    type: "error",
                    text: "Failed to delete Short"
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error deleting Short"
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmation(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-4xl mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-top duration-700",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: `flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mr-4 ${connectionStatus.connected ? "bg-gradient-to-br from-red-500 to-red-600" : "bg-gradient-to-br from-gray-400 to-gray-500"}`,
                                            children: connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx(shield_check/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "YouTube Connection"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: `text-sm font-medium ${connectionStatus.connected ? "text-red-600" : "text-gray-500"}`,
                                                    children: connectionStatus.message
                                                }),
                                                rssEnabled && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center mt-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                            className: "w-3 h-3 text-red-500 mr-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-red-600 text-xs",
                                                            children: "Article detection active"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        connectionStatus.connected && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    onClick: ()=>setShowArticles(!showArticles),
                                                    className: `relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${showArticles ? "bg-red-100 text-red-700 shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Articles"
                                                        }),
                                                        newArticleCount > 0 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                                                            children: newArticleCount
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    onClick: toggleRssMonitoring,
                                                    className: `flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${rssEnabled ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                    children: [
                                                        rssEnabled ? /*#__PURE__*/ jsx_runtime.jsx(bell/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }) : /*#__PURE__*/ jsx_runtime.jsx(bell_off/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: rssEnabled ? "Monitoring" : "Monitor"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        connectionStatus.connected ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleDisconnectYouTube,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Disconnecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(log_out/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Disconnect"
                                                ]
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: handleConnectYouTube,
                                            disabled: connecting,
                                            className: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center",
                                            children: connecting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                        className: "w-5 h-5 mr-2 animate-spin"
                                                    }),
                                                    "Connecting..."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(log_in/* default */.Z, {
                                                        className: "w-5 h-5 mr-2"
                                                    }),
                                                    "Connect YouTube Account"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    connectionStatus.connected && showArticles && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in slide-in-from-top duration-300",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                            className: "w-6 h-6 text-red-500 mr-3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: "Article Detection"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Custom RSS Feed URL"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "url",
                                            value: customRssUrl,
                                            onChange: handleCustomRssChange,
                                            placeholder: "https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID (optional)",
                                            className: "w-full px-4 py-2 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: "Leave empty to use default YouTube channel feeds"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between bg-red-50/50 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: `w-3 h-3 rounded-full ${rssEnabled ? "bg-green-400 animate-pulse" : "bg-gray-400"}`
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: rssEnabled ? `Monitoring active - ${rssArticles?.length || 0} articles` : "Monitoring disabled"
                                                })
                                            ]
                                        }),
                                        lastChecked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "Last: ",
                                                new Date(lastChecked).toLocaleTimeString()
                                            ]
                                        })
                                    ]
                                }),
                                rssError && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-red-600 text-sm bg-red-50 rounded-lg p-3",
                                    children: [
                                        "Error: ",
                                        rssError
                                    ]
                                }),
                                rssEnabled && detectedArticles.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-sm font-semibold text-gray-700 mb-4",
                                            children: "Recent Videos"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "space-y-3 max-h-80 overflow-y-auto",
                                            children: detectedArticles.map((article, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white/70 rounded-lg p-4 hover:bg-white transition-colors cursor-pointer border border-red-100 hover:border-red-200",
                                                    onClick: ()=>handleArticleSelect(article),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                            className: "text-sm font-medium text-gray-800 mb-2 line-clamp-2",
                                                            children: article.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-xs text-gray-600 mb-3 line-clamp-3",
                                                            children: article.description
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "No date"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    className: "text-xs text-red-600 hover:text-red-700 px-3 py-1 bg-red-100 rounded-full font-medium",
                                                                    children: "Use for Short"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                }),
                                rssEnabled && detectedArticles.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(rss/* default */.Z, {
                                            className: "w-16 h-16 text-red-300 mx-auto mb-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-gray-700 font-medium mb-2",
                                            children: "No Videos Detected Yet"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-500 text-sm",
                                            children: rssError ? "Check your RSS feed URL and try again." : "Monitoring for new videos from YouTube channels..."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "font-medium",
                                    children: message.text
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 ${!connectionStatus.connected ? "opacity-50 pointer-events-none" : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center mb-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg mr-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(video/* default */.Z, {
                                            className: "w-6 h-6 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent",
                                        children: "Create YouTube Short"
                                    })
                                ]
                            }),
                            message.text && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `mb-6 p-4 rounded-2xl shadow-lg animate-in slide-in-from-top duration-300 ${message.type === "success" ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200" : "bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        message.type === "success" ? /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                                            className: "w-5 h-5 mr-2 flex-shrink-0"
                                        }) : /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                            className: "w-5 h-5 mr-2 flex-shrink-0"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "font-medium",
                                            children: message.text
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                        className: "w-4 h-4 mr-2 text-red-500"
                                                    }),
                                                    "Schedule (Optional)"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "datetime-local",
                                                name: "scheduled_time",
                                                value: formData.scheduled_time,
                                                onChange: handleInputChange,
                                                disabled: !credentialsValid,
                                                className: `w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${credentialsValid ? "border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300" : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                                                min: new Date("2025-08-13T21:52:39+05:30").toISOString().slice(0, 16)
                                            }),
                                            formData.scheduled_time && isScheduledTimeInPast() && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-red-600 text-xs mt-1 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                                        className: "w-4 h-4 mr-1"
                                                    }),
                                                    "Scheduled time must be in the future"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-gray-500 text-xs mt-1",
                                                children: "Leave empty to post immediately. If set, the Short will be scheduled for publishing at the selected time (UTC)."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                    }),
                                                    "Title (Optional)"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                name: "title",
                                                value: formData.title,
                                                onChange: handleInputChange,
                                                disabled: !credentialsValid,
                                                className: `w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${credentialsValid ? "border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300" : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                                                placeholder: credentialsValid ? "Give your Short a title" : "Connect your YouTube account to create Shorts",
                                                maxLength: "100"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                    }),
                                                    "Description (Optional)"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                name: "description",
                                                value: formData.description,
                                                onChange: handleInputChange,
                                                disabled: !credentialsValid,
                                                rows: 3,
                                                className: `w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 resize-none ${credentialsValid ? "border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300" : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                                                placeholder: credentialsValid ? "Tell people what this Short is about" : "Connect your YouTube account to create Shorts",
                                                maxLength: "5000"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                        className: "w-4 h-4 mr-2 text-red-500"
                                                    }),
                                                    "Link (Optional)"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "url",
                                                name: "link",
                                                value: formData.link,
                                                onChange: handleInputChange,
                                                disabled: !credentialsValid,
                                                className: `w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${credentialsValid ? "border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300" : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                                                placeholder: credentialsValid ? "https://example.com" : "Connect your YouTube account first"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-2 h-2 bg-red-500 rounded-full mr-2"
                                                    }),
                                                    "Privacy"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                name: "privacyStatus",
                                                value: formData.privacyStatus,
                                                onChange: handleInputChange,
                                                disabled: !credentialsValid,
                                                className: `w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${credentialsValid ? "border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300" : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                        value: "public",
                                                        children: "Public"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                        value: "unlisted",
                                                        children: "Unlisted"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                        value: "private",
                                                        children: "Private"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(video/* default */.Z, {
                                                        className: "w-4 h-4 mr-2 text-red-500"
                                                    }),
                                                    "Video (Required - Max 50MB)"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "file",
                                                    accept: "video/*",
                                                    onChange: handleVideoChange,
                                                    disabled: !credentialsValid,
                                                    className: `w-full px-5 py-4 border-2 rounded-2xl transition-all duration-300 ${credentialsValid ? "border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-gray-50/50 hover:bg-white hover:border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-500"}`,
                                                    required: credentialsValid
                                                })
                                            }),
                                            videoPreview && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mt-4 animate-in fade-in zoom-in-95 duration-300",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("video", {
                                                            src: videoPreview,
                                                            controls: true,
                                                            className: "max-w-xs h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                className: "w-4 h-4 text-gray-600"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        type: "submit",
                                        disabled: loading || credentialsValid === false,
                                        className: "w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center text-lg",
                                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                                    className: "w-6 h-6 mr-3 animate-spin"
                                                }),
                                                "Uploading..."
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                                    className: "w-6 h-6 mr-3"
                                                }),
                                                "Create YouTube Short"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg mr-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(list/* default */.Z, {
                                            className: "w-5 h-5 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent",
                                        children: "Your YouTube Shorts"
                                    })
                                ]
                            }),
                            loadingShorts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center justify-center py-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                        className: "w-12 h-12 text-red-500 animate-spin mb-4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-gray-500 font-medium",
                                        children: "Loading Shorts..."
                                    })
                                ]
                            }) : shorts.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(video/* default */.Z, {
                                            className: "w-10 h-10 text-gray-400"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-gray-500 text-lg font-medium",
                                        children: "No Shorts found"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-gray-400 text-sm mt-1",
                                        children: "Your YouTube Shorts will appear here"
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "space-y-4",
                                children: shorts.map((short, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-in fade-in slide-in-from-left",
                                        style: {
                                            animationDelay: `${index * 100}ms`
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center text-sm text-gray-500 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                                    className: "w-4 h-4 mr-2"
                                                                }),
                                                                new Date(short.created_at).toLocaleDateString("en-US", {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    hour: "2-digit",
                                                                    minute: "2-digit"
                                                                })
                                                            ]
                                                        }),
                                                        short.title && /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "text-lg font-bold text-gray-900 mb-2",
                                                            children: short.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-gray-700 mb-3 leading-relaxed",
                                                            children: short.description
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center space-x-4",
                                                            children: [
                                                                short.link && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                    href: short.link,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium hover:underline transition-colors duration-200",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(icons_link/* default */.Z, {
                                                                            className: "w-4 h-4 mr-1"
                                                                        }),
                                                                        "View Link"
                                                                    ]
                                                                }),
                                                                short.url && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                    href: short.url,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "inline-flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium hover:underline transition-colors duration-200",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                            className: "w-4 h-4 mr-1"
                                                                        }),
                                                                        "View on YouTube"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex space-x-2 ml-6",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: ()=>handleDeleteClick(short.id),
                                                        className: "p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-70",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(trash_2/* default */.Z, {
                                                            className: "w-5 h-5"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }, short.id))
                            })
                        ]
                    })
                ]
            }),
            deleteConfirmation && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "w-8 h-8 text-red-500"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-bold text-gray-900 mb-2",
                                children: "Delete Short"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 mb-6",
                                children: "Are you sure you want to delete this Short? This action cannot be undone."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex space-x-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: cancelDelete,
                                        className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium",
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: confirmDelete,
                                        className: "flex-1 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 font-medium",
                                        children: "Delete"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: external "recharts"
const external_recharts_namespaceObject = require("recharts");
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(4941);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/activity.js
var activity = __webpack_require__(2297);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-pie.js
var chart_pie = __webpack_require__(2589);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/share-2.js
var share_2 = __webpack_require__(9822);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(7788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.js
var arrow_up = __webpack_require__(2761);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down.js
var arrow_down = __webpack_require__(2767);
;// CONCATENATED MODULE: ./src/components/AnalyticsDashboard.jsx






















const AnalyticsDashboard = ()=>{
    const { user, isAuthenticated, loading: userLoading, isInitialized, logout } = (0,UserContext/* useUser */.a)();
    const [dashboardData, setDashboardData] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [error, setError] = (0,external_react_.useState)("");
    const [selectedTimeRange, setSelectedTimeRange] = (0,external_react_.useState)(30);
    const [refreshing, setRefreshing] = (0,external_react_.useState)(false);
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    // Use consistent environment variable with other components
    const apiBaseUrl = "http://localhost:5000" || 0 || 0;
    const COLORS = {
        instagram: "#E4405F",
        facebook: "#1877F2",
        x: "#1DA1F2",
        reddit: "#FF4500",
        pinterest: "#BD081C",
        youtube: "#FF0000"
    };
    (0,external_react_.useEffect)(()=>{
        setIsVisible(true);
        // Only fetch data when UserContext is fully initialized and user is authenticated
        if (isInitialized && !userLoading) {
            if (isAuthenticated()) {
                fetchDashboardData();
            } else {
                setLoading(false);
                setError("Please login to view analytics dashboard.");
            }
        }
    }, [
        selectedTimeRange,
        isAuthenticated,
        userLoading,
        isInitialized
    ]);
    const fetchDashboardData = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Check if user is authenticated through context
            if (!isAuthenticated()) {
                setError("Please login to view analytics dashboard.");
                setLoading(false);
                return;
            }
            const token = localStorage.getItem("access_token");
            console.log("Dashboard fetch - Token found:", token ? "Yes" : "No");
            if (!token) {
                console.log("No token found, logging out user");
                logout();
                setError("Authentication failed. Please login again.");
                setLoading(false);
                return;
            }
            // Validate token format
            try {
                const tokenPayload = JSON.parse(atob(token.split(".")[1]));
                const currentTime = Date.now() / 1000;
                if (tokenPayload.exp <= currentTime) {
                    console.log("Token expired, logging out user");
                    logout();
                    setError("Session expired. Please login again.");
                    setLoading(false);
                    return;
                }
                console.log("Token is valid, expires at:", new Date(tokenPayload.exp * 1000));
            } catch (tokenError) {
                console.error("Invalid token format:", tokenError);
                logout();
                setError("Invalid authentication. Please login again.");
                setLoading(false);
                return;
            }
            // First test the analytics auth endpoint
            console.log("Testing analytics authentication...");
            const authTestResponse = await fetch(`${apiBaseUrl}/api/analytics/test-auth`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            console.log("Analytics auth test response status:", authTestResponse.status);
            if (!authTestResponse.ok) {
                const authError = await authTestResponse.json().catch(()=>({
                        error: "Auth test failed"
                    }));
                console.error("Analytics auth test failed:", authError);
                if (authTestResponse.status === 401) {
                    logout();
                    setError("Authentication failed. Please login again.");
                    return;
                }
            } else {
                const authData = await authTestResponse.json();
                console.log("Analytics auth test successful:", authData);
            }
            console.log("Making dashboard API request to:", `${apiBaseUrl}/api/analytics/dashboard?include_user_data=true`);
            const response = await fetch(`${apiBaseUrl}/api/analytics/dashboard?include_user_data=true`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            console.log("Dashboard API response status:", response.status);
            if (!response.ok) {
                if (response.status === 401) {
                    console.log("401 error - token invalid on server, logging out");
                    logout();
                    setError("Session expired. Please login again.");
                    return;
                }
                const errorData = await response.json().catch(()=>({
                        error: "Unknown error"
                    }));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.success) {
                setDashboardData(data.data);
                setError("");
            } else {
                setError(data.error || "Failed to fetch analytics data");
            }
        } catch (err) {
            console.error("Analytics fetch error:", err);
            setError(err.message || "Network error occurred");
        } finally{
            setLoading(false);
            setRefreshing(false);
        }
    };
    const handleRefresh = ()=>{
        setRefreshing(true);
        fetchDashboardData();
    };
    const formatPlatformData = (platformStats)=>{
        if (!platformStats) return [];
        return Object.entries(platformStats).map(([platform, stats])=>({
                name: platform.charAt(0).toUpperCase() + platform.slice(1),
                posts: stats.total_posts,
                users: stats.unique_users,
                successRate: stats.success_rate,
                percentage: stats.usage_percentage,
                color: COLORS[platform] || "#8884d8"
            }));
    };
    const formatTrendData = (dailyTrends)=>{
        if (!dailyTrends) return [];
        const dates = new Set();
        Object.values(dailyTrends).forEach((platformData)=>{
            platformData.forEach((item)=>dates.add(item.date));
        });
        return Array.from(dates).sort().map((date)=>{
            const dataPoint = {
                date
            };
            Object.entries(dailyTrends).forEach(([platform, platformData])=>{
                const dayData = platformData.find((item)=>item.date === date);
                dataPoint[platform] = dayData ? dayData.posts : 0;
            });
            return dataPoint;
        });
    };
    // Show loading state while user context is loading or initializing
    if (userLoading || !isInitialized) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-300 text-lg",
                        children: "Loading user data..."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                            className: "w-6 h-6 text-blue-400 mx-auto animate-pulse"
                        })
                    })
                ]
            })
        });
    }
    // Show login prompt if not authenticated
    if (!isAuthenticated()) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center max-w-md mx-auto p-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/25",
                        children: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                            className: "w-10 h-10 text-white"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-3xl font-black text-white mb-4",
                        children: "Analytics Dashboard"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-300 mb-8 leading-relaxed",
                        children: "Please login to view your social media analytics and insights."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/login",
                                className: "block w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105",
                                children: "Login to Continue"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/register",
                                className: "block w-full px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105",
                                children: "Create Account"
                            })
                        ]
                    })
                ]
            })
        });
    }
    if (loading) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-300 text-lg",
                        children: "Loading analytics data..."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-4 flex justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                style: {
                                    animationDelay: "0.1s"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-2 h-2 bg-pink-400 rounded-full animate-bounce",
                                style: {
                                    animationDelay: "0.2s"
                                }
                            })
                        ]
                    })
                ]
            })
        });
    }
    if (error) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center max-w-md mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-red-500/10 backdrop-blur-lg border border-red-500/20 text-red-300 px-6 py-4 rounded-2xl mb-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "font-bold text-lg mb-2",
                                children: "Error"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: error
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        onClick: fetchDashboardData,
                        className: "px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(refresh_cw/* default */.Z, {
                                className: "w-5 h-5 mr-2"
                            }),
                            "Retry"
                        ]
                    })
                ]
            })
        });
    }
    const platformData = formatPlatformData(dashboardData?.platform_usage?.platform_statistics);
    const trendData = formatTrendData(dashboardData?.temporal_trends?.daily_trends);
    const userEngagement = dashboardData?.user_engagement;
    const userActivity = dashboardData?.user_activity;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-7xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `flex justify-between items-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-4 border border-blue-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "Analytics Dashboard"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "text-4xl md:text-5xl font-black text-white mb-4",
                                    children: [
                                        "Your social media",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block",
                                            children: "insights"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-300",
                                    children: "Comprehensive analytics and performance metrics"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                    value: selectedTimeRange,
                                    onChange: (e)=>setSelectedTimeRange(Number(e.target.value)),
                                    className: "bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: 7,
                                            children: "Last 7 days"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: 30,
                                            children: "Last 30 days"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                            value: 90,
                                            children: "Last 90 days"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    onClick: handleRefresh,
                                    disabled: refreshing,
                                    className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(refresh_cw/* default */.Z, {
                                            className: `w-5 h-5 mr-2 ${refreshing ? "animate-spin" : ""}`
                                        }),
                                        "Refresh"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                    children: [
                        {
                            icon: /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                                className: "w-8 h-8"
                            }),
                            title: "Total Users",
                            value: userEngagement?.total_registered_users || 0,
                            gradient: "from-blue-500 to-cyan-500",
                            bgGradient: "from-blue-500/20 to-cyan-500/20"
                        },
                        {
                            icon: /*#__PURE__*/ jsx_runtime.jsx(activity/* default */.Z, {
                                className: "w-8 h-8"
                            }),
                            title: "Active Users",
                            value: userEngagement?.active_users || 0,
                            gradient: "from-green-500 to-emerald-500",
                            bgGradient: "from-green-500/20 to-emerald-500/20"
                        },
                        {
                            icon: /*#__PURE__*/ jsx_runtime.jsx(share_2/* default */.Z, {
                                className: "w-8 h-8"
                            }),
                            title: "Total Posts",
                            value: dashboardData?.platform_usage?.total_posts_across_platforms || 0,
                            gradient: "from-purple-500 to-pink-500",
                            bgGradient: "from-purple-500/20 to-pink-500/20"
                        },
                        {
                            icon: /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                                className: "w-8 h-8"
                            }),
                            title: "Activation Rate",
                            value: `${userEngagement?.activation_rate || 0}%`,
                            gradient: "from-orange-500 to-red-500",
                            bgGradient: "from-orange-500/20 to-red-500/20"
                        }
                    ].map((metric, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `bg-gradient-to-br ${metric.bgGradient} backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`,
                            style: {
                                animationDelay: `${index * 0.1}s`
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `p-4 bg-gradient-to-r ${metric.gradient} rounded-2xl shadow-lg`,
                                        children: metric.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-3xl md:text-4xl font-black text-white mb-1",
                                                children: metric.value
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-gray-300 font-medium",
                                                children: metric.title
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                    className: "text-2xl font-bold text-white mb-6 flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chart_pie/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        }),
                                        "Platform Distribution"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-black/20 rounded-2xl p-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                        width: "100%",
                                        height: 300,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.PieChart, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Pie, {
                                                    data: platformData,
                                                    cx: "50%",
                                                    cy: "50%",
                                                    labelLine: false,
                                                    label: ({ name, percentage })=>`${name}: ${percentage}%`,
                                                    outerRadius: 80,
                                                    fill: "#8884d8",
                                                    dataKey: "posts",
                                                    children: platformData.map((entry, index)=>/*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Cell, {
                                                            fill: entry.color
                                                        }, `cell-${index}`))
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {
                                                    contentStyle: {
                                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                                        borderRadius: "12px",
                                                        color: "white"
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                    className: "text-2xl font-bold text-white mb-6 flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        }),
                                        "Posts by Platform"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-black/20 rounded-2xl p-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                        width: "100%",
                                        height: 300,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.BarChart, {
                                            data: platformData,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                    strokeDasharray: "3 3",
                                                    stroke: "rgba(255,255,255,0.1)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                    dataKey: "name",
                                                    tick: {
                                                        fill: "#9CA3AF",
                                                        fontSize: 12
                                                    },
                                                    axisLine: {
                                                        stroke: "rgba(255,255,255,0.1)"
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {
                                                    tick: {
                                                        fill: "#9CA3AF",
                                                        fontSize: 12
                                                    },
                                                    axisLine: {
                                                        stroke: "rgba(255,255,255,0.1)"
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {
                                                    contentStyle: {
                                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                                        borderRadius: "12px",
                                                        color: "white"
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Bar, {
                                                    dataKey: "posts",
                                                    fill: "#8884d8",
                                                    radius: [
                                                        4,
                                                        4,
                                                        0,
                                                        0
                                                    ],
                                                    children: platformData.map((entry, index)=>/*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Cell, {
                                                            fill: entry.color
                                                        }, `cell-${index}`))
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/10 hover:border-white/20 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                            className: "text-3xl font-black text-white mb-3 flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl mr-4 shadow-2xl shadow-blue-500/25",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                                                        className: "w-8 h-8 text-white"
                                                    })
                                                }),
                                                "Platform Activity Trends"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-300 text-lg",
                                            children: "Track your social media engagement across all platforms"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center space-x-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg",
                                        children: [
                                            "Last ",
                                            selectedTimeRange,
                                            " days"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "relative bg-black/20 rounded-2xl p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                    width: "100%",
                                    height: 450,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.AreaChart, {
                                        data: trendData,
                                        margin: {
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                                children: Object.entries(COLORS).map(([platform, color])=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                                                        id: `gradient-${platform}`,
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: "1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                                                offset: "5%",
                                                                stopColor: color,
                                                                stopOpacity: 0.4
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                                                offset: "95%",
                                                                stopColor: color,
                                                                stopOpacity: 0.1
                                                            })
                                                        ]
                                                    }, platform))
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                strokeDasharray: "3 3",
                                                stroke: "rgba(255,255,255,0.1)",
                                                strokeWidth: 1
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                dataKey: "date",
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fontSize: 12,
                                                    fill: "#9CA3AF"
                                                },
                                                dy: 10
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fontSize: 12,
                                                    fill: "#9CA3AF"
                                                },
                                                dx: -10
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {
                                                contentStyle: {
                                                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                                    borderRadius: "12px",
                                                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                                                    padding: "12px 16px",
                                                    color: "white"
                                                },
                                                labelStyle: {
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                    marginBottom: "8px"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Legend, {
                                                wrapperStyle: {
                                                    paddingTop: "20px"
                                                },
                                                iconType: "circle",
                                                formatter: (value)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        style: {
                                                            color: "#fff",
                                                            fontWeight: "500",
                                                            textTransform: "capitalize"
                                                        },
                                                        children: value
                                                    })
                                            }),
                                            Object.keys(COLORS).map((platform)=>/*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Area, {
                                                    type: "monotone",
                                                    dataKey: platform,
                                                    stroke: COLORS[platform],
                                                    strokeWidth: 3,
                                                    fill: `url(#gradient-${platform})`,
                                                    dot: {
                                                        fill: COLORS[platform],
                                                        strokeWidth: 2,
                                                        r: 4
                                                    },
                                                    activeDot: {
                                                        r: 6,
                                                        stroke: COLORS[platform],
                                                        strokeWidth: 2,
                                                        fill: "#000",
                                                        boxShadow: `0 0 10px ${COLORS[platform]}40`
                                                    }
                                                }, platform))
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "absolute top-6 right-6 flex flex-col space-y-3",
                                    children: Object.entries(COLORS).slice(0, 3).map(([platform, color])=>{
                                        const currentData = trendData[trendData.length - 1];
                                        const previousData = trendData[trendData.length - 2];
                                        const current = currentData?.[platform] || 0;
                                        const previous = previousData?.[platform] || 0;
                                        const trend = current > previous ? "up" : current < previous ? "down" : "stable";
                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-3 h-3 rounded-full shadow-lg",
                                                    style: {
                                                        backgroundColor: color
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm font-bold text-white capitalize",
                                                    children: platform
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: `p-1 rounded-full ${trend === "up" ? "bg-green-500/20 text-green-300" : trend === "down" ? "bg-red-500/20 text-red-300" : "bg-gray-500/20 text-gray-300"}`,
                                                    children: trend === "up" ? /*#__PURE__*/ jsx_runtime.jsx(arrow_up/* default */.Z, {
                                                        className: "w-3 h-3"
                                                    }) : trend === "down" ? /*#__PURE__*/ jsx_runtime.jsx(arrow_down/* default */.Z, {
                                                        className: "w-3 h-3"
                                                    }) : /*#__PURE__*/ jsx_runtime.jsx(minus/* default */.Z, {
                                                        className: "w-3 h-3"
                                                    })
                                                })
                                            ]
                                        }, platform);
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-6",
                            children: Object.entries(COLORS).map(([platform, color])=>{
                                const totalActivity = trendData.reduce((sum, day)=>sum + (day[platform] || 0), 0);
                                const avgActivity = Math.round(totalActivity / trendData.length);
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-4 h-4 rounded-full shadow-lg",
                                                    style: {
                                                        backgroundColor: color
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-lg font-bold text-white capitalize",
                                                    children: platform
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-3xl font-black text-white mb-2",
                                            children: totalActivity
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                "Avg: ",
                                                avgActivity,
                                                "/day"
                                            ]
                                        })
                                    ]
                                }, platform);
                            })
                        })
                    ]
                }),
                userActivity && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/10 hover:border-white/20 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            className: "text-2xl font-bold text-white mb-8 flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(activity/* default */.Z, {
                                        className: "w-6 h-6"
                                    })
                                }),
                                "Your Activity Summary"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2",
                                            children: userActivity.total_posts_across_platforms
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-300 font-medium",
                                            children: "Total Posts"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",
                                            children: userActivity.user_statistics?.platforms_used || 0
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-300 font-medium",
                                            children: "Platforms Used"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/20",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2",
                                            children: [
                                                userActivity.user_statistics?.avg_success_rate || 0,
                                                "%"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-gray-300 font-medium",
                                            children: "Success Rate"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            className: "text-2xl font-bold text-white mb-8 flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mr-4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                                        className: "w-6 h-6"
                                    })
                                }),
                                "User Engagement Levels"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                            children: userEngagement?.engagement_levels && Object.entries(userEngagement.engagement_levels).map(([level, count], index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                                                className: "w-6 h-6 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-3xl font-black text-white mb-2",
                                            children: count
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "text-sm text-gray-300 font-medium capitalize",
                                            children: [
                                                level.replace("_", " "),
                                                " Users"
                                            ]
                                        })
                                    ]
                                }, level))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mt-16 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-3xl font-black text-white mb-4",
                                children: "Want more detailed insights?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-300 text-lg mb-8",
                                children: "Upgrade to Premium for advanced analytics and AI-powered recommendations"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                        className: "w-5 h-5 mr-2"
                                    }),
                                    "Upgrade Now"
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_AnalyticsDashboard = (AnalyticsDashboard);

// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(1572);
// EXTERNAL MODULE: ./src/components/Footer.jsx
var Footer = __webpack_require__(7623);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bot.js
var bot = __webpack_require__(4795);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(5582);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(8302);
;// CONCATENATED MODULE: ./src/components/AIChatbot.jsx














const AIChatbot = ({ onFormFill, onPostSubmit })=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [messages, setMessages] = (0,external_react_.useState)([]);
    const [inputValue, setInputValue] = (0,external_react_.useState)("");
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [currentStep, setCurrentStep] = (0,external_react_.useState)("platform_selection");
    const [selectedPlatform, setSelectedPlatform] = (0,external_react_.useState)(null);
    const [selectedXForm, setSelectedXForm] = (0,external_react_.useState)(null);
    const [formData, setFormData] = (0,external_react_.useState)({});
    const messagesEndRef = (0,external_react_.useRef)(null);
    const platforms = [
        {
            id: "instagram",
            name: "Instagram",
            icon: "\uD83D\uDCF7"
        },
        {
            id: "facebook",
            name: "Facebook",
            icon: "\uD83D\uDCDA"
        },
        {
            id: "x",
            name: "X (Twitter)",
            icon: "\uD835\uDD4F"
        },
        {
            id: "reddit",
            name: "Reddit",
            icon: "\uD83D\uDD34"
        },
        {
            id: "pinterest",
            name: "Pinterest",
            icon: "\uD83D\uDCCC"
        },
        {
            id: "youtube",
            name: "YouTube Shorts",
            icon: "\uD83D\uDCFA"
        }
    ];
    const xFormTypes = [
        {
            id: "compose",
            name: "Create a Post",
            description: "Create a single tweet"
        },
        {
            id: "threads",
            name: "Create a Thread",
            description: "Create a thread of connected tweets"
        },
        {
            id: "schedule",
            name: "Schedule a Post",
            description: "Schedule a tweet for later"
        }
    ];
    // Gemini API key from environment or fallback
    const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyBJYuCpi86B7fnquLReShxjwcwMERvXPbc";
    (0,external_react_.useEffect)(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const addMessage = (content, isBot = true, isOptions = false, options = null)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    content,
                    isBot,
                    timestamp: new Date(),
                    isOptions,
                    options
                }
            ]);
    };
    const handleOpen = ()=>{
        setIsOpen(true);
        if (messages.length === 0) {
            addMessage("\uD83D\uDC4B Hi! I'm your AI assistant for social media posting. Which platform would you like to create a post for?", true, true, platforms);
        }
    };
    const handleClose = ()=>{
        setIsOpen(false);
    };
    const handleReset = ()=>{
        setMessages([]);
        setCurrentStep("platform_selection");
        setSelectedPlatform(null);
        setSelectedXForm(null);
        setFormData({});
        addMessage("\uD83D\uDC4B Hi! I'm your AI assistant for social media posting. Which platform would you like to create a post for?", true, true, platforms);
    };
    const handleOptionSelect = (option)=>{
        if (currentStep === "platform_selection") {
            setSelectedPlatform(option);
            addMessage(`${option.icon} ${option.name}`, false);
            if (option.id === "x") {
                setCurrentStep("x_form_selection");
                addMessage("Great! X has multiple posting options. What would you like to do?", true, true, xFormTypes);
            } else {
                setCurrentStep("content_generation");
                startContentGeneration(option.id);
            }
        } else if (currentStep === "x_form_selection") {
            setSelectedXForm(option);
            addMessage(`${option.name}`, false);
            setCurrentStep("content_generation");
            startContentGeneration("x", option.id);
        } else if (currentStep === "confirmation") {
            if (option.action === "post") {
                addMessage("Post Now", false);
                addMessage("\uD83D\uDE80 Perfect! Posting your content now...");
                if (onPostSubmit) {
                    onPostSubmit(selectedPlatform.id, selectedXForm?.id);
                }
                // Reset after posting
                setTimeout(()=>{
                    handleReset();
                }, 2000);
            } else if (option.action === "regenerate") {
                addMessage("Generate New Content", false);
                setCurrentStep("content_generation");
                startContentGeneration(selectedPlatform.id, selectedXForm?.id);
            } else if (option.action === "reset") {
                addMessage("Start Over", false);
                handleReset();
            }
        }
    };
    const startContentGeneration = async (platformId, xFormType = null)=>{
        addMessage("Perfect! Let me generate some engaging content for your post. What topic or theme would you like me to focus on?");
        setCurrentStep("awaiting_topic");
    };
    const generateContent = async (topic)=>{
        try {
            setIsLoading(true);
            // Check if Gemini API key is available
            if (!GEMINI_API_KEY || GEMINI_API_KEY.trim() === "") {
                addMessage("❌ Gemini API key is not configured. Please add your API key to the environment file.");
                return;
            }
            console.log("Using Gemini API for content generation...");
            let data;
            let isFromAPI = false;
            try {
                data = await generateWithGemini(topic);
                isFromAPI = true;
                console.log("✅ Successfully generated content using Gemini API");
            } catch (error) {
                console.error("❌ Gemini API failed:", error);
                addMessage(`❌ Failed to generate content using Gemini API: ${error.message}. Please check your API key and try again.`);
                // Only use fallback as absolute last resort
                console.log("Using fallback test data as last resort...");
                data = generateTestData(topic);
                isFromAPI = false;
            }
            setFormData(data);
            fillFormWithData(data);
            const sourceMessage = isFromAPI ? `✨ Great! I've generated AI-powered content for your ${selectedPlatform.name} post${selectedXForm ? ` (${selectedXForm.name})` : ""} using Gemini API.` : `⚠️ Using fallback content for your ${selectedPlatform.name} post${selectedXForm ? ` (${selectedXForm.name})` : ""} since API failed.`;
            addMessage(`${sourceMessage} The form has been filled automatically. Would you like to post it now or generate new content?`, true, true, [
                {
                    id: "post",
                    name: "Post Now",
                    action: "post"
                },
                {
                    id: "regenerate",
                    name: "Generate New Content",
                    action: "regenerate"
                },
                {
                    id: "reset",
                    name: "Start Over",
                    action: "reset"
                }
            ]);
            setCurrentStep("confirmation");
        } catch (error) {
            console.error("Content generation failed:", error);
            addMessage("❌ Sorry, I encountered an error generating content. Please try again or start over.");
        } finally{
            setIsLoading(false);
        }
    };
    const generateWithGemini = async (topic)=>{
        const platform = selectedPlatform.id;
        const formType = selectedXForm?.id;
        let prompt = `Generate engaging social media content for ${platform}`;
        if (formType) prompt += ` (${formType})`;
        prompt += ` about "${topic}". `;
        // Platform-specific prompts
        switch(platform){
            case "x":
                if (formType === "threads") {
                    prompt += "Create 3-5 connected tweets for a thread. Each tweet should be under 280 characters. Return ONLY the plain text tweets separated by line breaks, no labels, no formatting, no explanations.";
                } else {
                    prompt += "Create ONE engaging tweet under 280 characters with relevant hashtags. Return ONLY the plain tweet text, no labels, no formatting, no explanations.";
                }
                break;
            case "instagram":
                prompt += "Create ONE engaging Instagram caption with relevant hashtags. Return ONLY the plain caption text, no labels like **Caption:**, no formatting, no explanations.";
                break;
            case "facebook":
                prompt += "Create ONE engaging Facebook post with text content. Return ONLY the plain post text, no labels like **Text:**, no formatting, no explanations, no image suggestions.";
                break;
            case "tiktok":
                prompt += "Create ONE engaging TikTok caption with trending hashtags. Return ONLY the plain caption text, no labels like **Caption:**, no formatting, no explanations.";
                break;
            case "reddit":
                prompt += "Create ONE Reddit post. Return the title on first line and content on following lines, no labels like **Title:** or **Content:**, no formatting, no explanations.";
                break;
            case "pinterest":
                prompt += "Create ONE Pinterest pin. Return the title on first line and description on second line, no labels like **Title:** or **Description:**, no formatting, no explanations.";
                break;
            case "youtube":
                prompt += "Create ONE YouTube Shorts video content. Return the title on first line and description on following lines, no labels like **Title:** or **Description:**, no formatting, no explanations.";
                break;
        }
        console.log("Making Gemini API request with prompt:", prompt);
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 500
                }
            })
        });
        console.log("Gemini API response status:", response.status);
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API error response:", errorData);
            throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || "Unknown error"}`);
        }
        const data = await response.json();
        console.log("Gemini API response data:", data);
        // Validate response structure
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
            console.error("Invalid Gemini API response structure:", data);
            throw new Error("Invalid response structure from Gemini API");
        }
        const content = data.candidates[0].content.parts[0].text;
        if (!content || content.trim() === "") {
            throw new Error("Empty content received from Gemini API");
        }
        console.log("Generated content from Gemini:", content);
        return parseGeminiResponse(content, platform, formType);
    };
    const parseGeminiResponse = (content, platform, formType)=>{
        // Parse Gemini response based on platform
        const lines = content.split("\n").filter((line)=>line.trim());
        switch(platform){
            case "x":
                if (formType === "threads") {
                    return {
                        threadTweets: lines.slice(0, 5),
                        hashtags: extractHashtags(content)
                    };
                } else if (formType === "schedule") {
                    return {
                        text: lines[0] || content.substring(0, 280),
                        hashtags: extractHashtags(content),
                        scheduled_time: getDefaultScheduleTime()
                    };
                } else {
                    return {
                        text: lines[0] || content.substring(0, 280),
                        hashtags: extractHashtags(content)
                    };
                }
            case "instagram":
                return {
                    caption: content
                };
            case "facebook":
                return {
                    message: content,
                    link: "",
                    scheduled_time: ""
                };
            case "tiktok":
                return {
                    caption: content.substring(0, 150),
                    hashtags: extractHashtags(content),
                    privacy_level: 2
                };
            case "reddit":
                return {
                    subreddit_name: "general",
                    title: lines[0] || "Interesting Topic",
                    content: lines.slice(1).join("\n") || content,
                    is_spoiler: false,
                    nsfw: false
                };
            case "pinterest":
                return {
                    board_id: "",
                    title: lines[0] || "Amazing Pin",
                    description: content,
                    link: ""
                };
            case "youtube":
                return {
                    title: lines[0] || "Amazing YouTube Short",
                    description: lines.slice(1).join("\n") || content,
                    link: "",
                    privacyStatus: "public"
                };
            default:
                return {};
        }
    };
    const generateTestData = (topic)=>{
        const platform = selectedPlatform.id;
        const formType = selectedXForm?.id;
        switch(platform){
            case "x":
                if (formType === "threads") {
                    return {
                        threadTweets: [
                            `🧵 Let's talk about ${topic}! Here's what you need to know... 1/3`,
                            `The key insights about ${topic} that everyone should understand... 2/3`,
                            `In conclusion, ${topic} is definitely worth exploring further! What are your thoughts? 3/3 #${topic.replace(/\s+/g, "")}`
                        ],
                        hashtags: `#${topic.replace(/\s+/g, "")} #trending #discussion`
                    };
                } else if (formType === "schedule") {
                    return {
                        text: `Excited to share insights about ${topic}! 🚀 #${topic.replace(/\s+/g, "")} #trending`,
                        hashtags: `#${topic.replace(/\s+/g, "")} #trending #scheduled`,
                        scheduled_time: getDefaultScheduleTime()
                    };
                } else {
                    return {
                        text: `Just discovered something amazing about ${topic}! 🔥 #${topic.replace(/\s+/g, "")} #trending`,
                        hashtags: `#${topic.replace(/\s+/g, "")} #trending #amazing`
                    };
                }
            case "instagram":
                return {
                    caption: `✨ Exploring the world of ${topic} today! 📸\n\nThere's so much to discover and share. What's your experience with ${topic}?\n\n#${topic.replace(/\s+/g, "")} #instagram #explore #amazing #daily #inspiration`
                };
            case "facebook":
                return {
                    message: `Hey everyone! 👋\n\nI wanted to share some thoughts about ${topic}. It's fascinating how much there is to learn and explore in this area.\n\nWhat are your experiences with ${topic}? I'd love to hear your thoughts in the comments!`,
                    link: "",
                    scheduled_time: ""
                };
            case "tiktok":
                return {
                    caption: `Amazing ${topic} content coming your way! 🎵✨`,
                    hashtags: `#${topic.replace(/\s+/g, "")} #trending #fyp #viral #amazing`,
                    privacy_level: 2
                };
            case "reddit":
                return {
                    subreddit_name: "discussion",
                    title: `What are your thoughts on ${topic}?`,
                    content: `I've been exploring ${topic} lately and found it really interesting. There are so many different perspectives and approaches to consider.\n\nWhat has been your experience with ${topic}? Any tips or insights you'd like to share?\n\nLooking forward to hearing from the community!`,
                    is_spoiler: false,
                    nsfw: false
                };
            case "pinterest":
                return {
                    board_id: "",
                    title: `Amazing ${topic} Ideas`,
                    description: `Discover incredible ${topic} inspiration and ideas! Perfect for anyone interested in exploring ${topic} and finding new creative approaches.`,
                    link: ""
                };
            case "youtube":
                return {
                    title: `Amazing ${topic} Content!`,
                    description: `Check out this incredible ${topic} content! 🎥✨\n\nDiscover amazing insights and tips about ${topic}. Perfect for anyone looking to learn more!\n\n#${topic.replace(/\s+/g, "")} #YouTubeShorts #Amazing #Trending`,
                    link: "",
                    privacyStatus: "public"
                };
            default:
                return {};
        }
    };
    const extractHashtags = (content)=>{
        const hashtags = content.match(/#\w+/g);
        return hashtags ? hashtags.join(" ") : `#${selectedPlatform.name.toLowerCase()}`;
    };
    const getDefaultScheduleTime = ()=>{
        const now = new Date();
        now.setHours(now.getHours() + 1);
        return now.toISOString().slice(0, 16);
    };
    const fillFormWithData = (data)=>{
        console.log("AIChatbot: Filling form with data:", data);
        setFormData(data);
        if (onFormFill) {
            console.log("AIChatbot: Calling onFormFill callback");
            onFormFill(selectedPlatform.id, selectedXForm?.id, data);
            // Add a success message after form filling
            setTimeout(()=>{
                addMessage("✅ Great! I've generated and filled the form with engaging content. Please review the form and let me know if you'd like me to post it!", true, true, [
                    {
                        id: "post",
                        name: "Post Now",
                        action: "post"
                    },
                    {
                        id: "regenerate",
                        name: "Generate New Content",
                        action: "regenerate"
                    },
                    {
                        id: "reset",
                        name: "Start Over",
                        action: "reset"
                    }
                ]);
                setCurrentStep("confirmation");
            }, 2000); // Wait for form filling to complete
        } else {
            console.error("AIChatbot: onFormFill callback not provided");
            addMessage("❌ Sorry, there was an issue filling the form. Please try again.");
        }
    };
    const handleSendMessage = async ()=>{
        if (!inputValue.trim() || isLoading) return;
        const userMessage = inputValue.trim();
        setInputValue("");
        addMessage(userMessage, false);
        if (currentStep === "awaiting_topic") {
            await generateContent(userMessage);
        } else if (currentStep === "confirmation") {
            if (userMessage.toLowerCase().includes("yes") || userMessage.toLowerCase().includes("post")) {
                addMessage("\uD83D\uDE80 Perfect! Posting your content now...");
                if (onPostSubmit) {
                    onPostSubmit(selectedPlatform.id, selectedXForm?.id);
                }
                setTimeout(()=>{
                    addMessage("✅ Your post has been submitted successfully! Would you like to create another post?", true, true, [
                        {
                            id: "new",
                            name: "Create New Post",
                            action: "reset"
                        },
                        {
                            id: "done",
                            name: "Done",
                            action: "close"
                        }
                    ]);
                }, 2000);
            } else {
                addMessage("No problem! Feel free to edit the form manually, or tell me what you'd like me to change about the content.");
            }
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
            onClick: handleOpen,
            className: "fixed bottom-6 right-6 group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-5 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-500 z-50 border border-blue-400/20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(message_circle/* default */.Z, {
                            className: "w-7 h-7"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "fixed bottom-6 right-6 w-96 h-[600px] bg-black/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-500/20 flex flex-col z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(bot/* default */.Z, {
                                        className: "w-6 h-6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-bold text-lg",
                                        children: "AI Social Assistant"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-xs text-blue-100 opacity-80",
                                        children: "Powered by Gemini AI"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: handleReset,
                                className: "p-2 hover:bg-white/20 rounded-xl transition-all duration-300 group",
                                title: "New Conversation",
                                children: /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                                    className: "w-5 h-5 group-hover:rotate-12 transition-transform"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: handleClose,
                                className: "p-2 hover:bg-white/20 rounded-xl transition-all duration-300 group",
                                children: /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                    className: "w-5 h-5 group-hover:rotate-90 transition-transform"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg -z-10"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent",
                children: [
                    messages.map((message)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `flex ${message.isBot ? "justify-start" : "justify-end"}`,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `max-w-[85%] p-4 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] ${message.isBot ? "bg-white/10 text-white border border-white/20 shadow-lg" : "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white shadow-lg border border-blue-400/30"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-start space-x-3",
                                    children: [
                                        message.isBot && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "bg-gradient-to-r from-blue-400 to-purple-400 p-1.5 rounded-xl flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(bot/* default */.Z, {
                                                className: "w-4 h-4 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-sm leading-relaxed",
                                                    children: message.content
                                                }),
                                                message.isOptions && message.options && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mt-4 space-y-2",
                                                    children: message.options.map((option, index)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            onClick: ()=>{
                                                                if (option.action === "reset") {
                                                                    handleReset();
                                                                } else if (option.action === "close") {
                                                                    handleClose();
                                                                } else {
                                                                    handleOptionSelect(option);
                                                                }
                                                            },
                                                            className: "w-full text-left p-3 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 text-white text-sm group transform hover:scale-[1.02]",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-xs font-bold",
                                                                        children: index + 1
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-center space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        children: option.icon && `${option.icon} `
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: "font-medium group-hover:text-blue-300 transition-colors",
                                                                                        children: option.name
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            option.description && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                className: "text-xs text-gray-300 mt-1",
                                                                                children: option.description
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }, option.id))
                                                })
                                            ]
                                        }),
                                        !message.isBot && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "bg-gradient-to-r from-purple-400 to-pink-400 p-1.5 rounded-xl flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                className: "w-4 h-4 text-white"
                                            })
                                        })
                                    ]
                                })
                            })
                        }, message.id)),
                    isLoading && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex justify-start",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "bg-white/10 backdrop-blur-lg text-white p-4 rounded-2xl border border-white/20 shadow-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-gradient-to-r from-blue-400 to-purple-400 p-1.5 rounded-xl",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(bot/* default */.Z, {
                                            className: "w-4 h-4 text-white"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                        className: "w-5 h-5 animate-spin text-blue-400"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "text-sm",
                                        children: "Generating content..."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        ref: messagesEndRef
                    })
                ]
            }),
            (currentStep === "awaiting_topic" || currentStep === "confirmation") && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative p-5 bg-black/50 backdrop-blur-lg border-t border-white/10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "text",
                                value: inputValue,
                                onChange: (e)=>setInputValue(e.target.value),
                                onKeyPress: handleKeyPress,
                                placeholder: currentStep === "awaiting_topic" ? "Enter your topic..." : "Type your response...",
                                className: "flex-1 p-3 bg-white/10 backdrop-blur-lg text-white placeholder-gray-300 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300",
                                disabled: isLoading
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: handleSendMessage,
                                disabled: !inputValue.trim() || isLoading,
                                className: "p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 group",
                                children: /*#__PURE__*/ jsx_runtime.jsx(send/* default */.Z, {
                                    className: "w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl -z-10"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AIChatbot = (AIChatbot);

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(2705);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.js
var play = __webpack_require__(2090);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(4710);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-square.js
var message_square = __webpack_require__(7433);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/smartphone.js
var smartphone = __webpack_require__(9348);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/monitor.js
var monitor = __webpack_require__(8234);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/tablet.js
var tablet = __webpack_require__(390);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(3424);
;// CONCATENATED MODULE: ./src/components/LandingPage.jsx






























const ModernLandingPage = ()=>{
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    const [currentTestimonial, setCurrentTestimonial] = (0,external_react_.useState)(0);
    const [scrollY, setScrollY] = (0,external_react_.useState)(0);
    const [activeFeature, setActiveFeature] = (0,external_react_.useState)(0);
    const [mobileMenuOpen, setMobileMenuOpen] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsVisible(true);
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        // Auto-rotate testimonials (from original)
        const testimonialInterval = setInterval(()=>{
            setCurrentTestimonial((prev)=>(prev + 1) % testimonials.length);
        }, 5000);
        // Auto-rotate features
        const featureInterval = setInterval(()=>{
            setActiveFeature((prev)=>(prev + 1) % features.length);
        }, 4000);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            clearInterval(testimonialInterval);
            clearInterval(featureInterval);
        };
    }, []);
    // Original features with modern styling
    const features = [
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(message_square/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Smart Content Creation",
            description: "AI-powered chatbot helps you create engaging posts across all platforms with natural language commands.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Multi-Platform Publishing",
            description: "Post to Reddit, Facebook, Instagram, X, Pinterest, and TikTok from one unified dashboard.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center"
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Advanced Analytics",
            description: "Track performance across all platforms with comprehensive analytics and insights.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Automated Workflows",
            description: "Streamline your social media management with intelligent automation and scheduling.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
        }
    ];
    // Original platforms with enhanced styling
    const platforms = [
        {
            name: "Reddit",
            icon: /*#__PURE__*/ jsx_runtime.jsx(globe/* default */.Z, {
                className: "w-8 h-8"
            }),
            gradient: "from-orange-500 via-red-500 to-orange-400",
            users: "430M+",
            growth: "+12.3%"
        },
        {
            name: "Instagram",
            icon: /*#__PURE__*/ jsx_runtime.jsx(instagram/* default */.Z, {
                className: "w-8 h-8"
            }),
            gradient: "from-purple-500 via-pink-500 to-orange-400",
            users: "2B+",
            growth: "+8.7%"
        },
        {
            name: "Facebook",
            icon: /*#__PURE__*/ jsx_runtime.jsx(facebook/* default */.Z, {
                className: "w-8 h-8"
            }),
            gradient: "from-blue-600 to-blue-800",
            users: "2.9B+",
            growth: "+2.1%"
        },
        {
            name: "X (Twitter)",
            icon: /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                className: "w-8 h-8"
            }),
            gradient: "from-gray-800 to-black",
            users: "450M+",
            growth: "+5.2%"
        },
        {
            name: "Pinterest",
            icon: /*#__PURE__*/ jsx_runtime.jsx(play/* default */.Z, {
                className: "w-8 h-8"
            }),
            gradient: "from-red-500 to-red-700",
            users: "450M+",
            growth: "+7.8%"
        },
        {
            name: "TikTok",
            icon: /*#__PURE__*/ jsx_runtime.jsx(play/* default */.Z, {
                className: "w-8 h-8"
            }),
            gradient: "from-black via-gray-800 to-red-500",
            users: "1B+",
            growth: "+16.3%"
        }
    ];
    // Original testimonials
    const testimonials = [
        {
            name: "Sara",
            role: "Developer",
            company: "SocialFlow",
            content: "Building this platform has been an incredible journey. I'm proud of how seamlessly creators can now manage all their platforms.",
            rating: 5,
            avatar: "/Sara.png"
        },
        {
            name: "Wissal",
            role: "Developer",
            company: "SocialFlow",
            content: "We focused on great UX and powerful automation. It's rewarding to see how much time it saves our users.",
            rating: 5,
            avatar: "/Wissal.png"
        }
    ];
    // Original stats with modern icons
    const stats = [
        {
            number: "6",
            label: "Social Platforms",
            suffix: "",
            icon: /*#__PURE__*/ jsx_runtime.jsx(globe/* default */.Z, {
                className: "w-6 h-6"
            })
        },
        {
            number: "10K",
            label: "Posts Created",
            suffix: "+",
            icon: /*#__PURE__*/ jsx_runtime.jsx(message_square/* default */.Z, {
                className: "w-6 h-6"
            })
        },
        {
            number: "99.9",
            label: "Uptime",
            suffix: "%",
            icon: /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                className: "w-6 h-6"
            })
        },
        {
            number: "24/7",
            label: "AI Support",
            suffix: "",
            icon: /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                className: "w-6 h-6"
            })
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-black text-white overflow-x-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "relative min-h-screen flex items-center overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        style: {
                            backgroundImage: "url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transform: `translateY(${scrollY * 0.5}px)`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "AI-Powered Social Media Management"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight",
                                    children: [
                                        "Build your audience on",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse",
                                            children: "all platforms"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed",
                                    children: "Streamline your social media workflow with our AI-powered platform. Create, schedule, and analyze content across Reddit, Instagram, Facebook, X, Pinterest, and TikTok from one unified dashboard."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex flex-col sm:flex-row gap-6 justify-center items-center mb-20",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: "/register",
                                        className: "group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center text-lg",
                                        children: [
                                            "Start for free",
                                            /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                className: "w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto",
                                    children: stats.map((stat, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105",
                                            style: {
                                                animationDelay: `${index * 0.2}s`
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex items-center justify-center mb-3 text-blue-400",
                                                    children: stat.icon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-3xl md:text-4xl font-black text-white mb-2",
                                                    children: [
                                                        stat.number,
                                                        stat.suffix
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-gray-300 font-medium",
                                                    children: stat.label
                                                })
                                            ]
                                        }, index))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",
                        children: /*#__PURE__*/ jsx_runtime.jsx(chevron_down/* default */.Z, {
                            className: "w-8 h-8 text-white/60"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                id: "platforms",
                className: "py-32 bg-gradient-to-b from-black to-gray-900",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-20",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-5xl md:text-6xl font-black text-white mb-6",
                                    children: [
                                        "Connect all your",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block",
                                            children: "social platforms"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Manage your entire social media presence from one powerful dashboard"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-8",
                            children: platforms.map((platform, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "group relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-500",
                                    style: {
                                        animationDelay: `${index * 0.1}s`
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: `h-48 bg-gradient-to-br ${platform.gradient} p-8 flex flex-col justify-between relative`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center justify-between mb-4",
                                                        children: [
                                                            platform.icon,
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-sm font-bold bg-white/20 px-3 py-1 rounded-full",
                                                                children: platform.growth
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-2",
                                                        children: platform.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-white/80 text-lg font-semibold",
                                                        children: [
                                                            platform.users,
                                                            " users"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"
                                            })
                                        ]
                                    })
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                id: "features",
                className: "py-32 bg-gradient-to-b from-gray-900 to-black",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-20",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-5xl md:text-6xl font-black text-white mb-6",
                                    children: [
                                        "Everything you need",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block",
                                            children: "to grow"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Powerful features designed to help you create better content and reach more people"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-16 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "space-y-8",
                                    children: features.map((feature, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: `p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${activeFeature === index ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-2xl shadow-blue-500/20" : "bg-white/5 border-white/10 hover:bg-white/10"}`,
                                            onClick: ()=>setActiveFeature(index),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-start space-x-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: `p-4 rounded-2xl ${activeFeature === index ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white/10"} transition-all duration-300`,
                                                        children: feature.icon
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                className: "text-2xl font-bold text-white mb-3",
                                                                children: feature.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-300 leading-relaxed",
                                                                children: feature.description
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative h-96 rounded-3xl overflow-hidden shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: features[activeFeature].image,
                                                alt: features[activeFeature].title,
                                                className: "w-full h-full object-cover transition-all duration-700 transform hover:scale-110"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "absolute bottom-6 left-6 right-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "text-white text-xl font-bold mb-2",
                                                        children: features[activeFeature].title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-200 text-sm",
                                                        children: features[activeFeature].description
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "py-20 bg-gradient-to-b from-gray-900 to-black",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "text-3xl font-bold text-white mb-12",
                            children: "Works on all your devices"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-center items-center space-x-12 text-gray-300",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col items-center group hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(monitor/* default */.Z, {
                                                className: "w-8 h-8"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-lg font-medium",
                                            children: "Desktop"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col items-center group hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(tablet/* default */.Z, {
                                                className: "w-8 h-8"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-lg font-medium",
                                            children: "Tablet"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col items-center group hover:text-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(smartphone/* default */.Z, {
                                                className: "w-8 h-8"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-lg font-medium",
                                            children: "Mobile"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-black/20"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "text-5xl md:text-7xl font-black text-white mb-8",
                                children: [
                                    "Ready to",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "block",
                                        children: "grow your audience?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-2xl text-white/90 max-w-4xl mx-auto mb-16",
                                children: "Join thousands of creators who trust our platform to manage their social media presence"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-8 justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: "/register",
                                        className: "group px-12 py-6 bg-black text-white font-bold rounded-2xl shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-110 flex items-center text-xl",
                                        children: [
                                            "Get started for free",
                                            /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                className: "w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "/login",
                                        className: "px-12 py-6 bg-white/20 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-xl",
                                        children: "Sign in"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const LandingPage = (ModernLandingPage);

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(5802);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(5249);
;// CONCATENATED MODULE: ./src/components/Sidebar.jsx














const Sidebar = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed })=>{
    const [hoveredTab, setHoveredTab] = (0,external_react_.useState)(null);
    const { user } = (0,UserContext/* useUser */.a)();
    const isAdmin = user?.role === "admin";
    const platformTabs = [
        {
            id: "reddit",
            name: "Reddit",
            icon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                })
            }),
            color: "from-orange-500 to-red-500",
            bgColor: "bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-400/10",
            textColor: "text-orange-400",
            borderColor: "border-orange-500/30",
            shadowColor: "shadow-orange-500/20"
        },
        {
            id: "facebook",
            name: "Facebook",
            icon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                })
            }),
            color: "from-blue-600 to-blue-700",
            bgColor: "bg-gradient-to-r from-blue-600/10 to-blue-700/10",
            textColor: "text-blue-400",
            borderColor: "border-blue-500/30",
            shadowColor: "shadow-blue-500/20"
        },
        {
            id: "instagram",
            name: "Instagram",
            icon: "\uD83D\uDCF8",
            color: "from-purple-500 via-pink-500 to-orange-400",
            bgColor: "bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-400/10",
            textColor: "text-purple-400",
            borderColor: "border-purple-500/30",
            shadowColor: "shadow-purple-500/20"
        },
        {
            id: "x",
            name: "X (Twitter)",
            icon: "\uD835\uDD4F",
            color: "from-gray-600 to-gray-800",
            bgColor: "bg-gradient-to-r from-gray-600/10 to-gray-800/10",
            textColor: "text-gray-300",
            borderColor: "border-gray-500/30",
            shadowColor: "shadow-gray-500/20"
        },
        {
            id: "pinterest",
            name: "Pinterest",
            icon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                })
            }),
            color: "from-red-500 to-red-600",
            bgColor: "bg-gradient-to-r from-red-500/10 to-red-600/10",
            textColor: "text-red-400",
            borderColor: "border-red-500/30",
            shadowColor: "shadow-red-500/20"
        },
        {
            id: "youtube",
            name: "YouTube Shorts",
            icon: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                })
            }),
            color: "from-red-600 to-red-700",
            bgColor: "bg-gradient-to-r from-red-600/10 to-red-700/10",
            textColor: "text-red-400",
            borderColor: "border-red-500/30",
            shadowColor: "shadow-red-500/20"
        },
        {
            id: "tiktok",
            name: "TikTok",
            icon: "\uD83C\uDFB5",
            color: "from-pink-500 to-blue-500",
            hoverColor: "hover:black hover:to-blue-600",
            textColor: "text-black",
            bgColor: "bg-gradient-to-r from-pink-500 to-blue-500",
            description: "Upload and manage TikTok videos, track performance, and engage with your audience."
        }
    ];
    const utilityTabs = [
        {
            id: "analytics",
            name: "Analytics",
            icon: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                className: "w-5 h-5"
            }),
            color: "from-indigo-500 to-purple-600",
            bgColor: "bg-gradient-to-r from-indigo-500/10 to-purple-600/10",
            textColor: "text-indigo-400",
            borderColor: "border-indigo-500/30",
            shadowColor: "shadow-indigo-500/20"
        },
        {
            id: "Business analytics",
            name: "Business Analytics",
            icon: /*#__PURE__*/ jsx_runtime.jsx(chart_pie/* default */.Z, {
                className: "w-5 h-5"
            }),
            color: "from-indigo-500 to-purple-600",
            bgColor: "bg-gradient-to-r from-indigo-500/10 to-purple-600/10",
            textColor: "text-indigo-400",
            borderColor: "border-indigo-500/30",
            shadowColor: "shadow-indigo-500/20"
        }
    ];
    const TabButton = ({ tab, isActive, onClick })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
            onClick: onClick,
            onMouseEnter: ()=>setHoveredTab(tab.id),
            onMouseLeave: ()=>setHoveredTab(null),
            className: `group relative w-full flex items-center ${isCollapsed ? "justify-center px-3" : "justify-start px-4"} py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${isActive ? `${tab.bgColor} ${tab.textColor} border ${tab.borderColor} shadow-lg ${tab.shadowColor} backdrop-blur-lg` : "text-gray-400 hover:bg-white/5 hover:text-white hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm border border-transparent hover:border-white/10"}`,
            title: isCollapsed ? tab.name : "",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `flex items-center ${isCollapsed ? "" : "space-x-3"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `flex-shrink-0 transition-all duration-300 ${isActive ? "scale-110 drop-shadow-lg" : "group-hover:scale-110"}`,
                            children: tab.icon
                        }),
                        !isCollapsed && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex-1 text-left",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-sm font-semibold",
                                children: tab.name
                            })
                        })
                    ]
                }),
                isActive && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `absolute right-2 w-2 h-2 rounded-full bg-gradient-to-r ${tab.color} animate-pulse`
                }),
                isCollapsed && hoveredTab === tab.id && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "absolute left-full ml-3 px-4 py-2 bg-gray-900/95 backdrop-blur-lg text-white text-sm rounded-xl shadow-2xl z-50 whitespace-nowrap border border-white/10",
                    children: [
                        tab.name,
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-white/10"
                        })
                    ]
                })
            ]
        });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `bg-black/95 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} flex flex-col h-full shadow-2xl shadow-black/50 relative overflow-hidden`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative p-4 border-b border-white/10 bg-white/5 backdrop-blur-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        !isCollapsed && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-lg font-black text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                    children: "Platforms"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xs text-gray-400 font-medium",
                                    children: "Manage your social media"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>setIsCollapsed(!isCollapsed),
                            className: "p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-white/20 backdrop-blur-sm",
                            title: isCollapsed ? "Expand sidebar" : "Collapse sidebar",
                            children: isCollapsed ? /*#__PURE__*/ jsx_runtime.jsx(chevron_right/* default */.Z, {
                                className: "w-4 h-4"
                            }) : /*#__PURE__*/ jsx_runtime.jsx(chevron_left/* default */.Z, {
                                className: "w-4 h-4"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex-1 p-4 space-y-8 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            !isCollapsed && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-between mb-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                    children: "Social Platforms"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "space-y-2",
                                children: platformTabs.map((tab)=>/*#__PURE__*/ jsx_runtime.jsx(TabButton, {
                                        tab: tab,
                                        isActive: activeTab === tab.id,
                                        onClick: ()=>setActiveTab(tab.id)
                                    }, tab.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            !isCollapsed && /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-4",
                                children: "Analytics"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "space-y-2",
                                children: utilityTabs.map((tab)=>/*#__PURE__*/ jsx_runtime.jsx(TabButton, {
                                        tab: tab,
                                        isActive: activeTab === tab.id,
                                        onClick: ()=>setActiveTab(tab.id)
                                    }, tab.id))
                            })
                        ]
                    }),
                    isAdmin && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            !isCollapsed && /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2",
                                children: "Admin"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "space-y-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx(TabButton, {
                                    tab: {
                                        id: "admin-dashboard",
                                        name: "Admin Dashboard",
                                        icon: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                                            className: "w-5 h-5"
                                        }),
                                        color: "from-emerald-500 to-teal-600",
                                        bgColor: "bg-gradient-to-r from-emerald-500/10 to-teal-600/10",
                                        textColor: "text-emerald-400",
                                        borderColor: "border-emerald-500/30",
                                        shadowColor: "shadow-emerald-500/20"
                                    },
                                    isActive: activeTab === "admin-dashboard",
                                    onClick: ()=>setActiveTab("admin-dashboard")
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative p-4 border-t border-white/10 bg-white/5 backdrop-blur-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `flex items-center ${isCollapsed ? "justify-center" : "space-x-3"} p-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20 backdrop-blur-lg relative overflow-hidden`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative flex-shrink-0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                                        className: "w-4 h-4 text-white animate-pulse"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-50 animate-ping"
                                    })
                                ]
                            })
                        }),
                        !isCollapsed && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-sm font-bold text-white",
                                    children: "AI Assistant"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xs text-blue-300",
                                    children: "Ready to help"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/pages/index.jsx

























// Use REACT_APP_ prefix for Create React App
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
function Home() {
    const [activeTab, setActiveTab] = (0,external_react_.useState)("reddit");
    const [apiStatus, setApiStatus] = (0,external_react_.useState)("checking");
    const [isSidebarCollapsed, setIsSidebarCollapsed] = (0,external_react_.useState)(false);
    const { user, isAuthenticated, loading: userLoading, isInitialized } = (0,UserContext/* useUser */.a)();
    // Note: Using DOM manipulation for form filling instead of refs for better compatibility
    (0,external_react_.useEffect)(()=>{
        // Only check API health once when component mounts
        if (isInitialized) {
            checkApiHealth();
        }
    }, [
        isInitialized
    ]);
    const checkApiHealth = async ()=>{
        try {
            const response = await fetch(`${API_BASE_URL}/api/health`);
            if (response.ok) {
                setApiStatus("connected");
            } else {
                setApiStatus("error");
            }
        } catch (error) {
            setApiStatus("error");
        }
    };
    // AI Chatbot callback functions
    const handleFormFill = (platformId, formType, data)=>{
        console.log("Form fill requested:", {
            platformId,
            formType,
            data
        });
        // Switch to the appropriate platform tab
        setActiveTab(platformId);
        // Wait for tab switch, then fill form using DOM manipulation
        setTimeout(()=>{
            fillFormFields(platformId, formType, data);
        }, 1500); // Increased timeout for better reliability
    };
    const fillFormFields = (platformId, formType, data)=>{
        console.log("Filling form fields for platform:", platformId);
        const platformContainer = document.querySelector(`[data-platform="${platformId}"]`);
        if (!platformContainer) {
            console.error("Platform container not found:", platformId);
            return;
        }
        console.log("Platform container found:", platformContainer);
        const setInputValue = (selector, value)=>{
            const input = platformContainer.querySelector(selector);
            if (input && value !== undefined && value !== null) {
                console.log("Setting input value:", selector, value);
                // Use React's way of setting values for controlled components
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                nativeInputValueSetter.call(input, value);
                // Create and dispatch a proper React synthetic event
                const event = new Event("input", {
                    bubbles: true
                });
                event.simulated = true;
                // Let React know the value changed
                input._valueTracker && input._valueTracker.setValue("");
                input.dispatchEvent(event);
                console.log("Input value set successfully:", input.value);
            } else {
                console.log("Input not found or value invalid:", selector, value);
            }
        };
        const setTextareaValue = (selector, value)=>{
            const textarea = platformContainer.querySelector(selector);
            if (textarea && value !== undefined && value !== null) {
                console.log("Setting textarea value:", selector, value);
                // Use React's way of setting values for controlled components
                const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
                nativeTextAreaValueSetter.call(textarea, value);
                // Create and dispatch a proper React synthetic event
                const event = new Event("input", {
                    bubbles: true
                });
                event.simulated = true;
                // Let React know the value changed
                textarea._valueTracker && textarea._valueTracker.setValue("");
                textarea.dispatchEvent(event);
                console.log("Textarea value set successfully:", textarea.value);
            } else {
                console.log("Textarea not found or value invalid:", selector, value);
            }
        };
        const setSelectValue = (selector, value)=>{
            const select = platformContainer.querySelector(selector);
            if (select && value !== undefined && value !== null) {
                select.value = value;
                // Trigger React's onChange event
                const event = new Event("change", {
                    bubbles: true
                });
                select.dispatchEvent(event);
            }
        };
        const setCheckboxValue = (selector, checked)=>{
            const checkbox = platformContainer.querySelector(selector);
            if (checkbox && checked !== undefined && checked !== null) {
                checkbox.checked = checked;
                // Trigger React's onChange event
                const event = new Event("change", {
                    bubbles: true
                });
                checkbox.dispatchEvent(event);
            }
        };
        // Platform-specific form filling
        switch(platformId){
            case "x":
                if (formType === "threads") {
                    // Click threads tab first
                    const threadsTab = platformContainer.querySelector('[data-tab="threads"]');
                    if (threadsTab) threadsTab.click();
                    setTimeout(()=>{
                        // Fill thread tweets
                        if (data.threadTweets && Array.isArray(data.threadTweets)) {
                            data.threadTweets.forEach((tweet, index)=>{
                                setTextareaValue(`textarea[name="thread-${index}"], textarea[placeholder*="thread"]`, tweet);
                            });
                        }
                        setInputValue('input[name="hashtags"]', data.hashtags);
                    }, 200);
                } else if (formType === "schedule") {
                    // Click schedule tab first
                    const scheduleTab = platformContainer.querySelector('[data-tab="schedule"]');
                    if (scheduleTab) scheduleTab.click();
                    setTimeout(()=>{
                        setTextareaValue('textarea[name="text"], textarea[placeholder*="tweet"]', data.text);
                        setInputValue('input[name="hashtags"]', data.hashtags);
                        setInputValue('input[name="scheduled_time"], input[type="datetime-local"]', data.scheduled_time);
                    }, 200);
                } else {
                    // Default compose tab
                    const composeTab = platformContainer.querySelector('[data-tab="compose"]');
                    if (composeTab) composeTab.click();
                    setTimeout(()=>{
                        setTextareaValue('textarea[name="text"], textarea[placeholder*="tweet"]', data.text);
                        setInputValue('input[name="hashtags"]', data.hashtags);
                    }, 200);
                }
                break;
            case "instagram":
                // Instagram only has caption field, no scheduling
                if (data.caption) {
                    setTextareaValue('textarea[name="caption"], textarea[placeholder*="caption"]', data.caption);
                }
                console.log("Instagram form filled successfully with caption only");
                break;
            case "facebook":
                setTextareaValue('textarea[name="message"], textarea[placeholder*="message"]', data.message);
                setInputValue('input[name="link"]', data.link);
                setInputValue('input[name="scheduled_time"], input[type="datetime-local"]', data.scheduled_time);
                break;
            case "reddit":
                setInputValue('input[name="subreddit_name"]', data.subreddit_name);
                setInputValue('input[name="title"]', data.title);
                setTextareaValue('textarea[name="content"]', data.content);
                setCheckboxValue('input[name="is_spoiler"]', data.is_spoiler);
                setCheckboxValue('input[name="nsfw"]', data.nsfw);
                break;
            case "pinterest":
                setSelectValue('select[name="board_id"]', data.board_id);
                setInputValue('input[name="title"]', data.title);
                setTextareaValue('textarea[name="description"]', data.description);
                setInputValue('input[name="link"]', data.link);
                break;
            case "youtube":
                setInputValue('input[name="title"]', data.title);
                setTextareaValue('textarea[name="description"]', data.description);
                setInputValue('input[name="link"]', data.link);
                setSelectValue('select[name="privacyStatus"]', data.privacyStatus);
                break;
            case "tiktok":
                setInputValue('input[name="title"]', data.title);
                setTextareaValue('textarea[name="description"]', data.description);
                setInputValue('input[name="link"]', data.link);
                setSelectValue('select[name="privacyStatus"]', data.privacyStatus);
                break;
        }
    };
    const handlePostSubmit = (platformId, formType)=>{
        // Trigger the submit button click for the appropriate platform
        setTimeout(()=>{
            const submitButton = document.querySelector(`[data-platform="${platformId}"] button[type="submit"]`);
            if (submitButton && !submitButton.disabled) {
                submitButton.click();
            }
        }, 1000);
    };
    // Show loading spinner while checking auth state
    if (userLoading || !isInitialized) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                        className: "w-12 h-12 text-blue-500 animate-spin mx-auto mb-4"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-600 font-medium",
                        children: "Loading..."
                    })
                ]
            })
        });
    }
    // Show landing page for logged-out users
    if (!isAuthenticated()) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "min-h-screen",
            children: /*#__PURE__*/ jsx_runtime.jsx(LandingPage, {})
        });
    }
    // Show dashboard for logged-in users
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-e7e3ce6d42332e5" + " " + "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "jsx-e7e3ce6d42332e5" + " " + "flex h-[calc(100vh-4rem)]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_Sidebar, {
                        activeTab: activeTab,
                        setActiveTab: setActiveTab,
                        isCollapsed: isSidebarCollapsed,
                        setIsCollapsed: setIsSidebarCollapsed
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "jsx-e7e3ce6d42332e5" + " " + "flex-1 flex flex-col overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                            className: "jsx-e7e3ce6d42332e5" + " " + "flex-1 overflow-y-auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "jsx-e7e3ce6d42332e5" + " " + "w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "jsx-e7e3ce6d42332e5" + " " + "min-h-[600px]",
                                    children: [
                                        activeTab === "reddit" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "reddit",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(RedditSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "facebook" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "facebook",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(FacebookSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "instagram" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "instagram",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(InstagramSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "x" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "x",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(XSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "pinterest" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "pinterest",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(PinterestSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "youtube" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "youtube",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(YouTubeShortsSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "tiktok" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-platform": "tiktok",
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(TikTokSection, {
                                                apiBaseUrl: API_BASE_URL
                                            })
                                        }),
                                        activeTab === "analytics" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(components_AnalyticsDashboard, {})
                                        }),
                                        activeTab === "Business analytics" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in p-10 duration-300",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(PowerBIReport, {})
                                        }),
                                        activeTab === "admin-dashboard" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "jsx-e7e3ce6d42332e5" + " " + "animate-in slide-in-from-right-5 fade-in duration-300",
                                            children: user?.role === "admin" ? /*#__PURE__*/ jsx_runtime.jsx(components_AnalyticsDashboard, {}) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "jsx-e7e3ce6d42332e5" + " " + "p-8 text-center text-red-600 font-semibold",
                                                children: "You are not authorized to view the Admin Dashboard."
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            isAuthenticated() && /*#__PURE__*/ jsx_runtime.jsx(components_AIChatbot, {
                onFormFill: handleFormFill,
                onPostSubmit: handlePostSubmit
            }),
            jsx_runtime.jsx((style_default()), {
                id: "e7e3ce6d42332e5",
                children: "@-webkit-keyframes animate-in{from{opacity:0;-webkit-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes animate-in{from{opacity:0;-moz-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes animate-in{from{opacity:0;-o-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes animate-in{from{opacity:0;-webkit-transform:translatey(10px);-moz-transform:translatey(10px);-o-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.animate-in.jsx-e7e3ce6d42332e5{-webkit-animation:animate-in.5s ease-out;-moz-animation:animate-in.5s ease-out;-o-animation:animate-in.5s ease-out;animation:animate-in.5s ease-out}.slide-in-from-right-5.jsx-e7e3ce6d42332e5{-webkit-animation:slide-in-from-right.5s ease-out;-moz-animation:slide-in-from-right.5s ease-out;-o-animation:slide-in-from-right.5s ease-out;animation:slide-in-from-right.5s ease-out}@-webkit-keyframes slide-in-from-right{from{opacity:0;-webkit-transform:translatex(20px);transform:translatex(20px)}to{opacity:1;-webkit-transform:translatex(0);transform:translatex(0)}}@-moz-keyframes slide-in-from-right{from{opacity:0;-moz-transform:translatex(20px);transform:translatex(20px)}to{opacity:1;-moz-transform:translatex(0);transform:translatex(0)}}@-o-keyframes slide-in-from-right{from{opacity:0;-o-transform:translatex(20px);transform:translatex(20px)}to{opacity:1;-o-transform:translatex(0);transform:translatex(0)}}@keyframes slide-in-from-right{from{opacity:0;-webkit-transform:translatex(20px);-moz-transform:translatex(20px);-o-transform:translatex(20px);transform:translatex(20px)}to{opacity:1;-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}}.fade-in.jsx-e7e3ce6d42332e5{-webkit-animation:fade-in.5s ease-out;-moz-animation:fade-in.5s ease-out;-o-animation:fade-in.5s ease-out;animation:fade-in.5s ease-out}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@-moz-keyframes fade-in{from{opacity:0}to{opacity:1}}@-o-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: pages_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 5982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,751,289,127,585,67,717,732,544,557], () => (__webpack_exec__(3656)));
module.exports = __webpack_exports__;

})();