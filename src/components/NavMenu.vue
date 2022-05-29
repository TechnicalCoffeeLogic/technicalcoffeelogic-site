<script setup>

import {onUpdated, ref, watch} from 'vue';
import router from '../router';

const itemNotSelected = "text-gray-300 hover:bg-gray-700 hover:text-white";
const itemSelected = "bg-gray-900 text-white"
const visible = ref("hidden");
const homeSelected = ref(itemSelected);
const projectsSelected = ref(itemNotSelected);
const aboutSelected = ref(itemNotSelected);

watch(router.currentRoute, SelectedMenuOption,{});

/**
 * * purpose: change the visibility of mobile menu
 * * pass...: nothing
 * * return.: nothing
 */
function Visibility(){
    if (visible.value === "hidden"){
        visible.value = "block"
    }
    else {
        visible.value = "hidden";
    }
    
}

/**
 * * purpose: change the highlited menu option to show what has been selected
 * * pass...: nothing
 * * return.: nothing
 */
function SelectedMenuOption() {

    homeSelected.value = itemNotSelected;
    projectsSelected.value = itemNotSelected;
    aboutSelected.value = itemNotSelected;

    if (router.currentRoute.value.name === "Home"){
        homeSelected.value = itemSelected;
    } 
    else if (router.currentRoute.value.name === "Projects") {
        projectsSelected.value = itemSelected;
    }
    else {
        aboutSelected.value = itemSelected;
    }

}

/**
 * * purpose: change the highlited menu option of the mobile nav to show what has been selected
 * * pass...: nothing
 * * return.: nothing
 */
function SelectedMobileMenuOption() {
    SelectedMenuOption();
    Visibility();

}

</script>

<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false" @click="Visibility()">
                        <span class="sr-only">Open main menu</span>
                        <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="block lg:hidden h-8 w-auto"
                            src="../assets/coffee-cup.svg" alt="Workflow">
                        <img class="hidden lg:block h-8 w-auto"
                            src="../assets/coffee-cup.svg" alt="Workflow">>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <router-link to="/" class="px-3 py-2 rounded-md text-sm font-medium" :class="homeSelected">Home</router-link>

                            <router-link to="/projects" class="px-3 py-2 rounded-md text-sm font-medium" :class="projectsSelected">Projects</router-link>
                        
                            <router-link to="/about" class="px-3 py-2 rounded-md text-sm font-medium" :class="aboutSelected">About</router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" :class="visible" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/" :class="homeSelected" class="block px-3 py-2 rounded-md text-base font-medium"
                    @click="Visibility()">Home</router-link>

                <router-link to="/projects" :class="projectsSelected" class="block px-3 py-2 rounded-md text-base font-medium" 
                    @click="Visibility()">Projects</router-link>

                <router-link to="/about" :class="aboutSelected" class="block px-3 py-2 rounded-md text-base font-medium" 
                    @click="Visibility()">About</router-link>

            </div>
        </div>
    </nav>
</template>
