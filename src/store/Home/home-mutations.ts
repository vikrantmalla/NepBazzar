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
  toggleSlider(state: StoreType.HomeState) {
    state.showSlider = !state.showSlider;
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
  addToCart(state: StoreType.HomeState, item: Product) {
    console.log(item)
    if (!state.cartItems.some(cartItem => cartItem.id === item.id)) {
      state.cartItems.push(item);
    }
  },
  removeFromCart(state: StoreType.HomeState, itemId: number) {
    console.log(itemId)
    state.cartItems = state.cartItems.filter(item => item.id !== itemId);
  }
};
