
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store'

const routes = [{
        path: '/',
        redirect: '/dashboard',
    },{
        path: '/login',
        component: () => import('../components/Login.vue'),
        name: 'login',
        meta: {
            requiresAuth: false
        }
    },{
        path: '/dashboard',
        component: () => import('../components/Dashboard.vue'),
        name: 'dashboard',
        meta: {
            requiresAuth: true
        }
    },
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.getters.loggedIn) next('login')
    else next()
})

export default router