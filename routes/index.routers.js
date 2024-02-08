
const router = require('express').Router()

const mainPage = require('./views/main.router')
const animalsRouter = require('./views/animal.route');
const tarifRouter = require('./views/tarif.router')
const authRouter = require('./views/auth.router')

const authApiRouter = require('./api/api.auth.routes')
const animalApiRouter = require('./api/api.animal.router')
const tarifsApiRouter = require('./api/api.tarif.router')

router.use('/', mainPage)
router.use('/animals', animalsRouter);
router.use('/tarifs', tarifRouter);
router.use('/auth', authRouter)

router.use('/api/auth', authApiRouter)
router.use('/api/animals', animalApiRouter)
router.use('/api/tarifs', tarifsApiRouter)







module.exports = router

