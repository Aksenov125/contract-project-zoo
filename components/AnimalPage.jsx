const React = require("react");
const Layout = require("./Layout");
const AnimalItem = require("./AnimalItem");
const Navbar = require("./Navbar");

function AnimalPage({ title, animal, user }) {
  return (
    <Layout title={title}>
      <Navbar user={user}></Navbar>
      <div className="sizee">
      <div class="slider-container card">
        <div class="slider">
          {animal.Imgs.map((img) => (
            <AnimalItem img={img} animal={animal}></AnimalItem>
          ))}
        </div>
        <button class="prev-button" aria-label="Посмотреть предыдущий слайд">
          &lt;
        </button>
        <button class="next-button" aria-label="Посмотреть следующий слайд">
          &gt;
        </button>
        <div className="card-content">
        <h3>{animal.name}</h3>
        <p>{animal.description}</p>
      </div>
        </div>
        </div>
         

    </Layout>
  );
}

module.exports = AnimalPage;
