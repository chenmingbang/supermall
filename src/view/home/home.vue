<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabcontrol :titles="['流行', '新款', '精选']" @tableclick="tableclick" ref="tabcontrol1" class="tabcontrol" v-show="istabfixed"></tabcontrol>
   <scroll class="content"
    ref="scroll" :probe-type="3"
     @scroll="contentscroll" 
     :pull-up-load="true"
     @pullingUp="loadmore">
     <homechildren :banners="banners" @swiperimageload="swiperimageload"></homechildren>
    <recommendview :recommends="recommends"></recommendview>
    <homefeature></homefeature>
    <tabcontrol :titles="['流行', '新款', '精选']" @tableclick="tableclick" ref="tabcontrol2" ></tabcontrol>   <!-- 因为 class="tabcontrol"样式失效取消了 -->
      <goodslist :goods="showgods"></goodslist>
   </scroll>
   <backtop @click.native="backclick" v-show="isshowbacktop"></backtop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, gethomegoods } from "network/home";
import recommendview from "./homecomp/recommendview";
import homechildren from "./homecomp/homechildren";
import homefeature from "./homecomp/homefeature";
import tabcontrol from "components/content/tabcontrol/tabcontrol";
import goodslist  from "components/content/goods/goodslist"
import scroll from 'components/common/scroll/scroll.vue';
import Backtop from 'components/content/backtop/Backtop.vue';
import {debounce} from 'common/utlis'

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { list: [],page: 0 },
        'new': {list: [],page: 1 },
        'sell': { list: [],page: 2},
      },
     currenttype:'pop',
     isshowbacktop:false,
     tapoffsettop:0,
     istabfixed:false,
     saveY:0
    };
  },
  components: {
    NavBar,
    homechildren,
    recommendview,
    homefeature,
    tabcontrol,
    goodslist,
    scroll,
    Backtop
  },
  computed:{
    showgods(){
      return this.goods[this.currenttype].list
    }
  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated () {
     this.saveY = this.$refs.scroll.getscrolly()
    
  },
  created() {
    this.getHomeMultidata();
    this.gethomegoods('pop');
     this.gethomegoods('new')
      this.gethomegoods('sell')
     
  },
  mounted () {

    const refresh = debounce(this.$refs.scroll.refresh,100)
     this.$bus.$on('itemimageload',()=>{
               
         /* this.$refs.scroll && */ refresh()
      })
  
  },
  methods: {
    
    tableclick(index){
      switch(index){
        case 0:
          this.currenttype="pop"; 
        break
         case 1:
           this.currenttype="new";
        break
         case 2:
           this.currenttype="sell"; 
         break 
      }
      this.$refs.tabcontrol1.currentIndex = index,
      this.$refs.tabcontrol2.currentIndex = index
    },
     
   backclick(){
        this.$refs.scroll.scroll.scrollTo(0,0)  
      
   },
   contentscroll(position){
         this.isshowbacktop = (-position.y) >1000
         this.istabfixed = (-position.y) > this.taboffsettop
   },
   loadmore(){
    this.gethomegoods(this.currenttype)
   },
   swiperimageload(){
        this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop
          
    /*  console.log(this.$refs.tabcontrol.$el.offsetTop);  */
   },


    /*  网络请求数据相关 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    gethomegoods(type){
        const page = this.goods[type].page + 1
        gethomegoods('pop', page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishPullUp()
   })
    }
  }
}
</script>

<style scoped>
#home{
 position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/*.tabcontrol {
  position: sticky;  粘性定位 吸顶效果  css简单的操作  不过因为使用betterscroll插件失效所以注释不用
  top: 44px;
  background-color: white;
  z-index: 9;
}*/
.tabcontrol{
  position: relative;
  z-index: 9;
background-color: #fff;
}
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
/* .content{
  height: calc(100% - 49px);
   overflow: hidden;
   margin-top: 44px;
} */
</style>