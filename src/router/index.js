import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import BaseRoutes from '@/router/base'

Vue.use(VueRouter)

const createRouter = () => {
    let routes = BaseRoutes

    return new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
}

const router = createRouter()

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title !== undefined)
        ? to.meta.title : document.title = 'SFIDA.GG - Fan led tournaments';

    const isAuthenticated = store.getters['auth/isAuthenticated']
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth && !isAuthenticated)
        next('/login')
    else 
        next();
})

export { router }