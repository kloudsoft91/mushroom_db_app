<template>
    <Carousel :items-to-show="3.5" :wrap-around="true">
        <Slide :key="1">
            <div @click="emitCapShape('campanulate')" class="mush-slide">
                <img class="cap-image" src="./images/campanulate.png" alt="Campanulate">
                <p>Campanulate</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div @click="emitCapShape('conical')" class="mush-slide">
                <img class="cap-image" src="./images/conical.png" alt="Conical">
                <p>Conical</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div @click="emitCapShape('convex')" class="mush-slide">
                <img class="cap-image" src="./images/convex.png" alt="Convex" >
                <p>Convex</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div @click="emitCapShape('depressed')" class="mush-slide">
                <img class="cap-image" src="./images/depressed.png" alt="Depressed">
                <p>Depressed</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div @click="emitCapShape('flat')" class="mush-slide">
                <img class="cap-image" src="./images/flat.png" alt="Flat">
                <p>Flat</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div @click="emitCapShape('infundibuliform')" class="mush-slide">
                <img class="cap-image" src="./images/infundibuliform.png" alt="Infundibuliform" >
                <p>Infundibuliform</p>
            </div>
        </Slide>
        <Slide :key="7">
            <div @click="emitCapShape('offset')" class="mush-slide">
                <img class="cap-image" src="./images/offset.png" alt="Offset">
                <p>Offset</p>
            </div>
        </Slide>
        <Slide :key="8">
            <div @click="emitCapShape('ovate')" class="mush-slide">
                <img class="cap-image" src="./images/ovate.png" alt="Ovate">
                <p>Ovate</p>
            </div>
        </Slide>
        <Slide :key="9">
            <div @click="emitCapShape('umbillicate')" class="mush-slide">
                <img class="cap-image" src="./images/umbillicate.png" alt="Umbillicate" >
                <p>Umbillicate</p>
            </div>
        </Slide>
        <Slide :key="10">
            <div @click="emitCapShape('umbonate')" class="mush-slide">
                <img class="cap-image" src="./images/umbonate.png" alt="Umbonate" >
                <p>Umbonate</p>
            </div>
        </Slide>
        <Slide :key="11">
            <div @click="emitCapShape('irregular')" class="mush-slide">
                <img class="cap-image" src="./images/irregular.png" alt="Irregular" >
                <p>Irregular</p>
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
      selectedCapShape: '',
    }),
    methods: {
        //emits cap shape on button click
        emitCapShape(capShape) {
            nextTick(() => {
                this.selectedCapShape = capShape;
                //emit event to parent component (FilterBar.vue)
                this.$emit('selectedCapShape', capShape);
            });
        },
    },
  })
  </script>