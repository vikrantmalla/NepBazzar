<template>
  <div
    class="flex justify-between items-center gap-2 w-32 rounded-lg bg-slate-200"
  >
    <button class="px-2 py-3" @click="decreaseItemQuantity(itemId)">
      <img src="../../assets/icons/icon-minus.svg" alt="minus" />
    </button>
    <span> {{ props.itemQuantity }} </span>
    <button class="p-2" @click="increaseItemQuantity(itemId)">
      <img src="../../assets/icons/icon-plus.svg" alt="plus" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
const store = useStore();
const { dispatch } = store;

const props = defineProps<{
  itemQuantity: number;
  itemId: number;
}>();

const increaseItemQuantity = (itemId: number) => {
  dispatch("home/incrementItemQuantity", itemId);
};
const decreaseItemQuantity = (itemId: number) => {
  dispatch("home/decrementItemQuantity", itemId);
};
</script>
