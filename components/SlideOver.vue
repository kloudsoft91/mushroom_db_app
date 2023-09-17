
<template>
  <div>
    <!-- add class="bg-white" to the end of the button label to hide buttons for testing-->
    <UButton label="Open" @click="isOpen = true"/>
    <USlideover v-model="isOpen" :overlay="false">
      <FilterBar/>
    </USlideover>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>