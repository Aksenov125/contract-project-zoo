const React = require("react");
const Layout = require("./Layout");
function SignUpPage() {
  return (
    <Layout>
      <div className="container">
      <form className="sign-up">
<div class="form">
  <div class="subtitle">Создайте аккаунт Администратора</div>
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
  <div class="input-container ic2">
    <input id="lastname" class="input" type="text" name="password2" placeholder=" " />
    <div class="cut"></div>
    <label for="lastname" class="placeholder">Повторите пароль</label>
  </div>
  <div class="input-container ic2">
    <input id="email" class="input" type="text" name="email" placeholder=" " />
    <div class="cut cut-short"></div>
    <label for="email" class="placeholder">Email</label>
  </div>
  <button type="text" class="submit">Зарегистрироваться</button>
</div>
</form>
</div>
    </Layout>
  );
}
module.exports = SignUpPage;
