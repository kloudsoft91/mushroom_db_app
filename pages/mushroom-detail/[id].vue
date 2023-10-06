<template>
    <div>
      <HeaderBar />
      <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter" />
      <FooterBar @openCarouselInputs="openCarouselInputs" />
  
      <div class="mushroom-detail">
        <table class="mushroom-table">
            <tbody>
                <tr v-for="(value, key) in mushroomData">
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