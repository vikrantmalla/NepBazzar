<template>
  <div
    className="mb-5 flex justify-between items-center px-8 py-4 bg-orange-400"
  >
    <h1 className="text-base font-medium text-white">NepBazzer</h1>
    <div class="relative">
      <span
        class="absolute top-[-8px] right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
        >{{ cartNumber }}</span
      >
      <img
        @click="toggleSlider"
        src="../assets/icons/icon-cart.svg"
        alt="cart"
        class="w-9"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const { getters, dispatch } = store;

const toggleSlider = () => {
  dispatch("home/toggleSlider");
};
const cartNumber = computed(() => getters["home/cartItemsCount"]);
</script>
