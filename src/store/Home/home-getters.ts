import { Product } from "../../types/data";

export const getters = {
  isLoading: (state: { loading: boolean }) => state.loading,
  getProductData: (state: { productData: Product }) => state.productData,
  uniqueCategories(state: { uniqueCategories: string[] }) {
    return state.uniqueCategories;
  },
  filteredProducts: (state: {
    selectedCategory: string;
    productData: Product[];
    sortedProducts: Product[];
  }) => {
    if (!state.selectedCategory) {
      return state.sortedProducts.length
        ? state.sortedProducts
        : state.productData;
    }
    return state.sortedProducts.length
      ? state.sortedProducts.filter(
          (product: Product) => product.category === state.selectedCategory
        )
      : state.productData.filter(
          (product: Product) => product.category === state.selectedCategory
        );
  },
};
