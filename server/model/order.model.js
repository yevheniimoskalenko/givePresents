const { Schema, model } = require('mongoose')

const order = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    countTickets: {
      type: String,
      required: true
    },
    urlImages: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
)
module.exports = model('Order', order)
