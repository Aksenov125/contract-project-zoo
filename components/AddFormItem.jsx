const React = require('react')

function AddFormItem (){
    return (
        <form class="horizontal-form">
  <div class="form-group">
    <label for="input1">Поле 1:</label>
    <input type="text" id="input1" name="input1"/>
  </div>
  <div class="form-group">
    <label for="input2">Поле 2:</label>
    <input type="text" id="input2" name="input2"/>
  </div>
  <div class="form-group">
    <label for="input3">Поле 3:</label>
    <input type="text" id="input3" name="input3"/>
  </div>
  <button type="submit">Добавить</button>
</form>

    )
}

module.exports = AddFormItem