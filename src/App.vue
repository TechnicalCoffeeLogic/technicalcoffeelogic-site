<script setup>

import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <NavMenu></NavMenu>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style>
#app {

  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

main {
  padding-top: 4rem;
  padding-bottom: 10rem;
  height: 100%;
}
</style>
