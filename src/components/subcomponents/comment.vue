<template>
  <div>
      <h3>提交评论</h3>
      <textarea v-model="content" name="" id="" cols="30" rows="10" placeholder="请输入您要评论的内容"></textarea>
      <mt-button type="danger" size="large" @click="subCom">提交评论</mt-button>
      <h3>评论列表</h3>
      <dl v-for="(item,index) in comList" :key="index">
          
          <dt>第{{index+1}}楼  用户：{{item.user_name}}   发表时间:{{item.add_time}}</dt>
          <dd>{{item.content}}</dd>    
      </dl>
      <mt-button type="danger" size="large" @click="more">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            content:'',
            comList:[],
            pageindex:1
        }
    },
    props:['id'],
    methods:{
        subCom(){
           
            this.$http.post('api/postcomment/'+this.id,{content:this.content},{emulateJSON:true}).then(function(res){
                console.log(res)
                this.comList = [{add_time:new Date(),content:this.content,user_name:'匿名用户'}].concat(this.comList)
                Toast(res.body.message)
            })
           
        },
        getCom(id){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(function(res){
                console.log(res)
                this.comList = this.comList.concat(res.body.message) 
            })
        },
        more(){
            this.pageindex++
            this.getCom()
        }
    },
    created(){

        this.getCom()
    }
}
</script>
<style>
h3{
    line-height: 44px;
    border-bottom:1px solid #333;
}
textarea{
    height:70px;
    margin-bottom:5px;
}
dl{
    
}
dl dt{
    line-height: 40px;
    background:#d1cccc;
    padding: 0 10px;
}
dl dd{
    line-height: 40px;
}
</style>


