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
    totalPagesMyTraining: 0,
    totalItems: 0,
    totalItemsMyTraining: 0,
    loading: false,
    myTraining: [],
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
    async actPostApply(idTraining) {
      this.loading = true;
      try {
        // console.log(idTraining);
        const res = await api.post("/training-application", {
          training_id: idTraining,
        });
        if (res.status == 201 || res.status == 200) {
          const training = this.listTraining.find((x) => x.id === idTraining);
          if (training) {
            training.isAbleToApply = false;
          }
        }
        this.loading = false;
        return true;
        // console.log(res);
      } catch (error) {
        this.loading = false;
        console.log(error);
        return false;
      }
    },
    async actGetMyTraining(page, limit, filter, startDate) {
      try {
        const res = await api.get(
          `/my-applications?page=${page}&limit=${limit}&filter=${filter}&startDate=${startDate}`
        );
        if (res.status == 200) {
          this.myTraining = res.data.data;
          this.totalPagesMyTraining = res.data.totalPages;
          this.totalItemsMyTraining = res.data.totalItems;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async patchMyTraining(idApply) {
      this.loading = true;
      try {
        const res = await api.patch(
          `/training-application/${idApply}/withdraw`
        );
        if (res.status == 200) {
          const training = this.myTraining.find((x) => x.id === idApply);
          if (training) {
            training.status = "WITHDRAWN";
          }
        }
        this.loading = false;
        return true;
      } catch (error) {
        this.loading = false;
        console.log(error);
        return false;
      }
    },
  },
  getters: {
    gtrGetListTraining: (state) => state.listTraining,
    gtrGetTotalPages: (state) => state.totalPages,
    gtrGetTotalPagesMyTraining: (state) => state.totalPagesMyTraining,
    gtrGetTotalItemsMyTraining: (state) => state.totalItemsMyTraining,
    gtrGetTotalItems: (state) => state.totalItems,
    gtrGetIsApply: (state) => state.isApply,
    gtrGetMyTraining: (state) => state.myTraining,
    gtrGetLoading: (state) => state.loading,
  },
});
