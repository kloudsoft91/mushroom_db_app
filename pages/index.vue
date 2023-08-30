
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
            <input v-model="text" @input="applyAllFilters">
          </div>
          <div id="advanced-search">
            <h2>Advanced Search</h2>
            <h3>Stipe Parameters</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4>Min Diameter (cm)</h4>
            <input v-model="minStipeDiam">
            <h4>Max Diameter (cm)</h4>
            <input v-model="maxStipeDiam" style="margin-right: 20px;">
            <h4>Min Length (cm)</h4>
            <input v-model="textLen1">
            <h4>Max Length (cm)</h4>
            <input v-model="textLen2" style="margin-right: 20px;">
            <h4>Min Height (cm)</h4>
            <input v-model="textHei1">
            <h4>Max Height (cm)</h4>
            <input v-model="textHei2" style="margin-right: 20px;">
            <h4>Stipe Colour</h4>
            <input v-model="textStiCol">
            </div>
            <h3>Cap Parameters</h3>
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h4>Min Diameter (cm)</h4>
            <input v-model="textCapDiam1">
            <h4>Max Diameter (cm)</h4>
            <input v-model="textCapDiam2" style="margin-right: 20px;">
            <h4>Min Thickness (cm)</h4>
            <input v-model="textCapThi1">
            <h4>Max Thickness (cm)</h4>
            <input v-model="textCapThi2" style="margin-right: 20px;">
            <h4>Cap Colour</h4>
            <input v-model="textCapCol">
            </div>
            <h3>Colour</h3>
            <input v-model="text3">
            <h3>Environment</h3>
            <input v-model="text4">
            <h3>Time of Year</h3>
            <input v-model="text5">
            <button @click="searchMushrooms">Test Search Button</button>
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
          <p>
            There are lots of interesting mushrooms to discover all around where we live. I've seen at least 10
            different species in my back yard the last month or so. Only one of those is edible. Mushroom
            identification is tricky. There are often only subtle differences between something delicious and a day
            or two of "severe gastrointestinal distress". One to two species can kill you, but it's a week before
            you start to feel symptoms.
          </p>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import mushroomData from '~/data/sampledata.js'

  const mushrooms = ref([]);
  const filteredMushrooms = ref([]);
  const selectedTags = ref([]);
  
  const text = ref("");

  const minStipeDiam = ref("");
  const maxStipeDiam = ref("");

  const text3 = ref("");
  const text4 = ref("");
  const text5 = ref("");

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
    if (!text.value) {
      return data;
    }
    //otherwise filter data by input against latin & common names
    return data.filter(d =>
      d.common_names.toLowerCase().includes(text.value.toLowerCase()) ||
      d.latin_names.toLowerCase().includes(text.value.toLowerCase())
      );
  };

  //Stipe Diameter Filter (can pretty much copy paste this for all other min/max int inputs)
  const filterByStipeDiameter = (data, min, max) => {
    //if no inputs - no data change
    if(!min && !max){
      return data;
    }
    //otherwise filter by stipe diameter
    return data.filter(d => {
      if (!d.stipe_features) return false;
      //change string inputs to ints
      const intMin = +min;
      const intMax = +max;

      //check & filter data within input range
      let withinMin = min ? d.stipe_features.diameter_min >= intMin : true;
      let withinMax = max ? d.stipe_features.diameter_min <= intMax : true;
      return withinMin && withinMax;
    })
  }

  //Apply all of the Filters (Have to decide when this is called
  //currently called on filter button press, tag select, and when typing in Name search
  const applyAllFilters = () => {
    let results = mushrooms.value;
    //pull results from each filter function
    results = filterByTags(results);
    results = filterByName(results);
    results = filterByStipeDiameter(results, minStipeDiam.value, maxStipeDiam.value)
    //assign results to filteredMushrooms array
    filteredMushrooms.value = results;
    //debug log
    console.log('Filtered Results:', filteredMushrooms.value);
  };

  //predefined tags
  const availableTags = ['edible', 'poisonous', 'psychoactive']

  //capitalize tags for display
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
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
  