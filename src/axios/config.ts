import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 10000,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    console.log("Request Sent:", config.url);
    return config;
  },
  (error) => {
    toast.error("Failed to send request!");
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "Something went wrong!";
    if (error.response) {
      errorMessage =
        error.response.data.message || `Error ${error.response.status}`;
    } else if (error.request) {
      errorMessage = "No response from server. Check your internet!";
    } else {
      errorMessage = error.message;
    }

    toast.error(errorMessage); // Show toast notification
    return Promise.reject(error);
  }
);

export default api;
