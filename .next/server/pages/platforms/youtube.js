"use strict";
(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 2626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fplatforms_2Fyoutube_preferredRegion_absolutePagePath_private_next_pages_2Fplatforms_2Fyoutube_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/platforms/youtube.jsx
var youtube_namespaceObject = {};
__webpack_require__.r(youtube_namespaceObject);
__webpack_require__.d(youtube_namespaceObject, {
  "default": () => (youtube)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/video.js
var video = __webpack_require__(4449);
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/play.js
var play = __webpack_require__(2090);
;// CONCATENATED MODULE: ./src/pages/platforms/youtube.jsx























const YouTubePlatform = ()=>{
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
            title: "Smart Shorts Creation",
            description: "Create engaging YouTube Shorts with AI assistance. Our platform helps you craft short-form content that captures attention and drives engagement.",
            benefits: [
                "AI-powered content suggestions",
                "Shorts-optimized formatting",
                "Title and description generation"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Automated Scheduling",
            description: "Schedule your YouTube Shorts for optimal viewing times. Our AI analyzes audience activity patterns to suggest the best upload times.",
            benefits: [
                "Optimal timing suggestions",
                "Bulk upload scheduling",
                "Cross-platform coordination"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(bot/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "AI Content Assistant",
            description: "Leverage AI to automatically generate YouTube Shorts content, titles, and descriptions that match your brand voice and YouTube guidelines.",
            benefits: [
                "Automated content generation",
                "SEO-optimized titles",
                "Brand voice consistency"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(chart_column/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Performance Analytics",
            description: "Track your YouTube Shorts performance with detailed analytics. Monitor views, likes, comments, and subscriber growth.",
            benefits: [
                "View tracking",
                "Engagement metrics",
                "Growth analytics"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(target/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Channel Management",
            description: "Manage your YouTube channel from one dashboard. Upload, organize, and optimize your Shorts content seamlessly.",
            benefits: [
                "Multi-channel support",
                "Content organization",
                "Channel optimization"
            ]
        },
        {
            icon: /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                className: "w-8 h-8"
            }),
            title: "Trend Analysis",
            description: "Stay ahead of YouTube trends with our AI-powered trend detection. Identify viral Shorts opportunities before they peak.",
            benefits: [
                "Trend identification",
                "Viral content prediction",
                "Competitor analysis"
            ]
        }
    ];
    const stats = [
        {
            number: "1M+",
            label: "YouTube Shorts Created"
        },
        {
            number: "300%",
            label: "View Increase"
        },
        {
            number: "10K+",
            label: "Channels Managed"
        },
        {
            number: "24/7",
            label: "AI Monitoring"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "YouTube Shorts Management | SocialFlow - AI-Powered YouTube Marketing"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Manage your YouTube Shorts with AI-powered content creation, scheduling, and analytics. Grow your channel engagement with SocialFlow."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://yourdomain.com/platforms/youtube"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-red-800",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "relative py-32 overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/20 to-pink-500/20"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex justify-center mb-8",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-32 h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(play/* default */.Z, {
                                                            className: "w-16 h-16 text-white"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-400 rounded-full flex items-center justify-center animate-bounce",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                                            className: "w-6 h-6 text-white"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-7xl font-black text-white mb-8 leading-tight",
                                            children: [
                                                "Master YouTube",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "block bg-gradient-to-r from-red-400 via-pink-400 to-red-300 bg-clip-text text-transparent",
                                                    children: "Shorts Creation"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed",
                                            children: "Create viral YouTube Shorts with AI-powered content generation, smart scheduling, and comprehensive analytics. Grow your channel and reach millions of viewers effortlessly."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-8 justify-center mb-16",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/register",
                                                    className: "group px-12 py-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(rocket/* default */.Z, {
                                                            className: "w-6 h-6 mr-3"
                                                        }),
                                                        "Start Creating Shorts",
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
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "py-20 bg-black/20 backdrop-blur-lg",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                                children: stats.map((stat, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-5xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300",
                                                children: stat.number
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-red-300 font-semibold text-lg",
                                                children: stat.label
                                            })
                                        ]
                                    }, index))
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "py-32",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center mb-20",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "text-6xl font-black text-white mb-8",
                                            children: [
                                                "Everything You Need for",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent",
                                                    children: "YouTube Success"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-2xl text-white/70 max-w-4xl mx-auto",
                                            children: "Comprehensive tools to create, schedule, and analyze your YouTube Shorts performance"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-12",
                                    children: features.map((feature, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "group",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:bg-white/10 transform hover:scale-105",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-white",
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
                                                                className: "flex items-center text-red-300",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx(circle_check_big/* default */.Z, {
                                                                        className: "w-5 h-5 mr-3 flex-shrink-0"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: benefit
                                                                    })
                                                                ]
                                                            }, benefitIndex))
                                                    })
                                                ]
                                            })
                                        }, index))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "py-32 bg-gradient-to-r from-red-500/10 to-pink-500/10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center mb-20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-6xl font-black text-white mb-8",
                                            children: "How It Works"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-2xl text-white/80 max-w-4xl mx-auto",
                                            children: "Create viral YouTube Shorts in three simple steps"
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
                                                    className: "w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-3xl font-black text-white",
                                                        children: "1"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-2xl font-bold text-white mb-6",
                                                    children: "Connect Your YouTube Channel"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-white/70 leading-relaxed",
                                                    children: "Securely connect your YouTube channel to access our comprehensive content creation and analytics tools."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-center group",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-20 h-20 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-3xl font-black text-white",
                                                        children: "2"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-2xl font-bold text-white mb-6",
                                                    children: "Create Engaging Shorts"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-white/70 leading-relaxed",
                                                    children: "Use AI to generate compelling short-form content with optimized titles and descriptions that drive views and engagement."
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
                                                        children: "3"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-2xl font-bold text-white mb-6",
                                                    children: "Grow & Analyze"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-white/70 leading-relaxed",
                                                    children: "Schedule uploads for optimal times and track views, engagement, and subscriber growth across your channel."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "py-32 bg-gradient-to-r from-red-500 to-red-600 w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-5xl font-black text-white mb-8",
                                    children: "Ready to Go Viral on YouTube?"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-2xl text-red-100 mb-8",
                                    children: "Join thousands of creators who use SocialFlow to grow their YouTube channels and create viral Shorts content."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-8 justify-center mb-20",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/register",
                                            className: "group px-12 py-6 bg-gradient-to-r from-white to-red-50 text-red-600 font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(play/* default */.Z, {
                                                    className: "w-6 h-6 mr-3"
                                                }),
                                                "Start Creating Shorts",
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
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const youtube = (YouTubePlatform);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fplatforms%2Fyoutube&preferredRegion=&absolutePagePath=private-next-pages%2Fplatforms%2Fyoutube.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fplatforms_2Fyoutube_preferredRegion_absolutePagePath_private_next_pages_2Fplatforms_2Fyoutube_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(youtube_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(youtube_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(youtube_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(youtube_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(youtube_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(youtube_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(youtube_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(youtube_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(youtube_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(youtube_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(youtube_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/platforms/youtube",
        pathname: "/platforms/youtube",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: youtube_namespaceObject
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

/***/ 2686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TrendingUp)
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
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
];
const TrendingUp = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("TrendingUp", __iconNode);


//# sourceMappingURL=trending-up.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,751,629,421,289,544,557], () => (__webpack_exec__(2626)));
module.exports = __webpack_exports__;

})();