const fs = require('fs')
const cloudinary = require('cloudinary').v2
require('dotenv').config()
module.exports.create = (req, res) => {
  const { title, description, tickets, uload } = req.body
}
module.exports.foto = async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.cloud_name,
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
