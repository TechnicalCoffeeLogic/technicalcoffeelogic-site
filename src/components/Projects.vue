<script setup>
import { CheckCircleIcon, ChevronRightIcon, GlobeIcon } from '@heroicons/vue/solid'

const projects = [
  {
    project: {
      name: 'Genderle',
      email: 'genderle.com',
      imageUrl:
        '../../genderle-logo.png',
    },
    desc: 'Like wordle but with gender',
    dateFull: '',
    stage: 'live',
    href: 'https://genderle.com/',
  },
  {
    project: {
      name: 'Kingdom Politics',
      email: 'kingdompolitcs.io',
      imageUrl:
        '../../kingdompolitics-logo.ico',
    },
    desc: 'The app that will save politics in your city',
    dateFull: '',
    stage: 'live',
    href: 'https://kingdompolitics.io/',
  },
]
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class=" flex justify-center pt-4 pb-40 sm:pb-60">
  <div class="bg-white shadow overflow-hidden sm:rounded-md w-5/6 sm:w-2/3 rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="proj in projects" :key="proj.project.email">
        <a :href="proj.href" target="_blank" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" :src="proj.project.imageUrl" alt="" />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">{{ proj.project.name }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <GlobeIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="truncate">{{ proj.project.email }}</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">                      
                      {{proj.desc}}
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                      {{ proj.stage }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

