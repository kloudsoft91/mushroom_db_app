<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Attachment" @click="isOpen = true" />

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
            base: 'grid grid-cols-2 h-[calc(100%-64px)] text-center gap-3'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <UTooltip text="How gills/undercap attaches to the stipe (stem)">    
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#047857" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </UTooltip>
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Attachment
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
  

        <div @click="emitGillAttach('adnate')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
            <img class="object-contain min-h-0 min-w-0" src="./images/adnate.png" alt="Adnate">
            <p class="ecology-filters-small-screen">Adnate</p>
          </div>
        
          <div @click="emitGillAttach('adnexed')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
            <img class="object-contain min-h-0 min-w-0" src="./images/adnexed.png" alt="Adnexed">
            <p class="ecology-filters-small-screen">Adnexed</p>
          </div>
        
          <div @click="emitGillAttach('decurrent')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
            <img class="object-contain min-h-0 min-w-0" src="./images/decurrent.png" alt="Decurrent" >
            <p class="ecology-filters-small-screen">Decurrent</p>
          </div>
     
        <div @click="emitGillAttach('emarginate')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/emarginate.png" alt="Emarginate" >
          <p class="ecology-filters-small-screen">Emarginate</p>
        </div>
      
        <div @click="emitGillAttach('free')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/free.png" alt="Free" >
          <p class="ecology-filters-small-screen">Free</p>
        </div>
     
        <div @click="emitGillAttach('seceding')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/seceding.png" alt="Seceding" >
          <p class="ecology-filters-small-screen">Seceding</p>
        </div>
     
        <div @click="emitGillAttach('sinuate')" class="flex flex-col aspect-square min-h-0 min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/sinuate.png" alt="Sinuate" >
          <p class="ecology-filters-small-screen">Sinuate</p>
        </div>
      
        <div @click="emitGillAttach('subdecurrent')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/subdecurrent.png" alt="Subdecurrent" >
          <p class="ecology-filters-small-screen">Subdecurrent</p>
        </div>
      
        <div @click="emitGillAttach('none')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/no-gills.png" alt="No Attachment" >
          <p class="ecology-filters-small-screen">No Attachment</p>
        </div>

      </UCard>
    </UModal>
  </div>
</template>
