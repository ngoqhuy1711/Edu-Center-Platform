import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import authService, { LoginCredentials } from '../services/AuthService';

export interface User {
    id: number;
    username: string;
    email: string;
    is_active: boolean;
    full_name?: string;
    role?: string;
    profile?: {
        phone_number?: string;
        address?: string;
        bio?: string;
        gender?: string;
        profile_picture?: string;
    };
}

type UserRole = 'student' | 'teacher' | 'staff' | 'admin';

interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        darkModeMediaQuery.addEventListener('change', handleChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const credentials: LoginCredentials = {
                email: formData.email,
                password: formData.password,
                rememberMe: formData.rememberMe
            };

            const response = await authService.login(credentials);
            const userRole = response.user.role as UserRole;

            // Store user info in localStorage
            localStorage.setItem('userRole', userRole);
            localStorage.setItem('userName', response.user.full_name || '');
            
            // Redirect based on role
            switch (userRole) {
                case 'student':
                    navigate('/student-dashboard');
                    break;
                case 'teacher':
                    navigate('/teacher-dashboard');
                    break;
                case 'staff':
                    navigate('/staff-dashboard');
                    break;
                case 'admin':
                    navigate('/admin-dashboard');
                    break;
                default:
                    navigate('/');
            }
        } catch (err) {
            setError('Email hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <motion.div
                    animate={{
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
                    animate={{
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

            {/* Login Container */}
            <div className="relative min-h-screen flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full max-w-md p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl`}
                >
                    {/* Logo/Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-3xl font-bold text-blue-600 tracking-tight">Edu Center</h1>
                        <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Đăng nhập vào tài khoản của bạn</p>
                    </motion.div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
                                placeholder="your@email.com"
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
                                placeholder="••••••••"
                                required
                            />
                        </motion.div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm text-center"
                            >
                                {error}
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className={`h-4 w-4 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} text-blue-600 focus:ring-blue-500`}
                                />
                                <label htmlFor="rememberMe" className={`ml-2 block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Ghi nhớ đăng nhập
                                </label>
                            </div>
                            <a href="#" className={`text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200`}>
                                Quên mật khẩu?
                            </a>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-3 px-4 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Đăng nhập
                        </motion.button>
                    </form>

                    {/* Additional Options */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-6 text-center"
                    >
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Chưa có tài khoản?{' '}
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                                Đăng ký ngay
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;