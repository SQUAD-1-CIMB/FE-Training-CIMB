import axios from "axios";
// import { useAuthUser } from "./src/stores/auth";
import { useRouter } from "vue-router";
import { getCookie } from "./cookies";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://148.135.138.22:5000", // Change this to your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor - Attach Token to Requests
api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(getCookie("token")); // Or use Vuex/Pinia if stored there
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const router = useRouter();
// Response Interceptor - Handle Errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "dataUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.push("/auth/login");
    }
    return Promise.reject(error);
  }
);

export default api;
