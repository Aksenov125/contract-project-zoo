const React = require('react');
const Layout = require('./Layout');

function AnimalItem({ animal}) {
  return (
    <div className="card" > 
        <img className="card-image" src={animal.picture} alt="Животное"/>
        <div className="card-content">
            <h3>{animal.name}</h3>
        </div>
    </div>
  );
}

module.exports = AnimalItem;