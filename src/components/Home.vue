<script setup>

import InfoBlock from './InfoBlock.vue';

</script>

<template>
    <div class="inline-flex m-12">
        <img alt="Technical Coffee Logic Logo" src="../assets/coffee-cup.png" class="w-24 md:w-32 lg:w-48" />
    </div>
    <div class="sm:text-center lg:text-center">
        <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline align-text-bottom">Technical Coffee Logic</span>
        </h1>
    </div>

    <div class="m-3">
        <p class="text-1xl tracking-tight">
            “These men who have turned the world upside down have come here also” — Acts 17:6
        </p>
    </div>

    <div class=" xl:mt-12 sm:mt-12">
        <a href="https://www.youtube.com/watch?v=Ys6_Th7rvW0" target="_blank" class=" md:text-2xl underline sm: text-xl sm: pr-2 sm: pl-2">Writing Code to the glory of Christ👑</a>
    </div>

    <div>
        <ul>            
            <li>
                <InfoBlock :title="'🌎 Web Development'" 
                           :description="'Single Page Web Apps, Progressive Web Apps, and website design using the vue.js progressive framework'">
                </InfoBlock>
            </li>

            <li>
                 <InfoBlock :title="'📱 App Development'" 
                           :description="'Vue.js Progressive Web Apps, Android, and Apple'">
                </InfoBlock>                
            </li>
        </ul>
    </div>



</template>

<style scoped>
</style>