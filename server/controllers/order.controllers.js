const fs = require('fs')
const cloudinary = require('cloudinary').v2
const Order = require('../model/order.model')
const Tickets = require('../model/tickets.model')
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
    const tickets = await Tickets.find({ id_order: id })

    return res.json({ order, tickets })
  } catch (e) {
    return res.json(e)
  }
}
