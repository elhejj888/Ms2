"use strict";
(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 7120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fprivacy_preferredRegion_absolutePagePath_private_next_pages_2Fprivacy_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/privacy.jsx
var privacy_namespaceObject = {};
__webpack_require__.r(privacy_namespaceObject);
__webpack_require__.d(privacy_namespaceObject, {
  "default": () => (privacy)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
var shield = __webpack_require__(4115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lock.js
var lock = __webpack_require__(2292);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(3857);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/database.js
var database = __webpack_require__(5119);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(4941);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(4710);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(3424);
;// CONCATENATED MODULE: ./src/pages/privacy.jsx













const PrivacyPolicy = ()=>{
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    const [scrollY, setScrollY] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        setIsVisible(true);
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const sections = [
        {
            id: "information-collection",
            title: "Information We Collect",
            icon: /*#__PURE__*/ jsx_runtime.jsx(database/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Personal Information",
                    text: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, and social media account information."
                },
                {
                    subtitle: "Usage Information",
                    text: "We automatically collect information about how you use our services, including your interactions with social media platforms, posting schedules, and analytics data."
                },
                {
                    subtitle: "Social Media Data",
                    text: "When you connect your social media accounts, we access and store necessary data to provide our services, including post content, engagement metrics, and account settings."
                }
            ]
        },
        {
            id: "information-use",
            title: "How We Use Your Information",
            icon: /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Service Provision",
                    text: "We use your information to provide, maintain, and improve our social media management services, including automated posting, analytics, and AI-powered content suggestions."
                },
                {
                    subtitle: "Communication",
                    text: "We may use your contact information to send you service-related notifications, updates, and marketing communications (with your consent)."
                },
                {
                    subtitle: "Analytics and Improvement",
                    text: "We analyze usage patterns to improve our services, develop new features, and provide better user experiences."
                }
            ]
        },
        {
            id: "information-sharing",
            title: "Information Sharing",
            icon: /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Social Media Platforms",
                    text: "We share your content with connected social media platforms as necessary to provide our posting and management services."
                },
                {
                    subtitle: "Service Providers",
                    text: "We may share information with trusted third-party service providers who assist us in operating our platform, subject to confidentiality agreements."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose information when required by law or to protect our rights, users, or the public from harm or illegal activities."
                }
            ]
        },
        {
            id: "data-security",
            title: "Data Security",
            icon: /*#__PURE__*/ jsx_runtime.jsx(lock/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Security Measures",
                    text: "We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits."
                },
                {
                    subtitle: "Access Controls",
                    text: "Access to your personal information is restricted to authorized personnel who need it to provide our services."
                },
                {
                    subtitle: "Data Breach Response",
                    text: "In the event of a data breach, we will notify affected users and relevant authorities as required by applicable laws."
                }
            ]
        },
        {
            id: "user-rights",
            title: "Your Rights",
            icon: /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Access and Correction",
                    text: "You have the right to access, update, or correct your personal information through your account settings or by contacting us."
                },
                {
                    subtitle: "Data Portability",
                    text: "You can request a copy of your data in a portable format or request that we transfer your data to another service provider."
                },
                {
                    subtitle: "Deletion",
                    text: "You can request deletion of your account and associated data. Some information may be retained for legal or legitimate business purposes."
                }
            ]
        },
        {
            id: "international-transfers",
            title: "International Data Transfers",
            icon: /*#__PURE__*/ jsx_runtime.jsx(globe/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Global Operations",
                    text: "Our services operate globally, and your information may be transferred to and processed in countries other than your own."
                },
                {
                    subtitle: "Adequate Protection",
                    text: "We ensure that international transfers are protected by appropriate safeguards, including standard contractual clauses and adequacy decisions."
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Privacy Policy | Social Media Manager"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Learn how Social Media Manager protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://yourdomain.com/privacy"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-h-screen bg-black text-white overflow-x-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "relative min-h-screen flex items-center overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 opacity-20",
                                style: {
                                    backgroundImage: "url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop)",
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
                                                /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 animate-pulse"
                                                }),
                                                "Privacy & Security"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight",
                                            children: [
                                                "Privacy",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse",
                                                    children: "Policy"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed",
                                            children: "Your privacy is important to us. This policy explains how we collect, use, and protect your information."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-lg text-blue-300 mb-20",
                                            children: "Last updated: January 15, 2024"
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
                                                "Table of",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block",
                                                    children: "Contents"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl text-gray-300",
                                            children: "Navigate through our privacy policy sections"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
                                    children: sections.map((section, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: `#${section.id}`,
                                            className: "group relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20",
                                            style: {
                                                animationDelay: `${index * 0.1}s`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-start space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300",
                                                            children: section.icon
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                className: "text-lg font-bold text-white group-hover:text-blue-300 transition-colors",
                                                                children: section.title
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"
                                                })
                                            ]
                                        }, section.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "py-20 bg-gradient-to-b from-gray-900 to-black",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "space-y-32",
                                    children: sections.map((section, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            id: section.id,
                                            className: "scroll-mt-24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-center mb-16",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "inline-flex items-center space-x-4 mb-8",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white",
                                                                children: section.icon
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                                        className: "text-4xl md:text-5xl font-black text-white",
                                                                        children: section.title
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mx-auto"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "grid lg:grid-cols-2 xl:grid-cols-3 gap-8",
                                                    children: section.content.map((item, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10",
                                                            style: {
                                                                animationDelay: `${itemIndex * 0.2}s`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                    className: "text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                                                    children: item.subtitle
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-gray-300 leading-relaxed text-lg",
                                                                    children: item.text
                                                                })
                                                            ]
                                                        }, itemIndex))
                                                })
                                            ]
                                        }, section.id))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/20 text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "text-4xl md:text-5xl font-black text-white mb-6",
                                            children: [
                                                "Questions About",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block",
                                                    children: "This Policy?"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl text-gray-300 mb-12 max-w-3xl mx-auto",
                                            children: "If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "mailto:privacy@yourdomain.com",
                                                    className: "group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center text-lg",
                                                    children: "Contact Privacy Team"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact",
                                                    className: "px-10 py-5 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg",
                                                    children: "General Contact"
                                                })
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
/* harmony default export */ const privacy = (PrivacyPolicy);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fprivacy&preferredRegion=&absolutePagePath=private-next-pages%2Fprivacy.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fprivacy_preferredRegion_absolutePagePath_private_next_pages_2Fprivacy_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(privacy_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(privacy_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(privacy_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(privacy_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(privacy_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(privacy_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(privacy_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(privacy_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(privacy_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(privacy_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(privacy_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/privacy",
        pathname: "/privacy",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: privacy_namespaceObject
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,436,794,544,557], () => (__webpack_exec__(7120)));
module.exports = __webpack_exports__;

})();