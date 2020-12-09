const mongoose = require('mongoose')

const playersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  fatherLastname: {
    type: String,
    required: true,
    minlength: 2
  },
  motherLastName: {
    type: String,
    required: false,
    minlength: 2
  },
  nickname: {
    type: String,
    required: false,
    minlength: 2
  },
  gamerPicture: {
    type: String,
    required: true,
    minlength: 2
  },
  gamerProfile: {
    type: String,
    required: true,
    minlength: 2
  },
  team: {
    type: String,
    required: true,
    minlength: 2
  },
  country: {
    type: String,
    required: false
  },
  gamesPlayed: {
    type: Array,
    game: {
      type: Object,
      gameName: {
        type: String,
        required: true,
        minlength: 2
      },
      points: {
        type: Number,
        required: true,
        minlength: 2
      },
      earnings: {
        type: Number,
        required: true,
        minlength: 2
      },
      timePlayed: {
        type: Date,
        required: false,
        minlength: 2
      },
      avgMatchTime: {
        type: Date,
        required: false,
        minlength: 2
      },
      kills: {
        type: Number,
        required: false,
        minlength: 2
      },
      deaths: {
        type: Number,
        required: false,
        minlength: 2
      },
      KD: {
        type: Number,
        required: false,
        minlength: 2
      },
      score: {
        type: String,
        required: true,
        minlength: 2
      }
    }
  },
  tournamentsPlayed: {
    type: Array,
    tournament: {
      type: Object,
      tournamentName: {
        type: String,
        required: true,
        minlength: 2
      },
      totalEvents: {
        type: Number,
        required: true
      },
      ranking: {
        type: Number,
        required: true,
        minlength: 2
      },
      tournamentDate: {
        type: Date,
        required: false,
        minlength: 2
      },
      tournamentEndHour: {
        type: Date,
        required: false,
        minlength: 2
      },
      tournamentKD: {
        type: Number,
        required: false,
        minlength: 2
      },
      tournamentScore: {
        type: Number,
        required: false,
        minlength: 2
      }
    }
  }
})

module.exports = mongoose.model('players', playersSchema)

// Acceso a DB
// mongodb+srv://LuisFernandoGomezMorin:sn7IsPipktgYGjrD@kodemia-bootcamp.frxxh.mongodb.net/neku
