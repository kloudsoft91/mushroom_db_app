<style>

/*sets bottom sheet to sit above footer bar*/
.bottom-sheet {
    bottom: 80px !important;  
}
/*sets bottom sheet to sit above footer bar*/
.bottom-sheet__content {
    height: auto !important;
    width: 100%;
}

/*hides header and cursor of the bottom sheet*/
.bottom-sheet__header {
    cursor: none !important;
    height: 0px !important;
}

/*hides slide up/down thumb*/
.bottom-sheet__draggable-thumb {
    height: 0px !important;
}

.bottom-sheet__main {
  overflow-y: visible !important;
}
</style>

<template>
  <div>
  <!-- add class="bg-white" to the end of the button label to hide buttons for testing-->
    <UButton label="Filters" @click="open()" class="" />
    <client-only>
      <vue-bottom-sheet ref="myBottomSheet" :can-swipe="false" overlay-color="#00000000" :max-width="9999999999999">
        <div class=" max-h-[340px] overflow-auto border-solid border-2">
            
            <FilterBar @selectedCapShape="emitCapShape" @selectedGillAttach="emitGillAttach" @selectedEcology="emitEcology" @selectedStipe="emitStipe"/>    
        </div>

        
      </vue-bottom-sheet>
    </client-only>
  </div>
  </template>
 
 <script>
 import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
 import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
 import { ref, onBeforeUpdate } from "vue";
 
 export default {
   setup() {
     const myBottomSheet = ref(null);
 
     onBeforeUpdate(() => {
       myBottomSheet.value.initHeight();
     });
 
     const open = () => {
       myBottomSheet.value.open();
     };
 
     const close = () => {
       myBottomSheet.value.close();
     };

     const openCarouselInputs =() =>{
      open();
     };
     const closeCarouselInputs =() =>{
      close();
     };
 
     return {
       myBottomSheet,
       open,
       close,
       openCarouselInputs,
       closeCarouselInputs,
     };
   },
   methods: {
     emitCapShape(capShape) {
       this.selectedCapShape = capShape;
       //emit event to parent component (Index.vue)
       this.$emit('selectedCapShape', capShape);
     },
     emitGillAttach(gillAttach){ {
      this.selectedGillAttach = gillAttach;
      this.$emit('selectedGillAttach', gillAttach);
     }

     },
     emitEcology(ecology) {
      this.selectedEcology = ecology;
      //emit event to parent component (BottomFrame.vue)
      this.$emit('selectedEcology', ecology);
    },
    emitStipe(stipe) {
      this.selectedStipe = stipe;
      //emit event to parent component (BottomFrame.vue)
      this.$emit('selectedStipe', stipe);
    },
   },
   components: {
    VueBottomSheet,
   },
 };
 </script>