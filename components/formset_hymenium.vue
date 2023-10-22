<template>
    <fieldset class="mb-2 border border-slate-200 px-2" id="mush_gills_fset">
        <legend>Hymenium Features</legend>
        <label for="mush_gills_desc">Gills Description</label>
        <input
            type="text"
            id="mush_gills_desc"
            class="form-input"
            v-model="hymeniumDescription"
            @change="addMushKey('gills', hymeniumDescription, 'description')" />

        <!-- <label for="mush_gills_type">Type</label>
        <input
            type="text"
            id="mush_gills_type"
            class="form-input"
            v-model="hymeniumType"
            @change="addMushKey('hymenium', hymeniumType, 'type')" /> -->

        <label for="mush_gills_colour">Gill Colour</label>
        <select
            id="mush_gills_colour"
            name="mush_gills_colour"
            class="form-input h-24"
            v-model="hymeniumColour"
            @change="addMushKey('gills', hymeniumColour, 'colour')"
            multiple>
                <option value="white">White</option>
                <option value="tan">Tan</option>
                <option value="cream">Cream</option>
                <option value="yellow">Yellow</option>
                <option value="yellowish-brown">Yellowish-Brown</option>
                <option value="yellowish-orange">Yellowish-Orange</option>
                <option value="orange">Orange</option>
                <option value="orange-brown">Orange-Brown</option>
                <option value="pale brown">Pale Brown</option>
                <option value="brown">Brown</option>
                <option value="olive-brown">Olive-Brown</option>
                <option value="dark brown">Dark Brown</option>
                <option value="pale green">Pale Green</option>
                <option value="green">Green</option>
                <option value="olive">Olive</option>
                <option value="indigo">Indigo</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
                <option value="lilac">Lilac</option>
                <option value="purple">Purple</option>
                <option value="violet">Violet</option>
                <option value="grey">Grey</option>
                <option value="black">Black</option>
        </select>

        <label for="mush_gills_attach">Gill Attachment</label>
        <select
            type="text"
            id="mush_gills_attach"
            class="form-input"
            v-model="hymeniumAttachment"
            @change="addMushKey('gills', hymeniumAttachment, 'attachment')">
            <option value="none">None</option>
            <option value="adnate">Adnate</option>
            <option value="adnexed">Adnexed</option>
            <option value="decurrent">Decurrent</option>
            <option value="emarginate">Emarginate</option>
            <option value="free">Free</option>
            <option value="seceding">Seceding</option>
            <option value="sinuate">Sinuate</option>
            <option value="subdecurrent">Subdecurrent</option>
        </select>

        <label for="mush_spore_colour">Spore Colour</label>
        <select
            id="mush_spore_colour"
            name="mush_spore_colour"
            class="form-input"
            v-model="hymeniumSporeColour"
            @change="addMushKey('gills', hymeniumSporeColour, 'spore_colour')">
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="purple brown">Purple Brown</option>
                <option value="rust brown">Rust Brown</option>
                <option value="reddish pink">Reddish-Pink</option>
        </select>
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const hymeniumDescription = ref("")
const hymeniumType = ref("")
const hymeniumColour = ref("")
const hymeniumAttachment = ref("")
const hymeniumSporeColour = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "gills", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}

watch(mushJSON, async (newMushJSON, oldMushJSON) => {
    if (mushJSON.value['gills']['description']) {
        hymeniumDescription.value = mushJSON.value['gills']['description']
    }
    if (mushJSON.value['gills']['type']) {
        hymeniumType.value = mushJSON.value['gills']['type']
    }
    if (mushJSON.value['gills']['colour']) {
        hymeniumColour.value = mushJSON.value['gills']['colour']
    }
    if (mushJSON.value['gills']['attachment']) {
        hymeniumAttachment.value = mushJSON.value['gills']['attachment']
    }
    if (mushJSON.value['gills']['spore_colour']) {
        hymeniumSporeColour.value = mushJSON.value['gills']['spore_colour']
    }
})
</script>