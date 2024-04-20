<template>
  <div>
    <img :src="item.image" :alt="item.title" class="h-40 mb-4 rounded-md" />
    <h3 class="text-lg font-semibold mb-2">{{ shortHeading }}...</h3>
    <p class="text-gray-600 mb-2">${{ item.price }}</p>
    <p class="text-gray-700 mb-2">{{ shortDescription }}...</p>
    <p class="text-gray-500 mb-2">{{ item.category }}</p>
    <div class="flex items-center mb-2">
      <span class="text-gray-600"
        >{{ item.rating.rate }} ({{ item.rating.count }} reviews)</span
      >
    </div>
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { Product } from "../../types/data";
const props = defineProps<{
  item: Product;
}>();
const { item } = props;
const shortHeading = item.title.slice(0, 50);
const shortDescription = item.description.slice(0, 100);
</script>