export default [
  {
    name: "home",
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@pc/views/login.vue"),
  },
  {
    name: "project",
    path: "/project",
    component: () => import("@pc/views/project.vue"),
  },
];
