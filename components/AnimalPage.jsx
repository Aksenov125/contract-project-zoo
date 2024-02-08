const React = require("react");
const Layout = require("./Layout");
const AnimalItem = require("./AnimalItem");

function AnimalPage({ title, animal }) {
  return (
    <Layout title={title}>
      <div class="slider-container">
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
      </div>
    </Layout>
  );
}

module.exports = AnimalPage;
