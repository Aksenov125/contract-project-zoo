const React = require('react');


function Navbar({}){
return(
  <nav className= 'navbar-main'>
    <div className='navbar'>
      <a className='gradient-button' href="/animals">Животные</a>
      <a className='gradient-button' href="/tarifs">Тарифы</a>
    </div>
    </nav>
)
}

module.exports = Navbar;
