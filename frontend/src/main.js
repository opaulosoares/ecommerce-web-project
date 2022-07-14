import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index.js";
import store from "@/store/index.js";

import "./index.css";
import "./style/global.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.provide("$router", router);
app.provide("$store", store);

app.mount("#app");
