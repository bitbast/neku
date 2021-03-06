const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  caption: {
    type: String,
    required: true,
    minlength: 2
  },
  picture: {
    type: String,
    required: true,
    minlength: 2
  },
  publisher: {
    type: String,
    required: true,
    minlength: 2
  },
  source: {
    type: String,
    required: true,
    minlength: 2
  },
  date: {
    type: String,
    required: true,
    minlength: 2
  }
})

module.exports = mongoose.model('articles', articleSchema)

// Acceso a DB
// mongodb+srv://LuisFernandoGomezMorin:sn7IsPipktgYGjrD@kodemia-bootcamp.frxxh.mongodb.net/neku
