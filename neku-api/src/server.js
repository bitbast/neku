const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    sucees: true,
    message: 'Neku APIv1'
  })
})

module.exports = app
