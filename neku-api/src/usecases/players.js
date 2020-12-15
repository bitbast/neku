const Players = require('../models/players')

function getAll () {
  return Players.find().limit(4)
}

function getById (id) {
  return Players.findById(id)
}

function deleteById (id) {
  return Players.findByIdAndDelete(id)
}

function updateById (id, newTeamData) {
  return Players.findByIdAndUpdate(id, newTeamData, { useFindAndModify: false })
}

function getPlayersByTeamId (teamId) {
  return Players.find({ team: teamId })
}

function create (teamData) {
  return Players.create(teamData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
  getPlayersByTeamId
}
