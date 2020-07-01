const { Schema, model } = require('mongoose')

const person = new Schema({
  fullname: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  departament: {
    type: Number,
    required: true
  },
  id_tickets: {
    type: Schema.Types.ObjectId,
    ref: 'Tickets'
  }
})
module.exports = model('Person', person)
