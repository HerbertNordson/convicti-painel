import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import BlankView from "./components/layouts/BlankView.vue";
import SidebarView from "./components/layouts/SidebarView.vue";

import "./assets/tailwind.css";
import "@fontsource/nunito-sans";

createApp(App)
  .component("blank-view", BlankView)
  .component("sidebar-view", SidebarView)
  .use(router)
  .use(store)
  .mount("#app");
