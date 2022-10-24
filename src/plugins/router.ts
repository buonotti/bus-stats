import Home from "../views/HomeView.vue"
import Lines from "../views/LinesView.vue"
import Contact from "../views/ContactView.vue"
import About from "../views/AboutView.vue"
import Register from "../views/RegisterView.vue"
import Login from "../views/LoginView.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/lines', component: Lines},
    { path: '/contact', component: Contact},
    { path: '/about', component: About},
    { path: '/register', component: Register},
    { path: '/login', component: Login},
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
