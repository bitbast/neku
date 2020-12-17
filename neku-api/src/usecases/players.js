const Players = require('../models/players')

function getAll () {
  return Players.find().limit(5)
}

function getById (id) {
  return Players.findById(id)
}

function deleteById (id) {
  return Players.findByIdAndDelete(id)
}

function updateById (id, newPlayerData) {
  return Players.findByIdAndUpdate(id, newPlayerData, { useFindAndModify: false })
}

function getPlayersByTeamId (teamId) {
  return Players.find({ team: teamId })
}

function getPlayersByGameId (gameId) {
  return Players.find({ gameName: gameId })
}

function create (playerData) {
  return Players.create(playerData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
  getPlayersByTeamId,
  getPlayersByGameId
}
