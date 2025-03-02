import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
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
      const { status, data } = error.response;

      switch (status) {
        case 400:
          errorMessage = data.message || "Bad Request!";
          break;
        case 401:
          errorMessage = "Unauthorized!";
          break;
        case 403:
          errorMessage = "Forbidden! You don't have access.";
          break;
        case 404:
          errorMessage = "Resource not found!";
          break;
        case 429:
          errorMessage = "Too many requests! Try again later.";
          break;
        case 500:
          errorMessage = "Server error! Try again later.";
          break;
        default:
          errorMessage = data.message || `Error ${status}`;
      }
    } else if (error.request) {
      errorMessage = "No response from server. Check your internet!";
    } else {
      errorMessage = error.message;
    }

    console.error("API Error:", error);
    toast.error(errorMessage);

    return Promise.reject(error);
  }
);

export default api;
