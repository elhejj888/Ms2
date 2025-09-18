"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 6189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fterms_preferredRegion_absolutePagePath_private_next_pages_2Fterms_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/terms.jsx
var terms_namespaceObject = {};
__webpack_require__.r(terms_namespaceObject);
__webpack_require__.d(terms_namespaceObject, {
  "default": () => (terms)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
var file_text = __webpack_require__(8543);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/scale.js
var scale = __webpack_require__(3802);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(2386);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(4941);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(8302);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(4710);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(3424);
;// CONCATENATED MODULE: ./src/pages/terms.jsx













const TermsOfService = ()=>{
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
            id: "acceptance",
            title: "Acceptance of Terms",
            icon: /*#__PURE__*/ jsx_runtime.jsx(file_text/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Agreement to Terms",
                    text: "By accessing and using Social Media Manager, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
                },
                {
                    subtitle: "Updates to Terms",
                    text: "We reserve the right to update these terms at any time. We will notify users of significant changes via email or through our platform. Your continued use of the service constitutes acceptance of the updated terms."
                }
            ]
        },
        {
            id: "service-description",
            title: "Service Description",
            icon: /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Platform Overview",
                    text: "Social Media Manager is a comprehensive platform that allows users to manage multiple social media accounts, schedule posts, analyze performance, and automate content creation across various platforms including Reddit, Facebook, Instagram, X (Twitter), Pinterest, and TikTok."
                },
                {
                    subtitle: "AI-Powered Features",
                    text: "Our service includes AI-powered content generation, automated posting, analytics dashboards, and intelligent scheduling features designed to streamline your social media management workflow."
                },
                {
                    subtitle: "Service Availability",
                    text: "We strive to maintain 99.9% uptime, but cannot guarantee uninterrupted service. Scheduled maintenance and updates may temporarily affect service availability."
                }
            ]
        },
        {
            id: "user-responsibilities",
            title: "User Responsibilities",
            icon: /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Account Security",
                    text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
                },
                {
                    subtitle: "Content Compliance",
                    text: "You are solely responsible for the content you create, schedule, and publish through our platform. You must ensure all content complies with applicable laws and the terms of service of connected social media platforms."
                },
                {
                    subtitle: "Prohibited Activities",
                    text: "You may not use our service for spam, harassment, illegal activities, or to violate the terms of service of connected social media platforms. We reserve the right to suspend accounts that engage in prohibited activities."
                }
            ]
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property",
            icon: /*#__PURE__*/ jsx_runtime.jsx(scale/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Our Rights",
                    text: "Social Media Manager and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
                },
                {
                    subtitle: "User Content",
                    text: "You retain ownership of content you create and upload to our platform. By using our service, you grant us a limited license to process, store, and distribute your content as necessary to provide our services."
                },
                {
                    subtitle: "Third-Party Content",
                    text: "Our platform may include content from third parties. We do not claim ownership of such content and respect the intellectual property rights of others."
                }
            ]
        },
        {
            id: "payment-terms",
            title: "Payment and Billing",
            icon: /*#__PURE__*/ jsx_runtime.jsx(globe/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Subscription Plans",
                    text: "We offer various subscription plans with different features and usage limits. Pricing and plan details are available on our website and may be updated from time to time."
                },
                {
                    subtitle: "Billing Cycle",
                    text: "Subscription fees are billed in advance on a monthly or annual basis, depending on your chosen plan. Payments are processed automatically using your selected payment method."
                },
                {
                    subtitle: "Refund Policy",
                    text: "We offer a 30-day money-back guarantee for new subscribers. Refund requests must be submitted within 30 days of initial subscription. Partial refunds for unused portions of subscription periods are not available."
                },
                {
                    subtitle: "Cancellation",
                    text: "You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period, and you will retain access to paid features until then."
                }
            ]
        },
        {
            id: "limitation-liability",
            title: "Limitation of Liability",
            icon: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Service Limitations",
                    text: 'Our service is provided "as is" without warranties of any kind. We do not guarantee that the service will meet your specific requirements or that it will be uninterrupted, timely, secure, or error-free.'
                },
                {
                    subtitle: "Liability Cap",
                    text: "In no event shall Social Media Manager be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
                },
                {
                    subtitle: "Maximum Liability",
                    text: "Our total liability to you for any damages arising from or related to this agreement shall not exceed the amount you paid us in the twelve (12) months preceding the event giving rise to the liability."
                }
            ]
        },
        {
            id: "termination",
            title: "Termination",
            icon: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                className: "w-6 h-6"
            }),
            content: [
                {
                    subtitle: "Termination by User",
                    text: "You may terminate your account at any time by canceling your subscription and deleting your account through the platform settings."
                },
                {
                    subtitle: "Termination by Us",
                    text: "We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties."
                },
                {
                    subtitle: "Effect of Termination",
                    text: "Upon termination, your right to use the service will cease immediately. We may delete your account data after a reasonable period, subject to applicable data retention requirements."
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Terms of Service | Social Media Manager"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Read our Terms of Service to understand your rights and responsibilities when using Social Media Manager platform."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://yourdomain.com/terms"
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
                                    backgroundImage: "url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop)",
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
                                                /*#__PURE__*/ jsx_runtime.jsx(scale/* default */.Z, {
                                                    className: "w-4 h-4 mr-2 animate-pulse"
                                                }),
                                                "Legal Terms"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight",
                                            children: [
                                                "Terms of",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block animate-pulse",
                                                    children: "Service"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed",
                                            children: "These terms govern your use of Social Media Manager and outline our mutual rights and responsibilities."
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
                                            children: "Navigate through our terms of service sections"
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
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mt-32 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-start space-x-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                                    className: "w-8 h-8 text-white"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-3xl font-black text-white mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent",
                                                        children: "Important Notice"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-300 mb-6 text-lg leading-relaxed",
                                                        children: "These terms constitute a legally binding agreement between you and Social Media Manager. Please read them carefully and contact us if you have any questions before using our service."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-400 text-lg",
                                                        children: "By using our service, you acknowledge that you have read, understood, and agree to be bound by these terms."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
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
                                                    children: "These Terms?"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl text-gray-300 mb-12 max-w-3xl mx-auto",
                                            children: "If you have any questions about these Terms of Service or need clarification on any provision, please contact our legal team."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "mailto:legal@yourdomain.com",
                                                    className: "group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center text-lg",
                                                    children: "Contact Legal Team"
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
/* harmony default export */ const terms = (TermsOfService);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fterms&preferredRegion=&absolutePagePath=private-next-pages%2Fterms.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fterms_preferredRegion_absolutePagePath_private_next_pages_2Fterms_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(terms_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(terms_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(terms_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(terms_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(terms_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(terms_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(terms_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(terms_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(terms_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(terms_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(terms_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/terms",
        pathname: "/terms",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: terms_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [769,436,775,544,557], () => (__webpack_exec__(6189)));
module.exports = __webpack_exports__;

})();