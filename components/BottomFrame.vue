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
</style>

<template>
    <UButton label="Open" @click="open()"/>
    <client-only>
      <vue-bottom-sheet ref="myBottomSheet" :can-swipe="false" overlay-color="#00000000" :max-width="9999999999999">
        <div class=" border-solid border-2">
            
            <FilterBar />    
        </div>

        
      </vue-bottom-sheet>
    </client-only>
  </template>
 
  <script setup>
  import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
  import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
  import { ref, onBeforeUpdate } from "vue";
  
  const myBottomSheet = ref(null)

  onBeforeUpdate(() => {
  myBottomSheet.initHeight()
  
})
  const open = () => {
    myBottomSheet.value.open();
  }
  
  const close = () => {
    myBottomSheet.value.close();
  }
  </script>