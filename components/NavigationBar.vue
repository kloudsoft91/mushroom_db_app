<!--Main Navbar-->
<template>
  <!--Mobile + Tablet + Desktop-->
  <div class=" bg-gray-100 relative" >
  <!--Extended Filter Button-->
    <div class="hidden desktop:block absolute z-10 right-0 left-10 top-[80px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-20 h-20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
  </div>
    <!--Main banner-->
    <div class=" bg-emerald-700 relative py-14 tablet:py-24 desktop:py-28 shadow-md">
      <h1 class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto tablet:-mt-8 desktop:-mt-14 font-bold text-white text-lg tablet:text-2xl laptop:text-3xl desktop:text-5xl">Know what you're looking for?</h1>
      <!--Search Bar-->  
      <div class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto mt-9 tablet:mt-4 desktop:mt-4 shadow-md bg-white rounded-lg px-2 py-1 tablet:py-0 tablet:px-2">
        <input class="text-sm tablet:text-base text-emerald-600 flex-grow outline-none px-1 tablet:px-2" type="text" placeholder="Search all mushrooms" />
        <div class="flex py-1 rounded-lg">
          <button class="bg-emerald-700 hover:bg-emerald-500 text-white text-sm tablet:text-base rounded-lg px-3 py-1 tablet:px-2 tablet:py-1 desktop:px-3 desktop:py-2 font-semibold desktop:tracking-wide">Search</button>
        </div>
      </div>   
    </div>
    <!--Edibility Quick Filter-->
    <div class="tablet:bg-white desktop:bg-white rounded-lg w-11/12 desktop:w-3/4 desktop:p-2 absolute left-0 right-0 mx-auto mt-6 tablet:-mt-6 desktop:-mt-5 tablet:shadow-md desktop:shadow-md">
      <div class="flex flex-wrap gap-1 desktop:gap-0 tablet:gap-0 p-2 desktop:p-0 tablet:p-2 w-full">
        <button class="tag-button">Edible</button>
        <button class="tag-button">Gourmet</button>
        <button class="tag-button">Poisonous</button>
        <button class="tag-button">Psychoactive</button>
        <button class="tag-button">Lookalike</button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>