<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Cap Shape" @click="isOpen = true" />

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
            base: 'grid grid-cols-2 gap-4 h-[calc(100%-64px)] text-center'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Cap Shape
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
  
        
          <div @click="emitCapShape('campanulate')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
            <img class="object-contain min-h-0 min-w-0" src="./images/campanulate.png" alt="Campanulate">
            <p class="ecology-filters-small-screen">Campanulate</p>
          </div>
        
        
          <div @click="emitCapShape('conical')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
            <img class="object-contain min-h-0 min-w-0" src="./images/conical.png" alt="Conical">
            <p class="ecology-filters-small-screen">Conical</p>
          </div>
        
          <div @click="emitCapShape('convex')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
            <img class="object-contain min-h-0 min-w-0" src="./images/convex.png" alt="Convex" >
            <p class="ecology-filters-small-screen">Convex</p>
          </div>
     
        <div @click="emitCapShape('depressed')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/depressed.png" alt="Depressed" >
          <p class="ecology-filters-small-screen">Depressed</p>
        </div>
      
        <div @click="emitCapShape('flat')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/flat.png" alt="Flat" >
          <p class="ecology-filters-small-screen">Flat</p>
        </div>
     
        <div @click="emitCapShape('infundibuliform')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/infundibuliform.png" alt="Infundibuliform" >
          <p class="ecology-filters-small-screen">Infundibuliform</p>
        </div>
     
        <div @click="emitCapShape('offset')" class="flex flex-col aspect-square min-h-0 min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/offset.png" alt="Offset" >
          <p class="ecology-filters-small-screen">Offset</p>
        </div>
      
        <div @click="emitCapShape('ovate')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/ovate.png" alt="Ovate" >
          <p class="ecology-filters-small-screen">Ovate</p>
        </div>
      
        <div @click="emitCapShape('umbillicate')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/umbillicate.png" alt="Umbillicate" >
          <p class="ecology-filters-small-screen">Umbillicate</p>
        </div>
      
        <div @click="emitCapShape('umbonate')" class="flex flex-col min-h-0 aspect-square min-w-0 Sborder-double border-4 rounded-xl border-green-600">
          <img class="object-contain min-h-0 min-w-0" src="./images/umbonate.png" alt="Umbonate" >
          <p class="ecology-filters-small-screen">Umbonate</p>
        </div>
      
      </UCard>
    </UModal>
  </div>
</template>
