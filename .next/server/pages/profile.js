"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 9987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fprofile_preferredRegion_absolutePagePath_private_next_pages_2Fprofile_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/profile.jsx
var profile_namespaceObject = {};
__webpack_require__.r(profile_namespaceObject);
__webpack_require__.d(profile_namespaceObject, {
  "default": () => (Profile)
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
// EXTERNAL MODULE: ./src/context/UserContext.js
var UserContext = __webpack_require__(9944);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var icons_user = __webpack_require__(5582);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(5429);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(7823);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(6880);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(6796);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-pen.js
var square_pen = __webpack_require__(9829);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/save.js
var save = __webpack_require__(3275);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(6465);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lock.js
var lock = __webpack_require__(2292);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(6961);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(8946);
// EXTERNAL MODULE: ./src/components/Header.jsx
var Header = __webpack_require__(1572);
// EXTERNAL MODULE: ./src/components/Footer.jsx
var Footer = __webpack_require__(7623);
;// CONCATENATED MODULE: ./src/pages/profile.jsx
// pages/profile.jsx
















// Add the API base URL constant
const apiBaseUrl = "http://localhost:5000" || 0;
function Profile() {
    const { user, setUser } = (0,UserContext/* useUser */.a)();
    const [editMode, setEditMode] = (0,external_react_.useState)(false);
    const [formData, setFormData] = (0,external_react_.useState)({});
    const [previewImage, setPreviewImage] = (0,external_react_.useState)(null);
    const [selectedFile, setSelectedFile] = (0,external_react_.useState)(null);
    const [error, setError] = (0,external_react_.useState)("");
    const [success, setSuccess] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [passwordData, setPasswordData] = (0,external_react_.useState)({
        current_password: "",
        new_password: ""
    });
    const [scrollY, setScrollY] = (0,external_react_.useState)(0);
    // Ref for form to access form elements
    const formRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (user) {
            setFormData({
                email: user.email || "",
                country: user.country || "",
                age: user.age || "",
                phone_number: user.phone_number || "",
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                bio: user.bio || ""
            });
            setPreviewImage(user.profile_picture ? `${apiBaseUrl}/uploads/${user.profile_picture}` : null);
        }
    }, [
        user
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handlePasswordChange = (e)=>{
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
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
            // Store the file
            setSelectedFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            setError("");
        }
    };
    // Updated handleSubmit function for pages/profile.jsx
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        // Get token and check if it exists
        const token = localStorage.getItem("access_token");
        if (!token) {
            setError("Please log in again");
            setLoading(false);
            return;
        }
        const formDataToSend = new FormData();
        // Add form data
        for(const key in formData){
            if (formData[key] !== null && formData[key] !== "") {
                formDataToSend.append(key, formData[key]);
            }
        }
        // Add profile picture if selected
        if (selectedFile) {
            formDataToSend.append("profile_picture", selectedFile);
        }
        // Add password fields if they exist and are not empty
        if (passwordData.current_password) {
            formDataToSend.append("current_password", passwordData.current_password);
        }
        if (passwordData.new_password) {
            formDataToSend.append("new_password", passwordData.new_password);
        }
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/profile`, {
                method: "PUT",
                body: formDataToSend,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                setSuccess("Profile updated successfully");
                setEditMode(false);
                setSelectedFile(null);
                setPasswordData({
                    current_password: "",
                    new_password: ""
                });
            } else {
                // Handle specific error cases
                if (response.status === 401) {
                    setError("Session expired. Please log in again.");
                    // Optional: redirect to login page
                    localStorage.removeItem("access_token");
                    setUser(null);
                } else {
                    setError(data.error || "Update failed");
                }
            }
        } catch (err) {
            console.error("Profile update error:", err);
            setError("An error occurred during update. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    if (!user) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "min-h-screen bg-black text-white flex items-center justify-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute inset-0 opacity-20",
                    style: {
                        backgroundImage: "url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-blue-900/50 via-black/70 to-purple-900/50"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative text-center p-12 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-3xl font-black text-white mb-6",
                            children: "Please log in to view your profile"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "/login",
                            className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105",
                            children: "Go to Login"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-black text-white overflow-x-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed inset-0 opacity-10",
                style: {
                    backgroundImage: "url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: `translateY(${scrollY * 0.3}px)`
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed inset-0 bg-gradient-to-br from-blue-900/30 via-black/90 to-purple-900/30"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative container mx-auto px-4 py-16",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "max-w-5xl mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "absolute inset-0 bg-black/20"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "relative",
                                                        children: [
                                                            previewImage ? /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: previewImage,
                                                                alt: "Profile",
                                                                className: "w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                                                            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center border-4 border-white shadow-2xl",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_user/* default */.Z, {
                                                                    className: "w-12 h-12 md:w-16 md:h-16 text-white"
                                                                })
                                                            }),
                                                            editMode && /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                                className: "absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        type: "file",
                                                                        onChange: handleFileChange,
                                                                        className: "hidden",
                                                                        accept: "image/png,image/jpg,image/jpeg,image/gif"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx(square_pen/* default */.Z, {
                                                                        className: "w-5 h-5 text-white"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text-center md:text-left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                                className: "text-3xl md:text-4xl font-black text-white mb-2",
                                                                children: user.first_name || user.last_name ? `${user.first_name || ""} ${user.last_name || ""}` : user.username
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                className: "text-xl text-blue-200 mb-2",
                                                                children: [
                                                                    "@",
                                                                    user.username
                                                                ]
                                                            }),
                                                            user.bio && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-white/90 max-w-md",
                                                                children: user.bio
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex-shrink-0",
                                                children: editMode ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            onClick: ()=>{
                                                                setEditMode(false);
                                                                setSelectedFile(null);
                                                                setPasswordData({
                                                                    current_password: "",
                                                                    new_password: ""
                                                                });
                                                                setPreviewImage(user.profile_picture ? `${apiBaseUrl}/uploads/${user.profile_picture}` : null);
                                                            },
                                                            className: "p-3 bg-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110",
                                                            title: "Cancel",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(x/* default */.Z, {
                                                                className: "w-6 h-6 text-white"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            onClick: handleSubmit,
                                                            disabled: loading,
                                                            className: "p-3 bg-white rounded-2xl text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl",
                                                            title: "Save",
                                                            children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                                className: "animate-spin h-6 w-6",
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
                                                            }) : /*#__PURE__*/ jsx_runtime.jsx(save/* default */.Z, {
                                                                className: "w-6 h-6"
                                                            })
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>setEditMode(true),
                                                    className: "group p-3 bg-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110",
                                                    title: "Edit Profile",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(square_pen/* default */.Z, {
                                                        className: "w-6 h-6 text-white group-hover:rotate-12 transition-transform"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "p-8",
                                children: [
                                    error && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mb-8 p-6 bg-red-500/20 backdrop-blur-lg text-red-300 rounded-2xl flex items-start border border-red-500/30",
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
                                    success && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mb-8 p-6 bg-green-500/20 backdrop-blur-lg text-green-300 rounded-2xl flex items-start border border-green-500/30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(circle_check_big/* default */.Z, {
                                                className: "w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-lg",
                                                children: success
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        ref: formRef,
                                        onSubmit: handleSubmit,
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "email",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(mail/* default */.Z, {
                                                                            className: "h-6 w-6 text-blue-400"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        id: "email",
                                                                        name: "email",
                                                                        type: "email",
                                                                        value: formData.email,
                                                                        onChange: handleChange,
                                                                        disabled: !editMode,
                                                                        className: `block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "phone_number",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "Phone Number"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(phone/* default */.Z, {
                                                                            className: "h-6 w-6 text-blue-400"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        id: "phone_number",
                                                                        name: "phone_number",
                                                                        type: "tel",
                                                                        value: formData.phone_number,
                                                                        onChange: handleChange,
                                                                        disabled: !editMode,
                                                                        className: `block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "first_name",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "First Name"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                id: "first_name",
                                                                name: "first_name",
                                                                type: "text",
                                                                value: formData.first_name,
                                                                onChange: handleChange,
                                                                disabled: !editMode,
                                                                className: `block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "last_name",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "Last Name"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                id: "last_name",
                                                                name: "last_name",
                                                                type: "text",
                                                                value: formData.last_name,
                                                                onChange: handleChange,
                                                                disabled: !editMode,
                                                                className: `block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "country",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "Country"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(map_pin/* default */.Z, {
                                                                            className: "h-6 w-6 text-blue-400"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        id: "country",
                                                                        name: "country",
                                                                        type: "text",
                                                                        value: formData.country,
                                                                        onChange: handleChange,
                                                                        disabled: !editMode,
                                                                        className: `block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "age",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "Age"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(calendar/* default */.Z, {
                                                                            className: "h-6 w-6 text-blue-400"
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
                                                                        disabled: !editMode,
                                                                        className: `block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300`
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "md:col-span-2 group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                htmlFor: "bio",
                                                                className: "block text-lg font-bold text-white mb-3",
                                                                children: "Biography"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                id: "bio",
                                                                name: "bio",
                                                                rows: "4",
                                                                value: formData.bio,
                                                                onChange: handleChange,
                                                                disabled: !editMode,
                                                                className: `block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border ${editMode ? "border-blue-500/50 focus:border-blue-400" : "border-white/20"} rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white text-lg transition-all duration-300 resize-none`,
                                                                placeholder: "Tell us about yourself..."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            editMode && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "pt-8 border-t border-white/20",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                            className: "text-2xl font-black text-white mb-6 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mr-4",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx(lock/* default */.Z, {
                                                                        className: "w-6 h-6 text-blue-400"
                                                                    })
                                                                }),
                                                                "Change Password"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "group",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            htmlFor: "current_password",
                                                                            className: "block text-lg font-bold text-white mb-3",
                                                                            children: "Current Password"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            id: "current_password",
                                                                            name: "current_password",
                                                                            type: "password",
                                                                            value: passwordData.current_password,
                                                                            onChange: handlePasswordChange,
                                                                            className: "block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-blue-500/50 rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white text-lg transition-all duration-300",
                                                                            placeholder: "••••••••"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "group",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            htmlFor: "new_password",
                                                                            className: "block text-lg font-bold text-white mb-3",
                                                                            children: "New Password"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            id: "new_password",
                                                                            name: "new_password",
                                                                            type: "password",
                                                                            value: passwordData.new_password,
                                                                            onChange: handlePasswordChange,
                                                                            className: "block w-full px-4 py-4 bg-white/10 backdrop-blur-lg border border-blue-500/50 rounded-2xl shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white text-lg transition-all duration-300",
                                                                            placeholder: "••••••••"
                                                                        })
                                                                    ]
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
                        ]
                    })
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fprofile&preferredRegion=&absolutePagePath=private-next-pages%2Fprofile.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fprofile_preferredRegion_absolutePagePath_private_next_pages_2Fprofile_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(profile_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(profile_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(profile_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(profile_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(profile_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(profile_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(profile_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(profile_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(profile_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(profile_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(profile_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/profile",
        pathname: "/profile",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: profile_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [769,436,16,924,708,544,557], () => (__webpack_exec__(9987)));
module.exports = __webpack_exports__;

})();