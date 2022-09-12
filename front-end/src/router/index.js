import { createRouter, createWebHistory } from "vue-router";
import PerfilView from "../views/LoginView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import LivrosView from "../views/LivrosView.vue";
import HomeView from "../views/HomeView.vue";
import AutoresView from "../views/AutoresView.vue";
import EditorasView from "../views/EditorasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: PerfilView,
    },

    {
      path: "/Categorias",
      name: "Categoria",
      component: CategoriaView,
    },

    {
      path: "/Livros",
      name: "Livros",
      component: LivrosView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Autores",
      name: "Autores",
      component: AutoresView,
    },
    {
      path: "/Editoras",
      name: "Editoras",
      component: EditorasView,
    },
  ],
});
export default router;
