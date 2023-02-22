import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: () => import("../view/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

export default router;
