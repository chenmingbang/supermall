<template>
   <Tab-bar>
     <Tab-bar-item path="/home"> 
      <img slot="item-icon" src="~assets/images/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div></Tab-bar-item>
     <Tab-bar-item path="/categroy" > 
       <img slot="item-icon" src="~assets/images/tabbar/category.png" alt="">
       <img slot="item-icon-active" src="~assets/images/tabbar/category_active.png" alt="">
       <div slot="item-text">分类</div></Tab-bar-item>
     <Tab-bar-item path="cart"> 
       <img slot="item-icon" src="~assets/images/tabbar/cart.png" alt="">
       <img slot="item-icon-active" src="~assets/images/tabbar/cart_active.png" alt="">
       <div slot="item-text">购物车</div></Tab-bar-item>
     <Tab-bar-item path="profile">
       <img slot="item-icon" src="~assets/images/tabbar/profile.png" alt="">
       <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.png" alt="">
       <div slot="item-text">我的</div></Tab-bar-item>

   </Tab-bar>
   
  
</template>


<script>
import TabBar from 'components/common/tabber/tabbar'
import TabBarItem from 'components//common/tabber/tabbaritem'
export default {
  name: 'maintap',
  components: {
   TabBar,
   TabBarItem
  }
}
</script>

<style>
/* @import './assets/css/bass.css';  /* 使用css方法引用 */ 

</style>
