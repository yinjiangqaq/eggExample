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
  },
];
