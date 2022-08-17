<script setup>

defineProps(['title', 'description'])
</script>


<template>
    <div class=" flex justify-center p-4">
        <div class="bg-gray-100 rounded-md sm:w-1/2 p-8 border-gray-200 shadow-sm text-center">
            <div>
                <h2 class=" font-bold text-xl text-left pb-2">
                    {{ title }}
                </h2>
                <p class="text-left">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
