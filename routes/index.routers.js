const router = require('express').Router();

const mainPage = require('./views/main.router');
const animalsRouter = require('./views/animal.route');
const animalAddApi = require('./api/animalAddApi');

router.use('/', mainPage);
router.use('/animals', animalsRouter);
router.use('/api/animals', animalAddApi);

module.exports = router;
