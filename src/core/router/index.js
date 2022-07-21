import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@views/NotFound";
import OrderRegistration from "@views/OrderRegistration";

const routes = [
  {
    path: "/",
    name: "order-registration",
    component: OrderRegistration,
  },
  {
    path: "/404",
    name: "page-not-found",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    name: "page-not-found-fix",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
