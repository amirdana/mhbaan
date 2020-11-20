import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/home.vue";
import Profile from "./views/profile.vue";
import Login from "./views/login.vue";
import SingUp from "./views/singUp.vue";
import Contest from "./views/contest.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SingUp,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/contest",
      name: "contest",
      component: Contest,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        resolve(position);
      });
    });
  },
});

export default router;
