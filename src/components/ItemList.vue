<template>
  <Search />
  <section :class="{ 'flex': !loading, 'block': loading }" class="flex-row gap-5">
    <SideBar/>
    <Item/>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Search from "./shared/Search.vue";
import SideBar from "./SideBar.vue";
import Item from "./Item.vue"

const store = useStore();
const { getters } = store;
const loading = computed(() => getters["home/isLoading"]);
</script>
