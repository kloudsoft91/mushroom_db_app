<template>
    <Carousel :items-to-show="3.5" :wrap-around="true">
        <Slide :key="1">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/campanulate.png" alt="Campanulate">
                <p>Campanulate</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/conical.png" alt="Conical">
                <p>Conical</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/convex.png" alt="Convex" >
                <p>Convex</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/depressed.png" alt="Depressed">
                <p>Depressed</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/flat.png" alt="Flat">
                <p>Flat</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/infundibuliform.png" alt="Infundibuliform" >
                <p>Infundibuliform</p>
            </div>
        </Slide>
        <Slide :key="7">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/offset.png" alt="Offset">
                <p>Offset</p>
            </div>
        </Slide>
        <Slide :key="8">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/ovate.png" alt="Ovate">
                <p>Ovate</p>
            </div>
        </Slide>
        <Slide :key="9">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/umbillicate.png" alt="Umbillicate" >
                <p>Umbillicate</p>
            </div>
        </Slide>
        <Slide :key="10">
            <div class="mush-slide">
                <img class="cap-image" src="components/images/umbonate.png" alt="Umbonate" >
                <p>Umbonate</p>
            </div>
        </Slide>
        <!--<Carousel :items-to-show="10" :wrap-around="true">
            <Slide v-for="data in whateverData" :key="data.name">
                ... other stuff using data in here i guess?
            </Slide>-->
            


  
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