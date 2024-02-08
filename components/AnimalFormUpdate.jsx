const React = require('react');
const Layout = require('./Layout');

function AnimalFormUpdate({title, animal}) {
  return (
    <Layout title={title}>
      <form className="updateAnimal" data-id={animal.id}>
        <p>Изменение животного</p>
        <input name="picture" placeholder="img" defaultValue={animal.picture} />
        <br />
        <input name="name" placeholder="name" defaultValue={animal.name} />
        <br />
        <input name="description" placeholder="description" defaultValue={animal.description} />
        <br />
        <button className="UpdateAnimalButton">Изменить</button>
        <div className="errUpdateAnimal" />
      </form>
    </Layout>
  );
}

module.exports = AnimalFormUpdate;
