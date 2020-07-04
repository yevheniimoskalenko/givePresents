const Order = require('../model/order.model')
const Reviews = require('../model/reviews.model')
module.exports = async (req, res) => {
  const order = await Order.find({ isWork: true })
  const reviews = await Reviews.find()
    .sort({ date: -1 })
    .limit(3)
  return res.json({ order, reviews })
}
