import AdminLayout from "@/layouts/AdminLayout.vue";
import Dashboard from "@/modules/dashboard/views/index.vue";

const routes = [
  {
    path: "/",
    name: "AdminLayout",
    component: AdminLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },
];

export default routes;
