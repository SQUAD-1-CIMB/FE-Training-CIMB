<template>
  <div
    class="relative bg-white shadow-lg rounded-lg p-4 h-full flex flex-col"
    v-if="!store.gtrGetLoading"
  >
    <div class="flex-grow pb-4">
      <!-- Bagian gambar -->
      <img
        :src="items.Training.thumbnail"
        alt="Training Image"
        class="w-full rounded-t-lg"
        style="height: 250px"
      />

      <!-- Bagian teks -->
      <div
        class="flex"
        style="justify-content: space-between; align-items: center"
      >
        <h2 class="text-lg font-semibold mt-4">{{ items.Training.title }}</h2>
        <span
          class="mt-auto bg-gray-200 text-xs px-1 py-1 text-gray-800 rounded-lg text-center text-white"
          style="width: 25%"
          :style="
            items.status === 'PENDING'
              ? 'background-color: #ffc107; color: black'
              : items.status === 'APPROVED'
              ? 'background-color: #198754'
              : 'background-color: #dc3545'
          "
        >
          {{ items.status }}
        </span>
      </div>
      <p class="text-sm text-gray-600">{{ items.Training.provider }}</p>
      <p class="text-gray-700">{{ items.Training.description }}</p>
    </div>

    <!-- Bagian tombol Apply, tetap di bawah -->
    <div class="flex w-full">
      <button
        class="mt-auto w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:button-apply"
        :style="
          items.status !== 'PENDING'
            ? 'cursor: not-allowed; background-color: grey; hover:none'
            : ''
        "
        :disabled="items.status !== 'PENDING'"
        @click="cancelTraining(items.id)"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps } from "vue";
import { useTraining } from "../../stores/training";

const props = defineProps({
  items: {
    type: Object,
    default: {},
  },
});

const store = useTraining();

const cancelTraining = (id) => {
  store.patchMyTraining(id);
};
</script>

<style lang="scss" scoped></style>
