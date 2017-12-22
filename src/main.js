import App from './App.vue'
import Vue from 'vue'
import vueRouter from 'vue-router'

import mintUi from 'mint-ui'
import './lib/mui/css/mui.css'
import 'mint-ui/lib/style.css'

import './lib/mui/css/icons-extra(1).css'

// Vue.component(Header.name, Header);

Vue.use(mintUi)

import router from './router.js'

new Vue({
    el:'#app',
    render:c=>c(App),
    router,
})

