import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/tailwind.css";
import router from "./router";

import BlankView from "./components/layouts/BlankView.vue";
import SidebarView from "./components/layouts/SidebarView.vue";

createApp(App)
  .component("blank-view", BlankView)
  .component("sidebar-view", SidebarView)
  .use(router)
  .use(store)
  .mount("#app");
