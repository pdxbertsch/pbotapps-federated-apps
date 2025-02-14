import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authRoutes } from '@pbotapps/common';

import Application from '../pages/Application.vue';
import Applications from '../pages/Applications.vue';
import ApplicationForm from '../components/application/Form.vue';
import DefaultLayout from '../layouts/Default.vue';
import Home from '../pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  {
    path: '/application',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Applications,
      },
      {
        name: 'Application',
        path: ':uuid',
        component: Application,
      },
      {
        path: 'new',
        component: ApplicationForm,
      },
    ],
  },
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeResolve(async to => {
//   const { account, redirectTo } = useLogin();

//   if (
//     !account.value &&
//     to.name !== 'Login' &&
//     to.name !== 'OAuthCallback' &&
//     to.name != 'Logout'
//   ) {
//     redirectTo.value = to;

//     return { name: 'Login' };
//   }
// });

export default router;
