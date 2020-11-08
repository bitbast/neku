const express = require('express')
const newsRouter = require('./routes/news')

const app = express()

app.use(express.json())

app.use('/news', newsRouter)

app.get('/', (request, response) => {
  response.json({
    sucees: true,
    message: 'Neku APIv1'
  })
})

module.exports = app
