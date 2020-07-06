const { Router } = require('express')
const all = require('../controllers/all')
const result = require('../controllers/result')
const router = Router()
router.post('/all', all)
router.post('/result', result)
module.exports = router
