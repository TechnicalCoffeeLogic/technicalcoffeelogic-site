<script setup>

    defineProps(['headerTitle','subTitle']);

</script>

<template>

    <div class="text-center pt-7">
        <h1 class="text-3xl font-extrabold text-gray-900 ">
            <span class="">{{headerTitle}}</span>
        </h1>
    </div>

    <div class="m-3">
        <p class="text-xl">
            {{subTitle}}
        </p>
    </div>

</template>

<style scoped>
</style>