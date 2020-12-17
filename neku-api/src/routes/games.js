const express = require('express')

const games = require('../usecases/games')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allGames = await games.getAll()

    response.json({
      success: true,
      message: 'All Games',
      data: {
        game: allGames
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

router.get('/:gameId', async (request, response) => {
  try {
    const singleGame = await games.getGameByGameId(request.params.gameId)

    response.json({
      success: true,
      message: 'Single Game',
      data: {
        game: singleGame
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
      gameName,
      gameLogo
    } = request.body

    if (!gameName) throw new Error('Game Name is required')
    if (!gameLogo) throw new Error('Logo is required')

    const newGame = await games.create({ gameName, gameLogo })
    response.json({
      success: true,
      message: 'Game created',
      data: {
        game: newGame
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
    const deletedGame = await games.deleteById(id)
    response.json({
      sucess: true,
      message: 'Game deleted',
      data: {
        game: deletedGame
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
    const newDataGame = request.body
    const gameUpdated = await games.updateById(id, newDataGame)
    response.json({
      succes: true,
      message: 'Game updated',
      data: {
        game: gameUpdated
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
