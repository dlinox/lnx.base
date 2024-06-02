import { createMemoryHistory, createRouter } from 'vue-router'

import AuthRoutes from '@/modules/auth/routes/'
import DashboardRoutes from '@/modules/dashboard/routes/'

const routes = [
    ...AuthRoutes,
    ...DashboardRoutes,
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;