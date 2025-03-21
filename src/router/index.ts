import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const lazyloader = (view: string) => {
  return () => import(`../views/${view}.vue`);
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: lazyloader("HomeView"),
  },
  {
    path: "/login",
    name: "login",
    component: lazyloader("SignInView"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: lazyloader("DashboardView"),
  },
  {
    path: "/configuracoes",
    name: "configuracoes",
    component: lazyloader("SettingsView"),
  },
  {
    path: "/about",
    name: "about",
    component: lazyloader("AboutView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
