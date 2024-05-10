import { FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_SINGLE_PRODUCTS } from "./endpoints";

export function useProductFetch() {
  const fetchProduct = async () => {
    const response = await fetch(FETCH_PRODUCTS);
    return response;
  };

  const fetchSingleProduct = async (id: number) => {
    const response = await fetch(`FETCH_SINGLE_PRODUCTS/${id}`);
    return response;
  };

  const fetchProductCategories = async () => {
    const response = await fetch(FETCH_CATEGORIES);
    return response;
  };

  return {
    fetchProduct,
    fetchSingleProduct,
    fetchProductCategories,
  };
}
