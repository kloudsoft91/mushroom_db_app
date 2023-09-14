
<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />
    <USlideover v-model="isOpen" :overlay="false">
      <FilterBar/>
    </USlideover>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>