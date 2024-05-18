<template>
  <div class="flex flex-col justify-center items-center">
    <img
      :src="productDetails.image"
      :alt="productDetails.title"
      class="h-80 mb-4"
    />
    <div class="mt-5 flex flex-col justify-center items-start gap-4">
      <h1 class="font-bold">{{ productDetails.title }}</h1>
      <div class="flex justify-between items-center mb-2">
        <div class="flex items-center gap-1">
          <img src="../assets/icons/star.svg" alt="star" class="w-4" />
          <span class="text-gray-600"
            >{{ productDetails.rating?.rate }} ({{
              productDetails.rating?.count
            }}
            reviews)</span
          >
        </div>
        <div>
          <h2>{{ productDetails.category }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const { getters, dispatch } = store;

const route = useRoute();
const productId = computed(() => route.params.id);

const productDetails = computed(() => getters["home/getSingleProductData"]);
console.log(productDetails.value);
onMounted(async () => {
  await dispatch("home/fetchSingleProductData", productId.value);
});
</script>
