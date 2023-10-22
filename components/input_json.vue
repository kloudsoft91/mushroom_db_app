<template>
    <div class="z-10 fixed flex inset-x-0 inset-y-0 justify-center bg-gray-700/80" @click="$emit('close-loadJSONModal')">
        <div class="text-center h-4/5 w-1/2 mt-5% pt-2 bg-white dark:bg-black rounded-3xl" @click.stop>
            <h2 class="indent-5 font-semibold text-black dark:text-white text-3xl">Add your existing JSON MetaData here</h2>
            <textarea class="ml-5% my-2 border border-slate-2000 h-4/5 flex w-90%" v-model="inputJSON" />
            <button class="border border-black dark:border-white rounded-lg px-2 py-1 w-11/12" @click="addJSON(inputJSON); $emit('close-loadJSONModal')">Add</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const inputJSON = ref("")
const emit = defineEmits([
    'close-loadJSONModal'
])

const addJSON = (inputText) => {
    mushJSON.value = JSON.parse(inputText)
}
</script>