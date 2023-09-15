<template>

    <Carousel :items-to-show="3" :wrap-around="true">
        <Slide :key="1">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/campanulate.png" alt="Campanulate">
                <p class="text-lg font-bold text-slate-500">Campanulate</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/conical.png" alt="Conical">
                <p class="text-lg font-bold text-slate-500">Conical</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/convex.png" alt="Convex" >
                <p class="text-lg font-bold text-slate-500">Convex</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/depressed.png" alt="Depressed">
                <p class="text-lg font-bold text-slate-500">Depressed</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/flat.png" alt="Flat">
                <p class="text-lg font-bold text-slate-500">Flat</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/infundibuliform.png" alt="Infundibuliform" >
                <p class="text-lg font-bold text-slate-500">Infundibuliform</p>
            </div>
        </Slide>
        <Slide :key="7">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/offset.png" alt="Offset">
                <p class="text-lg font-bold text-slate-500">Offset</p>
            </div>
        </Slide>
        <Slide :key="8">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/ovate.png" alt="Ovate">
                <p class="text-lg font-bold text-slate-500">Ovate</p>
            </div>
        </Slide>
        <Slide :key="9">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/umbillicate.png" alt="Umbillicate" >
                <p class="text-lg font-bold text-slate-500">Umbillicate</p>
            </div>
        </Slide>
        <Slide :key="10">
            <div class="">
                <img class="border-2 border-emerald-900 rounded-full" src="components/images/umbonate.png" alt="Umbonate" >
                <p class="text-lg font-bold text-slate-500">Umbonate</p>
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

 