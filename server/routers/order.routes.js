const { Router } = require('express')
const {
  create,
  foto,
  fetchId,
  findUser
} = require('../controllers/order.controllers.js')
const router = Router()

router.post('/create', create)
router.post('/foto', foto)
router.post('/findUser', findUser)
router.get('/fetchId/:id', fetchId)
module.exports = router
