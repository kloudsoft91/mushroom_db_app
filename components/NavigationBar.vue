<!--Main Navbar-->
<template>

  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="container max-w-screen-2xl bg-emerald-500 rounded-lg p-14">
      <form>
        <h1 class="flex right text-center font-bold text-white text-4xl">Know what you're looking for?</h1>
          <p class="flex right font-normal text-sm my-6 max-w-lg">Enter a latin or common name of a mushroom</p>
          <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search all mushrooms" />
            <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <select id="Com" class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
              <option value="com" selected>Edible</option>
              <option value="net">Gourmet</option>
              <option value="org">Poisonous</option>
              <option value="io">Psychadelic</option>
            </select>
              <button class="bg-emerald-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
            </div>
          </div>
      </form>
    </div>
  </div>
   <!--<nav class="bg-emerald-200">
      <div class="px-4 gap-x-4 flex justify-end">
        <p class=" text-sm font-semibold leading-6 text-stone-400">Already know what you're looking for?</p>
      </div>
      <div class="navbar-header">
        <h1 class="navbar-title">Mushy Match</h1>
      </div>
      <div class="navbar-search">
        <input type="text" placeholder="Search Mushy Match">
        <button class="search-button">Search</button>
      </div>
    </nav>-->
</template>

<script setup>
</script>