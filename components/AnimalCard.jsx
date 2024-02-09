const React = require("react");

function AnimalCard({ animal, user }) {
  
  return (
    <div className="card">
      <img className="card-image" src={animal.Imgs[0]?.url} alt="Животное" />
      <div className="card-content">
        <h3 className="text--size">{animal.name}</h3>
        <a className="btn-podrobnee" href={`/animals/${animal.id}/animal`}>
          Подробнее
        </a>

        {user && (
          <>
            <a
              className="updateButton btn-podrobnee"
              href={`/animals/${animal.id}/formUpdate`}
            >
              Изменить
            </a>
            <button className="delete-button delete" data-id={animal.id}>
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = AnimalCard;
