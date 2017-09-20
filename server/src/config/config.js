const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const dbname = process.env.DB_NAME || 'umbrella'
const uri = `mongodb://localhost/${dbname}`
const options = {
  useMongoClient: true
}

module.exports = {
  db: function () {
    mongoose.connect(uri, options, () => {
      console.log('MongoDB is up. Have it fun!')
    })
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
