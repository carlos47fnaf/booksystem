<script></script>

<template>
  <main>
    <div class="titulo"><h2>Login</h2></div>
    <div class="container">
      <div class="pessoal">
        <p id="name" class="name"></p>
        <form class="form-">
          <span id="email" class="email"></span>
          <input
            type="text"
            id="nome"
            class="form-control"
            placeholder="Nome"
            required
            autofocus
          />
          <input
            type="password"
            id="senha"
            class="form-control"
            placeholder="Senha"
            required
          />
          <div id="remember" class="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Lembre-se de mim
            </label>
            <div class="cadrastro">
              <a href="#" class="forgot-password">
                Não tem Login? Cadastre-se!
              </a>
            </div>
          </div>
          <button class="btn" type="submit">
            <RouterLink to="/">Entar</RouterLink>
          </button>
        </form>
        <a href="#" class="forgot-password"> Esqueceu a senha? </a>
      </div>
    </div>
  </main>
</template>
<style scooped>
.titulo h2 {
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
body,
html {
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient white;
}

.pessoal {
  width: 350px;
  padding: 30px 30px;
}

.btn {
  font-weight: 700;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.pessoal {
  background-color: #f7f7f7;
  padding: 10px 15px 50px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.name {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
}

.email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form- #inputEmail,
.form- #inputPassword {
  direction: ltr;
  height: 44px;
  font-size: 16px;
}

.form- input[type="email"],
.form- input[type="password"],
.form- input[type="text"],
.form- button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form- .form-control:focus {
  border-color: rgb(0, 0, 0);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 0, 0);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(0, 0, 0);
}

.btn {
  background-color: rgb(0, 0, 0);
  padding: 0px;
  font-weight: 700;
  font-size: 14px;
  height: 36px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: none;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
  color: aliceblue;
}

.btn:hover,
.btn:active,
.btn:focus {
  background-color: rgb(255, 255, 255);
  color: black;
}

.forgot-password {
  color: rgb(61, 61, 61);
}

.forgot-password:hover,
.forgot-password:active,
.forgot-password:focus {
  color: rgb(0, 0, 0);
}
</style>
