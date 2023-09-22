<template>
  <HeaderBar />
  <NavigationBar @search="handleSearch" @toggleTag="handleTags"/>
  <FooterBar />
  <div>
    <ul>
        <li v-for="mushroom in filteredMushrooms" :key="mushroom.id">
        <MushroomCard :mushroom="mushroom"/>
        </li>
    </ul>
  </div>
  <!--Slideover for big screens only-->
  <SlideOver />
  <!--Bottomframe for small screens only-->
  <!--Should pop out when clicking the "Discover" button on footerbar-->
  <BottomFrame />
</template>

<script>
import { ref, watch } from 'vue'
import mushroomData from '~/data/sampledata.js'
import MushroomCard from '~/components/MushroomCard.vue';
//import { searchInput } from '../store/store.js';

export default{
  data(){
    return{
      mushrooms: [],
      filteredMushrooms: [],
      selectedTags: [],
      searchInput: '',
    };
  },

  methods:{
    //Apply all of the Filters (Have to decide when this is called
    //currently called on filter button press, tag select, and when typing in Name search
    applyAllFilters() {
      console.log("APPLY FILTERS RUN")
      let results = this.mushrooms;
      //pull results from each filter function
      results = this.filterByTags(results);
      results = this.filterByName(results, this.searchInput);
      //assign results to filteredMushrooms array
      //if(this.filteredMushrooms){
      this.filteredMushrooms = results;
        //debug log 
        //console.log('Filtered Results:', this.filteredMushrooms.map(mushroom => mushroom.common_names));
      //}
      console.log("Selected tags: ", this.selectedTags);
      console.log("Search input: ", this.searchInput);
    },
    //Filters results based on current selectedTags[]
    filterByTags(data) {
    if (this.selectedTags.length === 0) {
      return data;
    }
    return data.filter((mushroom) =>
      this.selectedTags.every((tag) => mushroom.tags.includes(tag))
    );
    },
    //Reactive Name Filter
    filterByName(data, searchInput) {
    //if no input - no data change
    if (!searchInput) {
      console.log("NO NAME SEARCH INPUT = ", searchInput)
      return data;
    }
    console.log("NAMES SEARCH: ", searchInput)
    //otherwise filter data by input against latin & common names
    return data.filter(d =>
      d.common_names.toLowerCase().includes(searchInput.toLowerCase()) ||
      d.latin_names.toLowerCase().includes(searchInput.toLowerCase())
    );
    },

    //Event handlers
    handleSearch(searchInput) {
      this.searchInput = searchInput;
      this.applyAllFilters();
    },
    handleTags(selectedTags) {
      this.selectedTags = selectedTags;
      this.applyAllFilters();
    }

  },
  //Load data
  mounted() {
    this.mushrooms = mushroomData;
    //display all results initially
    this.filteredMushrooms = this.mushrooms;
  },
};
</script>
  
<style scoped>
</style>
  