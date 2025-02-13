<template>
  <div class="flex items-center justify-center space-x-2 mt-4">
    <button
      class="px-3 py-1 border rounded-md hover:bg-gray-200"
      :disabled="currentPage === 1"
      @click="$emit('update:currentPage', currentPage - 1)"
    >
      Prev
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('update:currentPage', page)"
      class="px-3 py-1 border rounded-md"
      :class="{
        'bg-blue-500 text-white': page === currentPage,
        'hover:bg-gray-200': page !== currentPage,
      }"
    >
      {{ page }}
    </button>

    <button
      class="px-3 py-1 border rounded-md hover:bg-gray-200"
      :disabled="currentPage === totalPages"
      @click="$emit('update:currentPage', currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup>
/* eslint-disable */
import { computed, defineProps } from "vue";

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage);
});
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
