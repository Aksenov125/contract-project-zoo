const React = require('react');

function AddFormItem({user}) {
  return (
    <>
   {user && ( <form className="horizontal-form addAnimal">
   <div className="form-group">
     <label htmlFor="input1">Название животного:</label>
     <input name="name" />
   </div>
   <div className="form-group">
     <label htmlFor="input2">Фото животного:</label>
     <input name="picture" type='file' multiple />
   </div>
   <div className="form-group">
     <label htmlFor="input3">Описание животного:</label>
     <input name="description" />
   </div>
   <button className="addAnimalButton">Добавить</button>
   <div className="errAnimal" />
 </form>)} 
 </>

  );
}

module.exports = AddFormItem;
