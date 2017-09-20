const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign({ user: user }, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

exports.register = async (req, res) => {
  // const inc = {
  //   email: req.body.email,
  //   password: await User.generateHash(req.body.password)
  // }
  // console.log(inc)
  try {
    let result = await User.create(req.body)
    result.password = await result.hash(result.password)
    result.save()
    res.status(200).json(result)
  } catch (err) {
    res.status(400).send({
      error: 'This email account is already in use'
    })
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      res.status(403).send({error: 'The login information was incorrect'})
    }

    const passwordIsValid = await user.comparePassword(req.body.password)
    console.log(passwordIsValid)

    if (!passwordIsValid) {
      res.status(403).send({error: 'The login information was incorrect'})
    }

    const data = {
      user: user,
      token: jwtSignUser(user)
    }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send({
      error: 'Server error'
    })
  }
}
