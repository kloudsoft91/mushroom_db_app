
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
            <input v-model="text">
          </div>
          <div id="advanced-search">
            <h2>Advanced Search</h2>
            <h3>Size</h3>
            <input v-model="text">
            <h3>Colour</h3>
            <input v-model="text">
            <h3>Environment</h3>
            <input v-model="text">
            <h3>Time of Year</h3>
            <input v-model="text">
            <h3>Tags</h3>
            <input v-model="tagInput">  
            <br>
            <button @click="filterMushrooms">Apply Filters</button>
          </div>
          <hr>
          <div id="mushroom-name">
            <h2>Filtered Results</h2>
              <ul>
                <li v-for="mushroom in filteredMushrooms" :key="mushroom.id">
                  <h3>{{ mushroom.common_names }}</h3>
                  <p>{{ mushroom.description }}</p>
                </li>
              </ul>
            <h2>Mushroom Name</h2>
            <h3>Edibility: Safe</h3>
            <button>View Details</button>
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
  const tagInput = ref('');

  //assign data to 'mushrooms' array
  onMounted(() => {
    mushrooms.value = mushroomData;
  });

  //applies tag filters 
  const applyTagFilter = (tag) => {
    return mushrooms.value.filter((mushroom) => mushroom.tags.includes(tag));
  };

  //passes tag inputs to applyTagFilter
  const filterMushrooms = () => {
    filteredMushrooms.value = applyTagFilter(tagInput.value);
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
  