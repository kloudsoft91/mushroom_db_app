<template>
    <HeaderBar />
    <FooterBar @openCarouselInputs="openCarouselInputs"/>
    <div class="z-0 bg-emerald-700 relative py-8 tablet:py-24 desktop:py-28 shadow-md">
      <h1 class="flex w-11/12 desktop:w-3/4 mx-auto tablet:-mt-12 desktop:-mt-20 font-bold text-white text-lg tablet:text-2xl laptop:text-3xl desktop:text-5xl">About</h1>
    </div>
    <div class="bg-gray-100 min-h-screen p-4">
        <div class="grid grid-cols-1 gap-10 justify-stretch justify-items-center w-11/12 desktop:w-3/4 mx-auto bg-white rounded-lg shadow-lg p-4 mt-8">
            <h1 class="text-emerald-700 text-3xl m-[50px]">Welcome to Mushy Match</h1>
            <p>There are lots of interesting mushrooms to discover all around where we live, but there are often only subtle differences between something delicious and a day
                or two of "severe gastrointestinal distress". One to two species can kill you, but it's a week before
                you start to feel symptoms.
            </p>
            <p>That's where Mushy Match comes in. Use our comprehensive search fields to filter through our mushroom database, based on what you see in front of you.
                This project was the result of a Capstone Project run through Massey University. It is designed to easily identify the different variety of mushrooms and fungi that grow in Aotearoa New Zealand.
            </p>
            <h1 class="text-emerald-700 text-2xl">Authors:</h1>
            <ul class="list-disc mb-10">
                <li>Adam Norman</li>
                <li>Emily Ferguson</li>
                <li>Joel Yap</li>
                <li>Karan Nayak</li>
                <li>Rosie Hall</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>

</style>