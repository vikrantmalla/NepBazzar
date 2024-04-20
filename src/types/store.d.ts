import { Product } from "./data";

declare namespace StoreType {
  interface HomeState {
    loading: boolean;
    productData: null | Product;
  }
}
