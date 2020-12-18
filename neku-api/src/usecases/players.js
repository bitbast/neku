const Players = require('../models/players')

function getAll () {
  return Players.find()
}

function getById (id) {
  return Players.findById(id)
}

function getFour (id) {
  return Players.find().limit(5)
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
  getFour,
  create,
  deleteById,
  updateById,
  getPlayersByTeamId,
  getPlayersByGameId
}
