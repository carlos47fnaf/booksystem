<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      await editorasApi.adicionarEditora(this.editora);
      this.editora = {};
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },

    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
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
      <input type="text" placeholder="Nome" v-model="editora.editors" /> 
      <input type="text" placeholder="Nome" v-model="editora.site" />
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
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.editors}}</td>
            <td>{{ editora.site }}</td>
            <td>
              <button @click="excluir(editora)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
