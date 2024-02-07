const React = require("react");

module.exports = function Layout({ title, children, user}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <script defer src="/scripts/add.js" /> */}
        {/* <script defer src="/scripts/delete.js" /> */}
        {/* <script defer src="/scripts/update.js" /> */}
        {/* <script defer src="/scripts/auth.js" /> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
