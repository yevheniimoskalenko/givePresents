const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose
  .connect(
    'mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    /* eslint-disable no-console */
    console.log('connect has started...')
  })
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
module.exports = app
