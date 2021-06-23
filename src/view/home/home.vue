<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <homechildren :banners ="banners"></homechildren>
     <recommendview :recommends="recommends"></recommendview>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import recommendview from './homecomp/recommendview'
import homechildren from './homecomp/homechildren'

export default {
 name:"home",
 data(){
   return {
     banners:[],
     recommends:[]
   }
 },
 components:{
   NavBar,
   homechildren,
   recommendview
 },
 created(){
   getHomeMultidata().then(res =>{
     console.log(res);
    this.banners = res.data.banner.list;
    this.recommends = res.data.recommend.list;
   })
 }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>