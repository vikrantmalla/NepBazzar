<template>
  <div>
    <h2 class="my-3">Sort by</h2>
    <select
      v-model="selectedSortOption"
      @change="sortProducts(selectedSortOption)"
      class="p-2 w-full"
    >
      <option value="default">Default</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
      <option value="rate">Rating</option>
      <option value="count">Rating Count</option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const selectedSortOption = ref('default'); 
import { useStore } from "vuex";

const store = useStore();
const { dispatch } = store;

const sortProducts = (order: string) => {
  dispatch("home/sortProducts", order);
};

watch(selectedSortOption, (newValue) => {
  sortProducts(newValue);
});
</script>
