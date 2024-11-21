// const routes = [
//   {
//     path: "/",
//     component: () => import("layouts/MainLayout.vue"),
//     children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: "/:catchAll(.*)*",
//     component: () => import("pages/ErrorNotFound.vue"),
//   },
// ];

import Home from "../pages/IndexPage.vue";
import MovieDetails from "../pages/MovieDetails.vue";
import SearchPage from "../pages/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // children: [{ path: "", component: () => import("../pages/IndexPage.vue") }],
  },

  { path: "/movie/:id", name: "MovieDetails", component: MovieDetails },
  { path: "/search", name: "SearchResults", component: SearchPage },

  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/ErrorNotFound.vue"),
  },
];

export default routes;
