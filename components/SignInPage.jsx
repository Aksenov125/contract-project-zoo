const React = require("react");
const Layout = require("./Layout");

function SignInPage() {
  return (
    <Layout>
      <div className="row">
    <form className="col s12 sign-in">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Имя" id="first_name" type="text" name='name'className="validate"/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Пароль" id="first_name" type="password" name="password" className="validate"/>
        </div>
      </div>
      <button class="waves-effect waves-light btn-small">Войти</button>
    </form>
  </div>
      
    </Layout>
  );
}

module.exports = SignInPage;
