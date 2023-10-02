<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Stipe" @click="isOpen = true" />

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
            base: 'grid grid-col-1 h-[calc(100%-64px)] text-center gap-3'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Stipe
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
  

        <div @click="emitStipe('bare')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 aspect-square" src="./images/bare.png" alt="Bare">
          <p class="ecology-filters-small-screen">Bare</p>
        </div>
        
        <div @click="emitStipe('ring')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0" src="./images/ring.png" alt="Ring">
          <p class="ecology-filters-small-screen">Ring</p>
        </div>     
        <div @click="emitStipe('volva')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0" src="./images/volva.png" alt="Volva" >
          <p class="ecology-filters-small-screen">Volva</p>
        </div>
        <div @click="emitStipe('volva ring')" class="flex flex-col min-h-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0" src="./images/volvaring.png" alt="Volva and Ring" >
          <p class="ecology-filters-small-screen">Both</p>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
