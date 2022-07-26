import { createApp } from "vue";
import App from "./App.vue";
import router from "@router";
import store from "@store";

// common style
import "@style/style.scss";

// maska
import Maska from "maska";

// PerfectScrollbar
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Maska)
  .use(PerfectScrollbar)
  .mount("#app");
