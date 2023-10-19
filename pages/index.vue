<template>
  <HeaderBar />
  <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter"/>
  <FooterBar @openCarouselInputs="openCarouselInputs"/>
  <ResultCards :filteredMushrooms="filteredMushrooms"/>
  

  <!--Slideover for big screens only-->
  <SlideOver />
  <!--Bottomframe for small screens only-->
  <!--Should pop out when clicking the "Discover" button on footerbar-->
  <BottomFrame ref="bottomFrame" @selectedCapShape="handleCapShape" @selectedGillAttach="handleGills" @selectedEcology="handleEcology" @selectedStipe="handleStipe" @selectedSeason="handleSeason" @selectedColour="handleColour" @openCarouselInputs="openCarouselInputs"/>

</template>

<script>
import mushroomData from '~/data/sampledata.js'
import ResultCards from '~/components/ResultCards.vue';
import BottomFrame from '~/components/BottomFrame.vue';

export default{
  components: {
    BottomFrame,
  },
  data(){
    return{
      mushrooms: [],
      filteredMushrooms: [],
      selectedTag: '',
      searchInput: '',
      selectedCapShape: '',
      selectedGillAttach: '',
      selectedEcology: '',
      selectedStipe: '',
      selectedSeason: '',
      selectedColour: '',
      stipeLen: '',
      stipeDiam: '',
      capDiam: '',
      capThick: '',
      openCar: '',
      label: null,
      item: null,
    };
  },

  methods:{
    //method to fetch data if the user has clicked on a mushroom attribute
    //in the mushroom-detail page.
    fetchData() {
      const query = this.$route.query;
      this.label = query.label;
      this.item = query.item;
      console.log("Label & Item: ", this.label , this.item);
      //are some handlers outdated? Sizefilter handler takes 4-part object so manually adding lengths instead
      switch(this.label) {
        case "stipe_features.diameter_min":
          this.stipeDiam = this.item;
          this.applyAllFilters();
          break;
        case "stipe_features.diameter_max":
          this.stipeDiam = this.item;
          this.applyAllFilters();
          break;
        case "stipe_features.colour":
          this.handleColour(this.item);
          break;
        case "stipe_features.length_max":
          this.stipeLen = this.item;
          this.applyAllFilters();
          break;
        case "stipe_features.length_min":
          this.stipeLen = this.item;
          this.applyAllFilters();
          break;
        case "cap_features.diameter_min":
          this.capDiam = this.item;
          this.applyAllFilters();
          break;
        case "cap_features.diameter_max":
          this.capDiam = this.item;
          this.applyAllFilters();
          break;
        case "cap_features.colour":
          this.handleColour(this.item);
          break;
        case "cap_features.shape":
          console.log("capshape call", this.item);
          this.handleCapShape(this.item);
          break;
        case "gills.colour":
          this.handleColour(this.item);
          break;
        case "gills.attachment":
          this.handleColour(this.item);
          break;
        default:
          this.applyAllFilters();
      }
    },
    //Apply all of the Filters (Have to decide when this is called
    //currently called on filter button press, tag select, and when typing in Name search
    applyAllFilters() {
      let results = this.mushrooms;
      //pull results from each filter function
      results = this.filterByTags(results);
      results = this.filterByName(results, this.searchInput);
      results = this.filterByCapShape(results, this.selectedCapShape);
      results = this.filterByGillAttach(results);
      results = this.filterByEcology(results);
      results = this.filterByStipe(results);
      results = this.filterByColour(results);
      results = this.filterBySeason(results);
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

    //Filters results based on current selectedTag
    filterByTags(data) {
      if(!this.selectedTag) {
        return data;
      }
      return data.filter((mushroom) =>
      mushroom.tags.includes(this.selectedTag));
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
    filterByCapShape(data, selectedCapShape){
      console.log("Data type:", typeof data);
      console.log("Selected Cap Shape:", this.selectedCapShape);
      //check if defined
      if (!selectedCapShape) {
        console.log("filterby null if")
        return data;
      }
      console.log("Filtering cap shape by: ", data)
      return data.filter((mushroom) => 
      mushroom.cap_features.shape.includes(this.selectedCapShape));
    },

    //Gill Attachment Filter
    filterByGillAttach(data){
      if(!this.selectedGillAttach){
        return data;
      }
      return data.filter((mushroom) =>
      mushroom.gills.attachment.includes(this.selectedGillAttach));
    },
    //Ecology Filter
    filterByEcology(data){
      //check if defined
      if (!this.selectedEcology) {
        return data;
      }
      return data.filter((mushroom) => 
      mushroom.ecology.includes(this.selectedEcology));
    },

    //Stipe Type filter
    filterByStipe(data){
      //check if defined
      if (!this.selectedStipe) {
        return data;
      }
      return data.filter((mushroom) => 
      mushroom.stipe_features.type.includes(this.selectedStipe));
    },

    //Cap and stipe colour, case sensitive
    filterByColour(data){
      //check if defined
      if (!this.selectedColour) {
        return data;
      }
      return data.filter((mushroom) => 
      mushroom.cap_features.colour.includes(this.selectedColour) || mushroom.stipe_features.colour.includes(this.selectedColour));
    },

    //Season filter
    filterBySeason(data){
      //check if defined
      if (!this.selectedSeason) {
        return data;
      }
      return data.filter((mushroom) => 
      mushroom.time_of_year.toLowerCase().includes(this.selectedSeason.toLowerCase()));
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
    handleTags(selectedTag) {
      if (this.selectedTag == selectedTag) {
        this.selectedTag = "";
      }else {
        this.selectedTag = selectedTag;
      }
      this.applyAllFilters();
    },
    //receives cap shape button events
    handleCapShape(selectedCapShape) {
      console.log("selected, then this.sele", selectedCapShape,)
      if (this.selectedCapShape == selectedCapShape) {
        this.selectedCapShape = "";
      } else {
        this.selectedCapShape = selectedCapShape;
      }
      this.applyAllFilters();
    },
    //receives gill attachment buttone vents
    handleGills(selectedGillAttach) {
      if(this.selectedGillAttach == selectedGillAttach){
        this.selectedGillAttach = "";
      } else {
        this.selectedGillAttach = selectedGillAttach;
      }
      this.applyAllFilters();
    },
    //receives ecology button events
    handleEcology(selectedEcology) {
      if (this.selectedEcology == selectedEcology) {
        this.selectedEcology = "";
      } else {
        this.selectedEcology = selectedEcology;
      }
      this.applyAllFilters();
    },
    //receives stipe type button events
    handleStipe(selectedStipe) {
      if (this.selectedStipe == selectedStipe) {
        this.selectedStipe = "";
      } else {
        this.selectedStipe = selectedStipe;
      }
      this.applyAllFilters();
    },
    handleColour(selectedColour) {
      console.log("handle colour function");
      if (this.selectedColour == selectedColour) {
        this.selectedColour = "";
      } else {
        this.selectedColour = selectedColour;
        console.log("handle colour:" + selectedColour);
      }
      this.applyAllFilters();
    },
    handleSeason(selectedSeason) {
      if (this.selectedSeason == selectedSeason) {
        this.selectedSeason = "";
      } else {
        this.selectedSeason = selectedSeason;
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
    //Open 
    openCarouselInputs() {
      if (this.openCar == 'open') {
        this.$refs.bottomFrame.closeCarouselInputs();
        this.openCar = '';
        console.log('close');
      } else {
        this.$refs.bottomFrame.openCarouselInputs();
        this.openCar = 'open';
        console.log('open');
      }
    },
    //Helper function to log all currently selected Filters:
    logSelectedFilters() {
      const activeFilters = [];

      // Add filters with values to the activeFilters array
      if(this.selectedTag) activeFilters.push(`Tags: ${this.selectedTag}`);
      if(this.searchInput) activeFilters.push(`Search: ${this.searchInput}`);
      if(this.selectedCapShape) activeFilters.push(`Cap Shape: ${this.selectedCapShape}`);
      if(this.selectedGillAttach) activeFilters.push(`Gill Attachment: ${this.selectedGillAttach}`);
      if(this.stipeLen) activeFilters.push(`Stipe Length: ${this.stipeLen}`);
      if(this.stipeDiam) activeFilters.push(`Stipe Diameter: ${this.stipeDiam}`);
      if(this.capDiam) activeFilters.push(`Cap Diameter: ${this.capDiam}`);
      if(this.capThick) activeFilters.push(`Cap Thickness: ${this.capThick}`);
      if(this.selectedEcology) activeFilters.push(`Ecology: ${this.selectedEcology}`);
      if(this.selectedStipe) activeFilters.push(`Stipe Type: ${this.selectedStipe}`);

      // Log active filters or "No Filters" if none are active
      console.log(activeFilters.length > 0 ? `Active Filters: ${activeFilters.join(' | ')}` : 'No Filters');
    },
  },
  //Load data
  mounted() {
    this.mushrooms = mushroomData;
    //display all results initially
    this.filteredMushrooms = this.mushrooms;
    if(this.$route.query.label) {
      this.fetchData();
    }
  },  
};
</script>
  
<style scoped>
</style>
  