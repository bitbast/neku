const mongoose = require('mongoose')

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
    required: true,
    minlength: 2
  },
  game: {
    type: String,
    required: true,
    minlength: 2
  },
  country: {
    type: String,
    required: true,
    minlength: 2
  },
  countryFlag: {
    type: String,
    required: true,
    minlength: 2
  },
  format: {
    type: String,
    required: true,
    minlength: 2
  },
  gameGenre: {
    type: String,
    required: true,
    minlength: 2
  },
  date: {
    type: String,
    required: true,
    minlength: 2
  },
  winner: {
    type: String,
    required: true,
    minlength: 2
  },
  winnerTeam: {
    type: String,
    required: true,
    minlength: 2
  },
  picture: {
    type: String,
    required: true,
    minlength: 2
  }
})

module.exports = mongoose.model('tournaments', tournamentSchema)
