import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    clickHandler: () => {},
  },

  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () => import("../views/Weather.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Michelle Watts - ${to.name}`;
  next();
});

export default router;
