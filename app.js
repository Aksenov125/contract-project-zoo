require('@babel/register'); //
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');

const getUser = require("./middleware/getUser");

const indexRouter = require("./routes/index.routers");
const ssr = require("./middleware/ssr");

const { verifyAccessToken } = require("./middleware/verifyJWT");

const PORT = 4000;
const app = express();

app.use(cookieParser()); // jwt должен быть ниже// раскрывает cookie на сервере
app.use(express.urlencoded({ extended: 'true' })); // //middleware должны быть над routes
app.use(express.json()); // при использовании fetch раскрываем undefined из body
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr); // без вызова, так как express сам вызовет ф-ю и сам вызовет ф-ю next() lдля выполнения следующей middleware
app.use(verifyAccessToken);
app.use(getUser)

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Принимаем и отдаем на ${PORT} порту`);
}); 3;
