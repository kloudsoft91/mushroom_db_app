<template>
  <div class="mushroom-card" @click="navigateToDetail">
    <img :src="mushroom.imageUrl" alt="Mushroom" class="mushroom-image" />
    <div class="mushroom-info">
      <h3 class="mushroom-name">{{ mushroom.commonName }}</h3>
      <p class="latin-name">{{ mushroom.latinName }}</p>
      <!--Just changed this to common_names to test the correct results are displaying-->
      <div class="edibility-tag">{{ mushroom.common_names }}</div>
    </div>
  </div>
</template>

<!-- old script-->
<!--<script>
export default {
  name: 'MushroomCard',
  props: {
    mushroom: Object
  },
  methods: {
    navigateToDetail() {
      this.$router.push({ name: 'mushroom-detail' });
    }
  }
};
</script>-->

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  mushroom: Object
});

const router = useRouter();

const navigateToDetail = () => {
  router.push({ name: 'mushroom-detail' });
};
</script>

<style scoped>
.mushroom-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  cursor: pointer;
  transition: box-shadow 0.3s;
  max-width: 300px;
}

.mushroom-card:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.mushroom-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
}

.mushroom-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mushroom-name {
  font-size: 18px;
  margin: 0;
}

.latin-name {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.edibility-tag {
  font-size: 14px;
  background-color: #10fa08;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-end;
}
</style>

<!-- please leave this here for now, I'm still working on it-->

<!--<template>
    <div class="mushroom-card" @click="navigateToDetail">
      <img :src="mushroom.imageUrl" alt="Mushroom" class="mushroom-image" />
      <div class="mushroom-info">
        <h3 class="mushroom-name">{{ mushroom.commonName }}</h3>
        <p class="latin-name">{{ mushroom.latinName }}</p>
        <div class="edibility-tag">{{ mushroom.edibility }}</div>
      </div>
    </div>
  </template> 
  
  <script>
  export default {
    name: 'MushroomCard',
    props: {
      mushroom: Object // data passed from parent
    },
    methods: {
      navigateToDetail() {
        // someth like:
        //this.$router.push({ name: 'mushroom-detail', params: { id: this.mushroom.id } });
      }
    }
  };
  </script>-->