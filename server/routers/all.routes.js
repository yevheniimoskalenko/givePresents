const { Router } = require('express')
const all = require('../controllers/all')
const router = Router()
router.post('/all', all)
module.exports = router
