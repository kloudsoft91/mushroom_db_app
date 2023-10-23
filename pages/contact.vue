<template>
    <HeaderBar />
    <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter"/>
    <FooterBar @openCarouselInputs="openCarouselInputs"/>
    <div>
        <h1 class="text-emerald-700 text-3xl m-[50px]">Contact us</h1>
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Mushy Match: Contact',
  description: 'This is our contact page.',
})
</script>

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