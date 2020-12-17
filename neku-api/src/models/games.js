const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
    minlength: 2
  },
  gameLogo: {
    type: String,
    required: true,
    minlength: 2
  }
})

module.exports = mongoose.model('games', gamesSchema)
