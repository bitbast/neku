const express = require('express')

const tournaments = require('../usecases/tournaments')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allTournaments = await tournaments.getAll()

    response.json({
      success: true,
      message: 'All Tournaments',
      data: {
        tournament: allTournaments
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const {
      tournamentName,
      game,
      country,
      countryFlag,
      format,
      gameGenre,
      date,
      time,
      winner,
      winnerTeam,
      picture
    } = request.body

    if (!tournamentName) throw new Error('Tournament Name is required')
    if (!game) throw new Error('Game is required')
    if (!country) throw new Error('Country is required')
    if (!countryFlag) throw new Error('Country flag is required')
    if (!format) throw new Error('format is required')
    if (!gameGenre) throw new Error('Game genre is required')
    if (!date) throw new Error('Date is required')
    if (!time) throw new Error('Time is required')
    if (!winner) throw new Error('Winner is required')
    if (!winnerTeam) throw new Error('Winner Team is required')
    if (!picture) throw new Error('Picture is required')

    const newTournament = await tournaments.create({ tournamentName, game, country, countryFlag, format, gameGenre, date, time, winner, winnerTeam, picture })
    response.json({
      success: true,
      message: 'Tournament created',
      data: {
        tournament: newTournament
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deletedTournament = await tournaments.deleteById(id)
    response.json({
      sucess: true,
      message: 'Tournament deleted',
      data: {
        tournament: deletedTournament
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataTournament = request.body
    const tournamentUpdated = await tournaments.updateById(id, newDataTournament)
    response.json({
      succes: true,
      message: 'Tournament updated',
      data: {
        tournament: tournamentUpdated
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

module.exports = router
