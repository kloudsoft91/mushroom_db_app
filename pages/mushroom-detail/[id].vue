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

          <!-- Basic information table -->
          <table class="w-full mb-4">
            <tbody>
              <tr>
                <td class="font-semibold">Latin names:</td>
                <td>{{ mushroomData.latin_names }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Genus:</td>
                <td>{{ mushroomData.genus }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Edibility:</td>
                <td>{{ mushroomData.edibility }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Environment:</td>
                <td>{{ mushroomData.environment }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Ecology:</td>
                <td>{{ mushroomData.ecology }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Time of year:</td>
                <td>{{ mushroomData.time_of_year }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Origin:</td>
                <td>{{ mushroomData.native_or_introduced }}</td>
              </tr>
            </tbody>
          </table>
          <h2 class="text-2xl font-semibold mb-2">More Information</h2>
          <div class="space-y-2">
            <!-- Links section -->
            <h3 class="text-xl font-semibold mb-2">Links</h3>
            <div v-for="(link, linkName) in mushroomData.links" :key="linkName">
              <a :href="link" target="_blank" class="text-blue-500 hover:underline">{{ linkName }}</a>
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
        <table class="w-full mb-4">
          <tbody>
              <tr>
                <td>Description</td>
                <td>{{ mushroomData.description}}</td>
              </tr>
              <tr>
                <td>Lookalikes</td>
                <td>{{ mushroomData.lookalikes}}</td>
              </tr>
              <tr>
                <td>Stipe features</td>
                <tr>
                  <td>Minimum diameter:</td>
                  <td>{{ mushroomData.stipe_features.diameter_min}}</td>
                </tr>
                <tr>
                  <td>Maximum diameter:</td>
                  <td>{{ mushroomData.stipe_features.diameter_max}}</td>
                </tr>
                <tr>
                  <td>Colour:</td>
                  <td>
                    <ul>
                      <li v-for="color in mushroomData.stipe_features.colour" :key="color">{{ color }}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Minimum length:</td>
                  <td>{{ mushroomData.stipe_features.length_min}}</td>
                </tr>
                <tr>
                  <td>Maximum length:</td>
                  <td>{{ mushroomData.stipe_features.length_max}}</td>
                </tr>
                <tr>
                  <td>Bruising colour:</td>
                  <td>{{ mushroomData.stipe_features.brusing_colour}}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>{{ mushroomData.stipe_features.type}}</td>
                </tr>
              </tr>
              <tr>
                <td>Gills</td>
                <tr>
                  <td>Colour:</td>
                  <td>{{ mushroomData.gills.colour}}</td>
                </tr>
                <tr>
                  <td>Attachment:</td>
                  <td>{{ mushroomData.gills.attachment}}</td>
                </tr>
              </tr>
              <tr>
                <td>Spore colour</td>
                <td>{{ mushroomData.spore_colour}}</td>
              </tr>
              <tr>
                <td>Cap features</td>
                <tr>
                  <td>Colour:</td>
                  <td>
                    <ul>
                      <li v-for="color in mushroomData.cap_features.colour" :key="color">{{ color }}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Texture</td>
                  <td>{{ mushroomData.cap_features.texture}}</td>
                </tr>
                <tr>
                  <td>Diameter</td>
                  <td>Minimum: {{ mushroomData.cap_features.diameter_min}}, Maximum: {{ mushroomData.cap_features.diameter_max}}</td>
                </tr>
                <tr>
                  <td>Thickness</td>
                  <td>Minimum: {{ mushroomData.cap_features.thickness_min}}, Maximum: {{ mushroomData.cap_features.thickness_max}}</td>
                </tr>
                <tr>
                  <td>Shape</td>
                  <td>{{ mushroomData.cap_features.shape}}</td>
                </tr>
              </tr>
          </tbody>
        </table>
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