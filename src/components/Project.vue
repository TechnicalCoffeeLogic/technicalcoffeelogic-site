<script setup>

defineProps(['title', 'description', 'src'])
</script>


<template>
    <a href="https://genderle.com/" target="_blank">        
        <div class="bg-gray-700 text-gray-400 pt-5 pb-3 mt-3 mr-4 ml-4 max-w-2xl rounded-md inline-block drop-shadow                 
                hover:text-white
                hover:bg-blue-500
                lg:w-5/6 lg:h-32 lg: text-center
                md: w-5/6
                sm:w-5/6">
            <div class="flex items-center justify-center">
                <div class=" pl-3 pb-2">
                    <!-- <img :src="image" /> -->
                    <img alt="genderle logo" :src="src"
                        class="lg:h-20 
                                h-10" />
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
