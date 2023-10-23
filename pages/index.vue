<template>
  <HeaderBar />
  <!--Alert for invalid user inputs-->
  <p id="inputerror" style="color:red; text-align: center;"></p>
  <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter" />
  <FooterBar @openCarouselInputs="openCarouselInputs" />
  <ResultCards :filteredMushrooms="filteredMushrooms" />


  <!--Slideover for big screens only-->
  <SlideOver />
  <!--Bottomframe for small screens only-->
  <!--Should pop out when clicking the "Discover" button on footerbar-->
  <BottomFrame ref="bottomFrame" @selectedCapShape="handleCapShape" @selectedGillAttach="handleGills"
    @selectedEcology="handleEcology" @selectedStipe="handleStipe" @selectedMonth="handleMonth"
    @selectedStipeColour="handleStipeColour" @selectedCapColour="handleCapColour"
    @openCarouselInputs="openCarouselInputs" />
</template>

<script>
import mushroomData from '~/data/sampledata.js'
import ResultCards from '~/components/ResultCards.vue';
import BottomFrame from '~/components/BottomFrame.vue';

export default {
  components: {
    BottomFrame,
  },
  data() {
    return {
      mushrooms: [],
      filteredMushrooms: [],
      selectedTag: '',
      searchInput: '',
      selectedCapShape: '',
      selectedGillAttach: '',
      selectedEcology: '',
      selectedStipe: '',
      selectedMonth: '',
      selectedColour: '',
      selectedStipeColour: '',
      selectedCapColour: '',
      stipeLen: '',
      stipeDiam: '',
      capDiam: '',
      capThick: '',
      openCar: '',
      label: null,
      item: null,
    };
  },

  methods: {
    //method to fetch data if the user has clicked on a mushroom attribute in the mushroom-detail page.
    fetchData() {
      const query = this.$route.query;
      this.label = query.label;
      this.item = query.item;
      //are some handlers outdated? Sizefilter handler takes 4-part object so manually adding lengths instead
      switch (this.label) {
        case "stipe_features.colour":
          this.handleStipeColour(this.item);
          break;
        case "stipe_features.type":
          this.handleStipe(this.item);
          break;
        case "cap_features.colour":
          this.handleCapColour(this.item);
          break;
        case "cap_features.shape":
          this.handleCapShape(this.item);
          break;
        case "gills.attachment":
          this.handleGills(this.item);
          break;
        case "time_of_year":
          this.handleMonth(this.item);
          break;
        default:
          this.applyAllFilters();
      }
    },
    //Apply all of the Filters 
    applyAllFilters() {
      //results stores an array of mushroom objects to be displayed
      let results = this.mushrooms;
      //document.getElementById("inputerror").innerHTML = "";
      //pull results from each filter function
      results = this.filterByTags(results);
      results = this.filterByName(results, this.searchInput);
      results = this.filterByCapShape(results, this.selectedCapShape);
      results = this.filterByGillAttach(results, this.selectedGillAttach);
      results = this.filterByEcology(results);
      results = this.filterByStipe(results, this.selectedStipe);
      results = this.filterByStipeColour(results);
      results = this.filterByCapColour(results);
      results = this.filterByMonth(results);
      //Size Filter Calls:
      results = this.filterBySize(results, this.stipeLen, 'stipe_features.length_min', 'stipe_features.length_max');
      results = this.filterBySize(results, this.stipeDiam, 'stipe_features.diameter_min', 'stipe_features.diameter_max');
      results = this.filterBySize(results, this.capDiam, 'cap_features.diameter_min', 'cap_features.diameter_max');
      results = this.filterBySize(results, this.capThick, 'cap_features.thickness_min', 'cap_features.thickness_max');
      //assign results to filteredMushrooms array
      this.filteredMushrooms = results;
      //debug log 
      //this.logSelectedFilters();
      //console.log('Results After Filtering:', results.length);
    },

    //Filters results based on current selectedTag
    filterByTags(data) {
      if (!this.selectedTag) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.tags.includes(this.selectedTag));
    },

    //filters results by name based on search input (name)
    filterByName(data, searchInput) {
      //if no input - no data change
      if (!searchInput || !data) {
        return data;
      }
      //otherwise filter data by input against latin, common or maori names
      try {
        return data.filter(d =>
          d.common_names.concat(d.latin_names).concat(d.maori_names).join(' ').toLowerCase().includes(searchInput.trim().toLowerCase())
        );
      } catch (err) {
        return data.filter(d =>
          d.common_names.concat(d.latin_names).join(' ').toLowerCase().includes(searchInput.trim().toLowerCase())
        );
      }
    },

    //Carousel Filters
    //Cap Shape Filter
    filterByCapShape(data, selectedCapShape) {
      //check if defined
      if (!selectedCapShape) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.cap_features.shape.includes(this.selectedCapShape));
    },

    //Gill Attachment Filter
    filterByGillAttach(data, selectedGillAttach) {
      if (!selectedGillAttach) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.gills.attachment.includes(this.selectedGillAttach));
    },

    //Ecology Filter
    filterByEcology(data) {
      //check if defined
      if (!this.selectedEcology) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.ecology.includes(this.selectedEcology));
    },

    //Stipe Type filter
    filterByStipe(data, selectedStipe) {
      //check if defined
      if (!selectedStipe) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.stipe_features.type.includes(this.selectedStipe));
    },

    filterByStipeColour(data) {
      //check if defined
      if (!this.selectedStipeColour) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.stipe_features.colour.includes(this.selectedStipeColour));
    },

    filterByCapColour(data) {
      //check if defined
      if (!this.selectedCapColour) {
        return data;
      }
      return data.filter((mushroom) =>
        mushroom.cap_features.colour.includes(this.selectedCapColour));
    },

    //Season filter
    filterByMonth(data) {
      //check if defined
      if (!this.selectedMonth) {
        return data;
      }
      return data.filter((d) =>
        d.time_of_year.includes(this.selectedMonth.toLowerCase())
      );
    },

    //Generic range filter: applied to all int range inputs (diam/len/height/thickness)
    filterBySize(data, value, propertyMin, propertyMax) {
      //if no inputs - no data change
      if (!value) {
        return data;
      }
      //otherwise filter by range
      return data.filter(d => {
        //check that properties exist first ~~(Need a catch if we end up with a mushroom without one of these fields)
        if (d[propertyMin.split('.')[0]][propertyMin.split('.')[1]] === null) return false;
        //change string inputs to ints
        const intValue = +value;
        //check & filter data within input range
        return d[propertyMin.split('.')[0]][propertyMin.split('.')[1]] <= intValue &&
          d[propertyMax.split('.')[0]][propertyMax.split('.')[1]] >= intValue;
      });
    },

    //Event handlers
    //receives search input events
    handleSearch(searchInput) {
      let strRegex = new RegExp(/^[a-z\s]*$/i);
      let result = strRegex.test(searchInput);
      try {
        if (!result) throw "Non-alphabetical name";
        this.searchInput = searchInput;
        this.applyAllFilters();
        return this.searchInput;
      }
      catch (err) {
        document.getElementById("inputerror").innerHTML = 'Invalid user input: Non-alphabetical name';
      }
    },

    //receives tag button events
    handleTags(selectedTag) {
      if (this.selectedTag == selectedTag) {
        this.selectedTag = "";
      } else {
        this.selectedTag = selectedTag;
      }
      this.applyAllFilters();
      return this.selectedTag;
    },

    //receives cap shape button events
    handleCapShape(selectedCapShape) {
      if (this.selectedCapShape == selectedCapShape) {
        this.selectedCapShape = "";
      } else {
        this.selectedCapShape = selectedCapShape;
      }
      this.applyAllFilters();
      return this.selectedCapShape;
    },

    //receives gill attachment buttone vents
    handleGills(selectedGillAttach) {
      if (this.selectedGillAttach == selectedGillAttach) {
        this.selectedGillAttach = "";
      } else {
        this.selectedGillAttach = selectedGillAttach;
      }
      this.applyAllFilters();
      return this.selectedGillAttach;
    },

    //receives ecology button events
    handleEcology(selectedEcology) {
      if (this.selectedEcology == selectedEcology) {
        this.selectedEcology = "";
      } else {
        this.selectedEcology = selectedEcology;
      }
      this.applyAllFilters();
      return this.selectedEcology;
    },

    //receives stipe type button events
    handleStipe(selectedStipe) {
      if (this.selectedStipe == selectedStipe) {
        this.selectedStipe = "";
      } else {
        this.selectedStipe = selectedStipe;
      }
      this.applyAllFilters();
      return this.selectedStipe;
    },

    //receives stipe colour button events
    handleStipeColour(selectedStipeColour) {
      if (this.selectedStipeColour == selectedStipeColour) {
        this.selectedStipeColour = "";
      } else {
        this.selectedStipeColour = selectedStipeColour;
      }
      this.applyAllFilters();
      return this.selectedStipeColour;
    },

    //receives cap colour button events
    handleCapColour(selectedCapColour) {
      if (this.selectedCapColour == selectedCapColour) {
        this.selectedCapColour = "";
      } else {
        this.selectedCapColour = selectedCapColour;
      }
      this.applyAllFilters();
      return this.selectedCapColour;
    },

    //receives month button events
    handleMonth(selectedMonth) {
      if (selectedMonth == "") {
        this.selectedMonth = "";
      } else {
        this.selectedMonth = selectedMonth;
      }
      this.applyAllFilters();
      return this.selectedMonth;
    },

    //generic size filter event handler
    handleSizeFilter(filterData) {
      let strRegex = new RegExp(/^[0-9]*$/i);
      const result = [];
      result[0] = strRegex.test(filterData.stipeLen);
      result[1] = strRegex.test(filterData.stipeDiam);
      result[2] = strRegex.test(filterData.capDiam);
      result[3] = strRegex.test(filterData.capThick);
      try {
        for (var i = 0; i < 4; i++) {
          if (!result[i]) throw "Non-numerical length";
        }
        this.stipeLen = filterData.stipeLen;
        this.stipeDiam = filterData.stipeDiam;
        this.capDiam = filterData.capDiam;
        this.capThick = filterData.capThick;
        this.applyAllFilters();
        return this.filterData;
      }
      catch (err) {
        document.getElementById("inputerror").innerHTML = 'Invalid user input: Non-numerical length';
      }
    },

    //Open 
    openCarouselInputs() {
      if (this.openCar == 'open') {
        this.$refs.bottomFrame.closeCarouselInputs();
        this.openCar = '';
      } else {
        this.$refs.bottomFrame.openCarouselInputs();
        this.openCar = 'open';
      }
    },
    
    //Helper function to log all currently selected Filters:
    /* logSelectedFilters() {
      const activeFilters = [];
      // Add filters with values to the activeFilters array
      if (this.selectedTag) activeFilters.push(`Tags: ${this.selectedTag}`);
      if (this.searchInput) activeFilters.push(`Search: ${this.searchInput}`);
      if (this.selectedCapShape) activeFilters.push(`Cap Shape: ${this.selectedCapShape}`);
      if (this.selectedGillAttach) activeFilters.push(`Gill Attachment: ${this.selectedGillAttach}`);
      if (this.stipeLen) activeFilters.push(`Stipe Length: ${this.stipeLen}`);
      if (this.stipeDiam) activeFilters.push(`Stipe Diameter: ${this.stipeDiam}`);
      if (this.capDiam) activeFilters.push(`Cap Diameter: ${this.capDiam}`);
      if (this.capThick) activeFilters.push(`Cap Thickness: ${this.capThick}`);
      if (this.selectedEcology) activeFilters.push(`Ecology: ${this.selectedEcology}`);
      if (this.selectedStipe) activeFilters.push(`Stipe Type: ${this.selectedStipe}`);
      if (this.selectedStipeColour) activeFilters.push(`Stipe Colour: ${this.selectedStipeColour}`)
      if (this.selectedCapColour) activeFilters.push(`Cap Colour: ${this.selectedCapColour}`);

      // Log active filters or "No Filters" if none are active
      console.log(activeFilters.length > 0 ? `Active Filters: ${activeFilters.join(' | ')}` : 'No Filters');
    }, */
  },
  //Load data
  mounted() {
    this.mushrooms = mushroomData;
    //display all results initially
    this.filteredMushrooms = this.mushrooms;
    if (this.$route.query) {
      //if query returned from mushroom-detail page
      this.fetchData();
    }
  },
};
</script>
  
<style scoped></style>
  