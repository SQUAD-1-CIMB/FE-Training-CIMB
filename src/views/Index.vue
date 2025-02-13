<template>
  <div>
    <sidebar-user />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import SidebarUser from "@/components/Sidebar/SidebarUser.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
</script>
