<template>
  <div>
       
      <div class="mui-card">
            <div class="mui-card-content">               
                   <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="item in imglist" :key="item.src">
                        <img v-lazy="item.src" alt="">
                        </mt-swipe-item>
                    </mt-swipe>                
            </div>
      </div>
      <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <h4>{{info.title}}</h4>
                   <div>
                       <span>市场价：<s>{{info.market_price}}</s></span>
                       <span>销售价：{{info.sell_price}}</span>
                   </div>
                   <div>
                       购买数量：<num :num2="info.stock_quantity" @getNum="count"></num>

                   </div>
                   <div>
                       <button type="button" class="mui-btn mui-btn-danger">立即购买</button>
                       <span @click="addCar" class="mui-btn mui-btn-success">加入购物车</span>
                   </div>
                </div>
            </div>
      </div>
      <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <h3>标题</h3>
                   <div>商品货号：{{info.goods_no}}</div>
                   <div>上货时间：{{info.add_time}}</div>
                   <div>库存数量：{{info.stock_quantity}}</div>
                </div>
            </div>
      </div>
  </div>
</template>
<script>

import num from '../subcomponents/num.vue'

export default {
    data(){
        return {
            imglist:[],
            info:{},
            id:'',
            num:1
        }
    },
    created(){
      this.id = this.$route.params.id
      this.getImgs()
      this.getInfo()
    },
    methods:{
        getImgs(){
            this.$http.get('api/getthumimages/'+this.id).then(function(res){
                this.imglist = res.body.message
            })
        },
        getInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(function(res){
                this.info = res.body.message[0]
            })
        },
        count(c){
            this.num = c
        },
        addCar(){
            var obj = {};
           
            obj.num = this.num;
            obj.id = this.id;
            this.$store.commit('addCar',obj)
        }
    },
    components:{
        num
    }
}
</script>
<style>
.mint-swipe{
  height:60vw;
}
img{
    display: block;
  height: 100%;
  margin: auto;
}
.mui-card-content-inner h4{
    color: #26a2ff;
    line-height:25px;
    border-bottom:1px solid #26a2ff;
}
.mui-card-content-inner div{
    margin: 15px 0;
    font-size:16px;
}
.mint-swipe-indicator{
    background: #26a2ff;
}
</style>


