<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscrol from "better-scroll";
export default {
  name: "Scroll",
  props: {
      probeType:{
          type:Number,
          default:0
      },
       pullUpLoad:{
           type:Boolean,
           default:false
       }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new bscrol(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
         /*  console.log(position); */
          this.$emit('scroll',position)
    });
    this.scroll.refresh(),
    this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
    })
  },
  methods:{
      scrollTo(x,y,time=300){
          this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
          this.scroll.finishPullUp()
      },
      refresh(){
      
         this.scroll && this.scroll.refresh()
      },
      getscrolly(){
         return this.scroll ? this.scroll.y : 0
      }
  }
};
</script>

<style>
</style>