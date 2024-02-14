import axios from "axios";

const API = axios.create({ baseURL: "https://dummyjson.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchProducts = () => API.get("/products");
export const login = (formData) => API.post("/auth/login", formData);
export const fetchUser = () => API.get("/auth/me");
