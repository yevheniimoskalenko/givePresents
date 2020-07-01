const { Router } = require('express')
const { create } = require('../controllers/reviews.controllers')
const router = Router()

router.post('create', create)

module.exports = router
