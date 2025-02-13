<template>
  <div>
    <sidebar
      role="MANAGER"
      :dataUserName="dataUser?.name"
      :dataAvatar="dataUser?.avatar"
    />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div
        class="px-4 md:px-10 mx-auto w-full -m-24"
        style="top: 0; height: 72vh"
      >
        <router-view />
      </div>
      <footer-admin style="bottom: 0; position: absolute" />
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
};
</script>
<script setup>
/* eslint-disable */
import { getCookie } from "../../cookies";
import { onMounted, ref } from "vue";
const dataUser = ref("");
onMounted(() => {
  if (!getCookie("dataUser")) {
    router.push("/auth/login");
  } else {
    dataUser.value = JSON.parse(getCookie("dataUser"));
  }
});
</script>
