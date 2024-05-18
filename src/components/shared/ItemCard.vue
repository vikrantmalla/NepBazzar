<template>
  <div>
    <RouterLink :to="`/product/${productId}`">
      <img :src="item.image" :alt="item.title" class="h-40 mb-4 rounded-md" />
      <h3 class="text-lg font-semibold mb-2">{{ shortHeading }}...</h3>
      <div class="flex justify-between">
        <p class="text-gray-600 mb-2">${{ item.price }}</p>
        <p class="text-gray-500 mb-2">{{ item.category }}</p>
      </div>
      <p class="text-gray-700 mb-2">{{ shortDescription }}...</p>
      <div class="flex items-center gap-1 mb-2">
        <img src="../../assets/icons/star.svg" alt="star" class="w-4" />
        <span class="text-gray-600"
          >{{ item.rating?.rate }} ({{ item.rating?.count }} reviews)</span
        >
      </div>
    </RouterLink>
    <button
      v-if="!isInCart(item.id)"
      @click="addToCart(item)"
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Add to Cart
    </button>
    <button
      v-else
      @click="removeFromCart(item.id)"
      class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
    >
      Remove from Cart
    </button>
  </div>
</template>
<script setup lang="ts">
import { Product } from "../../types/data";
import { useStore } from "vuex";

const props = defineProps<{
  item: Product;
}>();
const store = useStore();
const { dispatch } = store;

const addToCart = (item: Product) => {
  dispatch("home/addToCart", item);
};

const removeFromCart = (itemId: number) => {
  dispatch("home/removeFromCart", itemId);
};

const isInCart = (itemId: number) => {
  return store.state.home.cartItems.some(
    (item: { id: number }) => item.id === itemId
  );
};

const { item } = props;
const shortHeading = item.title.slice(0, 50);
const shortDescription = item.description.slice(0, 100);
const productId = item.id.toString();
</script>
