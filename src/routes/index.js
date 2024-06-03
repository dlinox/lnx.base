import { createWebHistory, createRouter } from 'vue-router'

import AuthRoutes from '@/modules/auth/routes/'
import DashboardRoutes from '@/modules/dashboard/routes/'

const routes = [
    ...AuthRoutes,
    ...DashboardRoutes,
]

console.log(routes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;