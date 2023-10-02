<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Cap Size" @click="isOpen = true" />

    <UModal v-model="isOpen" fullscreen :ui="{ 'inner': 'overflow-hidden'}">
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Cap Size
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <div class="grid grid-cols-1 gap-2 ">
          <p class="text-emerald-700 font-semibold">Stipe Length:</p>
          <div class="border-2 border-emerald-700">
            <input v-model="stipeLen" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Stipe Length" />
          </div>
          <p class="text-emerald-700 font-semibold">Stipe Diameter:</p>
          <div class="border-2 border-emerald-700">
            <input v-model="stipeDiam" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Stipe Width" />
          </div>
          <p class="text-emerald-700 font-semibold">Cap Diameter:</p>
          <div class="border-2 border-emerald-700">
            <input v-model="capDiam" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Cap Diameter" />
          </div>
          <p class="text-emerald-700 font-semibold">Cap Thickness:</p>
          <div class="border-2 border-emerald-700">
            <input v-model="capThick" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Cap Thickness" />
          </div>
        </div>  
        <!--Not implemented, but this button should apply the filters to the previous page-->
        <div class="flex justify-end mt-4">
          <UButton label="Add" color="emerald" @click="isOpen = true"/>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
