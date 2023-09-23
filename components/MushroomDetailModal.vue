<template>
    <div class="popup-overlay">
      <div class="popup-content">
        <!-- Display mushroom details here -->
        <h2>{{ mushroom.common_names }}</h2>
        <p>{{ mushroom.description }}</p>
        <!-- Add more details as needed -->
        <button @click="closePopup">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mushroom: Object, // Pass the selected mushroom to display its details
    },
    methods: {
      closePopup() {
        // Emit an event to notify the parent component (ResultCards.vue) to close the popup
        this.$emit('close-popup');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the popup here */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  </style>
  