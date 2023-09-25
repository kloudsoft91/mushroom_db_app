<!-- static page with mock data for presentation, we will implement properly later on-->
<template>
  <HeaderBar />
  <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter"/>
  <FooterBar @openCarouselInputs="openCarouselInputs"/>
  
  <div class="mushroom-detail">
    <h1 class="mushroom-name">Shaggy Mane</h1>
    <div class="mushroom-image-container">
      <img src="assets/images/mushroom.jpg" alt="Mushroom" class="mushroom-image" />
    </div>
    <div class="mushroom-info">
      <div class="edibility-tag">Edible</div>
    </div>
    <div class="mushroom-description">
      The Shaggy Mane is a distinctive mushroom with a white, cylindrical cap that is covered in shaggy scales.
    </div>
    <div class="mushroom-lookalikes">
      <h3>Lookalikes</h3>
      The Shaggy Mane has a unique appearance, but young specimens can be confused with the Common Ink Cap (Coprinopsis atramentaria) before the gills turn black.
    </div>
    <div class="mushroom-links">
      <a href="https://www.inaturalist.org/taxa/47392-Coprinus-comatus" target="_blank">iNaturalist</a>
      <a href="https://en.wikipedia.org/wiki/Coprinus_comatus" target="_blank">Wikipedia</a>
    </div>
  </div>
  </template>

<!-- this is for dynamic page later, don't delete unless you plan to implement it yourself-->
<!--<template>
    <div class="mushroom-detail">
      <h1 class="mushroom-name">{{ mushroomData.commonName }}</h1>
      <div class="mushroom-image-container">
        <img :src="mushroomData.imageUrl" alt="Mushroom" class="mushroom-image" />
      </div>
      <div class="mushroom-description">{{ mushroomData.description }}</div>
      <div class="mushroom-links">
        <a :href="mushroomData.links.iNaturalist" target="_blank">iNaturalist</a>
        <a :href="mushroomData.links.wikipedia" target="_blank">Wikipedia</a>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    async asyncData({ params }) {
      const mushroomId = params.id;
      const mushroomData = await fetchMushroomData(mushroomId); // Replace with data fetchy logic
      return { mushroomData };
    }
  };
  </script>-->
  
  <style scoped>
  .mushroom-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .mushroom-name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .mushroom-image-container {
    display: flex;
    align-items: flex-start;
    text-align: center;
  }
  
  .mushroom-image {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    height:auto;
  }
  
  .mushroom-description {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
  }
  
  .mushroom-links {
    margin-top: 20px;
  }
  
  .mushroom-links a {
    display: inline-block;
    margin-right: 10px;
    color: #007bff;
    text-decoration: none;
  }

  .edibility-tag {
  background-color: #00cc66;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: inline-block;
}
  </style>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>