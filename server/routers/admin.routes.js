const { Router } = require('express')
const router = Router()
const jwt = require('express-jwt')
require('dotenv').config()
const { auth, create, user } = require('../controllers/admin.contrllers')
router.post('/create', create)
router.post('/auth', auth)
router.get('/user', jwt({ secret: process.env.jwtsecret }), user)

module.exports = router
