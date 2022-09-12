<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_autor: "",
      novo_obra: "",
      livros: [
        {
          id: "442e6fe2-e800-11ec-8fea-0242ac120002",
          autor: "Editora Rocco",
          obra: "Em Chamas",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.livros.push({
        id: id,
        autor: this.novo_autor,
        obra: this.novo_obra,
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
      <h2>Autores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="novo_autor" />
      <input type="text" placeholder="Nome" v-model="novo_obra" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autor</th>
            <th>Obra</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.obra }}</td>
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
