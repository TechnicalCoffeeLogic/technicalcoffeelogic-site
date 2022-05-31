<script setup>

 defineProps(['title', 'description'])
</script>


<template>
    <div class="bg-gray-700 text-gray-400 pt-3 pb-2 mt-3 mr-4 ml-4 max-w-2xl rounded-md inline-block align-middle drop-shadow                
                lg:w-5/6 lg:h-32 lg: text-center
                md: w-5/6
                sm:w-5/6">
        <div>
            <h2 class="block xl:inline align-text-bottom tracking-tight font-extrabold 
                        text-2xl">
                {{title}}
            </h2>
            <p class="text-1xl tracking-tight sm:text-lg ">{{description}}</p>
        </div>
    </div>
</template>
