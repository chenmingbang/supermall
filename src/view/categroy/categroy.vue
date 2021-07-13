<template>
  <div class="wrapper" ref="aaaa">
  <div class="content">
     <ul>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
     </ul>
     <ul>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
       <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
        <li>dsadsadsa</li>
       <li>dsadas</li>
     </ul>
  </div></div>
</template>

<script>
import bscrol from 'better-scroll'
export default {
  name:"categroy",
  data () {
    return {
       scroll:null
    }
  },
  mounted(){
    this.scroll =new bscrol(document.querySelector('.wrapper'),{
            probeType:3,
            pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
     /*  console.log(position); */
    })
    this.scroll.on('pullingUp',()=>{
      console.log('加载更多');
    })
  },
 
}
</script>

<style scoped>
.wrapper{
  height: 150px;
  background: red;
  overflow: hidden;
}
</style>