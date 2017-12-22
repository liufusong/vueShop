import Vue from 'vue'
import vueRouter from 'vue-router'
import home from './components/home.vue'
import photoList from './components/photo/photoList.vue'

Vue.use(vueRouter)
const router = new vueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/photoList',component:photoList}
    ],
    linkActiveClass: 'mui-active'
})

export default router;