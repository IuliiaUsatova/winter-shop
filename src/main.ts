import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/main.css";
import "element-ui/lib/theme-chalk/index.css";
import ElementUIComponent from "../src/plugins/ElementUIComponents.vue";

createApp(App).use(router).mount("#app");
App.component("element-ui-component", ElementUIComponent);
