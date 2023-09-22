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
  <BottomFrame @selectedCapShape="handleCapShape"/>
</template>

<script>
import mushroomData from '~/data/sampledata.js'
import MushroomCard from '~/components/MushroomCard.vue';

export default{
  data(){
    return{
      mushrooms: [],
      filteredMushrooms: [],
      selectedTags: [],
      searchInput: '',
      selectedCapShape: '',
    };
  },

  methods:{
    //Apply all of the Filters (Have to decide when this is called
    //currently called on filter button press, tag select, and when typing in Name search
    applyAllFilters() {
      let results = this.mushrooms;
      //pull results from each filter function
      results = this.filterByTags(results);
      results = this.filterByName(results, this.searchInput);
      results = this.filterByCapShape(results)
      //assign results to filteredMushrooms array
      this.filteredMushrooms = results;
      //debug log 
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
    //filters results by name based on search input (name)
    filterByName(data, searchInput) {
    //if no input - no data change
    if (!searchInput) {
      return data;
    }
    //otherwise filter data by input against latin & common names
    return data.filter(d =>
      d.common_names.toLowerCase().includes(searchInput.toLowerCase()) ||
      d.latin_names.toLowerCase().includes(searchInput.toLowerCase())
    );
    },

    //Carousel Filters
    //Cap Shape Filter
    filterByCapShape(data){
      //check if defined
      if (!this.selectedCapShape) {
        console.log("filterCapShape null");
        return data;
      }
      console.log("Filtering (Index) cap shape by: ", this.selectedCapShape);
      return data.filter((mushroom) => 
      mushroom.cap_features.shape.includes(this.selectedCapShape));
    },

    //Event handlers
    //receives search input events
    handleSearch(searchInput) {
      this.searchInput = searchInput;
      this.applyAllFilters();
    },
    //receives tag button events
    handleTags(selectedTags) {
      this.selectedTags = selectedTags;
      this.applyAllFilters();
    },
    //receives cap shape button events
    handleCapShape(selectedCapShape) {
      this.selectedCapShape = selectedCapShape;
      this.applyAllFilters();
    },

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
  