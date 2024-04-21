<template>
  <input
    type="text"
    v-model="searchQuery"
    @input="handleSearchInput"
    placeholder="Search products..."
  />
  <ul v-if="showAutocomplete">
    <li
      v-for="suggestion in autocompleteSuggestions"
      :key="suggestion.id"
      @click="selectSuggestion(suggestion)"
    >
      {{ suggestion.title }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
const searchQuery = ref("");
const showAutocomplete = ref(false);

const store = useStore();
const { getters } = store;

const autocompleteSuggestions = computed(
  () => getters["home/autocompleteSuggestions"]
);

const handleSearchInput = () => {
  if (searchQuery.value.length > 0) {
    showAutocomplete.value = true;
    store.dispatch("home/searchProducts", searchQuery.value);
    store.dispatch("home/setSearchQuery", searchQuery.value);
  } else {
    showAutocomplete.value = false;
  }
};

// list a suggestion list based on search query
const selectSuggestion = (suggestion: { title: string }) => {
  searchQuery.value = suggestion.title;
  showAutocomplete.value = false;
};
</script>
