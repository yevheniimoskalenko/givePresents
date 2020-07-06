const LiqPay = require('liqpayjs-sdk')
const Ticket = require('../model/tickets.model')
const Base64 = require('js-base64').Base64
require('dotenv').config()
module.exports = async (req, res) => {
  const {
    fullName,
    residence,
    phoneNumber,
    departament,
    ticket,
    id,
    title,
    idTickets
  } = req.body
  const order = await Ticket.findOne({ id_order: id })
  if (order.isBuy === false) {
    const user = Base64.encode(
      JSON.stringify({
        fullName,
        residence,
        phoneNumber,
        departament,
        ticket,
        id,
        idTickets
      })
    )
    const liqpay = new LiqPay(
      process.env.liqpayPublicKey,
      process.env.liqpayPriveteKey
    )
    const html = liqpay.cnb_form({
      action: 'pay',
      amount: 15,
      currency: 'UAH',
      description: `Придбання квитка № - ${ticket} - ${title}`,
      order_id: `${ticket}-${id}`,
      version: '3',
      dae: user
    })
    return res.json(html)
  } else {
    return res.json({ message: 'Квиток уже був придбаний раніше' })
  }
}
