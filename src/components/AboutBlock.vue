<script setup>

defineProps(['title','blurb']);

</script>

<template>
<div class="bg-gray-700 text-gray-400 p-3 mt-3 mr-4 ml-4 w-5/6 rounded-md inline-block align-middle drop-shadow                
            lg: text-center">
        <div>
            <h2 class="block xl:inline align-text-bottom tracking-tight font-extrabold 
                        text-2xl">
                {{title}}
            </h2>
            <p class="text-1xl tracking-tight sm:text-lg ">{{blurb}}</p>
        </div>
    </div>
</template>

<style scoped>
</style>