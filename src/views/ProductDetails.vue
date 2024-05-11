<template>
    <h1>{{ productDetails.title }}</h1>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

const store = useStore();
const { getters, dispatch } = store;

const route = useRoute();
const productId = computed(() => route.params.id);

const productDetails = computed(() => getters["home/getSingleProductData"]);
onMounted(async () => {
  await dispatch("home/fetchSingleProductData", productId.value);
});
</script>