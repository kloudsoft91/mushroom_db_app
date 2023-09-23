<!--Main Navbar-->
<template>
  <!--Mobile + Tablet + Desktop-->
  <div class=" bg-gray-100 relative" >
  <!--Extended Filter Button-->
    <!--<div class="hidden desktop:block absolute z-10 right-0 left-10 top-[80px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-20 h-20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>-->
    <!--Main banner-->
    <div class="z-0 bg-emerald-700 relative py-14 tablet:py-24 desktop:py-28 shadow-md">
      <h1 class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto tablet:-mt-12 desktop:-mt-20 font-bold text-white text-lg tablet:text-2xl laptop:text-3xl desktop:text-5xl">Know what you're looking for?</h1>
      <!--Search Bar-->  
      <div class="z-20 flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto mt-5 tablet:mt-1 desktop:mt-1 shadow-md bg-white rounded-lg px-2 py-1 tablet:py-0 tablet:px-2">
            <input v-model="searchInput" @input="search()" class="text-sm tablet:text-base text-gray-400 flex-grow outline-none px-1 tablet:px-2" type="text" placeholder="Search all mushrooms" />
            <div class="flex py-1 rounded-lg">
              <button @click="search()" class="bg-emerald-500 text-white text-sm tablet:text-base rounded-lg px-3 py-1 tablet:px-2 tablet:py-1 desktop:px-3 desktop:py-2 font-thin desktop:font-semibold desktop:tracking-wide">Search</button>
            </div>
          </div>
          <!--Size Search Bar Row-->
          <div class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto mt-5 tablet:mt-4 desktop:mt-4">
          <!--Stipe Length-->
          <div class="flex-grow mr-2 pt-10">
          <input v-model="stipeLen" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Stipe Length" />
          </div>
          <!--Stipe Diameter-->
          <div class="flex-grow mr-2 pt-10">
          <input v-model="stipeDiam" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Stipe Width" />
          </div>
          <!--Cap Diameter-->
          <div class="flex-grow mr-2 mt-10">
          <input v-model="capDiam" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Cap Diameter" />
          </div>
          <!--Cap Thickness-->
          <div class="flex-grow mr-2 pt-10">
          <input v-model="capThick" @input="sizeFilter()" class="text-sm tablet:text-base text-gray-400 outline-none px-1 tablet:px-2" type="text" placeholder="Cap Thickness" />
          </div>
        </div>   
      </div>
    <!--Edibility Quick Filter-->
    <div class="tablet:bg-white desktop:bg-white rounded-lg w-11/12 desktop:w-3/4 desktop:p-2 absolute left-0 right-0 mx-auto mt-6 tablet:-mt-6 desktop:-mt-5 tablet:shadow-md desktop:shadow-md">
        <div class="flex flex-wrap gap-2 desktop:gap-0 tablet:gap-0 p-2 desktop:p-0 tablet:p-2 w-full">
          <button class="button bg-blue-500" @click="toggleTag('edible')">Edible</button>
          <button class="button bg-orange-500" @click="toggleTag('gourmet')">Gourmet</button>
          <button class="button bg-red-500" @click="toggleTag('poisonous')">Poisonous</button>
          <button class="button bg-purple-500" @click="toggleTag('psychoactive')">Psychoactive</button>
          <button class="button bg-yellow-500" @click="toggleTag('lookalike')">Lookalike</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      selectedTags: [],
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
    //populates the selectedTags[] and emits event on tag button click
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index === -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(index, 1);
      }
      this.$emit('toggleTag', this.selectedTags);
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