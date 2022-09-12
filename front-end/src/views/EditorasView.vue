<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_site: "",
      novo_editora: "",
      livros: [
        {
          id: "442e6fe2-e800-11ec-8fea-0242ac120002",
          acao: "Editora deez nut",
          site: "https://www.deez.nut.org/",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.livros.push({
        id: id,
        acao: this.novo_editora,
        site: this.novo_site,
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
      <h2>Editoras</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="novo_editora" />
      <input type="text" placeholder="Nome" v-model="novo_site" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Editora</th>
            <th>Site</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.acao }}</td>
            <td>{{ livro.site }}</td>
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
