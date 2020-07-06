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
    id_order: {
      type: Schema.Types.ObjectId,
      ref: 'order'
    },
    residence: { type: String, required: true },
    payment_id: {
      type: Number,
      required: true
    },
    departament: {
      type: Number,
      required: true
    },
    ticket: {
      type: Number,
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
