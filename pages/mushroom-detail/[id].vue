<template>
    <HeaderBar />
    <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter" />
    <FooterBar @openCarouselInputs="openCarouselInputs" />
    <div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 ultra:grid-cols-2 gap-5 justify-stretch justify-items-center w-11/12 desktop:w-3/4 mx-auto">
      <div class="image-carousel">
        <carousel :items-to-show="1">
        <slide v-for="(image, index) in mushroomData.photos" :key="index">
          <nuxt-img class="rounded-t-lg" provider="cloudinary" :src="`ar_3:4,c_fill,h_1024,w_768/${image}`" alt="Mushroom Image"></nuxt-img>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      </div>
      <div class="information-table">
        <h1 class="text-3xl font-semibold my-4">{{ mushroomData.common_names.split(',').map(name => name.trim()).join(' / ') }}</h1>
        <!-- Apply modern styling to the table -->
        <table >
          <tbody>
            <tr v-for="(value, key) in mushroomData" :key="key">
              <td>{{ formatKey(key) }}</td>
              <td>{{ formatValue(value) }}</td>
            </tr>
          </tbody>
        </table>
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
    formatKey(key) {
      // Convert camelCase to Title Case for display
      return key.replace(/([A-Z])/g, ' $1').trim();
    },
    formatValue(value) {
      // Format array values as a comma-separated list
      if (Array.isArray(value)) {
        return value.join(', ');
      }
      return value;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>