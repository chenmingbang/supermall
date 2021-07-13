<template>
<div> <nav-bar>
       <div slot="left" class="tubiao" @click="backclick">
           <img src="~assets/images/common/arrow-right.png" alt="">
       </div>
       <div slot="center" class="titles">
           <div v-for="(item,index) in titles" 
           :key="index" 
           :class="{active: index === currentIndex}"
           @click="itemclick(index)"
           class="titlesitem">{{item}}</div>
       </div>
   </nav-bar></div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
 
  name:'detailnavbar',
  components: { NavBar },
  data () {
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
  },
  methods:{
      itemclick(index){
          this.currentIndex=index,
          this.$emit('titleclick',index)
      },
      backclick(){
          this.$router.back()
      }
  }
}
</script>

<style scoped>
.titles{
    display: flex;
    font-size: 15px;
}
.titlesitem{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.tubiao img{
    background-color: blanchedalmond;
    transform: rotate(180deg);
    width: 35px;
    margin-top: 8px;
     filter: grayscale(100%);
     margin-left: 0px;
}
</style>