import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueMq from "vue-mq";
import "./styles/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far);

Vue.component("fa", FontAwesomeIcon);

Vue.use(VueMq, {
  defaultBreakpoint: "default",

  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xx: Infinity,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
