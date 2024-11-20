import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_TMDB_APP_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default {
  install: (app) => {
    app.config.globalProperties.$axios = axios;
    app.config.globalProperties.$api = http;
  },
};

export { http };
