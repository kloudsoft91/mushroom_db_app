<template>
    <div>
      <HeaderBar />
      <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter" />
      <FooterBar @openCarouselInputs="openCarouselInputs" />
  
      <div class="mushroom-detail">
        <h1 class="mushroom-name">{{ mushroomData.common_names }}</h1>
        <p>Details for {{ id }}</p>
        <div class="mushroom-image-container">
          <img :src="mushroomData.imageUrl" alt="Mushroom" class="mushroom-image" />
        </div>
        <div class="mushroom-info">
          <div class="edibility-tag">{{ mushroomData.edibility }}</div>
        </div>
        <div class="mushroom-description">{{ mushroomData.description }}</div>
        <div class="mushroom-links">
          <a :href="mushroomData.links.iNaturalist" target="_blank">iNaturalist</a>
          <a :href="mushroomData.links.wikipedia" target="_blank">Wikipedia</a>
        </div>
      </div>
    </div>
</template>
    
<script>
import mushroomData from '~/data/sampledata.js';

export default {
    data() {
    return {
        id: null,
        mushroomData: null,
    };
    },
    methods: {
    fetchData() {
        this.id = this.$route.params.id;

        // Simulate fetching data based on the provided ID
        this.mushroomData = mushroomData.find(mushroom => mushroom.id === parseInt(this.id));

        if (!this.mushroomData) {
        // Handle the case where the mushroom with the given ID is not found
        throw new Error(`Mushroom with ID ${this.id} not found.`);
        }
    },
    },
    created() {
    this.fetchData();
    },
};
</script>