const React = require('react');

function Navbar({}) {
  return (
    <div className="navbar">
      <a href="/animals">Животные</a>
      <a href="/tarifs">Тарифы</a>
    </div>
  );
}

module.exports = Navbar;
