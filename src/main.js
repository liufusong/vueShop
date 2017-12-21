import App from './App.vue'
import Vue from 'vue'
import vueRouter from 'vue-router'
import home from './components/home.vue'

Vue.use(vueRouter)
const router = new vueRouter({
    routes:[
        {path:'/home',component:home}
    ]
})

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})

