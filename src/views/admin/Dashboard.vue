<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-red-500 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            List Training
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto" v-if="!store.gtrGetLoading">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-red-500 text-red-500 border-red-500',
              ]"
            >
              Name
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-red-500 text-red-500 border-red-500',
              ]"
            >
              Training Name
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-red-500 text-red-500 border-red-500',
              ]"
            >
              Status
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, i) in store.gtrGetListApplication" :key="i">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              Halo
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ items.Training.title }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ items.status }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <!-- <user-table-dropdown :userId="1" /> -->
              <div
                class="flex w-full"
                style="justify-content: end"
                v-if="items.status === 'PENDING'"
              >
                <div>
                  <button
                    @click="confirmApply(items.id)"
                    type="button"
                    style="background-color: green; padding: 10px"
                    class="focus:outline-none text-white bg-grey-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Approve
                  </button>
                </div>
                <div class="px-2">
                  <button
                    @click="confirmReject(items.id)"
                    type="button"
                    style="padding: 10px"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// import UserTableDropdown from "@/components/Dropdowns/UserTableDropdown.vue";

import bootstrap from "@/assets/img/bootstrap.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import react from "@/assets/img/react.jpg";
import vue from "@/assets/img/react.jpg";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<script setup>
/* eslint-disable */
import { useApproval } from "@/stores/approval";
import { onMounted } from "vue";
import Swal from "sweetalert2";
const store = useApproval();

const actGetApplications = () => {
  store.actGetApplications();
};

const approve = async (id) => {
  const res = await store.actAcceptApplication(id);
  if (res) {
    Swal.fire(
      "Approve Success!",
      "You have successfully approved the training.",
      "success"
    );
  } else {
    Swal.fire(
      "Approve Failed!",
      "Failed to approve the training. Please try again.",
      "error"
    );
  }
};

const confirmApply = async (id) => {
  const result = await Swal.fire({
    title: "Are u sure want to approve ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, Approve!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    approve(id); // Jalankan fungsi jika user menekan "Ya"
  }
};
const reject = async (id) => {
  const res = await store.actRejectApplication(id);
  if (res) {
    Swal.fire(
      "Reject Success!",
      "You have successfully rejected the training.",
      "success"
    );
  } else {
    Swal.fire(
      "Reject Failed!",
      "Failed to approve the training. Please try again.",
      "error"
    );
  }
};

const confirmReject = async (id) => {
  const result = await Swal.fire({
    title: "Are u sure want to reject ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, reject!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    reject(id); // Jalankan fungsi jika user menekan "Ya"
  }
};

onMounted(() => {
  actGetApplications();
});
</script>
