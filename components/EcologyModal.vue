<script setup>
const isOpen = ref(false)


</script>

<template>
  <div>
    <UButton label="Ecology" @click="isOpen = true" />

    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow shrink'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-center">
            <h3 class="text-2xl font-semibold leading-6 text-emerald-700 dark:text-white">
              Ecology
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        
        <div class="flex flex-col h-full items-center">

            <div @click="emitEcology('mycorrhizal')" class="flex flex-col overflow-hidden w-1/2 text-center">
                <img class="" src="./images/mycorrhizal.png" alt="mycorrhizal">
                <p>Mycorrhizal</p>
            </div>
            <div @click="emitEcology('saprotrophic')" class="flex flex-col overflow-hidden w-1/2 text-center">
                <img class="" src="./images/saprotrophic.png" alt="saprotrophic">
                <p>Saprotrophic</p>
            </div>
            <div @click="emitEcology('parasitic')" class="flex flex-col overflow-hidden w-1/2 text-center">
                <img class="m-2" src="./images/parasitic.png" alt="parasitic" >
                <p>Parasitic</p>
            </div>
        </div>

      </UCard>
    </UModal>
  </div>
</template>
