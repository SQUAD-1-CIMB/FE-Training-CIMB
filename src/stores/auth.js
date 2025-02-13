import { defineStore } from "pinia";
import axios from "axios";
// import { useRoute } from "vue-router";
import { setCookie } from "../../cookies";
import { useRouter } from "vue-router";

const apiURL = "http://148.135.138.22:5000";
const router = useRouter();

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    dataUser: {},
    errMessage: "",
    loading: false,
    token: null,
  }),
  actions: {
    async loginUser(params) {
      try {
        const res = await axios.post(apiURL + "/user/login", params);
        if (res.status === 200) {
          this.token = res.data.token;
          this.dataUser = res.data.user;
          setCookie("dataUser", JSON.stringify(this.dataUser), 30);
          setCookie("token", JSON.stringify(this.token), 30);
        }
        console.log(res);
        return true;
      } catch (error) {
        console.log(error);
        // this.errMessage =
        return false;
      }
    },
    async registerUser(params) {
      this.errMessage = "";
      this.loading = true;
      try {
        const res = await axios.post(apiURL + "/user/register", params);
        if (res.data.message == "User registered successfully.") {
          this.errMessage = "";
          this.loading = false;
        }
        this.loading = false;
        return true;
      } catch (error) {
        this.errMessage = error?.response?.data?.message;
        this.loading = false;
        return false;
      }
    },
    logout() {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "dataUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.push("/auth/login");
    },
  },
  getters: {
    getDataUser: (state) => state.dataUser,
    getErrMessage: (state) => state.errMessage,
    getLoading: (state) => state.loading,
  },
});
