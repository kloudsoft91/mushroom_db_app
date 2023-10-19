<template>
    <Carousel :items-to-show="3.5" :wrap-around="true">
        <Slide :key="1">
            <div @click="emitStipeColour('white')" class="mush-slide">
                <div class="cap-image" style="background-color: #ffffff;"></div>
                <p>White</p>
            </div>
        </Slide>
        <Slide :key="2">
            <div @click="emitStipeColour('black')" class="mush-slide">
                <div class="cap-image" style="background-color: #000000;"></div>
                <p>Black</p>
            </div>
         </Slide>
         <Slide :key="3">
            <div @click="emitStipeColour('brown')" class="mush-slide">
                <div class="cap-image" style="background-color: #ac6657;"></div>
                <p>Brown</p>
            </div>
        </Slide>
        <Slide :key="4">
            <div @click="emitStipeColour('red')" class="mush-slide">
                <div class="cap-image" style="background-color: #FF5733;"></div>
                <p>Red</p>
            </div>
        </Slide>
        <Slide :key="5">
            <div @click="emitStipeColour('orange')" class="mush-slide">
                <div class="cap-image" style="background-color: #f78400;"></div>
                <p>Orange</p>
            </div>
        </Slide>
        <Slide :key="6">
            <div @click="emitStipeColour('yellow')" class="mush-slide">
                <div class="cap-image" style="background-color: #ebee3c;"></div>
                <p>Yellow</p>
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
        emitStipeColour(stipeColour){
            nextTick(() => {
                this.selectedStipeColour = stipeColour;
                this.$emit('selectedStipeColour', stipeColour);
            }); 
        },
    },
  })
  </script>