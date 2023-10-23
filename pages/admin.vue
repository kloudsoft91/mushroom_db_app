
<template>
    <adminNavbar />
    <!-- Main content -->
    <div class="ml-5% py-2">
        <!-- Modal for adding existing JSON to edit -->
        <button class="border border-black dark:border-white rounded-lg px-2 py-1 w-11/12 " @click="showLoadJSONModal = !showLoadJSONModal">Click here if you want to edit an existing Mushroom</button>
        <input_json v-show="showLoadJSONModal" @close-loadJSONModal="showLoadJSONModal = false" />
    </div>
    <div class="pl-4 pr-4 flex">
        <!-- Form and JSON render components -->
        <json_builder />
        <json_render />
    </div>
</template>

<script>
import input_json from '~/components/input_json.vue'

export default {
    components: { input_json },
    data() {
        return {
            showLoadJSONModal: false,
        }
    },
}
</script>