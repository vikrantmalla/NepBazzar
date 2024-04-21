<template>
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
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import SkeletonCard from "./shared/SkeletonCard.vue";
import ItemCard from "./shared/ItemCard.vue";
import { Product } from "../types/data";

const store = useStore();
const { getters } = store;

const loading = computed(() => getters["home/isLoading"]);
const items = computed<Product[]>(() => getters["home/getProductData"]);

const filteredProducts = computed<Product[]>(
  () => getters["home/filteredProducts"]
);
</script>
