import { createApp } from "vue";
import "./css/app.css";
import "./css/custom.scss";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import axios from "./services/axios";

createApp(App).use(router).use(pinia).use(axios).mount("#app");
