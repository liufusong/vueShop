<template>
  <div style="padding:40px 0 52px 0;">
      <mt-header fixed title="Destiny"></mt-header>
      <router-view></router-view>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item1" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">Home</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/tab">
          <span class="mui-icon mui-icon-email"></span>
          <span class="mui-tab-label">Message</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/shopCar/shopCarlist">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">{{this.$store.getters.getNum}}</span>
          </span>
          <span class="mui-tab-label">shopCar</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/setting">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">Setting</span>
        </router-link>
      </nav>
  </div>
</template>
<script>
export default {
  created(){
     console.log()
  }
}
</script>

<style scoped>
    .mui-bar-tab .mui-tab-item1.mui-active {
      color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
      font-size: 11px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mint-header.is-fixed{
      z-index: 2;
    }
</style>

