const Song = require('../models/Song')

exports.index = async (req, res) => {
  try {
    const songs = await Song.find()
    res.status(200).json(songs)
  } catch (err) {
    res.status(404).send('Data not found : ', err)
  }
}

exports.create = async (req, res) => {
  try {
    const song = await Song.create(req.body)
    res.status(200).json(song)
  } catch (err) {
    res.status(500).send('Not created : ', err)
  }
}
