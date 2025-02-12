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
                  <img style="width: 20%" src="@/assets/img/octo_icon.svg" />
                </div>
                <div style="display: flex; justify-content: center">
                  <p class="text-center text-2xl text-red-500 font-bold mr-1">
                    OCTO
                  </p>
                  <p class="text-center text-2xl text-black-500 ml-1">
                    TRAINING
                  </p>
                </div>
              </div>
            </div>
            <form>
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
                  <p class="text-xs text-red-500 pt-1">
                    {{ errMessage.name }}
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
                  <p class="text-xs text-red-500 pt-1">
                    {{ errMessage.department }}
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
                <p class="text-xs text-red-500 pt-1">
                  {{ errMessage.email }}
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
                <p class="text-xs text-red-500 pt-1">
                  {{ errMessage.password }}
                </p>
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-red-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  :disabled="isValid"
                  :style="isValid ? 'background-color: grey' : ''"
                >
                  Create Account
                </button>
              </div>
            </form>
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
<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const department = ref("");

    const errMessage = ref({
      email: "",
      password: "",
      name: "",
      department: "",
    });
    const isValid = ref(false);

    const alphaNumeric = new RegExp(
      "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$"
    );
    const alpha = new RegExp(" /^[a-zA-Z ]*$/");

    watch(name, (newValue) => {
      console.log(alpha.test(newValue));
      if (newValue === "") {
        errMessage.value.name = "Nama tidak boleh kosong!";
        isValid.value = true;
      } else if (alpha.test(newValue)) {
        errMessage.value.name = "Nama harus berupa alphabet!";
        isValid.value = true;
      } else {
        errMessage.value.name = "";
        isValid.value = false;
      }
    });

    watch(department, (newValue) => {
      if (newValue === "") {
        errMessage.value.department = "Department tidak boleh kosong!";
        isValid.value = true;
      } else if (!alphaNumeric.test(newValue)) {
        errMessage.value.department = "Nama department tidak valid!";
        isValid.value = true;
      } else {
        errMessage.value.department = "";
        isValid.value = false;
      }
    });

    watch(email, (newValue) => {
      if (newValue === "") {
        errMessage.value.email = "Email tidak boleh kosong!";
        isValid.value = true;
      } else if (!newValue.includes("@")) {
        errMessage.value.email = "Email tidak valid!";
        isValid.value = true;
      } else {
        errMessage.value.email = "";
        isValid.value = false;
      }
    });

    watch(password, (newValue) => {
      if (newValue === "") {
        errMessage.value.password = "Password tidak boleh kosong!";
        isValid.value = true;
      } else {
        errMessage.value.password = "";
        isValid.value = false;
      }
    });

    return {
      email,
      password,
      isValid,
      errMessage,
      name,
      department,
    };
  },
};
</script>
