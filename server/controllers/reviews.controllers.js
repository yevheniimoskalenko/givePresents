const axios = require('axios')
const Reviews = require('../model/reviews.model')
require('dotenv').config()
module.exports.create = async (req, res) => {
  const { fullName, avatar, rate, text, email, id } = req.body

  const reviews = new Reviews({
    fullName,
    email,
    avatar,
    rate,
    text,
    userId: id
  })
  await reviews.save()
}
module.exports.verefy = async (req, res) => {
  const secret = process.env.googleSecret
  try {
    await axios({
      method: 'POST',
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${req.body.token}`
    }).then((result) => {
      if (result.data.success === true) {
        return res.json(result.data)
      }
    })
  } catch (e) {
    return res.json(e)
  }
}
