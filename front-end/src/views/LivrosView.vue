<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_livro: " ",
      novo_autor: "",
      novo_editora: "",
      novo_categoria: "",
      livros: [
        {
          id: "093f8gt5-e800-11ec-8fea-0137pd940758",
          livro: "as cronicas de adolf",
          autor: "Sus von rich",
          editora: "NZ",
          categoria:"ação"
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.livros.push({
        id: id,
        livro: this.novo_livro,
        autor: this.novo_autor,
        editora: this.novo_editora,
        categoria: this.novo_categoria,
      });
    },

    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
    alerta() {
      alert("ok");
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
      <input type="text" placeholder="Nome" v-model="novo_livro" />
      <input type="text" placeholder="Nome" v-model="novo_autor" />
      <input type="text" placeholder="Nome" v-model="novo_editora" />
      <button @click="salvar">Salvar</button>
    </div>
    <div>
      <select class="form-select" id="form" aria-label="Default select example" v-model="novo_categoria">
        <option selected>Categorias</option>
        <option value="terror">Terror</option>
        <option value="ação">Ação</option>
        <option value="fantasia">Fantasia</option>
      </select>
    </div>
    <div class="list-livro">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Livro</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>categoria</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.livro }}</td>
            <td>{{livro.autor}}</td>
            <td>{{ livro.editora }}</td>
            <td>{{ livro.categoria}}</td>
            <th></th>
            <td>
              <button @click="alerta">Editar</button>
              <button @click="excluir">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>
