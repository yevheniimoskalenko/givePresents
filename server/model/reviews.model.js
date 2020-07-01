const { Schema, model } = require('mongoose')

const reviews = new Schema({
  fullName: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('Reviews', reviews)
