<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      await categoriasApi.adicionarCategoria(this.categoria);
      this.categoria = {};
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },

    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Categoria</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="categoria.description" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.description }}</td>
            <td>
              <button @click="excluir(categoria)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
