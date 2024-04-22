<template>
  <header>
    <NavBar />
  </header>
  <main class="w-[90%] m-auto">
    <ItemList />
    <div v-if="showSlider" class="fixed inset-y-0 left-0 bg-slate-600 bg-opacity-50 w-full">
      <div class="absolute inset-y-0 left-0 w-64 bg-gray-200 shadow-lg">
        <div class="p-4">
          Slider Content
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import NavBar from "./components/NavBar.vue";
import ItemList from "./components/ItemList.vue";
import { useStore } from "vuex";

const store = useStore();
const { getters } = store;

const showSlider = computed(() => getters["home/showSlider"]);
</script>
