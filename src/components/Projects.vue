<script setup>

import Header from './Header.vue';
import Project from './Project.vue';

</script> 

<template>
    <Header :header-title="'Developed Projects'"></Header>
    <ul>
        <li>
            <Project :title="'Genderle.com'" :description="'Like wordle, but with gender'" :image="'../assets/coffee-cup.png'"></Project>
        </li>
    </ul>
</template>

<style scoped>
</style>