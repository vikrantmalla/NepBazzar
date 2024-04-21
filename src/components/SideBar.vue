<template>
  <div class="hidden md:block w-[50%] h-96 border border-blue-500 rounded-xl">
    <Filter />
    <Sort />
  </div>
</template>
<script setup lang="ts">
import Filter from "./shared/Filter.vue";
import Sort from "./shared/Sort.vue";
</script>
