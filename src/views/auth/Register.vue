<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t pt-2 mb-0 px-6 py-1"></div>
          <div class="flex-auto px-4 pb-0 lg:px-10 py-10 pt-0">
            <div class="text-black-200 text-center mb-3 font-bold">
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
                  <img style="width: 40%" src="../../assets/img/LogoOcto.png" />
                </div>
                <!-- <div style="display: flex; justify-content: center">
                  <p class="text-center text-2xl text-red-500 font-bold mr-1">
                    OCTO
                  </p>
                  <p class="text-center text-2xl text-black-500 ml-1">
                    TRAINING
                  </p>
                </div> -->
              </div>
            </div>
            <form @submit.prevent="confirmRegister">
              <div style="display: flex; justify-content: space-between">
                <div class="relative mb-3" style="width: 45%">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    v-model="name"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                  <p v-if="nameError" class="text-xs text-red-500 pt-1">
                    {{ nameError }}
                  </p>
                </div>

                <div class="relative mb-3" style="width: 45%">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    v-model="department"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Department"
                  />
                  <p v-if="departmentError" class="text-xs text-red-500 pt-1">
                    {{ departmentError }}
                  </p>
                </div>
              </div>
              <div class="relative w-full mb-3">
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
              <div class="text-center mt-6">
                <button
                  class="bg-red-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  :disabled="
                    nameError ||
                    passwordError ||
                    emailError ||
                    departmentError ||
                    !name ||
                    !password ||
                    !email ||
                    !department
                  "
                  :style="
                    nameError ||
                    passwordError ||
                    emailError ||
                    departmentError ||
                    !name ||
                    !password ||
                    !email ||
                    !department
                      ? 'background-color: grey'
                      : ''
                  "
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
          <div
            class="absolute bg-white bg-opacity-60 backdrop-blur-md z-10 h-full w-full flex items-center justify-center"
            v-if="isLoading"
          >
            <div class="flex items-center">
              <span class="text-2xl mr-4">Loading</span>
              <!-- loading icon -->
              <img
                class="animate-spin h-5 w-5 text-gray-600"
                src="@/assets/img/loading-spinner-svgrepo-com.svg"
              />
              <!-- end loading icon -->
            </div>
          </div>
          <div class="w-full text-center p-2">
            <router-link
              to="/auth/login"
              class="text-black-200 hover:underline"
            >
              <small>Already have an account ? Sign In!</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import Swal from "sweetalert2";
import { computed } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useAuthUser } from "@/stores/auth";
import { useRouter } from "vue-router";

const validationSchema = yup.object({
  email: yup.string().email("Email invalid!").required("Email can't be empty"),
  password: yup
    .string()
    .min(8, "Password must more than 8 character!")
    .required("Password can't be empty"),
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Name can only use alphabet!")
    .required("Password can't be empty"),
  department: yup
    .string()
    .matches(/^[A-Za-z0-9 ]+$/, "Departemen can only use alphabet and numeric!")
    .required("Departemen can't be empty"),
});

// Inisialisasi VeeValidate
const { handleSubmit } = useForm({
  validationSchema,
});

// Setup field validasi
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: name, errorMessage: nameError } = useField("name");
const { value: department, errorMessage: departmentError } =
  useField("department");

// Fungsi saat submit form

const store = useAuthUser();

const isLoading = computed(() => {
  return store.getLoading;
});

const errMessage = computed(() => {
  return store.getErrMessage;
});

const confirmRegister = async () => {
  const result = await Swal.fire({
    title: "Are u sure want to submit ?",
    text: "Make sure your details are correct before proceeding.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, submit!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    regisUser(); // Jalankan fungsi jika user menekan "Ya"
  }
};

const router = useRouter();
const regisUser = handleSubmit(async (values) => {
  const res = await store.registerUser(values);
  if (res) {
    Swal.fire("Register Success!", "You have successfully register", "success");
    router.push("/auth/login");
  } else {
    Swal.fire("Register Failed!", errMessage.value, "error");
    email.value = "";
    password.value = "";
    department.value = "";
    name.value = "";
  }
});
</script>
