import { StoreType } from "../../types/store";
import { Product } from "../../types/data";

export const mutations = {
  setLoading(state: StoreType.HomeState, value: boolean) {
    state.loading = value;
  },
  setProductData(state: StoreType.HomeState, data: Product[]) {
    state.productData = data;
  },
  setUniqueCategories(state: StoreType.HomeState, categories: string[]) {
    state.uniqueCategories = categories;
  },
  setSelectedCategory(state: StoreType.HomeState, category: string | null) {
    state.selectedCategory = category;
  },
  clearSelectedCategory(state: StoreType.HomeState) {
    state.selectedCategory = null;
  },
  setSortedProducts(state: StoreType.HomeState, sortedProducts: Product[]) {
    state.sortedProducts = sortedProducts;
  },
  setAutocompleteSuggestions(state: StoreType.HomeState, suggestions: Product[]) {
    state.autocompleteSuggestions = suggestions;
  },
  setSearchQuery(state: StoreType.HomeState, query: string) {
    state.searchQuery = query;
  },
};
