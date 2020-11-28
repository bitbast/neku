const Teams = require('../models/teams')

function getAll () {
  return Teams.find()
}

function getById (id) {
  return Teams.findById(id)
}

function deleteById (id) {
  return Teams.findByIdAndDelete(id)
}

function updateById (id, newTournamentData) {
  return Teams.findByIdAndUpdate(id, newTournamentData, { useFindAndModify: false })
}

function create (tournamentData) {
  return Teams.create(tournamentData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
