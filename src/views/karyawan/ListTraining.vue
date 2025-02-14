<template>
  <div>
    <div class="flex flex-wrap">
      <div class="flex w-full flex-wrap items-stretch mb-3">
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
      <div
        class="flex flex-row grid grid-cols-2 md:grid-cols-3 gap-6"
        v-if="allTraining?.length > 0"
      >
        <CardTraining
          v-for="(items, i) in allTraining"
          :key="i"
          :items="items"
        />
      </div>
      <div
        class="relative flex w-full"
        style="
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
        v-else
      >
        <img src="@/assets/img/octo-logo-2.svg" width="200px" height="200px" />
        <p
          class="text-red-500 pt-0"
          style="font-weight: 700; font-size: 30px; padding-bottom: 40px"
        >
          Training Not Found!
        </p>
      </div>
    </div>
    <div
      class="flex items-center justify-center space-x-2 mt-4 pb-4"
      v-if="allTraining?.length > 0"
    >
      <button
        class="px-3 py-1 bg-red-500 border rounded-md hover:bg-gray-200"
        style="color: white"
        :disabled="currentPage === 1"
        @click="prevPage()"
      >
        Prev
      </button>

      <button class="px-3 py-1 border rounded-md">
        {{ currentPage }} / {{ totalPages }}
      </button>

      <button
        class="px-3 py-1 bg-red-500 border rounded-md hover:bg-gray-200"
        style="color: white"
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

let searchTimeout;
watch(search, (newVal) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    if (search.value == "") {
      currentPage.value = 1;
    }
    await store.actGetListTraining(
      currentPage.value,
      10,
      search.value,
      date.toISOString().split("T")[0]
    );
  }, 500);
});
const getAllTraining = () => {
  store.actGetListTraining(1, 10, "", date.toISOString().split("T")[0]);
};

const nextPage = () => {
  currentPage.value = currentPage.value + 1;
  store.actGetListTraining(
    currentPage.value,
    10,
    search.value,
    date.toISOString().split("T")[0]
  );
};

const prevPage = () => {
  currentPage.value = currentPage.value - 1;
  store.actGetListTraining(
    currentPage.value,
    10,
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
