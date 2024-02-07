
const router = require('express').Router()

const mainPage = require('./views/main.router')
const animalsRouter = require('./views/animal.route');

router.use('/', mainPage)
router.use('/animals', animalsRouter);




module.exports = router

