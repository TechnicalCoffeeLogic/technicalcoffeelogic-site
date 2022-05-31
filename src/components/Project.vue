<script setup>

defineProps(['title', 'description', 'image'])
</script>


<template>
    <a href="https://genderle.com/" target="_blank">

        <div class="bg-gray-700 text-gray-400 pt-3 mt-3 mr-4 ml-4 max-w-2xl rounded-md inline-block drop-shadow 
                hover:text-white
                hover:bg-blue-500
                lg:w-5/6 lg:h-32 lg: text-center
                md: w-5/6
                sm:w-5/6">
            <div class="justify-items-start align-middle">
                <div class=" ">
                    <!-- <img :src="image" /> -->
                    <img alt="Technical Coffee Logic Logo" src="../assets/genderle-logo.png" class=" h-10 " />
                </div>
                <div class=" ">

                    <h2 class="tracking-tight font-extrabold 
                        text-2xl">
                        {{ title }}
                    </h2>
                    <p class="text-1xl tracking-tight sm:text-lg ">{{ description }}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped>
h2,
p {

    text-align: left;
}
</style>
