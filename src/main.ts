import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
// デフォルトのテーマ
import "@splidejs/vue-splide/css";
// または、ほかのテーマ
// import "@splidejs/vue-splide/css/skyblue";
// import "@splidejs/vue-splide/css/sea-green";
// あるいは、コアスタイルのみ
// import "@splidejs/vue-splide/css/core";

createApp(App).use(VueSplide).mount("#app");
