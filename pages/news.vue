<template>
    <HeaderBar />
    <NavigationBar @search="handleSearch" @tagFilter="handleTags" @sizeFilter="handleSizeFilter"/>
    <FooterBar @openCarouselInputs="openCarouselInputs"/>
    <div>
        <h1 class="text-emerald-700 text-3xl m-[50px]">News</h1>
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