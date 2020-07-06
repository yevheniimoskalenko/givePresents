const { Router } = require('express')
const router = Router()
const create = require('../controllers/ticket.controllers')
router.post('/create', create)
module.exports = router
