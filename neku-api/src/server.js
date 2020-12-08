const express = require('express')
const cors = require('cors')
const newsRouter = require('./routes/news')
const tournamentsRouter = require('./routes/tournaments')
const teamsRouter = require('./routes/teams')
const playersRouter = require('./routes/players')

const app = express()
app.use(cors())

app.use(express.json())

app.use('/news', newsRouter)
app.use('/tournaments', tournamentsRouter)
app.use('/teams', teamsRouter)
app.use('/players', playersRouter)

app.get('/', (request, response) => {
  response.json({
    sucees: true,
    message: 'Neku APIv1'
  })
})

module.exports = app
