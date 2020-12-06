const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  bodytext: {
    type: String,
    required: true,
    minlength: 2
  },
  picture: {
    type: String,
    required: true,
    minlength: 2
  },
  author: {
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
