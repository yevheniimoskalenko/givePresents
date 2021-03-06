const express = require('express')
const mongoose = require('mongoose')
const upload = require('express-fileupload')
const tickets = require('./routers/tickets.routes')
const reviews = require('./routers/reviews.routes')
const admin = require('./routers/admin.routes')
const order = require('./routers/order.routes')
const all = require('./routers/all.routes')
require('dotenv').config()
const app = express()
mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    /* eslint-disable no-console */
    console.log('connect has started...')
  })
app.use(upload({ useTempFiles: true }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tickets', tickets)
app.use('/api/reviews', reviews)
app.use('/api/admin', admin)
app.use('/api/order', order)
app.use('/api/', all)
module.exports = app
