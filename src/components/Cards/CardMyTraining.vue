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
        @click="confirmCancel(items.id)"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import Swal from "sweetalert2";
import { defineProps } from "vue";
import { useTraining } from "../../stores/training";

const props = defineProps({
  items: {
    type: Object,
    default: {},
  },
});

const store = useTraining();

const cancelTraining = async (id) => {
  console.log(id);
  const res = await store.patchMyTraining(id);
  if (res) {
    Swal.fire(
      "Cancel Success!",
      "You have successfully cancel for the training.",
      "success"
    );
  } else {
    Swal.fire(
      "Cancel Failed!",
      "Failed to cancel for the training. Please try again.",
      "error"
    );
  }
};

const confirmCancel = async (id) => {
  const result = await Swal.fire({
    title: "Are u sure want to cancel ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, cancel!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    cancelTraining(id); // Jalankan fungsi jika user menekan "Ya"
  }
};
</script>

<style lang="scss" scoped></style>
