import { defineStore } from "pinia";
import api from "../../axios-interceptor";
export const useUser = defineStore("user", {
  state: () => ({
    listUser: [],
  }),
  actions: {
    async actGetListUser() {
      try {
        const res = await api.get(
          `/user-data`
        );
        if (res.status === 200) {
          this.listUser = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async actPromoteToManager(userId) {
      this.loading = true;
      try {
        const res = await api.patch(`/user/${userId}/promote`);
        if (res.status == 200) {
          const user = this.listUser.find((x) => x.id === userId);
          if (user) {
            user.role = "MANAGER";
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
    async actDemoteToEmployee(userId) {
        this.loading = true;
        try {
          const res = await api.patch(`/user/${userId}/demote`);
          if (res.status == 200) {
            const user = this.listUser.find((x) => x.id === userId);
            if (user) {
              user.role = "EMPLOYEE";
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
    gtrGetListUser: (state) => state.listUser,
  },
});
