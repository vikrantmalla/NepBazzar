<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2 ">
    <div
      v-for="item in items"
      :key="item.id"
      class="bg-white p-4 shadow-md rounded-md"
    >
      <ItemCard :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import ItemCard from "./shared/ItemCard.vue";
import { Product } from '../types/data';

const store = useStore();
const {getters, dispatch} = store
const items = computed<Product[]>(() => getters["home/getProductData"]);

onMounted(async () => {
  await dispatch("home/fetchProductData");
});

</script>
