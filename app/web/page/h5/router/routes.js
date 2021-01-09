export default [
  {
    name: "home",
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@h5/views/login.vue"),
  },
  {
    name: "project",
    path: "/project",
    component: () => import("@h5/views/project.vue"),
  },
];
