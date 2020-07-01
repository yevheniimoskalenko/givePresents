const { Schema, model } = require('mongoose')

const pay = new Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    phoneNumber: {
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

module.exports = model('Pay', pay)
