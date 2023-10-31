import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/main.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router).use(ElementPlus).mount("#app");
