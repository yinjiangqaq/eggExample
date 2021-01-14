export default [
  {
    name: "home",
    path: "/",
    // redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@views/login.vue"),
  },
  {
    name: "project",
    path: "/project",
    component: () => import("@views/project.vue"),
    children:[
      {
        name:'account',
        path:'/project/account',
        component:()=>import('@views/account.vue')
      }
    ]
  },
];
