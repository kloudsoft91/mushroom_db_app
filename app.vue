<template>
  <div style="background-color: lightgrey">
    <h2>Mushroom Identification</h2>
    <input v-model="text">
  </div>
  <div>
    <h2>Advanced Search</h2>
    <h3>Size</h3>
    <input v-model="text">
    <h3>Colour</h3>
    <input v-model="text">
    <h3>Environment</h3>
    <input v-model="text">
    <h3>Time of Year</h3>
    <input v-model="text">
    <br>
    <button>Apply Filters</button>
  </div>
  <hr>
  <div>
    
    <h2>Mushroom Name</h2>
    <h3>Edibility: Safe</h3>
    <button>View Details</button>
  </div>
</template>
