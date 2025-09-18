"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 7437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Flogin_preferredRegion_absolutePagePath_private_next_pages_2Flogin_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/login.jsx
var login_namespaceObject = {};
__webpack_require__.r(login_namespaceObject);
__webpack_require__.d(login_namespaceObject, {
  "default": () => (Login)
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/context/UserContext.js
var UserContext = __webpack_require__(9944);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lock.js
var lock = __webpack_require__(2292);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(5429);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(6961);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(7788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(2705);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
var shield = __webpack_require__(4115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(3857);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(1621);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(1572);
// EXTERNAL MODULE: ./src/components/Footer.jsx
var Footer = __webpack_require__(7623);
;// CONCATENATED MODULE: ./src/pages/login.jsx
// pages/login.jsx - Modern design matching landing page with visible footer















// Add the API base URL constant
const apiBaseUrl = "http://localhost:5000" || 0;
function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [showPassword, setShowPassword] = (0,external_react_.useState)(false);
    const [error, setError] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { login, isAuthenticated, loading: authLoading, isInitialized } = (0,UserContext/* useUser */.a)();
    // Redirect if already authenticated
    (0,external_react_.useEffect)(()=>{
        if (isInitialized && isAuthenticated()) {
            router.push("/");
        }
    }, [
        isAuthenticated,
        isInitialized,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username_or_email: usernameOrEmail,
                    password
                })
            });
            const data = await response.json();
            console.log("Login response:", data);
            if (response.ok) {
                // Use context login function which handles token and user data storage
                login(data.user, data.access_token);
                // Redirect to home
                router.push("/");
            } else {
                setError(data.error || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Network error. Please check your connection and try again.");
        } finally{
            setLoading(false);
        }
    };
    // Show loading spinner while checking auth state
    if (authLoading || !isInitialized) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "min-h-screen bg-black flex items-center justify-center relative overflow-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute inset-0 opacity-10",
                    style: {
                        backgroundImage: "url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-6"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-gray-300 text-xl",
                            children: "Loading..."
                        })
                    ]
                })
            ]
        });
    }
    // Don't render login form if already authenticated
    if (isAuthenticated()) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-black text-white relative overflow-hidden flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: "url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "2s"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative flex-grow flex items-center justify-center p-4 py-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full max-w-lg",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "Secure Login"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "text-4xl md:text-6xl font-black text-white mb-4 leading-tight",
                                    children: [
                                        "Welcome",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block",
                                            children: "back"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-300 max-w-md mx-auto",
                                    children: "Sign in to continue managing your social media like a pro"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl",
                            children: [
                                error && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mb-8 p-6 bg-red-500/10 border border-red-500/20 text-red-300 rounded-2xl flex items-start backdrop-blur-lg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(circle_alert/* default */.Z, {
                                            className: "w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-lg",
                                            children: error
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    htmlFor: "usernameOrEmail",
                                                    className: "block text-lg font-semibold text-white",
                                                    children: "Username or Email"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(mail/* default */.Z, {
                                                                className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            id: "usernameOrEmail",
                                                            name: "usernameOrEmail",
                                                            type: "text",
                                                            required: true,
                                                            value: usernameOrEmail,
                                                            onChange: (e)=>setUsernameOrEmail(e.target.value),
                                                            className: "block w-full pl-14 pr-4 py-5 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                            placeholder: "john.doe@example.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    htmlFor: "password",
                                                    className: "block text-lg font-semibold text-white",
                                                    children: "Password"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(lock/* default */.Z, {
                                                                className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            id: "password",
                                                            name: "password",
                                                            type: showPassword ? "text" : "password",
                                                            required: true,
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            className: "block w-full pl-14 pr-14 py-5 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                            placeholder: "••••••••"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            className: "absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors",
                                                            children: showPassword ? /*#__PURE__*/ jsx_runtime.jsx(eye_off/* default */.Z, {
                                                                className: "h-6 w-6"
                                                            }) : /*#__PURE__*/ jsx_runtime.jsx(eye/* default */.Z, {
                                                                className: "h-6 w-6"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            id: "remember-me",
                                                            name: "remember-me",
                                                            type: "checkbox",
                                                            className: "h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "remember-me",
                                                            className: "text-lg text-gray-300",
                                                            children: "Remember me"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/forgot-password",
                                                        className: "text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors",
                                                        children: "Forgot password?"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pt-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: "group w-full flex justify-center items-center py-5 px-8 border border-transparent rounded-2xl text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105",
                                                children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                            className: "animate-spin -ml-1 mr-4 h-6 w-6 text-white",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                    className: "opacity-25",
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "4"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                })
                                                            ]
                                                        }),
                                                        "Signing in..."
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        "Sign in",
                                                        /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                            className: "w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mt-8 text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-lg text-gray-300",
                                        children: [
                                            "Don't have an account?",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/register",
                                                className: "font-semibold text-blue-400 hover:text-blue-300 transition-colors",
                                                children: "Sign up"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mt-10 pt-8 border-t border-white/10",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-3 gap-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(shield/* default */.Z, {
                                                            className: "w-6 h-6 text-blue-400"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: "Secure"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                                            className: "w-6 h-6 text-purple-400"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: "AI Powered"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(arrow_right/* default */.Z, {
                                                            className: "w-6 h-6 text-pink-400"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: "Fast Setup"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mt-8 text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-400 text-sm mb-4",
                                    children: "Trusted by 10,000+ creators worldwide"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center space-x-8 opacity-60",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "\uD83D\uDD12 SSL Secured"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "⚡ 99.9% Uptime"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "\uD83D\uDEE1️ Privacy Protected"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative mt-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Flogin&preferredRegion=&absolutePagePath=private-next-pages%2Flogin.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Flogin_preferredRegion_absolutePagePath_private_next_pages_2Flogin_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(login_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(login_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(login_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(login_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(login_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(login_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/login",
        pathname: "/login",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: login_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,16,805,544,557], () => (__webpack_exec__(7437)));
module.exports = __webpack_exports__;

})();