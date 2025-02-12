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
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
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
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Department"
                  />
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
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-red-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
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
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";

export default {
  data() {
    return {
      github,
      google,
    };
  },
};
</script>
