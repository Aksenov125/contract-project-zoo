const React = require('react');
const Layout = require('./Layout');
const Animal = require('./Animal');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>
      <div className="animalsList">
        {animals.map((el) => <Animal animal={el} />)}
      </div>
    </Layout>

  );
}

module.exports = AnimalsList;
