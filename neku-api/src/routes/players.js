const express = require('express')

const players = require('../usecases/players')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allPlayers = await players.getAll()

    response.json({
      success: true,
      message: 'All Players',
      data: {
        team: allPlayers
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:teamId', async (request, response) => {
  try {
    const teamPlayers = await players.getPlayersByTeamId(request.params.teamId)

    response.json({
      success: true,
      message: 'Team Players',
      data: {
        team: teamPlayers
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/id/:id', async (request, response) => {
  try {
    const singlePlayer = await players.getById(request.params.id)

    response.json({
      success: true,
      message: 'Single Players',
      data: {
        team: singlePlayer
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const {
      name,
      fatherLastname,
      motherLastname,
      nickname,
      gamerPicture,
      gamerProfile,
      team,
      country,
      email,
      totalMatches,
      winPercentage,
      ranking,
      teamLogo,
      countryLogo,
      gameTime,
      gamesPlayed,
      tournamentsPlayed
    } = request.body

    // if (!name) throw new Error('Gamer Name is required')
    // if (!fatherLastname) throw new Error('Father Lastname is required')
    // if (!motherLastname) throw new Error('Mother Lastname is required')
    // if (!nickname) throw new Error('Nickname is required')
    // if (!gamerPicture) throw new Error('GamerPicture is required')
    // if (!team) throw new Error('Team is required')
    // if (!country) throw new Error('Country is required')
    // if (!email) throw new Error('Email is required')
    // if (!totalMatches) throw new Error('TotalMatches is required')
    // if (!winPercentage) throw new Error('Win Percentae is required')
    // if (!ranking) throw new Error('Ranking is required')
    // if (!teamLogo) throw new Error('Team Logo is required')
    // if (!countryLogo) throw new Error('Country Logo is required')
    // if (!gameTime) throw new Error('Game Time is required')
    // if (!gamesPlayed) throw new Error('Games Played is required')
    // if (!tournamentsPlayed) throw new Error('Tournaments Played is required')

    const newPlayer = await players.create({
      name,
      fatherLastname,
      motherLastname,
      nickname,
      gamerPicture,
      gamerProfile,
      team,
      country,
      email,
      totalMatches,
      winPercentage,
      ranking,
      teamLogo,
      countryLogo,
      gameTime,
      gamesPlayed,
      tournamentsPlayed
    })
    response.json({
      success: true,
      message: 'Player created',
      data: {
        team: newPlayer
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deletedPlayer = await players.deleteById(id)
    response.json({
      success: true,
      message: 'Player deleted',
      data: {
        team: deletedPlayer
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataPlayer = request.body
    const playerUpdated = await players.updateById(id, newDataPlayer)
    response.json({
      success: true,
      message: 'Player updated',
      data: {
        team: playerUpdated
      }
    })
  } catch (error) {
    response.status(404)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
