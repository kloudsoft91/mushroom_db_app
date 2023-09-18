<template>
  <UAccordion :items="items">
    <template #item="{ item }">
      <p class="italic text-gray-900 text-center">
        {{ item.description }}
      </p>
    </template>
    <template #default="{ item, index, open }">
      <UButton color="white" variant="solid" class=" bg-emerald-700 text-white text-base font-semibold hover:bg-emerald-400" :ui="{ rounded :'rounded-none' }">
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
      <div class="flex items-center justify-around">
        <div class="mush-slide tablet:pl-8">
            <img class="cap-image" src="components/images/mycorrhizal.png" alt="mycorrhizal">
            <p>Mycorrhizal</p>
        </div>
        <div class="mush-slide">
            <img class="cap-image" src="components/images/saprotrophic.png" alt="saprotrophic">
            <p>Saprotrophic</p>
        </div>
        <div class="mush-slide tablet:pr-10">
            <img class="cap-image" src="components/images/parasitic.png" alt="parasitic" >
            <p>Parasitic</p>
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
      <div class="flex justify-around">
        <div class="mush-slide">
            <img class="cap-image" src="components/images/bare.png" alt="Bare Stipe">
            <p>Bare</p>
        </div>
        <div class="mush-slide">
            <img class="cap-image" src="components/images/Ring.png" alt="Ring Stipe">
            <p>Ring</p>
        </div>
        <div class="mush-slide">
            <img class="cap-image" src="components/images/volva.png" alt="Volva Stipe" >
            <p>Volva</p>
        </div>
        <div class="mush-slide">
            <img class="cap-image" src="components/images/volvaring.png" alt="Volva & Ring Stipe" >
            <p>Both</p>
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