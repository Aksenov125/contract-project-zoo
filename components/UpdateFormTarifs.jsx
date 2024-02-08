const React = require("react");
const Layout = require("./Layout");

function UpdateFormTarifs({ title, tarifs }) {
  return (
    <Layout title={title}>
      <div className="container">
        <form className="updateTarif form" data-id={tarifs.id}>
          <div className="subtitle">Изменение тарифа</div>
          <div className="input-container ic1">
            <input
              name="day"
              className="input"
              placeholder="img"
              defaultValue={tarifs.day}
            />
            <div className="cut" />
            <label className="placeholder">День</label>
          </div>
          <div className="input-container ic2">
            <input
              name="age"
              className="input"
              placeholder="name"
              defaultValue={tarifs.age}
            />
            <div className="cut" />
            <label className="placeholder">Возвраст</label>
          </div>
          <div className="input-container ic2">
            <input
              name="price"
              className="input"
              placeholder="description"
              defaultValue={tarifs.price}
            />
            <div className="cut" />
            <label className="placeholder">Цена</label>
          </div>
          <button className="UpdateAnimalButton submit">Изменить</button>
          <div className="errUpdateAnimal" />
        </form>
      </div>
    </Layout>
  );
}

module.exports = UpdateFormTarifs;
