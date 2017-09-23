const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {type: String, unique: true},
  password: {type: String}
})

/*eslint-disable */

UserSchema.methods.hash = function (password) {
  return bcrypt.hashSync(password)
}

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

/*eslint-enable */

var User = mongoose.model('User', UserSchema)

module.exports = User
