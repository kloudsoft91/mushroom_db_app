<template>
    <fieldset class="mb-2 border border-slate-200 px-2" id="mush_basic_info_fset">
        <legend>Basic Description / Info</legend>
        <label for="mush_latin">Latin Names*</label>
        <input
            type="text"
            id="mush_latin"
            class="form-input"
            v-model="latinNames"
            @change="addMushKey('latin_names', latinNames.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_common">Common Names*</label>
        <input
            type="text"
            id="mush_common"
            class="form-input"
            v-model="commonNames"
            @change="addMushKey('common_names', commonNames.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_maori">Maori Names*</label>
        <input
            type="text"
            id="mush_maori"
            class="form-input"
            v-model="maoriNames"
            @change="addMushKey('maori_names', maoriNames.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_genus">Genus</label>
        <input
            type="text"
            id="mush_genus"
            class="form-input"
            v-model="genus"
            @change="addMushKey('genus', genus)" />
        
        <label for="mush_desc">Description</label>
        <input
            type="text"
            id="mush_desc"
            class="form-input"
            v-model="description"
            @change="addMushKey('description', description)" />
        
        <label for="mush_lookalikes">Lookalikes*</label>
        <input
            type="text"
            id="mush_lookalikes"
            class="form-input"
            v-model="lookalikes"
            @change="addMushKey('lookalikes', lookalikes.split(',').map(Number))" />

        <label for="mush_lookalikes_desc">Lookalike Description</label>
        <input
            type="text"
            id="mush_lookalikes_desc"
            class="form-input"
            v-model="lookalikeDesc"
            @change="addMushKey('lookalikes_description', lookalikeDesc)" />
        
        <label for="mush_links">Links to Websites*</label>
        <input
            type="text"
            id="mush_links"
            class="form-input"
            v-model="links"
            @change="addMushKey('links', links.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_books">Books*</label>
        <input
            type="text"
            id="mush_books"
            class="form-input"
            v-model="books"
            @change="addMushKey('nz_books', books.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_edibility">Edibility</label>
        <input
            type="text"
            id="mush_edibility"
            class="form-input"
            v-model="edibility"
            @change="addMushKey('edibility', edibility)" />

        <label for="mush_ecology">Ecology</label>
        <select
            type="text"
            id="mush_ecology"
            class="form-input"
            v-model="ecology"
            @change="addMushKey('ecology', ecology)">
            <option value="mycorrhizal">Mycorrhizal</option>
            <option value="saprotrophic">Saprotrophic</option>
            <option value="parasitic">Parasitic</option>
        </select>

        <label for="mush_environment">Environment</label>
        <input
            type="text"
            id="mush_environment"
            class="form-input"
            v-model="environment"
            @change="addMushKey('environment', environment)" />

        <label for="mush_timeofyear">Time of Year</label>
        <select
            id="mush_timeofyear"
            name="mush_timeofyear"
            class="form-input h-32"
            v-model="timeOfYear"
            @change="addMushKey('time_of_year', timeOfYear)"
            multiple>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
        </select>

        <label for="mush_native">Native? (or Introduced)</label>
        <select
            id="mush_native"
            name="mush_native"
            class="form-input"
            v-model="native"
            @change="addMushKey('native_or_introduced', native)">
                <option value="native">Native</option>
                <option value="introduced">Introduced</option>
        </select>

        <label for="mush_photos">Photos*</label>
        <input
            type="text"
            id="mush_photos"
            class="form-input"
            v-model="photos"
            @change="addMushKey('photos', photos.split(',').map((item) => {return item.trimStart()}))" />
        
        <!-- <label for="mush_juvenile_photos">Juvenile Photos*</label>
        <input
            type="text"
            id="mush_juvenile_photos"
            class="form-input"
            v-model="juvenilePhotos"
            @change="addMushKey('juvenile_photos', juvenilePhotos.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_adult_photos">Adult Photos*</label>
        <input
            type="text"
            id="mush_adult_photos"
            class="form-input"
            v-model="adultPhotos"
            @change="addMushKey('adult_photos', adultPhotos.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_elderly_photos">Elderly Photos*</label>
        <input
            type="text"
            id="mush_elderly_photos"
            class="form-input"
            v-model="elderlyPhotos"
            @change="addMushKey('elderly_photos', elderlyPhotos.split(',').map((item) => {return item.trimStart()}))" /> -->
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const latinNames = ref("")
const commonNames = ref("")
const maoriNames = ref("")
const genus = ref("")
const description = ref("")
const lookalikes = ref("")
const lookalikeDesc = ref("")
const links = ref("")
const books = ref("")
const edibility = ref("")
const ecology = ref("")
const environment = ref("")
const timeOfYear = ref([])
const native = ref("")
const photos = ref("")
// const juvenilePhotos = ref("")
// const adultPhotos = ref("")
// const elderlyPhotos = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "gills", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}

watch(mushJSON, async (newMushJSON, oldMushJSON) => {
    if (mushJSON.value['latin_names']) {
        latinNames.value = mushJSON.value['latin_names'].join(', ')
    }
    if (mushJSON.value['common_names']) {
        commonNames.value = mushJSON.value['common_names'].join(', ')
    }
    if (mushJSON.value['maori_names']) {
        maoriNames.value = mushJSON.value['maori_names'].join(', ')
    }
    if (mushJSON.value['genus']) {
        genus.value = mushJSON.value['genus']
    }
    if (mushJSON.value['description']) {
        description.value = mushJSON.value['description']
    }
    if (mushJSON.value['lookalikes']) {
        lookalikes.value = mushJSON.value['lookalikes'].join(', ')
    }
    if (mushJSON.value['lookalikes_description']) {
        lookalikeDesc.value = mushJSON.value['lookalikes_description']
    }
    if (mushJSON.value['links']) {
        links.value = mushJSON.value['links'].join(', ')
    }
    if (mushJSON.value['nz_books']) {
        books.value = mushJSON.value['nz_books'].join(', ')
    }
    if (mushJSON.value['edibility']) {
        edibility.value = mushJSON.value['edibility']
    }
    if (mushJSON.value['ecology']) {
        ecology.value = mushJSON.value['ecology']
    }
    if (mushJSON.value['environment']) {
        environment.value = mushJSON.value['environment']
    }
    if (mushJSON.value['time_of_year']) {
        timeOfYear.value = mushJSON.value['time_of_year']
    }
    if (mushJSON.value['native_or_introduced']) {
        native.value = mushJSON.value['native_or_introduced']
        /* if (mushJSON.value['native_or_introduced'] == true) {
            native.value ="Native"
        } else {
            native.value = "Introduced"
        } */
    }
    if (mushJSON.value['photos']) {
        photos.value = mushJSON.value['photos'].join(', ')
    }
    // if (mushJSON.value['juvenile_photos']) {
    //     juvenilePhotos.value = mushJSON.value['juvenile_photos'].join(', ')
    // }
    // if (mushJSON.value['adult_photos']) {
    //     adultPhotos.value = mushJSON.value['adult_photos'].join(', ')
    // }
    // if (mushJSON.value['elderly_photos']) {
    //     elderlyPhotos.value = mushJSON.value['elderly_photos'].join(', ')
    // }
})
</script>