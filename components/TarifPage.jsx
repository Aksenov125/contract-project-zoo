const React = require("react");

function TarifPage({ tarif, user }) {
  return (
    <>
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front-1">
            <div className="card__title card__title--1">
              <i className="fas fa-paper-plane"></i>
              <h4 className="card__heading">{tarif.day}</h4>
            </div>

            <div className="card__details">
              <ul>
                <li>{tarif.age}</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">{tarif.day}</p>
                <p className="card__price-value">{tarif.price}</p>
              </div>
              <a href="#popup" className="btn btn--white">
                Купить
              </a>
            {user && (<a href={`/tarifs/${tarif.id}`} className="btn btn--white">
                Изменить
              </a>) }  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

module.exports = TarifPage;
