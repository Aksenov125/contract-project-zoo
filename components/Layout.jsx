const React = require("react");
const Navbar = require("./Navbar");
const AnimationItem = require("./AnimationsItem");

module.exports = function Layout({ title, children}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100" ></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"/>
        
        <link rel="stylesheet" href="/styles/animals.css" />
        <link rel="stylesheet" href="/styles/tarif.css" />
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/custom.css" />
        <link rel="stylesheet" href="/styles/mainPage.css" />
        <link rel="stylesheet" href="/styles/animatoinBg.css" />
        <link rel="stylesheet" href="/styles/animal.css" />
        <link rel="stylesheet" href="/styles/formadd.css" />
        <link rel="stylesheet" href="/styles/descriptionAnimals.css" />

        

        

        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/slider.js" />
        <script defer src="/scripts/updateTarif.js" />

      </head>
      <body>
        {/* <Navbar/> */}
        <AnimationItem></AnimationItem>
        {children}
      </body>
    </html>
  );
};
