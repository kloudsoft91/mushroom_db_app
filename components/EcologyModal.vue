<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Ecology" @click="isOpen = true" />

    <!-- Custom fullscreen css because nuxt "fullscreen" prop has a bug where its padding makes it scroll -->
    <UModal v-model="isOpen" :ui="{ 
      container: 'h-full w-full', 
      height: 'h-full', 
      width: 'w-full sm:max-w-full', 
      margin: 'm-0', 
      rounded: 'rounded-none' 
    }">
      <UCard
        :ui="{
          base: 'h-full',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'flex flex-col h-[calc(100%-64px)] text-center gap-3'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <UTooltip text="Relationship of mushroom to it's physical surroundings">    
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#047857" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </UTooltip>
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Ecology
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
  

        <div @click="emitEcology('mycorrhizal')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 aspect-square" src="./images/mycorrhizal.png" alt="mycorrhizal">
          <p class="ecology-filters-small-screen">Mycorrhizal</p>
        </div>
        
        <div @click="emitEcology('saprotrophic')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0" src="./images/saprotrophic.png" alt="saprotrophic">
          <p class="ecology-filters-small-screen">Saprotrophic</p>
        </div>     
        <div @click="emitEcology('parasitic')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0" src="./images/parasitic.png" alt="parasitic" >
          <p class="ecology-filters-small-screen">Parasitic</p>
        </div>

      </UCard>
    </UModal>
  </div>
</template>
