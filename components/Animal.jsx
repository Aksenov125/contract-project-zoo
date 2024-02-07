const React = require("react");

function Animal({ animal }) {
  return (
<div className="card">
        <img className="card-image" src={animal.picture} alt="Животное"/>
        <div className="card-content">
            <h3>{animal.name}</h3>
            <a href="">button</a>
        </div>
    </div>
  );
}

module.exports = Animal;
