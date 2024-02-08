const React = require('react');
const Layout = require('./Layout');

function AnimalItem({ animal, img}) {
  return (

      <img src={img.url} alt={animal.name}/>


      
  );
}

module.exports = AnimalItem;