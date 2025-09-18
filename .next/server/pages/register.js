"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 9932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fregister_preferredRegion_absolutePagePath_private_next_pages_2Fregister_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/register.jsx
var register_namespaceObject = {};
__webpack_require__.r(register_namespaceObject);
__webpack_require__.d(register_namespaceObject, {
  "default": () => (Register)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(5582);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(5429);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lock.js
var lock = __webpack_require__(2292);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(7823);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(6880);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(6796);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(6961);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(7788);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(2705);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(1572);
// EXTERNAL MODULE: ./src/components/Footer.jsx
var Footer = __webpack_require__(7623);
;// CONCATENATED MODULE: ./src/pages/register.jsx
// pages/register.jsx - Modern design matching landing page

















// Add the API base URL constant
const apiBaseUrl = "http://localhost:5000" || 0;
function Register() {
    const [formData, setFormData] = (0,external_react_.useState)({
        username: "",
        email: "",
        password: "",
        role: "user",
        admin_code: "",
        country: "",
        age: "",
        phone_number: "",
        first_name: "",
        last_name: "",
        bio: "",
        profile_picture: null
    });
    const [previewImage, setPreviewImage] = (0,external_react_.useState)(null);
    const [error, setError] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { setUser } = (0,UserContext/* useUser */.a)();
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            // Validate file size (16MB limit)
            if (file.size > 16 * 1024 * 1024) {
                setError("File size must be less than 16MB");
                return;
            }
            // Validate file type
            const allowedTypes = [
                "image/png",
                "image/jpg",
                "image/jpeg",
                "image/gif"
            ];
            if (!allowedTypes.includes(file.type)) {
                setError("Only PNG, JPG, JPEG, and GIF files are allowed");
                return;
            }
            setFormData({
                ...formData,
                profile_picture: file
            });
            // Create preview
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            setError(""); // Clear any previous errors
        }
    };
    const validateForm = ()=>{
        // Client-side validation
        if (!formData.username.trim()) {
            setError("Username is required");
            return false;
        }
        if (!formData.email.trim()) {
            setError("Email is required");
            return false;
        }
        if (!formData.password.trim()) {
            setError("Password is required");
            return false;
        }
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        // Role validation
        const allowedRoles = [
            "user",
            "admin"
        ];
        if (!allowedRoles.includes((formData.role || "").toLowerCase())) {
            setError("Invalid role selected");
            return false;
        }
        // Admin code is required if role is admin
        if ((formData.role || "").toLowerCase() === "admin" && !formData.admin_code.trim()) {
            setError("Admin code is required for Admin role");
            return false;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address");
            return false;
        }
        // Age validation
        if (formData.age) {
            const age = parseInt(formData.age);
            if (isNaN(age) || age < 13 || age > 120) {
                setError("Age must be between 13 and 120");
                return false;
            }
        }
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        // Client-side validation
        if (!validateForm()) {
            setLoading(false);
            return;
        }
        const formDataToSend = new FormData();
        // Add all form fields
        Object.keys(formData).forEach((key)=>{
            if (formData[key] !== null && formData[key] !== "") {
                formDataToSend.append(key, formData[key]);
            }
        });
        // Debug: Log what we're sending
        console.log("Sending registration data:", Object.fromEntries(formDataToSend));
        try {
            // Fixed: Use apiBaseUrl instead of hardcoded path
            const response = await fetch(`${apiBaseUrl}/api/auth/register`, {
                method: "POST",
                body: formDataToSend
            });
            const data = await response.json();
            console.log("Registration response:", data);
            if (response.ok) {
                // Save user data and token
                if (data.access_token) {
                    localStorage.setItem("access_token", data.access_token);
                }
                setUser(data.user);
                router.push("/");
            } else {
                setError(data.error || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
            setError("Network error. Please check your connection and try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-black text-white relative overflow-visible",
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
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative flex-grow flex items-center justify-center p-4 py-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-blue-300 mb-8 border border-blue-500/20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(sparkles/* default */.Z, {
                                            className: "w-4 h-4 mr-2 animate-pulse"
                                        }),
                                        "Join the Community"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                    className: "text-4xl md:text-6xl font-black text-white mb-4 leading-tight",
                                    children: [
                                        "Start your journey",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block",
                                            children: "today"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-300 max-w-2xl mx-auto",
                                    children: "Create your account and join thousands of creators managing their social media like pros"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl",
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
                                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "username",
                                                            className: "block text-lg font-semibold text-white",
                                                            children: "Username*"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                                        className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    id: "username",
                                                                    name: "username",
                                                                    type: "text",
                                                                    required: true,
                                                                    value: formData.username,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                                    placeholder: "johndoe"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "email",
                                                            className: "block text-lg font-semibold text-white",
                                                            children: "Email*"
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
                                                                    id: "email",
                                                                    name: "email",
                                                                    type: "email",
                                                                    required: true,
                                                                    value: formData.email,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
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
                                                            children: "Password*"
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
                                                                    type: "password",
                                                                    required: true,
                                                                    minLength: "6",
                                                                    value: formData.password,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                                    placeholder: "••••••••"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "role",
                                                            className: "block text-lg font-semibold text-white",
                                                            children: "Role*"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative group z-50 overflow-visible",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                                        className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                    id: "role",
                                                                    name: "role",
                                                                    required: true,
                                                                    value: formData.role,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-10 py-4 bg-gray-900/80 text-white border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg relative z-50",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                            value: "user",
                                                                            children: "User"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                            value: "admin",
                                                                            children: "Admin"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (formData.role || "").toLowerCase() === "admin" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "admin_code",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Admin Code"
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
                                                                    id: "admin_code",
                                                                    name: "admin_code",
                                                                    type: "text",
                                                                    value: formData.admin_code,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                                    placeholder: "Enter admin code"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "phone_number",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Phone Number"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(phone/* default */.Z, {
                                                                        className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    id: "phone_number",
                                                                    name: "phone_number",
                                                                    type: "tel",
                                                                    value: formData.phone_number,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                                    placeholder: "+1234567890"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "first_name",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "First Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            id: "first_name",
                                                            name: "first_name",
                                                            type: "text",
                                                            value: formData.first_name,
                                                            onChange: handleChange,
                                                            className: "block w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                            placeholder: "John"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "last_name",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Last Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            id: "last_name",
                                                            name: "last_name",
                                                            type: "text",
                                                            value: formData.last_name,
                                                            onChange: handleChange,
                                                            className: "block w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                            placeholder: "Doe"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "country",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Country"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(map_pin/* default */.Z, {
                                                                        className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    id: "country",
                                                                    name: "country",
                                                                    type: "text",
                                                                    value: formData.country,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                                    placeholder: "United States"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "age",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Age"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                                        className: "h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    id: "age",
                                                                    name: "age",
                                                                    type: "number",
                                                                    min: "13",
                                                                    max: "120",
                                                                    value: formData.age,
                                                                    onChange: handleChange,
                                                                    className: "block w-full pl-14 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm",
                                                                    placeholder: "25"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "lg:col-span-2 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "bio",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Bio"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                            id: "bio",
                                                            name: "bio",
                                                            rows: "4",
                                                            value: formData.bio,
                                                            onChange: handleChange,
                                                            className: "block w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg backdrop-blur-sm resize-none",
                                                            placeholder: "Tell us about yourself..."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "lg:col-span-2 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                            htmlFor: "profile_picture",
                                                            className: "block text-lg font-semibold text-gray-300",
                                                            children: "Profile Picture"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center space-x-6",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "flex-shrink-0",
                                                                    children: previewImage ? /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        className: "h-24 w-24 rounded-full object-cover border-4 border-blue-500/50 shadow-lg shadow-blue-500/20",
                                                                        src: previewImage,
                                                                        alt: "Profile preview"
                                                                    }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "h-24 w-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-gray-400",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                                            className: "h-12 w-12"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                                            className: "cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "inline-block px-8 py-4 bg-white/10 border border-white/20 rounded-2xl text-lg font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all backdrop-blur-sm",
                                                                                    children: "Choose file"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                    id: "profile_picture",
                                                                                    name: "profile_picture",
                                                                                    type: "file",
                                                                                    accept: "image/png,image/jpg,image/jpeg,image/gif",
                                                                                    onChange: handleFileChange,
                                                                                    className: "sr-only"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                            className: "mt-2 text-gray-400",
                                                                            children: "PNG, JPG, GIF up to 16MB"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-start space-x-4 p-6 bg-white/5 rounded-2xl border border-white/10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    id: "terms",
                                                    name: "terms",
                                                    type: "checkbox",
                                                    required: true,
                                                    className: "h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded mt-1"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    htmlFor: "terms",
                                                    className: "text-gray-300 text-lg leading-relaxed",
                                                    children: [
                                                        "I agree to the",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            className: "text-blue-400 hover:text-blue-300 font-semibold transition-colors",
                                                            children: "Terms of Service"
                                                        }),
                                                        " ",
                                                        "and",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            className: "text-blue-400 hover:text-blue-300 font-semibold transition-colors",
                                                            children: "Privacy Policy"
                                                        })
                                                    ]
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
                                                        "Creating Account..."
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        "Create Account",
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
                                            "Already have an account?",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/login",
                                                className: "font-semibold text-blue-400 hover:text-blue-300 transition-colors",
                                                children: "Sign in"
                                            })
                                        ]
                                    })
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fregister&preferredRegion=&absolutePagePath=private-next-pages%2Fregister.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fregister_preferredRegion_absolutePagePath_private_next_pages_2Fregister_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(register_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(register_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(register_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(register_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(register_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(register_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(register_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(register_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(register_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(register_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(register_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/register",
        pathname: "/register",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: register_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [769,436,718,16,924,544,557], () => (__webpack_exec__(9932)));
module.exports = __webpack_exports__;

})();