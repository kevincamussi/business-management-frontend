import axios from "axios";
// Define the base URL depending on the environment

const baseURL =
  process.env.MODE === "development"
    ? "http://localhost:8000"
    : process.env.NEXT_PUBLIC_API_URL;

// Create an Axios instance with the base URL

const API = axios.create({
  baseURL,
});

// Request interceptor: runs BEFORE every request is sent

API.interceptors.request.use((config) => {
  // Ensure this code only runs in the browser (client-side).
  // 'document' does not exist on the server, so this prevents Next.js errors.
  if (typeof document !== "undefined") {
    // Search for the 'token' cookie inside document.cookie
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("token="));

    const token = cookie?.split("=")[1];

    // If a token is found, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default API;
