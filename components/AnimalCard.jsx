const React = require("react");

function AnimalCard({ animal }) {
  return (
<div className="card">
        <img className="card-image" src={animal.picture} alt="Животное"/>
        <div className="card-content">
            <h3>{animal.name}</h3>
            <a href={`/animals/${animal.id}`}>Подробнее</a>
            <button className="delete" data-id={animal.id}>Удалить</button>
        </div>
    </div>
  );
}

module.exports = AnimalCard;