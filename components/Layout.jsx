const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ title, children}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/animals.css" />
        {/* <script defer src="/scripts/add.js" /> */}
        {/* <script defer src="/scripts/delete.js" /> */}
        {/* <script defer src="/scripts/update.js" /> */}
        {/* <script defer src="/scripts/auth.js" /> */}
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
};
