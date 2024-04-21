<template>
  <div>
    <div class="flex justify-between items-center mb-3">
      <h2>Filter By</h2>
      <button @click="clearSelectedCategory">Clear</button>
    </div>
    <button
      v-for="category in uniqueCategories"
      :key="category"
      @click="handleCategoryClick(category)"
      :class="{ 'bg-blue-500 text-white': selectedCategory === category }"
      class="px-4 py-2 rounded-md border mr-2 mb-2 hover:bg-blue-600 focus:outline-none"
    >
      {{ category }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { getters, dispatch } = store;
const selectedCategory = ref("")
// List an category
const uniqueCategories = computed<string[]>(
  () => getters["home/uniqueCategories"]
);

// Send a category based on clicked.
const handleCategoryClick = (category: string) => {
  selectedCategory.value = category;
  dispatch("home/selectCategory", category);
};

// Remove a category that has been clicked.
const clearSelectedCategory = () => {
  selectedCategory.value = ""
  dispatch("home/clearSelectedCategory");
};
</script>
