<template>
  <ItemList />
  <div
    v-if="showSlider"
    class="fixed inset-y-0 left-0 bg-slate-600 bg-opacity-50 w-full"
  >
    <div class="absolute inset-y-0 left-0 w-64 bg-gray-200 shadow-lg">
     <CartSlider/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import ItemList from "../components/ItemList.vue";
import { useStore } from "vuex";
import CartSlider from "../components/shared/CartSlider.vue";

const store = useStore();
const { getters, dispatch } = store;

const showSlider = computed(() => getters["home/showSlider"]);
onMounted(async () => {
  await dispatch("home/fetchProductData");
  await dispatch("home/fetchCategoriesList");
});
</script>
