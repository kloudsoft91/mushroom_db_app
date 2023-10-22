<template>
    <fieldset class="mb-2 border border-slate-200 px-2" id="mush_stipe_fset">
        <legend>Stipe Features</legend>
        <label for="mush_stipe_desc">Stipe Description</label>
        <input
            type="text"
            id="mush_stipe_desc"
            class="form-input"
            v-model="stipeDescription"
            @change="addMushKey('stipe_features', stipeDescription, 'description')" />

        <label for="mush_stipe_diameter_min">Min Diameter (cm)</label>
        <input
            type="text"
            id="mush_stipe_diameter_min"
            class="form-input"
            v-model="stipeDiaMin"
            @change="addMushKey('stipe_features', parseFloat(stipeDiaMin), 'diameter_min')" />

        <label for="mush_stipe_diameter_max">Max Diameter (cm)</label>
        <input
            type="text"
            id="mush_stipe_diameter_max"
            class="form-input"
            v-model="stipeDiaMax"
            @change="addMushKey('stipe_features', parseFloat(stipeDiaMax), 'diameter_max')" />

        <label for="mush_stipe_colour">Stipe Colour</label>
        <select
            id="mush_stipe_colour"
            name="mush_stipe_colour"
            class="form-input h-24"
            v-model="stipeColour"
            @change="addMushKey('stipe_features', stipeColour, 'colour')"
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

        <label for="mush_stipe_length_min">Min Length (cm)</label>
        <input
            type="text"
            id="mush_stipe_length_min"
            class="form-input"
            v-model="stipeLenMin"
            @change="addMushKey('stipe_features', parseFloat(stipeLenMin), 'length_min')" />

        <label for="mush_stipe_length_max">Max Length (cm)</label>
        <input
            type="text"
            id="mush_stipe_length_max"
            class="form-input"
            v-model="stipeLenMax"
            @change="addMushKey('stipe_features', parseFloat(stipeLenMax), 'length_max')" />

        <!-- <label for="mush_stipe_height_min">Min Height (mm)</label>
        <input
            type="text"
            id="mush_stipe_height_min"
            class="form-input"
            v-model="stipeHgtMin"
            @change="addMushKey('stipe_features', parseFloat(stipeHgtMin), 'height_min')" />

        <label for="mush_stipe_height_max">Max Height (mm)</label>
        <input
            type="text"
            id="mush_stipe_height_max"
            class="form-input"
            v-model="stipeHgtMax"
            @change="addMushKey('stipe_features', parseFloat(stipeHgtMax), 'height_max')" /> -->

        <label for="mush_stipe_bruise_colour">Bruising Colour</label>
        <select
            id="mush_stipe_bruise_colour"
            name="mush_stipe_bruise_colour"
            class="form-input"
            v-model="stipeBruiseColour"
            @change="addMushKey('stipe_features', stipeBruiseColour, 'bruising_colour')">
                <option value="na">N/A - No bruising</option>
                <option value="blueish">Blueish</option>
        </select>

        <label for="mush_stipe_attachment">Type</label>
        <select
            type="text"
            id="mush_stipe_attachment"
            class="form-input"
            v-model="stipeattachment"
            @change="addMushKey('stipe_features', stipeattachment, 'type')">
            <option value="bare">Bare</option>
            <option value="ring">Ring</option>
            <option value="volva">Volva</option>
            <option value="ring volva">Both</option>
        </select>
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const stipeDescription = ref("")
const stipeDiaMin = ref()
const stipeDiaMax = ref()
const stipeColour = ref("")
const stipeLenMin = ref()
const stipeLenMax = ref()
const stipeHgtMin = ref()
const stipeHgtMax = ref()
const stipeBruiseColour = ref("")
const stipeattachment = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "gills", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}

watch(mushJSON, async (newMushJSON, oldMushJSON) => {
    if (mushJSON.value['stipe_features']['description']) {
        stipeDescription.value = mushJSON.value['stipe_features']['description']
    }
    if (mushJSON.value['stipe_features']['diameter_min']) {
        stipeDiaMin.value = mushJSON.value['stipe_features']['diameter_min']
    }
    if (mushJSON.value['stipe_features']['diameter_max']) {
        stipeDiaMax.value = mushJSON.value['stipe_features']['diameter_max']
    }
    if (mushJSON.value['stipe_features']['colour']) {
        stipeColour.value = mushJSON.value['stipe_features']['colour']
    }
    if (mushJSON.value['stipe_features']['length_min']) {
        stipeLenMin.value = mushJSON.value['stipe_features']['length_min']
    }
    if (mushJSON.value['stipe_features']['length_max']) {
        stipeLenMax.value = mushJSON.value['stipe_features']['length_max']
    }
    if (mushJSON.value['stipe_features']['height_min']) {
        stipeHgtMin.value = mushJSON.value['stipe_features']['height_min']
    }
    if (mushJSON.value['stipe_features']['height_max']) {
        stipeHgtMax.value = mushJSON.value['stipe_features']['height_max']
    }
    if (mushJSON.value['stipe_features']['bruising_colour']) {
        stipeBruiseColour.value = mushJSON.value['stipe_features']['bruising_colour']
    }
    if (mushJSON.value['stipe_features']['type']) {
        stipeattachment.value = mushJSON.value['stipe_features']['type']
    }
})
</script>