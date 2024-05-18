<template>
  <div
    v-if="isShowSlider"
    class="fixed inset-y-0 left-0 bg-slate-600 bg-opacity-50 w-full"
  >
    <div class="absolute inset-y-0 left-0 w-[35%] bg-gray-200 shadow-lg">
      <div class="h-[100%] flex flex-col justify-between">
        <div class="p-4 h-[90%] border border-red-700">
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
              class="border border-black px-2 py-4 rounded-lg"
            >
              <div class="flex justify-center items-center gap-4">
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
                    <div class="flex justify-between items-center gap-2 w-32 rounded-lg bg-slate-200">
                      <img
                        src="../../assets/icons/icon-minus.svg"
                        alt="minus"
                        class="p-4"
                      />
                      <span> 1 </span>
                      <img
                        src="../../assets/icons/icon-plus.svg"
                        alt="plus"
                        class="p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div class="flex justify-between items-center">
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
const store = useStore();
const { getters, dispatch } = store;
const isShowSlider = computed(() => getters["home/showSlider"]);
const toggleSlider = () => {
  dispatch("home/toggleSlider");
};
const cartItems = computed(() => getters["home/cartItems"]);
const totalPrice = computed(() => getters["home/totalPrice"]);
const removeFromCart = (itemId: number) => {
  dispatch("home/removeFromCart", itemId);
};
</script>
