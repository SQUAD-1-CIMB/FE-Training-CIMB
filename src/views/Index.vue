<template>
  <div>
    <sidebar
      role="EMPLOYEE"
      :dataUserName="dataUser?.name"
      :dataAvatar="dataUser?.avatar"
    />
    <div class="md:ml-64 bg-blueGray-100">
      <!-- <admin-navbar role="EMPLOYEE" /> -->
      <header-user-stats :totalItems="totalItems" />
      <div
        class="container mx-auto px-4 md:px-10 -m-24"
        style="min-height: 100vh"
      >
        <router-view />
        <!-- <footer-admin /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import HeaderUserStats from "@/components/Headers/HeaderUserStats.vue";
import { getCookie } from "../../cookies";
import { useTraining } from "../stores/training";

const router = useRouter();
const dataUser = ref(null);
const store = useTraining;

const totalItems = computed(() => {
  return store.gtrGetTotalItems;
});

onMounted(() => {
  if (!getCookie("dataUser")) {
    router.push("/auth/login");
  } else {
    dataUser.value = JSON.parse(getCookie("dataUser"));
    if (dataUser.value.role === "MANAGER") {
      router.push("/admin/dashboard");
    } else {
      router.push("/user/list-training");
    }
  }
});
</script>
