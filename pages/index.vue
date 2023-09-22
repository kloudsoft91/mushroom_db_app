<template>
  <HeaderBar />
  <NavigationBar :toggleTag="toggleTag" :filterByName="filterByName" :searchInput="searchInput"/>
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
import { searchInput } from '../store/store.js';

export default{
  data(){
    return{
      mushrooms: ref([]),
      filteredMushrooms: ref([]),
      selectedTags: ref([]),
    };
  },

  methods:{

    //Apply all of the Filters (Have to decide when this is called
    //currently called on filter button press, tag select, and when typing in Name search
    applyAllFilters(newSearchInput) {
    let results = this.mushrooms;
    //pull results from each filter function
    results = this.filterByTags(results);
    results = this.filterByName(results, newSearchInput);
    //assign results to filteredMushrooms array
    if(this.filteredMushrooms){
      this.filteredMushrooms = results;
      //debug log 
      console.log('Filtered Results:', this.filteredMushrooms.map(mushroom => mushroom.common_names));
    }
    console.log("Selected tags: ", this.selectedTags);
    //console.log("Search input: ", searchInput.value);
    },
    //Populates selectedTags[] by input (currently toggles on/off, so you can have multiple tags on, will need to style buttons to show that a tag is toggled/pressed)
    //Note: this function is not responsible for changing the results data
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index === -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(index, 1);
      }
      this.applyAllFilters();
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
    filterByName(data, newSearchInput) {
    //if no input - no data change
    if (!newSearchInput) {
      console.log("NO NAME SEARCH INPUT = ", newSearchInput)
      return data;
    }
    console.log("NAMES SEARCH: ", newSearchInput)
    //otherwise filter data by input against latin & common names
    return data.filter(d =>
      d.common_names.toLowerCase().includes(newSearchInput.toLowerCase()) ||
      d.latin_names.toLowerCase().includes(newSearchInput.toLowerCase())
    );
    },
  },
  //Load data
  mounted() {
    this.mushrooms = mushroomData;
    //display all results initially
    this.filteredMushrooms = this.mushrooms;
    //watch effect reactively trigger applyAllFilters
    watch(searchInput, (newSearchInput) => {
      this.applyAllFilters(newSearchInput);
    });
    this.applyAllFilters();
  },
};
</script>
  
<style scoped>
</style>
  