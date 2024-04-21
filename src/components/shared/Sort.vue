<template>
  <div>
    <h2>Sort by</h2>
    <button @click="sortBy('lowToHigh')">Price - (Low to High)</button>
    <button @click="sortBy('highToLow')">Price - (High to Low)</button>
    <button @click="sortBy('rate')">Populare - (Low to High)</button>
    <button @click="sortBy('count')">Review - (High to Low)</button>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const { dispatch } = store;

const sortBy = (order: string) => {
  dispatch("home/sortProducts", order);
};
</script>
