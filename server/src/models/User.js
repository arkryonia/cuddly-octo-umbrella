const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {type: String, unique: true},
  password: {type: String}
})

/*eslint-disable */
// UserSchema.pre('save', (done) => {
//   let user = this
//   if (!user.isModified('password')) return done()
//   const hash = bcrypt.hashSync(this.password)
//   user.password = hash
//   console.log(this.password)
//   return done()
// })

UserSchema.methods.hash = function (password) {
  return bcrypt.hashSync(password)
}

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

/*eslint-enable */

var User = mongoose.model('User', UserSchema)

module.exports = User
