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
          id: "442e6fe2-e800-11ec-8fea-0242ac120002",
          livro: "Em Chamas",
          afiliacao: "Suzanne Collins",
          acao: "Editora Rocco",
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
        afiliacao: this.novo_autor,
        acao: this.novo_editora,
      });
    },

    excluir(jogador) {
      const indice = this.livros.indexOf(jogador);
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
      <select class="form-select" id="form" aria-label="Default select example">
        <option selected>Categorias</option>
        <option value="1">Terror</option>
        <option value="2">Ação</option>
        <option value="3">Fantasia</option>
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
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.livro }}</td>
            <td>{{ livro.afiliacao }}</td>
            <td>{{ livro.acao }}</td>
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

<style scoped></style>
