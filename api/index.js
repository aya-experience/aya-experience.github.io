const Router = require('express').Router
const prismic = require('./prismic')
const router = Router()

router.use(prismic)

module.exports = router
