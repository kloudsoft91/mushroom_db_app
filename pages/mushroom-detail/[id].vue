<template>
  <HeaderBar />
  <FooterBar />
  <div class="bg-gray-100 min-h-screen p-4">
    <!-- Main content container -->
    <div class="z-0 bg-emerald-700 relative py-8 tablet:py-24 desktop:py-28 shadow-md">
      <h1 class="flex w-11/12 desktop:w-3/4 mx-auto tablet:-mt-12 desktop:-mt-20 font-bold text-white text-lg tablet:text-2xl laptop:text-3xl desktop:text-5xl">{{mushroomData.common_names[0]}} Details</h1>
    </div>
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
            <h1 class="text-3xl font-semibold my-4">{{ mushroomData.common_names.join(', ') }}</h1>
            <table class="w-full mb-4">
              <tbody>
                <tr v-for="attribute in informationAttributes" :key="attribute.key">
                  <td class="px-4 py-2 font-semibold">{{ attribute.label }}:</td>
                  <td class="px-4 py-2">
                    <span v-if="Array.isArray(mushroomData[attribute.key])">
                      {{ mushroomData[attribute.key].join(', ') }}
                    </span>
                    <span v-else>
                      {{ mushroomData[attribute.key] }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <br>
            <h2 class="text-2xl font-semibold mb-2">More Information</h2>
            <div class="space-y-2">
              <!-- Links section -->
              <h3 class="text-xl font-semibold mb-2">Links</h3>
              <div v-for="(link, index) in mushroomData.links" :key="index">
                <a :href="link" target="_blank" class="text-emerald-500 stroke-emerald-500 hover:stroke-emerald-700 hover:text-emerald-700" data-cy="external-link">{{ link }}</a>
              </div>
              <!-- Books section -->
              <h3 class="text-xl font-semibold mb-2">Books</h3>
              <p class="text-gray-600">{{ mushroomData.nz_books[0] === null || mushroomData.nz_books[0] === "" ? 'Unknown' : mushroomData.nz_books  }}</p>
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
                <!-- <td class="px-4 py-2">{{ mushroomData.lookalikes}}</td> 
                <tr class="px-4 py-2 font-semibold"></tr> -->
                <td class="px-4 py-2">{{ mushroomData.lookalikes_description === null || mushroomData.lookalikes_description === "" ? 'No lookalikes known in NZ' : mushroomData.lookalikes_description }}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-10 justify-stretch justify-items-center w-11/12 desktop:w-3/4 mx-auto">
        <!-- Feature tables -->
        <div class="bg-white rounded-lg shadow-lg p-4 mt-8 mb-20">
          <h2 class="text-2xl font-semibold mb-2">Features</h2>
          <div class="overflow-x-auto">
            <table class="w-full mb-4">
              <tbody>
                <tr v-for="(feature, featureName) in features" :key="featureName">
                  <tr class="font-semibold underline">{{ featureName }}:</tr>
                  <tr v-for="attribute in feature" :key="attribute.key">
                    <td class="px-4 py-2" v-if="getValueFromData(mushroomData, attribute.key) && getValueFromData(mushroomData, attribute.key)[0] !=null">
                      {{ attribute.label }}:
                    </td>
                    <td>
                      <span v-for="item in getValueFromData(mushroomData, attribute.key)" class="mr-2">
                        <nuxt-link v-if="attribute.label != 'Description'"
                          :to="{ path: '/', query: { label: attribute.key, item: item } }" 
                          class="small-link"
                          data-cy="attribute-link">
                          {{ item }}
                        </nuxt-link>
                        <p v-else>
                          {{ item }}
                        </p>
                        <span class="small-link">{{ attribute.size ? ' cm' : '' }}</span>
                      </span>
                    </td>
                  </tr>
                  <br>
                </tr>
              </tbody>
            </table>
          </div>
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
        { label: 'Maori names', key: 'maori_names' },
        { label: 'Genus', key: 'genus' },
        { label: 'Edibility', key: 'edibility' },
        { label: 'Environment', key: 'environment' },
        { label: 'Ecology', key: 'ecology' },
        { label: 'Time of year', key: 'time_of_year' },
        { label: 'Origin', key: 'native_or_introduced' },
      ],
      features: {
        Stipe: [
          { label: 'Description', key: 'stipe_features.description' },
          { label: 'Minimum diameter', key: 'stipe_features.diameter_min', size: true},
          { label: 'Maximum diameter', key: 'stipe_features.diameter_max', size: true },
          { label: 'Colour', key: 'stipe_features.colour' },
          { label: 'Minimum length', key: 'stipe_features.length_min', size: true },
          { label: 'Maximum length', key: 'stipe_features.length_max', size: true },
          { label: 'Bruising colour', key: 'stipe_features.bruising_colour' },
          { label: 'Type', key: 'stipe_features.type' },
        ],
        Cap: [
          { label: 'Description', key: 'cap_features.description' },
          { label: 'Colour', key: 'cap_features.colour' },
          { label: 'Texture', key: 'cap_features.texture' },
          { label: 'Minimum diameter', key: 'cap_features.diameter_min', size: true },
          { label: 'Maximum diameter', key: 'cap_features.diameter_max', size: true },
          { label: 'Minimum thickness', key: 'cap_features.thickness_min', size: true },
          { label: 'Maximum thickness', key: 'cap_features.thickness_max', size: true },
          { label: 'Shape', key: 'cap_features.shape' },
        ],
        Gills: [
          { label: 'Description', key: 'gills.description' },
          { label: 'Colour', key: 'gills.colour' },
          { label: 'Attachment', key: 'gills.attachment' },
          { label: 'Spore colour', key: 'gills.spore_colour' },
        ],
        Month: [
          {label: 'Month', key: "time_of_year" },
        ]
      },
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