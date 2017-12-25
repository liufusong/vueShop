<template>
  
    <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0" :data-numbox-max="num2">
        <button @click="sendNum" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" ref="v" value="1">
        <button @click="sendNum" class="mui-btn mui-btn-numbox-plus" type="button" disabled="">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return {
          
        }
    },
    props:['num2'],
    mounted(){
        mui('.mui-numbox').numbox()
        
    },
    watch:{
        num2(n,o){      
            this.num2 = n
            mui('.mui-numbox').numbox().setOption('max',this.num2)
        }
    },
    methods:{
        sendNum(){
           
            this.$emit('getNum',this.$refs.v.value)
        }
    }
}
</script>
<style>


</style>


