const apiBaseURL = import.meta.env.VITE_VUE_APP_API_ENDPOINT

export const FETCH_PRODUCTS = `${apiBaseURL}/products`
export const FETCH_SINGLE_PRODUCTS = (id: number) => `${apiBaseURL}/products/${id}`;
export const FETCH_CATEGORIES = `${apiBaseURL}/products/categories`