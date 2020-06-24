const express = require('express')
const mongoose = require('mongoose')
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
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
module.exports = app
