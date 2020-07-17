const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const User = require('../model/user.model')
const salt = bcrypt.genSaltSync(10)
module.exports.auth = async (req, res) => {
  const { email, password } = req.body
  const candidat = await User.findOne({ email })
  if (candidat) {
    bcrypt.compare(password, candidat.password, function(err, result) {
      if (err) {
        return res.status(401)
      }
      const token = jsonwebtoken.sign(
        {
          email,
          id: candidat._id,
          admin: candidat.isAdmin
        },
        process.env.jwtsecret,
        { expiresIn: 60 * 60 * 1000 }
      )
      return res.json({ token })
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Електрона пошта ведена не вірно або пароль.' })
  }
}
module.exports.create = async (req, res) => {
  const { email, password } = req.body
  const candidat = await User.findOne({ email })
  if (candidat) {
    res.status(409).json({
      message: 'Користувач з електроною поштою, уже зареєстрований був раніше.'
    })
  } else {
    const user = new User({
      email,
      password: bcrypt.hashSync(password, salt)
    })
    await user.save()
    return res.status(201).json(user)
  }
}
module.exports.user = (req, res, next) => res.json({ user: req.user })
