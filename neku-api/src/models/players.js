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
    required: false,
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
  email: {
    type: String,
    required: true
  },
  totalMatches: {
    type: String,
    required: false
  },
  winPercentage: {
    type: Number,
    required: false
  },
  ranking: {
    type: String,
    required: false
  },
  teamLogo: {
    type: String,
    required: false
  },
  countryLogo: {
    type: String,
    required: false
  },
  gameTime: {
    type: Number,
    required: false
  },
  gamesPlayed: {
    type: Array,
    game: {
      type: Object,
      gameName: {
        type: String,
        required: false,
        minlength: 2
      },
      gameLogo: {
        type: String,
        required: false
      },
      points: {
        type: Number,
        required: false,
        minlength: 2
      },
      earnings: {
        type: Number,
        required: false,
        minlength: 2
      },
      wonGames: {
        type: Number,
        required: false,
        minlength: 2
      },
      lostGames: {
        type: Number,
        required: false,
        minlength: 2
      },
      timePlayed: {
        type: Number,
        required: false,
        minlength: 2
      },
      avgMatchTime: {
        type: Number,
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
        type: Number,
        required: false,
        minlength: 2
      },
      totalEvents: {
        type: Number,
        required: false,
        minlength: 2
      }
    }
  },
  tournamentsPlayed: {
    type: Array,
    tournament: {
      type: Object,
      tournamentGameName: {
        type: String,
        required: false,
        minlength: 2
      },
      tournamentPicture: {
        type: String,
        required: false
      },
      ranking: {
        type: Number,
        required: false,
        minlength: 2
      },
      tournamentDate: {
        type: Date,
        required: false,
        minlength: 2
      },
      tournamentTotalTime: {
        type: Number,
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
  },
  socialMedia: {
    type: Array,
    socialMediaName: {
      type: String,
      minlength: 2
    }
  }
})

module.exports = mongoose.model('players', playersSchema)

// Acceso a DB
// mongodb+srv://LuisFernandoGomezMorin:sn7IsPipktgYGjrD@kodemia-bootcamp.frxxh.mongodb.net/neku
