<template>
  <div id="cart">
     <nav-bar class="navbar">
       <div  slot="center">购物车({{cartlength}})</div>
       </nav-bar>
       <cartlist :cartlist="cartlist"></cartlist>
       <cartbar></cartbar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {mapGetters} from 'vuex'
import Cartlist from './cartchild/cartlist.vue';
import Cartbar from './cartchild/cartbar.vue';
export default {
  components: { NavBar,Cartlist, Cartbar },
  name:"cart",
  computed: {
   ...mapGetters(['cartlength','cartlist'])
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.navbar{
  background-color: var(--color-tint);
  color:#fff;
  font-weight: 700;
}
</style>