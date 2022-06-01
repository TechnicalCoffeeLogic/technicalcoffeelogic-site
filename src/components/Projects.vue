<script setup>

import Header from './Header.vue';
import Project from './Project.vue';

</script> 

<template>
    <Header :header-title="'Projects'"></Header>
    <ul>
        <li>
            <Project :title="'Genderle.com'" :description="'Like wordle, but with gender'" :src="'../../genderle-logo.png'"></Project>
        </li>
    </ul>
</template>

<style scoped>
</style>