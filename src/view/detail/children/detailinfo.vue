<template>
  <div v-if="Object.keys(goods).length !==0" class="baseinfo">
      <div class="infotitle">{{goods.title}}</div>
      <div class="infoprice">
          <span class="nprice">{{goods.newPrice}}</span>
           <span class="oprice">{{goods.oldPrice}}</span>
           <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="infoother">
          <span>{{goods.columns[0]}}</span>
           <span>{{goods.columns[1]}}</span>
           <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="infoservices">
          <span class="infoservicesitem" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].ico" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
name:'detailinfo',
props: {
    goods:{
          type:Object,
          default(){
              return{}
          }
    }
}
}
</script>

<style scoped>
.baseinfo{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8; 
}
.infotitle{
    font-size: 21px;
    color:#222
}
.infoprice{
    margin-top: 10px;
}
.infoprice .nprice{
    font-size: 24px;
    color:var(--color-high-text)
}
.infoprice .oprice{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}
.infoprice .discount{
     font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
}
.infoother{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}
.infoservices{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.infoservicesitem img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}
.infoservicesitem span{
     font-size: 13px;
    color: #333;
}

</style>