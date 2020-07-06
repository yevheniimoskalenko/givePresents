const Base64 = require('js-base64').Base64
const sha1 = require('sha1')
const Pay = require('../model/pay.model')
const Tickets = require('../model/tickets.model')
require('dotenv').config()
module.exports = async (req, res) => {
  const { signature, data } = req.body
  const sign = Base64.encode(
    sha1(process.env.liqpayPriveteKey + data + process.env.liqpayPriveteKey)
  )
  if (signature !== sign) {
    const datas = JSON.parse(Base64.decode(data))
    const info = JSON.parse(Base64.decode(datas.dae))

    const pay = new Pay({
      amount: datas.amount,
      status: datas.status,
      id_order: info.id,
      departament: info.departament,
      ticket: info.ticket,
      phoneNumber: info.phoneNumber,
      residence: info.residence,
      payment_id: datas.payment_id,
      fullName: info.fullName
    })
    pay.save()
    console.log(info)
    await Tickets.updateOne({ _id: info.idTickets }, { $set: { isBuy: true } })
    return res.json('OK')
  }
}
