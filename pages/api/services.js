import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
instance.defaults.headers.common[
  "Authorization"
] = `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_ID}`;

export default instance;
