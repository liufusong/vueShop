import Vue from 'vue'
import vueRouter from 'vue-router'
import home from './components/home.vue'
import photoList from './components/photo/photoList.vue'
import photoInfo from './components/photo/photoInfo.vue'
import shoplist from './components/shopping/shoplist.vue'
import shopInfo from './components/shopping/shopInfo.vue'

Vue.use(vueRouter)
const router = new vueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/photoList',component:photoList},
        {path:'/photo/photoInfo/:id',component:photoInfo},
        {path:'/shop/shoplist',component:shoplist},
        {path:'/shop/shopInfo/:id',component:shopInfo,name:'shopInfo'}
    ],
    linkActiveClass: 'mui-active'
})

export default router;