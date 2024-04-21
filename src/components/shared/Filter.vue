<template>
  <div>
    <div>
      <h2>Filter By</h2>
      <button @click="clearSelectedCategory">Clear</button>
    </div>
    <button
      v-for="category in uniqueCategories"
      :key="category"
      @click="handleCategoryClick(category)"
      class="px-4 py-2 rounded-md border mr-2 mb-2 hover:bg-blue-600 focus:outline-none"
    >
      {{ category }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { getters, dispatch } = store;

// List an category
const uniqueCategories = computed<string[]>(
  () => getters["home/uniqueCategories"]
);

// Send a category based on clicked.
const handleCategoryClick = (category: string) => {
  dispatch("home/selectCategory", category);
};

// Remove a category that has been clicked.
const clearSelectedCategory = () => {
  dispatch("home/clearSelectedCategory");
};
</script>
