<template>
  <header>
    <NavBar />
  </header>
  <main class="w-[90%] m-auto">
    <ItemList />
    <CartSlider />
  </main>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import ItemList from "./components/ItemList.vue";
import CartSlider from "./components/shared/CartSlider.vue";
</script>
