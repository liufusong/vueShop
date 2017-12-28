<template>
  <div>
      <ul id="OA_task_1" class="mui-table-view">
            <li v-for="(item,index) in shopCarList" :key="item.id" class="mui-table-view-cell mui-transitioning">
                <div class="mui-slider-right mui-disabled">
                    <a @click="remove(item.id)" class="mui-btn mui-btn-red" style="transform: translate(0px, 0px);">删除</a>
                </div>
                <div class="mui-slider-handle" style="transform: translate(0px, 0px);">
                    <mt-switch @change="setSelect(item.id,index)" v-model="$store.getters.getSelect[item.id]"></mt-switch>
                    <div class="shopRight">
                        <img :src="item.thumb_path" alt="">
                        <div class="goodsCon">
                            <h4 class="line2 fontSet">{{item.title}}</h4>
                            <span>￥{{item.sell_price}}</span>
                            
                            
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="bot">
            <p>总计不含运费</p>
            <span>已选择{{$store.getters.getShopNum.num}}件商品，共计{{$store.getters.getShopNum.total}}元</span>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            value:[],
            shopCarList:[]
        }
    },
    created(){
        this.getShopCarList()
        
    },
    methods:{
        getShopCarList(){
            if(this.$store.getters.getId.length<1){
                return
            }
            this.$http.get('api/goods/getshopcarlist/'+this.$store.getters.getId).then(function(res){
               
                this.shopCarList = res.body.message
                
            })
        },
        setSelect(id){
            console.log(id+'----'+this.$store.getters.getSelect[id])
            this.$store.commit('setSelect',id)
        },
        remove(id,i){
            this.$store.commit('remove',id)
            this.shopCarList.splice(i,1)
        }
    }
}
</script>
<style>
.mint-switch{
    width:52px;
    position: absolute;
    margin-top:17px;
}
.shopRight{
    padding-left:62px;
}
.shopRight img{
    width:60px;
    height: 60px;
    position: absolute
}
.goodsCon{
    padding-left:70px;
}

.fontSet{
    height: 34px;
    color: #26a2ff;
}

.line2{
    display: -webkit-box;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.bot{
    width:100%;
    background: #eee;
    margin: 10px 0;
    padding:20px 0;
}
</style>


