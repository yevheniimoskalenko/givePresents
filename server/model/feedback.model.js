const { Schema, model } = require('mongoose')

const feedback = Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  messages: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('Feedback', feedback)
