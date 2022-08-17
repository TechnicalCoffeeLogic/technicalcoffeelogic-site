<script setup>

defineProps(['title', 'description', 'src','url'])
</script>


<template>
    <a :href="'url'" target="_blank" class=" p-4">        
        <div class="bg-gray-700 text-gray-400 hover:text-white hover:bg-blue-500">
            <div class="flex items-center justify-center">
                <div class=" pl-3 pb-2">
                    <!-- <img :src="image" /> -->
                    <img alt="genderle logo" :src="src" class="lg:h-20 h-10" />
                </div>

                <div class="pl-3">

                    <h2 class="tracking-tight font-extrabold 
                        lg:text-5xl
                        text-xl"
                        >
                        {{ title }}
                    </h2>
                    <p class="text-1xl tracking-tight sm:text-lg ">{{ description }}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped>

h2, p {

    text-align: left;
}
</style>
