import Home from "../views/HomeView.vue";
import Lines from "../views/MonitorsView.vue";
import Contact from "../views/ContactView.vue";
import About from "../views/AboutView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import Profile from "../views/ProfileVue.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthenticationStore } from "./store";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/lines",
    component: Lines,
    meta: {
      requireAuth: false,
    },
  },
  /* {
        path: '/contact',
        component: Contact,
        meta: {
            requireAuth: false
        }
    }, */
  {
    path: "/about",
    component: About,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthenticationStore();

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!authStore.isLoggedIn) {
      const q = to.fullPath.match(/^\/$/) ? {} : { redirect: to.fullPath };
      next({
        path: "/login",
        query: q,
      });
      return;
    }
  }
  next();
});

export default router;
