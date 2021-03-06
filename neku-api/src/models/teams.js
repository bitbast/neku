const mongoose = require('mongoose')

const teamsSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    minlength: 2
  },
  teamCountry: {
    type: String,
    minlength: 2
  },
  teamLogo: {
    type: String,
    required: true,
    minlength: 2
  }
})

module.exports = mongoose.model('teams', teamsSchema)

// Acceso a DB
// mongodb+srv://LuisFernandoGomezMorin:sn7IsPipktgYGjrD@kodemia-bootcamp.frxxh.mongodb.net/neku
