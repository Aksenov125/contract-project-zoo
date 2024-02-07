const router = require('express').Router()

const mainPage = require('./views/main.router')


router.use('/', mainPage)




module.exports = router