<template>
  <div>
    <img
      :src="item.image"
      :alt="item.title"
      class="w-full h-auto mb-4 rounded-md"
    />
    <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
    <p class="text-gray-600 mb-2">${{ item.price }}</p>
    <p class="text-gray-700 mb-2">{{ item.description }}</p>
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
<script setup>
const props = defineProps(['item'])
</script>