const React = require("react");
const Layout = require("./Layout");
const Navbar = require("./Navbar");

function MainPage({user, title}) {
  return (
    <Layout title={title}>
      
      <div className="bg2">
      <Navbar user={user}></Navbar>
        <div className="blog-card spring-fever">
          <div className="title-content">
            <h3>
              <a href="#">Добро пожаловать в Урюпинский зоопарк</a>
            </h3>
            <div className="intro"> </div>
          </div>
          <div className="card-info">
            Это место, где мечты о животном царстве становятся реальностью!
            Расположенный в самом сердце Урюпинска, на берегу живописной реки
            Воронеж, этот зоопарк предлагает уникальную возможность окунуться в
            захватывающий мир дикой природы. Широкая и разнообразная коллекция
            животных в Урюпинском зоопарке не оставит равнодушными никого. Здесь
            вы сможете встретить множество экзотических и редких представителей
            фауны со всех уголков планеты. От поразительных тигров и львов до
            экзотических птиц и рептилий, каждое посещение зоопарка станет
            настоящим путешествием по разным континентам.
          </div>
          <div className="utility-info"></div>
          <div className="gradient-overlay"></div>
          <div className="color-overlay"></div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
