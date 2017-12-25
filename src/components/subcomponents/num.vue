<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="Nnum">
    
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="5">
        <button class="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
    data(){
        return {
            Nnum:''
        }
    },
    props:['num'],
    mounted(){
        mui('.mui-numbox').numbox()
    },
    watch:{
        num(n,o){
            
            mui('.mui-numbox').numbox().setOption('max',n)
        }
    }
}
</script>
<style>


</style>


