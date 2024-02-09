const React = require('react');
const Layout = require('./Layout');

function AnimalFormUpdate({ title, animal }) {
  return (
    <Layout title={title}>
      <div className="container">
        <form className="updateAnimal form" data-id={animal.id} data-img={animal.Imgs}>
          <div className="subtitle">Изменение животного</div>
          {/* <div className="input-container ic1">
            <input name="picture" className="input" placeholder="img" defaultValue={animal.Imgs} type='file' multiple  />
            <div className="cut" /> */}
            {/* <label className="placeholder">Фото</label>
          </div> */}
          <div className="input-container ic2">
            <input name="name" className="input" placeholder="name" defaultValue={animal.name} />
            <div className="cut" />
            <label className="placeholder">Имя животного</label>
          </div>
          <div className="input-container ic2">
            <input name="description" className="input" placeholder="description" defaultValue={animal.description} />
            <div className="cut" />
            <label className="placeholder">Описание</label>
          </div>
          <button className="UpdateAnimalButton submit">Изменить</button>
          <div className="errUpdateAnimal" />
        </form>
      </div>

    </Layout>
  );
}

module.exports = AnimalFormUpdate;
