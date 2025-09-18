"use strict";
(() => {
var exports = {};
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 4110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fplatforms_2Ftiktok_preferredRegion_absolutePagePath_private_next_pages_2Fplatforms_2Ftiktok_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/platforms/tiktok.jsx
var tiktok_namespaceObject = {};
__webpack_require__.r(tiktok_namespaceObject);
__webpack_require__.d(tiktok_namespaceObject, {
  "default": () => (tiktok)
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
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(1572);
// EXTERNAL MODULE: ./src/components/Footer.jsx
var Footer = __webpack_require__(7623);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(2705);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(8946);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.js
var play = __webpack_require__(2090);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/music.js
var music = __webpack_require__(4044);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(6796);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-column.js
var chart_column = __webpack_require__(1646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bot.js
var bot = __webpack_require__(4795);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(7788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rocket.js
var rocket = __webpack_require__(3011);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
var shield = __webpack_require__(4115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/video.js
var video = __webpack_require__(4449);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/hash.js
var hash = __webpack_require__(7833);
;// CONCATENATED MODULE: ./src/pages/platforms/tiktok.jsx






















const TikTokPlatform = ()=>{
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    const [scrollY, setScrollY] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        setIsVisible(true);
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const features = [
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(video/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Viral Content Creation",
            description: "Create engaging TikTok content with AI assistance. Generate video ideas, captions, and hashtags that capture attention and drive views.",
            benefits: [
                "AI content ideas",
                "Viral video concepts",
                "Trend-based suggestions"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Smart Scheduling",
            description: "Schedule your TikTok posts for optimal engagement times. Our AI analyzes TikTok activity patterns to maximize your video reach.",
            benefits: [
                "Peak time scheduling",
                "Bulk video planning",
                "Cross-account management"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(bot/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "AI Content Assistant",
            description: "Leverage AI to automatically generate TikTok captions, hashtags, and video descriptions that boost discoverability and engagement.",
            benefits: [
                "Automated captions",
                "Hashtag optimization",
                "Description generation"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Performance Analytics",
            description: "Track your TikTok performance with detailed analytics. Monitor views, likes, shares, comments, and follower growth patterns.",
            benefits: [
                "View tracking",
                "Engagement metrics",
                "Growth analytics"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(hash/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Trending Hashtags",
            description: "Discover and use trending TikTok hashtags to increase video visibility. Our AI identifies viral hashtags for maximum reach.",
            benefits: [
                "Trending hashtag discovery",
                "Hashtag performance",
                "Viral potential analysis"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(music/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Trend Monitoring",
            description: "Stay ahead of TikTok trends with real-time monitoring. Identify viral sounds, challenges, and content opportunities before they peak.",
            benefits: [
                "Trend identification",
                "Sound discovery",
                "Challenge tracking"
            ]
        }
    ];
    const stats = [
        {
            number: "300K+",
            label: "TikTok Videos Created"
        },
        {
            number: "250%",
            label: "View Increase"
        },
        {
            number: "100K+",
            label: "Hashtags Analyzed"
        },
        {
            number: "24/7",
            label: "Trend Monitoring"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "TikTok Management | SocialFlow - AI-Powered TikTok Marketing"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Grow your TikTok presence with AI-powered content creation, scheduling, and analytics. Create viral videos with SocialFlow."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://yourdomain.com/platforms/tiktok"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "relative py-32 overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-gray-600/20 via-red-600/20 to-pink-500/20"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(play/* default */.Z, {
                                                    className: "w-5 h-5 mr-3 text-red-400"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-white",
                                                    children: "TikTok Management"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                                    className: "w-4 h-4 ml-3 text-yellow-400"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-6xl md:text-8xl font-black text-white mb-8 leading-tight",
                                            children: [
                                                "Go Viral on",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent",
                                                    children: "TikTok"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed",
                                            children: "Create trending TikTok content, schedule videos for maximum reach, and grow your following with our AI-powered TikTok management platform."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: "/register",
                                                className: "inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105",
                                                children: [
                                                    "Start Creating Viral Content",
                                                    /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                        className: "w-5 h-5 ml-2"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "py-32 relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                                className: "text-5xl md:text-7xl font-black text-white mb-8",
                                                children: [
                                                    "Complete TikTok",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent",
                                                        children: "Growth Solution"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-2xl text-white/80 max-w-4xl mx-auto",
                                                children: "From viral content creation to trend analysis, our AI tools help you build a massive TikTok following and maximize your reach."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300",
                                                        children: feature.icon
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: feature.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 mb-8 leading-relaxed",
                                                        children: feature.description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        className: "space-y-3",
                                                        children: feature.benefits.map((benefit, benefitIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: "flex items-center text-white/80",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(circle_check_big/* default */.Z, {
                                                                        className: "w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                                                                    }),
                                                                    benefit
                                                                ]
                                                            }, benefitIndex))
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "py-32 relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-purple-500/10"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                                className: "text-5xl md:text-7xl font-black text-white mb-8",
                                                children: [
                                                    "How SocialFlow Works",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent",
                                                        children: "for TikTok"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-2xl text-white/80 max-w-4xl mx-auto",
                                                children: "Go viral on TikTok in three simple steps"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid md:grid-cols-3 gap-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-black text-white",
                                                            children: "1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: "Connect Your TikTok Account"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 leading-relaxed",
                                                        children: "Securely connect your TikTok creator account to access our comprehensive video management and analytics tools."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-black text-white",
                                                            children: "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: "Create Viral Content"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 leading-relaxed",
                                                        children: "Use AI to generate trending captions, hashtags, and video ideas that align with current TikTok trends and your audience."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-black text-white",
                                                            children: "3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: "Schedule & Grow"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 leading-relaxed",
                                                        children: "Schedule videos for optimal posting times and track views, likes, and follower growth to maximize your TikTok success."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "py-32 relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-red-600/10 via-pink-600/10 to-purple-500/10"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-5xl md:text-7xl font-black text-white mb-8",
                                        children: "Ready to TikTok Your Way to Fame?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-2xl text-white/80 mb-8",
                                        children: "Join creators and influencers who use SocialFlow to build massive TikTok followings and create viral content that captivates audiences."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-8 justify-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: "/register",
                                                className: "group px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(rocket/* default */.Z, {
                                                        className: "w-6 h-6 mr-3"
                                                    }),
                                                    "Start Going Viral",
                                                    /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                        className: "w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: "/login",
                                                className: "px-12 py-6 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xl",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                                        className: "w-6 h-6 mr-3"
                                                    }),
                                                    "Sign In"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const tiktok = (TikTokPlatform);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fplatforms%2Ftiktok&preferredRegion=&absolutePagePath=private-next-pages%2Fplatforms%2Ftiktok.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fplatforms_2Ftiktok_preferredRegion_absolutePagePath_private_next_pages_2Fplatforms_2Ftiktok_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(tiktok_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(tiktok_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/platforms/tiktok",
        pathname: "/platforms/tiktok",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: tiktok_namespaceObject
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,751,629,289,858,544,557], () => (__webpack_exec__(4110)));
module.exports = __webpack_exports__;

})();