const React = require('react');

function Animal({ animal }) {
  return (
    <div className="animalCard">
      <div className="animalImg">
        <img className='solo-photo' src={animal.picture} alt="" />
      </div>
      <h2>{animal.name}</h2>
      <h3>{animal.description}</h3>
    </div>

  );
}

module.exports = Animal;
