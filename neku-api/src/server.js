const express = require('express')
const newsRouter = require('./routes/news')
const tournamentsRouter = require('./routes/tournaments')

const app = express()

app.use(express.json())

app.use('/news', newsRouter)
app.use('/tournaments', tournamentsRouter)

app.get('/', (request, response) => {
  response.json({
    sucees: true,
    message: 'Neku APIv1'
  })
})

module.exports = app
