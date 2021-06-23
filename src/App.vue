<template>
 <div id="app">
    <router-view></router-view>
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
