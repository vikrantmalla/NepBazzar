import { StoreType } from "../../types/store";

export const state: StoreType.HomeState = {
  loading: false,
  productData: [],
  uniqueCategories: [],
  showSlider: false,
  selectedCategory: null,
  sortedProducts: [],
  autocompleteSuggestions: [],
  searchQuery: '',
  cartItems: []
};
