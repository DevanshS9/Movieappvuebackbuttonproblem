import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
axios.defaults.baseURL =
  "http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json";
new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount("#app");
