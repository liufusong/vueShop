<template>
  <div>
      <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :data-id="item.id" :class="{'mui-control-item':index!=1000,'mui-active':index==0}" 
                       href="#item1mobile" 
                       data-wid="tab-top-subpage-1.html"
                       v-for="(item,index) in cateGory"
                       :key="index"
                       >
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <div class="mui-card" v-for="item in imgList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div style="width:100%;height:100%;position:relative;">
                            <img v-lazy="item.img_url" alt="">
                            <p class="mui-ellipsis-2">{{item.zhaiyao}}</p>
                        </div>
						
					</div>
				</div>
		</div>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
// import axios from 'axios'
export default {
  data(){
      return{
          cateGory:[],
          imgList:[],
          id:0
      };
  },
  methods:{
      getPhotoList(){
          this.$http.get('api/getimgcategory').then(function(res){
              this.cateGory = res.body.message;
              console.log(this.cateGory)
          });
      },
      getImglist(){
          this.$http.get('api/getimages/'+this.id).then(function(res){
              this.imgList = res.body.message
              console.log(this.imgList)
          })
      }
  },
  created(){
      this.getPhotoList();
      this.id = 0
      this.getImglist()
  },
  mounted(){
      // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
        mui(".mui-scroll-wrapper").slider({
           
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
  }
}
</script>
<style>
* { touch-action: pan-y; } 
.mui-card{
    background: #eee;
}
.mui-card-content-inner{
    position: relative;
}
.mui-card-content-inner img{
    width:100%;
    display: block;

}
.mui-card-content-inner p{
    position: absolute;
    bottom:0;
    width: 100%;
    height: 40px;
    background:rgba(0,0,0,.5);
    padding: 0;
    margin:0;
}
image[lazy=loading] {
	width: 40px;
	height: 40px;
	margin: auto;
}
</style>


