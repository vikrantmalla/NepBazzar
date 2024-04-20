<template>
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
      <template v-else>
        <div
          v-for="item in filterItems"
          :key="item.id"
          class="bg-white p-4 shadow-md rounded-md"
        >
          <ItemCard :item="item" />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Product } from "../types/data";
import SkeletonCard from "./shared/SkeletonCard.vue";
import ItemCard from "./shared/ItemCard.vue";

const store = useStore();
const { getters, dispatch } = store;
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

const sortBy = (order: any) => {
  console.log(order);
  store.dispatch("home/sortProducts", order);
};

const filterItems = computed<Product[]>(() => getters["home/filteredProducts"]);
onMounted(async () => {
  await dispatch("home/fetchProductData");
});
</script>
