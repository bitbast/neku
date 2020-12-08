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
  motherLastname: {
    type: String,
    required: false,
    minlength: 2
  },
  nickName: {
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
  gamesPlayed: {
    type: Array,
    game: {
      type: Object,
      gameName: {
        type: String,
        required: true,
        minlength: 2
      },
      wonGames: {
        type: Number,
        required: true,
        minlength: 2
      },
      loseGames: {
        type: Number,
        required: true,
        minlength: 2
      },
      timePlayed: {
        type: Date,
        required: true,
        minlength: 2
      },
      avgMatchTime: {
        type: Date,
        required: true,
        minlength: 2
      },
      kills: {
        type: Number,
        required: true,
        minlength: 2
      },
      deaths: {
        type: Number,
        required: true,
        minlength: 2
      },
      KD: {
        type: Number,
        required: true,
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
      ranking: {
        type: Number,
        required: true,
        minlength: 2
      },
      tournamentDate: {
        type: Date,
        required: true,
        minlength: 2
      },
      tournamentEndHour: {
        type: Date,
        required: true,
        minlength: 2
      },
      tournamentKD: {
        type: Number,
        required: true,
        minlength: 2
      },
      tournamentScore: {
        type: Number,
        required: true,
        minlength: 2
      }
    }
  }
})

module.exports = mongoose.model('players', playersSchema)
