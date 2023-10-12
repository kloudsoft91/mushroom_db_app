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
        <div class="mush-slide">
            <img class="cap-image" src="./images/ring.png" alt="Ring Stipe">
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
    <template #capcolour>
      <CapColourCarousel @selectedCapColour="emitCapColour"/>
    </template>

    <template #stipecolour>
      <StipeColourCarousel @selectedStipeColour="emitStipeColour"/>
    </template>

    <template #month>
      <div class="flex items-center justify-around">
        <select @click="emitMonth(selectedMonth)" v-model="selectedMonth">
          <option disabled value="">Select Month</option>
          <option></option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
        <div>
          {{ currentMonth() }}
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
      stipeColour: '',
      capColour: '',
      selectedMonth: '',
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
        },
        {
          label: 'Month',
          defaultOpen: true,
          multiple: true,
          slot: 'month'
        },
        {
          label: 'Cap Colour',
          defaultOpen: true,
          multiple: true,
          slot: 'capcolour'
        },
        {
          label: 'Stipe Colour',
          defaultOpen: true,
          multiple: true,
          slot: 'stipecolour'
        },
      ],
    };
  },
  methods: {
    currentMonth() {
      const current = new Date();
      const date = current.getMonth();
      switch (date) {
      case 0:
      return "Current Month: January";
      case 1:
      return "Current Month: February";
      case 2:
      return "Current Month: March";
      case 3:
      return "Current Month: April";
      case 4:
      return "Current Month: May";
      case 5:
      return "Current Month: June";
      case 6:
      return "Current Month: July";
      case 7:
      return "Current Month: August";
      case 8:
      return "Current Month: September";
      case 9:
      return "Current Month: October";
      case 10:
      return "Current Month: November";
      case 11:
      return "Current Month: December";
      }
      return date;
    },
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
    emitMonth(selectedMonth) {
      nextTick(() => {
      //emit event to parent component (BottomFrame.vue)
      this.selectedMonth = selectedMonth;
      console.log("selectedMonth emit:" + this.selectedMonth);
      this.$emit('selectedMonth', this.selectedMonth);
      });
    },
    emitStipeColour(stipeColour) {
      nextTick(() => {
      //emit event to parent component (BottomFrame.vue)
      this.selectedStipeColour = stipeColour;
      this.$emit('selectedStipeColour', stipeColour);
      });
    }, 
    emitCapColour(capColour) {
      nextTick(() => {
      //emit event to parent component (BottomFrame.vue)
      this.selectedCapColour = capColour;
      this.$emit('selectedCapColour', capColour);
      });
    }
  }
};
</script>