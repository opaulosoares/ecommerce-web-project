import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "./style/global.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
