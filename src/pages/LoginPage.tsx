import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import authService from "../services/AuthService";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Use AuthService for login
            const authResponse = await authService.login({
                email,
                password,
                rememberMe
            });

            console.log('Login successful:', authResponse);

            // Redirect to home page after successful login
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error);
            // Here you could add error state and display error messages to the user
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="sm:mx-auto sm:w-full sm:max-w-md"
            >
                <h2 className="text-center text-3xl font-extrabold text-gray-800 tracking-tight">
                    Đăng nhập vào Edu Center
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Tài khoản được cấp bởi nhân viên trung tâm
                </p>
            </motion.div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="relative"
                >
                    {/* Card shadow effect */}
                    <div
                        className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>

                    {/* Main card */}
                    <div className="relative bg-white p-8 sm:rounded-2xl shadow-xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <motion.div
                                initial={{opacity: 0, x: -10}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.3, delay: 0.3}}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1 relative group">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Nhập địa chỉ email của bạn"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, x: -10}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.3, delay: 0.4}}
                            >
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Mật khẩu
                                </label>
                                <div className="mt-1 relative group">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Nhập mật khẩu của bạn"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3, delay: 0.5}}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link to="/forgot-password"
                                          className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3, delay: 0.6}}
                            >
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 relative overflow-hidden"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10"
                                                        stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor"
                                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Đang xử lý...
                                        </>
                                    ) : "Đăng nhập"}
                                </button>
                            </motion.div>
                        </form>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Thông tin đăng nhập</span>
                                </div>
                            </div>

                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.7}}
                                className="mt-4 text-center text-sm text-gray-600"
                            >
                                <p>Vui lòng liên hệ với nhân viên trung tâm nếu bạn chưa có tài khoản hoặc quên thông
                                    tin đăng nhập.</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.8}}
                    className="mt-6 text-center"
                >
                    <p className="text-sm text-gray-600">
                        Bạn cần hỗ trợ? <a href="#"
                                           className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">Liên
                        hệ với chúng tôi</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;