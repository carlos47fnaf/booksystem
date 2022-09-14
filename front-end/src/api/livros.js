import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("http://localhost:4000/books");
    return response.data;
  }

  async buscarLivro(id) {
    const response = await axios.get(`http://localhost:4000/books/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("http://localhost:4000/books", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`http://localhost:4000/books/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `http://localhost:4000/books/${livro.id}`,
      livro
    );
    return response.data;
  }
}