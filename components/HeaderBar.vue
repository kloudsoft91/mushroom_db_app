<template>
  <header class="hidden tablet:hidden desktop:block bg-white content-center">
    <nav class="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 w-3/4 m-auto">
      <div class="mb-2 flex flex-row self-center">
          <h1 class="font-semibold text-emerald-500 text-lg tablet:text-xl desktop:text-3xl">Mushy Match</h1>
      </div>
      <div class="sm:mb-0 self-center">
        <NuxtLink to="/" class="ml-5 text-emerald-700 hover:text-emerald-500 text-lg">Home</NuxtLink>
        <NuxtLink to="/about" class="ml-5 text-emerald-700 hover:text-emerald-500 text-lg">About</NuxtLink>
        <NuxtLink to="/news"  class="ml-5 text-emerald-700 hover:text-emerald-500 text-lg">News</NuxtLink>
        <NuxtLink to="/contact"  class="ml-5 text-emerald-700 hover:text-emerald-500 text-lg">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>
  
  <script setup>
  
  </script>