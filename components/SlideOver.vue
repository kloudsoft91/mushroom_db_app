
<template>
  <div>
    <!-- add class="bg-white" to the end of the button label to hide buttons for testing-->
    <UButton label="Filters" @click="isOpen = true"  class=""/>
    <USlideover v-model="isOpen" :overlay="false" side="left" :ui='{"wrapper": "mt-[59px]"}'>
      <FilterBar/>
    </USlideover>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>

