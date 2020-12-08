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

function updateById (id, newTeamData) {
  return Teams.findByIdAndUpdate(id, newTeamData, { useFindAndModify: false })
}

function create (teamData) {
  return Teams.create(teamData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
