import { Product } from "../../types/data";

export const getters = {
  isLoading: (state: { loading: boolean }) => state.loading,
  getProductData: (state: { productData: Product }) => state.productData,
  uniqueCategories(state: {uniqueCategories: string[]}) {
    return state.uniqueCategories;
  },
  filteredProducts: (state: {
    selectedCategory: string;
    productData: Product[];
  }) => {
    if (!state.selectedCategory) {
      return state.productData; // Return all products if no category is selected
    }
    return state.productData.filter(
      product => product.category === state.selectedCategory
    );
  },
};
