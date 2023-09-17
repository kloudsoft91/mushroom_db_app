<template>
    <Carousel :items-to-show="3.5" :wrap-around="true">
        <Slide :key="1">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/adnate.png" alt="Adnate">
                <p>Adnate</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/adnexed.png" alt="Adnexed">
                <p>Adnexed</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/decurrent.png" alt="Decurrent" >
                <p>Decurrent</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/emarginate.png" alt="Emarginate">
                <p>Emarginate</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/free.png" alt="Free">
                <p>Free</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/seceding.png" alt="Seceding" >
                <p>Seceding</p>
            </div>
        </Slide>
        <Slide :key="7">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/sinuate.png" alt="Sinuate">
                <p>Sinuate</p>
            </div>
        </Slide>
        <Slide :key="8">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/subdecurrent.png" alt="Subdecurrent">
                <p>Subdecurrent</p>
            </div>
        </Slide>
        <Slide :key="9">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/no-gills.png" alt="No Attachment" >
                <p>None</p>
            </div>
        </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
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
  })
  </script>