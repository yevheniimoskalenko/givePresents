const { Schema, model } = require('mongoose')

const tickets = new Schema({
  numberTickets: {
    type: Number,
    required: true
  },
  id_order: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  },
  isBuy: {
    type: Boolean,
    default: false
  },
  id_person: {
    type: Schema.Types.ObjectId,
    ref: 'Person'
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('Tickets', tickets)
