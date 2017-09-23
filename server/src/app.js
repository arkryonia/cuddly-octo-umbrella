const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const config = require('./config/config')
const port = process.env.PORT || 8081

config.db()
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/User')(app)
require('./routes/Song')(app)

app.listen(port, () => {
  console.log('Server is running on', port)
})
