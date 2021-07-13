<template>
  <div class="checkbuttom" :class="{check:ischeck}"> 
     <!--  <img  src="~assets/images/detail/collect.png" alt=""> -->
  </div>
</template>

<script>
export default {
 name:'checkbuttom',
 props: {
     ischeck:{
         type:Boolean,
         default:true
     }
 }
}
</script>

<style scoped>
.checkbuttom {
    width: 15px;
    height: 15px;
    border: 1px solid;
}
.check{
  background: red;
}
</style>