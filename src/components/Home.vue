<script setup>
import FeatureSection from './FeatureSection.vue';
import ContactBlock from './ContactBlock.vue';
import { ChevronRightIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
</script>

<template>
  <div class="relative overflow-hidden">
    <main>
      <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div class="lg:py-24">                
                <h1 class="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl sm:tracking-tight lg:mt-6 xl:text-6xl xl:tracking-tight">
                  <span class="block">writing code</span>
                  <span class="block text-indigo-400">to the glory of God</span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">turning the world upside down for Christ with each product developed</p>
                <div class="mt-10 sm:mt-12">
                  
                </div>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="../../public/TCLCoffeeCupOutline.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
      <FeatureSection></FeatureSection>
      <ContactBlock></ContactBlock>
    </main>
  </div>
</template>

