const React = require("react");
const Layout = require("./Layout");
const TarifPage = require("./TarifPage");
const Navbar = require("./Navbar");

function TarifPageList({tarifs, user}) {
  return (
    <Layout>
        <Navbar user={user}></Navbar>
     <div className="row">
        {tarifs.map((tarif) => (
            <TarifPage key={tarif.id} tarif={tarif} user={user}/>
        ))}
        </div>
       

    </Layout>
  );
}

module.exports = TarifPageList;