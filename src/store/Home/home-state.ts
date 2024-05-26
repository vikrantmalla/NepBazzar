import { StoreType } from "../../types/store";

export const state: StoreType.HomeState = {
  loading: false,
  productData: [],
  singleProductData: [],
  uniqueCategories: [],
  showSlider: false,
  selectedCategory: null,
  sortedProducts: [],
  autocompleteSuggestions: [],
  searchQuery: '',
  cartItems: [],
  cartTotalPrice: 0,
  quantityLimitReached: false
};
