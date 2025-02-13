<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <!-- <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign in with</h6>
            </div> -->
            <!-- <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div> -->
            <!-- <hr class="mt-6 border-b-1 border-blueGray-300" /> -->
            <div
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
              "
              class="w-full pb-0"
            >
              <div
                class="w-full"
                style="display: flex; justify-content: center"
              >
                <img style="width: 60%" src="../../assets/img/LogoOcto.png" />
              </div>
              <!-- <div style="display: flex; justify-content: center">
                <p class="text-center text-2xl text-red-500 font-bold mr-1">
                  OCTO
                </p>
                <p class="text-center text-2xl font-bold text-black-500 ml-1">
                  TRAINING
                </p>
              </div> -->
            </div>
          </div>
          <div class="flex-auto pt-0 px-4 lg:px-10 py-10">
            <!-- <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div> -->
            <p class="text-xs text-center text-red-500 pb-4">
              {{ store.getErrMessage }}
            </p>
            <form @submit.prevent="loginUser">
              <div class="relative w-full mb-3 pt-0">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
                <p v-if="emailError" class="text-xs text-red-500 pt-1">
                  {{ emailError }}
                </p>
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
                <p v-if="passwordError" class="text-xs text-red-500 pt-1">
                  {{ passwordError }}
                </p>
              </div>
              <!-- <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div> -->

              <div class="text-center mt-6">
                <button
                  class="bg-red-500 text-white active:text-white-200 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-red-600 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  :disabled="emailError || passwordError || !password || !email"
                  :style="
                    emailError || passwordError || !password || !email
                      ? 'background-color: grey'
                      : ''
                  "
                >
                  Sign In
                </button>
              </div>
            </form>
            <div class="flex flex-wrap mt-6 relative">
              <div class="w-full text-center">
                <router-link
                  to="/auth/register"
                  class="text-black-200 hover:underline"
                >
                  <small>Create new account</small>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
// import { computed, onMounted } from "vue";
import { useAuthUser } from "@/stores/auth";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { getCookie } from "../../../cookies";

const store = useAuthUser();
const validationSchema = yup.object({
  email: yup.string().email("Email invalid!").required("Email can't be empty!"),
  password: yup.string().required("Password can't be empty!"),
});

// const errMessageLogin = computed(() => {
//   return store.getErrMessage;
// });

// Inisialisasi VeeValidate
const { handleSubmit } = useForm({
  validationSchema,
});

// Setup field validasi
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

// Fungsi saat submit form

const router = useRouter();
const loginUser = handleSubmit(async (values) => {
  const res = await store.loginUser(values);
  if (!res) {
    email.value = "";
    password.value = "";
  } else {
    if (store.getDataUser?.role === "EMPLOYEE") {
      router.push("/");
    } else {
      router.push("/admin/dashboard");
    }
  }
});
</script>
