<template>
  <HeaderBar />
  <NavigationBar @search="handleSearch" @toggleTag="handleTags" @sizeFilter="handleSizeFilter"/>
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
  <BottomFrame @selectedCapShape="handleCapShape" @selectedEcology="handleEcology" @selectedStipe="handleStipe"/>
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
      selectedEcology: '',
      selectedStipe: '',
      stipeLen: '',
      stipeDiam: '',
      capDiam: '',
      capThick: '',
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
      results = this.filterByCapShape(results);
      results = this.filterByEcology(results);
      results = this.filterByStipe(results);
      //Size Filter Calls:
      results = this.filterBySize(results, this.stipeLen, 'stipe_features.length_min', 'stipe_features.length_max');
      results = this.filterBySize(results, this.stipeDiam, 'stipe_features.diameter_min', 'stipe_features.diameter_max');
      results = this.filterBySize(results, this.capDiam, 'cap_features.diameter_min', 'cap_features.diameter_max');
      results = this.filterBySize(results, this.capThick,'cap_features.thickness_min', 'cap_features.thickness_max');
      //assign results to filteredMushrooms array
      this.filteredMushrooms = results;
      //debug log 
      this.logSelectedFilters();
      console.log('Results After Filtering:', results.length);
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
        //console.log("filterCapShape null");
        return data;
      }
      //console.log("Filtering (Index) cap shape by: ", this.selectedCapShape);
      return data.filter((mushroom) => 
      mushroom.cap_features.shape.includes(this.selectedCapShape));
    },
    filterByEcology(data){
      //check if defined
      if (!this.selectedEcology) {
        return data;
      }
      return data.filter((mushroom) => 
      mushroom.ecology.includes(this.selectedEcology));
    },
    filterByStipe(data){
      //check if defined
      if (!this.selectedStipe) {
        return data;
      }
      return data.filter((mushroom) => 
      mushroom.stipe_features.type.includes(this.selectedStipe));
    },

    //Generic range filter: applied to all int range inputs (diam/len/height/thickness)
    filterBySize(data, value, propertyMin, propertyMax){
    //if no inputs - no data change
    if(!value){
      return data;
    }
    //otherwise filter by range
    return data.filter(d => {
      //check that properties exist first ~~(Need a catch if we end up with a mushroom without one of these fields)
      if (d[propertyMin.split('.')[0]][propertyMin.split('.')[1]] === null) return false;
      //change string inputs to ints
      const intValue= +value;
      //check & filter data within input range
      return d[propertyMin.split('.')[0]][propertyMin.split('.')[1]] <= intValue &&
             d[propertyMax.split('.')[0]][propertyMax.split('.')[1]] >= intValue;
      });
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
      if (this.selectedCapShape == selectedCapShape) {
        this.selectedCapShape = "";
      } else {
        this.selectedCapShape = selectedCapShape;
      }
      this.applyAllFilters();
    },
    handleEcology(selectedEcology) {
      if (this.selectedEcology == selectedEcology) {
        this.selectedEcology = "";
      } else {
        this.selectedEcology = selectedEcology;
      }
      this.applyAllFilters();
    },
    handleStipe(selectedStipe) {
      if (this.selectedStipe == selectedStipe) {
        this.selectedStipe = "";
      } else {
        this.selectedStipe = selectedStipe;
      }
      this.applyAllFilters();
    },
    //generic size filter event handler
    handleSizeFilter(filterData) {
      this.stipeLen = filterData.stipeLen;
      this.stipeDiam = filterData.stipeDiam;
      this.capDiam = filterData.capDiam;
      this.capThick = filterData.capThick;
      this.applyAllFilters();
    },
    //
    //Helper function to log all currently selected Filters:
    logSelectedFilters() {
      const activeFilters = [];

      // Add filters with values to the activeFilters array
      if (this.selectedTags.length > 0) activeFilters.push(`Tags: ${this.selectedTags.join(', ')}`);
      if (this.searchInput) activeFilters.push(`Search: ${this.searchInput}`);
      if (this.selectedCapShape) activeFilters.push(`Cap Shape: ${this.selectedCapShape}`);
      if (this.stipeLen) activeFilters.push(`Stipe Length: ${this.stipeLen}`);
      if (this.stipeDiam) activeFilters.push(`Stipe Diameter: ${this.stipeDiam}`);
      if (this.capDiam) activeFilters.push(`Cap Diameter: ${this.capDiam}`);
      if (this.capThick) activeFilters.push(`Cap Thickness: ${this.capThick}`);
      if (this.selectedEcology) activeFilters.push(`Ecology: ${this.selectedEcology}`);
      if (this.selectedStipe) activeFilters.push(`Stipe Type: ${this.selectedStipe}`);

      // Log active filters or "No Filters" if none are active
      console.log(activeFilters.length > 0 ? `Active Filters: ${activeFilters.join(' | ')}` : 'No Filters');
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
  