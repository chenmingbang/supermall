<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tabcontrolitem" 
    @click="itemclick(index)" :class="{active:index === currentIndex }">
       <span>{{item}}</span>
       </div>
  </div>
</template>

<script>
export default {
  name:'control',
  props: {
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex = index
      this.$emit('tableclick',index)
    }
  }
}
</script>

<style>
.tabcontrol{
  display: flex;
  font-size: 15px;
}
.tabcontrolitem{
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
} 
.active{
  color:var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>