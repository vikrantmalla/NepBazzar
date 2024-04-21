<template>
  <input
    type="text"
    v-model="searchQuery"
    @input="handleSearchInput"
    placeholder="Search products..."
    class="w-full border border-black mb-5 rounded-md p-2"
  />
  <ul v-if="showAutocomplete" class="border border-black h-36 rounded-md mb-4 overflow-y-auto">
    <li
      v-for="suggestion in autocompleteSuggestions"
      :key="suggestion.id"
      @click="selectSuggestion(suggestion)"
      class="py-2 px-5 border-b"
    >
      {{ suggestion.title }}
    </li>
    <li v-if="autocompleteSuggestions.length === 0" class="py-2 px-5 text-gray-500 text-center">No suggestions found</li>
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
