import { StoreType } from "../../types/store";
import { Product } from "../../types/data";

export const mutations = {
  setLoading(state: StoreType.HomeState, value: boolean) {
    state.loading = value;
  },
  setProductData(state: StoreType.HomeState, data: Product) {
    state.productData = data;
  },
};
