<template>
  <header class="menu-superior">
    <div class="cl">
      <span><RouterLink to="/">Home</RouterLink></span>
    </div>
    <div class="up">
      <span><RouterLink to="/Livros">Livros</RouterLink></span>
      <span><RouterLink to="/Editoras">Editoras</RouterLink></span>
      <span><RouterLink to="/Categorias">Categorias</RouterLink></span>
      <span><RouterLink to="/Autores">Autores</RouterLink></span>
    </div>
    <div class="pesquisar">
      <input class="pesquisar" type="text" placeholder="Pesquisar..." />
      <button class="p_b">P</button>
    </div>
    <div class="sair">
      <RouterLink to="/login">Sair</RouterLink>
    </div>
  </header>
</template>

<style scooped>
header .menu-superior {
  justify-content: space-between;
  display: flex;
  align-items: center;
  float: left;
}
a {
  text-decoration: none;
}
a:hover {
  color: rgb(223, 223, 223);
}
.cl {
  display: flex;
  align-items: center;
  float: left;
}

header span {
  padding: 0 20px;
}

.sair {
  margin-left: 64px;
}
.pesquisar {
  padding-right: 80px;
  margin-left: 10px;
  border: 1px solid;
  border-radius: 5px;
  width: 500px;
  height: 30px;
  font-size: 15px;
}
.p_b {
  margin-left: 10px;
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
}
</style>
