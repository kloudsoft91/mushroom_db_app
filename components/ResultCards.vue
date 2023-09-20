<template>
    <div >
      <!-- Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 w-11/12 desktop:w-3/4 mx-auto">
        <!-- Create card for each item in the data file -->
        <div
          v-for="(mushroom, index) in mushroomData"
          :key="index"
          class="block max-w-[18rem] rounded-lg bg-gray-200 tablet:shadow-md desktop:shadow-md dark:bg-neutral-700 flex flex-col overflow-hidden"
        >
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img class="rounded-t-lg" src="~/assets/images/mushy.jpg" alt="this is a pic of a mushy" />
            <!-- Adds a warning label for toxic mushrooms -->
            <span
              v-if="mushroom.edibility.includes('toxic')"
              class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
              >
              Warning: Toxic
            </span>
          </div>
          <div class="p-4 flex-grow">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {{ mushroom.common_names }}
            </h5>
            <!-- Table with mushroom info -->
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold max-w-[50%] truncate align-top">Latin name</td>
                    <td class="px-2 py-2 align-top">{{ mushroom.latin_names }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold align-top">Edibility</td>
                    <td class="px-2 py-2 align-top">{{ mushroom.edibility }}</td>
                </tr>
            </tbody></table>
          </div>
          <!-- Links for further details -->
          <div class="p-4 ">
            <div class="flex justify-center space-x-4">
              <a
                type="button"
                href="#"
                class="pointer-events-auto inline-block cursor-pointer text-base font-normal leading-normal text-emerald-500 hover:text-emerald-800 focus:text-purple-600"
              >
                Details
                <!-- ADD POP UP WINDOW FOR FURTHER DETAILS -->
              </a>
              <!-- Only shows Lookalike button if the mushroom has lookalikes -->
              <span v-if="mushroom.lookalikes">
                <a
                  type="button"
                  href="#"
                  class="pointer-events-auto inline-block cursor-pointer text-base font-normal leading-normal text-emerald-500 hover:text-emerald-800 focus:text-purple-600"
                >
                  Lookalikes
                  <!-- ADD POP UP WINDOW OR SOMETHING FOR LOOKALIKE SHROOMS -->
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </template>
  

  <!-- THIS WILL NEED TO BE CHANGED - to filteredMushrooms once index.vue is complete -->
  <script setup>
    import mushroomData from '~/data/sampledata.js'
  </script>
  