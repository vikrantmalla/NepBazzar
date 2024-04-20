import { Product } from "./data";

declare namespace StoreType {
  interface HomeState {
    loading: boolean;
    productData: Product[];
    uniqueCategories: string[];
    selectedCategory: null | string;
    sortedProducts: Product[];
  }
}
