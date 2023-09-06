
<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
        <div class="navbar-header">
          <h1 class="navbar-title">Mushroom Finder</h1>
        </div>
        
        <div class="navbar-search">
          <input type="text" placeholder="Search...">
          <button>Search</button>
        </div>
      </nav>
  
      <!-- Main content -->
      <div class="main-content">
        <!-- Filter panel -->
        <aside class="filter-panel">
          <div id="mushroom-identification">
            <h2>Mushroom Identification</h2>
            <input v-model="nameSearch" @input="applyAllFilters">
          </div>
          <div id="advanced-search">
            <h2>Advanced Search</h2>
            <h3>Stipe Parameters</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4>Diameter (cm)</h4>
            <input v-model="stipeDiam" @input="applyAllFilters">
            <h4>Length (cm)</h4>
            <input v-model="stipeLen" @input="applyAllFilters">
            <h4>Height (cm)</h4>
            <input v-model="stipeHgt" @input="applyAllFilters">
            <h4>Stipe Colour</h4>
            <input v-model="stipeColour" @input="applyAllFilters">
            </div>
            <h3>Cap Parameters</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4>Diameter (cm)</h4>
            <input v-model="capDiam" @input="applyAllFilters">
            <h4>Thickness (cm)</h4>
            <input v-model="capThickness" @input="applyAllFilters">
            <h4>Cap Colour</h4>
            <input v-model="capColour" @input="applyAllFilters">
            </div>
            <h3>Other Parameters</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4>Season/Month</h4>
              <input v-model="seasonSearch" @input="applyAllFilters">
            </div>
            <!-- <button @click="searchMushrooms">Test Search Button</button> -->
            <h3>Tags</h3>
            <select v-model="selectedTags" multiple @change="applyAllFilters">
              <option v-for="tag in availableTags" :key="tag" :value="tag">{{ capitalize(tag) }}</option>
            </select>
            <br>
            <button @click="applyAllFilters">Apply Filters</button>
          </div>
          <hr>
          <div id="mushroom-name">
            <h2 v-if="filteredMushrooms.length > 0">Filtered Results</h2>
              <ul v-if="filteredMushrooms.length > 0">
                <li v-for="mushroom in filteredMushrooms" :key="mushroom.id">
                  <h2>{{ mushroom.common_names }}</h2>
                  <p>{{ mushroom.description }}</p>
                  <p>Edibility: {{ mushroom.edibility }}</p>
                  <button>View Details</button>
                </li>
              </ul>
              <p v-else>No Mushrooms Found</p>
          </div>
        </aside>
  
        <!-- Main content section -->
        <main class="landing-content">
          <!-- Landing page content here -->
          <h1>Welcome to Mushroom Finder</h1>
          <div>
              <MushroomCard :mushroom="sampleMushroom" />
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import mushroomData from '~/data/sampledata.js'
  import MushroomCard from '@/components/MushroomCard.vue';

  //JSON data
  const mushrooms = ref([]);
  const filteredMushrooms = ref([]);

  //Inputs
  const selectedTags = ref([]);
  const nameSearch = ref("");

  const stipeDiam = ref("");
  const stipeLen = ref("");
  const stipeHgt = ref("");
  const capDiam = ref("");
  const capThickness = ref("");
  const stipeColour = ref("");
  const capColour = ref("");
  const seasonSearch = ref("");


  //Load data
  onMounted(() => {
    mushrooms.value = mushroomData;
    //This will display all mushrooms in results initially 
    filteredMushrooms.value = mushrooms.value;
  });

  //Tag Filter
  const filterByTags = (data) => {
    //if no input - no data change
    if (selectedTags.value.length === 0) {
      return data;
    }
    //otherwise filter by selected tag
    return data.filter(mushroom =>
      selectedTags.value.every(tag => mushroom.tags.includes(tag))
      );
  };

  //Name Filter
  const filterByName = (data) => {
    //if no input - no data change
    if (!nameSearch.value) {
      return data;
    }
    //otherwise filter data by input against latin & common names
    return data.filter(d =>
      d.common_names.toLowerCase().includes(nameSearch.value.toLowerCase()) ||
      d.latin_names.toLowerCase().includes(nameSearch.value.toLowerCase())
      );
  };

  //Generic range filter: applied to all int range inputs (diam/len/height/thickness)
  const filterByRange = (data, value, propertyMin, propertyMax) => {
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
  }

  //Stipe Colour filter
  const filterByStipeColour = (data) => {
    //if no input - no data change
    if (stipeColour.value == "") {
      return data;
    }
    //otherwise filter by selected colour
    return data.filter(d =>
      d.stipe_features.colour.includes(stipeColour.value)
      );
  };

  //Cap Colour filter
  const filterByCapColour = (data) => {
    //if no input - no data change
    if (capColour.value == "") {
      return data;
    }
    //otherwise filter by selected colour
    return data.filter(d =>
      d.cap_features.colour.includes(capColour.value)
      );
  };

  const monthToInt = (month) => {
    switch (month) {
      case "january":
      return 1;
      break;
      case "february":
      return 2;
      break;
      case "march":
      return 3;
      break;
      case "april":
      return 4;
      break;
      case "may":
      return 5;
      break;
      case "june":
      return 6;
      break;
      case "july":
      return 7;
      break;
      case "August":
      return 8;
      break;
      case "september":
      return 9;
      break;
      case "october":
      return 10;
      break;
      case "november":
      return 11;
      break;
      case "december":
      return 12;
    }
  }

  //converts the months in search and JSON to numbers and compares them, either a basic number range if months are 1-12 or two ranges if season is between years like SH Spring-Autumn
  const filterByMonth = (searchMonth, jsonString) => {
    var str1 = jsonString.split('(')[1];
    var str2a = str1.split(' to ')[0];
    var str2b = str1.split(' to ')[1];
    var str3 = str2b.split(' ')[0];
    if ((monthToInt(searchMonth) > monthToInt(str2a)) && (monthToInt(searchMonth) < monthToInt(str3))) {
      return true;
    }
    if (monthToInt(str2a) > monthToInt(str3)) {
      if (((monthToInt(searchMonth) > monthToInt(str2a)) && (monthToInt(searchMonth) <= 12)) || ((monthToInt(searchMonth) < monthToInt(str3)) && (monthToInt(searchMonth) > 0))) {
        return true;
      }
    }
    return false;
  }

  //Season filter, can take a season or month as parameter
  const filterBySeason = (data) => {
    //if no input - no data change
    if (seasonSearch.value == "") {
      return data;
    }
    //otherwise filter by selected season, either the four seasons or a month within one of the seasons
    return data.filter(d =>
      d.time_of_year.toLowerCase().includes(seasonSearch.value.toLowerCase()) || filterByMonth(seasonSearch.value.toLowerCase(), d.time_of_year.toLowerCase())
      );
  };

  //Apply all of the Filters (Have to decide when this is called
  //currently called on filter button press, tag select, and when typing in Name search
  const applyAllFilters = () => {
    let results = mushrooms.value;
    //pull results from each filter function
    results = filterByTags(results);
    results = filterByName(results);
    results = filterByRange(results, stipeDiam.value, 'stipe_features.diameter_min', 'stipe_features.diameter_max');
    results = filterByRange(results, stipeLen.value, 'stipe_features.length_min', 'stipe_features.length_max');
    results = filterByRange(results, stipeHgt.value, 'stipe_features.height_min', 'stipe_features.height_max');
    results = filterByRange(results, capDiam.value, 'cap_features.diameter_min', 'cap_features.diameter_max');
    results = filterByRange(results, capThickness.value,'cap_features.thickness_min', 'cap_features.thickness_max');
    results = filterByStipeColour(results);
    results = filterByCapColour(results);
    results = filterBySeason(results);
    //assign results to filteredMushrooms array
    filteredMushrooms.value = results;
    //debug log 
    console.log('Filtered Results:', filteredMushrooms.value.map(mushroom => mushroom.common_names));
  };

  //predefined tags
  const availableTags = ['edible', 'poisonous', 'psychoactive']

  //Capitalize tags for user without changing data
  //const capitalize = (str) => {
  //  return str.charAt(0).toUpperCase() + str.slice(1);
  //};
  //capitalize tags for display
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const searchMushrooms = () => {
    var data = JSON.parse(JSON.stringify(mushrooms.value));
    //The filter function should include d.JSONObject.includes(constValue) and || OR or && AND to add more search parameters. Includes() is just for string objects.
    var searchedMushrooms = data.filter(d => (d.common_names.toLowerCase().includes(text.value.toLowerCase()) || d.latin_names.toLowerCase().includes(text.value.toLowerCase())) && d.cap_features.diameter.includes(text2.value) && d.cap_features.colour.includes(text3.value) && d.environment.includes(text4.value));
    filteredMushrooms.value = searchedMushrooms;
    console.log(text2.value);
    console.log(searchedMushrooms);
  };

  const sampleMushroom = {
  imageUrl: 'assets/images/mushroom.jpg',
  commonName: 'Coprinus Comatus',
  latinName: 'Shaggy Mane',
  edibility: 'Edible'
  };
  </script>
  
  <style scoped>
    /* Global styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
  
    /* Navbar styles */
    .navbar {
      background-color: #7e6551;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 1rem;
      justify-content: space-between;
    }
    
    .navbar-header {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .navbar-title {
      display: flex;
      text-align: center;
      justify-content: center;
    }
  
    .navbar-links {
      display: flex;
      gap: 1rem;
      margin-left: 1rem;
    }
  
    .navbar-links a {
      color: #fff;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
  
    .navbar-links a:hover {
      background-color: #603e2c;
    }
  
    .navbar-search {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  
    .navbar-search input {
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #603e2c;
      flex: 1;
      margin-right: 1rem;
    }
  
    .navbar-search button {
      padding: 0.5rem 1rem;
      border-radius: 5px;
      background-color: #603e2c;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  
    .navbar-search button:hover {
      background-color: #482b1f;
    }

    
  
    /* Filter panel styles */
    .filter-panel {
      background-color: #ede6dd;
      padding: 1rem;
    }
  
    .filter-panel div {
      background-color: #f5f1ec;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  
    .filter-panel h2 {
      margin-bottom: 0.5rem;
    }
  
    .filter-panel input {
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: 93%;
      margin: 0 auto;
    }
  
    .filter-panel button {
      padding: 0.5rem 1rem;
      border-radius: 5px;
      background-color: #603e2c;
      color: #fff;
      border: none;
      cursor: pointer;
      width: 100%;
      margin-top: 0.5rem
    }
  
    .filter-panel button:hover {
      background-color: #482b1f;
    }
  
    /* Main content styles */
    .main-content {
      display: flex;
      gap: 2rem;
      max-width: 100%;
      padding: 2rem;
    }
  
    .landing-content {
      flex: 1;
      background-color: #fff;
      padding: 2rem;
      border: 1px solid #ccc;
    }
  </style>
  