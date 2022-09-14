import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("http://localhost:4000/authors");
    return response.data;
  }

  async buscarAutores(id) {
    const response = await axios.get(`http://localhost:4000/authors/${id}`);
    return response.data;
  }

  async adicionarAutores(autores) {
    const response = await axios.post("http://localhost:4000/authors", autores);
    return response.data;
  }

  async excluirAutores(id) {
    const response = await axios.delete(`http://localhost:4000/authors/${id}`);
    return response.data;
  }

  async atualizarAutores(autores) {
    const response = await axios.put(
      `http://localhost:4000/authors/${autores.id}`,
      autores
    );
    return response.data;
  }
}
