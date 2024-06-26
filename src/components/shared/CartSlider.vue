<template>
  <div
    v-if="isShowSlider"
    class="fixed inset-y-0 left-0 bg-slate-600 bg-opacity-50 w-full"
  >
    <div class="absolute inset-y-0 left-0 w-[35%] bg-gray-200 shadow-lg">
      <div class="h-[100%] flex flex-col justify-between">
        <div class="p-4 h-[90%]">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-lg">Cart</h2>
            <img
              @click="toggleSlider"
              src="../../assets/icons/icon-close.svg"
              alt="close"
            />
          </div>
          <div
            v-if="cartItems.length === 0"
            class="flex justify-center items-center h-[60%]"
          >
            <p>Cart is empty...</p>
          </div>
          <div v-else>
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="border border-black rounded-lg mb-5"
            >
              <div class="flex justify-center items-center gap-4 mx-1 my-3">
                <img :src="item.image" :alt="item.title" class="w-10" />
                <div class="flex flex-col gap-2">
                  <div class="flex justify-center">
                    <h2 class="w-80">{{ item.title.slice(0, 30) }}...</h2>
                    <img
                      @click="removeFromCart(item.id)"
                      src="../../assets/icons/icon-delete.svg"
                      alt="delete"
                      class="px-4"
                    />
                  </div>
                  <div class="flex justify-between items-center">
                    <h2>{{ item.price }}</h2>
                    <ItemQuantityController
                      :itemQuantity="item.quantity"
                      :itemId="item.id"
                    />
                  </div>
                </div>
              </div>
              <div
                v-if="quantityLimitReachedMessage(item.id)"
                class="p-2 mt-2 rounded-br-lg rounded-bl-lg text-center text-white bg-red-600"
              >
                The maximum quantity for an item is 5.
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div class="flex justify-between items-center mx-3 my-4">
            <h2>Total:</h2>
            <h2>{{ totalPrice }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ItemQuantityController from "./ItemQuantityController.vue";
const store = useStore();
const { getters, dispatch } = store;
const isShowSlider = computed(() => getters["home/showSlider"]);
const toggleSlider = () => {
  dispatch("home/toggleSlider");
};
const cartItems = computed(() => getters["home/cartItems"]);
const totalPrice = computed(() => getters["home/totalPrice"]);
const quantityLimitReachedMessage = computed<(itemId: number) => boolean>(
  () => getters["home/quantityLimitReachedMessage"]
);

const removeFromCart = (itemId: number) => {
  dispatch("home/removeFromCart", itemId);
};
</script>
