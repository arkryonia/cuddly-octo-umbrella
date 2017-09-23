const SongController = require('../controllers/SongController')
// const SongControllerPolicy = require('../policies/SongControllerPolicy')

module.exports = (app) => {
  app.get('/songs', SongController.index)
  app.post('/songs', SongController.create)
}
