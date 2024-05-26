import { StoreType } from "../../types/store";
import { Product } from "../../types/data";

export const mutations = {
  setLoading(state: StoreType.HomeState, value: boolean) {
    state.loading = value;
  },
  setProductData(state: StoreType.HomeState, data: Product[]) {
    state.productData = data;
  },
  setSingleProductData(state: StoreType.HomeState, data: Product[]) {
    state.singleProductData = data;
  },
  setUniqueCategories(state: StoreType.HomeState, categories: string[]) {
    state.uniqueCategories = categories;
  },
  toggleSlider(state: StoreType.HomeState) {
    state.showSlider = !state.showSlider;
  },
  setSelectedCategory(state: StoreType.HomeState, category: string | null) {
    state.selectedCategory = category;
  },
  clearSelectedCategory(state: StoreType.HomeState) {
    state.selectedCategory = null;
  },
  setSortedProducts(state: StoreType.HomeState, sortedProducts: Product[]) {
    state.sortedProducts = sortedProducts;
  },
  setAutocompleteSuggestions(
    state: StoreType.HomeState,
    suggestions: Product[]
  ) {
    state.autocompleteSuggestions = suggestions;
  },
  setSearchQuery(state: StoreType.HomeState, query: string) {
    state.searchQuery = query;
  },
  addToCart(state: StoreType.HomeState, item: Product) {
    const cartItem = state.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (!cartItem) {
      // If the item is not in the cart, add it with a quantity of 1
      state.cartItems.push({ ...item, quantity: 1 });
    } else {
      // If the item is already in the cart, increment its quantity
      cartItem.quantity++;
    }
  },
  removeFromCart(state: StoreType.HomeState, itemId: number) {
    // Find the index of the item in the cart
    const cartItemIndex = state.cartItems.findIndex(
      (item) => item.id === itemId
    );

    // If the item is in the cart
    if (cartItemIndex !== -1) {
      const cartItem = state.cartItems[cartItemIndex];
      // Reset the quantity of the item to 0
      cartItem.quantity = 0;
      // Remove the item from the cart
      state.cartItems.splice(cartItemIndex, 1);
      state.quantityLimitReached = false;
    }
  },
  updateCartTotalPrice(state: StoreType.HomeState) {
    state.cartTotalPrice = state.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
  incrementItemQuantity(state: StoreType.HomeState, itemId: number) {
    const cartItem = state.cartItems.find((item) => item.id === itemId);
    if (cartItem) {
      if (cartItem.quantity >= 5) {
        // Set a state property to indicate that the limit is reached
        state.quantityLimitReached = true;
      } else {
        cartItem.quantity++;
      }
    }
    mutations.updateCartTotalPrice(state);
  },
  decrementItemQuantity(state: StoreType.HomeState, itemId: number) {
    const cartItem = state.cartItems.find((item) => item.id === itemId);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    }
    if (cartItem && cartItem.quantity <= 5) {
      state.quantityLimitReached = false;
    }
    mutations.updateCartTotalPrice(state);
  },
};
