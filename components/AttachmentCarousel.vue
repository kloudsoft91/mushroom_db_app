<template>
    <Carousel :items-to-show="3.5" :wrap-around="true">
        <Slide :key="1">
            <div @click="emitGillAttach('adnate')" class="mush-slide">
                <img class="cap-image" src="./images/adnate.png" alt="Adnate">
                <p>Adnate</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div @click="emitGillAttach('adnexed')" class="mush-slide">
                <img class="cap-image" src="./images/adnexed.png" alt="Adnexed">
                <p>Adnexed</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div @click="emitGillAttach('decurrent')" class="mush-slide">
                <img class="cap-image" src="./images/decurrent.png" alt="Decurrent" >
                <p>Decurrent</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div @click="emitGillAttach('emarginate')" class="mush-slide">
                <img class="cap-image" src="./images/emarginate.png" alt="Emarginate">
                <p>Emarginate</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div @click="emitGillAttach('free')" class="mush-slide">
                <img class="cap-image" src="./images/free.png" alt="Free">
                <p>Free</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div @click="emitGillAttach('seceding')" class="mush-slide">
                <img class="cap-image" src="./images/seceding.png" alt="Seceding" >
                <p>Seceding</p>
            </div>
        </Slide>
        <Slide :key="7">
            <div @click="emitGillAttach('sinuate')" class="mush-slide">
                <img class="cap-image" src="./images/sinuate.png" alt="Sinuate">
                <p>Sinuate</p>
            </div>
        </Slide>
        <Slide :key="8">
            <div @click="emitGillAttach('subdecurrent')" class="mush-slide">
                <img class="cap-image" src="./images/subdecurrent.png" alt="Subdecurrent">
                <p>Subdecurrent</p>
            </div>
        </Slide>
        <Slide :key="9">
            <div @click="emitGillAttach('none')" class="mush-slide">
                <img class="cap-image" src="./images/no-gills.png" alt="No Attachment" >
                <p>None</p>
            </div>
        </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent, nextTick } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      currentSlide: 0,
    }),
    methods: {
        emitGillAttach(gillAttach){
            nextTick(() => {
                this.selectedGillAttach = gillAttach;
                //emit event
                this.$emit('selectedGillAttach', gillAttach);
            }); 
        },
    },
  })
  </script>