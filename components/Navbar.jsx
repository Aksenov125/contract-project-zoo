const React = require('react');


function Navbar({user}){
return(
  <nav className= 'navbar-main'>
    <div className='navbar'>
      <a className='gradient-button' href="/animals">Животные</a>
      <a className='gradient-button' href="/">Главная</a>
      <a className='gradient-button' href="/tarifs">Тарифы</a>
      {user && <a className='gradient-button' href="/auth/logout">Выйти</a> }
    </div>
    </nav>
)
}

module.exports = Navbar;
