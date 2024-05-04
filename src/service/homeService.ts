import { FETCH_CATEGORIES, FETCH_PRODUCTS } from "./endpoints";

export function useProductFetch() {
  const fetchProduct = async () => {
      const response = await fetch(FETCH_PRODUCTS);
      return response; 
  };

  const fetchProductCategories =  async () => {
    const response = await fetch(FETCH_CATEGORIES)
    return response;
  }

  return {
    fetchProduct,
    fetchProductCategories
  };
}
