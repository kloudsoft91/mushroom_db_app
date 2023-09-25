<template>
  <UAccordion :items="items">
    <template #item="{ item }">
      <p class="italic text-gray-900 text-center">
        {{ item.description }}
      </p>
    </template>
    <template #default="{ item, index, open }">
      <UButton color="white" variant="solid" class=" bg-emerald-700 text-white text-base font-semibold hover:bg-emerald-500" :ui="{ rounded :'rounded-none' }">
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
        <div @click="emitEcology('mycorrhizal')" class="mush-slide tablet:pl-8">
            <img class="cap-image" src="./images/mycorrhizal.png" alt="mycorrhizal">
            <p>Mycorrhizal</p>
        </div>
        <div @click="emitEcology('saprotrophic')" class="mush-slide">
            <img class="cap-image" src="./images/saprotrophic.png" alt="saprotrophic">
            <p>Saprotrophic</p>
        </div>
        <div @click="emitEcology('parasitic')" class="mush-slide tablet:pr-10">
            <img class="cap-image" src="./images/parasitic.png" alt="parasitic" >
            <p>Parasitic</p>
        </div>
      </div>
    </template>
    <template #capshape>
      
        <CapCarousel @selectedCapShape="emitCapShape"/>
      
    </template>
    <template #attachment>
      <AttachmentCarousel @selectedGillAttach="emitGillAttach"/>
    </template>
    <template #stipe>
      <div class="flex justify-around">
        <div @click="emitStipe('bare')" class="mush-slide">
            <img class="cap-image" src="./images/bare.png" alt="Bare Stipe">
            <p>Bare</p>
        </div>
        <div @click="emitStipe('ring')" class="mush-slide">
            <img class="cap-image" src="./images/Ring.png" alt="Ring Stipe">
            <p>Ring</p>
        </div>
        <div @click="emitStipe('volva')" class="mush-slide">
            <img class="cap-image" src="./images/volva.png" alt="Volva Stipe" >
            <p>Volva</p>
        </div>
        <div @click="emitStipe('volva ring')" class="mush-slide">
            <img class="cap-image" src="./images/volvaring.png" alt="Volva & Ring Stipe" >
            <p>Both</p>
        </div>
      </div>
    </template>
  </UAccordion>
</template>

<script>
import { nextTick } from 'vue';
export default {
  data() {
    return {
      selectedEcology: '',
      selectedStipe: '',
      items: [
        {
          label: 'Ecology',
          defaultOpen: true,
          multiple: true,
          slot: 'ecology'
        },
        {
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
        },
        {
          label: 'Stipe',
          defaultOpen: true,
          multiple: true,
          slot: 'stipe',
        }
      ],
    };
  },
  methods: {
    //emits cap shape on button click
    emitCapShape(capShape) {
      this.selectedCapShape = capShape;
      //emit event to parent component (BottomFrame.vue)
      this.$emit('selectedCapShape', capShape);
    },
    emitGillAttach(gillAttach){
      this.selectedGillAttach = gillAttach;
      //emit to parent component (BottomFrame)
      this.$emit('selectedGillAttach', gillAttach);
    },
    emitEcology(ecology) {
      nextTick(() => {
        this.selectedEcology = ecology;
        //emit event to parent component (BottomFrame.vue)
        this.$emit('selectedEcology', ecology);
      });  
    },
    emitStipe(stipe) {
      nextTick(() => {
        this.selectedStipe = stipe;
        //emit event to parent component (BottomFrame.vue)
        this.$emit('selectedStipe', stipe);
      });
    },
  }
};
</script>