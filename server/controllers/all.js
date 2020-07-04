const Order = require('../model/order.model')
module.exports = async (req, res) => {
  const order = await Order.find({ isWork: true })
  return res.json(order)
}
