const { Router } = require('express')
const { create, verefy } = require('../controllers/reviews.controllers')
const router = Router()

router.post('/create', create)
router.post('/verefy', verefy)

module.exports = router
