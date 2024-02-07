const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ title, children}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>

        <link rel="stylesheet" href="/styles/animals.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900" />
        
        
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/custom.css" />
        <link rel="stylesheet" href="/styles/mainPage.css" />

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
