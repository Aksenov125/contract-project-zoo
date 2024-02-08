const React = require("react");
const Layout = require("./Layout");

function SignInPage() {
  return (
    <Layout>
      <div className="container">
      <form className="sign-in">
<div class="form">
  <div class="subtitle">Вход</div>
  <div class="input-container ic1">
    <input id="firstname" class="input" type="text" name="name" placeholder=" " />
    <div class="cut"></div>
    <label for="firstname" class="placeholder">Имя</label>
  </div>
  <div class="input-container ic2">
    <input id="lastname" class="input" type="text" name="password" placeholder=" " />
    <div class="cut"></div>
    <label for="lastname" class="placeholder">Пароль</label>
  </div>
  <button type="text" class="submit">Войти</button>
  <div className="subtitle errtextIn"></div>
</div>
</form>
</div>
      
    </Layout>
  );
}

module.exports = SignInPage;
