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
                <td class="font-semibold">{{ attribute.label }}:</td>
                <td>{{ mushroomData[attribute.key] }}</td>
              </tr>
            </tbody>
          </table>
          <h2 class="text-2xl font-semibold mb-2">More Information</h2>
          <div class="space-y-2">
            <!-- Links section -->
            <h3 class="text-xl font-semibold mb-2">Links</h3>
            <div v-for="(link, linkName) in mushroomData.links" :key="linkName">
              <a :href="link" target="_blank" class="quick-link">{{ linkName }}</a>
            </div>
            <!-- Books section -->
            <h3 class="text-xl font-semibold mb-2">Books</h3>
            <p class="text-gray-600">{{ mushroomData.nz_books }}</p>
          </div>
        </div>
      </div>

      <!-- Details table -->
      <div class="bg-white rounded-lg shadow-lg p-4 mt-8">
      <h2 class="text-2xl font-semibold mb-2">Details</h2>
      <div class="overflow-x-auto">
        <table class="w-full">
          <tbody>
            <template v-for="attribute in detailsAttributes" :key="attribute.key">
              <tr class="px-4 py-2 font-semibold">{{ attribute.label }}:</tr>
              <td class="px-4 py-2">
                <template v-if="typeof mushroomData[attribute.key] === 'object'">
                  <ul>
                    <li v-for="(value, key) in mushroomData[attribute.key]" :key="key">
                      {{ key }}: <nuxt-link :to="{ path: '/', query: { label: attribute.key + ',' + key, item: value }}" class="text-emerald-500 stroke-emerald-500 hover:stroke-emerald-700 hover:text-emerald-700">{{ formatValue(value) }}</nuxt-link>
                    </li>
                  </ul>
                </template>
                <template v-else-if="attribute.link == true">
                  <nuxt-link :to="{ path: '/', query: { label: attribute.label, item: attribute.key }}" class="text-emerald-500 stroke-emerald-500 hover:stroke-emerald-700 hover:text-emerald-700">{{ mushroomData[attribute.key] }}</nuxt-link>
                </template>
                <template v-else>
                  {{ mushroomData[attribute.key] }}
                </template>
              </td>
            </template>
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
      detailsAttributes: [
        { label: 'Description', key: 'description', link: false },
        { label: 'Lookalikes', key: 'lookalikes', link: false},
        { label: 'Stipe features', key: 'stipe_features', link: true },
        { label: 'Gills', key: 'gills' , link: true},
        { label: 'Spore colour', key: 'spore_colour', link: true },
        { label: 'Cap features', key: 'cap_features', link: true },
      ],
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