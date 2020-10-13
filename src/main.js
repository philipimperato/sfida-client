import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCompositionApi from '@vue/composition-api'
import { router } from './router'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

store
    .dispatch('auth/authenticate')
    .catch(() => {
        window.localStorage.removeItem('feathers-jwt')
    })
    // Render the app
    .then(async () => {
        // Before you create app
        Vue.config.devtools = process.env.NODE_ENV === 'development'

        let app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
        }).$mount('#app')

        // After you create app
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor 
    })