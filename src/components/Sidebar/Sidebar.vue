<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/"
      >
        <div
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          "
          class="w-full"
        >
          <img
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg mb-4"
            :src="
              dataAvatar === null
                ? '@/assets/img/team-1-800x800.jpg'
                : dataAvatar
            "
            width="400px"
            height="400px"
          />
          <p class="mb-4">{{ dataUserName }}</p>
          <router-link to="/profile" v-slot="{ href, navigate, isActive }">
            <a
              :href="href"
              @click="navigate"
              class="text-xs uppercase font-bold block mb-0"
              :class="[
                isActive
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-blueGray-700 hover:text-blueGray-500',
              ]"
            >
              <i
                class="fa-solid fa-pen-to-square mr-2 text-sm"
                :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
              ></i>
              <!-- <i
                class="fas fa-tools mr-2 text-sm"
                :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
              ></i> -->
              Lihat profile
            </a>
          </router-link>
          <!-- <div class="w-full" style="display: flex; justify-content: center">
            <img src="@/assets/img/LogoOcto.png" class="w-80 md:w-20" />
          </div> -->
          <!-- <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <p class="text-center text-lg text-red-500 font-bold mr-1">OCTO</p>
            <p class="text-center text-lg font-bold text-black-500 ml-1">
              TRAINING
            </p>
          </div> -->
        </div>
      </router-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                <img src="@/assets/img/LogoOcto.png" width="30%" height="70%" />
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Features
        </h6>
        <!-- Navigation -->
        <!-- <ul
          class="md:flex-col md:min-w-full flex flex-col list-none"
          v-if="role === 'MANAGER'"
        ></ul> -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <!-- Admin -->
          <fragment v-if="role === 'MANAGER'">
            <li class="items-center">
              <router-link
                to="/admin/dashboard"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-tv mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Approval
                </a>
              </router-link>
            </li>

            <!-- <li class="items-center">
              <router-link
                to="/admin/trainings"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-tools mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Training
                </a>
              </router-link>
            </li>

            <li class="items-center">
              <router-link
                to="/admin/users"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-table mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Users
                </a>
              </router-link>
            </li>

            <li class="items-center">
              <router-link
                to="/admin/approvals"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fas fa-map-marked mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  Approvals
                </a>
              </router-link>
            </li> -->
          </fragment>

          <fragment v-else>
            <li class="items-center">
              <router-link
                to="/user/list-training"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <!-- <i class="fa-solid fa-list"></i> -->
                  <i
                    class="fa-solid fa-list mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  List Training
                </a>
              </router-link>
            </li>

            <li class="items-center">
              <router-link
                to="/user/my-training"
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-blueGray-700 hover:text-blueGray-500',
                  ]"
                >
                  <i
                    class="fa-solid fa-book mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                  ></i>
                  My Training
                </a>
              </router-link>
            </li>
          </fragment>
          <!-- <li class="items-center">
            <router-link
              to="/user/profile"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-red-500 hover:text-red-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-tools mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Profile
              </a>
            </router-link>
          </li> -->
          <hr class="my-4 md:min-w-full" />
          <li class="items-center">
            <span
              @click="confirmLogout()"
              style="cursor: pointer"
              class="text-xs uppercase py-3 font-bold block"
              :class="[
                isActive
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-blueGray-700 hover:text-blueGray-500',
              ]"
            >
              <i
                class="fa-solid fa-right-from-bracket mr-2 text-sm"
                :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
              ></i>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  props: ["role", "dataUserName", "dataAvatar"],
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
    NotificationDropdown,
    UserDropdown,
  },
};
</script>

<script setup>
/* eslint-disable */
import Swal from "sweetalert2";
import { useAuthUser } from "../../stores/auth";
import { useRouter } from "vue-router";
const store = useAuthUser();
const router = useRouter();

const confirmLogout = async () => {
  const result = await Swal.fire({
    title: "Are u sure want to logout ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, logout!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    logout(); // Jalankan fungsi jika user menekan "Ya"
  }
};

const logout = () => {
  store.logout();
  router.push("/auth/login");
};
</script>
