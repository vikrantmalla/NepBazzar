import { Product } from "../../types/data";

export const getters = {
  isLoading: (state: { loading: boolean }) => state.loading,
  getProductData: (state: { productData: Product }) => state.productData,
  getSingleProductData: (state: { singleProductData: Product }) =>
    state.singleProductData,
  uniqueCategories(state: { uniqueCategories: string[] }) {
    return state.uniqueCategories;
  },
  showSlider(state: { showSlider: boolean }) {
    return state.showSlider;
  },
  filteredProducts: (state: {
    selectedCategory: string;
    productData: Product[];
    sortedProducts: Product[];
    autocompleteSuggestions: Product[];
    searchQuery: string;
  }) => {
    let filteredItems: Product[] = [];
    if (!state.selectedCategory) {
      filteredItems = state.sortedProducts.length
        ? state.sortedProducts
        : state.productData;
    } else {
      filteredItems = state.sortedProducts.length
        ? state.sortedProducts.filter(
            (product: Product) => product.category === state.selectedCategory
          )
        : state.productData.filter(
            (product: Product) => product.category === state.selectedCategory
          );
    }

    if (state.autocompleteSuggestions.length && state.searchQuery) {
      filteredItems = state.autocompleteSuggestions.filter(
        (suggestion: Product) =>
          suggestion.title
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase())
      );
    }
    return filteredItems;
  },
  autocompleteSuggestions(state: { autocompleteSuggestions: Product[] }) {
    return state.autocompleteSuggestions;
  },
  cartItemsCount(state: { cartItems: Product[] }) {
    return state.cartItems.length;
  },
  cartItems(state: { cartItems: Product[] }) {
    return state.cartItems;
  },
  totalPrice(state: { cartTotalPrice: number }) {
    return state.cartTotalPrice;
  },
  noOfItems(state: { noOfItems: number }) {
    return state.noOfItems;
  },
};
