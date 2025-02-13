<template>
  <div>
    <div class="relative flex flex-wrap mx-2">
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
        >
          <i class="fas fa-search"></i>
        </span>
        <input
          v-model="search"
          type="text"
          placeholder="Search here..."
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
        />
      </div>
      <fragment v-for="(items, i) in allTraining" :key="i">
        <div
          class="w-1/3 px-2 mb-4"
          style="display: flex; justify-content: center; align-items: center"
        >
          <!-- Lebar 1/3 (3 kolom per baris) -->
          <CardTraining :items="items" />
        </div>
      </fragment>
    </div>
    <div class="flex items-center justify-center space-x-2 mt-4">
      <button
        class="px-3 py-1 border rounded-md hover:bg-gray-200"
        :disabled="currentPage === 1"
        @click="prevPage()"
      >
        Prev
      </button>

      <button class="px-3 py-1 border rounded-md">
        {{ currentPage }}
      </button>

      <button
        class="px-3 py-1 border rounded-md hover:bg-gray-200"
        :disabled="currentPage === totalPages"
        @click="nextPage()"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script setup>
/* eslint-disable */
import CardTraining from "../../components/Cards/CardTraining.vue";
// import Pagination from "@/components/Pagination/Pagination.vue";
import { useTraining } from "@/stores/training";
import { onMounted, ref, computed, watch } from "vue";

const store = useTraining();

const currentPage = ref(1);

const date = new Date();

const search = ref("");

watch(search, (newVal) => {
  store.actGetListTraining(
    page.value,
    12,
    search.value,
    date.toISOString().split("T")[0]
  );
});

const getAllTraining = () => {
  store.actGetListTraining(1, 12, "", date.toISOString().split("T")[0]);
};

const nextPage = () => {
  currentPage.value = currentPage.value + 1;
  store.actGetListTraining(
    currentPage.value,
    12,
    search.value,
    date.toISOString().split("T")[0]
  );
};

const prevPage = () => {
  currentPage.value = currentPage.value - 1;
  store.actGetListTraining(
    currentPage.value,
    12,
    search.value,
    date.toISOString().split("T")[0]
  );
};

const allTraining = computed(() => {
  return store.gtrGetListTraining;
});

const totalPages = computed(() => {
  return store.gtrGetTotalPages;
});

onMounted(() => {
  getAllTraining();
});
</script>
