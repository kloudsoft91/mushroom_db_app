<template>
    <div class="bg-gray-100">
      <!-- Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-11/12 desktop:w-3/4 mx-auto mt-6 tablet:-mt-6 desktop:-mt-5">
        <div
          v-for="(item, index) in mushroomData"
          :key="index"
          class="block max-w-[18rem] rounded-lg bg-white shadow-[0 2px 15px -3px rgba(0,0,0,0.07),0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img class="rounded-t-lg" src="./mushy.jpg" alt="" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {{ item.common_names }}
            </h5>
            <p class="text-base text-neutral-600 dark:text-neutral-200">
              {{ item.description }}
            </p>
          </div>
          <ul class="w-full">
            <li
              v-for="(liItem, liIndex) in item.list"
              :key="liIndex"
              class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50"
            >
              {{ liItem }}
            </li>
          </ul>
          <div class="p-6">
            <a
              type="button"
              href="#"
              class="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
            >
              Details
            </a>
            <a
              type="button"
              href="#"
              class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
            >
              Lookalikes
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import mushroomData from '~/data/sampledata.js'
  </script>
  