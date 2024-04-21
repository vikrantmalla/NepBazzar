<template>
  <Search />
  <section class="flex flex-row gap-5">
    <SideBar/>
    <Item/>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Search from "./shared/Search.vue";
import SideBar from "./SideBar.vue";
import Item from "./Item.vue"

const store = useStore();
const { dispatch } = store;

onMounted(async () => {
  await dispatch("home/fetchProductData");
});
</script>
