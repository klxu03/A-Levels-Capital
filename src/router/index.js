import { createWebHistory, createRouter } from "vue-router";
import Landing from "@/pages/Landing.vue";
import Portfolio from "@/pages/Portfolio.vue";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
