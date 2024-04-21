<template>
   <div v-if="!loading" class="hidden md:block w-[50%] h-96 border border-black rounded-xl p-3">
    <Filter />
    <Sort />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Filter from "./shared/Filter.vue";
import Sort from "./shared/Sort.vue";

const store = useStore();
const { getters } = store;
const loading = computed(() => getters["home/isLoading"]);
</script>
