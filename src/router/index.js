import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import SearchMovie from "@/components/SearchMovie";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      props: true,
      component: Home,
      children: [
        {
          name: "SearchMovie",
          path: "/search/:name",
          props: true,
          component: SearchMovie,
        },
      ],
    },
    {
      path: "/movie/:id",
      name: "Movie",
      props: true,
      component: Movie,
    },
  ],
  mode: "history",
});
