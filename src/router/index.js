import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/HomePage";
import RecordPage from "../views/RecordPage";
import ColumnPage from "../views/ColumnPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "HomePage",
    component: homePage,
  },
  {
    path: "/RecordPage",
    name: "RecordPage",
    component: RecordPage,
  },
  {
    path: "/ColumnPage",
    name: "ColumnPage",

    component: ColumnPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
