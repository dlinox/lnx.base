import BlankLayouts from '@/layouts/BlankLayouts.vue';
import AuthLogin from '@/modules/auth/views/index.vue';


const routes = [
    {
        path: '/',
        name: 'BlankLayouts',
        component: BlankLayouts,
        children: [
            {
                name: 'AuthLogin',
                path: '',
                component: AuthLogin,
            },
        ],
    }
]

export default routes;

