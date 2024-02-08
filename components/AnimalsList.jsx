const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalCard');
const Navbar = require('./Navbar');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>
      <Navbar></Navbar>
      <div className="animalsList">
        {animals.map((el) => <Animal animal={el} />)}
      </div>
    </Layout>

  );
}

module.exports = AnimalsList;
