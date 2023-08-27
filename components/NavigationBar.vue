<!--Main Navbar-->
<template>
<!--  Desktop - Leave this here for now so i can work it into the code below
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="container max-w-screen-2xl bg-emerald-500 relative p-14 px-60">
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
              <option value="io">Psychoactive</option>
              <option value="io">Lookalike</option>
            </select>
              <button class="bg-emerald-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
            </div>
          </div>
          <div class="flex w-11/12 bg-white rounded-lg p-2 mt-4 absolute z-10 mx-auto">
            <button class="flex-1 bg-blue-500 text-white text-base px-4 py-2">Edible</button>
            <button class="flex-1 bg-red-500 text-white text-base px-4 py-2">Gourmet</button>
            <button class="flex-1 bg-yellow-500 text-white text-base px-4 py-2">Poisonous</button>
            <button class="flex-1 bg-purple-500 text-white text-base px-4 py-2">Psychoactive</button>
            <button class="flex-1 bg-orange-500 text-white text-base px-4 py-2">Lookalike</button>
        </div>
      </form>
    </div>
  </div>-->

  <!--MOBILE FIRST-->
<div class=" bg-gray-100" >
    <div class=" bg-emerald-500 relative py-14 mobile:py-16 shadow-md">
        <h1 class="flex w-11/12 absolute left-0 right-0 mx-auto mobile:mt-2 font-bold text-white text-lg mobile:text-xl">Know what you're looking for?</h1>
          <div class="flex w-11/12 absolute left-0 right-0 mx-auto mt-9 mobile:mt-11 shadow-md bg-white rounded-lg px-1 mobile:px-2 py-1 ">
            <input class="text-sm mobile:text-base text-gray-400 flex-grow outline-none px-1 mobile:px-2 " type="text" placeholder="Search all mushrooms" />
            <div class="flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button class="bg-emerald-500 text-white text-sm mobile:text-base rounded-lg px-3 py-1 mobile:px-2 mobile:py-2 font-thin">Search</button>
            </div>
          </div>
          
          
    </div>
    <div class="mt-6 mobile:mt-9">
            <div class="flex gap-2 w-11/12 absolute left-0 right-0 mx-auto">
              <button class="flex-1 bg-blue-500 text-white text-sm mobile:text-base rounded-lg px-2 py-1">Edible</button>
              <button class="flex-1 bg-orange-500 text-white text-sm mobile:text-base rounded-lg px-2 py-1">Gourmet</button>
              <button class="flex-1 bg-red-500 text-white text-sm mobile:text-base rounded-lg px-2 py-1">Poisonous</button>
            </div>
            <div class="flex gap-2 w-11/12 mt-8 mobile:mt-10 absolute left-0 right-0 mx-auto">
              <button class="flex-1 bg-purple-500 text-white text-sm mobile:text-base rounded-lg px-2 py-1">Psychoactive</button>
              <button class="flex-1 bg-yellow-500 text-white text-sm mobile:text-base rounded-lg px-2 py-1">Lookalike</button>
            </div>
        </div>
  </div>
</template>

<script setup>
</script>