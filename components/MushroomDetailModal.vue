<!-- This was for a popup window for mushroom details
PLEASE KEEP - UNTIL I FIGURE OUT IF I NEED IT FOR ANYTHING ELSE -->
<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay fixed inset-0 bg-gray-800 opacity-50"></div>
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <!-- Mushroom details here -->
        <div class="modal-content py-4 text-left px-6">
          <h2 class="text-2xl font-semibold flex justify-between items-center">
            {{ mushroom.common_names }}
            <button @click="closePopup" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

        </h2>
        <!-- Table with all mushroom details -->
        <table class="text-xs my-3">
                <tbody>
                    <tr>
                        <td class="px-2 py-2 text-gray-700 font-semibold max-w-[50%] truncate align-top">Description</td>
                        <td class="px-2 py-2 align-top">{{ mushroom.description }}</td>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-700 font-semibold max-w-[50%] truncate align-top">Stipe features</td>
                            <tr v-for="(value, label) in mushroom.stipe_features" :key="label">
                                <td class="px-2 py-2 text-gray-500 font-semibold">{{ formatLabel(label) }}</td>
                                <td class="px-2 py-2">{{ value }}</td>
                            </tr>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-700 font-semibold max-w-[50%] truncate align-top">Gills</td>
                            <tr v-for="(value, label) in mushroom.gills" :key="label">
                                <td class="px-2 py-2 text-gray-500 font-semibold">{{ formatLabel(label) }}</td>
                                <td class="px-2 py-2">{{ value }}</td>
                            </tr>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-700 font-semibold max-w-[50%] truncate align-top">Cap features</td>
                            <tr v-for="(value, label) in mushroom.cap_features" :key="label">
                                <td class="px-2 py-2 text-gray-500 font-semibold">{{ formatLabel(label) }}</td>
                                <td class="px-2 py-2">{{ value }}</td>
                            </tr>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-700 font-semibold max-w-[50%] truncate align-top">Environment</td>
                        <td class="px-2 py-2 align-top">{{ mushroom.environment }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mushroom: Object,
    },
    methods: {
      closePopup() {
        this.$emit('close-popup');
      },
      formatLabel(label) {
        return label.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    transition: opacity 0.2s ease-in-out;
  }
  
  .modal-container {
    max-height: 80vh;
  }
  </style>
  