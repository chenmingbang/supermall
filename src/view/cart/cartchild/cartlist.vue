<template>
  <div class="cartlist">
      <scroll class="content" ref="scroll">
      <cartlistitem v-for="(item ,index) in cartlist" :key="index" :product="item"></cartlistitem>
      
      </scroll>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scroll from 'components/common/scroll/scroll.vue';
import Cartlistitem from './cartlistitem.vue';

export default {
   name:'cartlist',
   components: {
       scroll,
      Cartlistitem
   },
     
   computed: {
       ...mapGetters(['cartlist'])
   },
   activated () {
       this.$refs.scroll.refresh()
   }
}
</script>

<style scoped>
.cartlist{
   position: relative;
  height: 100vh;
    
}
.content{
    overflow: hidden;
    position: absolute;
    top: 0px;
    bottom: 130px;
    left: 0;
    right: 0;
  
}
</style>