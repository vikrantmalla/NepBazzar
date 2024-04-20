import type { ActionContext } from "vuex/types/index.js";
import { useProductFetch } from "../../service/homeService";
import { Message } from "../../types/enum";
import { StoreType } from "../../types/store";
import { Product } from "../../types/data";

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
      const categories = Array.from(
        new Set(data.map((product: { category: string }) => product.category))
      );
      commit("setUniqueCategories", categories);

      setTimeout(() => {
        commit("setLoading", false);
      }, 2000);
    } catch (error) {
      console.error(Message.FETCH_ERROR, error);
      commit("setLoading", false);
    }
  },
  selectCategory(
    { commit }: ActionContext<StoreType.HomeState, StoreType.HomeState>,
    category: string
  ) {
    commit("setSelectedCategory", category);
  },
  clearSelectedCategory({
    commit,
  }: ActionContext<StoreType.HomeState, StoreType.HomeState>) {
    commit("clearSelectedCategory");
  },
  sortProducts(
    { commit, state }: ActionContext<StoreType.HomeState, StoreType.HomeState>,
    sortBy: string
  ) {
    const product = state.productData;
    let sortedProducts: Product[] = [];
    switch (sortBy) {
      case "lowToHigh":
        sortedProducts = product.slice().sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts = product.slice().sort((a, b) => b.price - a.price);
        break;
      case "rate":
        sortedProducts = product
          .slice()
          .sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "count":
        sortedProducts = product
          .slice()
          .sort((a, b) => b.rating.count - a.rating.count);
        break;
      default:
        sortedProducts = product;
    }
    commit("setSortedProducts", sortedProducts);
  },
};
