const Games = require('../models/games')

function getAll () {
  return Games.find()
}

function getById (id) {
  return Games.findById(id)
}

function getTeamByGameId (gameId) {
  return Games.find({ gameName: gameId })
}

function deleteById (id) {
  return Games.findByIdAndDelete(id)
}

function updateById (id, newGameData) {
  return Games.findByIdAndUpdate(id, newGameData, { useFindAndModify: false })
}

function create (gameData) {
  return Games.create(gameData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
  getTeamByGameId
}
