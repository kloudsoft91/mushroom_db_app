<template>

    <Carousel :items-to-show="3" :wrap-around="true">
        <Slide :key="1">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/adnate.png" alt="Adnate">
                <p class="text-lg font-bold text-slate-500">Adnate</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/adnexed.png" alt="Adnexed">
                <p class="text-lg font-bold text-slate-500">Adnexed</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/decurrent.png" alt="Decurrent" >
                <p class="text-lg font-bold text-slate-500">Decurrent</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/emarginate.png" alt="Emarginate">
                <p class="text-lg font-bold text-slate-500">Emarginate</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/free.png" alt="Free">
                <p class="text-lg font-bold text-slate-500">Free</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/seceding.png" alt="Seceding" >
                <p class="text-lg font-bold text-slate-500">Seceding</p>
            </div>
        </Slide>
        <Slide :key="7">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/sinuate.png" alt="Sinuate">
                <p class="text-lg font-bold text-slate-500">Sinuate</p>
            </div>
        </Slide>
        <Slide :key="8">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/subdecurrent.png" alt="Subdecurrent">
                <p class="text-lg font-bold text-slate-500">Subdecurrent</p>
            </div>
        </Slide>
        <Slide :key="9">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/no-gills.png" alt="No Attachment" >
                <p class="text-lg font-bold text-slate-500">None</p>
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
  })
  </script>