<script setup>

import NavMenu from './components/NavMenu.vue';

</script>

<template>
  <NavMenu></NavMenu>
  <router-view></router-view>
</template>

<style>
#app {
  
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;

}

body {
    /* background-color: #f8f8f8; */
}
</style>
