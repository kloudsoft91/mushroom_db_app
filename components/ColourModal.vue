<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Cap Colour" @click="isOpen = true" />

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
            base: 'grid grid-cols-4 gap-4 h-[calc(100%-64px)] text-center'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Cap Colour
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
  
        
          <div @click="emitCapColour('black')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-black border-double border-4 rounded-xl border-green-600" alt="Black">
            <p class="capcolor-text">Black</p>
          </div>
        
        
          <div @click="emitCapColour('dark brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#2f1c18] border-double border-4 rounded-xl border-green-600" alt="Dark Brown">
            <p class="capcolor-text">Dark Brown</p>
          </div>
        
          <div @click="emitCapColour('brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-yellow-950 border-double border-4 rounded-xl border-green-600" alt="Brown">
            <p class="capcolor-text">Brown</p>
          </div>

        <div @click="emitCapColour('red brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#6E260E] border-double border-4 rounded-xl border-green-600" alt="Red Brown" >
          <p class="capcolor-text">Red Brown</p>
        </div>

        <div @click="emitCapColour('olive brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#6d5d46] border-double border-4 rounded-xl border-green-600" alt="Olive Brown">
          <p class="capcolor-text">Olive Brown</p>
        </div>
        
        <div @click="emitCapColour('tan')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#D2B48C] border-double border-4 rounded-xl border-green-600" alt="Tan">
          <p class="capcolor-text">Tan</p>
        </div>

        <div @click="emitCapColour('buff')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#DAA06D] border-double border-4 rounded-xl border-green-600" alt="Buff">
          <p class="capcolor-text">Buff</p>
        </div>
      
        <div @click="emitCapColour('cream')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#FFFDD0] border-double border-4 rounded-xl border-green-600" alt="Cream">
          <p class="capcolor-text">Cream</p>
        </div>
        
        <div @click="emitCapColour('white')" class="flex flex-col min-h-0 aspect-square min-w-0 border-double border-4 rounded-xl border-green-600" alt="White">
          <p class="capcolor-text">White</p>
        </div>

        <div @click="emitCapColour('pink')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#ffe4e1] Sborder-double border-4 rounded-xl border-green-600" alt="Pink">
          <p class="capcolor-text">Pink</p>
        </div>

        <div @click="emitCapColour('pink brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#b17261] border-double border-4 rounded-xl border-green-600" alt="Pink Brown">
          <p class="capcolor-text">Pink Brown</p>
        </div>

        <div @click="emitCapColour('salmon')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#FA8072] border-double border-4 rounded-xl border-green-600" alt="Salmon">
          <p class="capcolor-text">Salmon</p>
        </div>

        <div @click="emitCapColour('red')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#FF2400] border-double border-4 rounded-xl border-green-600" alt="Red">
          <p class="capcolor-text">Red</p>
        </div>

        <div @click="emitCapColour('purple brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#2e222b] border-double border-4 rounded-xl border-green-600" alt="Purple Brown">
          <p class="capcolor-text">Purple Brown</p>
        </div>

        <div @click="emitCapColour('purple')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#2f1a40] border-double border-4 rounded-xl border-green-600" alt="Purple">
          <p class="capcolor-text">Purple</p>
        </div>

        <div @click="emitCapColour('dark purple')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#1c161b] border-double border-4 rounded-xl border-green-600" alt="Dark Purple">
          <p class="capcolor-text">Dark Purple</p>
        </div>

        <div @click="emitCapColour('yellow')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#FFFF8F] border-double border-4 rounded-xl border-green-600" alt="Yellow">
          <p class="capcolor-text">Yellow</p>
        </div>

        <div @click="emitCapColour('yellow brown')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#F4BB44] border-double border-4 rounded-xl border-green-600" alt="Yellow Brown">
          <p class="capcolor-text">Yellow Brown</p>
        </div>

        <div @click="emitCapColour('yellow orange')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#FFAA33] border-double border-4 rounded-xl border-green-600" alt="Yellow Orange">
          <p class="capcolor-text">Yellow Orange</p>
        </div>
     
        <div @click="emitCapColour('ochre')" class="flex flex-col aspect-square min-h-0 min-w-0 bg-[#CC7722] border-double border-4 rounded-xl border-green-600" alt="Ochre">
          <p class="capcolor-text">Ochre</p>
        </div>

        <div @click="emitCapColour('green')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#6B8E23] border-double border-4 rounded-xl border-green-600" alt="Green">
          <p class="capcolor-text">Green</p>
        </div>
      
        <div @click="emitCapColour('olive')" class="flex flex-col min-h-0 aspect-square min-w-0 bg-[#808000] border-double border-4 rounded-xl border-green-600" alt="Olive" >
          <p class="capcolor-text">Olive</p>
        </div>

       
      
      </UCard>
    </UModal>
  </div>
</template>
