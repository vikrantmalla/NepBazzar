<template>
  <header>
    <NavBar />
  </header>
  <main class="w-[90%] m-auto">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>
