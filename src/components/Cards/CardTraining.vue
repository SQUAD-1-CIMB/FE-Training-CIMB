<template>
  <div
    class="relative bg-white shadow-lg rounded-lg p-4 h-full flex flex-col"
    v-if="!store.gtrGetLoading"
  >
    <div class="flex-grow pb-4">
      <!-- Bagian gambar -->
      <img
        :src="items.thumbnail"
        alt="Training Image"
        class="w-full rounded-t-lg"
      />

      <!-- Bagian teks -->
      <h2 class="text-lg font-semibold mt-4">{{ items.title }}</h2>
      <p class="text-sm text-gray-600">{{ items.provider }}</p>
      <p class="text-gray-700">{{ items.description }}</p>
    </div>

    <!-- Bagian tombol Apply, tetap di bawah -->
    <button
      class="mt-auto bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:button-apply"
      :style="
        !items.isAbleToApply
          ? 'cursor: not-allowed; background-color: grey; hover:none'
          : ''
      "
      :disabled="!items.isAbleToApply"
      @click="postApply(items.id)"
    >
      {{ items.isAbleToApply ? "Apply" : "Applied" }}
    </button>
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

const postApply = (id) => {
  store.actPostApply(id);
};
</script>

<style lang="scss" scoped></style>
