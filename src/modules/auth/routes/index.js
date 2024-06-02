import BlankLayouts from '@/layouts/BlankLayouts.vue';
import AuthLogin from '@/modules/auth/views/index.vue';


const routes = [
    {
        path: '/',
        component: BlankLayouts,
        children: [
            {
                path: '',
                component: AuthLogin,
            },
        ],
    }
]

export default routes;

