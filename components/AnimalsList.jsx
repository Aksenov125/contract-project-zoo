const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalCard');
const Navbar = require('./Navbar');
const AddFormItem = require('./AddFormItem');

function AnimalsList({ title, animals }) {
  return (
    <Layout title={title}>
      <Navbar></Navbar>
      <AddFormItem></AddFormItem>
      <div className="animalsList">
        {animals.map((el) => <Animal animal={el} />)}
      </div>
    </Layout>

  );
}

module.exports = AnimalsList;
