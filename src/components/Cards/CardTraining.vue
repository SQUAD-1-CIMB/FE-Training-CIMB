<template>
  <div
    class="flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded"
    style="cursor: pointer"
  >
    <div class="w-full rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        :src="
          items.thumbnail === null
            ? '@assets/team-2-800x800.jpg'
            : items.thumbnail
        "
        alt="Sunset in the mountains"
        height="100px"
        style="max-height: 100px"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ items.title }}</div>
        <div class="text-xs text-blueGray-800 mb-2">{{ items.provider }}</div>
        <p class="text-gray-700 text-base">
          {{ items.description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:button-apply"
          style="cursor: pointer"
          >Apply</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped></style>
