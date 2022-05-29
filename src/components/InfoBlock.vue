<script setup>

 defineProps(['title', 'description'])
</script>


<template>
    <div class="bg-gray-700 text-gray-400 p-5 mt-3 mr-4 ml-4 max-w-2xl rounded-md lg:w-1/3 lg: h-32 sm:w-max inline-block align-middle drop-shadow">
        <div>
            <h2 class="block xl:inline align-text-bottom text-2xl tracking-tight font-extrabold sm:text-2xl">{{title}}</h2>
            <p class="text-1xl tracking-tight sm:text-lg ">{{description}}</p>
        </div>
    </div>
</template>
