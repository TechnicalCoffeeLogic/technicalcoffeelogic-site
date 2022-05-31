<script setup>

    defineProps(['headerTitle','subTitle']);

</script>

<template>

    <div class="sm:text-center lg:text-center mt-3">
        <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline align-text-bottom">{{headerTitle}}</span>
        </h1>
    </div>

    <div class="m-3">
        <p class="text-1xl tracking-tight">
            {{subTitle}}
        </p>
    </div>

</template>

<style scoped>
</style>