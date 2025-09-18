"use strict";
(() => {
var exports = {};
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fplatforms_2Ftwitter_preferredRegion_absolutePagePath_private_next_pages_2Fplatforms_2Ftwitter_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/platforms/twitter.jsx
var twitter_namespaceObject = {};
__webpack_require__.r(twitter_namespaceObject);
__webpack_require__.d(twitter_namespaceObject, {
  "default": () => (platforms_twitter)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/twitter.js
var twitter = __webpack_require__(6646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-circle.js
var message_circle = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(2686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(6796);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-column.js
var chart_column = __webpack_require__(1646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(6064);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bot.js
var bot = __webpack_require__(4795);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(7788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rocket.js
var rocket = __webpack_require__(3011);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
var shield = __webpack_require__(4115);
;// CONCATENATED MODULE: ./src/pages/platforms/twitter.jsx




















const TwitterPlatform = ()=>{
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
            icon: /*#__PURE__*/ jsx_runtime.jsx(message_circle/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Smart Tweet Creation",
            description: "Create engaging tweets with AI assistance. Generate compelling content that drives retweets, likes, and meaningful conversations on X (Twitter).",
            benefits: [
                "AI tweet generation",
                "Thread creation",
                "Engagement optimization"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Strategic Scheduling",
            description: "Schedule tweets for optimal engagement times. Our AI analyzes your audience activity to suggest the best times to tweet for maximum reach.",
            benefits: [
                "Peak time analysis",
                "Thread scheduling",
                "Bulk tweet planning"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(bot/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "AI Content Assistant",
            description: "Leverage AI to automatically generate tweets, replies, and threads that maintain your voice and drive engagement on the platform.",
            benefits: [
                "Automated tweeting",
                "Reply suggestions",
                "Voice consistency"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Tweet Analytics",
            description: "Track your Twitter performance with detailed analytics. Monitor impressions, engagement rates, follower growth, and tweet performance.",
            benefits: [
                "Impression tracking",
                "Engagement metrics",
                "Growth analysis"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(target/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Hashtag Optimization",
            description: "Discover and use trending hashtags to increase your tweet visibility. Our AI suggests relevant hashtags for maximum reach.",
            benefits: [
                "Trending hashtags",
                "Hashtag analytics",
                "Reach optimization"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Trend Monitoring",
            description: "Stay ahead of Twitter trends with real-time monitoring. Identify viral opportunities and join conversations at the right moment.",
            benefits: [
                "Real-time trends",
                "Viral content detection",
                "Conversation insights"
            ]
        }
    ];
    const stats = [
        {
            number: "2M+",
            label: "Tweets Created"
        },
        {
            number: "180%",
            label: "Engagement Boost"
        },
        {
            number: "50K+",
            label: "Threads Scheduled"
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
                        children: "X (Twitter) Management | SocialFlow - AI-Powered Twitter Marketing"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Grow your X (Twitter) presence with AI-powered tweet creation, scheduling, and analytics. Join trending conversations with SocialFlow."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://yourdomain.com/platforms/twitter"
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
                                className: "absolute inset-0 bg-gradient-to-r from-gray-600/20 via-blue-600/20 to-purple-500/20"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium mb-8 border border-white/20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(twitter/* default */.Z, {
                                                    className: "w-5 h-5 mr-3 text-blue-400"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-white",
                                                    children: "X (Twitter) Management"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                                    className: "w-4 h-4 ml-3 text-yellow-400"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-6xl md:text-8xl font-black text-white mb-8 leading-tight",
                                            children: [
                                                "Master X (Twitter)",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
                                                    children: "Conversations"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed",
                                            children: "Create engaging tweets, build meaningful conversations, and grow your X (Twitter) presence with our AI-powered social media management platform."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: "/register",
                                                className: "inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105",
                                                children: [
                                                    "Start Tweeting Smarter",
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
                                                    "Complete X (Twitter)",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                                        children: "Management Solution"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-2xl text-white/80 max-w-4xl mx-auto",
                                                children: "From tweet creation to audience engagement, our AI tools help you build meaningful connections and grow your X (Twitter) presence."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300",
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
                                className: "absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-500/10"
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
                                                        className: "block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                                        children: "for X (Twitter)"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-2xl text-white/80 max-w-4xl mx-auto",
                                                children: "Build your X (Twitter) presence in three simple steps"
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
                                                        className: "w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-black text-white",
                                                            children: "1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: "Connect Your X (Twitter) Account"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 leading-relaxed",
                                                        children: "Securely connect your X (Twitter) account to access our comprehensive tweet management and analytics tools."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-black text-white",
                                                            children: "2"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: "Create Engaging Tweets"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 leading-relaxed",
                                                        children: "Use AI to generate compelling tweets, threads, and replies that spark conversations and drive engagement."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-center group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-black text-white",
                                                            children: "3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold text-white mb-6",
                                                        children: "Schedule & Analyze"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white/70 leading-relaxed",
                                                        children: "Schedule tweets for optimal reach and track performance with detailed analytics to grow your following."
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
                                className: "absolute inset-0 bg-gradient-to-r from-gray-900 to-black"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-4xl font-bold text-white mb-6",
                                        children: "Ready to Go Viral on X?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-xl text-gray-300 mb-8",
                                        children: "Join influencers and thought leaders who use SocialFlow to build their X (Twitter) presence and drive meaningful conversations."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-8 justify-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: "/register",
                                                className: "group px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(rocket/* default */.Z, {
                                                        className: "w-6 h-6 mr-3"
                                                    }),
                                                    "Start Building Your Audience",
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
/* harmony default export */ const platforms_twitter = (TwitterPlatform);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fplatforms%2Ftwitter&preferredRegion=&absolutePagePath=private-next-pages%2Fplatforms%2Ftwitter.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fplatforms_2Ftwitter_preferredRegion_absolutePagePath_private_next_pages_2Fplatforms_2Ftwitter_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(twitter_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(twitter_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(twitter_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(twitter_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(twitter_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(twitter_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(twitter_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(twitter_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(twitter_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(twitter_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(twitter_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/platforms/twitter",
        pathname: "/platforms/twitter",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: twitter_namespaceObject
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

/***/ }),

/***/ 5338:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MessageCircle)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4102);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("MessageCircle", __iconNode);


//# sourceMappingURL=message-circle.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,751,629,421,717,544,557], () => (__webpack_exec__(3578)));
module.exports = __webpack_exports__;

})();