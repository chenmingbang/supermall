<template>
 <div class="toast" v-show="show"> 
     <div>{{message}}</div></div>
</template>

<script>
export default {
  name:'toast',
  props: {
      message:{
          type:String,
          default:''
      },
      show:{
          type:Boolean,
          default:false
      }
  }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 40%;
    left: 40%;
    background: black;
    font-size: 18px;
    line-height: 40px;
    padding: 8px 10px;
}
</style>