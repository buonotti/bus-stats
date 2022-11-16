import Home from "../views/HomeView.vue"
import Lines from "../views/LinesView.vue"
import Contact from "../views/ContactView.vue"
import About from "../views/AboutView.vue"
import Register from "../views/RegisterView.vue"
import Login from "../views/LoginView.vue"
import Profile from "../views/ProfileVue.vue"
import {createRouter, createWebHistory} from "vue-router";
import {useAuthenticationStore} from "./store";

const routes = [
    {
        path: '/bus-stats',
        component: Home,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/bus-stats/lines',
        component: Lines,
        meta: {
            requireAuth: false}
    },
    {
        path: '/bus-stats/contact',
        component: Contact,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/bus-stats/about',
        component: About,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/bus-stats/register',
        component: Register,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/bus-stats/login',
        component: Login, meta: {
            requireAuth: false
        }
    },
    {
        path: '/bus-stats/profile',
        component: Profile,
        meta: {
            requireAuth: true
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
router.beforeEach((to, from, next) => {

    const authStore = useAuthenticationStore()

    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!authStore.isLoggedIn) {
            const q = to.fullPath.match(/^\/$/) ? {} : {redirect: to.fullPath}
            next({
                path: "/bus-stats/login",
                query: q
            })
            return
        }
    }
    next()


})

export default router
