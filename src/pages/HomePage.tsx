// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';


const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check system preference
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        // Listen for changes
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        darkModeMediaQuery.addEventListener('change', handleChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleLoginClick = () => {
        navigate('/login');
        console.log('Navigate to login page');
    };

    return (
        <div className={`font-['Plus_Jakarta_Sans',_sans-serif] ${isDarkMode ? 'dark bg-gray-900 text-gray-50' : 'bg-gray-50 text-gray-800'} overflow-hidden`}>
            {/* Header - With animation */}
            <motion.header
                initial={shouldReduceMotion ? {} : {y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.3}}
                className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}
            >
                <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{scale: 1.05}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <span className="text-2xl font-bold text-blue-600 tracking-tight">Edu Center</span>
                    </motion.div>
                    <motion.button
                        whileHover={{scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"}}
                        whileTap={{scale: 0.95}}
                        className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full transition-all duration-300 hover:bg-blue-700"
                        onClick={handleLoginClick}
                    >
                        Đăng nhập
                    </motion.button>
                </div>
            </motion.header>

            {/* Hero Section - Enhanced with animations */}
            <section className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-20 md:py-28`}>
                {/* Decorative elements with subtle animations */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                    <motion.div
                        animate={shouldReduceMotion ? {} : {
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className={`absolute w-96 h-96 rounded-full ${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-300/20'} -top-20 -right-20 blur-3xl`}
                    ></motion.div>
                    <motion.div
                        animate={shouldReduceMotion ? {} : {
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                        }}
                        className={`absolute w-96 h-96 rounded-full ${isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-300/20'} bottom-0 -left-20 blur-3xl`}
                    ></motion.div>
                </div>

                <div className="container relative z-10 px-6 mx-auto">
                    <div className="flex flex-col items-center gap-16 md:flex-row">
                        {/* Content Column - Enhanced typography with animations */}
                        <motion.div
                            initial={shouldReduceMotion ? {opacity: 1} : {opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            className="md:w-1/2 text-center md:text-left"
                        >
                            <motion.h1
                                initial={shouldReduceMotion ? {} : {opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4}}
                                className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                            >
                                <span className="text-blue-600">Khám phá</span> tiềm năng <br
                                className="hidden md:block"/>
                                cùng <span className="text-indigo-600">Edu Center</span>
                            </motion.h1>

                            <motion.p
                                initial={shouldReduceMotion ? {} : {opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: 0.1}}
                                className={`mb-8 text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} md:text-xl font-normal`}
                            >
                                Môi trường học tập hiện đại, năng động giúp khơi nguồn tri thức và phát triển tương lai
                                bền vững cho mọi học viên.
                            </motion.p>

                            <motion.div
                                initial={shouldReduceMotion ? {} : {opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: 0.2}}
                                className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
                            >
                                <motion.button
                                    whileHover={{scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"}}
                                    whileTap={{scale: 0.95}}
                                    className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-200"
                                    onClick={handleLoginClick}>
                                    Khám phá khóa học
                                </motion.button>
                                <motion.button
                                    whileHover={{scale: 1.05, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.15)"}}
                                    whileTap={{scale: 0.95}}
                                    className={`px-8 py-3 text-lg font-semibold ${isDarkMode ? 'text-indigo-400 border-indigo-400 hover:bg-indigo-900' : 'text-indigo-600 border-indigo-300 hover:bg-indigo-50'} transition-all duration-300 border rounded-full hover:border-indigo-500`}
                                    onClick={handleLoginClick}>
                                    Tìm hiểu thêm
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Image Column - Enhanced with animation effects */}
                        <motion.div
                            initial={shouldReduceMotion ? {opacity: 1} : {opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="md:w-1/2 mt-10 md:mt-0"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={shouldReduceMotion ? {} : {
                                        opacity: [0.2, 0.25, 0.2]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-blue-600 to-indigo-600' : 'from-blue-500 to-indigo-500'} rounded-2xl opacity-20 blur-2xl transform translate-x-4 translate-y-4`}
                                ></motion.div>
                                <motion.img
                                    whileHover={{scale: 1.02}}
                                    transition={{type: "spring", stiffness: 200, damping: 20}}
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                    alt="Edu Center Illustration"
                                    className={`relative z-10 w-full rounded-2xl shadow-2xl border-4 ${isDarkMode ? 'border-gray-700' : 'border-white'}`}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section - Animated cards */}
            <section className={`py-24 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
                <div className="container px-6 mx-auto text-center">
                    <motion.h2
                        initial={shouldReduceMotion ? {} : {opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-50px"}}
                        transition={{duration: 0.4}}
                        className={`mb-16 text-3xl font-bold text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} md:text-4xl tracking-tight`}
                    >
                        Tại sao chọn <span className="text-blue-600">Edu Center?</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {/* Feature Cards with staggered animations */}
                        <motion.div
                            initial={shouldReduceMotion ? {} : {opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-50px"}}
                            transition={{duration: 0.4}}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                            }}
                            className={`p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t-4 border-blue-500 rounded-xl shadow-lg transition-all duration-300`}
                        >
                            <motion.div
                                whileHover={shouldReduceMotion ? {} : {scale: 1.05}}
                                transition={{type: "spring", stiffness: 300, damping: 15}}
                                className="inline-flex items-center justify-center w-16 h-16 mb-6 text-3xl text-white bg-blue-500 rounded-full"
                            >
                                <i className="fas fa-award"></i>
                            </motion.div>
                            <h3 className={`mb-4 text-xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-800'} tracking-tight`}>Chất lượng Giảng dạy</h3>
                            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} leading-relaxed font-normal`}>Đội ngũ giáo viên giàu kinh nghiệm, tận tâm với
                                phương pháp giảng dạy tiên tiến.</p>
                        </motion.div>

                        {/* Feature Card 2 */}
                        <motion.div
                            initial={shouldReduceMotion ? {} : {opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-50px"}}
                            transition={{duration: 0.4, delay: 0.1}}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                            }}
                            className={`p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t-4 border-green-500 rounded-xl shadow-lg transition-all duration-300`}
                        >
                            <motion.div
                                whileHover={{scale: 1.1, rotate: 5}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                className="inline-flex items-center justify-center w-16 h-16 mb-6 text-3xl text-white bg-green-500 rounded-full"
                            >
                                <i className="fas fa-school"></i>
                            </motion.div>
                            <h3 className={`mb-4 text-xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-800'} tracking-tight`}>Môi trường Hiện đại</h3>
                            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} leading-relaxed font-normal`}>Cơ sở vật chất khang trang, trang thiết bị đầy
                                đủ, hỗ trợ học tập tối ưu.</p>
                        </motion.div>

                        {/* Feature Card 3 */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.5, delay: 0.3}}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                            }}
                            className={`p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t-4 border-yellow-500 rounded-xl shadow-lg transition-all duration-300`}
                        >
                            <motion.div
                                whileHover={{scale: 1.1, rotate: 5}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                className="inline-flex items-center justify-center w-16 h-16 mb-6 text-3xl text-white bg-yellow-500 rounded-full"
                            >
                                <i className="fas fa-book-open"></i>
                            </motion.div>
                            <h3 className={`mb-4 text-xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-800'} tracking-tight`}>Chương trình Đa dạng</h3>
                            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} leading-relaxed font-normal`}>Nhiều khóa học phù hợp với mọi lứa tuổi và mục
                                tiêu học tập khác nhau.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits/About Section - Enhanced with animations */}
            <section className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
                <div className="container px-6 mx-auto">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.7}}
                        className={`mb-16 text-3xl font-bold text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} md:text-4xl tracking-tight`}
                    >
                        Khám phá <span className="text-indigo-600">Trung Tâm Chúng Tôi</span>
                    </motion.h2>

                    {/* Benefit 1 - With animations */}
                    <div className="flex flex-col items-center mb-24 gap-12 md:flex-row">
                        <div className="flex flex-col items-center mb-24 gap-12 md:flex-row">
                            <motion.div
                                initial={shouldReduceMotion ? {} : {opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, margin: "-50px"}}
                                transition={{duration: 0.5}}
                            >
                                <motion.div
                                    whileHover={{scale: 1.1, rotate: 3}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                    className={`inline-flex items-center justify-center w-20 h-20 mb-6 text-3xl ${isDarkMode ? 'text-indigo-400 bg-indigo-900' : 'text-indigo-600 bg-indigo-100'} rounded-full`}
                                >
                                    <i className="fas fa-users-cog"></i>
                                </motion.div>
                                <h3 className={`mb-4 text-2xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-800'} tracking-tight`}>Phương pháp tiếp cận Cá nhân
                                    hóa</h3>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} font-normal`}>
                                    Chúng tôi quan tâm đến sự tiến bộ của từng học viên, xây dựng lộ trình học tập phù
                                    hợp
                                    với khả năng và mục tiêu cá nhân.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, x: 30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, margin: "-100px"}}
                                transition={{duration: 0.7, delay: 0.2}}
                                className="md:w-1/2 order-first md:order-last"
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={shouldReduceMotion ? {} : {
                                            opacity: [0.2, 0.3, 0.2]
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                        className={`absolute inset-0 ${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-200'} rounded-lg opacity-30 blur-md transform translate-x-3 translate-y-3`}
                                    ></motion.div>
                                    <motion.img
                                        whileHover={{scale: 1.03}}
                                        transition={{type: "spring", stiffness: 200, damping: 20}}
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Nhóm học viên đang học tập cùng nhau"
                                        className="relative z-10 object-cover w-full shadow-lg rounded-xl h-72"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Benefit 2 - With animations */}
                        <div className="flex flex-col items-center gap-12 md:flex-row">
                            <motion.div
                                initial={{opacity: 0, x: -30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, margin: "-100px"}}
                                transition={{duration: 0.7}}
                                className="md:w-1/2"
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            opacity: [0.3, 0.4, 0.3]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: 1
                                        }}
                                        className={`absolute inset-0 ${isDarkMode ? 'bg-purple-900' : 'bg-purple-200'} rounded-lg opacity-30 blur-md transform translate-x-3 translate-y-3`}
                                    ></motion.div>
                                    <motion.img
                                        whileHover={{scale: 1.03}}
                                        transition={{type: "spring", stiffness: 200, damping: 20}}
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Giáo viên hướng dẫn học viên trong lớp học"
                                        className="relative z-10 object-cover w-full shadow-lg rounded-xl h-72"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={shouldReduceMotion ? {} : {opacity: 0, x: 20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, margin: "-50px"}}
                                transition={{duration: 0.5}}
                                className="md:w-1/2 text-center md:text-left"
                            >
                                <motion.div
                                    whileHover={{scale: 1.1, rotate: -3}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                    className={`inline-flex items-center justify-center w-20 h-20 mb-6 text-3xl ${isDarkMode ? 'text-purple-400 bg-purple-900' : 'text-purple-600 bg-purple-100'} rounded-full`}
                                >
                                    <i className="fas fa-lightbulb"></i>
                                </motion.div>
                                <h3 className={`mb-4 text-2xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-800'} tracking-tight`}>Phát triển Toàn diện</h3>
                                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} font-normal`}>
                                    Không chỉ kiến thức, chúng tôi còn chú trọng rèn luyện kỹ năng mềm và tư duy sáng
                                    tạo để
                                    học viên phát triển toàn diện.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section - Enhanced with animations */}
            <section className={`py-24 text-center ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'} relative`}>
                <div className="container relative z-10 px-6 mx-auto">
                    <motion.div
                        initial={shouldReduceMotion ? {} : {opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-50px"}}
                        transition={{duration: 0.5}}
                        className={`max-w-3xl p-10 mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl`}
                    >
                        <h2 className={`mb-6 text-3xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-800'} md:text-4xl tracking-tight`}>
                            Sẵn sàng Đồng hành cùng Con bạn?
                        </h2>
                        <p className={`mx-auto mb-8 text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} md:text-xl max-w-2xl font-normal`}>
                            Liên hệ ngay để được tư vấn chi tiết về các khóa học và nhận ưu đãi đặc biệt!
                        </p>
                        <motion.button
                            whileHover={{scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.2)"}}
                            whileTap={{scale: 0.95}}
                            className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700"
                            onClick={() => console.log('Contact us')}>
                            Liên hệ tư vấn
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Footer - With animations */}
            <footer className={`py-12 ${isDarkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-gray-100 text-gray-600 border-gray-200'} border-t`}>
                <div className="container px-6 mx-auto">
                    <motion.div
                        initial={shouldReduceMotion ? {} : {opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-50px"}}
                        transition={{duration: 0.5}}
                        className="flex flex-col items-center justify-between gap-6 md:flex-row"
                    >
                        <div className="text-center md:text-left">
                            <motion.h3
                                whileHover={{scale: 1.05, color: "#2563eb"}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                className="mb-2 text-xl font-bold text-blue-600 tracking-tight"
                            >
                                Edu Center
                            </motion.h3>
                            <p className="text-sm font-normal">Đồng hành cùng tương lai của bạn</p>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="mb-1 text-sm font-normal">Địa chỉ: [Địa chỉ trung tâm]</p>
                            <p className="text-sm font-normal">Điện thoại: [Số điện thoại] | Email: [Địa chỉ email]</p>
                        </div>

                        <div className="flex space-x-4 text-gray-400">
                            <motion.a
                                whileHover={{scale: 1.2, color: "#1D4ED8"}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                href="#"
                                className="text-xl transition-colors duration-300 hover:text-blue-600"
                            >
                                <i className="fab fa-facebook"></i>
                            </motion.a>
                            <motion.a
                                whileHover={{scale: 1.2, color: "#1D4ED8"}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                href="#"
                                className="text-xl transition-colors duration-300 hover:text-blue-600"
                            >
                                <i className="fab fa-instagram"></i>
                            </motion.a>
                            <motion.a
                                whileHover={{scale: 1.2, color: "#1D4ED8"}}
                                transition={{type: "spring", stiffness: 400, damping: 10}}
                                href="#"
                                className="text-xl transition-colors duration-300 hover:text-blue-600"
                            >
                                <i className="fab fa-youtube"></i>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, delay: 0.2}}
                        className={`pt-8 mt-8 text-sm text-center border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                    >
                        <p className="mb-4 font-normal">&copy; {new Date().getFullYear()} Edu Center. All rights reserved.</p>
                        <div className="space-x-4">
                            <motion.a
                                whileHover={{scale: 1.05, color: "#2563eb"}}
                                href="#"
                                className="transition-colors duration-300 hover:text-blue-600 font-normal"
                            >
                                Chính sách Bảo mật
                            </motion.a>
                            <span className="text-gray-400">|</span>
                            <motion.a
                                whileHover={{scale: 1.05, color: "#2563eb"}}
                                href="#"
                                className="transition-colors duration-300 hover:text-blue-600 font-normal"
                            >
                                Điều khoản Dịch vụ
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;