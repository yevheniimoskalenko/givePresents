const { Router } = require('express')
const { create, foto } = require('../controllers/order.controllers.js')
const router = Router()

router.post('/create', create)
router.post('/foto', foto)
module.exports = router
