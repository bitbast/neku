const Tournaments = require('../models/tournaments')

function getAll () {
  return Tournaments.find()
}

function getById (id) {
  return Tournaments.findById(id)
}

function deleteById (id) {
  return Tournaments.findByIdAndDelete(id)
}

function updateById (id, newTournamentData) {
  return Tournaments.findByIdAndUpdate(id, newTournamentData, { useFindAndModify: false })
}

function create (tournamentData) {
  return Tournaments.create(tournamentData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
