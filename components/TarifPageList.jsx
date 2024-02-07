const React = require("react");
const Layout = require("./Layout");
const TarifPage = require("./TarifPage");
const Navbar = require("./Navbar");

function TarifPageList({tarifs}) {
  return (
    <Layout>
        <Navbar></Navbar>
     <div className="row">
        {tarifs.map((tarif) => (
            <TarifPage key={tarif.id} tarif={tarif}/>
        ))}
        </div>
       

    </Layout>
  );
}

module.exports = TarifPageList;