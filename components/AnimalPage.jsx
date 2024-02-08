const React = require('react');
const Layout = require('./Layout');
const AnimalItem = require('./AnimalItem');


function AnimalPage({ title, animal }) {
  return (
    <Layout title={title}>
        
<AnimalItem animal={animal}></AnimalItem>

    </Layout>

  );
}

module.exports = AnimalPage;
