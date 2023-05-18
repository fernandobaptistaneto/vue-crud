import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsuarioView from "../views/Usuario/View.vue";
import UsuarioCreate from "../views/Usuario/Create.vue";
import UsuarioEdit from "../views/Usuario/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: UsuarioView,
    },
    {
      path: "/usuarios/create",
      name: "usuariosCreate",
      component: UsuarioCreate,
    },
    // {
    //   path: "/usuarios/:id_usuario/edit",
    //   name: "usuariosEdit",
    //   component: UsuarioEdit,
    // },
  ],
});

export default router;
