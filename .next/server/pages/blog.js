"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 4355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblog_preferredRegion_absolutePagePath_private_next_pages_2Fblog_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/blog.jsx
var blog_namespaceObject = {};
__webpack_require__.r(blog_namespaceObject);
__webpack_require__.d(blog_namespaceObject, {
  "default": () => (blog)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(1552);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(5582);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(2705);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(2151);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-square.js
var message_square = __webpack_require__(7433);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/book-open.js
var book_open = __webpack_require__(5194);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(8302);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(4941);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(4710);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(3424);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(7788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.js
var play = __webpack_require__(2090);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(9341);
// EXTERNAL MODULE: ./src/components/Footer.jsx
var Footer = __webpack_require__(7623);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(1572);
;// CONCATENATED MODULE: ./src/pages/blog.jsx






















// API endpoint for fetching blog posts
const API_URL = "https://dev.to/api/articles?tag=socialmedia&top=10&state=fresh";
// Fallback image if no cover image is provided
const DEFAULT_IMAGE = "https://via.placeholder.com/600x400/1a365d/ffffff?text=Social+Media+Blog";
// Helper function to format date
const formatDate = (dateString)=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
// Helper function to estimate reading time
const calculateReadTime = (content)=>{
    const wordsPerMinute = 200;
    const words = content.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};
const BlogPage = ()=>{
    const [posts, setPosts] = (0,external_react_.useState)([]);
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [error, setError] = (0,external_react_.useState)(null);
    const [searchQuery, setSearchQuery] = (0,external_react_.useState)("");
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    const [activeCategory, setActiveCategory] = (0,external_react_.useState)("All");
    const [showMobileFilters, setShowMobileFilters] = (0,external_react_.useState)(false);
    const [showMobileCategories, setShowMobileCategories] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const fetchPosts = async ()=>{
            try {
                setLoading(true);
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog posts");
                }
                const data = await response.json();
                // Transform API data to match our component's expected format
                const formattedPosts = data.map((post)=>({
                        id: post.id,
                        title: post.title,
                        excerpt: post.description || "Read more about this article...",
                        content: post.body_markdown || "",
                        author: post.user.name,
                        authorRole: post.user.work_title || "Writer",
                        authorImage: post.user.profile_image_90,
                        publishDate: post.published_at,
                        readTime: calculateReadTime(post.body_markdown || ""),
                        category: post.tag_list[0]?.charAt(0).toUpperCase() + post.tag_list[0]?.slice(1) || "General",
                        tags: post.tag_list || [],
                        featured: post.positive_reactions_count > 10,
                        image: post.cover_image || post.social_image || DEFAULT_IMAGE,
                        url: post.url,
                        commentsCount: post.comments_count,
                        reactionsCount: post.positive_reactions_count
                    }));
                setPosts(formattedPosts);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError("Failed to load blog posts. Please try again later.");
                setLoading(false);
            }
        };
        fetchPosts();
        // Set isVisible to true after component mounts for initial animation
        const timer = setTimeout(()=>{
            setIsVisible(true);
        }, 100);
        return ()=>clearTimeout(timer);
    }, []);
    // Get unique categories from fetched posts
    const categories = [
        "All",
        ...new Set(posts.map((post)=>post.category))
    ];
    // Filter posts based on search query and active category
    const filteredPosts = posts.filter((post)=>post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || post.tags.some((tag)=>tag.toLowerCase().includes(searchQuery.toLowerCase())));
    const finalFilteredPosts = filteredPosts.filter((post)=>activeCategory === "All" || post.category === activeCategory);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "min-h-screen flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime.jsx("main", {
                    className: "flex-grow flex items-center justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(loader_circle/* default */.Z, {
                                className: "h-12 w-12 animate-spin mx-auto text-blue-600"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "mt-4 text-lg text-gray-600",
                                children: "Loading blog posts..."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "min-h-screen flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime.jsx("main", {
                    className: "flex-grow flex items-center justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center p-8 max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-red-50 text-red-700 p-4 rounded-lg mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-medium",
                                        children: "Error loading blog posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm mt-1",
                                        children: error
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>window.location.reload(),
                                className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors",
                                children: "Retry"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
            ]
        });
    }
    const featuredPost = posts.find((post)=>post.featured);
    const recentPosts = finalFilteredPosts.filter((post)=>!post.featured).slice(0, 6);
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
                            backgroundImage: "url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920&h=1080&fit=crop&crop=center)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transform: `translateY(${window.scrollY * 0.5}px)`
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
                                        /*#__PURE__*/ jsx_runtime.jsx(book_open/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "Social Media Insights & Strategies"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight",
                                    children: [
                                        "Learn from the",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse",
                                            children: "best minds"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed",
                                    children: "Master social media management with expert insights, proven strategies, and cutting-edge techniques that drive real results across all platforms."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "max-w-2xl mx-auto mb-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(search/* default */.Z, {
                                                className: "w-6 h-6 text-gray-400 absolute left-6 top-1/2 transform -translate-y-1/2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                placeholder: "Search articles, strategies, and insights...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/20 transition-all duration-300 text-lg"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-3xl font-black text-white mb-2",
                                                    children: "50+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-gray-300 font-medium",
                                                    children: "Expert Articles"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-3xl font-black text-white mb-2",
                                                    children: "10K+"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-gray-300 font-medium",
                                                    children: "Monthly Readers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-3xl font-black text-white mb-2",
                                                    children: "6"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-gray-300 font-medium",
                                                    children: "Platforms Covered"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-3xl font-black text-white mb-2",
                                                    children: "24/7"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-gray-300 font-medium",
                                                    children: "Updated Content"
                                                })
                                            ]
                                        })
                                    ]
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
                className: "py-12 bg-gradient-to-b from-black to-gray-900",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-wrap gap-4 justify-center",
                        children: categories.map((category)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>setActiveCategory(category),
                                className: `px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${activeCategory === category ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/25" : "bg-white/10 backdrop-blur-lg text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white"}`,
                                children: category
                            }, category))
                    })
                })
            }),
            featuredPost && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "py-20 bg-gradient-to-b from-gray-900 to-black",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-full text-sm font-medium text-yellow-300 mb-6 border border-yellow-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "Featured Article"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-4xl md:text-5xl font-black text-white mb-6",
                                    children: [
                                        "Latest ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",
                                            children: "Insights"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-500/10",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid lg:grid-cols-2 gap-0 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "p-8 lg:p-16",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center space-x-4 mb-8",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full",
                                                        children: featuredPost.category
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center text-gray-400 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                                className: "w-4 h-4 mr-2"
                                                            }),
                                                            featuredPost.readTime
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-3xl md:text-4xl font-black text-white mb-6 leading-tight",
                                                children: featuredPost.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-300 text-lg mb-8 leading-relaxed",
                                                children: featuredPost.excerpt
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                                    className: "w-6 h-6 text-white"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "font-bold text-white text-lg",
                                                                        children: featuredPost.author
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-blue-400",
                                                                        children: featuredPost.authorRole
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: featuredPost.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center",
                                                        children: [
                                                            "Read Article",
                                                            /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                                className: "w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative h-80 lg:h-full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: featuredPost.image,
                                                alt: featuredPost.title,
                                                className: "w-full h-full object-cover"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute top-6 right-6",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(play/* default */.Z, {
                                                        className: "w-8 h-8 text-white"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "py-20 bg-gradient-to-b from-black to-gray-900",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-4xl md:text-5xl font-black text-white mb-6",
                                    children: [
                                        "Latest ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                            children: "Articles"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Discover cutting-edge strategies, expert insights, and actionable tips to dominate social media"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: finalFilteredPosts.map((post, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                                    className: "group bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10",
                                    style: {
                                        animationDelay: `${index * 0.1}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative h-48 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: post.image,
                                                    alt: post.title,
                                                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: `px-3 py-1 text-xs font-bold rounded-full ${post.category === "Strategy" ? "bg-blue-500 text-white" : post.category === "Technology" ? "bg-purple-500 text-white" : post.category === "Analytics" ? "bg-green-500 text-white" : "bg-orange-500 text-white"}`,
                                                        children: post.category
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "absolute bottom-4 right-4 flex items-center text-white/80 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                            className: "w-4 h-4 mr-1"
                                                        }),
                                                        post.readTime
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors",
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-300 mb-6 line-clamp-3 leading-relaxed",
                                                    children: post.excerpt
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                                        className: "w-5 h-5 text-white"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                            className: "text-sm font-bold text-white",
                                                                            children: post.author
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: formatDate(post.publishDate)
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: post.url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium",
                                                            children: [
                                                                "Read on Dev.to ",
                                                                /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                                    className: "w-4 h-4 ml-1"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, post.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-black/20"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/20",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium text-white mb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(message_square/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "Stay Ahead of the Game"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "text-4xl md:text-5xl font-black text-white mb-6",
                                    children: [
                                        "Get Weekly Social Media",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "block",
                                            children: "Mastery Tips"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed",
                                    children: "Join 15,000+ marketers who receive our exclusive newsletter with cutting-edge strategies, insider secrets, and actionable insights."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-6 max-w-lg mx-auto mb-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "email",
                                            placeholder: "Enter your email address",
                                            className: "flex-1 px-8 py-5 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all duration-300"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap",
                                            children: "Subscribe Now"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-6 text-white/80",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm",
                                                    children: "15,000+ subscribers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm",
                                                    children: "Weekly insights"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(globe/* default */.Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm",
                                                    children: "No spam ever"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const blog = (BlogPage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fblog&preferredRegion=&absolutePagePath=private-next-pages%2Fblog.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fblog_preferredRegion_absolutePagePath_private_next_pages_2Fblog_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(blog_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(blog_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(blog_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(blog_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/blog",
        pathname: "/blog",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: blog_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,585,81,544,557], () => (__webpack_exec__(4355)));
module.exports = __webpack_exports__;

})();