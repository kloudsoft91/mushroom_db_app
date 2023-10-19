<template>
  <div class="bg-gray-100 min-h-screen p-4">
    <HeaderBar />
    <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter" />
    <FooterBar @openCarouselInputs="openCarouselInputs" />

    <!-- Main content container -->
    <div class="container mx-auto mt-8">
      <div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 ultra:grid-cols-2 gap-10 justify-stretch justify-items-center w-11/12 desktop:w-3/4 mx-auto">
        <!-- Image carousel -->
          <carousel :items-to-show="1">
            <slide v-for="(image, index) in mushroomData.photos" :key="index">
              <nuxt-img class="w-full" provider="cloudinary" :src="`ar_3:4,c_fill,h_1024,w_768/${image}`" alt="Mushroom Image"></nuxt-img>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          <!-- Information table -->
          <div class="bg-white rounded-lg shadow-lg p-4">
            <h1 class="text-3xl font-semibold my-4">{{ mushroomData.common_names.split(',').map(name => name.trim()).join(' / ') }}</h1>
            <table class="w-full mb-4">
              <tbody>
                <tr v-for="attribute in informationAttributes" :key="attribute.key">
                  <td class="px-4 py-2 font-semibold">{{ attribute.label }}:</td>
                  <td class="px-4 py-2">{{ mushroomData[attribute.key] }}</td>
                </tr>
              </tbody>
            </table>
            <br>
            <h2 class="text-2xl font-semibold mb-2">More Information</h2>
            <div class="space-y-2">
              <!-- Links section -->
              <h3 class="text-xl font-semibold mb-2">Links</h3>
              <div v-for="(link, linkName) in mushroomData.links" :key="linkName">
                <a :href="link" target="_blank" class="text-emerald-500 stroke-emerald-500 hover:stroke-emerald-700 hover:text-emerald-700">{{ linkName }}</a>
              </div>
              <!-- Books section -->
              <h3 class="text-xl font-semibold mb-2">Books</h3>
              <p class="text-gray-600">{{ mushroomData.nz_books }}</p>
            </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-10 justify-stretch justify-items-center w-11/12 desktop:w-3/4 mx-auto">
        <!-- Details table -->
        <div class="bg-white rounded-lg shadow-lg p-4 mt-8">
          <h2 class="text-2xl font-semibold mb-2">Details</h2>
          <div class="overflow-x-auto">
            <table>
              <tbody>
                <tr class="px-4 py-2 font-semibold">Description:</tr> 
                <td class="px-4 py-2">{{ mushroomData.description }}</td>
                <tr class="px-4 py-2 font-semibold">Lookalikes:</tr> 
                <td class="px-4 py-2">{{ mushroomData.lookalikes }}</td>  
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Feature tables -->
      <div class="bg-white rounded-lg shadow-lg p-4 mt-8 justify-stretch justify-items-center w-11/12 desktop:w-3/4 mx-auto">
        <h2 class="text-2xl font-semibold mb-2">Features</h2>
        <div class="overflow-x-auto">
          <!-- Stipe and Cap data -->
          <table class="w-full mb-4">
            <tbody>
              <tr>
                <td v-for="(feature, featureName) in features" :key="featureName">
                  <td class="py-2 font-semibold">{{ featureName }}:</td>
                  <tr v-for="attribute in feature" :key="attribute.key">
                    {{ attribute.label }}:
                    <span class="px-4 py-2" v-for="item in getValueFromData(mushroomData, attribute.key)" :key="item">
                      <nuxt-link :to="{ path: '/', query: { label: attribute.key, item: item } }" class="small-link">{{ item }}</nuxt-link> 
                    </span>
                  </tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="overflow-x-auto">
          <!-- Gill and Spore data -->
          <table class="w-full mb-4">
            <tbody>
              <tr>
                <td v-for="(feature, featureName) in other" :key="featureName">
                  <td class="font-semibold">{{ featureName }}:</td>
                  <!-- Display each properties attributes -->
                  <tr v-for="attribute in feature" :key="attribute.key">
                    <td v-for="item in getValueFromData(mushroomData, attribute.key)">
                      {{ attribute.label }}: 
                      <nuxt-link :to="{path: '/', query: { label: attribute.key, item: item }}" class="small-link">{{ item }}</nuxt-link>
                    </td>
                  </tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
      informationAttributes: [
        { label: 'Latin names', key: 'latin_names' },
        { label: 'Genus', key: 'genus' },
        { label: 'Edibility', key: 'edibility' },
        { label: 'Environment', key: 'environment' },
        { label: 'Ecology', key: 'ecology' },
        { label: 'Time of year', key: 'time_of_year' },
        { label: 'Origin', key: 'native_or_introduced' },
      ],
      features: {
        Stipe: [
          { label: 'Minimum diameter', key: 'stipe_features.diameter_min' },
          { label: 'Maximum diameter', key: 'stipe_features.diameter_max' },
          { label: 'Colour', key: 'stipe_features.colour' },
          { label: 'Minimum length', key: 'stipe_features.length_min' },
          { label: 'Maximum length', key: 'stipe_features.length_max' },
          { label: 'Bruising colour', key: 'stipe_features.bruising_colour' },
          { label: 'Type', key: 'stipe_features.type' },
        ],
        Cap: [
          { label: 'Colour', key: 'cap_features.colour' },
          { label: 'Texture', key: 'cap_features.texture' },
          { label: 'Minimum diameter', key: 'cap_features.diameter_min' },
          { label: 'Maximum diameter', key: 'cap_features.diameter_max' },
          { label: 'Minimum thickness', key: 'cap_features.thickness_min' },
          { label: 'Maximum thickness', key: 'cap_features.thickness_max' },
          { label: 'Shape', key: 'cap_features.shape' },
        ],
      },
      other: {
        Gills: [
          { label: 'Colour', key: 'gills.colour' },
          { label: 'Attachment', key: 'gills.attachment' },
        ],
        Spores:[{ label: 'Colour', key: 'spore_colour' }],
      }
    };
  },
  methods: {
    fetchData() {
      const route = useRoute();
      this.id = route.params.id;
      this.mushroomData = mushroomData.find(mushroom => mushroom.id === parseInt(this.id));

      if (!this.mushroomData) {
        throw new Error(`Mushroom with ID ${this.id} not found.`);
      }
    },
    getValueFromData(data, key) {
      // Split the key into nested keys
      const keys = key.split('.');
      let value = data;
      for (const k of keys) {
        value = value[k];
        // If the value is undefined or null, return an empty string
        if (value === null || value === undefined) {
          return '';
        }
      }
      // Check if the value is an array
      if (Array.isArray(value)) {
        return value; // Return the array as-is
      }
      return [value]; // Wrap the single value in an array
    },
  },
  created() {
    this.fetchData();
  },
};
</script>