import "@/css/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
