import App from './App.vue'
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource';
import VuePreview from 'vue-preview'
import vuex from 'vuex'

// import axios from 'axios'

import mintUi from 'mint-ui'
import './lib/mui/css/mui.css'
import 'mint-ui/lib/style.css'

import './lib/mui/css/icons-extra(1).css'

// Vue.component(Header.name, Header);
// Vue.prototype.$axios = {
//     axios
// }
Vue.use(VuePreview)
Vue.use(mintUi)
Vue.use(vueResource)
Vue.use(vuex)


const store = new vuex.Store({
    state:{
        shopping:[]
    },
    mutations:{
        addCar(state,goodsInfo){
            var flag = true;            
            state.shopping.some(item=>{
                if(item.id==goodsInfo.id){
                    item.num = (item.num-0)+(goodsInfo.num-0)
                    flag = false
                    return
                }
            })

            if(flag){
                state.shopping.push(goodsInfo)
            }
        }
    },
    getters:{
        getNum(state){
            var count = 0;
            state.shopping.forEach(item=>{
                count+=(item.num-0)
            })
            return count
        }
    }
})



Vue.http.options.root = "http://vue.studyit.io"

import router from './router.js'

new Vue({
    el:'#app',
    render:c=>c(App),
    router,
    store
})

