<script setup>

defineProps(['title', 'blurb']);

</script>

<template>
    <div class=" flex justify-center p-4">
        <div class="bg-gray-100 text-gray-700 shadow-sm rounded-md sm:w-1/2 text-left p-4">
            <div>
                <h2 class="font-extrabold text-2xl pb-2">
                    {{ title }}
                </h2>
                <p class="text-1xl tracking-tight sm:text-lg ">{{ blurb }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>