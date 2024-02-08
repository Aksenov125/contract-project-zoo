const React = require('react');
const Layout = require('./Layout');
const Animal = require('./AnimalCard');
const Navbar = require('./Navbar');
const AddFormItem = require('./AddFormItem');

function AnimalsList({ title, animals,user }) {
  return (
    <Layout title={title}>
      <Navbar user={user}></Navbar>
      <AddFormItem user={user}></AddFormItem>
      <div className="animalsList">
        {animals.map((el) => <Animal animal={el} user={user}/>)}
      </div>
    </Layout>

  );
}

module.exports = AnimalsList;
