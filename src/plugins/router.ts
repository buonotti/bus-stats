import Home from "../views/HomeView.vue"
import Lines from "../views/LinesView.vue"
import Contact from "../views/ContactView.vue"
import About from "../views/AboutView.vue"
import Register from "../views/RegisterView.vue"
import Login from "../views/LoginView.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/bus-stats', component: Home },
    { path: '/bus-stats/lines', component: Lines},
    { path: '/bus-stats/contact', component: Contact},
    { path: '/bus-stats/about', component: About},
    { path: '/bus-stats/register', component: Register},
    { path: '/bus-stats/login', component: Login},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
router.beforeEach((to, from, next) => {
    //TODO: check if login

    next()
})

export default router
