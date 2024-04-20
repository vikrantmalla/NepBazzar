import { FETCH_PRODUCTS } from "./endpoints";

export function useProductFetch() {
  const fetchProduct = async () => {
      const response = await fetch(FETCH_PRODUCTS);
      return response; 
  };

  return {
    fetchProduct,
  };
}
