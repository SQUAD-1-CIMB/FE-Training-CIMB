import { defineStore } from "pinia";
import api from "../../axios-interceptor";

export const useApproval = defineStore("approval", {
  state: () => ({
    listApplication: [],
    loading: false,
  }),
  actions: {
    async actApplyTraining(trainingId) {
      this.loading = true;
      try {
        const res = await api.post(`/training-application`, {
          training_id: trainingId,
        });
        if (res.status == 201) {
          const training = this.listTraining.find((x) => x.id === trainingId);
          if (training) {
            training.isAbleToApply = false;
          }
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },

    async actGetApplications() {
      try {
        const res = await api.get(`/training-application?limit=100`);
        console.log(res);
        if (res.status == 200) {
          this.listApplication = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async actWithdrawApplication(id) {
      this.loading = true;
      try {
        const res = await api.patch(`/training-application/${id}/withdraw`);
        if (res.status == 200) {
          const application = this.listApplication.find((x) => x.id === id);
          if (application) {
            application.status = "WITHDRAWN";
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

    async actGetMyApplications() {
      try {
        const res = await api.get(`/my-applications`);
        if (res.status == 200) {
          this.listMyApplication = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async actAcceptApplication(id) {
      this.loading = true;
      try {
        const res = await api.patch(`/training-application/${id}/accept`);
        if (res.status == 200) {
          const application = this.listApplication.find((x) => x.id === id);
          if (application) {
            application.status = "ACCEPTED";
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

    async actRejectApplication(id) {
      this.loading = true;
      try {
        const res = await api.patch(`/training-application/${id}/reject`);
        if (res.status == 200) {
          const application = this.listApplication.find((x) => x.id === id);
          if (application) {
            application.status = "REJECTED";
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
    gtrGetListApplication: (state) => state.listApplication,
    gtrGetLoading: (state) => state.loading,
  },
});
