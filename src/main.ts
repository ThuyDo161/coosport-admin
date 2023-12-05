import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/plugins/i18n";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(store);
app.use(i18n);
app.use(router);
app.mount("#app");
