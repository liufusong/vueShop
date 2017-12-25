<template>
  <div style="padding:0 10px;">
      <h4 style="color:#26a2ff; line-height:25px;">{{info.title}}</h4>
      <span>{{info.add_time}} 点击次数 {{info.click}}</span>
      <div class="imgs">
          <img class="preview-img" v-for="(item, index) in list" :key="index" :src="item.src" height="100" @click="$preview.open(index, list)">
      </div>
      <div v-html="info.content">
          
      </div>
      <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data(){
      return {
          id:'',
          info:{},
          list: [{
                src: 'http://vue.studyit.io/upload/201504/18/thumb_201504181230434303.jpg',
                w: 600,
                h: 400
              }, {
                src: 'http://vue.studyit.io/upload/201504/18/thumb_201504181230434303.jpg',
                w: 1200,
                h: 900
        }]
      }
  },
  created(){
      this.id = this.$route.params.id
      this.getPhotoInfo()
      this.getthumimages()
  },
  methods:{     
      getPhotoInfo(){
          this.$http.get('api/getimageInfo/'+this.id).then(function(res){
              this.info = res.body.message[0]
          })
      },
      getthumimages(){
          this.$http.get('api/getthumimages/'+this.id).then(function(res){
              console.log(res)
              res.body.message.forEach((item,index) => {
                  item.w = 400
                  item.h = 400
              });
              this.list = res.body.message
          })
      }
  },
  components:{
      comment
  }
}
</script>
<style>
.imgs{
    padding: 10px 0px;
}
.imgs img{
    width:31.333%;
    margin-right: 2%;
    height: auto;
}
</style>

