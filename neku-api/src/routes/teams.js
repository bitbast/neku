const express = require('express')
const teams = require('../models/teams')

const tournaments = require('../usecases/teams')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allTeams = await tournaments.getAll()

    response.json({
      success: true,
      message: 'All Teams',
      data: {
        tournament: allTeams
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
      teamName,
      teamCountry,
      teamLogo,
      members
    } = request.body

    if (!teamName) throw new Error('Team Name is required')
    if (teamCountry) throw new Error('Team County is required')
    if (!teamLogo) throw new Error('Logo is required')

    const newTeam = await teams.create({ teamName, teamCountry, teamLogo, members })
    response.json({
      success: true,
      message: 'Team created',
      data: {
        team: newTeam
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
    const deletedTeam = await teams.deleteById(id)
    response.json({
      sucess: true,
      message: 'Team deleted',
      data: {
        team: deletedTeam
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
    const newDataTeam = request.body
    const teamUpdated = await teams.updateById(id, newDataTeam)
    response.json({
      succes: true,
      message: 'Team updated',
      data: {
        team: teamUpdated
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
