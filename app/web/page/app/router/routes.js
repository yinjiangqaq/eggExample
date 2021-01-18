export default [
  {
    name: 'home',
    path: '/',
    // redirect: "/login",
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@views/login.vue'),
  },
  {
    name: 'project',
    path: '/project',
    component: () => import('@views/project.vue'),
    redirect: '/project/account',
    children: [
      {
        name: '账号管理',
        path: '/project/account',
        component: () => import('@views/account.vue'),
      },
      {
        name: '信用管理',
        path: '/project/credit',
        component: () => import('@views/credit.vue'),
      },
    ],
  },
];
