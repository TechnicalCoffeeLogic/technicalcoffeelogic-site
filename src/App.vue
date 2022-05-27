<script setup>

import HelloWorld from './components/HelloWorld.vue'
import NavMenu from './components/NavMenu.vue';

</script>

<template>
  <NavMenu></NavMenu>  
  <div class="inline-flex m-12">
    <img alt="Technical Coffee Logic Logo" src="./assets/coffee-cup.png" class="w-24 md:w-32 lg:w-48" />
  </div>
  <div class="sm:text-center lg:text-center">    
    <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span class="block xl:inline align-text-bottom">Technical Coffee Logic</span>
    </h1>
  </div>

  <div class="m-3">
    <p class="text-1xl tracking-tight">“These men who have turned the world upside down have come here also” — Acts 17:6</p>
  </div>
</template>

<style>
#app {
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
