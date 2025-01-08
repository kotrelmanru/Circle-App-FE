import axios from "axios";

export const API = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

export const setAuthToken = (token?: string) => {
   if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   } else {
      delete API.defaults.headers.common["Authorization"];
   }
};
