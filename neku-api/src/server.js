const express = require('express')
const newsRouter = require('./routes/news')
const tournamentsRouter = require('./routes/tournaments')
const teamsRouter = require('./routes/teams')

const app = express()

app.use(express.json())

app.use('/news', newsRouter)
app.use('/tournaments', tournamentsRouter)
app.use('/teams', teamsRouter)

app.get('/', (request, response) => {
  response.json({
    sucees: true,
    message: 'Neku APIv1'
  })
})

module.exports = app
