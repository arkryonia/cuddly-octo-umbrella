const mongoose = require('mongoose')
// const bcrypt = require('bcrypt-nodejs')

mongoose.Promise = require('bluebird')
const Schema = mongoose.Schema

const SongSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  albumImageUrl: String,
  youtubeId: String,
  lyrics: String,
  tab: String
})

module.exports = mongoose.model('Song', SongSchema)
