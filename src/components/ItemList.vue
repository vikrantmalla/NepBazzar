<template>
  <input
    type="text"
    v-model="searchQuery"
    @input="handleSearchInput"
    placeholder="Search products..."
  />
  <ul v-if="showAutocomplete">
    <li
      v-for="suggestion in autocompleteSuggestions"
      :key="suggestion.id"
      @click="selectSuggestion(suggestion)"
    >
      {{ suggestion.title }}
    </li>
  </ul>
  <section class="flex flex-row gap-5">
    <div class="hidden md:block w-[50%] h-96 border border-blue-500 rounded-xl">
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
      <div>
        <h2>Sort by</h2>
        <button @click="sortBy('lowToHigh')">Price - (Low to High)</button>
        <button @click="sortBy('highToLow')">Price - (High to Low)</button>
        <button @click="sortBy('rate')">Populare - (Low to High)</button>
        <button @click="sortBy('count')">Review - (High to Low)</button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2">
      <template v-if="loading">
        <!-- Skeleton Loading Component -->
        <div
          v-for="index in items?.length"
          :key="index"
          class="bg-white p-4 border border-gray-500 rounded-md animate-pulse"
        >
          <SkeletonCard />
        </div>
      </template>
      <!-- Show item cards if loading is false -->
      <template v-else-if="filteredProducts.length > 0">
        <div
          v-for="item in filteredProducts"
          :key="item.id"
          class="bg-white p-4 shadow-md rounded-md"
        >
          <ItemCard :item="item" />
        </div>
      </template>
      <template v-else>
        <p class="text-red-500">No products found</p>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Product } from "../types/data";
import SkeletonCard from "./shared/SkeletonCard.vue";
import ItemCard from "./shared/ItemCard.vue";

const store = useStore();
const { getters, dispatch } = store;
const searchQuery = ref("");
const showAutocomplete = ref(false);

const loading = computed(() => getters["home/isLoading"]);
const items = computed<Product[]>(() => getters["home/getProductData"]);

const uniqueCategories = computed<string[]>(
  () => getters["home/uniqueCategories"]
);

const handleCategoryClick = (category: string) => {
  dispatch("home/selectCategory", category);
};

const clearSelectedCategory = () => {
  dispatch("home/clearSelectedCategory");
};

const sortBy = (order: string) => {
  store.dispatch("home/sortProducts", order);
};

const filteredProducts = computed<Product[]>(() => getters["home/filteredProducts"]);

/* TODO: refactor required */
const autocompleteSuggestions = computed(
  () => getters["home/autocompleteSuggestions"]
);

const handleSearchInput = () => {
  if (searchQuery.value.length > 0) {
    showAutocomplete.value = true;
    store.dispatch("home/searchProducts", searchQuery.value);
    store.dispatch("home/setSearchQuery", searchQuery.value);
  } else {
    showAutocomplete.value = false;
  }
};

const selectSuggestion = (suggestion: { title: string }) => {
  searchQuery.value = suggestion.title;
  showAutocomplete.value = false;
};
/* TODO: refactor required */

onMounted(async () => {
  await dispatch("home/fetchProductData");
});
</script>
