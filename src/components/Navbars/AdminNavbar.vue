<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-red-500 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold pr-4"
        href="javascript:void(0)"
      >
        {{ role === "EMPLOYEE" ? "Training" : "Dashboard" }}
      </a>
      <!-- Form -->
      <form
        class="md:flex hidden flex-row w-full flex-wrap items-center lg:ml-auto mr-3"
        v-if="role == 'MANAGER'"
      >
        <div class="relative flex w-full flex-wrap items-stretch">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search here..."
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
          />
        </div>
      </form>
      <!-- User -->
      <!-- <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <user-dropdown />
      </ul> -->
      <!-- <div class="w-full" style="display: flex; justify-content: center">
        <img src="@/assets/img/LogoOcto.png" class="md:w-20" width="10%" />
      </div> -->
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script setup>
/* eslint-disable */
import { defineProps } from "vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

const props = defineProps(["role"]);
</script>
