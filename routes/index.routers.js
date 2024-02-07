
const router = require('express').Router()

const mainPage = require('./views/main.router')
const animalsRouter = require('./views/animal.route');
const tarifRouter = require('./views/tarif.router')

router.use('/', mainPage)
router.use('/animals', animalsRouter);
router.use('/tarifs', tarifRouter);




module.exports = router

