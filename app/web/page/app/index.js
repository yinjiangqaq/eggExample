import Vue from "vue";
import store from "@store";
import "@assets/css/global.css";
import 'element-ui/lib/theme-chalk/index.css';
import router from "@router";
import App from "./App.vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

const clientRender = () => {
  new Vue({
    el: "#app",
    store,
    router,
    render: (h) => h(App),
  });
};

export default clientRender();
