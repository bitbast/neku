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
      succes: false,
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
      succes: false,
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
      nickName,
      gamerPicture,
      gamerProfile,
      team,
      gamesPlayed,
      tournamentsPlayed
    } = request.body

    if (!name) throw new Error('Team Name is required')
    if (!motherLastname) throw new Error('Team Country is required')
    if (!fatherLastname) throw new Error('Logo is required')
    if (!nickName) throw new Error('Logo is required')
    if (!gamerPicture) throw new Error('Logo is required')
    if (!gamerProfile) throw new Error('Logo is required')
    if (!team) throw new Error('Logo is required')
    if (!gamesPlayed) throw new Error('Logo is required')
    if (!tournamentsPlayed) throw new Error('Logo is required')

    const newPlayer = await players.create({
      name,
      fatherLastname,
      motherLastname,
      nickName,
      gamerPicture,
      gamerProfile,
      team,
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
      succes: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deletedPlayer = await players.deleteById(id)
    response.json({
      sucess: true,
      message: 'Team deleted',
      data: {
        team: deletedPlayer
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
    const newDataPlayer = request.body
    const playerUpdated = await players.updateById(id, newDataPlayer)
    response.json({
      succes: true,
      message: 'Player updated',
      data: {
        team: playerUpdated
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
