<script>
import livrosApi from "@/api/livros.js";
const LivrosApi = new livrosApi();
export default {
  data() {
    return {
      livro: {},
      livros: [],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
  },
  methods: {
    async salvar() {
      await livrosApi.adicionarLivro(this.livro);
      this.categoria = {};
      this.livros = await livrosApi.buscarTodosOsLivros();
    },

    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Classificação de livros</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="livro.book" />
      <input type="text" placeholder="Nome" v-model="livro.autor" />
      <input type="text" placeholder="Nome" v-model="livro.editora" />
      
    </div>
    <div>
      <select class="form-select" id="form" aria-label="Default select example" v-model="livro.categoria">
        <option selected>Categoria</option>
        <option value="1">Terror</option>
        <option value="2">Ação</option>
        <option value="3">Fantasia</option>
      </select>
    </div><button @click="salvar">Salvar</button>
    <div class="list-livro">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Livro</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.book }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.editora}}</td>
            <td>{{ livro.categoria }}</td>
            <td>
              <button @click="excluir(livro)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
