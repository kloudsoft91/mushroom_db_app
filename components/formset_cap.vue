<template>
    <fieldset class="mb-2 border border-slate-200 px-2" id="mush_cap_fset">
        <legend>Cap Features</legend>
        <label for="mush_cap_desc">Cap Description</label>
        <input
            type="text"
            id="mush_cap_desc"
            class="form-input"
            v-model="capDescription"
            @change="addMushKey('cap_features', capDescription, 'description')" />

        <label for="mush_cap_colour">Cap Colour</label>
        <select
            id="mush_cap_colour"
            name="mush_cap_colour"
            class="form-input h-24"
            v-model="capColour"
            @change="addMushKey('cap_features', capColour, 'colour')"
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

        <label for="mush_cap_diameter_min">Min Diameter (cm)</label>
        <input
            type="text"
            id="mush_cap_diameter_min"
            class="form-input"
            v-model="capDiaMin"
            @change="addMushKey('cap_features', parseFloat(capDiaMin), 'diameter_min')" />

        <label for="mush_cap_diameter_max">Max Diameter (cm)</label>
        <input
            type="text"
            id="mush_cap_diameter_max"
            class="form-input"
            v-model="capDiaMax"
            @change="addMushKey('cap_features', parseFloat(capDiaMax), 'diameter_max')" />

        <label for="mush_cap_thickness_min">Min Thickness (cm)</label>
        <input
            type="text"
            id="mush_cap_thickness_min"
            class="form-input"
            v-model="capThcMin"
            @change="addMushKey('cap_features', parseFloat(capThcMin), 'thickness_min')" />

        <label for="mush_cap_thickness_max">Max Thickness (cm)</label>
        <input
            type="text"
            id="mush_cap_thickness_max"
            class="form-input"
            v-model="capThcMax"
            @change="addMushKey('cap_features', parseFloat(capThcMax), 'thickness_max')" />

        <label for="mush_cap_texture">Texture</label>
        <input
            type="text"
            id="mush_cap_texture"
            class="form-input"
            v-model="capTexture"
            @change="addMushKey('cap_features', capTexture, 'texture')" />

        <label for="mush_cap_shape">Shape</label>
        <select
            type="text"
            id="mush_cap_shape"
            class="form-input h-16"
            v-model="capShape"
            @change="addMushKey('cap_features', capShape, 'shape')"
            multiple>
                <option value="umbonate">Umbonate</option>
                <option value="campanulate">Campanulate</option>
                <option value="conical">Conical</option>
                <option value="convex">Convex</option>
                <option value="depressed">Depressed</option>
                <option value="flat">Flat</option>
                <option value="infundibuliform">Infundibuliform</option>
                <option value="offset">Offset</option>
                <option value="ovate">Ovate</option>
                <option value="umbillicate">Umbillicate</option>
                <option value="irregular">Irregular</option>
        </select>
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const capDescription = ref("")
const capColour = ref("")
const capDiaMin = ref()
const capDiaMax = ref()
const capThcMin = ref()
const capThcMax = ref()
const capTexture = ref("")
const capShape = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "gills", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}

watch(mushJSON, async (newMushJSON, oldMushJSON) => {
    if (mushJSON.value['cap_features']['description']) {
        capDescription.value = mushJSON.value['cap_features']['description']
    }
    if (mushJSON.value['cap_features']['colour']) {
        capColour.value = mushJSON.value['cap_features']['colour']
    }
    if (mushJSON.value['cap_features']['diameter_min']) {
        capDiaMin.value = mushJSON.value['cap_features']['diameter_min']
    }
    if (mushJSON.value['cap_features']['diameter_max']) {
        capDiaMax.value = mushJSON.value['cap_features']['diameter_max']
    }
    if (mushJSON.value['cap_features']['thickness_min']) {
        capThcMin.value = mushJSON.value['cap_features']['thickness_min']
    }
    if (mushJSON.value['cap_features']['thickness_max']) {
        capThcMax.value = mushJSON.value['cap_features']['thickness_max']
    }
    if (mushJSON.value['cap_features']['texture']) {
        capTexture.value = mushJSON.value['cap_features']['texture']
    }
    if (mushJSON.value['cap_features']['shape']) {
        capShape.value = mushJSON.value['cap_features']['shape']
    }
})
</script>