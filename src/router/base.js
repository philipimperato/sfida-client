export default [
    {
        path: '/login',
        name: 'login',
        component: () => 
            import(/* webpackChunkName: "base" */ '@/views/users/Login.vue')
    },

    {
        path: '*',
        name: 'public',
        meta: {
            requiresAuth: false
        },
        component: () => 
            import(/* webpackChunkName: "public" */ '@/views/Public.vue')
    }
    // {
    //     path: '/oauth-success',
    //     redirect: '/complete-name'
    // },
    // {
    //     path: '/verify',
    //     name: 'verify',
    //     component: () => import(/* webpackChunkName: "base" */ '@/views/Verify.vue')
    // },
    // {
    //     path: '/reset-password',
    //     name: 'reset-password',
    //     component: () => import(/* webpackChunkName: "base" */ '@/views/RequestPasswordReset.vue')
    // },
    // {
    //     path: '/change-password',
    //     name: 'change-password',
    //     component: () => import(/* webpackChunkName: "base" */ '@/views/ChangePassword.vue')
    // }
]