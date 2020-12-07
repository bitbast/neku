const Articles = require('../models/news')

function getAll () {
  return Articles.find()
}

function getById (id) {
  return Articles.findById(id)
}

function deleteById (id) {
  return Articles.findByIdAndDelete(id)
}

function updateById (id, newArticleData) {
  return Articles.findByIdAndUpdate(id, newArticleData, { useFindAndModify: false })
}

function create (articleData) {
  return Articles.create(articleData)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}
