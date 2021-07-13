<template>
 <div id="app">
    <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    <maintab></maintab>
 </div>
</template>

<script>

 import maintab from 'components/content/maintap/maintap'
export default {
  name: 'App',
  components: {
     maintab
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
