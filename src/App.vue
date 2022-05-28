<script setup>

import NavMenu from './components/NavMenu.vue';
import Home from './components/Home.vue';

</script>

<template>
  <NavMenu></NavMenu>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
