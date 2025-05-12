import axios from 'axios';

// API base URL - adjust as needed
const API_URL = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) ||
    (import.meta?.env?.REACT_APP_API_URL) ||
    'http://127.0.0.1:8000/api/v1/auth';

// Types
export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
    user: User;
}

export interface UserProfile {
    phone_number?: string;
    address?: string;
    bio?: string;
    gender?: string;
    profile_picture?: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    is_active: boolean;
    full_name?: string;
    role?: string;
    profile?: UserProfile;
}

class AuthService {
    // Store token in localStorage/sessionStorage based on rememberMe
    setToken(token: string, rememberMe: boolean): void {
        if (rememberMe) {
            localStorage.setItem('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }
    }

    // Get the stored token
    getToken(): string | null {
        return localStorage.getItem('token') || sessionStorage.getItem('token');
    }

    // Check if user is logged in
    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    // Login user
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const response = await axios.post(`${API_URL}/login`, credentials);
            const data = response.data as AuthResponse;

            // Store the token
            this.setToken(data.access_token, !!credentials.rememberMe);

            // Set default Authorization header for all future requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;

            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    // Logout user
    logout(): void {
        // Remove token from storage
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');

        // Remove Authorization header
        delete axios.defaults.headers.common['Authorization'];
    }

    // Get current user info
// Setup axios interceptor to handle token refresh or auth errors
    setupInterceptors(): void {
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    // Token expired or invalid - logout
                    this.logout();
                    window.location.href = '/login';
                }
                return Promise.reject(error);
            }
        );
    }
}

// Create and export a singleton instance
const authService = new AuthService();
authService.setupInterceptors();

export default authService;