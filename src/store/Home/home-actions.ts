import type { ActionContext } from "vuex/types/index.js";
import { useProductFetch } from "../../service/homeService";
import { Message } from "../../types/enum";
import { StoreType } from "../../types/store";

const { fetchProduct } = useProductFetch();

export const actions = {
  async fetchProductData({
    commit,
  }: ActionContext<StoreType.HomeState, StoreType.HomeState>) {
    commit("setLoading", true);

    try {
      const response = await fetchProduct();
      if (!response.ok) {
        throw new Error(Message.BAD_NETWORK);
      }
      const data = await response.json();
      commit("setProductData", data);

      setTimeout(() => {
        commit("setLoading", false);
      }, 2000);
    } catch (error) {
      console.error(Message.FETCH_ERROR, error);
      commit("setLoading", false);
    }
  },
};
