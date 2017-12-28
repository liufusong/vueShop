import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
    state:{
        shopping:JSON.parse(localStorage.getItem('shopping')||'[]') 
    },
    mutations:{
        addCar(state,goodsInfo){
            var flag = true;            
            state.shopping.some(item=>{
                if(item.id==goodsInfo.id){
                    item.num = (item.num-0)+(goodsInfo.num-0)
                    flag = false
                    localStorage.setItem('shopping',JSON.stringify(state.shopping))
                    return
                }
            })

            if(flag){
                state.shopping.push(goodsInfo)
            }
            localStorage.setItem('shopping',JSON.stringify(state.shopping))

        },
        setSelect(state,id){
            state.shopping.forEach(item=>{
                if(item.id == id){
                    item.select =!item.select
                }
            })
            localStorage.setItem('shopping',JSON.stringify(state.shopping))
        },
        remove(state,id){
            state.shopping.forEach((item,index)=>{
                if(item.id==id){
                    state.shopping.splice(index,1)
                }
            })
            localStorage.setItem('shopping',JSON.stringify(state.shopping))
        }
    },
    getters:{
        getNum(state){
            var count = 0;
            state.shopping.forEach(item=>{
                count+=(item.num-0)
            })
            return count
        },
        getId(state){
            var str = '';
            state.shopping.forEach(item=>{
               
                str+=item.id+','
                
            })
            return str.substring(0,str.length-1)             
        },
        getSelect(state){
            var o = {};
            state.shopping.forEach(item=>{
                o[item.id] = item.select
               
            })
            return o
        },
        getShopNum(state){
            var count = {num:0,total:0}
            state.shopping.forEach(item=>{
                if(item.select){
                    count.num++
                    count.total+= item.price*item.num
                }
            })
            return count
        }
    }
})

export default store