<template>
  <UAccordion :items="items">
    <template #item="{ item }">
      <p class="italic text-gray-900 text-center">
        {{ item.description }}
      </p>
    </template>
    <template #ecology>
      <div class="grid grid-cols-3 gap-4 place-items-center text-gray-900 text-center">
        <div class="">
            <img class="border-2 border-emerald-900 rounded-full" src="components/images/mycorrhizal.png" alt="mycorrhizal">
            <p class="text-base font-semibold text-slate-500  mt-2">Mycorrhizal</p>
        </div>
        <div class="">
            <img class="border-2 border-emerald-900 rounded-full" src="components/images/saprotrophic.png" alt="saprotrophic">
            <p class="text-base font-semibold text-slate-500 mt-2">Saprotrophic</p>
        </div>
        <div class="">
            <img class="border-2 border-emerald-900 rounded-full" src="components/images/parasitic.png" alt="parasitic" >
            <p class="text-base font-semibold text-slate-500 mt-2">Parasitic</p>
        </div>
      </div>
    </template>
    <template #capshape>
      <CapCarousel />
    </template>
    <template #stipe>
      <div class="flex flex-row space-x-4  text-gray-900 text-center">
        <div class="">
            <img class="border border-3 border-emerald-900 rounded-full" src="components/images/bare.png" alt="Bare Stipe">
            <p class="text-base font-semibold text-slate-500">Bare</p>
        </div>
        <div class="">
            <img class="border border-3 border-emerald-900 rounded-full" src="components/images/Ring.png" alt="Ring Stipe">
            <p class="text-base font-semibold text-slate-500">Ring</p>
        </div>
        <div class="">
            <img class="border border-3 border-emerald-900 rounded-full" src="components/images/volva.png" alt="Volva Stipe" >
            <p class="text-base font-semibold text-slate-500">Volva</p>
        </div>
        <div class="">
            <img class=" border border-3 border-emerald-900 rounded-full" src="components/images/volvaring.png" alt="Volva & Ring Stipe" >
            <p class="text-base font-semibold text-slate-500">Both</p>
        </div>
      </div>
    </template>
  </UAccordion>
</template>

<script setup>
const items = [{
  label: 'Ecology',
  icon: 'i-heroicons-information-circle',
  defaultOpen: false,
  multiple: true,
  slot: 'ecology'
}, {
  label: 'Cap Shape',
  icon: 'i-heroicons-arrow-down-tray',
  defaultOpen: false,
  multiple: true,
  slot: 'capshape'
}, {
  label: 'Stipe',
  icon: 'i-heroicons-eye-dropper',
  defaultOpen: false,
  multiple: true,
  slot: 'stipe'
}];
</script>