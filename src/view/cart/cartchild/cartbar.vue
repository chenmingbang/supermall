<template>
  <div class="bottombar">
      <div class="check"><checkbuttom :ischeck="isselect" class="checkb" @click.native="clickquanxuan"></checkbuttom>
      <span></span>全选</div>
      <div class="price">合计: ￥{{totalPrice}}元</div>
      <div class="caclulate">
       <button> 计算</button>
       <span>{{checklength}}</span>
      </div>
  </div>
</template>

<script>
import checkbuttom from 'components/content/checkbuttom/checkbuttom.vue'
export default {
  components: { checkbuttom },
  name:'cartbar',
  methods: {
     clickquanxuan(){
        if(this.isselect){
          this.$store.state.cartlist.forEach(item=>item.checked = false)
        }else{
           this.$store.state.cartlist.forEach(item=>item.checked = true)
        }
     }
  },
  computed: {
    totalPrice(){
      return this.$store.state.cartlist.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      /* return this.$store.state.cartlist.filter(item=>{
        return item.checked
      }).reudce((preValue,item)=>{
        return item.price*item.count
      },0) */
    },
    checklength(){
      return this.$store.state.cartlist.filter(item => item.checked).length
    },
    isselect(){
      /*  return !this.$store.state.cartlist.filter(item => !item.checked).length */
     return this.$store.state.cartlist.find(item => item.checked === false) === undefined;
    }
  }
}
</script>

<style scoped>
 .bottombar{
     height: 40px;
     background-color:#eee;
    position: relative;
    bottom:130px;
    display: flex;
   padding-top: 10px;
  padding-left: 5px;
 }
 .check{
  display: flex;
 }
 .price{
   margin-left:  15px;
   flex: 1;
 }
 .checkb{
   width: 20px;
   height: 20px;
 }
 .caclulate{
   width: 120px;
 }
</style>