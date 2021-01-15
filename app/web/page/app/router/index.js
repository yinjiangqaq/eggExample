import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name;
    router.app.$options.store.commit('global/UPDATE_ACTIVE_MENU_NAME', [to.name]);
  }

  next();
});
export default router;
