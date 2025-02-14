import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { createPinia } from "pinia";
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Trainings from "@/views/admin/Trainings.vue";
import Approvals from "@/views/admin/Approvals.vue";
import Users from "@/views/admin/Tables.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

// Karyawan
import MyTraining from "@/views/karyawan/MyTraining.vue";
import ListTraining from "@/views/karyawan/ListTraining.vue";

// routes
const pinia = createPinia();

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/trainings",
        component: Trainings,
      },
      {
        path: "/admin/users",
        component: Users,
      },
      {
        path: "/admin/approvals",
        component: Approvals,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
    redirect: "/user/list-training",
    children: [
      {
        path: "/user/list-training",
        component: ListTraining,
      },
      {
        path: "/user/my-training",
        component: MyTraining,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(pinia).mount("#app");
