import Home from "../pages/IndexPage.vue";
import MovieDetails from "../pages/MovieDetails.vue";
import SearchPage from "../pages/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: MovieDetails,
  },
  {
    path: "/search",
    name: "SearchResults",
    component: SearchPage,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/ErrorNotFound.vue"),
  },
];

export default routes;
