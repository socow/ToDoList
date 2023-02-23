import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: " https://pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((req) => {
  if (req.headers) {
    req.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  }

  return req;
});
