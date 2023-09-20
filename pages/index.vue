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

<script setup>
import { ref, onMounted } from 'vue'
import mushroomData from '~/data/sampledata.js'
import MushroomCard from '~/components/MushroomCard.vue';
import { searchInput } from '../store/store.js';

//Load data
onMounted(() => {
  mushrooms.value = mushroomData;
  //This will display all mushrooms in results initially 
  filteredMushrooms.value = mushrooms.value;
});

//JSON data
const mushrooms = ref([]);
const filteredMushrooms = ref([]);

//Inputs
const selectedTags = ref([]);

// This watch effect reactively triggers applyAllfilters when the search input changes
watch(searchInput, (newSearchInput) => {
  applyAllFilters(newSearchInput);
});

//Apply all of the Filters (Have to decide when this is called
//currently called on filter button press, tag select, and when typing in Name search
const applyAllFilters = (newSearchInput) => {
    let results = mushrooms.value;
    //pull results from each filter function
    results = filterByTags(results);
    results = filterByName(results, newSearchInput);
    //assign results to filteredMushrooms array
    filteredMushrooms.value = results;
    //debug log 
    console.log('Filtered Results:', filteredMushrooms.value.map(mushroom => mushroom.common_names));
    console.log("Selected tags: ", selectedTags.value);
    console.log("Search input: ", searchInput.value);
};

//Populates selectedTags[] by input (currently toggles on/off, so you can have multiple tags on, will need to style buttons to show that a tag is toggled/pressed)
//Note: this function is not responsible for changing the results data
const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) {
    selectedTags.value.push(tag);
  } else {
    selectedTags.value.splice(index, 1);
  }
  applyAllFilters();
};

//Filters results based on current selectedTags[]
const filterByTags = (data) => {
  if (selectedTags.value.length === 0) {
    return data;
  }
  return data.filter((mushroom) =>
    selectedTags.value.every((tag) => mushroom.tags.includes(tag))
  );
};

//Reactive Name Filter
const filterByName = (data, newSearchInput) => {
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
};

// Call applyFilters initially to show all mushrooms
applyAllFilters();
</script>
  
  <style scoped>

  </style>
  
