<template>
  <div class="goods">
      <goodsitem v-for="(item,index) in goods" :key="index" :goodsitem="item"></goodsitem>
     
  </div>
</template>

<script>
import goodsitem from './goodsitem.vue'
export default {
  components: { goodsitem },
 name:"goodslist",
 props: { 
     goods:{
         type:Array,
         default(){
             return []
         }
     }
 }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* 均等分 */
}
</style>