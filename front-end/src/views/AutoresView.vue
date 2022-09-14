<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      await autoresApi.adicionarAutores(this.autor);
      this.autor = {};
      this.autores= await autoresApi.buscarTodosOsAutores();
    },

    async excluir(autor) {
      await editorasApi.excluirAutor(autor.id);
      this.autores= await autoresApi.buscarTodosOsAutores();
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Autores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="autor.authors" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autor</th>
            <th>ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.authors }}</td>
            <td>
              <button @click="excluir(autor)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
