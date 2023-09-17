<template>
  <UAccordion :items="items">
    <template #item="{ item }">
      <p class="italic text-gray-900 text-center">
        {{ item.description }}
      </p>
    </template>
    <template #default="{ item, index, open }">
      <UButton color="white" variant="solid" class=" bg-emerald-500 text-white text-xl font-semibold hover:bg-emerald-400" :ui="{ rounded :'rounded-none', padding: { sm:'p-3' } }">
        <span class="truncate">{{ item.label }}</span>
        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
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
    <template #attachment>
      <AttachmentCarousel />
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
  defaultOpen: true,
  multiple: true,
  slot: 'ecology'
}, {
  label: 'Cap Shape',
  defaultOpen: true,
  multiple: true,
  slot: 'capshape'
},
{
  label: 'Attachment',
  defaultOpen: true,
  multiple: true,
  slot: 'attachment',
}, {
  label: 'Stipe',
  defaultOpen: true,
  multiple: true,
  slot: 'stipe',
}];
</script>