<template>
  <div id="detail">
    
  <detailnavbar class="detailnav"  @titleclick="titleclick" ref="nav"></detailnavbar>
  
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll">
       <childrenswiper :topImages="topImages"></childrenswiper>
       <detailinfo :goods="goods"></detailinfo>
       <detailshopinfo :shop="shop"></detailshopinfo>
       <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
       <detail-params-info ref="params" :paramInfo="paramInfo"></detail-params-info>
       <commentinfo ref="comment" :commentInfo="commentInfo"></commentinfo>
       <goodslist ref="recommend" :goods="recommends"></goodslist>
  </scroll>
  <detailbuttombar @addtoCart="addtoCart"></detailbuttombar>
  <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import detailnavbar from './children/detailnavbar.vue'
import {getDetail,Goods,Shop,GoodsParam,getRecommend}  from 'network/detail'
import Childrenswiper from './children/childrenswiper.vue'
import Detailinfo from './children/detailinfo.vue'
import Detailshopinfo from './children/detailshopinfo.vue'
import scroll from 'components/common/scroll/scroll.vue';
import DetailGoodsInfo from './children/DetailGoodsInfo.vue'
import DetailParamsInfo from './children/DetailParamsInfo.vue'
import Commentinfo from './children/commentinfo'
import Goodslist from 'components/content/goods/goodslist.vue'
import Detailbuttombar from './children/detailbuttombar.vue'
import Toast from 'components/common/toast.vue'

export default {
  components: { detailnavbar, Childrenswiper, Detailinfo, Detailshopinfo,scroll, DetailGoodsInfo, DetailParamsInfo, Commentinfo, Goodslist, Detailbuttombar, Toast},
  name:'detail',
  data () {
      return {
          iid:null,
          topImages:[],
          goods:{},
          shop:{},
          detailInfo:{},
          paramInfo:{},
          commentInfo:{},
          recommends:[],
          tiaozhuan:[],
          currentIndex:0,
          message:'',
          show:false
      }
  },
  methods: {
     imageLoad(){
          this.$refs.scroll.refresh()
          this.tiaozhuan = []
           this.tiaozhuan.push(0);
          this.tiaozhuan.push(this.$refs.params.$el.offsetTop);
           this.tiaozhuan.push(this.$refs.comment.$el.offsetTop);
            this.tiaozhuan.push(this.$refs.recommend.$el.offsetTop);
           
            
     },
     addtoCart(){
          const product = {}
          product.image =this.topImages[0]
          product.title = this.goods.title
          product.desc = this.goods.desc
          product.price = this.goods.realPrice
          product.iid = this.iid
         /*  this.$store.state.cartlist.push(product) */
         this.$store.dispatch('addCart', product).then(res=>{
             this.show = true
             this.message = res
             setTimeout(()=>{
                 this.show = false
                 this.message = ''
             },1500)
         })
        
     },
      titleclick(index){
          
           this.$refs.scroll.scrollTo(0,-this.tiaozhuan[index],100)
      },
      contentscroll(position){
          let length = this.tiaozhuan.length
             const positions = -position.y
            for(let i=0;i<length;i++){
               if((i<length-1 && positions >=this.tiaozhuan[i] && positions < this.tiaozhuan[i+1]) || (i === length - 1 && positions>=this.tiaozhuan[i])){
                 if(this.currentIndex !== i){
                       this.currentIndex = i;
                   this.$refs.nav.currentIndex = this.currentIndex
                 }


               }
            }

      }
  },
  created () {
      /* 保存传入的iid */
      this.iid = this.$route.params.iid
       /*  获取iid得数据 并且赋值给自己定义得变量 再传给子组件展示 */
      getDetail(this.iid).then(res=>{
          console.log(res);
          this.topImages = res.result.itemInfo.topImages
          const data = res.result
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
          if(data.rate.cRate !==0){
              this.commentInfo = data.rate.list[0]
          }
                              
      }),
      getRecommend().then(res =>{
          this.recommends = res.data.list
      })

  }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 20;
    background-color: #fff;
    height: 100vh;
}
.detailnav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content{
    height: calc(100% - 44px - 49px);
}
</style>