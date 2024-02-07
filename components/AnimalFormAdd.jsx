const React = require('react');

function AnimalFormAdd({}) {
  return (
    <form className="addAnimal">
      <p>Добавление нового животного</p>
      <input name="img" placeholder="img" />
      <br />
      <input name="name" placeholder="name" />
      <br />
      <input name="description" placeholder="description" />
      <br />
      <button className="addAnimalButton">Добавить</button>
      <div className="errAnimal" />
    </form>
  );
}

module.exports = AnimalFormAdd;
