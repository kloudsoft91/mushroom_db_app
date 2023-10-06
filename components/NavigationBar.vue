<!--Main Navbar-->
<template>
  <!--Mobile + Tablet + Desktop-->
  <div class="bg-gray-100 relative" >
  <!--Extended Filter Button-->
    <!--<div class="hidden desktop:block absolute z-10 right-0 left-10 top-[80px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-20 h-20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>-->
    <!--Main banner-->
    <div class="z-0 bg-emerald-700 relative py-8 tablet:py-24 desktop:py-28 shadow-md">
      <h1 class="flex w-11/12 desktop:w-3/4 mx-auto tablet:-mt-12 desktop:-mt-20 font-bold text-white text-lg tablet:text-2xl laptop:text-3xl desktop:text-5xl">Know what you're looking for?</h1>
      <!--Search Bar-->  
      <div class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto mt-3 tablet:mt-1 desktop:mt-4 shadow-md bg-white rounded-lg px-2 py-1 tablet:py-0 tablet:px-2" data-cy="search">
        <input v-model="searchInput" @input="search()" class="text-sm tablet:text-base text-gray-400 flex-grow outline-none px-1 tablet:px-2" type="text" placeholder="Search all mushrooms" />
        <div class="flex py-1 rounded-lg">
          <button @click="search()" class="bg-emerald-500 text-white text-sm tablet:text-base rounded-lg px-3 py-1 tablet:px-2 tablet:py-1 desktop:px-3 desktop:py-2 font-thin desktop:font-semibold desktop:tracking-wide">Search</button>
        </div>
      </div> 
    </div>
      <!--Size Search Bar Row-->
      <div class="z-10 grid grid-cols-2 tablet:grid-cols-4 gap-2 w-11/12 px-2 desktop:w-3/4 mx-auto mt-7 tablet:-mt-16 tablet:mb-3 laptop:mt-[-60px] desktop:mt-[-70px] relative">
        <!--Stipe Length-->
        <input v-model="stipeLen" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Stipe Length" />

        <!--Stipe Diameter-->
        <input v-model="stipeDiam" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Stipe Width" />

        <!--Cap Diameter-->
        <input v-model="capDiam" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Cap Diameter" />

        <!--Cap Thickness-->
        <input v-model="capThick" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Cap Thickness" />
      </div>  
      <!--Edibility Quick Filter-->
      <div class="z-20 tablet:bg-white desktop:bg-white rounded-lg w-11/12 desktop:w-3/4 desktop:p-2 desktop:mt-4 mx-auto tablet:shadow-md desktop:shadow-md relative">
          <div class="flex flex-wrap gap-2 desktop:gap-0 tablet:gap-0 p-2 desktop:p-0 tablet:p-2 w-full">
            <button class="button tag-button" @click="tagFilter('edible')">Edible</button>
            <button class="button tag-button" @click="tagFilter('gourmet')">Gourmet</button>
            <button class="button tag-button" @click="tagFilter('poisonous')">Poisonous</button>
            <button class="button tag-button" @click="tagFilter('psychoactive')">Psychoactive</button>
            <button class="button tag-button" @click="tagFilter('lookalike')">Lookalike</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      selectedTag:'',
      stipeLen: '',
      stipeDiam: '',
      capDiam: '',
      capThick: '',
    };
  },
  methods: {
    //emits search events on input and button click
    search() {
      //emit event to notify Index of input change
      this.$emit('search', this.searchInput);
    },
    //single tag method
    tagFilter(selectedTag){
      this.selectedTag = selectedTag;
      //emit tag filter event
      this.$emit('tagFilter', this.selectedTag)
    },
    sizeFilter() {
      // Log the size filter values
      this.$emit('sizeFilter', {
        stipeLen: this.stipeLen,
        stipeDiam: this.stipeDiam,
        capDiam: this.capDiam,
        capThick: this.capThick,
      });
    },
  },
};
</script>