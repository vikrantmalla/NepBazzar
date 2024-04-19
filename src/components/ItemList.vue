<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2">
    <div
      v-for="item in items"
      :key="item.id"
      class="bg-white p-4 shadow-md rounded-md"
    >
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
  </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
]);
</script>
