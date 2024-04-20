<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2">
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
        v-for="item in items"
        :key="item.id"
        class="bg-white p-4 shadow-md rounded-md"
      >
        <ItemCard :item="item" />
      </div>
    </template>
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

onMounted(async () => {
  await dispatch("home/fetchProductData");
});
</script>
