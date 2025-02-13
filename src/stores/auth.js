import { defineStore } from "pinia";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    dataUser: {},
  }),
  actions: {
    loginUser(params) {
      console.log(params);
    },
    registerUser(params) {
      console.log(params);
    },
  },
  getters: {
    getDataUser: (state) => state.dataUser,
  },
});
