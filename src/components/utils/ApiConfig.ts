import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Instance = axios.create({
    baseURL: "https://kaostores.onrender.com/api/v1",
});

// Set token in headers before each request
Instance.interceptors.request.use(
    (config) => {
        const token = cookies.get("Kao_cookie_admin");
        if (token) {
            // Directly setting the Authorization header
            config.headers = {
                ...config.headers, // Ensure existing headers are preserved
                Authorization: `Bearer ${token}`, // Add Authorization header
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);
