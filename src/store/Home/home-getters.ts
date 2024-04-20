import { Product } from "../../types/data";

export const getters = {
  isLoading: (state: { loading: boolean }) => state.loading,
  getProductData: (state: { productData: Product }) => state.productData,
};
