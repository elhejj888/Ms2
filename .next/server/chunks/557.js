"use strict";
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 7623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8302);
/* harmony import */ var modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4710);




function Footer() {
    const currentYear = new Date().getFullYear();
    const footerLinks = [
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Pricing",
            href: "/pricing"
        },
        {
            name: "Privacy Policy",
            href: "/privacy"
        },
        {
            name: "Terms of Service",
            href: "/terms"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-gradient-to-b from-black to-gray-900 border-t border-gray-800/50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-full mx-auto px-3 sm:px-4 lg:px-6 py-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-3 mb-3 md:mb-0 flex-shrink-0 group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                className: "w-4 h-4 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "w-1.5 h-1.5 text-white"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-base font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight",
                                            children: "SocialFlow"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-gray-400 -mt-0.5 font-medium",
                                            children: "AI-Powered Management"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-5",
                            children: footerLinks.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: link.href,
                                    className: "text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20",
                                    children: link.name
                                }, link.name))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-4 pt-4 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-gray-400 text-sm font-medium",
                            children: [
                                "\xa9 ",
                                currentYear,
                                " SocialFlow. All rights reserved."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-3 mt-2 sm:mt-0 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30 backdrop-blur-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-green-300 font-medium",
                                    children: "All systems operational"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9944);
/* harmony import */ var modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5582);
/* harmony import */ var modularize_import_loader_name_LogOut_from_default_as_default_join_esm_icons_log_out_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2088);
/* harmony import */ var modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3958);
/* harmony import */ var modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6465);
/* harmony import */ var modularize_import_loader_name_ChevronDown_from_default_as_default_join_esm_icons_chevron_down_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3424);
/* harmony import */ var modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8302);
/* harmony import */ var modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4710);














function Header() {
    const { user, logout, isAuthenticated } = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .a)();
    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showChannelDropdown, setShowChannelDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showMobileMenu, setShowMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleLogout = async ()=>{
        try {
            const token = localStorage.getItem("access_token");
            if (token) {
                await fetch(`${"http://localhost:5000" || 0}/api/auth/logout`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
            }
            logout();
            setShowDropdown(false);
            router.push("/");
        } catch (error) {
            console.error("Logout error:", error);
            logout();
            setShowDropdown(false);
            router.push("/");
        }
    };
    const platforms = [
        {
            name: "Reddit",
            href: "/platforms/reddit",
            color: "text-orange-400",
            bgColor: "bg-orange-500/20"
        },
        {
            name: "Instagram",
            href: "/platforms/instagram",
            color: "text-pink-400",
            bgColor: "bg-pink-500/20"
        },
        {
            name: "Facebook",
            href: "/platforms/facebook",
            color: "text-blue-400",
            bgColor: "bg-blue-500/20"
        },
        {
            name: "X (Twitter)",
            href: "/platforms/twitter",
            color: "text-gray-300",
            bgColor: "bg-gray-500/20"
        },
        {
            name: "Pinterest",
            href: "/platforms/pinterest",
            color: "text-red-400",
            bgColor: "bg-red-500/20"
        },
        {
            name: "YouTube Shorts",
            href: "/platforms/youtube",
            color: "text-red-400",
            bgColor: "bg-red-500/20"
        }
    ];
    const isLoggedIn = isAuthenticated();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "bg-black/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50 shadow-lg shadow-black/20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-full mx-auto px-3 sm:px-4 lg:px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            className: "flex items-center space-x-3 flex-shrink-0 group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Zap_from_default_as_default_join_esm_icons_zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                className: "w-5 h-5 text-white"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Globe_from_default_as_default_join_esm_icons_globe_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "w-2.5 h-2.5 text-white"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight",
                                            children: "SocialFlow"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-gray-400 -mt-0.5 font-medium tracking-wide",
                                            children: "AI-Powered Management"
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isLoggedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "hidden md:flex items-center space-x-8 flex-1 justify-center max-w-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/blog",
                                    className: "text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20",
                                    children: "Blog"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: ()=>setShowChannelDropdown(!showChannelDropdown),
                                            className: "flex items-center space-x-2 text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Channels"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronDown_from_default_as_default_join_esm_icons_chevron_down_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    className: "w-4 h-4"
                                                })
                                            ]
                                        }),
                                        showChannelDropdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 py-3 z-50",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-700/50",
                                                    children: "Social Platforms"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid grid-cols-2 gap-2 p-3",
                                                    children: platforms.map((platform)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: platform.href,
                                                            className: `flex items-center px-3 py-3 text-sm hover:${platform.bgColor} transition-all duration-300 rounded-xl border border-transparent hover:border-gray-600/50`,
                                                            onClick: ()=>setShowChannelDropdown(false),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `w-3 h-3 rounded-full ${platform.color.replace("text-", "bg-")} mr-3 shadow-lg`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: `${platform.color} font-medium`,
                                                                    children: platform.name
                                                                })
                                                            ]
                                                        }, platform.name))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/pricing",
                                    className: "text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20",
                                    children: "Pricing"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-3 flex-shrink-0",
                            children: [
                                !isLoggedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden md:flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/login",
                                                className: "text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20",
                                                children: "Sign In"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/register",
                                                className: "px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm hover:from-blue-600 hover:to-purple-600 transform hover:scale-105",
                                                children: "Get Started"
                                            })
                                        ]
                                    })
                                }) : /* Logged In User Profile - Modern Dark */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: ()=>setShowDropdown(!showDropdown),
                                            className: "flex items-center space-x-3 p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        className: "w-4 h-4 text-white"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hidden sm:block text-sm font-medium text-gray-300 max-w-24 truncate group-hover:text-white transition-colors",
                                                    children: user?.username || "User"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronDown_from_default_as_default_join_esm_icons_chevron_down_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    className: "w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                                                })
                                            ]
                                        }),
                                        showDropdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "absolute right-0 mt-2 w-52 bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 py-2 z-50",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/profile",
                                                    className: "flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl mx-2 transition-all duration-300 border border-transparent hover:border-white/20",
                                                    onClick: ()=>setShowDropdown(false),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            className: "w-4 h-4 mr-3"
                                                        }),
                                                        "Profile"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: "my-2 mx-2 border-gray-700/50"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: handleLogout,
                                                    className: "flex items-center w-full px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-xl mx-2 transition-all duration-300 border border-transparent hover:border-red-500/30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_LogOut_from_default_as_default_join_esm_icons_log_out_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                            className: "w-4 h-4 mr-3"
                                                        }),
                                                        "Logout"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setShowMobileMenu(!showMobileMenu),
                                    className: "md:hidden p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20",
                                    children: showMobileMenu ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        className: "w-5 h-5"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: "w-5 h-5"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                showMobileMenu && !isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:hidden border-t border-gray-800/50 py-4 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-lg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/blog",
                                className: "text-gray-300 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20",
                                onClick: ()=>setShowMobileMenu(false),
                                children: "Blog"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xs font-bold text-gray-400 uppercase tracking-wider px-4 py-2",
                                        children: "Social Platforms"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-2 gap-2 px-2",
                                        children: platforms.map((platform)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: platform.href,
                                                className: `flex items-center space-x-3 text-sm ${platform.color} hover:bg-white/10 py-3 px-3 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20`,
                                                onClick: ()=>setShowMobileMenu(false),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `w-3 h-3 rounded-full ${platform.color.replace("text-", "bg-")} shadow-lg`
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-medium",
                                                        children: platform.name
                                                    })
                                                ]
                                            }, platform.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/pricing",
                                className: "text-gray-300 hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20",
                                onClick: ()=>setShowMobileMenu(false),
                                children: "Pricing"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-3 pt-4 border-t border-gray-800/50 mt-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/login",
                                        className: "text-center py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-xl mx-2 border border-transparent hover:border-white/20",
                                        onClick: ()=>setShowMobileMenu(false),
                                        children: "Sign In"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/register",
                                        className: "text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mx-2 transform hover:scale-105",
                                        onClick: ()=>setShowMobileMenu(false),
                                        children: "Get Started"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

};
;