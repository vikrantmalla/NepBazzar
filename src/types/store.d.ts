import { Product } from "./data";

declare namespace StoreType {
  interface HomeState {
    loading: boolean;
    productData: Product[];
    singleProductData: Product[];
    uniqueCategories: string[];
    showSlider: boolean;
    selectedCategory: null | string;
    sortedProducts: Product[];
    autocompleteSuggestions: Product[];
    searchQuery: string;
    cartItems: Product[];
    cartTotalPrice: number;
  }
}
