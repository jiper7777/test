import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

export const eventBus = new Vue({
  data() {
    return {
      index: 0,
      completed: false,
      editedIndex: 0,
      editedTask: '',
      list: []
    };
  }
});

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
