import AdminLayout from "@/layouts/AdminLayout.vue";
import Dashboard from "@/modules/dashboard/views/index.vue";

const routes = [
  {
    path: "/a",
    component: AdminLayout,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
    ],
  },
];

export default routes;
