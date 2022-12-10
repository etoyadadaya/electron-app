import axios from "axios";

const basicHost = axios.create({
  baseURL: "http://127.0.0.1:666",
  withCredentials: false,
  headers: {
    "Content-type": "application/json",
  },
});

export const useApiCall = () => basicHost;
