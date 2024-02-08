const React = require("react");
const Layout = require("./Layout");

function AnimalItem({ animal, img }) {
  return (
    <>
      <img className="card-image" src={img.url} alt={animal.name} />
    </>
  );
}

module.exports = AnimalItem;
