const React = require('react');
const Layout = require('./Layout');
const Animal = require('./Animal');
const AnimalFormAdd = require('./AnimalFormAdd');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>
        <AnimalFormAdd/>
      <div className="animalsList">
        {animals.map((el) => <Animal animal={el} />)}
      </div>
    </Layout>

  );
}

module.exports = AnimalsList;
