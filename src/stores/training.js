import { defineStore } from "pinia";
// import axios from "axios";
import api from "../../axios-interceptor";
// import { useRoute } from "vue-router";

// const apiURL = "http://148.135.138.22:5000";
// const router = useRoute();

export const useTraining = defineStore("training", {
  state: () => ({
    listTraining: [],
    detailTraining: {},
    totalPages: 0,
    totalItems: 0,
    loading: false,
  }),
  actions: {
    async actGetListTraining(page, limit, filter, startDate) {
      try {
        const res = await api.get(
          `/trainings?page=${page}&limit=${limit}&filter=${filter}&startDate=${startDate}`
        );
        if (res.status === 200) {
          this.listTraining = res.data.data;
          this.totalPages = res.data.totalPages;
          this.totalItems = res.data.totalItems;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    gtrGetListTraining: (state) => state.listTraining,
    gtrGetTotalPages: (state) => state.totalPages,
    gtrGetTotalItems: (state) => state.totalItems,
  },
});
