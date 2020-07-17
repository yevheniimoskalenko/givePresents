const fs = require('fs')
const cloudinary = require('cloudinary').v2
const Order = require('../model/order.model')
const Tickets = require('../model/tickets.model')
const Pay = require('../model/pay.model')
const list = require('./module/tickets')
require('dotenv').config()
module.exports.create = async (req, res) => {
  const { title, description, tickets, uload } = req.body
  const order = new Order({
    title,
    description,
    countTickets: tickets,
    urlImages: uload
  })
  await order.save()
  await Tickets.insertMany(list(order.countTickets, order._id))
  return res.json({
    status: 'success'
  })
}
module.exports.foto = async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.cloudName,
    api_key: process.env.cloudAPI,
    api_secret: process.env.cloudSicret
  })
  const { file } = req.files
  await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    if (err) {
      return res.json(err)
    }
    fs.unlinkSync(file.tempFilePath)
    return res.json(result)
  })
}
module.exports.fetchId = async (req, res) => {
  const { id } = req.params
  try {
    const order = await Order.findById(id)
    const tickets = await Tickets.find({ id_order: id }).sort({
      numberTickets: 1
    })

    return res.json({ order, tickets })
  } catch (e) {
    return res.json(e)
  }
}

module.exports.findUser = async (req, res) => {
  const { user } = req.body
  try {
    await Pay.find(
      {
        fullName: { $regex: user, $options: 'i' }
      },
      {
        amount: 0,
        departament: 0,
        phoneNumber: 0,
        residence: 0,
        payment_id: 0,
        isWork: 0
      }
    )
      .populate('id_order', 'title')
      .exec((error, post) => {
        if (error) {
          console.log(error)
        }
        return res.json(post)
      })
  } catch (e) {
    return res.json(e)
  }
}
