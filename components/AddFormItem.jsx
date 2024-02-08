const React = require('react');

function AddFormItem({}) {
  return (
    <form className="horizontal-form addAnimal">
      <div className="form-group">
        <label htmlFor="input1">Название животного:</label>
        <input name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="input2">Фото животного:</label>
        <input name="picture" />
      </div>
      <div className="form-group">
        <label htmlFor="input3">Описание животного:</label>
        <input name="description" />
      </div>
      <button className="addAnimalButton">Добавить</button>
      <div className="errAnimal" />
    </form>

  );
}

module.exports = AddFormItem;
