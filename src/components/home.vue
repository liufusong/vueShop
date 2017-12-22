<template>
  <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                          <span></span>
                          <div class="mui-media-body">News</div>
                    </a>
                </li> 
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photoList">
                          <span></span>
                          <div class="mui-media-body">Picture</div>
                    </router-link>
                </li> 
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                          <span></span>
                          <div class="mui-media-body">Message</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                          <span></span>
                          <div class="mui-media-body">Video</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                          <span></span>
                          <div class="mui-media-body">Contact </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                          <span></span>
                          <div class="mui-media-body">Product</div>
                    </a>
                </li>
		  </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.mint-swipe{
  height:60vw;
}
img{
  height: 100%;
  width:100%;
}
.mui-table-view{
  background:#fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  width:33.3333%;
  border: none;
}
.mui-table-view li span{
  width:70px;
  height:70px;
  display:block;
  background-repeat: round;
  margin:auto;
}
.mui-table-view li:nth-child(1) span{
  background-image: url("../images/menu1.png");
}
.mui-table-view li:nth-child(2) span{
  background-image: url("../images/menu2.png");
}
.mui-table-view li:nth-child(3) span{
  background-image: url("../images/menu3.png");
}
.mui-table-view li:nth-child(4) span{
  background-image: url("../images/menu4.png");
}
.mui-table-view li:nth-child(5) span{
  background-image: url("../images/menu5.png");
}
.mui-table-view li:nth-child(6) span{
  background-image: url("../images/menu6.png");
}

</style>


