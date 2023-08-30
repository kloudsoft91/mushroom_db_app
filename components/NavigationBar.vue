<!--Main Navbar-->
<template>

  <!--Mobile + Tablet + Desktop-->
<div class=" bg-gray-100" >
    <!--Main banner-->
    <div class=" bg-emerald-500 relative py-14 tablet:py-24 desktop:py-28 shadow-md">
        <h1 class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto tablet:-mt-8 desktop:-mt-14 font-bold text-white text-lg tablet:text-2xl laptop:text-3xl desktop:text-5xl">Know what you're looking for?</h1>
        <!--Search Bar-->  
        <div class="flex w-11/12 desktop:w-3/4 absolute left-0 right-0 mx-auto mt-9 tablet:mt-4 desktop:mt-4 shadow-md bg-white rounded-lg px-2 py-1 tablet:py-0 tablet:px-2">
            <input class="text-sm tablet:text-base text-gray-400 flex-grow outline-none px-1 tablet:px-2" type="text" placeholder="Search all mushrooms" />
            <div class="flex py-1 rounded-lg">
              <button class="bg-emerald-500 text-white text-sm tablet:text-base rounded-lg px-3 py-1 tablet:px-2 tablet:py-1 desktop:px-3 desktop:py-2 font-thin desktop:font-semibold desktop:tracking-wide">Search</button>
            </div>
          </div>   
      </div>
      <!--Button Bar / Quick Links (Custom style in tailwind.css file)-->
      <div class="tablet:bg-white desktop:bg-white rounded-lg w-11/12 desktop:w-3/4 desktop:p-2 absolute left-0 right-0 mx-auto mt-6 tablet:-mt-6 desktop:-mt-5 tablet:shadow-md desktop:shadow-md">
        <div class="flex flex-wrap gap-2 desktop:gap-0 tablet:gap-0 p-2 desktop:p-0 tablet:p-2 w-full">
          <button class="button bg-blue-500">Edible</button>
          <button class="button bg-orange-500 ">Gourmet</button>
          <button class="button bg-red-500">Poisonous</button>
          <button class="button bg-purple-500">Psychoactive</button>
          <button class="button bg-yellow-500">Lookalike</button>
        </div>
      </div>
  </div>
</template>

<script setup>
</script>